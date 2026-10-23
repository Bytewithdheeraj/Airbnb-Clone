const Listing = require("../models/listing");
const axios = require("axios");

// Geocode helper
const geocode = async (location, country) => {
    const query = encodeURIComponent(`${location}, ${country}`);
    const url = `https://api.geoapify.com/v1/geocode/search?text=${query}&apiKey=${process.env.GEOAPIFY_API_KEY}`;

    const res = await axios.get(url);
    const data = res.data;

    if (data.features && data.features.length) {
        return data.features[0].geometry.coordinates;
    }
    return null;
};

// Index - Show all listings (filtered by category or search if provided)
module.exports.index = async (req, res) => {
    const { category, search } = req.query;
    let allListings;
    let activeCategory = category || null;

    if (category) {
        allListings = await Listing.find({ category });
    } else if (search && search.trim() !== "") {
        const searchTerms = search.split(",").map((term) => term.trim()).filter(Boolean);
        const escapedTerms = searchTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        allListings = await Listing.find({
            $or: escapedTerms.flatMap((term) => {
                const regex = new RegExp(term, "i");
                return [
                    { title: regex },
                    { location: regex },
                    { country: regex },
                    { category: regex },
                    { state: regex }
                ];
            })
        });
    } else {
        allListings = await Listing.find({});
    }

    res.render("listings/index.ejs", { allListings, activeCategory, search });
};

// New - Render new listing form
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

// Show - Show a single listing
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
};

// Create - Create a new listing
module.exports.createListing = async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;

    // Save Cloudinary image
    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
    }

    // Geocode and store coordinates
    const coordinates = await geocode(newListing.location, newListing.country);
    if (coordinates) {
        newListing.geometry = {
            type: "Point",
            coordinates,
        };
    }

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect(`/listings/${newListing._id}`);
};

// Edit - Render edit form
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    res.render("listings/edit.ejs", { listing });
};

// Update - Update a listing
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true, runValidators: true }
    );

    // Update Cloudinary image only if a new file was uploaded
    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
    }

    // Geocode updated location
    const coordinates = await geocode(listing.location, listing.country);
    if (coordinates) {
        listing.geometry = {
            type: "Point",
            coordinates,
        };
    }

    await listing.save();
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

// Delete - Delete a listing
module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);

    if (!deletedListing) {
        req.flash("error", "Listing Not Found");
        return res.redirect("/listings");
    }

    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};

// Get distinct countries/locations for the filter popup
module.exports.getDestinations = async (req, res) => {
    const countries = await Listing.distinct("country");
    const locations = await Listing.distinct("location");
    res.json({
        countries: countries.sort(),
        locations: locations.sort()
    });
};
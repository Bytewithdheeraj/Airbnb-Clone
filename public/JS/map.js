if (mapCoordinates && mapCoordinates.length === 2) {
    const [lng, lat] = mapCoordinates;

    const map = L.map("map").setView([lat, lng], 13);

    L.tileLayer(`https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${mapApiKey}`, {
        attribution: '© <a href="https://www.geoapify.com/">Geoapify</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 20,
    }).addTo(map);

    // Custom Airbnb-style icon
    const customIcon = L.divIcon({
        className: "",
        html: `
            <div style="position: relative; width: 80px; height: 80px;">
                <div style="
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 80px; height: 80px;
                    background: rgba(255, 56, 92, 0.2);
                    border-radius: 50%;
                "></div>
                <div style="
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 36px; height: 36px;
                    background: #FF385C;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                ">
                    <img src="/Assets/airbnb.png" style="width: 20px; height: 20px;" />
                </div>
            </div>
        `,
        iconSize: [80, 80],
        iconAnchor: [40, 40],
        popupAnchor: [0, -40],
    });

    L.marker([lat, lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(`
            <div style="
                font-family: -apple-system, sans-serif;
                font-size: 14px;
                font-weight: 500;
                padding: 4px 8px;
                white-space: nowrap;
            ">
                Exact location provided after booking.
            </div>
        `, {
            closeButton: false,
            className: "custom-popup"
        })
        .openPopup();

} else {
    document.getElementById("map").innerHTML = "<p class='text-muted p-3'>Map not available for this location.</p>";
}
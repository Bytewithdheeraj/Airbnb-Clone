(() => {
    const imageIds = [
        "photo-1566073771259-6a8506099945",
        "photo-1520250497591-112f2f40a3f4",
        "photo-1501785888041-af3ef285b470",
        "photo-1510798831971-661eb04b3739",
        "photo-1519046904884-53103b34b206",
        "photo-1505693416388-ac5ce068fe85",
        "photo-1499793983690-e29da59ef1c2",
        "photo-1449158743715-0a90ebb6d2d8",
        "photo-1464822759023-fed622ff2c3b",
        "photo-1470770841072-f978cf4d019e",
        "photo-1502672260266-1c1ef2d93688"
    ];

    const handleImageError = (image) => {
        const attempt = Number(image.dataset.fallbackAttempt || 0);
        if (attempt < imageIds.length) {
            const offset = Number(image.dataset.imageIndex || 0);
            const imageId = imageIds[(offset + attempt) % imageIds.length];
            image.dataset.fallbackAttempt = String(attempt + 1);
            image.src = `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=800&q=80`;
        } else if (image.dataset.fallbackDone !== "true") {
            image.dataset.fallbackDone = "true";
            image.src = "/images/listing-placeholder.svg";
        }
    };

    document.querySelectorAll("img[data-image-fallback]").forEach((image) => {
        image.addEventListener("error", () => handleImageError(image));
        if (image.complete && image.naturalWidth === 0) {
            handleImageError(image);
        }
    });
})();

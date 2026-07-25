function previewImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const newPreview = document.getElementById("newPreview");
    const newPreviewContainer = document.getElementById("newPreviewContainer");

    newPreview.src = URL.createObjectURL(file);
    newPreviewContainer.style.display = "block";
}
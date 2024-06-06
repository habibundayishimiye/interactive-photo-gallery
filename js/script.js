document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const images = [
        { src: 'path/to/photo1.jpg', details: 'Details about Photo 1' },
        { src: 'path/to/photo2.jpg', details: 'Details about Photo 2' },
        { src: 'path/to/photo3.jpg', details: 'Details about Photo 3' },
        // Add more image objects as needed
    ];

    // Function to create photo elements
    function createPhotoElement(image) {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = 'Photo';
        photoDiv.appendChild(imgElement);

        const hoverDiv = document.createElement('div');
        hoverDiv.className = 'hover-details';
        hoverDiv.textContent = image.details;
        photoDiv.appendChild(hoverDiv);

        // Event listener for full-size image viewing
        imgElement.addEventListener('click', () => {
            showFullSizeImage(image.src);
        });

        return photoDiv;
    }

    // Function to show full-size image
    function showFullSizeImage(src) {
        // Create full-size image overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        const fullSizeImg = document.createElement('img');
        fullSizeImg.src = src;
        fullSizeImg.className = 'full-size-image';
        overlay.appendChild(fullSizeImg);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.className = 'close-button';
        overlay.appendChild(closeButton);

        document.body.appendChild(overlay);

        // Event listener to close the full-size image
        closeButton.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    }

    // Add all photo elements to the gallery
    images.forEach(image => {
        const photoElement = createPhotoElement(image);
        gallery.appendChild(photoElement);
    });
});

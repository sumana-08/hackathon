document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.getElementById('image-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    let page = 1; 
    function fetchRandomImages() {
        const timestamp = new Date().getTime(); // Generate a timestamp
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=6&timestamp=${timestamp}`)
        .then(response => response.json())
        .then(data => {
            displayImages(data);
            page++; // Increment page number for the next request
        })
        .catch(error => console.error('Error fetching images:', error));
    }
    function displayImages(images) {
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.download_url;
            imgElement.alt = 'Random Image';
            imgElement.classList.add('image');
            imageContainer.appendChild(imgElement);
        });
    }
    loadMoreBtn.addEventListener('click',fetchRandomImages);
    fetchRandomImages();
});

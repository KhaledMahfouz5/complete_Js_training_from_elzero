document.querySelector('form').addEventListener('submit', function downloadImages(event, url) {
    event.preventDefault();

    // Get the input values
    var url = document.querySelector('input[name="project_page_url"]').value;
    var folder = document.querySelector('input[name="folder"]').value;

    // Perform your desired actions with the input values
    // For example, you can download the images using the URL and save them to the specified folder
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Set the response type to 'document' (HTML document)
    xhr.responseType = 'document';

    // Define the callback function for when the request is complete
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Get all the images with the specified class
            var images = xhr.response.querySelectorAll('.' + ImageElement - image - SRv + '.' + grid__item - image);

            // Loop through the images and download each one
            for (var i = 0; i < images.length; i++) {
                var image = images[i];

                // Create a new anchor element to download the image
                var link = document.createElement('a');
                link.href = image.src;
                link.download = 'image' + i + '.jpg';

                // Simulate a click on the anchor element to trigger the download
                link.click();
            }
        }
    };

    // Open a GET request to the URL
    xhr.open('GET', url, true);

    // Send the request
    xhr.send();
    // Reset the form
    document.querySelector('form').reset();
});
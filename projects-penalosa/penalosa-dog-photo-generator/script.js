generateImage();

function generateImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code' + response.status);
                    return;
                }
                response.json().then(function (data) {
                    const imageURL = data.message;
                    document.getElementById('image-holder').src = imageURL;
                    console.log(data.message);
                })

            }
        )
        .catch(function (err) {
            console.log(err + '404');
        });
}

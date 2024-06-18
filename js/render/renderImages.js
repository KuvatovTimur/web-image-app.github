const imageTemplateCreator = require('../templates/imageTemplate');
imageContainer = document.getElementById('image-container');

async function renderImages(personName, clientId) {
    for (const key of (await getImagesByPersonName(personName, clientId)).then(
        (image) => image.key
    )) {
        imageContainer.insertAdjacentHTML('beforeend', await imageTemplateCreator.createImageHTML(key));
    }
}


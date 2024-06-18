const s3Manager = require('../repository/s3Manager');

async function createImageHTML(key) {
    return '<div class="item">' +
        `<img src="data:image/jpeg;base64,${(await s3Manager.loadImageFromS3(key)).toString()}" alt="S3 Image" class="img">` +
        '<button class="btn" id="btn2">Add</button> ' +
        '</div>';
}

module.exports = {createImageHTML};



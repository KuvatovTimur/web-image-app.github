const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: S3_KEY_ID,
    secretAccessKey: S3_ACCESS_KEY,
    region: S3_REGION_NAME
});

async function loadImageFromS3(key) {
    const params = {
        Bucket: 'YOUR_BUCKET_NAME',
        Key: key
    };
    try {
        const data = await s3.getObject(params).promise();
        return data.Body.toString();
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = {loadImageFromS3};


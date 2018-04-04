var AWSXRay = require('aws-xray-sdk');

module.exports = AWSXRay.capturePostgres(require('pg'));

var AWSXRay = require('aws-xray-sdk');

module.exports = function(dialectModule) {
    return AWSXRay.capturePostgres(require('pg'));
};

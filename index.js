var AWSXRay = require('aws-xray-sdk');

if (process.env.AWS_PATH && process.env.AWS_XRAY_TRACING_NAME) {
  AWSXRay.config([AWSXRay.plugins.EC2Plugin, AWSXRay.plugins.ElasticBeanstalkPlugin]);
  module.exports = AWSXRay.capturePostgres(require('pg'));
} else {
  module.exports = require('pg');
}

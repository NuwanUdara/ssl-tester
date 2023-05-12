var aws = require('aws-sdk');
var db = new aws.DynamoDB({
  region: 'us-west-2',
  maxRetries: 1,
  accessKeyId: 'ASIAXISCRMT26P3W6ENC',
  secretAccessKey: 'FyTCOwrSVXMYaR0wvtS+/QwugJQSnlwPZrdz4Egy',
});

exports.handler = event => {
    return queryMyThings();
}

const queryMyThings = async (event) => { 
 var params = {
      Key: {
      "api": {
         S: "test1"
        }
      }, 
      TableName: "cert"
     };

    return await db.getItem(params).promise();

}
console.log(queryMyThings())
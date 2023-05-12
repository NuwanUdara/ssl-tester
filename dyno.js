// var aws = require('aws-sdk');
// var db = new aws.DynamoDB({
//   region: 'us-west-2',
//   maxRetries: 1,
//   accessKeyId: 'ASIAXISCRMT26P3W6ENC',
//   secretAccessKey: 'FyTCOwrSVXMYaR0wvtS+/QwugJQSnlwPZrdz4Egy',
// });

// const queryMyThings = async (event) => { 
//  var params = {
//       Key: {
//       "api": {
//          S: "test1"
//         }
//       }, 
//       TableName: "cert"
//      };

//     const data = await db.getItem(params).promise();

// }
// console.log(queryMyThings())

const AWS = require("aws-sdk")
AWS.config.update({ region: "us-west-2" })
const dynamoDB = new AWS.DynamoDB.DocumentClient()

dynamoDB
  .get({
    TableName: "certs",
    Key: {
      api: "test1",
    },
  })
  .promise()
  .then(data => console.log(data.Item))
  .catch(console.error)

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
  .then(data => console.log(data.Item.certi))
  .catch(console.error)

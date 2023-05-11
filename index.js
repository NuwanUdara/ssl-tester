const express = require('express');
const req = require('express/lib/request');
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!').statusCode(200);
})

app.get('/test', (req,res)=> {
    res.send('end point reached!').statusCode(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

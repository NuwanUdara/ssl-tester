const express = require('express');
const req = require('express/lib/request');
const app = express()
const port = 443

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
  console.log("got request /")
})

app.get('/test', (req,res)=> {
    res.status(200).send('end point reached!');
    console.log("got request /test")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

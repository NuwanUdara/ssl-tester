const express = require('express');
const req = require('express/lib/request');
const app = express()
const port = 443

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

app.get('/test', (req,res)=> {
    res.status(200).send('end point reached!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

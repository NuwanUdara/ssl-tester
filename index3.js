const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log("got a request")
  if (!req.client.authorized) {
    return res.status(401).send('Invalid client certificate authentication.');
  }

  return res.send('Hello, world!');
});

https
  .createServer(
    {
      // ...
      requestCert: true,
      rejectUnauthorized: false,
      ca: fs.readFileSync('apig-cert.pem'),
      // ...
    },
    app
  )
  .listen(80);
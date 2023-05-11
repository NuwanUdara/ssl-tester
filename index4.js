const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 443;

// Define routes
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
  console.log("got request /")
});

app.get('/test', (req, res) => {
  res.status(200).send('end point reached!');
  console.log("got request /test")
});

// Configure HTTPS server with client certificate authentication
const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),
  ca: fs.readFileSync('apig-cert.pem'),
  requestCert: true,
  rejectUnauthorized: false
};
const server = https.createServer(options, app);

// Start server
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
const express = require('express');
const { keystone, apps } = require('./index.js');
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('ssl/key.pem', 'utf8');
var certificate = fs.readFileSync('ssl/cert.pem', 'utf8');
var credentials = { key: privateKey, cert: certificate };
const greenlock = require('greenlock-express');

keystone
  .prepare({
    apps: apps,
    dev: process.env.NODE_ENV !== 'production',
  })
  .then(async ({ middlewares }) => {
    await keystone.connect();
    const app = express();

    app.use(middlewares);
    app.set('trust proxy', true);
    var httpServer = http.createServer(app);
    // var httpsServer = https.createServer(credentials, app);
    httpServer.listen(3000);
    // httpsServer.listen(8443);

    // greenlock
    //   .init({
    //     packageRoot: __dirname,

    //     // contact for security and critical bug notices
    //     configDir: './greenlock.d',

    //     // whether or not to run at cloudscale
    //     cluster: false,

    //     maintainerEmail: 'johnhornsby8@gmail.com',
    //   })
    //   .serve(app);
  });

'use strict'

const port = 8000

const express = require('express')
const exphbs = require('express-handlebars');
const server = express()

const webuiCreator = require('./ifs-web.js')
const webui = webuiCreator()

server.use(webui);
server.use(express.static(__dirname + '/public'));

server.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

server.set('view engine', 'hbs')

server.listen(port, () => {
  console.log(`IFS Web server listening at http://localhost:${port}`)
})
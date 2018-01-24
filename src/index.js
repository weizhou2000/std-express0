/*
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
*/

import ExpressSvr from './class/ExpressSvr'

let svr=new ExpressSvr();
svr.get('/',(q,s)=>s.send('h'));
svr.start(3000);
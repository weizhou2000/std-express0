/*
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
*/

import ExpressSvr from './class/ExpressSvr1'

//let svr=new ExpressSvr();
//svr.get('/',(q,s)=>s.send('h'));
//svr.start(3000);

ExpressSvr
.init()
.get('/',(q,s)=>s.send('h'))
.start(3000);


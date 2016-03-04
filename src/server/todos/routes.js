var mongoose = require('mongoose');
var Todo = require('server/db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.send('HELLO From /TODOs?')
});

router.post('/', function (req,res){
  console.log("did I even get here?");
  var todo = new Todo(req.body);
  todo.save(function(err) {
    if (err) { console.log("is this an error????");}
    console.log('Saved!!!!');
    res.send('SUCCESS!!');
  });
});

module.exports = router

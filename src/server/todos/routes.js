var mongoose = require('mongoose');
var Todo = require('server/db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  res.send('HELLO From /TODOs?')
});

router.post('/', function (req,res){
  var todo = new Todo(req.body);
  todo.save(function(err) {
    if (err) { console.log(err);}
    console.log('Saved!!!!');
    res.send('SUCCESS!!');
  });
});

module.exports = router

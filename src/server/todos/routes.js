var mongoose = require('mongoose');
var Todo = require('server/db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
  //get all results in our db for this schema
  Todo.find(function(err, results){
    if (err) { console.log(err); }
    res.send({todos: results})
  });
});

router.post('/', function (req,res){
  var todo = new Todo(req.body);
  todo.save(function(err) {
    if (err) { console.log(err);}
    res.send('ToDo Saved');
  });
});

//.put is the convention to update an item in an existing db
router.put('/:id', function(req,res) {
  var id = req.params.id;
  //finds the object in the db that matches the object send down from the client side
  Todo.update({_id: mongoose.Types.ObjectId(id)}, {
    //set the new task to the task sent down from the client side
    $set: {task: req.body.task}
  }, function (err) {
    if (err) { console.log(err);}
    res.send('ToDo updated');
  })
});

//delete a task
router.delete('/:id', function(req, res) {
    var id = req.params.id;
    //finds the object in the db that matches the object send down from the client side
    Todo.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) { console.log(err); }

        res.send('ToDo deleted');
    });
});


// router.delete('/:id', function(req,res) {
//   var id = req.params.id;
//   Todo.remove({_id: mongoose.Types.ObjectId(id)
//   }, function (err) {
//     if (err) { console.log("WHAT WENT WRONG?");}
//     console.log("HOw about here?????");
//     res.send('ToDo deleted');
//   })
// });

module.exports = router

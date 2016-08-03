var express = require('express');
var router = express.Router();
var models = require("./../models");
models.patties.sync();

router.get('/', function(req,res){
	res.redirect('/patties');
});

router.get('/patties', function(req,res){
	models.patties.findAll().then(function(result){
		object = {patties:result}
		res.render('index', object)
	});
});

// router.post('/burgers/create', function(req,res){
// 	patties.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(data){
// 			res.redirect('/burgers');
// 	});
// });

// router.put('/burgers/update/:id', function(req, res){
// 	var condition = "id = " + req.params.id;

// 	burger.updateOne({'devoured':req.body.devoured}, condition, function(data){
// 		res.redirect('/burgers');
// 	});
// });

module.exports = router;
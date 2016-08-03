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

router.post('/patties/create', function(req,res){
	models.patties.create({
		patty_name: req.body.patty_name,
		devoured: req.body.devoured
	}).then(function(){
		res.redirect('/patties');
	})
});

router.put('/patties/update/:id', function(req, res){
	models.patties.update({
		devoured: req.body.devoured
	},{
		where: {id: req.params.id}
	}).then(function(){
		res.redirect('/patties');
	});
});

module.exports = router;
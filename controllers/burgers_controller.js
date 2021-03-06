const express = require('express');
const router = express.Router();

const Burger = require('../models/burger.js');

router.get('/', function(req, res) {
    Burger.all(function(data) {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });
  
  router.post('/api/burgers', function(req, res) {
    console.log("route hit");
   //let devoured = 0;
    // if (req.body.devoured === 'true') {
    //   devoured = 1;
    // }

    Burger.create(
      ['burger', 'devoured'],
      [req.body.burger, 0],
      function(result) {
        console.log(result);
       
        res.json({ id: result.insertId });
      }
    )
  });
  
  router.put('/api/burgers/:id', function(req, res) {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    Burger.update(
      {
        devoured: req.body.devoured,
      },
      condition,
      function(result) {
        if (result.changedRows == 0) {
          
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  
  router.delete('/api/burgers/:id', function(req, res) {
    const condition = `id = ${req.params.id}`;
  
    Burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        
        return res.status(404).end();
      }
      res.status(200).end();
    });
  });


module.exports = router;

   



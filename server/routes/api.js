'use strict';
const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).send('Hello World!');
  })
  .post((req, res) => {
    console.log('in the correct route');
    res.status(201).send({ data: 'Posted!' });
  });

var code = [ {id: '1', text: 'Hello World'}, {id: '2', text: 'Hello AGAIN World'},
  {id: '3', text: 'Hello One More Time!'}
];

router.route('/code')
.get((req, res) => {
  console.log('GOT SOMETHING');
  res.status(200).send(code);
});

router.route('/users')
.get((req, res) => {
  console.log('GOT SOMETHING');
  res.status(200).send({name: 'Alexi', age: 22});
});



module.exports = router;

'use strict';
var trivia = require('../controllers/triviaController');

var express = require('express');
var router = express.Router();

router.route('/testing')
  .get(function(req, res) {
    console.log("asdfasdfasdf");
    res.json({sdf: "Sdf"});
  });

// get /trivia_by_vendor/:vendor_id
// response : (HOPEFULLY)
// {
//   trivia_id_1: {whole json},
//   trivia_id_2: {whole json},
//   .
//   .
//   .
// }
router.route('/trivia_by_vendor/:vendor_id')
  .get(trivia.get_all_by_vendor_id);



// post /trivia 
// DATA : 
// {
//   a: ,
//   b: ,  -----> just push all the parame here
//   vendor_id: , => required parameter ! important
// }
router.route('/trivia')
  .get(trivia.get_all)
  .post(trivia.create_a_trivia);

// get /trivia/:trivia_id => retrieves requested trivia

// put /trivia/:trivia_id => update trivia
// DATA : 
// {
//   trivia_id: <trivia_id>,
//   trivia: {
//     WHOLE JSON AS IN POST
//   }
// }   => I know this is not standard but please bare with me

// delete /trivia/:trivia_id => delete trivia 

router.route('/trivia/:trivia_id')
  .get(trivia.get_a_trivia)
  .put(trivia.update_a_trivia)
  .delete(trivia.delete_a_trivia);

module.exports = router;

'use strict';
module.exports = function(app) {
  var trivia = require('../controllers/triviaController');


  // get /trivia_by_vendor/:vendor_id
  // response : (HOPEFULLY)
  // {
  //   trivia_id_1: {whole json},
  //   trivia_id_2: {whole json},
  //   .
  //   .
  //   .
  // }
  app.route('/trivia_by_vendor/:vendor_id')
    .get(trivia.get_all_by_vendor_id)

  // post /trivia 
  // DATA : 
  // {
  //   a: ,
  //   b: ,  -----> just push all the parame here
  //   vendor_id: , => required parameter ! important
  // }
  app.route('/trivia')
    .post(trivia.create_a_trivia)

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

  app.route('/trivia/:trivia_id')
    .get(trivia.get_a_trivia)
    .put(trivia.update_a_trivia)
    .delete(trivia.delete_a_trivia);


  
};
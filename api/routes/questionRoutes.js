'use strict';
module.exports = function(app) {
  var question = require('../controllers/questionController');


  // get /questions_by_trivia/trivia_id
  // response : (HOPEFULLY)
  // {
  //   question_id_1: {whole json},
  //   question_id_2: {whole json},
  //   .
  //   .
  //   .
  // }
  app.route('/questions_by_trivia/:trivia_id')
    .get(question.get_all_by_trivia_id)

  // post /question 
  // DATA : 
  // {
  //   a: ,
  //   b: ,  -----> just push all the parame here
  //   vendor_id: , => required parameter ! important
  // }
  app.route('/question')
    .post(question.create_a_question)

  // get /question/:question_id => retrieves requested question
  
  // put /question/:question_id => update question
  // DATA : 
  // {
  //   question_id: <question_id>,
  //   question: {
  //     WHOLE JSON AS IN POST
  //   }
  // }   => I know this is not standard but please bare with me

  // delete /question/:question_id => delete question 

  app.route('/question/:question_id')
    .get(question.get_a_question)
    .put(question.update_a_question)
    .delete(question.delete_a_question);


  
};
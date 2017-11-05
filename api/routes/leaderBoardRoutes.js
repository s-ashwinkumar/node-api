'use strict';
module.exports = function(app) {
  var lboard = require('../controllers/leaderBoardController');

  // GET /leader_board/:trivia_id
  // response : 
  // {
  //   trivia_id: {
  //     user_id_1: {nickname: "asdf", score: 3},
  //     .
  //     .
  //     .
  //   }
  // }
  app.route('/leader_board/:trivia_id')
    .get(lboard.get_leader_board);

};
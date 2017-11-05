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

  // put /leader_board/:trivia_id => update leader_board
  // DATA : 
  // {
  //   trivia_id: <trivia_id>,
  //   leader_board: {
  //     WHOLE JSON AS IN POST
  //   }
  // }   => I know this is not standard but please bare with me
  app.route('/leader_board/:trivia_id')
    .get(lboard.get_leader_board);
    .put(lboard.update_leader_board)
};
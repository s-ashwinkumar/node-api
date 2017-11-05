'use strict';

var lboard = require('../controllers/leaderBoardController');

var express = require('express');
var router = express.Router();

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
router.route('/leader_board/:trivia_id')
  .get(lboard.get_leader_board)
  .put(lboard.update_leader_board);

module.exports = router;

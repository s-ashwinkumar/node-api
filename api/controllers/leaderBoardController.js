'use strict';
var db = require('../services/firestore.js').db;

exports.get_leader_board = function(req, res) {

  var lboard = db.collection('leader_board').doc(req.params.trivia_id);
  var getDoc = lboard.get()
    .then(doc => res.json(doc))
    .catch(err => {
      console.log('Error getting document', err);
    });  
};


exports.update_leader_board = function(req, res) {
  var update = db.collection('leader_board').doc(req.params.trivia_id).update(req.params.leader_board);
};
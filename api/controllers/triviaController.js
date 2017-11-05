'use strict';
var db = require('../service/firestore.js').db;

exports.get_all_by_vendor_id = function(req, res) {
  var trivias = db.collection('trivias');
  var query = trivias.where('vendor_id', '==', req.params.vendor_id).get()
    .then(snapshot => res.json(snapshot))
    .catch(err => {
      console.log('Error getting documents', err);
    });
};


exports.create_a_trivia = function(req, res) {
  var addDoc = db.collection('trivias').add(req.params.trivia)
    .then(ref => res.json({trivia_id: ref.id}))
    .catch(error_message => console.log(error_message));
};

exports.get_a_trivia = function(req, res) {
  var trivia = db.collection('cities').doc(req.params.trivia_id);
  var getDoc = trivia.get()
    .then(doc => res.json(doc))
    .catch(err => {
      console.log('Error getting document', err);
    });
};


exports.update_a_trivia = function(req, res) {
  var update = db.collection('trivias').doc(req.params.trivia_id).update(req.params.trivia);
};


exports.delete_a_trivia = function(req, res) {
  var deleteDoc = db.collection('trivias').doc(req.params.trivia_id).delete();
};

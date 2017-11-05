'use strict';
var db = require('../services/firestore.js').db;

exports.get_all_by_trivia_id = function(req, res) {
  var questions = db.collection('questions');
  var query = questions.where('trivia_id', '==', req.params.trivia_id).get()
    .then(snapshot => {
        var result = {};
        snapshot.forEach(doc => {
            result[doc.id] = doc.data();
            res.json(result);
        });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
};


exports.create_a_question = function(req, res) {
  var addDoc = db.collection('questions').add(req.params.question)
    .then(ref => res.json({question_id: ref.id}))
    .catch(error_message => console.log(error_message));
};

exports.get_a_question = function(req, res) {
  var question = db.collection('cities').doc(req.params.question_id);
  var getDoc = question.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
        res.status(404).send('Not found');
      } else {
        console.log('Document data:', doc.data());
        res.json(doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
};


exports.update_a_question = function(req, res) {
  var update = db.collection('questions').doc(req.params.question_id).update(req.params.question);
  res.json({question_id: req.params.question_id});
};


exports.delete_a_question = function(req, res) {
  var deleteDoc = db.collection('questions').doc(req.params.question_id).delete();
  res.json({question_id: req.params.question_id});
};

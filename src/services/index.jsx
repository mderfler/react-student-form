'use strict';
var Deferred = require('promised-io/promise').Deferred;

var students = [
  {
    "name": "Bob Gibson",
    "status": "active",
    "activity": "ahead",
    "id": 1
  }
]

var teachers = [
  {
    "name": "Dan Jones",
    "id": 1
  },
    {
    "name": "Jane Smith",
    "id": 2
  }
]

module.exports = {
  getStudents: function() {
    var deferred = new Deferred();
    deferred.resolve(students);
    return deferred.promise;
  },

   getTeachers: function() {

    var deferred = new Deferred();
    deferred.resolve(teachers);
    return deferred.promise;
  }
};
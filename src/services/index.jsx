'use strict';
var Deferred = require('promised-io/promise').Deferred;

var students = [
  {
    "name": "Bob Gibson",
    "status": "active",
    "id": 1,
    "teacher" : "Dan Jones"
  }
]

var activities = [
 'ahead','behind', 'ontrack'

]

var teachers = [
  {
    "name": "Dan Jones",
    "id": 1
  },
  {
    "name": "Dana Johnson",
    "id": 2
  }
]

var date = [
  {
    date: new Date()
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
  },

    getActivities: function() {
    var deferred = new Deferred();
    deferred.resolve(activities);
    return deferred.promise;
  },
    getDate: function() {
    var deferred = new Deferred();
    deferred.resolve(date);
    return deferred.promise;
  },
};
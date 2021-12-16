var app = angular.module('projects', []);

var data = [{
  name: 'ZAREAM',
  url: 'https://zaream.xyz/',
  description: 'A platform to cluster similar news together using web scrapping and ML. ',
}, {
  name: 'VANTAGE NEWS',
  url: 'https://drive.google.com/file/d/1kIjwYbFhYO2vYokmW19fV18VtPuKEWyO/view?usp=sharing',
  description: 'A mobile application of news made using Flutter.',
},];

var skills = [{
  name: 'JAVASCRIPT (MEAN STACK)',
  level: 85
}, {
  name: 'PHP (LAMP STACK)',
  level: 80
}, {
  name: 'DJANGO',
  level: 50
}, {
  name: 'c++, java, python',
  level: 70
},


];

var funs = [
  'Nodejs',
  'Angular',
  'MongoDb',
  'Python',
]

app.controller("project_controller", function ($scope) {
  $scope.projs = data;
  $scope.skill = skills;
  $scope.funs = funs;
});

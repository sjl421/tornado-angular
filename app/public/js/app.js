angular.module('html5app', [
        'ngRoute'
    ])
    .config(['$locationProvider', '$routeProvider', function config ($locationProvider, $routeProvider){
        //enabling HTML5 mode
        $locationProvider.html5Mode(true).hashPrefix('!');
        //setting up routes
        $routeProvider.when('/',{ templateUrl: '/views/demo/demo.html', controller: 'DemoController as home'});
    }]);

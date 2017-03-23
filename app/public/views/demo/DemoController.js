angular
  .module('html5app')
  .controller('DemoController', function($scope, $http) {

    //=============================================== VARIABLES ===================================================
    //set up the local reference
    var home = this;

    home.message = 'Hello world';
    home.json = '';

    //=============================================== METHODS ===================================================
    
    home.getJSON = function() {
      $http.post("/api/demo", 
        {term: 'hello from client!'}, 
        {headers: {'Content-Type': 'application/json'} })
        .then(function (response) {
          console.log(response);
          home.json = response.data;
          return response;
        });
    };
  });





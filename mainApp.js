(function() {
  'use strict';

  angular.module('mainModule', [])
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$http', 'API_KEY']
  function MainController($scope, $http, API_KEY) {

    $scope.doThings = function(){
      var sal = Number($scope.salary);
      var zipCode = $scope.zipCode;
      var arr = [];

      $http.get(`https://taxrates.api.avalara.com:443/postal?country=usa&postal=${zipCode}&apikey=${API_KEY}`)
      .then(function(res) {
        var rates = res.data.rates;
        for (var i = 0; i < rates.length; i+=1){
          arr.push(rates[i].rate)
        }
        var x = sal
        for(var i = 0; i < arr.length; i+=1) {
          var temp = (arr[i] * .01) * sal;
          x -= temp;
        }
        console.log(x);
      },

      function(err) {
        console.log('Something went Wrong');
      });
    }


  }


})();

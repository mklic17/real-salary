(function() {
  'use strict';

  angular.module('mainModule', [])
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$http', 'API_KEY']
  function MainController($scope, $http, API_KEY) {

    $scope.doThings = function(){

      var sal = $scope.salary;
      var state = $scope.state;
      var city = $scope.city
      var zipCode = $scope.zipCode;
      var arr = [];
      // debugger
      $http.get(`https://taxrates.api.avalara.com:443/postal?country=usa&postal=${zipCode}&apikey=${API_KEY}`)
      .then(function(res) {
        var rates = res.data.rates;
        console.log(rates);
        debugger
        for (var i = 0; i < rates.length; i+=1){
          arr.push(rates[i].rate)
        }
        console.log(arr);

      })

    }

  }


})();

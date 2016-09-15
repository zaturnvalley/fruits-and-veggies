/* setup your angular app here */
var fruitVeggieApp = angular.module('FruitVeggieApp', []);

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);


fruitVeggieApp.controller('FruitVeggieCtrl', ['$scope', function($scope) {
  $scope.fruitVegList = fruits.concat(vegetables);

}])
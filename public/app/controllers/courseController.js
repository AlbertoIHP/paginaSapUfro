
//Instancia de angular
var course = angular.module('mainModule');


//Se crea un controlador con su funcion callback
course.controller('courseController', ['$location','$scope','localStorageService', '$resource', courseController]);

//Se definen todos aquellos elemtentos que seran utilizados por el nodo del DOM que
//tenga la instancia de este controlador
function courseController($location, $scope, localStorageService, $resource)
{

  if(($scope.course = JSON.parse(localStorageService.get('currentCourse')))){

  }else if(!localStorageService.get('currentUser')){
    console.log("Your not logged Get out !");
    $location.path('/login');
  }else{
    console.log("You didnt select any course, lets get some !");
    $location.path('/home');
  }

}

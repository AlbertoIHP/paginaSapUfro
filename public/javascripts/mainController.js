
//Instancia de angular
var main = angular.module('mainModule',['ngRoute', 'ngResource', 'LocalStorageModule']);

main.config(rutas);
main.controller('mainController',['$scope','$resource', mainController]);




function rutas($routeProvider){
	var home = {templateUrl: 'app/views/home.html'};
	var movies = {templateUrl: 'app/views/movies.html'};
	var login = {templateUrl: 'app/views/login.html'};

	$routeProvider.when('/',login).when('/movies',movies).otherwise({ redirectTo: '/'});
}




//Se definen todos aquellos elemtentos que seran utilizados por el nodo del DOM que
//tenga la instancia de este controlador
function mainController($scope, $resource){


  $scope.hola = "hola";



}

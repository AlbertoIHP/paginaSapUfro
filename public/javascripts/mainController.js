
//Instancia de angular
var main = angular.module('mainModule',['ngRoute', 'ngResource', 'LocalStorageModule']);

app = main.config(rutas);

app.controller('controladorRaiz',['$location', '$scope','$resource','localStorageService', controladorRaiz]);

app.service('informacionGeneral', funcionServicio);


function rutas($routeProvider)
{
	var home = {templateUrl: 'app/views/movies.html'};
	var login = {templateUrl: 'app/views/login.html'};

	$routeProvider.when('/',home).when('/login',login).otherwise({ redirectTo: '/'});
}




//Se definen todos aquellos elemtentos que seran utilizados por el nodo del DOM que
//tenga la instancia de este controlador
function controladorRaiz($location, $scope,$resource, localStorage)
	{
		var abierto = false;

		$scope.openSide = function(){
			$('.ui.sidebar').sidebar('toggle');
			abierto = !abierto;
		}


		$scope.cerrarSesion = function(){
			$scope.logeado = false;
			localStorage.remove('currentUser');
			localStorage.remove('currentToken');
	  localStorage.remove('cursosTomados');
			$location.path("/login");
			$scope.usuario = {access_token: '', id:"", name :"",picture : "",email:"", lastname: '', profession: ''};
			if(abierto){
				$scope.openSide();
			}

		}



		if(localStorage.get('currentUser')){
			$scope.logeado = true;
			$scope.usuario = {access_token:'', id:"", name :"",picture : "",email:"", lastname: '', profession: ''};
			actualizarInfo();
			$location.path("/");

		}else{
			$scope.cerrarSesion();
			$scope.usuario = {access_token: '', id:"", name :"",picture : "",email:"", lastname: '', profession: ''};
		}

		$scope.$on('usuarioLogeado', function(event, data)
		{
			$scope.usuario.access_token =  data.message;
			$scope.logeado = true;
			console.log($scope.usuario );
			actualizarInfo();
			console.log($scope.usuario );


		})

		function actualizarInfo(){

			var objetoAlmacenado = JSON.parse(localStorage.get('currentUser'));
			$scope.usuario.id = objetoAlmacenado.id;
			$scope.usuario.name = objetoAlmacenado.name;
			$scope.usuario.picture = objetoAlmacenado.picture;
			$scope.usuario.email = objetoAlmacenado.email;

			$scope.usuario.lastname = objetoAlmacenado.lastname;
			$scope.usuario.profession = objetoAlmacenado.profession;

		}

		$scope.cerrarNav = function(){
			if(abierto){
				abierto = !abierto;
			}
		}

		$scope.irCursos = function(){
			console.log("Redirigendo a cursos")
			$location.path("/");
		}


		$scope.actualizarPerfil = function()
		{



			var contentType = 'application/json';

			var auth = $resource('https://sapufro.herokuapp.com/users/'+$scope.usuario.id, {},{
			put: {
				method: 'PUT',
				headers: {
					'Content-Type' : contentType
				}
			}
			});

			var peticion = auth.put($scope.usuario);

			$scope.respuesta = {};

			peticion.$promise.then(function (result) {

			if(abierto){
				$scope.openSide();
			}


			console.log(result);

			});

		}

	}




// NO SE OCUPA
function funcionServicio() {
	var productList = [];

	var addProduct = function(newObj) {
			productList.push(newObj);
	};

	var getProducts = function(){
			return productList;
	};

	return {
		addProduct: addProduct,
		getProducts: getProducts
	};

}


//Instancia de angular
var home = angular.module('mainModule');


//Se crea un controlador con su funcion callback
home.controller("vinosController", [ '$scope','$resource',vinosController]);


//Se definen todos aquellos elemtentos que seran utilizados por el nodo del DOM que
//tenga la instancia de este controlador

function vinosController($scope, $resource) {


	$scope.nuevoVino = {nombre: '', anio: 0, uva: '', pais: '', region: '', descripcion: '', foto: ''};

	$scope.id = 0;

	var Vinos = $resource('http://localhost:3000/api/');

	actualizar();

	//Se listan los vinos Query == GET

	function actualizar(){
		Vinos.query(function(vinos){
			$scope.vinos = vinos;
		})
	}



	//Se agrega SAVE == POST
	$scope.agregarVino = function(){
		Vinos.save($scope.nuevoVino);
		actualizar();
		$scope.nuevoVino = {nombre: '', anio: 0, uva: '', pais: '', region: '', descripcion: '', foto: ''};
		$('#addWine').modal('hide');
	};


	$scope.eliminarVino = function(){
		var Vino = $resource('http://localhost:3000/api/:id', { id: '@_id' });
		$scope.vinoBorrar = Vino.get({ id: $scope.id }, function() {
		  $scope.vinoBorrar.$delete();
		  actualizar();
		});

		$('#deleteWine').modal('hide');

	};

	$scope.actualizarVino = function(){
		var Vino = $resource('http://localhost:3000/api/:id', { id: '@_id' }, {
			update: {
			  method: 'PUT' // this method issues a PUT request
			}
		  });
		$scope.vinoBorrar = Vino.get({ id: $scope.id }, function() {
		  $scope.vinoBorrar.nombre = $scope.nuevoVino.nombre;

		  $scope.vinoBorrar.$update();

		  $scope.nuevoVino.nombre = '';

		  actualizar();

		});



		$('#updateWine').modal('hide');
	}

}




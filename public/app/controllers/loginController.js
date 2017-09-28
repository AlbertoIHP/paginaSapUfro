
//Instancia de angular
var home = angular.module('mainModule');


//Se crea un controlador con su funcion callback
home.controller('loginController', ['$location', '$scope','$resource','localStorageService', loginController]);



//Se definen todos aquellos elemtentos que seran utilizados por el nodo del DOM que
//tenga la instancia de este controlador
function loginController($location, $scope, $resource, localStorageService){

  $('.ui.dropdown')
	.dropdown()
  ;

	$scope.abrirModal = function(){
		$('#modalConversacion').modal('show');
	}

	$scope.asd = function(){
		$('#modalRegistro').modal('show');

	}


	$scope.registrarme = function()
	{
	 if($scope.nuevoUsuario.matricula === "" || $scope.nuevoUsuario.email=== "" || $scope.nuevoUsuario.lastname === "" || $scope.nuevoUsuario.profession === "" || $scope.nuevoUsuario.password=== "" || $scope.nuevoUsuario.name === ""){

		 $('.message .close').closest('.message').transition('fade up');
		 setTimeout(function(){ $('.message .close').closest('.message').transition('fade down');}, 2000);
	 }else{

		$scope.registrarUsuario();
	 }
	}

	$scope.login = {email: '', password: ''};
	$scope.nuevoUsuario = { access_token: 'bebote34', matricula: '' , email: '', lastname: '', profession: '', password: '', name: ''};


	$scope.registrarUsuario = function(){


		var contentType = 'application/json';

		var auth = $resource('https://sapufro.herokuapp.com/users', {},{
		post: {
			method: 'POST',
			headers: {
				'Content-Type' : contentType
			}
		}
		});

		var peticion = auth.post($scope.nuevoUsuario);

		$scope.respuesta = {};

		peticion.$promise.then(function (result) {
		console.log(result);
		$scope.login.email = $scope.nuevoUsuario.email;
		$scope.login.password = $scope.nuevoUsuario.password;
		$('#modalRegistro').modal('hide');
		 $scope.nuevoUsuario = { matricula: '' , email: '', lastname: '', profession: '', password: '', name: ''};
		});




	}


	$scope.iniciarSesion = function(){
		if($scope.login.email ==="" || $scope.login.password === ""){
			$('#error').closest('.message').transition('fade up');
			setTimeout(function(){ $('#error').closest('.message').transition('fade down');}, 2000);

		}else{
			$('#cargando').closest('.message').transition('fade up');
			 setTimeout(function(){ $('#cargando').closest('.message').transition('fade down');}, 2000);
			console.log($scope.login);

			var authorization = 'Basic ' + encode($scope.login.email+':'+$scope.login.password);
			var contentType = 'application/json';
			var accessToken = {access_token: 'bebote34'}

			var auth = $resource('https://sapufro.herokuapp.com/auth', {},{
			post: {
				method: 'POST',
				headers: {
					'Content-Type' : contentType,
					'Authorization' : authorization
				}
			}
			});

			var peticion = auth.post(accessToken);

			$scope.respuesta = {};

			peticion.$promise.then(function (result) {
				$scope.respuesta = result;
		console.log($scope.respuesta);

		localStorageService.set('currentToken', JSON.stringify($scope.respuesta.token));
				localStorageService.set('currentUser', JSON.stringify($scope.respuesta.user));

		$scope.$emit('usuarioLogeado', {message:$scope.respuesta.token});
		$location.path("/");
			});

		};
		}



}

function encode(input){
 var keyStr = 'ABCDEFGHIJKLMNOP' +
			'QRSTUVWXYZabcdef' +
			'ghijklmnopqrstuv' +
			'wxyz0123456789+/' +
			'=';
			var output = "";
			var chr1, chr2, chr3 = "";
			var enc1, enc2, enc3, enc4 = "";
			var i = 0;

			do {
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);

				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;

				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}

				output = output +
						keyStr.charAt(enc1) +
						keyStr.charAt(enc2) +
						keyStr.charAt(enc3) +
						keyStr.charAt(enc4);
				chr1 = chr2 = chr3 = "";
				enc1 = enc2 = enc3 = enc4 = "";
			} while (i < input.length);

			return output;
}

function decode(input){
	 var keyStr = 'ABCDEFGHIJKLMNOP' +
			'QRSTUVWXYZabcdef' +
			'ghijklmnopqrstuv' +
			'wxyz0123456789+/' +
			'=';

			var output = "";
			var chr1, chr2, chr3 = "";
			var enc1, enc2, enc3, enc4 = "";
			var i = 0;

			// remove all characters that are not A-Z, a-z, 0-9, +, /, or =
			var base64test = /[^A-Za-z0-9\+\/\=]/g;
			if (base64test.exec(input)) {
				alert("There were invalid base64 characters in the input text.\n" +
						"Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
						"Expect errors in decoding.");
			}
			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

			do {
				enc1 = keyStr.indexOf(input.charAt(i++));
				enc2 = keyStr.indexOf(input.charAt(i++));
				enc3 = keyStr.indexOf(input.charAt(i++));
				enc4 = keyStr.indexOf(input.charAt(i++));

				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;

				output = output + String.fromCharCode(chr1);

				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}

				chr1 = chr2 = chr3 = "";
				enc1 = enc2 = enc3 = enc4 = "";

			} while (i < input.length);

			return output;
}



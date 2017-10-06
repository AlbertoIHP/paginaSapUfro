
//Instancia de angular
var home = angular.module('mainModule');


//Se crea un controlador con su funcion callback
home.controller('homeController', ['$location','$scope','localStorageService', '$resource', homeController]);




//Se definen todos aquellos elemtentos que seran utilizados por el nodo del DOM que
//tenga la instancia de este controlador
function homeController($location, $scope, localStorageService, $resource){

    if(!localStorageService.get('currentUser')){
      $location.path('/login');
    }

  $scope.irCurso = function(curso){
    localStorageService.set('currentCourse', JSON.stringify(curso));
     $location.path("/course");
  }


		function actualizarInfo()
		{

			var objetoAlmacenado = JSON.parse(localStorageService.get('currentUser'));
			$scope.usuario.id = objetoAlmacenado.id;
			$scope.usuario.name = objetoAlmacenado.name;
			$scope.usuario.picture = objetoAlmacenado.picture;
			$scope.usuario.email = objetoAlmacenado.email;
			$scope.usuario.lastname = objetoAlmacenado.lastname;
			$scope.usuario.profession = objetoAlmacenado.profession;
		}

		$scope.obtenerCursos = function()
		{


			var auth = $resource('https://sapufro.herokuapp.com/cursos');

			var peticion = auth.query();


			peticion.$promise.then(function (result) {
				$scope.cursos = result;
        console.log("Los cursos traidos desde la BD "+JSON.stringify($scope.cursos));
        $scope.obtenerCursosTomados();
			});
		}


		$scope.obtenerCursosTomados = function(){
			var auth = $resource('https://sapufro.herokuapp.com/userTakeCourses');

			var peticion = auth.query();


			peticion.$promise.then(function (result) {
				$scope.cursosTomados = result;
				localStorageService.set('cursosTomados', $scope.cursosTomados);
        console.log("Los cursos tomados son "+JSON.stringify($scope.cursosTomados));
				filtrarCursos();
			});

		}

		if(localStorageService.get('currentUser'))
		{
			$scope.usuario = {access_token: JSON.parse(localStorageService.get('currentToken')), id:"", name :"",picture : "",email:"", lastname: '', profession: ''};
			actualizarInfo();
			$scope.cursos = {};
			$scope.cursosTomados = {}
			$scope.obtenerCursos();

		}


		$scope.inscribirCurso = function(idCurso)
		{

			var inscripcion = {access_token: $scope.usuario.access_token, idEstudiante: $scope.usuario.id, idCurso: idCurso };


			var contentType = 'application/json';

			var auth = $resource('https://sapufro.herokuapp.com/userTakeCourses', {},{
				post: {
					method: 'POST',
					headers: {
						'Content-Type' : contentType
					}
				}
			});

			var peticion = auth.post(inscripcion);

			$scope.respuesta = {};

			peticion.$promise.then(function (result)
			{
				console.log(result);
				$scope.obtenerCursosTomados();
			});
		}

		function filtrarCursos(){
			var cursosBorrar = [];

        console.log("Estamos filtrando sus cursos");
        console.log("Sus cursos tomados son : "+JSON.stringify($scope.cursosTomados));

        for(let i = 0; i < $scope.cursosTomados.length; i++)
        {
           if($scope.cursosTomados[i].idEstudiante === $scope.usuario.id)
            {
              cursosBorrar.push($scope.cursosTomados[i].idCurso);
            }

        }

        $scope.misCursos = [];

        console.log("Ahora estamos comparando con los cursos disponibles para sacarlos de los disponibles");
        console.log("Los cursos totales son: "+JSON.stringify($scope.cursos));
        for(let i = 0; i <$scope.cursos.length; i++)
      {
          for(let j=0; j<cursosBorrar.length; j ++)
      {

            if($scope.cursos[i].id === cursosBorrar[j])
            {
              console.log("El curso: "+$scope.cursos[i].name+" debe ser borrado");
              $scope.misCursos.push($scope.cursos[i]);
              $scope.cursos[i].activated = false;

            }
          }
        }

        console.log("Hemos determinado que sus cursos son: "+$scope.misCursos);




		}


		$scope.desincribirCurso = function(curso)
		{
			var idBorrar = 0;
			curso.activated = true;
			for(let x = 0; x < $scope.cursosTomados.length; x++){
				if($scope.cursosTomados[x].idEstudiante === $scope.usuario.id && $scope.cursosTomados[x].idCurso === curso.id)
				{
					idBorrar = $scope.cursosTomados[x].id;
				}

			}



			var contentType = 'application/json';

			var auth = $resource('https://sapufro.herokuapp.com/userTakeCourses/'+idBorrar, {},{
				delete: {
					method: 'DELETE',
					headers: {
						'Content-Type' : contentType
					}
				}
			});

			var cuerpo = {access_token: JSON.parse(localStorageService.get('currentToken'))};
			console.log(cuerpo);

			var peticion = auth.delete(cuerpo);

			peticion.$promise.then(function (result)
			{
				$scope.obtenerCursosTomados();
			});


		}


}

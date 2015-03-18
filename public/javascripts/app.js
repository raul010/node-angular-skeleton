'use strict';

angular.module('aulasApp', [''])

.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'partials/home.html',
			//                controller: 'NavActiveCtrl'
		}).
		when('/pagina', {
			templateUrl: '/pagina.html',
			controller: 'PaginaCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});

		$locationProvider.html5Mode(true);

	}
]);
angular.module('dashcompsis', ['ngAnimate', 'ngRoute', 'ngResource', 'googlechart'])
.config(function($routeProvider, $locationProvider, $httpProvider) {

	$routeProvider.when('/inicio', {
		templateUrl: 'partials/passagens.html',
		controller: 'PassagensController'
	});

	$routeProvider.otherwise({redirectTo: '/inicio'});

});

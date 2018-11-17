'use strict';

/**
 * @ngdoc function
 * @name dataStructureProjectApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the dataStructureProjectApp
 */
 angular.module('dataStructureProjectApp')
 .controller('GlobalCtrl', function ($rootScope, $location) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 	$rootScope.toppest = true;
 	$rootScope.toggleMenu = [{
 		name: 'Home',
 		url: '#/',
 		cond: '/'
 	}, {
 		name: 'About',
 		url: '#/about',
 		cond: '/about'
 	}]
 	$rootScope.$on('$locationChangeStart', function (event, next, current) {
 		$rootScope.currentPath = $location.$$path;
 	});
 });

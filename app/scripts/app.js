'use strict';

/**
 * Main module of the application.
 * Modulo principal da aplicação
 */
angular
  .module('wusicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider

      // Music list route
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'FeedController',
        controllerAs: 'feed'
      })

      // Music details route
      .when('/music/:name', {
        templateUrl: 'views/music.html',
        controller: 'MusicController',
        controllerAs: 'music'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

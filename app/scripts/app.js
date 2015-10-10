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
        controllerAs: 'musicshow'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
  }])
  .directive('imgload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(attrs.imgload);
            });
        }
    };
});

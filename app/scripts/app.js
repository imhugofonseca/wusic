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
  .directive('fallbackimg', function () {
    var fallbackimg = {
      link: function postLink(scope, iElement, iAttrs) {
        iElement.bind('error', function() {
          angular.element(this).attr("src", iAttrs.fallbackimg);
        });
      }
     }
     return fallbackimg;
  })

  .directive('imgload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(attrs.imgload);
            });

        }
    }
  });

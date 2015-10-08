'use strict';

/**
 * Controller of wusicApp - Music listing
 * Controlador da aplicação - Listagem de musicas
 *
 */


angular.module('wusicApp')

  .controller('FeedController', function ($scope, freeMusicService) {

  		$scope.musics = {};

  		freeMusicService.get().then(function () {

  			// Shuffle array because albuns are all together
  			$scope.musics = shuffleArray(freeMusicService.list());
  			console.log(freeMusicService.list());



  		})

  });

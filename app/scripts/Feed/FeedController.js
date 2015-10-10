'use strict';

/**
 * Controller of wusicApp - Music listing
 * Controlador da aplicação - Listagem de musicas
 *
 */


angular.module('wusicApp')

  .controller('FeedController', function ($scope, $rootScope, freeMusicService, playerService) {

  		$scope.musics = null;
  		$scope.playingId = playerService.id;
  		var count = 0;

  		if(freeMusicService.list() === null) {

  			freeMusicService.get().then(function () {

	  			// Shuffle array because albums are all together
	  			$scope.musics = freeMusicService.list();
	  		
	  		});

  		} else {
        $scope.musics = freeMusicService.list();
      }


  		// Wait for all images to load
  		// Looks better
  		$scope.countLoad = function () {

  			if(count >= $scope.musics.length-1){
  				$('.loader').addClass('loaded');
  				count = 0;
  			}

  			count++;
        
  		}
  		
  		$scope.play = playerService.playExe;
  		$scope.pause = playerService.pauseExe;

  });

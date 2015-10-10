'use strict';

/**
 * Controller of wusicApp - Music listing
 * Controlador da aplicação - Listagem de musicas
 *
 */


angular.module('wusicApp')

  .controller('FeedController', function ($scope, $rootScope, freeMusicService, playerService) {

  		$scope.musics = {};
  		var count = 0;


  		freeMusicService.get().then(function () {

  			// Shuffle array because albums are all together
  			$scope.musics = shuffleArray(freeMusicService.list());
  			console.log($scope.musics);
  			

  		});

  		// Wait for all images to load
  		// Looks better
  		$scope.countLoad = function () {
  			if(count >= $scope.musics.length-1)
  				$('.loader').addClass('loaded');

  			count++;
  		}

  		$scope.play = function (event, music) {

  			// Animation
  			$(event.target).addClass('playing');

  			//Lazy
  			angular.element(event.target)
		  		   .parent().parent().addClass('playing');

  			angular.element(event.target)
		  			.parent().addClass('playing');
  			angular.element(event.target)
		  			.parent()
		  			.children('.pause-btn')
		  			.children('.pause')
		  			.addClass('show');

		  	// Trigger
		  	playerService.playmp3(music);
  		}

  		$scope.pause = function (event, track) {

  			// Animation
  			$(event.target).removeClass('show');

  			angular.element(event.target)
		  		   .parent().parent().parent().removeClass('playing');

  			angular.element(event.target)
		  			.parent()
		  			.parent()
		  			.removeClass('playing');

  			angular.element(event.target)
		  			.parent()
		  			.parent()
		  			.children('.play')
		  			.removeClass('playing');

		  	// Trigger
		  	playerService.pause();
  		}

  });

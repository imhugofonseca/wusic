'use strict';

/**
 * Service of wusicApp - Player
 * Service da aplicação - Player
 *
 */


angular.module('wusicApp')
  .factory('playerService', function () {

  		var playerService = {};
  		playerService.playing = '';
  		playerService.status = 0;
  		playerService.name = '';
      playerService.id = null;

      // Inside functions
  		// Play track
  		playerService.playmp3 = function (music) {

  			if(playerService.playing != music.track_file_url){
  				playerService.playing = music.track_file_url;
  				playerService.name = music.track_title;
          playerService.id = music.track_id;
  			}

  			playerService.status = 1;
  		}

  		// Pause track
  		playerService.pause = function() {
  			playerService.status = 0;
  		}


      // Functions for Controllers
      playerService.playExe = function (event, music) {
      
        $('.playing').removeClass('playing');
        $('.pause-btn .pause').removeClass('show');

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

      playerService.pauseExe = function (event, track) {

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




  		return playerService;
  	
  })
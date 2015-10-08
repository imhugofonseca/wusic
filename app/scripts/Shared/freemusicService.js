'use strict';

/**
 * Service of wusicApp - FreeMusic API
 * Controlador da aplicação - FreeMusic API
 *
 */
angular.module('wusicApp')
	
	.factory('freeMusicService', function ($http) {

		// Using YQL because no CORS or JSONP
		var apiUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%20%3D'http%3A%2F%2Ffreemusicarchive.org%2Frecent.json'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
		var getData;

		return {

			// Gets data
			get : function () {

				return $http.get(apiUrl, {cache : true})
						 .success(function(data, status) {
						 	getData = data['query']['results']['json']['aTracks'];
						 	
						 })
					 
			},

			// Returns all musics
			list : function () { return getData; },

			// Gets certain music by handle
			search : function ($val) { 

				// Find
				for (var i = 0, l = getData.length; i < l; i++) {
					if(getData[i].track_handle === $val)
						return getData[i];
				};

				return false;
			}
		}
	});

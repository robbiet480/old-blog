/*---------------
 * jQuery Last.Fm Plugin by Engage Interactive
 * Examples and documentation at: http://labs.engageinteractive.co.uk/lastfm/
 * Copyright (c) 2009 Engage Interactive
 * Version: 1.0 (10-JUN-2009)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.3 or later
---------------*/

(function($){
	$.fn.lastFM = function(options) {
		
		var defaults = {
			number: 10,
			username: 'willblackmore',
			apikey: '96e0589327a3f120074f74dbc8ec6443',
			artSize: 'medium',
			noart: 'images/noartwork.gif',
			onComplete: function(){}
		},
		settings = $.extend({}, defaults, options);

		var lastUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+settings.username+'&api_key='+settings.apikey+'&limit='+settings.number+'&format=json&callback=?';
		var $this = $(this);
		
		var container = $this.html();
		
		$this.children(':first').remove();
		
		if(settings.artSize == 'small'){imgSize = 0}
		if(settings.artSize == 'medium'){imgSize = 1}
		if(settings.artSize == 'large'){imgSize = 2}

		this.each(function() {
			
			$.getJSON(lastUrl, function(data){ 
				$.each(data.recenttracks.track, function(i, item){
					
					if(item.image[1]['#text'] == ''){
						art = settings.noart;
					}else{
						art = stripslashes(item.image[imgSize]['#text']);
					}

					url = stripslashes(item.url);
					song = item.name;
					artist = item.artist['#text'];
					album = item.album['#text'];

					$this.append(container);
					
					var $current = $this.children(':eq('+i+')');
					
					$current.find('[class=lfm_song]').append(song);
					$current.find('[class=lfm_artist]').append(artist);
					$current.find('[class=lfm_album]').append(album);
					$current.find('[class=lfm_art]').append("<a href='"+url+"'><img width='64' height='64' src='"+art+"' alt='Artwork for "+album+"'/></a>");
					$current.find('a').attr('href', url).attr('title', 'Listen to '+song+' on Last.FM').attr('target', '_blank');
					
					//callback
					if(i==(settings.number-1)){
						settings.onComplete.call(this);
					}
					
				});
			});
		});
	};
	
	//Clean up the URL's
	function stripslashes( str ) {	 
		return (str+'').replace(/\0/g, '0').replace(/\\([\\'"])/g, '$1');
	}
})(jQuery);
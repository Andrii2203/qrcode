$(document).ready(function() {

	var has_touch = 'ontouchstart' in document.documentElement;
	var accX, accY, width, height, xA, yA, movement;
	
	if(has_touch || screen.width <= 699) {
	
		(resize = function() {
			
			height = $(window).height();
			width = $(window).width();
		
			$('#info h1').width(width).height(height);
			
			
		})();
		
		window.ondevicemotion = function(event) {
		  	
		    accX = Math.round(event.accelerationIncludingGravity.x*150) / 10;  
		    accY = Math.round(event.accelerationIncludingGravity.y*150) / 10;  
		    
		    movement = 10;
		    
		    xA = -(accX / 1) * movement;
		    yA = -(accY / 1) * movement;
		    
		    
			run();
		    
		}  
		
	} else {
					
		$('#info h1').addClass('fullscreen').mousemove(function(e) {
			
			width = $(this).width();
			height = $(this).height();
			
			accX = (((e.pageX - this.offsetLeft)*2 / width) * 150) - 10;
			accY = (((e.pageY - this.offsetTop)*2 / width) * 150) - 10;
			
			xA = -(accX / 1);
		    yA = -(accY / 1);
		    
		    movement = 2;
			
			run();
		
		});
		
		
	}
	
	function run() {
		    
	    $('#info h1').css({'left' : xA+'px', 'top' : yA+'px', 'text-shadow' : ''+xA+'px '+yA+'px 100px 100px 100px rgba(0,0,0,0.3)'});
	    
	    bX = -(xA*2)-100;
	    bY = -(yA*2)-300;
	    
	    $('.info h3').css({'background-position' : bX+'px '+bY+'px'});
	
	}
	
});



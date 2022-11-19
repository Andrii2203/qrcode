$(document).ready(function() {

	var has_touch = 'ontouchstart' in document.documentElement;
	var accX, accY, width, height, xA, yA, movement;
	
	if(has_touch || screen.width <= 699) {
	
		(resize = function() {
			
			height = $(window).height();
			width = $(window).width();
		
			$('#about').width(width).height(height);
			
			
		})();
		
		window.ondevicemotion = function(event) {
		  	
		    accX = Math.round(event.accelerationIncludingGravity.x*15) / 10;  
		    accY = Math.round(event.accelerationIncludingGravity.y*15) / 10;  
		    
		    movement = 10;
		    
		    xA = -(accX / 10) * movement;
		    yA = -(accY / 10) * movement;
		    
		    
			run();
		    
		}  
		
	} else {
					
		$('#about').addClass('fullscreen').mousemove(function(e) {
			
			width = $(this).width();
			height = $(this).height();
			
			accX = (((e.pageX - this.offsetLeft)*2 / width) * 15) - 10;
			accY = (((e.pageY - this.offsetTop)*2 / width) * 15) - 10;
			
			xA = -(accX / 10);
		    yA = -(accY / 10);
		    
		    movement = 2;
			
			run();
		
		});
		
		
	}
	
	function run() {
		    
	    $('.this').css({'left' : xA+'px', 'top' : yA+'px', 'text-shadow' : ''+xA+'px '+yA+'px 10px 10px 10px rgba(0,0,0,0.3)'});
	    
	    bX = -(xA*2)-100;
	    bY = -(yA*2)-300;
	    
	    $('#about').css({'background-position' : bX+'px '+bY+'px'});
	
	}
	
});



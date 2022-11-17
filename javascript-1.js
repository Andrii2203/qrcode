
$(document).ready(function() {

	var has_touch = 'ontouchstart' in document.documentElement;
	var accX, accY, width, height, xA, yA, movement;
	
	if(has_touch || screen.width <= 699) {
	
		(resize = function() {
			
			height = $(window).height();
			width = $(window).width();
		
			$('.container').width(width).height(height);
			
			
		})();
		
		window.ondevicemotion = function(event) {
		  	
		    accX = Math.round(event.accelerationIncludingGravity.x * 200) / 10;  
		    accY = Math.round(event.accelerationIncludingGravity.y * 200) / 10;  
		    
		    movement = 10;
		    
		    xA = -(accX / 10) * movement;
		    yA = -(accY / 10) * movement;
		    
		    
			run();
		    
		}  
		
	} else {
					
		$('.container').addClass('fullscreen').mousemove(function(e) {
			
			width = $(this).width();
			height = $(this).height();
			
			accX = (((e.pageX - this.offsetLeft)*2 / width) * 200) - 10;
			accY = (((e.pageY - this.offsetTop)*2 / width) * 200) - 10;
			
			xA = -(accX / 10);
		    yA = -(accY / 10);
		    
		    movement = 2;
			
			run();
		
		});
		
	}
	
	function run() {
		    
	    $('.card').css({'left' : xA+'px', 'top' : yA+'px', 'box-shadow' : ''+xA+'px '+yA+'px 10px rgba(0,0,0,0.3)'});
	    
	    bX = -(xA*2)-100;
	    bY = -(yA*2)-300;
	    
	    $('.container').css({'background-position' : bX+'px '+bY+'px'});
	
	}
	
});

//movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const circle = document.querySelector('.circle');

//moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    //popout
    title.style.transform = "translateZ(200px)";
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    description.style.transform = 'translateZ(200px)';
    sizes.style.transform = 'translateZ(200px)';
    purchase.style.transform = 'translateZ(200px)';
    circle.style.transform = 'translateZ(150px) rotateZ(-360deg)';
});
//animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
    circle.style.transform = 'translateZ(0px) rotateZ(0deg)';
});


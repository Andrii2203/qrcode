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

const X = Event.accelerationIncludingGravity.X;
const Y = Event.accelerationIncludingGravity.Y;
const Z= Event.accelerationIncludingGravity.Z;

window.ondevicemotion = function(e) {
    accX = Math.round(Event.accelerationIncludingGravity.X*10) / 10;
    accY = Math.round(Event.accelerationIncludingGravity.Y*10) / 10;

    movement = 10;

    xA = -(accX / 10) * movement;
    yA = -(accY / 10) * movement;

    $('.container').css({
        "left" : xA+"px", "top" : yA+"px", "box-shadow" : "'+xA+'px '+yA+'px 10px rgba(0,0,0,0.3)"
    });

    bX = -(xA*2)-100;
    bY = -(yA*2)-300;

    $('.card').css({"background-position" : bX+'px '+bY+'px'});
}
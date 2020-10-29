var click = new Audio("sounds/click.mp3");
var hover = new Audio("sounds/hover.mp3");
var buttons = document.querySelectorAll("a");
hover.volume = .05;
click.volume = .02;
function handleHover() {
    hover.load();
    hover.play();
}
function handleClick() {
    click.load();
    click.play();
  }
// button.addEventListener("click", alertMe);
for(i = 0; i<buttons.length; i++){
  buttons[i].addEventListener("mouseover", handleHover);
  buttons[i].addEventListener("click", handleClick);
};

function delay (URL) {
    setTimeout( function() { window.location = URL }, 300 );
    document.querySelector("body").style.opacity = 0;
}
if(home === true){
  window.addEventListener("load", function() {
    setTimeout(function() {
      beep.volume = .2;
      beep.play();
    }, 200);
  }, false);
}

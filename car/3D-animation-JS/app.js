//Movenment Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const smoke = document.querySelector(".smoke");
const car = document.querySelector(".car .base");
const wheels = document.querySelectorAll(".car .wheel");
const wheelFrame = document.querySelector(".wheel-frame");
const circle = document.querySelector(".circle");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const colors = document.querySelector(".colors");
const colorButton = document.querySelectorAll(".colors button");
const carouselButtons = document.querySelectorAll(".carousel_button");
const numberOfCards = document.querySelectorAll(".carousel .card").length;
const carouselCards = document.querySelector(".carousel_cards");
const animation = document.querySelector(".car-animation");
const startButton = document.querySelector(".start");
const showRoom = document.querySelector("#show-room");
let cardIndex = 2;
let translateX = 0;
let choice;
let xAxis;
let yAxis;
let degrees = 0;
let restart = true;

var engine = new Audio("./sounds/gallardo.mp3");
// Spinning Animation
// wheels.forEach(function(wheel) {
//   degrees += 7200
//   wheel.style.transform = "rotate(" + degrees + "deg)";
// });
// function spin() {
//   wheels.forEach(function(wheel){
//     wheel.style.transition = "all 15s ease";
//     wheel.style.transform = "translateZ(101px) rotate(" + degrees + "deg)";
//   });
// };
// document.body.addEventListener("click", animate);
// Moving Animation Event
startButton.addEventListener("click", function() {
  startButton.classList.add("hide");
  showRoom.classList.remove("hide");
});
animate();
function animate(){

container.addEventListener("mousemove", function(e){
  xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  colorButton.forEach(function(button) {
    button.style.boxShadow = xAxis + "0px " + yAxis/(-2) + "0px 5px 5px rgba(0, 0, 0, 0.2)";
  });
});
//Animate In
// container.addEventListener()
  container.addEventListener("mouseenter", function(e) {
    card.style.transition = "all 0.1s ease";
    //Popout
    title.style.transform = "translateZ(50px)";
    car.style.transform = "translateZ(100px)";
    circle.classList.add("drive");
    engine.play();
    engine.addEventListener("ended", function(){
      circle.classList.remove("drive");
      smoke.style.animation = "none";
      restart = true;
    });
    if(restart === true) {
      restart = false;
      smoke.style.animation = "smoke 14s";
      wheels.forEach(function(wheel){
        wheel.style.transform = "translateZ(101px) rotate(" + degrees + "deg)";
        setTimeout(function(){
          degrees += 72000;
          wheel.style.transform = "translateZ(101px) rotate(" + degrees + "deg)";
          wheel.style.transition = "all 14s ease";
        }, 200);
      });
    }
    description.style.transform = "translateZ(45px)";
    colors.style.transform = "translateZ(50px) scale(1.1)";
    purchase.style.transform = "translateZ(20px)";

  })
  // Animate Out
  container.addEventListener("mouseleave", function(e) {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateX(0px)";
    car.style.transform = "translateZ(0px)";
    wheels.forEach(function(wheel) {
      wheel.style.transition = "all 0.75s ease";
    });
    description.style.transform = "translateZ(0px)";
    colors.style.transform = "translateZ(0px)";
    colorButton.forEach(function(button) {
      button.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.4)";
    });
    purchase.style.transform = "translateZ(0px)";
  });
}
// Color Changer
function changeColor(color) {
  let num;
  if(color.classList.contains("green")){
    num = "80";
  } else if(color.classList.contains("purple")){
    num = "250";
  } else if(color.classList.contains("orange")){
    num = "0";
  } else if(color.classList.contains("blue")){
    num = "192";
  } else if(color.classList.contains("red")){
    num = "192";
  } else if(color.classList.contains("yellow")){
    car.style.filter = "hue-rotate(30deg) brightness(1.5)";
    circle.style.filter = "hue-rotate(30deg) brightness(1.5) opacity(.9)";
  } else if(color.classList.contains("gold")){
    car.style.filter = "hue-rotate(2deg) sepia(.9) contrast(1.4) saturate(1.6)"
    circle.style.filter = "hue-rotate(2deg) brightness(.3) grayscale() opacity(.9)"
  }
  car.style.filter = "hue-rotate(" + num +"deg)";
  circle.style.filter = "hue-rotate(" + num +"deg) opacity(.9)";
};
function activate(color) {
  colorButton.forEach(function(button) {
    button.classList.remove("active");
  });
  color.classList.add("active");
  if(color.classList.contains("white") || color.classList.contains("gray")){
    let num;
    if(color.classList.contains("white")){
      num = 1.5;
    } else {
      num = .5;
    }
    car.style.filter = "hue-rotate(0) brightness(" + num + ") sepia(0) grayscale()";
    circle.style.filter = "hue-rotate(0) brightness(" + num + ") sepia(0) grayscale() opacity(.9)";
  } else {
    changeColor(color);
  }
};

colorButton.forEach(function(button){
  button.addEventListener("click", function(){
    activate(button);
  });
});


// Carousel

carouselButtons.forEach(function(button){
  button.addEventListener("click", function(event){
    if(event.target.id === "previous"){
      if(cardIndex !== 1) {
        cardIndex--;
        translateX += 448;
      }
    } else {
      if(cardIndex !== numberOfCards) {
        cardIndex ++;
        translateX -= 448;
      }
    }

    carouselCards.style.transform = `translateX(${translateX}px)`;
  });
});

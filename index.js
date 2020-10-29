window.addEventListener('load',
  function() {
    alert('hello!');
  }, false);

// set up text to print, each item in array is new line
var aText = new Array(
"Computer", "Science", "Discoveries"
);
var bText = new Array(
"Build for the world to see!"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iIndexh3 = 0; // start printing array at this posision
var iArrLength1 = aText[0].length; // the length of the text array
var iArrLength3 = bText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
var beep = document.getElementById("beep");



function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedh1");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + ' ';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength1 ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength1 = aText[iIndex].length;
   setTimeout("typewriter()", 300);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
 setTimeout("typeh3()", 4800);
}

function typeh3()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndexh3-iScrollAt);
 var destination = document.getElementById("typedh3");

 while ( iRow < iIndexh3 ) {
  sContents += bText[iRow++] + ' ';
 }
 destination.innerHTML = sContents + bText[iIndexh3].substring(0, iTextPos);
 if ( iTextPos++ == iArrLength3 ) {
  iTextPos = 0;
  iIndexh3++;
  if ( iIndexh3 != bText.length ) {
   iArrLength3 = bText[iIndexh3].length;
   setTimeout("typeh3()", 500);
  }
 } else {
  setTimeout("typeh3()", 700);
 }
 setTimeout("sound()", 100);
}

typewriter();


//Car stuff
//Movenment Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const car = document.querySelector(".car img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// Moving Animation Event
container.addEventListener("mousemove", function(e){
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
// container.addEventListener()
container.addEventListener("mouseenter", function(e) {
  card.style.transition = "all 0.1s ease";
  //Popout
  title.style.transform = "translateZ(50px)";
  car.style.transform = "translateZ(100px)";
  description.style.transform = "translateZ(45px)";
  sizes.style.transform = "translateZ(30px)";
  purchase.style.transform = "translateZ(20px)";
})
// Animate Out
container.addEventListener("mouseleave", function(e) {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateX(0px)";
  car.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});

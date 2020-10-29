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
}

typewriter();

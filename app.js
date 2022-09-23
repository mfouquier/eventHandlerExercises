// window.addEventListener("click", function() {
//     alert("You clicked on a page!!!");
// })

const button = document.querySelector('button');
let clickCount = 0;

let clickAlert = function() {
    alert("Someone Clicked My Button Function!!!")
};

button.addEventListener("click", clickAlert);
button.removeEventListener("click", clickAlert);


// var button1 = document.querySelector("button");

// var once = function() {
//   console.log("Done.");
//   button1.removeEventListener("click", once);
// }

// button1.addEventListener("click", once);

let buttonClickCount = function(event){
    //const button = document.querySelector('button');
    button.innerText = clickCount;
    clickCount++;
};

button.addEventListener("click", buttonClickCount);

// this refers to the DOM element that the listener was attached to.
// event.target will refer to the element that caused the event to fire.
var div = document.querySelector("div");

var logText = function() {
  console.log(event.target.textContent);
}

div.addEventListener("click", logText);
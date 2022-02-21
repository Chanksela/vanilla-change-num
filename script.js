// set main variables and buttons
let startNum = 0;
let count = startNum;
let display = document.getElementById("display");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let reset = document.getElementById("reset");

//set functions
//decrement function
const decrement = () => {
  count--;
  display.innerHTML = count;
  console.log(count);
  displayColor();
};
//increment function
const increment = () => {
  count++;
  display.innerHTML = count;
  displayColor();
};
//reset function
const resetDisplay = () => {
  count = startNum;
  display.innerHTML = count;
  display.id = "display";
  console.log(display.id);
  console.log(startNum);
};
//add event listneres
//onClick decrement by one
minus.addEventListener("click", decrement);
//onClick increment by one
plus.addEventListener("click", increment);
//onClick reset to starting number
reset.addEventListener("click", resetDisplay);

//change display color depending on action
const displayColor = () => {
  //if number is negative it will be red
  if (count < 0) {
    display.id = "negative";
  } //if number is positive it will be green
  else if (count > 0) {
    display.id = "positive";
  }
  //if number is zero it will be white
  else {
    display.id = "display";
  }
};

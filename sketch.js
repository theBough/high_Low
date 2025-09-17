let myInput, 
    myButton,
    answer = "nothing yet";

function setup() {
  createCanvas(300, 300);
  myInput = createInput();
  myInput.position(50, 120);

  myButton = createButton("guess");
  myButton.position(50, 140);
  myButton.mousePressed(getAnswer);
  
}
function draw() {
  background("#1B263B");
  fill("#E0E1DD");
  textSize(28);
  text("High Low", 50, 50);
  push();
  textSize(18);
  text("make a guess", 50, 100);
  text(answer,50,200);
  pop();
}
function getAnswer() {
  answer = myInput.value();
  console.log(answer)
}

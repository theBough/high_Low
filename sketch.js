let myFont, myInput;

function setup() {
  createCanvas(300, 300);
  myFont = loadFont("Oswald-VariableFont_wght-1.ttf")
  myInput = createInput();
  myInput.position(100,150)
}

function draw() {
  background('#003049');
  fill('#FDF0D5');
  textSize(30)
  textFont(myFont)
  text("High Low",100,50); 
  textSize(18)
  text("Guess a Number",100,100); 
  text(myInput.value(),100,200)
}

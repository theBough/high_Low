let myFont,
    myInput,
    randomNumber;


function setup() {
  createCanvas(300, 300);
  myFont = loadFont("FascinateInline-Regular.ttf")
  myInput = createInput();
  myInput.position(100,150)
   randomNumber = Math.floor(Math.random()*100)
  console.log(randomNumber)
 
}

function draw() {
  background('#003049');
  fill('#FDF0D5');
  textSize(30)
  textFont(myFont)
  text("High Low",100,50); 
  textSize(18)
  text("Guess a Number",100,100); 
  text(myInput.value(),100,200);
 
}

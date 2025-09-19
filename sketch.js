let myFont,
    myInput,
    randomNumber,
    myButton;

function setup() {
  createCanvas(300, 300);
  myFont = loadFont("FascinateInline-Regular.ttf")
 inputStuff();
   randomNumber = Math.floor(Math.random()*100)
  console.log(randomNumber)
  buttonStuff()
}//end setup
function draw() {
  background('#003049');
  fill('#FDF0D5');
  textSize(30)
  textFont(myFont)
  text("High Low",100,50); 
  textSize(18)
  text("Guess a Number",100,100); 
  text(myInput.value(),100,200);
 
}//end draw
//***********************************************
function buttonStuff(){
  myButton = createButton("Make a Guess");
  myButton.style('background-color','#FDF0D5')
 
  myButton.position(100,180);
 
}//end buttonStuff
function inputStuff(){
   myInput = createInput();
  myInput.position(100,150);
}//end inputStuff

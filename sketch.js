let myFont, myInput, randomNumber, myButton, feedback,img,guesses;

function setup() {
  createCanvas(300, 300);
  myFont = loadFont("FascinateInline-Regular.ttf");
  inputStuff();
  randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  buttonStuff();
  feedback = 'I will give you \n feedback here'
  img = loadImage("download__1_-removebg-preview.png")
  guesses = 0;
} //end setup
function draw() {
  background("#003049");
  designStuff()
  fill("#FDF0D5");
  textSize(30);
  textFont(myFont);
  text("High Low", 100, 50);
  textSize(18);
  text("Guess a Number", 100, 100);
  text(feedback, 75, 250);
  img.resize(50,50)
  image(img,225,225)
  text("Guess: " + guesses,30,30)
} //end draw
//***********************************************
function getAnswer(){
  if(isNaN(myInput.value())){//this is checking if
    // the answer is NOT  a number
    feedback = 'Please enter a number.'
    return;//this will exit out of the funtion
  }//end if
  
  guesses += 1
  
  
  if(myInput.value() > randomNumber){
    feedback = 'Too High'
    img=loadImage("download.png")
  }else if(myInput.value() < randomNumber){
    feedback = 'Too Low'
  }else{
    feedback = 'You Got it!'
  }//end if
}//end getAnswer
function designStuff(){
  push()
  fill('#00b4d8')
  stroke('#CAF0F8')
  strokeWeight(5)
  rect(10,10,280,280,10);
  pop();
}//end designStuff
function buttonStuff() {
  myButton = createButton("Make a Guess");
  myButton.style("background-color", "green");
  myButton.style('font-Family', 'FascinateInline-Regular.ttf')
  myButton.position(100, 180);
  myButton.mousePressed(getAnswer)
} //end buttonStuff
function inputStuff() {
  myInput = createInput();
  myInput.position(100, 150);
} //end inputStuff

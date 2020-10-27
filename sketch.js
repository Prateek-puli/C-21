var fixedOval, movingOval, fixedcircle, movingCircle;



function setup() {
  createCanvas(400,400);

  fixedOval = new Sprite(300,150,50,100);
  movingOval = new Sprite(100,200,100,50);
  fixedcircle = new Sprite(350,100,50,50);
  movingCircle = new Sprite(100, 150, 50, 50);
 
  movingCircle.velocityX = 3;
  movingCircle.velocityY = 0;

  fixedOval.velocityX = -3;

  
  
}

function draw() {
  background(0);  

  

  movingOval.xPosition = mouseX;
  movingOval.yPosition = mouseY;

  fixedOval.display();
  movingOval.display();
  fixedcircle.display();
  movingCircle.display();

  if(movingOval.isTouching(fixedcircle)){
    movingOval.shapeColor = "red";
    fixedcircle.shapeColor = "red";
  }
  else{
    movingOval.shapeColor = "green";
    fixedcircle.shapeColor = "green";

  }

  movingCircle.bounceOff(fixedOval);


}
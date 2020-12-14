var fixedRect, movingRect;
var box1,box2,box3;
var ball;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(100,100,50,50);
  box2 = createSprite(200,100,50,50);
  box3 = createSprite(300,100,50,50);

  ball = createSprite(600,200,50,50);
  ball.velocityY = 5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,box3)){
    movingRect.shapeColor = "yellow";
    box3.shapeColor = "red";
  }
  
  else if(isTouching(movingRect,box1)){
    movingRect.shapeColor = "blue";
    box1.shapeColor = "white";
  }

  else{
    movingRect.shapeColor = "green";
    box1.shapeColor = "green";
    box3.shapeColor = "green";
  }
  
  bounceOff(ball,fixedRect);

  drawSprites();
}


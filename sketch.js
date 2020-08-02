var fixedRect, movingRect;
var ball1,ball2;

function setup() {
  createCanvas(1200,800);
  //fixedRect= createSprite(400, 100, 50, 80);
  //movingRect=createSprite(400,800,150,150);

  ball1=createSprite(200,100,50,50);
  ball2=createSprite(500,100.50,50);


  //fixedRect.shapeColor="green";
  //movingRect.shapeColor="green";

  ball1.shapeColor="red";
  ball2.shapeColor="pink";

  //movingRect.velocityY=-5;
  //fixedRect.velocityY=5;

  ball1.velocityX=5;
  ball2.velocityX=-5;

}

function draw() {
  background(0,0,0);  
    //horizontal distance between each other when tehy are touching each other
    //console.log("HD"+(fixedRect.width/2+movingRect.width/2));//50/2+80/2=25+40=65

  //console.log(movingRect.y);
  
  
  bounceOff(ball1,ball2);
  drawSprites();
}


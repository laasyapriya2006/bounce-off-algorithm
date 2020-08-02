function bounceOff(object1,object2){

    //bounce off two rectangles
    if(object1.x-object2.x<=object1.width/2+object2.width/2 &&//right side
      object2.x-object1.x<=object1.width/2+object2.width/2 ){
      object2.velocityX=object2.velocityX*(-1);
      object1.velocityX=object1.velocityX*(-1); 
      }
      if(object2.y-object1.y<=object1.height/2+object2.height/2&&//bottom 
        object1.y-object2.y<=object1.height/2+object2.height/2){//upwards
        object2.velocityY=object2.velocityY*(-1);
        object1.velocityY=object1.velocityY*(-1);  
  
      }
  
  
  
  }
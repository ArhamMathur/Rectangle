var movingRect, fixedRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,80,50);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2)
    {
      fixedRect.shapeColor = "blue";
      movingRect.shapeColor = "blue";
    }  
    else
    {
      fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
    }
  drawSprites();
}
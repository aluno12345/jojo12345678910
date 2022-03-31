
var terrariano


function setup() {
  createCanvas(400,400);
terrariano = createSprite(200,200)

}


function draw() 
{
  background(30);

  if (keyDown(RIGHT_ARROW))  
  {
terrariano.x += 10;
  }

  

  drawSprites ()

}





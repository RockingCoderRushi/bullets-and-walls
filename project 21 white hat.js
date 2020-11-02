var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
 thickness = random(22,83)
  
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = (80,80,80)
  speed = random(223,321)
  weight = random(30,52)
}

function draw() {
  background(255,255,255);  
  
 // console.log("car" + car.x)
 // console.log("wall" + wall.x)

  bullet.velocityX = speed

 if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0
  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness

  if(damage > 10)
  {
    wall.shapeColor = color(255,0,0)
  }
  if(damage < 10 ) 
  {
    wall.shapeColor = color(0,255,0)
  }
  if(damage < 100)
  {
    bullet.shapeColor = "green"
  }
} 

function hasCollided(bullet,wall) 
{
  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge = wall.x
  if(bulletRightEdge>=wallLeftEdge)
  
  {
    return true
  }
  return false
}








 

 
 //car.x = World.mouseX
  drawSprites();
}
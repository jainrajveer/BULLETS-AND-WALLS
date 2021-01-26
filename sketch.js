var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)


  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed
  
  wall = createSprite(1500,200,thickness,height/2)
  wall.shapeColor = rgb(80,80,200)
}

function draw() {
  background(255,255,255);

  
  
  if(hasCollided (bullet,wall)){
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness*thikness*thikness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0)
    }

   

    if(damage < 10){
      wall.shapeColor = color(0,255,0)
    }
  }

  hasCollided()
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
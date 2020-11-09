var thickness,wall,bullets;

var speed,weight;



function setup() {
  createCanvas(1600,400);
  speed=random(250,350);
  weight=random(30,50);
thickness=random(22,83)
  bullets = createSprite(50,200,50,20);
  bullets.velocityX = speed;
  bullets.shapeColor="red";

  wall = createSprite(1000,200,thickness,height/2);
  wall.shapeColor=color(255);
}


function draw() {
  background(0);
  console.log(wall.x-bullets.x)

if (hasCollided(bullets,wall)){
  bullets.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  if (damage>10){
    wall.shapeColor="red"
  }
  if(damage<10){
    wall.shapeColor="blue"
  }
}
  drawSprites();
}
function hasCollided(lbullet, lwall)
 { bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge){
      return true
    } else{ return false;}
     
    }

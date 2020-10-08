var wall,car;

var speed,weight;

var deformation

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);

  wall = createSprite(1500,200,60,height/2);

  speed = random(55,90);
  weight = random(400,1500);

  deformation = 0.5 * weight * speed * speed/22509;
}

function draw() {
  background(0);  

  car.velocityX = speed;

  car.depth = wall.depth+1;

  deformation = Math.round(deformation);

  if (car.x-wall.x <= wall.width/2+car.width/2
    && wall.x-car.x <= wall.width/2+car.width/2
    && car.y-wall.y <= wall.height/2+car.height/2
    && wall.y-car.y <= wall.height/2+car.height/2){
  
      car.velocityX = 0;
  }

  if (wall.x-car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
   // var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation > 180)
    {
      car.shapeColor = color(255,0,0);

      fill("red")
      textSize(20);
      text("Deformation = " + deformation+" (Result LETHAL)",600,200);
    }

    if (deformation < 180 && deformation > 100)
    {
      car.shapeColor = color(230,230,0);
      fill("yellow")
      textSize(20);
      text("Deformation = " + deformation+" (Result AVERAGE) ",600,200);
    }
    if (deformation < 100)
    {
      car.shapeColor = color(0,255,0);
      fill(0,255,0);
      textSize(20);
      text("Deformation = " + deformation+" (Result Good) ",600,200);
    }
  }

  drawSprites();
}
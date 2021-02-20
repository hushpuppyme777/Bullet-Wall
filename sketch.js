

var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(223,321)
	weight=random(30,52)
thickness = random(22,83)


	bullet=createSprite(50, 200, 50,50);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(230,230,230)
}


function draw() {
  background(0);
  if(hasCollided(bullet,wall))
  
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(deformation>10)
	{
		wall.shapeColor=color(255,0,0);
	}

	

	if(deformation<10)
	{
		car.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}
function hasCollided(bullet1,wall1)
{br = bullet1.x + bullet1.width
 wr = wall1.x
 if(br>= wr) 
{return true}
return false}



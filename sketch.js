var ship,ship_moving;
var sea,seaImage;

function preload() {
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage = loadImage("sea.png") 
}

function setup(){

  createCanvas(600,500);

  //create the sea

  sea = createSprite(600,300);
  sea.addImage("running",seaImage);
  sea.scale=0.5;
  sea.velocityX = -1;

  //create ship

  ship = createSprite(50,200,20,50);
  ship.addAnimation("running", ship_moving);
  edges = createEdgeSprites();

  //adding scale and position to ship
  
  ship.scale=0.25;
  ship.x = 90;
  ship.y = 300;


}

function draw() {
  background(seaImage);
 drawSprites();
}
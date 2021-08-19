var seaImg,sea;
var shipImg1,ship;


function preload(){
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(3000,1000);

  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.velocityX = -10;

  ship = createSprite(750,400,20,20);
  ship.addAnimation("Moving",shipImg1);
  ship.scale = 0.5;
}

function draw() {
  
  background("white");

  if (sea.x < 0){
  sea.x = sea.width/2;
 }

  drawSprites();
 
}
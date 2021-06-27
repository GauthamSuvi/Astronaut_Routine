var bGround, bg
var sleep
var brush
var gym
var drink
var Mmove
var naut
var eat
var bath

function preload(){
bg = loadImage("iss.png");
sleep = loadImage("sleep.png");
brush = loadImage("brush.png");
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
drink = loadAnimation("drink1.png","drink2.png");
Mmove = loadAnimation("move.png","move1.png");
eat = loadAnimation("eat1.png","eat2.png");
bath = loadAnimation("bath1.png","bath2.png");
}

function setup() {
  createCanvas(800,400);

  bGround = createSprite(400,200,4,4);
  bGround.addImage("iss",bg);
  bGround.scale=0.2;

  naut = createSprite(400,200);
  naut.addAnimation("sleeping", sleep);
 naut.scale =0.1;
}

function draw() {
  //background(255,255,255);

  if(keyDown("UP_ARROW")){
    naut.addImage("brushing",brush);
    naut.changeImage("brushing");
    naut.x=400;
    naut.y=200;
    naut.velocityX=0;
    naut.velocityY=0;
  }

  if(keyDown("DOWN_ARROW")){
    naut.addAnimation("gyming", gym);
    naut.changeAnimation("gyming");
    naut.x=400;
    naut.y=200;
    naut.velocityX=0;
    naut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    naut.addAnimation("eating", eat);
    naut.changeAnimation("eating");
    naut.x=185;
    naut.y=295;
    naut.velocityX=2;
    naut.velocityY=-2;
  }

  if(keyDown("RIGHT_ARROW")){
    naut.addAnimation("bathing",bath);
    naut.changeAnimation("bathing");
    naut.x=400;
    naut.y=200;
    naut.velocityX=0;
    naut.velocityY=0;
  }

  if(keyDown("m")){
    naut.addAnimation("Mmoving",Mmove);
    naut.changeAnimation("Mmoving");
    //naut.x=400;
    //naut.y=200;
    naut.velocityX = 0;
    naut.velocityY = 0;
    naut.scale =0.1;
  }
  drawSprites();
}
var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();
     
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(star.position.y, star.position.x , 5 , { isStatic:false});
	World.add(world, starBody);
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  keyPressed()
  
  Engine.update(engine)


  if(star.y > 470 && starBody.position.y > 470 )
  {
   starBody.Body.setStatic(starBody,false); 
  }

  drawSprites();
}

function keyPressed() {
	//write code here
	if(keyDown("right_arrow")){
		fairy.x=fairy.x+4
	}
	if(keyDown("left_arrow")){
		fairy.x=fairy.x-4
	}
	if(keyDown("down_arrow")){
		star.velocityY=3
	}
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject;
var mango1,slingshot;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1050,100);
	mango2=new mango(970,100);
	mango3=new mango(1130,220);
	mango4=new mango(970,200);
	mango5=new mango(1120,50);
	mango6=new mango(1125,130);
	mango7=new mango(1190,160);
	mango8=new mango(1230,240);
	mango9=new mango(1050,200);
	mango10=new mango(930,270);

	treeObj=new tree(1050,600);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(300,100,30);
	
	slingShot = new Slingshot(stone.body,{x:230,y:410});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,350);
  strokeWeight(4);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  groundObject.display();
  stone.display();
  slingShot.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);
 detectCollision(stone,mango9);
 detectCollision(stone,mango10);

 drawSprites();
}

  function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
    slingShot.fly();
}

function detectCollision(lstone,lmango){
//var mangoBodyPosition=lmango.body.postion;
//var stoneBodyPosition=lstone.body.position;
//var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

var distance=dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
  if(keyCode===32){
      slingShot.attach(stone.body)
  }
}
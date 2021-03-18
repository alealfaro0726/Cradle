
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob (505,400,20,30);
	bob2 = new Bob (540,400,20,30);
	bob3 = new Bob (570,400,20,30);
	bob4 = new Bob (605,400,20,30);
	bob5 = new Bob (625,400,20,30);

	roof = new Roof (400,200,350,20);
	//chain = new Chain(200,300,40,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof.display();
	chain.display();

  drawSprites();
 

}




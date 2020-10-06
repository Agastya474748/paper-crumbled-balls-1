var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	
	
	ground = new Ground(width/2, 650, width, 10 );
	box1  = new Box(640,633,80,20)
	box2 = new Box(590,605,20,80)
    box3 = new Box(690,605,20,80)
	paper = new Paper(100,605,5)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();

  ground.display()
  box1.display()
  box2.display()
  box3.display()
}        
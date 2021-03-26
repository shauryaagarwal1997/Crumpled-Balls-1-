const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var paper;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(80,530,20);
	box1=new Dustbin(585,580,150,20);
	box2=new Dustbin(505,555,20,70);
	box3=new Dustbin(670,555,20,70);
	ground=new Ground(400,600,800,15);

	Engine.run(engine);
  
}


function draw() {
  background("lightgreen");

 paper.display();
 box1.display();
 box2.display();
 box3.display();
 ground.display();
}
function keyPressed(){ 
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.paper,paper.paper.position,{x:55,y:-60})
	}
}
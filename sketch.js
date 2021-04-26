const Engine = Matter.Engine;
const World= Matter.World; 
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world; 
  
 road=new Ground()
 

  Box2=new Box(700,500,100,100)
 Box1=new Box(1000,500,100,100)
 log1=new Log(850,400,400,20)
 Box3=new Box(700,300,100,100)
 Box4=new Box(1000,300,100,100)
 log2=new Log(850,200,400,20)
 pig1=new Pigs(850,500,80,80)
 pig2=new Pigs(850,300,80,80)
 bird1=new Bird(250,500,100,100)
}

function draw() {
  background(0); 
Engine.update(engine); 
Box2.display()
Box1.display()
road.display()
log1.display()
Box3.display()
Box4.display()
log2.display()
pig1.display()
pig2.display()
bird1.display()
}

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground;
var ball;
function setup() {

  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var ground_option={
    isStatic: true
  }
  ground=Bodies.rectangle(0,390,200,10,ground_option);
  World.add(world,ground);
  var ball_option={
    restitution:1.0
  }
  ball=Bodies.circle(100,200,30,ball_option);
  World.add(world,ball);
  console.log(ground.position.x);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,800,10);


  ellipse(ball.position.x,ball.position.y,20);
    drawSprites();
                                                                                                                                                                                             
}
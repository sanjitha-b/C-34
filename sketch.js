const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground, building1,ball,rope

function setup() {
  var canvas = createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,450,1200,20)
  building1 = new Building (900,250,60,100)
  building2 = new Building (900,150,60,100)
ball = new Wreckingball(700 , 100, 50 )
rope = new Slingshot (ball.body, {x:700,y:50})
}

function draw() {
background("lightblue")
Engine. update( engine )
ground.display()
building1.display()
building2.display()
ball.display()
rope.display()


}
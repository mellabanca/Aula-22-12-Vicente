const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bolita;
var chaozito;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var chaozito_options = {
      isStatic: true
  }

  chaozito = Bodies.rectangle(0,390,400,20, chaozito_options);
  World.add(world,chaozito);

  var bolita_options = {
      restitution: 0.95,
      frictionAir: 0.01
  }

  bolita = Bodies.circle(100,10,20, bolita_options);
  World.add(world, bolita);

  ellipseMode(CENTER);
}

function draw() 
{
  background("grey");
  Engine.update(engine);

  ellipse(bolita.position.x, bolita.position.y, 20);

  rect(chaozito.position.x, chaozito.position.y, 400, 20);
}


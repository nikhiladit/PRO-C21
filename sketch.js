
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundobj;
var stand1;
var stand2;

function preload() {

}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ball_options = {
		//isStatic:false,
		restution: 0.3,
		//friction:0,
		//density:1.2,
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200, 200, 50, ball_options)
	fill('white')
	World.add(world, ball),

		groundobj = new Ground(400, 360, 800, 10);
	World.add(world, groundobj);

	leftside = new Ground(450, 300, 10, 105);
	World.add(world, leftside);

	rightside = new Ground(610, 300, 10, 105);
	World.add(world, rightside);

	console.log(world, groundobj);

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {
	background(0);

	ellipse(ball.position.x, ball.position.y, 15);

	groundobj.display();
	leftside.display();
	rightside.display();

	Engine.update(engine);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.25, y: -0.25 })

		console.log("hello");
	}
}




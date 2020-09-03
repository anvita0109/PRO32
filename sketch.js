
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ground2;
var block1, block2 ,block3 ,block4 ,block5 ,block6 ,block7 ,block8;
var block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18;
var block19, block20, Block21;

var block21, block22 ,block23 ,block24 ,block25 ,block26 ,block27 ,block28;
var block29, block30, block31, block32, block33, block34;
var block35, block36, block37, block38;
var block39, block40, Block41;

var ball;


function preload()
{

}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(450, 350, 300, 20);
	ground2 = new Ground(800, 500, 300, 20);

	block1 = new Box(330, 330, 30, 40);
	block2 = new Box(360, 330, 30, 40);
	block3 = new Box(390, 330, 30, 40);
	block4 = new Box(420, 330, 30, 40);
	block5 = new Box(450, 330, 30, 40);
	block6 = new Box(480, 330, 30, 40);
	block7 = new Box(510, 330, 30, 40);
  	block8 = new Box(540, 330, 30, 40);

	block9 = new Box2(360, 290, 30, 40);
	block10= new Box2(390, 290, 30, 40);
	block11= new Box2(420, 290, 30, 40);
	block12= new Box2(450, 290, 30, 40);
	block13= new Box2(480, 290, 30, 40);
	block14= new Box2(510, 290, 30, 40);
 
	block15= new Box3(390, 240, 30, 40);
	block16= new Box3(420, 240, 30, 40);
	block17= new Box3(450, 240, 30, 40);
	block18= new Box3(480, 240, 30, 40);	

	block19= new Box4(420, 200, 30, 40);
	block20= new Box4(450, 200, 30, 40);

	Block21= new Box5(435, 160, 30, 40);


	block21 = new Box5(680, 480, 30, 40);
	block22 = new Box5(710, 480, 30, 40);
	block23 = new Box5(740, 480, 30, 40);
	block24 = new Box5(770, 480, 30, 40);
	block25 = new Box5(800, 480, 30, 40);
	block26 = new Box5(830, 480, 30, 40);
	block27 = new Box5(860, 480, 30, 40);
	block28 = new Box5(890, 480, 30, 40);

	block29 = new Box4(710, 440, 30, 40);
	block30 = new Box4(740, 440, 30, 40);
 	block31 = new Box4(770, 440, 30, 40);
	block32 = new Box4(800, 440, 30, 40);
	block33 = new Box4(830, 440, 30, 40);
	block34 = new Box4(860, 440, 30, 40);
	
	block35 = new Box3(740, 400, 30, 40);
 	block36 = new Box3(770, 400, 30, 40);
	block37 = new Box3(800, 400, 30, 40);
	block38 = new Box3(830, 400, 30, 40);

	block39 = new Box2(770, 360, 30, 40);
	block40 = new Box2(800, 360, 30, 40);

	block41 = new Box5(800, 900, 30, 40); 

	ball = Bodies.circle(50, 200, 20);
	World.add(world, ball);

	slingshot = new SlingShot(this.ball, {x: 100, y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();

  Block21.display();

  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();

  block35.display();
  block36.display();
  block37.display();
  block38.display();

  block39.display();
  block40.display();

  block41.display();

  slingshot.display();

  ellipseMode(CENTER);
  fill("yellow");
  ellipse(ball.position.x, ball.position.y, 50, 50);

}


function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(this.ball);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    console.log(responseJSON);

    var datetime= responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour > 06 && hour < 18){
        bg = "sprite/bg.png"
    }
    else{
        bg = "sprites/bg2.jpg"
    };

    backgroundImg = loadImage(bg);

}
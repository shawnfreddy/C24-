const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ourEngine, ourWorld;
var ground;
var box1,box2,box3,box4,box5,box6;
var log1,log2,log3,log4,log5;
var pig1,pig2;

function setup(){
    var canvas = createCanvas(1200,400);
    ourEngine = Engine.create();
    ourWorld = ourEngine.world;
 
    ground=new Ground(600,height,1200,20);
    box1= new Box(700,320,70,70);
    box2=new Box(920,320,70,70);   
    pig1=new Pig(810,350);
    log1=new Log(810,260,300,PI/2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(ourEngine);
    
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    log1.display();

}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper;
var box,box1,box2;
var outline,outline1,outline2;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    paper= new Paper(400,360,20);
    
    //box= new Box(900,320,10,150);
  // box1= new Box(780,320,10,150);
   //box2= new Box(840,320,130,150);

    outline=new Outline(920,320,10,150);
    outline1= new Outline(760,320,10,150);
    outline2= new Bottom(840,390,150,150);

    
    


    
    
   

}



function draw(){
    background(255);
    Engine.update(engine);

    paper.display();

    ground.display();

    outline.display();
   outline1.display();
   outline2.display();
   
    //box.display();
    //box1.display();
   //box2.display();
    
    



    
}


    function keyPressed(){
   if(keyCode===UP_ARROW){
       Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-50});
   }
    }

    
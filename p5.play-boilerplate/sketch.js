const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var dividers  = [];

var particle;

var score = 0;
var gameState = "play";
var turn = 0;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  frameRate(45);

  ground = new Ground(240, 790, 480, 10);

  for(var j=40; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }
  for(var j=15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }
  for(var j=40; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j=15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }
  for( i=0; i <=width; i=i+80){
    dividers.push(new Division(i, 660.5));
  }




}  
  

function draw(){ 
  background("black"); 
  ground.display();
  for(i=0; i<dividers.length; i++){
    dividers[i].display();
  } 
  for(n=0; n<plinkos.length; n++){
    plinkos[n].display();
  }
  text("Score:"+ score, 50, 20);
  Engine.update(engine);
  drawSprites();

  if(frameCount%90==0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10));
  }


  
  for(j=0; j<particles.length; j++){
    particles[j].display();
  }
  
 
 if(particle!==null){
    particle.display();
     
    /*if(particle.body.position.y>760){
      if(particle.body.position.x < 300){
        score=score+500;
        particle=null;
        if(turn=>5) gameState = end;
      }
    }
   
    if(particle.body.position.y>760){
      if(particle.body.position.x > 301 && particle.body.position.x < 600){
        score=score+100;
        particle=null;
        if(turn=>5) gameState = end;
      }
    }
 

  if(particle.body.position.y>760){
    if(particle.body.position.x > 601 && particle.body.position.x < 900){
      score=score+200;
      particle=null;
      if(turn=>5) gameState = end;
    }
  }*/

}

}

function mousePressed(){
  if(gameState!=="end"){
    turn++;
    particle=new Particle(mouseX, 10);
    alert(particle);
  }
}
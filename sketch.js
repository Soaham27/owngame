var boyanime,boy 
var obstacleimg,obstacle;
var roadImg,road;



function preload(){
  boyanime = loadAnimation("boy1.png","boy2.png","boy3.png")
obstacleimg = loadImage("fireball.png")
roadImg = loadImage("road.png")
}


function setup() {
  
  createCanvas(800,400);
road = createSprite(400,170,400,20)
road.addImage("road",roadImg)
road.scale=1.3
road.velocityY = 3
  boy = createSprite(400,350,20,30)
  boy.addAnimation("boy",boyanime)
  boy.x=camera.position.x+270
       
  
 
}
  

function draw() {
  background(0);  
  //if(gameState === play)
  if(road.y>300){
  road.y=road.height/2
  }
  if(keyIsDown(LEFT_ARROW)){
boy.x-=2
  }
  if(keyIsDown(RIGHT_ARROW)){
    boy.x+=2
      }
  drawSprites();
spawnObstacle()
}
function spawnObstacle(){
if(frameCount%80 === 0){
  var obstacle = createSprite(200,20,50,50)
  obstacle.addImage("obstacle",obstacleimg)
  obstacle.scale = 0.3
  obstacle.velocityY = 5
  obstacle.x=Math.round(random(50,750))
  obstacle.lifetime = 800
}
}
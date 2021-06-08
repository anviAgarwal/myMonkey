
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground, invisibleGround, groundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 groundImage=loadImage("ground.png");
  

 
  
}



function setup() {
  createCanvas(450,450);
  // ground.debug=true;
  ground = createSprite(200,380,400,20);
ground.addAnimation("moveing",groundImage)
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
 console.log(ground.x);
  
  monkey=createSprite(200,340,10,10);
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale=0.1;
  
  invisibleGround = createSprite(200,380,400,20);
  invisibleGround.visible = false;
  
  FoodGroup=new Group();
  ObstaclesGroup=new Group();
  }





function draw() {
  
  background("lightblue");
  
if(ground.x<0) {
  ground.x=ground.width/2;
}
 
  
   if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
   monkey.collide(invisibleGround);
  spawnFood();
  spawnObstacle();
  
  drawSprites(); 
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
    if(ObstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        ObstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        ObstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
       
    
    }
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  function spawnFood() {
  
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(100,250);    
    banana.velocityX = -5;
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
  banana.addImage(bananaImage);
  banana.scale=0.05;
   FoodGroup.add(banana);
  }
} 
  function spawnObstacle() {
    
    if (frameCount%300===0){
      obstacle=createSprite(600,345,40,10);
      //obstacle.y=random()
      obstacle.velocityX=-6;
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.15;
    
       
    obstacle.lifetime = 300;
    
    
    ObstaclesGroup.add(obstacle);   
    }
  }
}  








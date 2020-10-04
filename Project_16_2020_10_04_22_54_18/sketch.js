var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, spawnbananas, spawnobstacles;
var bananaGroup, obstacleGroup;
var survivalTime = 0;
var ground;


function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(200,180,800,20);
  ground.x = ground.width/2;
  
  //bananaGroup = new Group();
  //obstacleGroup = new Group();
  
}


function draw() {
  background("white");
  
   ground.velocityX = -3;

  if (ground.x < 0)
  {
    ground.x = ground.width /2;
  }
  
  monkey.collide(ground);
  
  if (keyDown("space"))
  {
   monkey.velocityY = -12 ;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  stroke("black");
  textSize(15);
  fill("black");
  
  survivalTime = Math.ceil(frameCount/getFrameRate());
  text("Survival Time: "+ survivalTime, 450,50);
  
  spawnbananas();
  spawnobstacles();
  
  drawSprites();
}

function spawnbananas()
{
  if (frameCount % 80 === 0)
  {
   banana = createSprite(600,20,40,10);
   banana.scale = 0.1;
    
   banana.y = Math.round(random(20, 100))
    
   banana.addImage(bananaImage);
    
   banana.velocityX = -3;
   banana.lifetime = 220;
  }
  
  //bananaGroup.add(banana);
}

function spawnobstacles()
{
   if (frameCount % 60 === 0)
   {
   obstacle = createSprite(600,165,10,40);
     
   obstacle.velocityX = -4;
   obstacle.addImage(obstacleImage);

   
        
    obstacle.scale = 0.2;
    obstacle.lifetime = 170;
   

    //obstacleGroup.add(obstacle);
 }
}
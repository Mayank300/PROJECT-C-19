 
var monkey_running,monkey;
var  banana_img;

var  stone_img;

var  jungle_img;

var score = 0;

function preload(){
  
  monkey_running= loadAnimation("Monkey_01.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
 

  banana_img = loadImage("banana.png");
  
 stone_img = loadImage("stone.png");
  
 jungle_img = loadImage("jungle.jpg");
  
}

function setup() {
  createCanvas(600, 400);
  
  jungle = createSprite(300,100,10,10);
  jungle.addImage("jungle",jungle_img);
  jungle.x = jungle.width /2;
  jungle.velocityX = -6;
   
  score = score+Math.round(getFrameRate ()/60);
  text("SCORE: " + score,500,50);
  
  monkey = createSprite(150,350,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.15;
  
  
  
 
  
  invisibleGround = createSprite(300,360,600,10);
  invisibleGround.visible = false;
  
  bananaGroup =  new Group();
  stoneGroup =  new Group();
  
}

function draw() {
  background(220);
  
  if(keyDown("space") && monkey.y >= 280){
      monkey.velocityY = -15 ;
  }
  monkey.velocityY = monkey.velocityY + 0.6;
  
   if(jungle.x<0){
        jungle.x= jungle.width/2;
     }
  
  if(stoneGroup.isTouching(monkey)){
     monkey.destroy();
     bananaGroup.visible = false;
     stoneGroup.visible = false;
     jungle.visible = false;
     bananaGroup.destroyEach();
     stoneGroup.destroyEach();
      
     fill("brown");
     textSize(60);
     text("GAME OVER",150,200);
     text("SCORE: " + score,150,250);
     }
  
  if(bananaGroup.isTouching(monkey)){
      score = score+2;
      bananaGroup.destroyEach();
  }
  
      switch(score){
       case 10: monkey.scale = 0.12;
        break;
        case 20: monkey.scale = 0.14;
        break;
        case 40: monkey.scale = 0.16;
        break;
        case 60: monkey.scale = 0.18;
        break;
        default:break;
        }
  
  monkey.collide(invisibleGround);
  stoneGroup.collide(invisibleGround);
  spawnBanana();
  spawnStone();
  drawSprites();  
  fill("brown");
  textSize (40);
  text("SCORE: " + score,400,50);
}


 function spawnBanana(){
    if(frameCount % 80 ===0){
     var banana = createSprite(500,(random(150,200)));
       banana.addImage("banana",banana_img);
       banana.scale = 0.05;
       banana.velocityX = -5;
       
       banana.lifetime = 120;
       bananaGroup.add(banana);
    }
  }
  
function spawnStone() {
  if (frameCount % 80 === 0) {
    var stone = createSprite(600,300,10,40);
     stone.velocityX = -4;
     stone.setCollider("circle",0,0,150);
     stone.addImage("stone",stone_img);
     stone.scale = 0.15;
     stone.lifetime = 150;
     stoneGroup.add(stone);
  }
}
  








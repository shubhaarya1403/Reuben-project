var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;

var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;

var redBubbleGroup, redBubbleGroup, bulletGroup;


var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("ggun.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("pea.png")
  blueBubbleImg = loadImage("obstacle1.png")
  redBubbleImg = loadImage("obstacle.png")
  backBoardImg= loadImage("background.jpg")
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  backBoard= createSprite(800, 400, 100,height);
  backBoard.addImage(backBoardImg)
  backBoard.scale = 1.5
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale = 0.4
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background("#BDA297");
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState===1){
    gun.y=mouseY 
   
   
  

    if (frameCount % 80 === 0) {
      drawblueBubble();
    }

    if (frameCount % 100 === 0) {
      drawredBubble();
    }

    if(keyDown("space")){
      shootBullet();
    }

  /*  if (blueBubbleGroup.collide(bulletGroup)){
      handleGameover(blueBubbleGroup);
    }
    if (redBubbleGroup.collide(bulletGroup)) {
      handleGameover(redBubbleGroup);
    }*/
    
    if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }

    if(redBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(redBubbleGroup);
    }

    drawSprites();
  }
    
  
}

function drawblueBubble(){
  bluebubble = createSprite(800,random(20,780),40,40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale = 0.3;
  bluebubble.velocityX = -8;
  bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble);
  //backBoard.depth = bluebubble.depth
  //bluebubble.depth = bluebubble.depth+1;
}
function drawredBubble(){
  redbubble = createSprite(800,random(20,780),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale = 0.3;
  redbubble.velocityX = -8;
  redbubble.lifetime = 400;
  redBubbleGroup.add(redbubble);
  //backBoard.depth = redbubble.depth
  //redbubble.depth = redbubble.depth+1;
}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.05
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}

function handleBubbleCollision(bubbleGroup){
    if (life > 0) {
       score=score+1;
    }

    blast= createSprite(bullet.x+60, bullet.y, 50,50);
    blast.addImage(blastImg)

   //  blast= sprite(bullet.x+60, bullet.y, 50,50);
   // blast.addImage(blastImg)

   //  blast= createSprite(bullet.x+60, bullet.y, 50,50);
   // blast.addImage(blastImg)

   //  blast= createSprite(bullet.x+60, bullet.y, 50,50);
   // image(blastImg)


   blast.scale=0.3
   blast.life=20
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()
}

function handleGameover(bubbleGroup){
  
    life=life-1;
    bubbleGroup.destroyEach();
    

    if (life === 0) {
      gameState=2
      
     
    }
  
}

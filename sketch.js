var scene,sceneImage;
var tom,tomWalking,tomSitting,tomSleeping;
var mouse,mouseImage;
var jerryTeasing,jerry,jerry;

function preload() {
    //load the images here
 sceneImage = loadImage("images/garden.png");
 tomWalking = loadAnimation("images/cat2.png","cat3.png");
 tomSitting = loadImage("images/cat4.png");
 tomSleeping = loadImage("images/cat1.png");
 jerryTeasing = loadAnimation("images/mouse2.png");
 jerryStanding = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
scene = createSprite(0,0,1000,800);
scene.addImage("scene",sceneImage);

jerry = createSprite(50,750);
jerry.addImage("jerryStanding",jerryStanding);

tom = createSprite(750,750);
tom.addImage("tomSleeping",tomSleeping);
 
}

function draw() {

    background(sceneImage);
    //Write condition here to evalute if tom and jerry collide
     if(tom.x - mouse.x < (cat.width - mouse.width)/2){
      tom.changeAnimation(tomSitting);
      jerry.changeAnimation(jerryStanding);
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
     tom.velocityX = 5;
     tom.addAnimation("walkingTom",tomWalking);
     tom.changeAnimation("walkingTom");
     jerry.addAnimation("teasingJerry",jerryTeasing);
     jerry.changeAnimation("teasingJerry");
 }

}

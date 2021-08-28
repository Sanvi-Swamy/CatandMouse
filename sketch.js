
function preload() {
    Cat1Img=loadImage("images/cat1.png");
    Cat2Img=loadAnimation("images/cat2.png", "images/cat3.png");
    Cat4Img=loadImage("images/cat4.png");
    gardenImg=loadImage("images/garden.png");
    mouse1Img=loadImage("images/mouse1.png");
    mouse2Animation=loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse4Img=loadImage("images/mouse4.png");
    

}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(600,700);
    cat.addImage(Cat1Img); 
    cat.scale=0.2;
    mouse=createSprite(100,700);
    mouse.addImage(mouse1Img);
    mouse.scale=0.2;

}

function draw() {

    background(gardenImg);
    if(cat.x-mouse.x< (cat.width-mouse.width)/2){
        cat.velocityX=0;
    }
    
    drawSprites();
}


function keyPressed(){

 if(keyIsDown(LEFT_ARROW)){
    cat.addAnimation("CatWalking",Cat2Img)
    cat.changeAnimation("CatWalking");
    cat.frameDelay=25;
    cat.velocityX=-4;
 }

 if(keyIsDown(RIGHT_ARROW)){
    mouse.addAnimation("MouseTeasing",mouse2Animation)
    mouse.changeAnimation("MouseTeasing");
    mouse.frameDelay=25;
 }


}

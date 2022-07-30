var bg,bgimg
var pacman,pacmanimg
var ground
var ghost,ghostimg


function preload(){
 bgimg=loadImage("city-night.gif")
 pacmanimg=loadImage("pac-man.gif")
 ghostimg=loadImage("ghost.gif")


}
function setup(){
 createCanvas(800,500)
 bg=createSprite(400,250,800,500)
 bg.addImage("moving",bgimg)
 bg.scale=1.8

 pacman=createSprite(99,415,20,20)
 pacman.addImage("jumping",pacmanimg)
 pacman.scale=0.3

 ground=createSprite(400,500,800,10)
 ground.visible= false
}
function draw(){
 background("red")
 if(keyDown("space")){
    pacman.velocityY=-10
 }
 pacman.velocityY=pacman.velocityY+0.8
 pacman.collide(ground)
 createghost()

 drawSprites()
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);

}
function createghost(){
 if(frameCount %150===0){  
 ghost=createSprite(780,340.20,20)
 ghost.addImage("runing",ghostimg)
 ghost.velocityX=-3
}
}
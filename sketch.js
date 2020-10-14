var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200,200,50,20);
  fixedrect.shapeColor = "green";
  
  movingrect=createSprite(300,200,50,20);
  movingrect.shapeColor= "green";
  fixedrect.debug=true;
  movingrect.debug=true;
}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY ;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y<movingrect.width/2+fixedrect.width/2
    && fixedrect.y-movingrect.y<movingrect.width/2+fixedrect.width/2)
  {
    movingrect.shapeColor= "red";
    fixedrect.shapeColor= "red";
  }
  else
  {
    movingrect.shapeColor= "green";
    fixedrect.shapeColor= "green";
  }
  drawSprites();
}
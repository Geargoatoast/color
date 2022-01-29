var bots;
function setup() {
  createCanvas(400, 400);
  background(53);
  bots = createSprite(200,200,50,50);
}

function draw() {
 // background(220);
  if (keyisDown(left_arrow)){
background("red");
bots.shapeColor="blue";
bots.x=bots.x-5
  }
  if(keyisDown(up_arrow)){
    background("yellow");
    bots.shapeColor="black"
    bots.y=bots.y-5
  }
  if(keyisDown(right_arrow)){
    background("white");
    bots.shapeColor="orange"
    bots.x=bots.x+5
  }
  if(keisDown(down_arrow)){
    background("green");
    bots.shapeColor="grey"
    bots.y=bots.y+5

  }
  drawSprites();
}

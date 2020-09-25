var ball,db,ballP,dataPosition;

function setup(){
    createCanvas(500,500);
    db=firebase.database();
    ballP = db.ref("ball/position");
    ballP.on("value",readPosition,showError)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   ballP.set({
       x : ball.x + x,
       y : ball.y + y
   })
}


function showError(ERROR) {
    console.log(ERROR)
}

function readPosition(data) {
    dataPosition = data.val()
    ball.x = dataPosition.x
    ball.y = dataPosition.y
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

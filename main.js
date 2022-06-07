leftWristX=0;
rightWristX=0;
difference=0;
noseX=0;
noseY=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(650, 750);

    canvas = createCanvas(550, 550);
    canvas.position(1080, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('PoseNet Is Initialized!');
}

function draw(){
    background('#969A97');
    textSize(50);
    fill("black");
    text("Increase my size!", noseX, noseY+100);
    textSize(difference);
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
    }
}


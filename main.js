function setup(){
    video = createCapture(VIDEO);
    video.size(700,700);

    canvas=createCanvas(500,500);
    canvas.position(700, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    background('#D3D3D3')
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var harry_potter = "";
var peter_pan = "";
function preload() {
    harry_potter = loadSound("music.mp3");
    peter_pan = loadSound("music2.mp3");
}
function setup() {
    var canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + " Left Wrist Y = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist Y = " + rightWristX + " Right Wrist Y" + rightWristY);
    }
}
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var harry_potter = "";
var peter_pan = "";
var scoreLeftWrist = 0;
var scoreRightWrist = 0;
var song1_status = "";
var song2_status = "";
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
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist > 0.2) {
        song1_status = harry_potter.isPlaying();
        console.log("harry_potter_status = " + song1_status);
        circle(leftWristX, leftWristY, 20);
        peter_pan.stop();
        harry_potter.stop();
        if(song1_status = "false"){
            harry_potter.play();
            document.getElementById("song_name").innerHTML = " Song Currently Playing: Harry Potter Theme ";
        }
    }
    if(scoreRightWrist > 0.2){
        song2_status = peter_pan.isPlaying();
        console.log("peter_pan_status = " + song2_status);
        circle(rightWristX, rightWristY, 20);
        harry_potter.stop();
        peter_pan.stop();
        if(song2_status = "false"){
            peter_pan.play();
            document.getElementById("song_name").innerHTML = " Song Currently Playing: Peter Pan Theme ";
        }
    }
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("Score of Left Wrist = " + scoreLeftWrist + "Score of Right Wrist = " + scoreRightWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + " Left Wrist Y = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist Y = " + rightWristX + " Right Wrist Y" + rightWristY);
    }
}
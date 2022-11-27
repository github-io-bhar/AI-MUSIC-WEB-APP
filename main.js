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
}
function draw() {
    image(video, 0, 0, 600, 500);
}
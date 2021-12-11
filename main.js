img = "";

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
image(img, 0, 0, 640, 420);
fill("red");
text("Dog", 47, 80);
noFill();
stroke("red");
rect(30, 60, 450, 350);
}

function modelLoaded(){
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

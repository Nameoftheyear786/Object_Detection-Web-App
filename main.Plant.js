function setup(){
    canvas = createCanvas(380 , 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
}
img = ""; 
status = "";
objects = [];
function preload()
{
    img = loadImage('Garden.jpeg')
}

function draw(){
    if(status= ""){
       for(i = 0; i < objects.length; i++){
           percent = floor(objects[i].confidence* 100);
           text(objects[i].label + "", + percent + "%" , objects[i].x + 15, object[i].y +15);
           rect(objects[i].x, objects[i].y, objects[i].width, object[i].height);
       }
    }
}



function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

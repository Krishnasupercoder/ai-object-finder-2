var storessd="";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    modelloaded = ml5.objectDetector("cocossd",alerter);
    document.getElementById("status").innerHTML="Status : Detecting Object";
    webcam = createCapture(VIDEO);
webcam.hide();
}

function load(){
    storemodel = ml5.objectDetector("cocossd",alerter);
    document.getElementById("status").innerHTML ="Status : Detecting Objects"
   }
   
   function modelloaded(){
    console.log("Model Has Been Loaded");
    storessd= true:
   }
   function draw(){
    webcam.detect(video,gotresults);
   }

img =""
sstatus =""
objects =""

function setup()
{
    canvas = createCanvas(380,380);
    canvas.position(300,150);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
}


function draw()
{
 image(video,0,0,380,380);

if(sstatus !="")
{
for(i=0; i < objects.length; i++ )
{
    document.getElementById("status").innerHTML = "status : Object Detected";
    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x , objects[i].y, objects[i].width, objects[i].height);
    rect(objects[i].x , objects[i].y, objects[i].width, objects[i].height);
}
}



 /*fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
   rect(30,60,450,350);

   fill("#FF0000");
   text("cat",320,75);
   noFill();
   stroke("#FF0000");
   rect(300,60,320,320);*/
}

function modelLoaded()
{
    console.log("Model Loaded!");
    sstatus = true;
   objectDetector.detect(video, gotResult);
}

function gotResult(error, results)
{
   if(error)
   {
       console.log(error);
   }
   console.log(results);
   objects = results;
}

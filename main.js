Webcam.attach("camera");
camera=document.getElementById("camera");

Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});

function s(){
Webcam.snap(function(pic){
document.getElementById("result").innerHTML='<img id="x" src="'+pic+'"/>';
});
}
console.log("ml5 version: ",ml5.version);
y=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IHZAtigbf/model.json',modelLoaded);

function modelLoaded(){
console.log("model is loaded");
}

function i(){
m=document.getElementById("x");
y.classify(m,getResult);
}

function getResult(error,result){
if (error) {
 console.log(error);   
}
else{
console.log(result);
document.getElementById("k").innerHTML=result[0].label;
document.getElementById("z").innerHTML=(result[0].confidence*100).toFixed(2)+"%";
}
}
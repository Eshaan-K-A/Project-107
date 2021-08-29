prediction1 = "";
prediction2 = "";

 Webcam.set({
     height: 300,
     width: 350,
     image_format: "png",
     png_quality: 100 });

Webcam.attach("#camera");

function captureImage(){
    Webcam.snap(function (image){
       document.getElementById("camera").innerHTML = "<img src = '"+image+"' id = 'imageTag'>"; 
    });
}

console.log("ml5 version ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Bwz_CMpct/model.json", function(){
    console.log("Model Loaded");
});

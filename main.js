var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
var img_id;
var speak_data;

function start()
{
    recognition.onresult();
    recognition.start();
    //document.getElementById("textbox").innerHTML = "";
}

recognition.onresult = function(event) {
    console.log(event);

    //var Content = event.results[0][0].transcript;
    

    //document.getElementById("textbox").innerHTML =Content;
    console.log(Content);
    (Content =="Selfie")
    
    Webcam.attach(camera);
       
    
    
}
speak();

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
});
camera = document.getElementById("camera");
function speak(){
    var synth = window.speechSynthesis;

    

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    

    setTimeout(function()
{
    img_id="selfie1";
    take_snapshot();
    speak_data = "Taking your Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},5000);

setTimeout(function()
{
    img_id="selfie2";
    take_snapshot();
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},10000);
setTimeout(function()
{
    img_id="selfie3";
    take_snapshot();
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},15000);

}



function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").inerHTML = '<img id="selfie1" src="'+data_uri+'"/>';

        }
        if(img_id=="selfie2"){
            document.getElementById("result2").inerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
            
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").inerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
            
        }
    });
}



function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie1").src;
    link.href=image;
    link.click();
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie2").src;
    link.href=image;
    link.click();
}


function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie3").src;
    link.href=image;
    link.click();
}
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("speech_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("speech_box"). innerHTML = Content;

    if(Content == "Take my selfie" || Content == "Take my selfie."){
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpg',
    jpg_quality:100
});
Webcam.attach(camera);

function speak(){
    console.log("3");
    var synth = window.speechSynthesis;
    speak_data = "Taking selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    console.log("4");

    setTimeout(function(){
        take_spanshot();
        save();
    },5000);
}

function take_spanshot(){
    Webcam.snap(function(data_uri){
        console.log(data_uri);
        document.getElementById("result").innerHTML = "<img id = 'selfie'src = '"+data_uri+"'>"
    });
}

function save(){
    link = document.getElementById("link");
    img = document.getElementById("selfie").src;

    link.href = img;
    link.click();
}
    
    
    

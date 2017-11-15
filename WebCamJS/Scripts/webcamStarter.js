
var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var localstream;


// Get the webcam and start it
document.getElementById("webcam").addEventListener("click", function() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // `{ audio: true }` To access the audio
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            video.src = window.URL.createObjectURL(stream);
            localstream = stream;
            video.play();
        });
    }
});


// Stop the Webcam
document.getElementById("stop").addEventListener("click", function () {
    vidOff();
});

// Taking a photo
document.getElementById("capture").addEventListener("click", function () {
    context.drawImage(video, 0, 0, 500, 330);
});


function vidOff() {
    video.pause();
    video.src = "";
    localstream.getTracks()[0].stop();
}


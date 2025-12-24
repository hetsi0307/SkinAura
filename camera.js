const video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({
  video: { facingMode: "user" }
})
.then(stream => {
  video.srcObject = stream;
})
.catch(err => {
  alert("Camera access denied");
});

function startAnalysis() {
  alert("Camera working! Next step: face detection 😊");
}

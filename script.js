const video = document.getElementById("video-feed");
const captureBtn = document.getElementById("capture-btn");

// Check if getUserMedia is supported
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.error("Error accessing the camera:", error);
    });
} else {
  console.error("getUserMedia is not supported on this browser");
}

// Capture button click event
captureBtn.addEventListener("click", function () {
  // Do something with the captured image or video frame
  // For example, you could take a snapshot using canvas
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageDataURL = canvas.toDataURL("image/png");
  console.log("Captured image data URL:", imageDataURL);
});

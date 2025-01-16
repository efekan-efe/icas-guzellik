const playBtn = document.querySelector(".play-btn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const videoFrame = document.getElementById("videoFrame");

// Show popup when play button is clicked
playBtn.addEventListener("click", () => {
  overlay.style.display = "block";
});

// Function to stop video
const stopVideo = () => {
  videoFrame.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', "*");
};

// Close popup when X button is clicked
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  stopVideo();
});

// Close popup when clicking outside the video
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
    stopVideo();
  }
});

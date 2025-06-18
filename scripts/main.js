const trailerBtn = document.getElementById("watch-trailer-btn");
const trailerOverlay = document.getElementById("trailer-overlay");
const trailerVideo = document.getElementById("trailer-video");

// Show trailer and push to history
trailerBtn.addEventListener("click", () => {
  trailerOverlay.style.display = "flex";
  trailerVideo.play();

  // Push a new state to the browser history
  history.pushState({ trailerOpen: true }, "", "#trailer");
});

// Close overlay when back button is pressed
window.addEventListener("popstate", (event) => {
  if (!event.state || !event.state.trailerOpen) {
    // Hide overlay and pause video
    trailerOverlay.style.display = "none";
    trailerVideo.pause();
    trailerVideo.currentTime = 0;
  }
});

const showEpisodesBtn = document.getElementById("show-episodes-btn");

showEpisodesBtn.addEventListener("click", () => {
  window.location.href = "episodes.html"; // Make sure this file exists!
});

function goToEpisode(page) {
    window.location.href = page;
  }

    
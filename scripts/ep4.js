const introVideo = document.getElementById("intro");
    const ep4Video = document.getElementById("ep4");
    const ep4Image = document.getElementById("ep4-image");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");

    introVideo.addEventListener("ended", () => {
      introVideo.classList.remove("visible");
      ep4Video.classList.add("visible");
      ep4Video.play();
    });

    ep4Video.addEventListener("ended", () => {
      ep4Video.classList.remove("visible");
      ep4Image.classList.add("visible");
      prevBtn.style.display = "inline-block";
      nextBtn.style.display = "inline-block";
    });
  
const episodeContent = document.getElementById("episode-content");

intro.addEventListener("ended", () => {
  document.querySelector(".intro-container").style.display = "none";
  episodeContent.classList.remove("hidden");
});

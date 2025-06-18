   const introVideo = document.getElementById("intro");
    const ep1Video = document.getElementById("ep1");
    const ep1Image = document.getElementById("ep1-image");
    const nextBtn = document.getElementById("next-btn");

    introVideo.addEventListener("ended", () => {
      introVideo.classList.remove("visible");
      ep1Video.classList.add("visible");
      ep1Video.play();
    });

    ep1Video.addEventListener("ended", () => {
      ep1Video.classList.remove("visible");
      ep1Image.classList.add("visible");
      nextBtn.style.display = "inline-block";
    });
    
const episodeContent = document.getElementById("episode-content");

intro.addEventListener("ended", () => {
  document.querySelector(".intro-container").style.display = "none";
  episodeContent.classList.remove("hidden");
});

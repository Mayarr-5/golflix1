const introVideo = document.getElementById("intro");
    const ep2Video = document.getElementById("ep2");
    const ep2Image = document.getElementById("ep2-image");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");

    introVideo.addEventListener("ended", () => {
      introVideo.classList.remove("visible");
      ep2Video.classList.add("visible");
      ep2Video.play();
    });

    ep2Video.addEventListener("ended", () => {
      ep2Video.classList.remove("visible");
      ep2Image.classList.add("visible");
      prevBtn.style.display = "inline-block";
      nextBtn.style.display = "inline-block";
    });
  
const episodeContent = document.getElementById("episode-content");

intro.addEventListener("ended", () => {
  document.querySelector(".intro-container").style.display = "none";
  episodeContent.classList.remove("hidden");
});

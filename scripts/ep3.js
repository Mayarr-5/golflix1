const introVideo = document.getElementById("intro");
    const ep3Video = document.getElementById("ep3");
    const ep3Image = document.getElementById("ep3-image");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");

    introVideo.addEventListener("ended", () => {
      introVideo.classList.remove("visible");
      ep3Video.classList.add("visible");
      ep3Video.play();
    });

    ep3Video.addEventListener("ended", () => {
      ep3Video.classList.remove("visible");
      ep3Image.classList.add("visible");
      prevBtn.style.display = "inline-block";
      nextBtn.style.display = "inline-block";
    });
  
const episodeContent = document.getElementById("episode-content");

intro.addEventListener("ended", () => {
  document.querySelector(".intro-container").style.display = "none";
  episodeContent.classList.remove("hidden");
});

const intro = document.getElementById("intro");

const mediaGroup1 = document.getElementById("media-group-1");
const ep6Video = document.getElementById("ep6");
const ep6Image = document.getElementById("ep6-image");
const nextBtn = document.getElementById("next-step-btn");
const prevBtn = document.getElementById("prev-btn");
const next1Btn = document.getElementById("next1-btn");
const ep6EndVideo = document.getElementById("ep6-end");
const ep6EndImage = document.getElementById("ep6-end-img");
const homeBtn = document.getElementById("home-btn");
const mediaGroup3 = document.getElementById("media-group-3");



const mediaGroup2 = document.getElementById("media-group-2");
const ep6Video2 = document.getElementById("ep6-2");
const ep6Image2 = document.getElementById("ep6-img-2");

mediaGroup1.style.display = "none";
mediaGroup2.style.display = "none";
nextBtn.style.display = "none";
prevBtn.style.display = "none";
next1Btn.style.display = "none";

intro.addEventListener("ended", () => {
  intro.style.display = "none";
  mediaGroup1.style.display = "block";
  ep6Video.style.display = "block";
  ep6Video.play();
});

ep6Video.addEventListener("ended", () => {
  ep6Video.style.display = "none";
  ep6Image.style.display = "block";
  nextBtn.style.display = "flex";
});

nextBtn.addEventListener("click", () => {
  mediaGroup1.style.display = "none";
  mediaGroup2.style.display = "block";
  ep6Video2.style.display = "block";
  ep6Video2.play();
  nextBtn.style.display = "none";
});

ep6Video2.addEventListener("ended", () => {
  ep6Video2.style.display = "none";
  ep6Image2.style.display = "block";
  prevBtn.style.display = "inline-block";
  next1Btn.style.display = "inline-block";
});

next1Btn.addEventListener("click", () => {
  mediaGroup2.style.display = "none";
  mediaGroup3.style.display = "flex";
  ep6EndVideo.style.display = "block";
  ep6EndVideo.play();
  next1Btn.style.display = "none";
  prevBtn.style.display = "none";
});

ep6EndVideo.addEventListener("ended", () => {
  ep6EndVideo.style.display = "none";
  ep6EndImage.style.display = "block";
  homeBtn.style.display = "inline-block";
});

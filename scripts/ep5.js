const intro = document.getElementById("intro");

const mediaGroup1 = document.getElementById("media-group-1");
const ep5Video = document.getElementById("ep5");
const ep5Image = document.getElementById("ep5-image");
const nextBtn = document.getElementById("next-step-btn"); // fixed ID
const prevBtn = document.getElementById("prev-btn");
const next1Btn = document.getElementById("next1-btn");

const mediaGroup2 = document.getElementById("media-group-2");
const ep5Video2 = document.getElementById("ep5-2");
const ep5Image2 = document.getElementById("ep5-img-2");

mediaGroup1.style.display = "none";
mediaGroup2.style.display = "none";
nextBtn.style.display = "none";
prevBtn.style.display = "none";
next1Btn.style.display = "none";

intro.addEventListener("ended", () => {
  intro.style.display = "none";
  prevBtn.style.display = "none";
  mediaGroup1.style.display = "block";
  ep5Video.style.display = "block";
  ep5Video.play();
});

ep5Video.addEventListener("ended", () => {
  ep5Video.style.display = "none";
  ep5Image.style.display = "block";
  nextBtn.style.display = "flex";
  prevBtn.style.display = "none"; 
});

nextBtn.addEventListener("click", () => {
  mediaGroup1.style.display = "none";
  mediaGroup2.style.display = "block";
  ep5Video2.style.display = "block";
  ep5Video2.play();
  nextBtn.style.display = "none";
});

ep5Video2.addEventListener("ended", () => {
  ep5Video2.style.display = "none";
  ep5Image2.style.display = "block";
  prevBtn.style.display = "inline-block";
  next1Btn.style.display = "inline-block";
});

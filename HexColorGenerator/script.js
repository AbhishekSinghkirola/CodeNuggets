"use strict";
/**
 * Generate random hex background Color
 */
const colorEl = document.querySelector("#color");
const changeBtn = document.querySelector(".change");
const copyIcon = document.querySelector(".copy-icon");
const colorText = document.querySelector(".color-text");
const toast = document.querySelector("#toast");

let randomColor = "#000000";
const randomColorGenerator = function () {
  const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "c", "D", "E", "F"];
  let hexValue = "#";
  for (let i = 1; i <= 6; i++) {
    hexValue += hexArr[Math.trunc(Math.random() * hexArr.length)];
  }
  return hexValue;
};

changeBtn.addEventListener("click", function () {
  randomColor = randomColorGenerator();
  document.body.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
});

copyIcon.addEventListener("click", function () {
  navigator.clipboard.writeText(randomColor);
  if (randomColor === "#ffffff") {
    toast.classList.add("toast-white");
  } else {
    toast.classList.remove("toast-white");
  }
  colorText.textContent = randomColor;
  toast.classList.remove("hidden");
  setTimeout(function () {
    toast.classList.add("hidden");
  }, 2000);
});

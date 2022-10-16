"use strict";

import { animate, scroll, stagger, timeline, inView } from "https://cdn.skypack.dev/motion";

window.addEventListener("DOMContentLoaded", start);

//* INITIALIZE
async function start() {
  /*   document.querySelectorAll(".project_card").forEach((card) => card.addEventListener("mouseover", timeline)); */
  inView(header, () => {
    console.log("Element has entered the viewport");
    timeline(sequence);
  });
}

// card animation
const header = document.querySelector(".card_header");

const sequence = [
  [".card_header", { translateY: [200, 0] }, { duration: 0.3 }],
  [".card_header", { opacity: 1 }, { duration: 0.5 }, { at: "-0.5" }],
];

const smallWindow = window.matchMedia("(max-width: 1100px)");

function checkScreen() {
  if (smallWindow.matches) {
    document.querySelector(".mouse_container").style.display = "none";
  } else {
    document.querySelector(".mouse_container").style.display = "flex";
  }
}
// Register event listener
smallWindow.addListener(checkScreen);
// Initial check
checkScreen(smallWindow);

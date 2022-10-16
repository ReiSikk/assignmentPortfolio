"use strict";

import { animate, scroll, stagger, timeline } from "https://cdn.skypack.dev/motion";

window.addEventListener("DOMContentLoaded", start);

//* INITIALIZE
async function start() {
  /*   document.querySelectorAll(".project_card").forEach((card) => card.addEventListener("mouseover", timeline)); */

  console.log("start");
}

// card animation
const sequence = [
  [".card_header", { translateY: [200, 0] }, { duration: 0.3 }],
  [".card_header", { opacity: 1 }, { duration: 0.2 }, { at: "-0.5" }],
];
scroll(timeline(sequence));

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

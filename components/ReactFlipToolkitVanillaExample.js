import Flipper from "react-flip-toolkit/es/core";

const container = document.querySelector(".container");
const square = document.querySelector(".square");
const innerSquare = document.querySelector(".inner-square");

const flipper = new Flipper({ element: container });

flipper.addFlipped({
  element: square,
  flipId: "square",
  onStart: () => console.log("animation started!"),
});

flipper.addInverted({
  element: innerSquare,
  parent: square
});

square.addEventListener("click", () => {
  flipper.recordBeforeUpdate();
  square.classList.toggle("big-square");
  flipper.onUpdate();
});









// import "node_modules/@glid....";

import "@glidejs/glide/dist/css/glide.core.min.css";
// import "@glidejs/glide/dist/css/glide.theme.min.css";

import Glide from "@glidejs/glide";

const slider = new Glide(".glide", {
  type: "carousel",
  startAt: 1,
  perView: 3
}).mount();

// const sliders = document.querySelectorAll(".glide").forEach((slider) => {
//   console.log(slider.classList);

//   return new Glide(`.${slider.classList[1]}`, {
//     type: "carousel",
//     startAt: 1,
//     perView: 3
//   }).mount();
// });

document.querySelector(".glide__arrow--right").addEventListener("click", () => {
  slider.go(">");
});

document.querySelector(".glide__arrow--left").addEventListener("click", () => {
  slider.go("<");
});

"use strict";

const buttonOpenModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const buttonCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < buttonOpenModal.length; i++) {
  buttonOpenModal[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

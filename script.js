"use strict";

const buttonOpenModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const buttonCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// Open Modal when button is click
for (let i = 0; i < buttonOpenModal.length; i++) {
  buttonOpenModal[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

// Close Modal while click close button or outer of modal
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

buttonCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Close Modal When We use escap Key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) closeModal();
  }
});

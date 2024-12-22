const modal = document.querySelector(".modal");
const openmodal = document.querySelector(".openmodal");

const openModal = () => {
modal.classList.remove("close");
}

openmodal.addEventListener("click", () => {
openModal();
});


const closeModal = () => {
modal.classList.add("close");
}

modal.addEventListener("click", () => {
closeModal();
})
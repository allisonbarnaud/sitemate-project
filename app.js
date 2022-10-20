// selectors
const submitButton = document.querySelector('.submit-button');
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const textBox = document.querySelector(".text");

const yesButton = document.querySelector('.yes-button');
const cancelButton = document.querySelector('.cancel-button');

//event listeners
submitButton.addEventListener('click', modalPopup);
yesButton.addEventListener('click', modalCloseYes);
cancelButton.addEventListener('click', modalCloseCancel)


//functions

function modalPopup(event) {
    if (modal == null) return
    modal.classList.add("active");
    overlay.classList.add("active")
}

function modalCloseYes(event) {
    if (modal == null) return
    modal.classList.remove("active");
    overlay.classList.remove("active");
    textBox.textContent = "You clicked Yes"


}

function modalCloseCancel(event) {
    if (modal == null) return
    modal.classList.remove("active");
    overlay.classList.remove("active");
    textBox.textContent = "You clicked Cancel"
}
// selectors
const submitButton = document.querySelector('.submit-button');
const modal = document.querySelector('.modal')
overlay = document.querySelector('.overlay')

const yesButton = document.querySelector('.yes-button');
const cancelButton = document.querySelector('.cancel-button');

//event listeners
submitButton.addEventListener('click', modalPopup);
yesButton.addEventListener('click', modalClose);
cancelButton.addEventListener('click', modalClose)


//functions

function modalPopup(event) {
    if (modal == null) return
    modal.classList.add("active");
    overlay.classList.add("active")
}

function modalClose(event) {
    if (modal == null) return
    modal.classList.remove("active");
    overlay.classList.remove("active");

}
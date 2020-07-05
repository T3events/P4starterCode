// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelector('.modal-btn');

// launch modal event
modalBtn.addEventListener('click', launchModal);

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}



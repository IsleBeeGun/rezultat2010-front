window.modalWindow = document.querySelector('.modal-window');
window.modalBackdrop = document.querySelector('.modal-backdrop');
window.modalExit = document.querySelector('.modal-exit');

window.closeModal = () => {
  window.modalBackdrop.setAttribute('style', 'visibility:hidden; opacity: 0;');
  window.modalWindow.setAttribute('style', 'visibility:hidden; opacity: 0;');
  document.querySelector('html').style.overflowY = 'visible';
};

window.modalExit.addEventListener('click', (event) => {
  closeModal();
});

window.modalBackdrop.addEventListener('click', (event) => {
  closeModal();
});

window.openModal = (msg) => {
  document.querySelector('.modal-message').innerHTML = msg;
  document.querySelector('html').style.overflowY = 'hidden';
  document
    .querySelector('.modal-backdrop')
    .setAttribute('style', 'visibility:visible; opacity: 1;');
  document
    .querySelector('.modal-window')
    .setAttribute('style', 'visibility:visible; opacity: 1;');
};

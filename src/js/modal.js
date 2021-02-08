const modalWindow = document.querySelector('.modal-window');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalExit = document.querySelector('.modal-exit');

const closeModal = () => {
  modalBackdrop.setAttribute('style', 'visibility:hidden; opacity: 0;');
  modalWindow.setAttribute('style', 'visibility:hidden; opacity: 0;');
  document.querySelector('html').style.overflow = 'visible';
};

modalExit.addEventListener('click', (event) => {
  closeModal();
});

modalBackdrop.addEventListener('click', (event) => {
  closeModal();
});

globalThis.openModal = (msg) => {
  document.querySelector('.modal-message').innerHTML = msg;
  document.querySelector('html').style.overflow = 'hidden';
  document
    .querySelector('.modal-backdrop')
    .setAttribute('style', 'visibility:visible; opacity: 1;');
  document
    .querySelector('.modal-window')
    .setAttribute('style', 'visibility:visible; opacity: 1;');
};

const modalMenu = document.querySelector('.modal-menu');
const openModalMenu = document.querySelector('.header-nav-btn');
const closeModalMenu = document.querySelector('.modal-btn');

openModalMenu.addEventListener('click', () => {
  modalMenu.classList.toggle('is-open');
});

closeModalMenu.addEventListener('click', () => {
  modalMenu.classList.remove('is-open');
});

window.addEventListener('click', function (event) {
  if (event.target === modalMenu) {
    modalMenu.classList.remove('is-open');
  }
});

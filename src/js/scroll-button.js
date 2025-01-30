const scrollButton = document.querySelector('.scroll-button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    scrollButton.style.display = 'flex';
  } else {
    scrollButton.style.display = 'none';
  }
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

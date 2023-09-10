const imageContainer = document.querySelector('.image-container');
const image = document.querySelector('.image-container img');

imageContainer.addEventListener('mouseenter', () => {
  image.classList.add('cursor-zoom');
});

imageContainer.addEventListener('mouseleave', () => {
  image.classList.remove('cursor-zoom');
});

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const button = document.querySelector('.form-button');
const galleryContainer = document.querySelector('.gallery-container');

button.addEventListener('click', () => console.log(100));
const buttonMarkup =
  '<button class="loader-button" type="button">Load more</button>';
// galleryContainer.innerHTML = buttonMarkup;
form.addEventListener('submit', async e => {
  e.preventDefault();
  galleryContainer.insertAdjacentHTML('afterbegin', buttonMarkup);
  const testButton = document.querySelector('.loader-button');
  console.log(testButton);
  testButton.addEventListener('click', () => console.log(200));
});

const button = document.getElementById('changeButton');
const input = document.getElementById('textInput');

button.addEventListener('click', () => {
  button.textContent = input.value;
});

const image = document.getElementById('image');
image.src = '/img/1734007967_w600_h600_1734007967.webp'; 


const link = document.getElementById('link');
const linkImage = document.getElementById('linkImage');

link.href = '/img/293578.jpg';
linkImage.alt = 'Новий опис зображення';

const firstListItem = document.querySelector('ul li');
firstListItem.textContent = 'Новий текст для першого елемента';

const imgLinks = [
  'img/img3.jpg',
  'img/img4.jpg',
  'img/img1.jpg'
];

const images = [];
let currentIndex = 0;

// Загружаем все изображения в кэш браузера.
for (let i = 0; i < imgLinks.length; i++) {
  const img = new Image();
  img.src = imgLinks[i];
  images.push(img);
}

// Запускаем смену изображений с задержкой.
const delay = 5000;
setInterval(function() {
  const image = document.getElementById('image');
  image.style.opacity = 0;
  setTimeout(function() {
    image.src = imgLinks[currentIndex];
    currentIndex++;
    if (currentIndex >= imgLinks.length) {
      currentIndex = 0;
    }
    image.style.opacity = 1;
  }, 500); // Wait for the opacity transition to finish
}, delay);

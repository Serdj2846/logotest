var modal = document.querySelector('.modal');
var button = document.querySelector('.restart');
var isModalExpanded = false;

function toggleModalSize() {
  if (isModalExpanded) {
    // Если модальное окно увеличено, устанавливаем размеры 50%
    modal.style.width = '50%';
    modal.style.height = '50%';

    button.style.width = '60px'; // Измените размеры по вашему усмотрению
    button.style.height = '60px';
  } else {
    // Если модальное окно уменьшено или в исходном состоянии, устанавливаем размеры 100%
    modal.style.width = '100%';
    modal.style.height = '100%';

    button.style.width = '120px'; // Измените размеры по вашему усмотрению
    button.style.height = '120px';
  }

  // Инвертируем флаг состояния
  isModalExpanded = !isModalExpanded;
}

button.addEventListener('click', toggleModalSize);


document.addEventListener("DOMContentLoaded", function() {
  // Вращаем индикатор в течение 2 секунд
  const loader = document.querySelector(".loader");
  let rotation = 0;
  const rotationInterval = setInterval(function() {
    rotation += 10;
    loader.style.transform = `rotate(${rotation}deg)`;
  }, 100);

  // Удаляем индикатор и меняем цвет на темно-зеленый после 2 секунд
  setTimeout(function() {
    clearInterval(rotationInterval);
    loader.style.display = "none";
  }, 2000);
});


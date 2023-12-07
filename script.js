document.addEventListener("DOMContentLoaded", function() {
  const game = document.querySelector('.game-container');
  const button = document.querySelector('.full-screen');
  const loader = document.querySelector(".loader");

  // Проверяем существование элементов перед использованием
  if (!game || !button || !loader) {
    console.error("One or more elements not found.");
    return;
  }

  let isModalExpanded = false;

  function toggleModalSize() {
    if (!isModalExpanded) {
      game.style.width = '100%';
      game.style.height = '100%';
      button.style.width = '60px';
      button.style.height = '60px';
    } else {
      game.style.width = '50%';
      game.style.height = '50%';
      button.style.width = '60px';
      button.style.height = '60px';
    }
    // Инвертируем флаг состояния
    isModalExpanded = !isModalExpanded;
  }

  button.addEventListener('click', toggleModalSize);

  // Вращаем индикатор в течение 2 секунд
  let rotation = 0;
  const rotationInterval = setInterval(function() {
    rotation += 10;
    loader.style.transform = `rotate(${rotation}deg)`;
  }, 100);

  // Удаляем индикатор после 2 секунд
  setTimeout(function() {
    clearInterval(rotationInterval);
    loader.style.display = "none";
  }, 2000);
});

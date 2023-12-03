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
  // Отображаем модальное окно
  const modal = document.getElementById("modal");
  modal.style.display = "flex";

  // Вращаем индикатор в течение времени загрузки
  const loader = document.querySelector(".loader");
  let rotation = 0;
  const rotationInterval = setInterval(function() {
    rotation += 10;
    loader.style.transform = `rotate(${rotation}deg)`;
  }, 100);

  // iframe для загрузки игры
  const iframe = document.querySelector("iframe");

  // Ожидаем завершения загрузки iframe
  const checkIframeLoaded = setInterval(function() {
    if (iframe.contentDocument.readyState === "complete") {
      // Очищаем интервал после завершения вращения
      clearInterval(rotationInterval);

      // Скрываем индикатор после загрузки игры
      loader.style.display = "none";
    }
  }, 1000); // проверяем каждую секунду

  // Опционально: добавим таймер для остановки проверки через 10 секунд (измените по необходимости)
  setTimeout(function() {
    clearInterval(checkIframeLoaded);
  }, 10000);
});

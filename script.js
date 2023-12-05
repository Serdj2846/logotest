var modal = document.querySelector('.modal');
var button = document.querySelector('.restart');
var isModalExpanded = false;

function toggleModalSize() {
  if (!isModalExpanded) {
    // Если модальное окно не увеличено, запросите развертывание на весь экран
    if (modal.requestFullscreen) {
      modal.requestFullscreen();
    } else if (modal.mozRequestFullScreen) { // для Firefox
      modal.mozRequestFullScreen();
    } else if (modal.webkitRequestFullscreen) { // для Chrome, Safari и Opera
      modal.webkitRequestFullscreen();
    } else if (modal.msRequestFullscreen) { // для Internet Explorer
      modal.msRequestFullscreen();
    }
    button.style.width = '120px';
    button.style.height = '120px';
  } else {
    // Если модальное окно увеличено, выходите из полноэкранного режима
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // для Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // для Chrome, Safari и Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // для Internet Explorer
      document.msExitFullscreen();
    }
    modal.style.width = '50%';
    modal.style.height = '50%';
    button.style.width = '60px';
    button.style.height = '60px';
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

  // Удаляем индикатор после 2 секунд
  setTimeout(function() {
    clearInterval(rotationInterval);
    loader.style.display = "none";
  }, 2000);
});

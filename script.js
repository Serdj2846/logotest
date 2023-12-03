// Получаем ссылку на модальное окно
var modal = document.querySelector('.modal');

// Получаем ссылку на кнопку
var button = document.querySelector('.restart');

// Функция для изменения размеров модального окна
function resizeModal() {
  // Здесь вы можете устанавливать новые размеры для модального окна
  modal.style.width = '100%';
  modal.style.height = '100%';
}

// Обработчик события клика на кнопке
button.addEventListener('click', resizeModal);

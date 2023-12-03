// весь скрипт — это одна большая функция
(function () {

  // объявляем объект, внутри которого будет происходить основная механика игры
  var Memory = {

    // создаём карточку
    init: function () {
      //  получаем доступ к классам
      this.$game = $(".game");
      this.$modal = $(".modal-overlay");
      this.$restartButton = $("button.restart");
      // добавляем элементам на странице реакции на нажатия
      this.binding();
    },

    // как элементы будут реагировать на нажатия
    binding: function () {
      // и нажатие на кнопку перезапуска игры
      this.$restartButton.on("click", $.proxy(this.reset, this));
    },

    // что происходит при нажатии на кнопку
    reset: function () {
      // прячем модальное окно с поздравлением
      this.hideModal();
      // показываем игровое поле
      this.$game.show("slow");
    },

    // показываем модальное окно
    showModal: function () {
      // плавно делаем блок с сообщением видимым
      this.$modal.show();
    },

    // прячем модальное окно
    hideModal: function () {
      this.$modal.hide();
    },
  };

  // добавляем вызов функции для запуска игры
  $(document).ready(function () {
    Memory.init();
  });

})();

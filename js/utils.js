'use strict';

(function () {
  window.utils = {
    addClassName: function (element, className) {
      element.classList.add(className);
    },
    removeClassName: function (element, className) {
      element.classList.remove(className);
    },
    removeChilds: function (element) {
      element.innerHTML = '';
    },
    createDOMElement: function (tagName, className) {
      var element = document.createElement(tagName);
      element.classList.add(className);
      return element;
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === window.constants.KEYCODE_ESC) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === window.constants.KEYCODE_ENTER) {
        action();
      }
    }
  }
})();

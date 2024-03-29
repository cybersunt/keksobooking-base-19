'use strict';

(function () {
  window.utils = {
    addClassName: function (element, className) {
      element.classList.add(className);
    },
    removeChilds: function (element) {
      element.innerHTML = '';
    },
    createDOMElement: function (tagName, className) {
      var element = document.createElement(tagName);
      element.classList.add(className);
      return element;
    }
  };
})();

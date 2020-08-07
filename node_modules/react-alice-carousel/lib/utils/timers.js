"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;
exports.throttle = throttle;

function debounce(func) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var timer = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      func.apply(_this, args);
      timer = null;
    }, ms);
  };
}

function throttle(func, ms) {
  var isThrottled, savedArgs, savedThis;
  return function () {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;

      if (savedArgs) {
        func.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  };
}
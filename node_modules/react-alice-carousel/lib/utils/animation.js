"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animate = animate;
exports.getTranslateX = getTranslateX;
exports.getTransformMatrix = getTransformMatrix;
exports.isAnimatedItem = exports.getTranslate3dPosition = void 0;

var Utils = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function animate(element, options) {
  var _ref = options || {},
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 0 : _ref$position,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 0 : _ref$duration,
      _ref$transitionTiming = _ref.transitionTimingFunction,
      transitionTimingFunction = _ref$transitionTiming === void 0 ? 'step-start' : _ref$transitionTiming;

  if (Utils.isElement(element)) {
    element.style['transition'] = "transform ".concat(duration, "ms ").concat(transitionTimingFunction);
    element.style['transform'] = "translate3d(".concat(position, "px, 0, 0)");
  }

  return element;
}

function getTranslateX(element) {
  var matrix = getTransformMatrix(element);
  var tx = matrix && matrix[4] || '';
  return Number(tx);
}

function getTransformMatrix(element) {
  if (Utils.isElement(element)) {
    var _getComputedStyle = getComputedStyle(element),
        transform = _getComputedStyle.transform;

    var matched = transform.match(/(-?[0-9.]+)/g);
    return matched || [];
  }

  return [];
}

var getTranslate3dPosition = function getTranslate3dPosition() {
  var currentIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var itemWidth = state.itemWidth,
      items = state.items,
      infinite = state.infinite,
      _state$stagePadding = state.stagePadding,
      stagePadding = _state$stagePadding === void 0 ? {} : _state$stagePadding;

  if (infinite) {
    var paddingLeft = stagePadding.paddingLeft,
        paddingRight = stagePadding.paddingRight;

    if (paddingLeft || paddingRight) {
      currentIndex += 1;
    }
  }

  return (items + currentIndex) * -itemWidth || 0;
};

exports.getTranslate3dPosition = getTranslate3dPosition;

var isAnimatedItem = function isAnimatedItem() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var animationProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var allowFadeOutAnimation = animationProps.allowFadeOutAnimation,
      fadeOutIndex = animationProps.fadeOutIndex;
  return !!allowFadeOutAnimation && fadeOutIndex === i;
};

exports.isAnimatedItem = isAnimatedItem;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWrapperStyles = exports.getStageStyles = exports.getDefaultStyles = exports.itemStyles = exports.getIntermediateTransitionProps = void 0;

var Utils = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getIntermediateTransitionProps = function getIntermediateTransitionProps(condition, duration) {
  var transitionTimingFunction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return condition ? {
    fadeoutAnimationProcessing: true,
    style: {
      transition: 'transform 0ms'
    }
  } : {
    style: {
      transition: "transform ".concat(duration, "ms ").concat(transitionTimingFunction)
    }
  };
};

exports.getIntermediateTransitionProps = getIntermediateTransitionProps;

var itemStyles = function itemStyles(i, state, animationProps) {
  var _ref = animationProps || {},
      _ref$fadeOutOffset = _ref.fadeOutOffset,
      fadeOutOffset = _ref$fadeOutOffset === void 0 ? 0 : _ref$fadeOutOffset;

  var _ref2 = state || {},
      _ref2$itemWidth = _ref2.itemWidth,
      itemWidth = _ref2$itemWidth === void 0 ? 0 : _ref2$itemWidth,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 0 : _ref2$duration;

  return Utils.isAnimatedItem(i, animationProps) ? {
    transform: "translateX(".concat(fadeOutOffset, "px)"),
    animationDuration: "".concat(duration, "ms"),
    width: "".concat(itemWidth, "px")
  } : {
    width: "".concat(itemWidth, "px")
  };
};

exports.itemStyles = itemStyles;

var getDefaultStyles = function getDefaultStyles(options) {
  var _ref3 = options || {},
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? 0 : _ref3$duration,
      _ref3$transitionTimin = _ref3.transitionTimingFunction,
      transitionTimingFunction = _ref3$transitionTimin === void 0 ? '' : _ref3$transitionTimin;

  return {
    transition: "transform ".concat(duration, "ms ").concat(transitionTimingFunction)
  };
};

exports.getDefaultStyles = getDefaultStyles;

var getStageStyles = function getStageStyles() {
  var nextStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var currentStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _nextStyles$translate = nextStyles.translate3d,
      translate3d = _nextStyles$translate === void 0 ? 0 : _nextStyles$translate,
      height = nextStyles.height;
  var transform = "translate3d(".concat(translate3d, "px, 0, 0)");
  return _objectSpread({}, currentStyles, {
    transform: transform,
    height: height
  });
};

exports.getStageStyles = getStageStyles;

var getWrapperStyles = function getWrapperStyles(element) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _Utils$getStagePaddin = Utils.getStagePadding(props),
      paddingLeft = _Utils$getStagePaddin.paddingLeft,
      paddingRight = _Utils$getStagePaddin.paddingRight;

  var height = props.autoHeight && Utils.getGalleryItemHeight(element, props, state);
  var transition = height && "height ".concat(state.duration, "ms");
  return {
    height: height,
    transition: transition,
    paddingLeft: "".concat(paddingLeft, "px"),
    paddingRight: "".concat(paddingRight, "px")
  };
};

exports.getWrapperStyles = getWrapperStyles;
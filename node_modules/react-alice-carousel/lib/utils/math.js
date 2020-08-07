"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIndexForItemHeightCalculation = exports.calculateSlidesOffset = exports.recalculateTranslatePosition = exports.recalculateCurrentSlideIndex = exports.isTheLastDotIndex = exports.getItemIndexForDotNavigation = exports.getDotsNavigationLength = exports.getMaxSwipeLimitIfNotInfinite = exports.shouldRecalculateSwipePosition = exports.getMinSwipeLimitIfNotInfinite = exports.getSlideOffset = exports.getMaxSwipeLimit = exports.getMinSwipeLimit = exports.getMinSwipePosition = exports.getMaxSwipePosition = exports.recalculateCurrentIndexOnBeforeTouchEnd = exports.recalculatePositionOnBeforeTouchEnd = exports.getFadeOutOffsetOnClick = exports.getFadeOutIndexOnClick = exports.getFadeOutOffsetOnDotClick = exports.setStartIndex = exports.getSlideIndexForMultipleItems = exports.getSlideIndexForNotMultipleItems = exports.getActiveSlideIndex = exports.getDotsLength = void 0;

var Utils = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getDotsLength = function getDotsLength(slidesLength, items) {
  if (slidesLength && items) {
    var dots = Math.floor(slidesLength / items);
    return slidesLength % items === 0 ? dots - 1 : dots;
  }

  return 0;
};

exports.getDotsLength = getDotsLength;

var getActiveSlideIndex = function getActiveSlideIndex(isNextSlideDisabled) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var index = props.currentIndex,
      items = props.items,
      _props$slides = props.slides,
      slides = _props$slides === void 0 ? [] : _props$slides;
  var currentIndex = index + items;
  var slidesLength = slides.length;
  return items === 1 ? getSlideIndexForNotMultipleItems(currentIndex, items, slidesLength) : getSlideIndexForMultipleItems(currentIndex, items, slidesLength, isNextSlideDisabled);
};

exports.getActiveSlideIndex = getActiveSlideIndex;

var getSlideIndexForNotMultipleItems = function getSlideIndexForNotMultipleItems(currentIndex, items, slidesLength) {
  if (currentIndex < items) return slidesLength - items;
  if (currentIndex > slidesLength) return 0;
  return currentIndex - 1;
};

exports.getSlideIndexForNotMultipleItems = getSlideIndexForNotMultipleItems;

var getSlideIndexForMultipleItems = function getSlideIndexForMultipleItems(currentIndex, items, slidesLength, isNextSlideDisabled) {
  var dotsLength = getDotsLength(slidesLength, items);
  if (currentIndex === slidesLength + items) return 0;
  if (isNextSlideDisabled || currentIndex < items && currentIndex !== 0) return dotsLength;

  if (currentIndex === 0) {
    return slidesLength % items === 0 ? dotsLength : dotsLength - 1;
  }

  return items > 0 ? Math.floor(currentIndex / items) - 1 : 0;
};

exports.getSlideIndexForMultipleItems = getSlideIndexForMultipleItems;

var setStartIndex = function setStartIndex(childrenLength, index) {
  var startIndex = index ? Math.abs(Math.ceil(index)) : 0;
  return Math.min(startIndex, childrenLength - 1) || 0;
};

exports.setStartIndex = setStartIndex;

var getFadeOutOffsetOnDotClick = function getFadeOutOffsetOnDotClick(itemIndex, currentIndex, itemWidth) {
  if (itemIndex < currentIndex) {
    return (currentIndex - itemIndex) * -itemWidth || 0;
  } else {
    return (itemIndex - currentIndex) * itemWidth || 0;
  }
};

exports.getFadeOutOffsetOnDotClick = getFadeOutOffsetOnDotClick;

var getFadeOutIndexOnClick = function getFadeOutIndexOnClick(currentIndex) {
  return currentIndex === 0 ? 1 : currentIndex + 1;
};

exports.getFadeOutIndexOnClick = getFadeOutIndexOnClick;

var getFadeOutOffsetOnClick = function getFadeOutOffsetOnClick(direction, itemWidth) {
  return direction === 'next' ? itemWidth : -itemWidth;
};

exports.getFadeOutOffsetOnClick = getFadeOutOffsetOnClick;

var recalculatePositionOnBeforeTouchEnd = function recalculatePositionOnBeforeTouchEnd(items, itemWidth) {
  return -getMinSwipePosition(items, itemWidth);
};

exports.recalculatePositionOnBeforeTouchEnd = recalculatePositionOnBeforeTouchEnd;

var recalculateCurrentIndexOnBeforeTouchEnd = function recalculateCurrentIndexOnBeforeTouchEnd(slidesLength, items) {
  return slidesLength - items || 0;
};

exports.recalculateCurrentIndexOnBeforeTouchEnd = recalculateCurrentIndexOnBeforeTouchEnd;

var getMaxSwipePosition = function getMaxSwipePosition(items, itemWidth, slidesLength) {
  return (slidesLength + items) * itemWidth || 0;
};

exports.getMaxSwipePosition = getMaxSwipePosition;

var getMinSwipePosition = function getMinSwipePosition(items, itemWidth) {
  return items * itemWidth || 0;
};

exports.getMinSwipePosition = getMinSwipePosition;

var getMinSwipeLimit = function getMinSwipeLimit() {
  var minSwipePosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stagePadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _stagePadding$padding = stagePadding.paddingLeft,
      paddingLeft = _stagePadding$padding === void 0 ? 0 : _stagePadding$padding;
  return paddingLeft ? minSwipePosition : 0;
};

exports.getMinSwipeLimit = getMinSwipeLimit;

var getMaxSwipeLimit = function getMaxSwipeLimit() {
  var maxSwipePosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stagePadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var itemWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var _stagePadding$padding2 = stagePadding.paddingRight,
      paddingRight = _stagePadding$padding2 === void 0 ? 0 : _stagePadding$padding2;
  return paddingRight ? maxSwipePosition + itemWidth : maxSwipePosition;
};

exports.getMaxSwipeLimit = getMaxSwipeLimit;

var getSlideOffset = function getSlideOffset(itemWidth) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  return Math.min(itemWidth / 2, offset) || 0;
};

exports.getSlideOffset = getSlideOffset;

var getMinSwipeLimitIfNotInfinite = function getMinSwipeLimitIfNotInfinite(items, itemWidth) {
  return items * itemWidth - getSlideOffset(itemWidth) || 0;
};

exports.getMinSwipeLimitIfNotInfinite = getMinSwipeLimitIfNotInfinite;

var shouldRecalculateSwipePosition = function shouldRecalculateSwipePosition(currentPosition, minPosition, maxPosition) {
  return currentPosition >= 0 - minPosition || Math.abs(currentPosition) >= maxPosition;
};

exports.shouldRecalculateSwipePosition = shouldRecalculateSwipePosition;

var getMaxSwipeLimitIfNotInfinite = function getMaxSwipeLimitIfNotInfinite(slidesLength, itemWidth) {
  return slidesLength * itemWidth + getSlideOffset(itemWidth) || 0;
};

exports.getMaxSwipeLimitIfNotInfinite = getMaxSwipeLimitIfNotInfinite;

var getDotsNavigationLength = function getDotsNavigationLength(slidesLength, items) {
  if (Number(items) !== 0) {
    return Math.ceil(slidesLength / items) || 0;
  }

  return 0;
};

exports.getDotsNavigationLength = getDotsNavigationLength;

var getItemIndexForDotNavigation = function getItemIndexForDotNavigation(index, isTheLastIndex, slidesLength, itemsLength) {
  var result = isTheLastIndex ? slidesLength - itemsLength : index * itemsLength;
  return result || 0;
};

exports.getItemIndexForDotNavigation = getItemIndexForDotNavigation;

var isTheLastDotIndex = function isTheLastDotIndex(index, infinite, dotsLength) {
  return infinite === false && index === dotsLength - 1;
};

exports.isTheLastDotIndex = isTheLastDotIndex;

var recalculateCurrentSlideIndex = function recalculateCurrentSlideIndex() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var currentIndex = state.currentIndex,
      _state$slides = state.slides,
      slides = _state$slides === void 0 ? [] : _state$slides;
  return currentIndex < 0 ? slides.length - 1 : 0;
};

exports.recalculateCurrentSlideIndex = recalculateCurrentSlideIndex;

var recalculateTranslatePosition = function recalculateTranslatePosition() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var items = state.items,
      itemWidth = state.itemWidth,
      _state$stagePadding = state.stagePadding,
      stagePadding = _state$stagePadding === void 0 ? {} : _state$stagePadding,
      _state$slides2 = state.slides,
      slides = _state$slides2 === void 0 ? [] : _state$slides2;
  var maxSlidePosition = slides.length - 1;
  var currentIndex = state.currentIndex < 0 ? maxSlidePosition : 0;
  var nextIndex = currentIndex === 0 ? items : maxSlidePosition + items;

  if (stagePadding.paddingLeft || stagePadding.paddingRight) {
    return (nextIndex + 1) * -itemWidth || 0;
  }

  return nextIndex * -itemWidth || 0;
};

exports.recalculateTranslatePosition = recalculateTranslatePosition;

var calculateSlidesOffset = function calculateSlidesOffset(props, state) {
  var items = state.items,
      infinite = state.infinite;
  var offset = infinite && Utils.isStagePadding(props) ? 1 : 0;
  return items + offset;
};

exports.calculateSlidesOffset = calculateSlidesOffset;

var getIndexForItemHeightCalculation = function getIndexForItemHeightCalculation(currentIndex, slidesOffset) {
  return currentIndex + slidesOffset;
};

exports.getIndexForItemHeightCalculation = getIndexForItemHeightCalculation;
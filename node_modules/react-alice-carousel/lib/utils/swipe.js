"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSwipePositionOnBeforeTouchEnd = exports.getSwipeIndexOnBeforeTouchEnd = exports.getSwipeIndex = exports.getSwipeOffset = exports.getSwipeDirection = exports.calculateSwipeIndex = exports.isVerticalTouchMoveDetected = void 0;

var isVerticalTouchMoveDetected = function isVerticalTouchMoveDetected(e, deltaX, deltaY) {
  var gap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
  return deltaY > deltaX && deltaX < gap;
};

exports.isVerticalTouchMoveDetected = isVerticalTouchMoveDetected;

var calculateSwipeIndex = function calculateSwipeIndex(itemWidth, position, direction) {
  var index = getSwipeIndex(position, itemWidth);
  var offset = getSwipeOffset(direction);
  return index + offset;
};

exports.calculateSwipeIndex = calculateSwipeIndex;

var getSwipeDirection = function getSwipeDirection() {
  var prevDeltaX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var deltaX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var vector = Math.round((prevDeltaX - deltaX) * 100);
  return vector < 0 ? 'LEFT' : 'RIGHT';
};

exports.getSwipeDirection = getSwipeDirection;

var getSwipeOffset = function getSwipeOffset(direction) {
  return direction === 'LEFT' ? 1 : 0;
};

exports.getSwipeOffset = getSwipeOffset;

var getSwipeIndex = function getSwipeIndex(position, itemWidth) {
  var swipePosition = Math.abs(position);
  return Math.floor(swipePosition / itemWidth);
};

exports.getSwipeIndex = getSwipeIndex;

var getSwipeIndexOnBeforeTouchEnd = function getSwipeIndexOnBeforeTouchEnd(swipeIndex, items) {
  return swipeIndex - items || 0;
};

exports.getSwipeIndexOnBeforeTouchEnd = getSwipeIndexOnBeforeTouchEnd;

var getSwipePositionOnBeforeTouchEnd = function getSwipePositionOnBeforeTouchEnd(swipeIndex, itemWidth) {
  return swipeIndex * -itemWidth || 0;
};

exports.getSwipePositionOnBeforeTouchEnd = getSwipePositionOnBeforeTouchEnd;
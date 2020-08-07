"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculatePosition = calculatePosition;

var _calculateDuration = require("./calculateDuration");

var _calculateVelocity = require("./calculateVelocity");

function calculatePosition(prevPos, nextPos) {
  var deltaX = prevPos.x - nextPos.x;
  var deltaY = prevPos.y - nextPos.y;
  var absX = Math.abs(deltaX);
  var absY = Math.abs(deltaY);
  var duration = (0, _calculateDuration.calculateDuration)(prevPos.start, Date.now());
  var velocity = (0, _calculateVelocity.calculateVelocity)(absX, absY, duration);
  return {
    deltaX: deltaX,
    deltaY: deltaY,
    absX: absX,
    absY: absY,
    duration: duration,
    velocity: velocity
  };
}
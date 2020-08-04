"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideInfo = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Utils = _interopRequireWildcard(require("../utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SlideInfo = function SlideInfo(_ref) {
  var currentIndex = _ref.currentIndex,
      slidesLength = _ref.slidesLength;
  var info = Utils.getSlideInfo(currentIndex, slidesLength);
  return _react["default"].createElement("div", {
    className: "alice-carousel__slide-info"
  }, _react["default"].createElement("span", {
    className: "alice-carousel__slide-info-item"
  }, info.slideIndex), _react["default"].createElement("span", {
    className: "alice-carousel__slide-info-item alice-carousel__slide-info-item--separator"
  }, "/"), _react["default"].createElement("span", {
    className: "alice-carousel__slide-info-item"
  }, info.slidesLength));
};

exports.SlideInfo = SlideInfo;
SlideInfo.propTypes = {
  currentIndex: _propTypes["default"].number.isRequired,
  slidesLength: _propTypes["default"].number.isRequired
};
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DotsNavigation = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Utils = _interopRequireWildcard(require("../utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DotsNavigation = function DotsNavigation(_ref) {
  var state = _ref.state,
      _onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave;
  var slides = state.slides,
      items = state.items,
      infinite = state.infinite;

  var _Utils$itemInfo = Utils.itemInfo(state),
      isNextSlideDisabled = _Utils$itemInfo.isNextSlideDisabled;

  var dotsLength = Utils.getDotsNavigationLength(slides.length, items);
  return _react["default"].createElement("ul", {
    className: "alice-carousel__dots"
  }, slides.map(function (item, i) {
    if (i < dotsLength) {
      var isTheLastDotIndex = Utils.isTheLastDotIndex(i, infinite, dotsLength);
      var itemIndex = Utils.getItemIndexForDotNavigation(i, isTheLastDotIndex, slides.length, items);
      var activeIndex = Utils.getActiveSlideIndex(isNextSlideDisabled, state);
      var className = activeIndex === i ? ' __active' : '';
      return _react["default"].createElement("li", {
        key: "dot-item-".concat(i),
        onClick: function onClick() {
          return _onClick(itemIndex);
        },
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        className: "alice-carousel__dots-item".concat(className)
      });
    }
  }));
};

exports.DotsNavigation = DotsNavigation;
DotsNavigation.propTypes = {
  state: _propTypes["default"].object.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  onMouseEnter: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func
};
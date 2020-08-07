"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StageItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StageItem = function StageItem(_ref) {
  var item = _ref.item,
      className = _ref.className,
      styles = _ref.styles;
  return _react["default"].createElement("li", {
    style: styles,
    className: className
  }, item);
};

exports.StageItem = StageItem;
StageItem.propTypes = {
  item: _propTypes["default"].node,
  className: _propTypes["default"].string.isRequired,
  styles: _propTypes["default"].object.isRequired
};
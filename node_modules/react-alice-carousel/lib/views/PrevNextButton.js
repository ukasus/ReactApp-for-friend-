"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrevNextButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PrevNextButton = function PrevNextButton(_ref) {
  var name = _ref.name,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
  var className = "alice-carousel__".concat(name, "-btn-item").concat(disabled ? ' __inactive' : '');
  return _react["default"].createElement("div", {
    className: "alice-carousel__".concat(name, "-btn")
  }, _react["default"].createElement("div", {
    className: "alice-carousel__".concat(name, "-btn-wrapper")
  }, _react["default"].createElement("p", {
    className: className,
    onClick: onClick
  }, _react["default"].createElement("span", {
    "data-area": name
  }))));
};

exports.PrevNextButton = PrevNextButton;
PrevNextButton.propTypes = {
  name: _propTypes["default"].oneOf(['next', 'prev']),
  disabled: _propTypes["default"].bool.isRequired,
  onClick: _propTypes["default"].func.isRequired
};
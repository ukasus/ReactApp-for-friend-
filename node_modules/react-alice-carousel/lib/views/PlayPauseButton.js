"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayPauseButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PlayPauseButton = function PlayPauseButton(_ref) {
  var isPlaying = _ref.isPlaying,
      onClick = _ref.onClick;
  return _react["default"].createElement("div", {
    className: "alice-carousel__play-btn"
  }, _react["default"].createElement("div", {
    className: "alice-carousel__play-btn-wrapper"
  }, _react["default"].createElement("div", {
    onClick: onClick,
    className: "alice-carousel__play-btn-item".concat(isPlaying ? ' __pause' : '')
  })));
};

exports.PlayPauseButton = PlayPauseButton;
PlayPauseButton.propTypes = {
  isPlaying: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};
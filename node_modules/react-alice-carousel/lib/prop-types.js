"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  autoHeight: _propTypes["default"].bool,
  autoPlay: _propTypes["default"].bool,
  autoPlayDirection: _propTypes["default"].string,
  autoPlayInterval: _propTypes["default"].number,
  buttonsDisabled: _propTypes["default"].bool,
  children: _propTypes["default"].array,
  controlsStrategy: _propTypes["default"].oneOf(['default', 'responsive']),
  disableAutoPlayOnAction: _propTypes["default"].bool,
  dotsDisabled: _propTypes["default"].bool,
  duration: _propTypes["default"].number,
  fadeOutAnimation: _propTypes["default"].bool,
  infinite: _propTypes["default"].bool,
  items: _propTypes["default"].array,
  keysControlDisabled: _propTypes["default"].bool,
  mouseTrackingEnabled: _propTypes["default"].bool,
  onInitialized: _propTypes["default"].func,
  onResized: _propTypes["default"].func,
  onSlideChange: _propTypes["default"].func,
  onSlideChanged: _propTypes["default"].func,
  playButtonEnabled: _propTypes["default"].bool,
  preventEventOnTouchMove: _propTypes["default"].bool,
  responsive: _propTypes["default"].object,
  shouldHandleResizeEvent: _propTypes["default"].func,
  showSlideInfo: _propTypes["default"].bool,
  slideToIndex: _propTypes["default"].number,
  stagePadding: _propTypes["default"].object,
  startIndex: _propTypes["default"].number,
  stopAutoPlayOnHover: _propTypes["default"].bool,
  swipeDelta: _propTypes["default"].number,
  swipeDisabled: _propTypes["default"].bool,
  touchTrackingEnabled: _propTypes["default"].bool,
  transitionTimingFunction: _propTypes["default"].string
};
exports.propTypes = propTypes;
var defaultProps = {
  autoHeight: false,
  autoPlay: false,
  autoPlayDirection: 'ltr',
  autoPlayInterval: 250,
  buttonsDisabled: false,
  children: [],
  controlsStrategy: 'default',
  disableAutoPlayOnAction: false,
  dotsDisabled: false,
  duration: 250,
  fadeOutAnimation: false,
  infinite: true,
  items: [],
  keysControlDisabled: false,
  mouseTrackingEnabled: false,
  playButtonEnabled: false,
  preservePosition: false,
  preventEventOnTouchMove: false,
  responsive: {},
  showSlideInfo: false,
  slideToIndex: 0,
  stagePadding: {},
  startIndex: 0,
  stopAutoPlayOnHover: true,
  swipeDisabled: false,
  swipeDelta: 10,
  touchTrackingEnabled: true,
  transitionTimingFunction: 'ease-out'
};
exports.defaultProps = defaultProps;
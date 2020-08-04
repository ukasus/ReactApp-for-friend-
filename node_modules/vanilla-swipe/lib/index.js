"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Utils = _interopRequireWildcard(require("./utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VanillaSwipe = /*#__PURE__*/function () {
  function VanillaSwipe(props) {
    _classCallCheck(this, VanillaSwipe);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "props", void 0);

    this.state = Utils.getInitialState();
    this.props = Utils.getInitialProps(props);
    this.handleSwipeStart = this.handleSwipeStart.bind(this);
    this.handleSwipeMove = this.handleSwipeMove.bind(this);
    this.handleSwipeEnd = this.handleSwipeEnd.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  _createClass(VanillaSwipe, [{
    key: "init",
    value: function init() {
      this.setupTouchListeners();
      this.setupMouseListeners();
    }
  }, {
    key: "update",
    value: function update(props) {
      var prevProps = this.props;
      var nextProps = Object.assign({}, prevProps, props);

      if (prevProps.element !== nextProps.element) {
        this.destroy();
        this.props = nextProps;
        this.init();
        return;
      }

      this.props = nextProps;

      if (prevProps.mouseTrackingEnabled !== nextProps.mouseTrackingEnabled) {
        nextProps.mouseTrackingEnabled ? this.setupMouseListeners() : this.cleanupMouseListeners();
      }

      if (prevProps.touchTrackingEnabled !== nextProps.touchTrackingEnabled) {
        nextProps.touchTrackingEnabled ? this.setupTouchListeners() : this.cleanupTouchListeners();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cleanupMouseListeners();
      this.cleanupTouchListeners();
      this.state = Utils.getInitialState();
      this.props = Utils.getInitialProps();
    }
  }, {
    key: "setupTouchListeners",
    value: function setupTouchListeners() {
      var _this$props = this.props,
          element = _this$props.element,
          touchTrackingEnabled = _this$props.touchTrackingEnabled;

      if (element && touchTrackingEnabled) {
        var isPassiveSupported = Utils.checkIsPassiveSupported();
        var options = Utils.getOptions(isPassiveSupported);
        element.addEventListener('touchstart', this.handleSwipeStart, options);
        element.addEventListener('touchmove', this.handleSwipeMove, options);
        element.addEventListener('touchend', this.handleSwipeEnd, options);
      }
    }
  }, {
    key: "cleanupTouchListeners",
    value: function cleanupTouchListeners() {
      var element = this.props.element;

      if (element) {
        element.removeEventListener('touchstart', this.handleSwipeStart);
        element.removeEventListener('touchmove', this.handleSwipeMove);
        element.removeEventListener('touchend', this.handleSwipeEnd);
      }
    }
  }, {
    key: "setupMouseListeners",
    value: function setupMouseListeners() {
      var _this$props2 = this.props,
          element = _this$props2.element,
          mouseTrackingEnabled = _this$props2.mouseTrackingEnabled,
          preventTrackingOnMouseleave = _this$props2.preventTrackingOnMouseleave;

      if (element && mouseTrackingEnabled) {
        element.addEventListener('mousedown', this.handleMouseDown);
        element.addEventListener('mousemove', this.handleMouseMove);
        element.addEventListener('mouseup', this.handleMouseUp);
        preventTrackingOnMouseleave && element.addEventListener('mouseleave', this.handleMouseLeave);
      }
    }
  }, {
    key: "cleanupMouseListeners",
    value: function cleanupMouseListeners() {
      var _this$props3 = this.props,
          element = _this$props3.element,
          preventTrackingOnMouseleave = _this$props3.preventTrackingOnMouseleave;

      if (element) {
        element.removeEventListener('mousedown', this.handleMouseDown);
        element.removeEventListener('mousemove', this.handleMouseMove);
        element.removeEventListener('mouseup', this.handleMouseUp);
        preventTrackingOnMouseleave && element.removeEventListener('mouseleave', this.handleMouseLeave);
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition(e) {
      var _this$state = this.state,
          x = _this$state.x,
          y = _this$state.y,
          start = _this$state.start;
      var rotationAngle = this.props.rotationAngle;
      var movingPosition = Utils.calculateMovingPosition(e);
      var rotatePosition = Utils.rotateByAngle(movingPosition, rotationAngle);
      return Utils.calculatePosition({
        x: x,
        y: y,
        start: start
      }, rotatePosition);
    }
  }, {
    key: "handleSwipeStart",
    value: function handleSwipeStart(e) {
      if (Utils.checkIsMoreThanSingleTouches(e)) return;
      var rotationAngle = this.props.rotationAngle;
      var movingPosition = Utils.calculateMovingPosition(e);

      var _Utils$rotateByAngle = Utils.rotateByAngle(movingPosition, rotationAngle),
          x = _Utils$rotateByAngle.x,
          y = _Utils$rotateByAngle.y;

      this.state = {
        start: Date.now(),
        x: x,
        y: y,
        isSwiping: false
      };
    }
  }, {
    key: "handleSwipeMove",
    value: function handleSwipeMove(e) {
      var _this$state2 = this.state,
          x = _this$state2.x,
          y = _this$state2.y;
      if (!x || !y || Utils.checkIsMoreThanSingleTouches(e)) return;

      var _this$getPosition = this.getPosition(e),
          absX = _this$getPosition.absX,
          absY = _this$getPosition.absY,
          deltaX = _this$getPosition.deltaX,
          deltaY = _this$getPosition.deltaY,
          duration = _this$getPosition.duration;

      var _this$props4 = this.props,
          delta = _this$props4.delta,
          onSwiping = _this$props4.onSwiping,
          preventDefaultTouchmoveEvent = _this$props4.preventDefaultTouchmoveEvent;
      if (e.cancelable && preventDefaultTouchmoveEvent) e.preventDefault();
      if (absX < Number(delta) && absY < Number(delta) && !this.state.isSwiping) return;
      this.state.isSwiping = true;

      if (onSwiping) {
        onSwiping(e, deltaX, deltaY, absX, absY, duration);
      }
    }
  }, {
    key: "handleSwipeEnd",
    value: function handleSwipeEnd(e) {
      var _this$props5 = this.props,
          onSwiped = _this$props5.onSwiped,
          onTap = _this$props5.onTap;

      if (this.state.isSwiping) {
        var position = this.getPosition(e);
        var deltaX = position.deltaX,
            deltaY = position.deltaY,
            absX = position.absX,
            absY = position.absY,
            duration = position.duration;
        onSwiped && onSwiped(e, deltaX, deltaY, absX, absY, duration);
      } else {
        onTap && onTap(e);
      }

      this.state = Utils.getInitialState();
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      this.handleSwipeStart(e);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(e) {
      this.handleSwipeMove(e);
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      this.handleSwipeEnd(e);
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      var element = this.props.element;
      var isSwiping = this.state.isSwiping;

      if (element && isSwiping) {
        element.dispatchEvent(new Event('mouseup', {
          bubbles: true,
          cancelable: true
        }));
      }
    }
  }]);

  return VanillaSwipe;
}();

exports["default"] = VanillaSwipe;
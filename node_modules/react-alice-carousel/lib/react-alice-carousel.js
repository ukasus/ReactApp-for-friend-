"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _vanillaSwipe = _interopRequireDefault(require("vanilla-swipe"));

var Utils = _interopRequireWildcard(require("./utils"));

var Views = _interopRequireWildcard(require("./views"));

var _propTypes = require("./prop-types");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AliceCarousel = function (_React$PureComponent) {
  _inherits(AliceCarousel, _React$PureComponent);

  var _super = _createSuper(AliceCarousel);

  function AliceCarousel(props) {
    var _this;

    _classCallCheck(this, AliceCarousel);

    _this = _super.call(this, props);

    _initialiseProps.call(_assertThisInitialized(_this));

    var slides = Utils.getSlides(props);
    var clones = Utils.cloneCarouselItems(slides);
    _this.state = {
      clones: clones,
      currentIndex: 1,
      duration: props.duration,
      initialStageHeight: 0,
      isAutoPlaying: false,
      isAutoplayCanceledOnAction: false,
      slides: slides,
      stagePadding: {},
      style: Utils.getDefaultStyles()
    };
    _this.hasUserAction = false;
    _this.slideTo = _this.slideTo.bind(_assertThisInitialized(_this));
    _this.slidePrev = _this.slidePrev.bind(_assertThisInitialized(_this));
    _this.slideNext = _this.slideNext.bind(_assertThisInitialized(_this));
    _this._onTouchMove = _this._onTouchMove.bind(_assertThisInitialized(_this));
    _this._handleOnDotClick = _this._handleOnDotClick.bind(_assertThisInitialized(_this));
    _this._throttledOnTouchMove = Utils.throttle(_this._onTouchMove, 10);
    _this._debouncedHandleOnWindowResize = Utils.debounce(_this._handleOnWindowResize, 100);
    return _this;
  }

  _createClass(AliceCarousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setInitialState();

      this._setupSwipeHandlers();

      this._resetAllIntermediateProps();

      window.addEventListener('resize', this._debouncedHandleOnWindowResize);

      if (!this.props.keysControlDisabled) {
        window.addEventListener('keyup', this._handleOnKeyUp);
      }

      this.props.autoPlay && this._play();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.autoHeight && this.stageComponent && !this.state.initialStageHeight) {
        var initialStageHeight = Utils.getGalleryItemHeight(this.stageComponent, this.props, this.state);
        this.setState({
          initialStageHeight: initialStageHeight
        });
      }

      if (this.props.duration !== prevProps.duration) {
        this.setState({
          duration: this.props.duration
        });
      }

      if (this.props.fadeOutAnimation !== prevProps.fadeOutAnimation) {
        this.setState({
          fadeoutAnimationProcessing: false
        }, this._resetAnimationProps);
      }

      if (this.props.slideToIndex !== prevProps.slideToIndex) {
        this._onSlideToIndexChange(this.state.currentIndex, this.props.slideToIndex);
      }

      if (this.props.autoPlay !== prevProps.autoPlay) {
        this.props.autoPlay ? this._play() : this._pause();
        this.setState({
          isAutoPlaying: this.props.autoPlay
        });
      }

      if (this.props.stagePadding !== prevProps.stagePadding || this.props.responsive !== prevProps.responsive || this.props.infinite !== prevProps.infinite || this.props.items !== prevProps.items) {
        this._resetAllIntermediateProps();

        this.setState(Utils.calculateInitialProps(this.props, this.stageComponent));
      }

      if (this.props.keysControlDisabled !== prevProps.keysControlDisabled) {
        this.props.keysControlDisabled ? window.removeEventListener('keyup', this._handleOnKeyUp) : window.addEventListener('keyup', this._handleOnKeyUp);
      }

      if (!this.swipingStarted && (this.props.mouseTrackingEnabled !== prevProps.mouseTrackingEnabled || this.props.touchTrackingEnabled !== prevProps.touchTrackingEnabled || this.props.preventEventOnTouchMove !== prevProps.preventEventOnTouchMove || this.props.swipeDelta !== prevProps.swipeDelta)) {
        this.swiper.update({
          delta: this.props.swipeDelta,
          mouseTrackingEnabled: this.props.mouseTrackingEnabled,
          touchTrackingEnabled: this.props.touchTrackingEnabled,
          preventDefaultTouchmoveEvent: this.props.preventEventOnTouchMove
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._pause();

      this._resetAllIntermediateProps();

      this.swiper.destroy();
      window.removeEventListener('keyup', this._handleOnKeyUp);
      window.removeEventListener('resize', this._debouncedHandleOnWindowResize);
    }
  }, {
    key: "slideTo",
    value: function slideTo() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (this._isClickDisabled(index)) return;

      this._pause();

      this._disableAnimation();

      this._isFadeOutAnimationAllowed() && this.setAnimationPropsOnDotClick(index);

      this._slideToItem(index);
    }
  }, {
    key: "slidePrev",
    value: function slidePrev(e) {
      if (e && e.isTrusted) {
        this.hasUserAction = true;
      }

      if (this._isClickDisabled()) return;

      this._pause();

      this._disableAnimation();

      this._isFadeOutAnimationAllowed() && this._setAnimationPropsOnClick('prev');

      if (Utils.itemInfo(this.state).isPrevSlideDisabled) {
        return this._onInactiveItem();
      }

      this._slideToItem(this.state.currentIndex - 1);
    }
  }, {
    key: "slideNext",
    value: function slideNext(e) {
      if (e && e.isTrusted) {
        this.hasUserAction = true;
      }

      if (this._isClickDisabled()) return;

      this._pause();

      this._disableAnimation();

      this._isFadeOutAnimationAllowed() && this._setAnimationPropsOnClick('next');

      if (Utils.itemInfo(this.state).isNextSlideDisabled) {
        return this._onInactiveItem();
      }

      this._slideToItem(this.state.currentIndex + 1);
    }
  }, {
    key: "_handleOnDotClick",
    value: function _handleOnDotClick(index) {
      this.hasUserAction = true;
      this.slideTo(index);
    }
  }, {
    key: "_setupSwipeHandlers",
    value: function _setupSwipeHandlers() {
      this.swiper = new _vanillaSwipe["default"]({
        element: this.rootComponent,
        delta: this.props.swipeDelta,
        onSwiping: this._throttledOnTouchMove,
        onSwiped: this._onTouchEnd,
        rotationAngle: 5,
        mouseTrackingEnabled: this.props.mouseTrackingEnabled,
        touchTrackingEnabled: this.props.touchTrackingEnabled,
        preventDefaultTouchmoveEvent: this.props.preventEventOnTouchMove,
        preventTrackingOnMouseleave: true
      });
      this.swiper.init();
    }
  }, {
    key: "_onSlideChange",
    value: function _onSlideChange() {
      if (this.props.onSlideChange) {
        this.props.onSlideChange(this._getEventObject());
      }
    }
  }, {
    key: "_onSlideChanged",
    value: function _onSlideChanged() {
      var _this2 = this;

      var _this$state = this.state,
          isAutoPlaying = _this$state.isAutoPlaying,
          isAutoplayCanceledOnAction = _this$state.isAutoplayCanceledOnAction;
      var _this$props = this.props,
          disableAutoPlayOnAction = _this$props.disableAutoPlayOnAction,
          onSlideChanged = _this$props.onSlideChanged;

      if (disableAutoPlayOnAction && this.hasUserAction && !isAutoplayCanceledOnAction) {
        this.setState({
          isAutoplayCanceledOnAction: true,
          isAutoPlaying: false
        }, function () {
          _this2._allowAnimation();

          if (onSlideChanged) {
            onSlideChanged(_this2._getEventObject());
          }
        });
      } else {
        isAutoPlaying && this._play();

        this._allowAnimation();

        if (onSlideChanged) {
          onSlideChanged(this._getEventObject());
        }
      }
    }
  }, {
    key: "_onInitialized",
    value: function _onInitialized(initialState) {
      this.rootComponentDimensions = Utils.getElementDimensions(this.rootComponent);

      if (this.props.onInitialized) {
        this.props.onInitialized(this._getEventObject(initialState));
      }
    }
  }, {
    key: "_onResized",
    value: function _onResized() {
      if (this.props.onResized) {
        this.props.onResized(this._getEventObject());
      }
    }
  }, {
    key: "_setInitialState",
    value: function _setInitialState() {
      var initialState = Utils.calculateInitialProps(this.props, this.stageComponent);
      this.setState(initialState, this._onInitialized(initialState));
    }
  }, {
    key: "_checkSlidePosition",
    value: function _checkSlidePosition(shouldSkipRecalculation) {
      this._stopSwipeAnimation();

      this._resetAnimationProps();

      this._resetSwipePositionProps();

      shouldSkipRecalculation ? this._skipSlidePositionRecalculation() : this._updateSlidePosition();
    }
  }, {
    key: "_setAutoPlayInterval",
    value: function _setAutoPlayInterval() {
      var _this3 = this;

      var _this$props2 = this.props,
          autoPlayDirection = _this$props2.autoPlayDirection,
          autoPlayInterval = _this$props2.autoPlayInterval;
      this._autoPlayIntervalId = setTimeout(function () {
        if (!_this3.isHovered) {
          autoPlayDirection === 'rtl' ? _this3.slidePrev() : _this3.slideNext();
        }
      }, autoPlayInterval);
    }
  }, {
    key: "_clearAutoPlayInterval",
    value: function _clearAutoPlayInterval() {
      clearTimeout(this._autoPlayIntervalId);
      this._autoPlayIntervalId = undefined;
    }
  }, {
    key: "_clearUpdateSlidePositionIntervalId",
    value: function _clearUpdateSlidePositionIntervalId() {
      clearTimeout(this._updateSlidePositionIntervalId);
      this._updateSlidePositionIntervalId = undefined;
    }
  }, {
    key: "_play",
    value: function _play() {
      this._setAutoPlayInterval();
    }
  }, {
    key: "_slideToItem",
    value: function _slideToItem(index) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._onSlideChange();

      var _options$duration = options.duration,
          duration = _options$duration === void 0 ? this.state.duration : _options$duration,
          _options$shouldSkipRe = options.shouldSkipRecalculation,
          shouldSkipRecalculation = _options$shouldSkipRe === void 0 ? false : _options$shouldSkipRe;
      var translate3d = Utils.getTranslate3dPosition(index, this.state);
      this.setState(_objectSpread({
        currentIndex: index,
        translate3d: translate3d
      }, this._getIntermediateStateProps(duration, shouldSkipRecalculation)), function () {
        return _this4._checkSlidePosition(shouldSkipRecalculation);
      });
    }
  }, {
    key: "_onTouchMove",
    value: function _onTouchMove(e, deltaX, deltaY, absX, absY) {
      this.hasUserAction = true;

      if (this._isSwipeDisabled()) {
        return;
      }

      if (!this.swipingStarted && Utils.isVerticalTouchMoveDetected(e, absX, absY)) {
        return;
      }

      this.swipingStarted = true;

      this._pause();

      this._disableAnimation();

      this._startSwipeAnimation();

      this._clearUpdateSlidePositionIntervalId();

      this.touchEndTimeoutId && clearTimeout(this.touchEndTimeoutId);
      var _this$state2 = this.state,
          slides = _this$state2.slides,
          items = _this$state2.items,
          itemWidth = _this$state2.itemWidth,
          infinite = _this$state2.infinite,
          stagePadding = _this$state2.stagePadding;
      var slidesLength = slides.length;
      var direction = Utils.getSwipeDirection(this.prevSwipPosition, deltaX);
      this.prevSwipPosition = deltaX;

      var position = this._getTranslateXPosition(deltaX);

      if (infinite === false) {
        var _minSwipeLimit = Utils.getMinSwipeLimitIfNotInfinite(items, itemWidth);

        var _maxSwipeLimit = Utils.getMaxSwipeLimitIfNotInfinite(slidesLength, itemWidth);

        if (Utils.shouldRecalculateSwipePosition(position, _minSwipeLimit, _maxSwipeLimit)) {
          return;
        }

        Utils.animate(this.stageComponent, {
          position: position
        });

        this._setSwipePositionProps({
          position: position,
          direction: direction
        });

        return;
      }

      var minPosition = Utils.getMinSwipePosition(items, itemWidth);
      var minSwipeLimit = Utils.getMinSwipeLimit(minPosition, stagePadding);
      var maxPosition = Utils.getMaxSwipePosition(items, itemWidth, slidesLength);
      var maxSwipeLimit = Utils.getMaxSwipeLimit(maxPosition, stagePadding, itemWidth);

      if (Utils.shouldRecalculateSwipePosition(position, minSwipeLimit, maxSwipeLimit)) {
        try {
          recalculatePosition();
        } catch (err) {
          Utils.debug(err);
        }
      }

      Utils.animate(this.stageComponent, {
        position: position
      });

      this._setSwipePositionProps({
        position: position,
        direction: direction
      });

      function recalculatePosition() {
        var direction = Utils.getSwipeDirection(0, deltaX);
        direction === 'RIGHT' ? position = position + slidesLength * -itemWidth : position = position + maxPosition - items * itemWidth;

        if (Utils.shouldRecalculateSwipePosition(position, minSwipeLimit, maxSwipeLimit)) {
          recalculatePosition();
        }
      }
    }
  }, {
    key: "_beforeTouchEnd",
    value: function _beforeTouchEnd() {
      var _this5 = this;

      var _this$swipePosition = this.swipePosition,
          direction = _this$swipePosition.direction,
          position = _this$swipePosition.position;
      var transitionTimingFunction = this.props.transitionTimingFunction;
      var _this$state3 = this.state,
          itemWidth = _this$state3.itemWidth,
          items = _this$state3.items,
          duration = _this$state3.duration,
          infinite = _this$state3.infinite;
      var swipeIndex = Utils.calculateSwipeIndex(itemWidth, position, direction);
      var currentIndex = Utils.getSwipeIndexOnBeforeTouchEnd(swipeIndex, items);
      var translateXPosition = Utils.getSwipePositionOnBeforeTouchEnd(swipeIndex, itemWidth);

      if (infinite === false) {
        this._isInfiniteModeDisabledBeforeTouchEnd(swipeIndex, currentIndex);

        return;
      }

      Utils.animate(this.stageComponent, {
        position: translateXPosition,
        duration: duration,
        transitionTimingFunction: transitionTimingFunction
      });
      this.touchEndAnimation = true;
      this.touchEndTimeoutId = setTimeout(function () {
        if (_this5._isSwipeAnimationLastFrame()) {
          if (_this5.state.isAnimationCanceled) {
            return _this5._handleOnAnimationCanceled();
          }

          var nextItemIndex = Utils.getNextItemIndexBeforeTouchEnd(translateXPosition, _this5.state);
          var nextTranslateXPosition = Utils.getTranslate3dPosition(nextItemIndex, _this5.state);
          Utils.animate(_this5.stageComponent, {
            position: nextTranslateXPosition
          });

          _this5._slideToItem(nextItemIndex, {
            duration: 0,
            shouldSkipRecalculation: true
          });
        }
      }, duration);
    }
  }, {
    key: "_isInfiniteModeDisabledBeforeTouchEnd",
    value: function _isInfiniteModeDisabledBeforeTouchEnd(swipeIndex, currentIndex) {
      var _this6 = this;

      var transitionTimingFunction = this.props.transitionTimingFunction;
      var _this$state4 = this.state,
          items = _this$state4.items,
          itemWidth = _this$state4.itemWidth,
          duration = _this$state4.duration,
          slides = _this$state4.slides;
      var position = Utils.getTranslate3dPosition(currentIndex, {
        itemWidth: itemWidth,
        items: items
      });

      if (swipeIndex < items) {
        currentIndex = Utils.recalculateCurrentIndexOnBeforeTouchEnd();
        position = Utils.recalculatePositionOnBeforeTouchEnd(items, itemWidth);
      }

      if (swipeIndex > slides.length) {
        currentIndex = Utils.recalculateCurrentIndexOnBeforeTouchEnd(slides.length, items);
        position = Utils.recalculatePositionOnBeforeTouchEnd(slides.length, itemWidth);
      }

      Utils.animate(this.stageComponent, {
        position: position,
        duration: duration,
        transitionTimingFunction: transitionTimingFunction
      });
      this.touchEndAnimation = true;
      this.touchEndTimeoutId = setTimeout(function () {
        if (_this6._isSwipeAnimationLastFrame()) {
          if (_this6.state.isAnimationCanceled) {
            return _this6._handleOnAnimationCanceled();
          }

          Utils.animate(_this6.stageComponent, {
            position: position
          });

          _this6._slideToItem(currentIndex, {
            duration: 0,
            shouldSkipRecalculation: true
          });
        }
      }, duration);
    }
  }, {
    key: "_renderPrevButton",
    value: function _renderPrevButton() {
      var _Utils$itemInfo = Utils.itemInfo(this.state),
          isPrevSlideDisabled = _Utils$itemInfo.isPrevSlideDisabled;

      return _react["default"].createElement(Views.PrevNextButton, {
        name: "prev",
        disabled: isPrevSlideDisabled,
        onClick: this.slidePrev
      });
    }
  }, {
    key: "_renderNextButton",
    value: function _renderNextButton() {
      var _Utils$itemInfo2 = Utils.itemInfo(this.state),
          isNextSlideDisabled = _Utils$itemInfo2.isNextSlideDisabled;

      return _react["default"].createElement(Views.PrevNextButton, {
        name: "next",
        disabled: isNextSlideDisabled,
        onClick: this.slideNext
      });
    }
  }, {
    key: "_renderPlayPauseButton",
    value: function _renderPlayPauseButton() {
      var isAutoPlaying = this.state.isAutoPlaying;
      return _react["default"].createElement(Views.PlayPauseButton, {
        isPlaying: isAutoPlaying,
        onClick: this._playPauseToggle
      });
    }
  }, {
    key: "_renderDotsNavigation",
    value: function _renderDotsNavigation() {
      return _react["default"].createElement(Views.DotsNavigation, {
        state: this.state,
        onClick: this._handleOnDotClick
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state5 = this.state,
          style = _this$state5.style,
          translate3d = _this$state5.translate3d,
          clones = _this$state5.clones;
      var wrapperStyles = Utils.getWrapperStyles(this.stageComponent, this.props, this.state);
      var stageStyles = Utils.getStageStyles({
        translate3d: translate3d
      }, style);
      var dotsDisabled = Utils.shouldDisableDots(this.props, this.state);
      return _react["default"].createElement("div", {
        className: "alice-carousel"
      }, _react["default"].createElement("div", {
        ref: this._setRootComponentRef
      }, _react["default"].createElement("div", {
        style: wrapperStyles,
        className: "alice-carousel__wrapper",
        onMouseEnter: this._handleOnMouseEnter,
        onMouseLeave: this._handleOnMouseLeave
      }, _react["default"].createElement("ul", {
        style: stageStyles,
        className: "alice-carousel__stage",
        ref: this._setStageComponentRef
      }, clones.map(this._renderStageItem)))), this.props.showSlideInfo ? this._renderSlideInfo() : null, dotsDisabled ? null : this._renderDotsNavigation(), !this.props.buttonsDisabled ? this._renderPrevButton() : null, !this.props.buttonsDisabled ? this._renderNextButton() : null, this.props.playButtonEnabled ? this._renderPlayPauseButton() : null);
    }
  }]);

  return AliceCarousel;
}(_react["default"].PureComponent);

exports["default"] = AliceCarousel;

var _initialiseProps = function _initialiseProps() {
  var _this7 = this;

  this._handleOnWindowResize = function (e) {
    var shouldHandleResizeEvent = _this7.props.shouldHandleResizeEvent;
    var currentDimensions = Utils.getElementDimensions(_this7.rootComponent);
    var shouldProcessEvent = shouldHandleResizeEvent || Utils.shouldHandleResizeEvent;

    if (shouldProcessEvent(e, _this7.rootComponentDimensions, currentDimensions)) {
      _this7.rootComponentDimensions = currentDimensions;

      _this7._disableAnimation();

      _this7._pause();

      var _this7$state = _this7.state,
          currentIndex = _this7$state.currentIndex,
          isAutoPlaying = _this7$state.isAutoPlaying;

      var isAnimationCanceled = _this7._isSwipeAnimationProcessing();

      var initialProps = Utils.preserveProps(_this7.props, {
        startIndex: currentIndex
      });
      var currState = Utils.calculateInitialProps(initialProps, _this7.stageComponent);
      var translate3d = Utils.getTranslate3dPosition(currState.currentIndex, currState);

      var nextState = _objectSpread({}, currState, {
        translate3d: translate3d,
        isAnimationCanceled: isAnimationCanceled,
        isAutoPlaying: isAutoPlaying,
        initialStageHeight: 0
      });

      if (isAnimationCanceled) Utils.animate(_this7.stageComponent, {
        position: translate3d
      });

      _this7.setState(nextState, function () {
        _this7._resetAllIntermediateProps();

        isAutoPlaying && _this7._play();

        _this7._onResized();
      });
    }
  };

  this._handleOnAnimationCanceled = function () {
    _this7._resetAllIntermediateProps();

    _this7.setState({
      isAnimationCanceled: false
    });
  };

  this._handleOnKeyUp = function (e) {
    switch (e.code) {
      case 'Space':
        return _this7.props.autoPlay && _this7._playPauseToggle();

      case 'ArrowLeft':
        return _this7.slidePrev();

      case 'ArrowRight':
        return _this7.slideNext();
    }
  };

  this._handleOnMouseEnter = function () {
    if (_this7.props.stopAutoPlayOnHover && _this7.state.isAutoPlaying) {
      _this7.isHovered = true;

      _this7._pause();
    }
  };

  this._handleOnMouseLeave = function () {
    if (_this7.state.isAutoPlaying) {
      _this7.isHovered = false;

      _this7._play();
    }
  };

  this._onSlideToIndexChange = function (currentIndex, slideToIndex) {
    if (slideToIndex === currentIndex + 1) {
      _this7.slideNext();
    } else if (slideToIndex === currentIndex - 1) {
      _this7.slidePrev();
    } else {
      _this7.slideTo(slideToIndex);
    }
  };

  this._onInactiveItem = function () {
    _this7._onSlideChange();

    _this7._onSlideChanged();
  };

  this._getFadeOutAnimationState = function (shouldRecalculate) {
    if (shouldRecalculate || _this7._isFadeOutAnimationAllowed()) {
      return {
        fadeoutAnimationProcessing: false
      };
    }

    return {};
  };

  this._setRootComponentRef = function (node) {
    return _this7.rootComponent = node;
  };

  this._setStageComponentRef = function (node) {
    return _this7.stageComponent = node;
  };

  this._allowAnimation = function () {
    return _this7.allowAnimation = true;
  };

  this._disableAnimation = function () {
    return _this7.allowAnimation = false;
  };

  this._skipSlidePositionRecalculation = function () {
    if (_this7._isFadeOutAnimationAllowed()) {
      return _this7._resetFadeOutAnimationState();
    }

    _this7._onSlideChanged();
  };

  this._updateSlidePosition = function () {
    _this7._updateSlidePositionIntervalId = setTimeout(function () {
      if (_this7._shouldRecalculatePosition()) {
        _this7._recalculateSlidePosition();
      } else if (_this7._isFadeOutAnimationAllowed()) {
        _this7._resetFadeOutAnimationState();
      } else {
        _this7._onSlideChanged();
      }
    }, _this7.state.duration);
  };

  this._resetFadeOutAnimationState = function () {
    _this7.setState({
      fadeoutAnimationProcessing: false
    }, _this7._onSlideChanged);
  };

  this._resetAllIntermediateProps = function () {
    _this7.prevSwipPosition = 0;
    _this7.swipingStarted = false;

    _this7._stopSwipeAnimation();

    _this7._resetAnimationProps();

    _this7._resetSwipePositionProps();

    _this7._clearUpdateSlidePositionIntervalId();

    _this7._allowAnimation();
  };

  this._recalculateSlidePosition = function () {
    var style = Utils.getDefaultStyles();
    var currentIndex = Utils.recalculateCurrentSlideIndex(_this7.state);
    var translate3d = Utils.recalculateTranslatePosition(_this7.state);

    _this7.setState(_objectSpread({
      currentIndex: currentIndex,
      translate3d: translate3d,
      style: style
    }, _this7._getFadeOutAnimationState()), function () {
      return _this7._onSlideChanged();
    });
  };

  this._getEventObject = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this7.state;
    var itemsInSlide = state.items,
        item = state.currentIndex;

    var _Utils$itemInfo3 = Utils.itemInfo(state),
        isNextSlideDisabled = _Utils$itemInfo3.isNextSlideDisabled,
        isPrevSlideDisabled = _Utils$itemInfo3.isPrevSlideDisabled;

    var slide = Utils.getActiveSlideIndex(isNextSlideDisabled, state);
    return {
      item: item,
      slide: slide,
      itemsInSlide: itemsInSlide,
      isNextSlideDisabled: isNextSlideDisabled,
      isPrevSlideDisabled: isPrevSlideDisabled
    };
  };

  this.setAnimationPropsOnDotClick = function (itemIndex) {
    var _this7$state2 = _this7.state,
        currentIndex = _this7$state2.currentIndex,
        itemWidth = _this7$state2.itemWidth;
    var fadeOutIndex = currentIndex + 1;
    var fadeOutOffset = Utils.getFadeOutOffsetOnDotClick(itemIndex, currentIndex, itemWidth);

    _this7._setAnimationProps({
      fadeOutIndex: fadeOutIndex,
      fadeOutOffset: fadeOutOffset,
      allowFadeOutAnimation: true
    });
  };

  this._pause = function () {
    _this7._clearAutoPlayInterval();
  };

  this._playPauseToggle = function () {
    var isAutoPlaying = _this7.state.isAutoPlaying;
    _this7.hasUserAction = true;

    _this7.setState({
      isAutoPlaying: !isAutoPlaying,
      isAutoplayCanceledOnAction: true
    }, function () {
      isAutoPlaying ? _this7._pause() : _this7._play();
    });
  };

  this._getIntermediateStateProps = function (duration, shouldSkipRecalculation) {
    var transitionTimingFunction = _this7.props.transitionTimingFunction;

    var condition = !shouldSkipRecalculation && _this7._isFadeOutAnimationAllowed();

    return Utils.getIntermediateTransitionProps(condition, duration, transitionTimingFunction);
  };

  this._startSwipeAnimation = function () {
    _this7.swipeAnimation = true;
  };

  this._stopSwipeAnimation = function () {
    _this7.swipeAnimation = false;
    _this7.touchEndAnimation = false;
    _this7.touchEndTimeoutId = null;
  };

  this._setAnimationProps = function (newProps) {
    var prevProps = _this7.animationProps || {};
    _this7.animationProps = _objectSpread({}, prevProps, {}, newProps);
  };

  this._resetAnimationProps = function () {
    _this7.animationProps = {};
  };

  this._setSwipePositionProps = function (newProps) {
    var prevProps = _this7.swipePosition || {};
    _this7.swipePosition = _objectSpread({}, prevProps, {}, newProps);
  };

  this._resetSwipePositionProps = function () {
    _this7.swipePosition = {};
  };

  this._getTranslateXPosition = function (deltaX) {
    var translate3d = _this7.state.translate3d;
    var lastSwipePosition = _this7.swipePosition.lastSwipePosition;
    var position = lastSwipePosition || translate3d;

    if (_this7.touchEndAnimation) {
      _this7.touchEndAnimation = false;
      var translateX = Utils.getTranslateX(_this7.stageComponent);

      if (translateX) {
        return translateX;
      }
    }

    return position - Math.floor(deltaX);
  };

  this._onTouchEnd = function () {
    if (!_this7.swipingStarted || _this7._isSwipeDisabled()) return;
    _this7.swipingStarted = false;
    _this7.prevSwipPosition = 0;

    _this7._setSwipePositionProps({
      lastSwipePosition: _this7.swipePosition.position
    });

    _this7._beforeTouchEnd();
  };

  this._isClickDisabled = function (itemIndex) {
    var _this7$state3 = _this7.state,
        currentIndex = _this7$state3.currentIndex,
        isAnimationCanceled = _this7$state3.isAnimationCanceled;
    return currentIndex === itemIndex || isAnimationCanceled || !_this7.allowAnimation || _this7.swipeAnimation;
  };

  this._isFadeOutAnimationAllowed = function () {
    var _this7$state4 = _this7.state,
        stagePadding = _this7$state4.stagePadding,
        items = _this7$state4.items;
    var hasNoStagePadding = !(stagePadding.paddingLeft || stagePadding.paddingRight);
    return _this7.props.fadeOutAnimation && items === 1 && hasNoStagePadding;
  };

  this._isSwipeDisabled = function () {
    var _this7$state5 = _this7.state,
        isAnimationCanceled = _this7$state5.isAnimationCanceled,
        fadeoutAnimationProcessing = _this7$state5.fadeoutAnimationProcessing;
    return _this7.props.swipeDisabled || fadeoutAnimationProcessing || isAnimationCanceled;
  };

  this._isSwipeAnimationLastFrame = function () {
    return !_this7.swipingStarted;
  };

  this._isSwipeAnimationProcessing = function () {
    return _this7.touchEndTimeoutId;
  };

  this._shouldRecalculatePosition = function () {
    var _this7$state6 = _this7.state,
        slides = _this7$state6.slides,
        currentIndex = _this7$state6.currentIndex;
    return currentIndex < 0 || currentIndex >= slides.length;
  };

  this._setAnimationPropsOnClick = function (direction) {
    var _this7$state7 = _this7.state,
        currentIndex = _this7$state7.currentIndex,
        itemWidth = _this7$state7.itemWidth;
    var fadeOutIndex = Utils.getFadeOutIndexOnClick(currentIndex);
    var fadeOutOffset = Utils.getFadeOutOffsetOnClick(direction, itemWidth);

    _this7._setAnimationProps({
      fadeOutIndex: fadeOutIndex,
      fadeOutOffset: fadeOutOffset,
      allowFadeOutAnimation: true
    });
  };

  this._renderSlideInfo = function () {
    var _this7$state8 = _this7.state,
        currentIndex = _this7$state8.currentIndex,
        slides = _this7$state8.slides;
    return _react["default"].createElement(Views.SlideInfo, {
      slidesLength: slides.length,
      currentIndex: currentIndex
    });
  };

  this._renderStageItem = function (item, i) {
    var style = Utils.itemStyles(i, _this7.state, _this7.animationProps);
    var className = Utils.itemClassName(i, _this7.state, _this7.animationProps);
    return _react["default"].createElement(Views.StageItem, {
      styles: style,
      className: className,
      key: "stage-item-".concat(i),
      item: item
    });
  };
};

AliceCarousel.propTypes = _propTypes.propTypes;
AliceCarousel.defaultProps = _propTypes.defaultProps;
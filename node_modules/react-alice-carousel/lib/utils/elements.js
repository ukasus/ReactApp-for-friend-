"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementDimensions = getElementDimensions;
exports.shouldHandleResizeEvent = shouldHandleResizeEvent;
exports.shouldDisableDots = shouldDisableDots;
exports.getCurrentIndex = exports.getNextItemIndexBeforeTouchEnd = exports.isElement = exports.getSlideInfo = exports.getGalleryItemHeight = exports.getNextItem = exports.getItemWidth = exports.isStagePadding = exports.getStagePadding = exports.itemInfo = exports.getSlides = exports.cloneCarouselItems = void 0;

var Utils = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var cloneCarouselItems = function cloneCarouselItems() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var itemsInSlide = arguments.length > 1 ? arguments[1] : undefined;
  var props = arguments.length > 2 ? arguments[2] : undefined;
  var items = itemsInSlide || 1;

  var _ref = props || {},
      stagePadding = _ref.stagePadding,
      infinite = _ref.infinite;

  var _ref2 = stagePadding || {},
      paddingLeft = _ref2.paddingLeft,
      paddingRight = _ref2.paddingRight;

  if (items > children.length) {
    items = children.length;
  }

  if (infinite) {
    if (paddingLeft || paddingRight) {
      if (itemsInSlide < children.length) {
        items = itemsInSlide + 1;
      } else {
        var lastElement = children.slice(-1);
        var firstElement = children.slice(0, 1);

        var _clonesBefore = lastElement.concat(children);

        var _clonesAfter = children.concat(firstElement);

        return [].concat(_clonesBefore, children, _clonesAfter);
      }
    }
  }

  var clonesAfter = children.slice(0, items);
  var clonesBefore = children.slice(children.length - items);
  return [].concat(clonesBefore, children, clonesAfter);
};

exports.cloneCarouselItems = cloneCarouselItems;

var getSlides = function getSlides(props) {
  var _ref3 = props || {},
      children = _ref3.children,
      _ref3$items = _ref3.items,
      items = _ref3$items === void 0 ? [] : _ref3$items;

  return children && children.length ? children : items;
};

exports.getSlides = getSlides;

var itemInfo = function itemInfo(props) {
  var _ref4 = props || {},
      items = _ref4.items,
      currentIndex = _ref4.currentIndex,
      infinite = _ref4.infinite,
      _ref4$slides = _ref4.slides,
      slides = _ref4$slides === void 0 ? [] : _ref4$slides;

  var isPrevSlideDisabled = infinite === false && currentIndex === 0;
  var isNextSlideDisabled = infinite === false && slides.length - items === currentIndex;
  return {
    isPrevSlideDisabled: isPrevSlideDisabled,
    isNextSlideDisabled: isNextSlideDisabled
  };
};

exports.itemInfo = itemInfo;

var getStagePadding = function getStagePadding(props) {
  var _ref5 = props || {},
      _ref5$stagePadding = _ref5.stagePadding,
      stagePadding = _ref5$stagePadding === void 0 ? {} : _ref5$stagePadding;

  var paddingLeft = Math.abs(stagePadding.paddingLeft) || 0;
  var paddingRight = Math.abs(stagePadding.paddingRight) || 0;
  return {
    paddingLeft: paddingLeft,
    paddingRight: paddingRight
  };
};

exports.getStagePadding = getStagePadding;

var isStagePadding = function isStagePadding() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref6 = props.stagePadding || {},
      paddingLeft = _ref6.paddingLeft,
      paddingRight = _ref6.paddingRight;

  return paddingLeft || paddingRight;
};

exports.isStagePadding = isStagePadding;

var getItemWidth = function getItemWidth() {
  var galleryWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var totalItems = arguments.length > 1 ? arguments[1] : undefined;
  var width = Number(galleryWidth);
  var items = Number(totalItems);
  return width && items > 0 ? width / items : 0;
};

exports.getItemWidth = getItemWidth;

var getNextItem = function getNextItem(stageComponent, itemIndex) {
  var children = stageComponent && stageComponent.children || [];
  return children[itemIndex] && children[itemIndex].firstChild || null;
};

exports.getNextItem = getNextItem;

var getGalleryItemHeight = function getGalleryItemHeight(stageComponent, props, state) {
  var currentIndex = state.currentIndex;
  var slidesOffset = Utils.calculateSlidesOffset(props, state);
  var itemIndex = Utils.getIndexForItemHeightCalculation(currentIndex, slidesOffset);
  var element = getNextItem(stageComponent, itemIndex);

  if (isElement(element)) {
    var styles = getComputedStyle(element);
    var marginTop = parseFloat(styles['marginTop']);
    var marginBottom = parseFloat(styles['marginBottom']);
    return Math.ceil(element.offsetHeight + marginTop + marginBottom);
  }
};

exports.getGalleryItemHeight = getGalleryItemHeight;

var getSlideInfo = function getSlideInfo() {
  var currentIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var slidesLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var slideIndex = currentIndex + 1;

  if (slideIndex < 1) {
    slideIndex = slidesLength;
  } else if (slideIndex > slidesLength) {
    slideIndex = 1;
  }

  return {
    slideIndex: slideIndex,
    slidesLength: slidesLength
  };
};

exports.getSlideInfo = getSlideInfo;

var isElement = function isElement(element) {
  try {
    return element instanceof Element || element instanceof HTMLDocument;
  } catch (e) {
    return false;
  }
};

exports.isElement = isElement;

var getNextItemIndexBeforeTouchEnd = function getNextItemIndexBeforeTouchEnd(currentTranslateXPosition) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var infinite = props.infinite,
      _props$items = props.items,
      items = _props$items === void 0 ? 1 : _props$items,
      _props$itemWidth = props.itemWidth,
      itemWidth = _props$itemWidth === void 0 ? 0 : _props$itemWidth,
      _props$slides = props.slides,
      slides = _props$slides === void 0 ? [] : _props$slides,
      _props$stagePadding = props.stagePadding,
      stagePadding = _props$stagePadding === void 0 ? {} : _props$stagePadding;
  var paddingLeft = stagePadding.paddingLeft,
      paddingRight = stagePadding.paddingRight;

  if (itemWidth <= 0 || items > slides.length) {
    return 0;
  }

  var currentIndex = getCurrentIndex(currentTranslateXPosition, itemWidth, items);

  if (infinite && (paddingLeft || paddingRight)) {
    currentIndex -= 1;
  }

  if (currentIndex === slides.length) {
    return 0;
  }

  if (currentIndex < 0) {
    return slides.length + currentIndex;
  }

  return currentIndex;
};

exports.getNextItemIndexBeforeTouchEnd = getNextItemIndexBeforeTouchEnd;

var getCurrentIndex = function getCurrentIndex(currentTranslateXPosition, itemWidth, items) {
  var value = Math.abs(currentTranslateXPosition / itemWidth);
  return Math.floor(value) - items;
};

exports.getCurrentIndex = getCurrentIndex;

function getElementDimensions(element) {
  if (element && element.getBoundingClientRect) {
    var _element$getBoundingC = element.getBoundingClientRect(),
        width = _element$getBoundingC.width,
        height = _element$getBoundingC.height;

    return {
      width: width,
      height: height
    };
  }

  return {};
}

function shouldHandleResizeEvent(e) {
  var prevDimensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var currentDimensions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return prevDimensions.width !== currentDimensions.width;
}

function shouldDisableDots(props, state) {
  var _ref7 = props || {},
      dotsDisabled = _ref7.dotsDisabled,
      controlsStrategy = _ref7.controlsStrategy;

  var _ref8 = state || {},
      items = _ref8.items,
      slides = _ref8.slides;

  if (dotsDisabled) {
    return true;
  }

  if (controlsStrategy === 'responsive' && items === slides.length) {
    return true;
  }

  return false;
}
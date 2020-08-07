"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateInitialProps = exports.setTotalItemsInSlide = exports.preserveProps = void 0;

var Utils = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var preserveProps = function preserveProps(props, values) {
  var _ref = props || {},
      preservePosition = _ref.preservePosition;

  return preservePosition ? _objectSpread({}, props, {}, values) : props;
};

exports.preserveProps = preserveProps;

var setTotalItemsInSlide = function setTotalItemsInSlide(responsiveConfig, childrenLength) {
  var items = 1;

  if (responsiveConfig) {
    var configKeys = Object.keys(responsiveConfig);

    if (configKeys.length) {
      configKeys.forEach(function (width) {
        if (width < window.innerWidth) {
          items = Math.min(responsiveConfig[width].items, childrenLength) || items;
        }
      });
    }
  }

  return items;
};

exports.setTotalItemsInSlide = setTotalItemsInSlide;

var calculateInitialProps = function calculateInitialProps(props, el) {
  var startIndex = props.startIndex,
      responsive = props.responsive,
      infinite = props.infinite,
      autoPlay = props.autoPlay;
  var style = Utils.getDefaultStyles();
  var slides = Utils.getSlides(props);
  var stagePadding = Utils.getStagePadding(props);
  var items = setTotalItemsInSlide(responsive, slides.length);
  var currentIndex = Utils.setStartIndex(slides.length, startIndex);

  var _Utils$getElementDime = Utils.getElementDimensions(el),
      galleryWidth = _Utils$getElementDime.width;

  var itemWidth = Utils.getItemWidth(galleryWidth, items);
  var clones = Utils.cloneCarouselItems(slides, items, {
    stagePadding: stagePadding,
    infinite: infinite
  });
  var translate3d = Utils.getTranslate3dPosition(currentIndex, {
    itemWidth: itemWidth,
    items: items,
    stagePadding: stagePadding,
    infinite: infinite
  });
  return {
    items: items,
    itemWidth: itemWidth,
    currentIndex: currentIndex,
    slides: slides,
    clones: clones,
    infinite: infinite,
    translate3d: translate3d,
    stagePadding: stagePadding,
    style: style,
    isAutoPlaying: autoPlay
  };
};

exports.calculateInitialProps = calculateInitialProps;
exports.ids = [1];
exports.modules = {

/***/ "./components/MultiCarousel/MultiCarousel.tsx":
/*!****************************************************!*\
  !*** ./components/MultiCarousel/MultiCarousel.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Image/Image */ "./components/Image/Image.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\pickbazar\\packages\\shop\\components\\MultiCarousel\\MultiCarousel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const SingleItem = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.li.withConfig({
  displayName: "MultiCarousel__SingleItem",
  componentId: "sc-1l8qqrp-0"
})(["border:1px solid ", ";border-radius:6px;margin-right:20px;padding:0;outline:none;width:70px;height:auto;overflow:hidden;&:last-child{margin-right:0;}&.custom-dot--active{border:2px solid ", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 200
    },
    items: 1
  }
};

const CarouselWithCustomDots = (_ref) => {
  let {
    items = [],
    deviceType: {
      mobile,
      tablet,
      desktop
    },
    title
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["items", "deviceType", "title"]);

  const children = items.slice(0, 6).map((item, index) => __jsx(components_Image_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: item.url,
    key: index,
    alt: title,
    style: {
      minWidth: 'auto',
      height: 'auto',
      position: 'relative',
      margin: 'auto'
    },
    className: "product-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }));
  const images = items.map((item, index) => __jsx(components_Image_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: item.url,
    key: index,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }));

  const CustomDot = ({
    index,
    onClick,
    active,
    carouselState: {
      currentSlide,
      deviceType
    }
  }) => {
    return __jsx(SingleItem, {
      "data-index": index,
      key: index,
      onClick: () => onClick(),
      className: `custom-dot ${active && 'custom-dot--active'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(images)[index]);
  };

  let deviceType = 'desktop';

  if (mobile) {
    deviceType = 'mobile';
  }

  if (tablet) {
    deviceType = 'tablet';
  }

  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    showDots: true,
    ssr: true,
    infinite: true,
    slidesToSlide: 1,
    containerClass: "carousel-with-custom-dots",
    responsive: responsive,
    deviceType: deviceType,
    autoPlay: false,
    arrows: false,
    customDot: __jsx(CustomDot, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 18
      }
    })
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselWithCustomDots);

/***/ }),

/***/ "./components/Truncate/Truncate.tsx":
/*!******************************************!*\
  !*** ./components/Truncate/Truncate.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\pickbazar\\packages\\shop\\components\\Truncate\\Truncate.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ReadMore = ({
  children,
  more,
  less,
  character
}) => {
  const {
    0: expanded,
    1: setExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleLines = event => {
    event.preventDefault();
    setExpanded(!expanded);
  };

  if (!children) return null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children && children.length < character || expanded ? children : children.substring(0, character), children && children.length > character && !expanded && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    onClick: toggleLines,
    style: {
      color: '#009e7f',
      fontWeight: 700
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, more))), children && children.length > character && expanded && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    onClick: toggleLines,
    style: {
      color: '#009e7f',
      fontWeight: 700
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, less))));
};

ReadMore.defaultProps = {
  character: 150,
  more: 'Read more',
  less: 'less'
};
/* harmony default export */ __webpack_exports__["default"] = (ReadMore);

/***/ }),

/***/ "./containers/QuickView/QuickView.style.tsx":
/*!**************************************************!*\
  !*** ./containers/QuickView/QuickView.style.tsx ***!
  \**************************************************/
/*! exports provided: QuickViewWrapper, ProductDetailsWrapper, ProductPreview, SaleTag, DiscountPercent, ProductInfoWrapper, ProductInfo, ProductTitlePriceWrapper, ProductTitle, ProductPriceWrapper, ProductPrice, SalePrice, ProductWeight, ProductDescription, ProductCartBtn, ProductCartWrapper, ProductMeta, MetaSingle, MetaItem, ModalClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickViewWrapper", function() { return QuickViewWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsWrapper", function() { return ProductDetailsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPreview", function() { return ProductPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleTag", function() { return SaleTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountPercent", function() { return DiscountPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfoWrapper", function() { return ProductInfoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfo", function() { return ProductInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTitlePriceWrapper", function() { return ProductTitlePriceWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTitle", function() { return ProductTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPriceWrapper", function() { return ProductPriceWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPrice", function() { return ProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePrice", function() { return SalePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductWeight", function() { return ProductWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescription", function() { return ProductDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCartBtn", function() { return ProductCartBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCartWrapper", function() { return ProductCartWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMeta", function() { return ProductMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaSingle", function() { return MetaSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaItem", function() { return MetaItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalClose", function() { return ModalClose; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const QuickViewWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__QuickViewWrapper",
  componentId: "sc-28ycgw-0"
})(["max-width:1020px;"]);
const ProductDetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductDetailsWrapper",
  componentId: "sc-28ycgw-1"
})(["background-color:#fff;position:relative;display:flex;flex-wrap:wrap;align-items:stretch;min-height:100%;border-radius:6px;overflow:hidden;box-sizing:border-box;box-shadow:0 10px 40px rgba(0,0,0,0.16);*{box-sizing:border-box;}"]);
const ProductPreview = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductPreview",
  componentId: "sc-28ycgw-2"
})(["flex:0 0 50%;max-width:50%;padding:30px 60px;display:flex;align-items:center;justify-content:center;position:relative;@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:30px 47px 40px 30px;order:0;}img{width:100%;@media (max-width:767px){min-width:auto !important;}}"]);
const SaleTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "QuickViewstyle__SaleTag",
  componentId: "sc-28ycgw-3"
})(["font-size:12px;font-weight:700;color:#ffffff;background-color:", ";padding:0 10px;line-height:24px;border-radius:12px;display:inline-block;position:absolute;top:40px;right:30px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'));
const DiscountPercent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "QuickViewstyle__DiscountPercent",
  componentId: "sc-28ycgw-4"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:#ffffff;line-height:24px;background-color:", ";padding-left:10px;padding-right:10px;position:relative;display:inline-block;position:absolute;top:30px;right:30px;border-radius:12px;-webkit-transform:translate3d(0,0,1px);transform:translate3d(0,0,1px);"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'));
const ProductInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductInfoWrapper",
  componentId: "sc-28ycgw-5"
})(["flex:0 0 50%;max-width:50%;border-left:1px solid ", ";@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:10px 0 30px;order:1;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightMediumColor', '#f3f3f3'));
const ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductInfo",
  componentId: "sc-28ycgw-6"
})(["padding:50px;@media (max-width:767px){padding:0px 30px 30px 30px;}"]);
const ProductTitlePriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductTitlePriceWrapper",
  componentId: "sc-28ycgw-7"
})(["width:100%;display:flex;align-items:flex-start;justify-content:flex-start;margin-bottom:10px;"]);
const ProductTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "QuickViewstyle__ProductTitle",
  componentId: "sc-28ycgw-8"
})(["font-family:'Poppins',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:1.5;display:flex;@media (max-width:767px){word-break:break-word;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.4', '21'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'));
const ProductPriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductPriceWrapper",
  componentId: "sc-28ycgw-9"
})(["display:flex;align-items:center;flex-shrink:0;margin-left:25px;line-height:31px;@media (max-width:767px){margin-left:15px;}"]);
const ProductPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductPrice",
  componentId: "sc-28ycgw-10"
})(["font-family:'Lato',sans-serif;font-size:16px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const SalePrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "QuickViewstyle__SalePrice",
  componentId: "sc-28ycgw-11"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";font-style:italic;padding:0 5px;overflow:hidden;position:relative;margin-right:10px;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:", ";position:absolute;top:50%;left:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'));
const ProductWeight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductWeight",
  componentId: "sc-28ycgw-12"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798c'));
const ProductDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "QuickViewstyle__ProductDescription",
  componentId: "sc-28ycgw-13"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:2;margin-top:30px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkMedium', '#424561'));
const ProductCartBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductCartBtn",
  componentId: "sc-28ycgw-14"
})(["margin-top:60px;@media (max-width:767px){margin-top:40px;}.reusecore__button{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";height:36px;border-radius:4rem;.btn-icon{margin-right:5px;}&:hover{color:#fff;background-color:", ";border-color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const ProductCartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductCartWrapper",
  componentId: "sc-28ycgw-15"
})(["display:flex;flex-direction:column;"]);
const ProductMeta = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductMeta",
  componentId: "sc-28ycgw-16"
})(["margin-top:30px;"]);
const MetaSingle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuickViewstyle__MetaSingle",
  componentId: "sc-28ycgw-17"
})(["display:flex;flex-wrap:wrap;align-items:center;margin-bottom:10px;&:last-child{margin-bottom:0;}"]);
const MetaItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "QuickViewstyle__MetaItem",
  componentId: "sc-28ycgw-18"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";margin-right:10px;margin-bottom:10px;background-color:", ";padding:0 15px;border-radius:6px;cursor:pointer;height:30px;display:flex;align-items:center;justify-content:center;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightColor', '#f7f7f7'));
const ModalClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "QuickViewstyle__ModalClose",
  componentId: "sc-28ycgw-19"
})(["position:fixed;top:20px;right:15px;padding:10px 15px;z-index:1;cursor:pointer;display:block;color:rgba(0,0,0,0.5);background:transparent;border:0;outline:none;display:inline-block;svg{width:12px;height:12px;}@media (max-width:767px){top:5px;right:0;}"]);

/***/ }),

/***/ "./containers/QuickView/QuickView.tsx":
/*!********************************************!*\
  !*** ./containers/QuickView/QuickView.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _QuickView_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuickView.style */ "./containers/QuickView/QuickView.style.tsx");
/* harmony import */ var helper_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helper/constant */ "./helper/constant.ts");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var components_Truncate_Truncate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Truncate/Truncate */ "./components/Truncate/Truncate.tsx");
/* harmony import */ var components_MultiCarousel_MultiCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/MultiCarousel/MultiCarousel */ "./components/MultiCarousel/MultiCarousel.tsx");
/* harmony import */ var contexts_language_language_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! contexts/language/language.provider */ "./contexts/language/language.provider.tsx");
/* harmony import */ var contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! contexts/cart/use-cart */ "./contexts/cart/use-cart.tsx");
/* harmony import */ var components_Counter_Counter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Counter/Counter */ "./components/Counter/Counter.tsx");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\pickbazar\\packages\\shop\\containers\\QuickView\\QuickView.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const QuickView = ({
  modalProps,
  deviceType,
  onModalClose
}) => {
  const {
    addItem,
    removeItem,
    isInCart,
    getItem
  } = Object(contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_10__["useCart"])();
  const {
    id,
    type,
    title,
    unit,
    price,
    discountInPercent,
    salePrice,
    description,
    gallery,
    categories
  } = modalProps;
  const {
    isRtl
  } = Object(contexts_language_language_provider__WEBPACK_IMPORTED_MODULE_9__["useLocale"])();

  const handleAddClick = e => {
    e.stopPropagation();
    addItem(modalProps);
  };

  const handleRemoveClick = e => {
    e.stopPropagation();
    removeItem(modalProps);
  };

  function onCategoryClick(slug) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
      pathname: `/${type.toLowerCase()}`,
      query: {
        category: slug
      }
    }).then(() => window.scrollTo(0, 0));
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["closeModal"])();
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ModalClose"], {
    onClick: onModalClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_6__["CloseIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  })), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["QuickViewWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsWrapper"], {
    className: "product-card",
    dir: "ltr",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, !isRtl && __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductPreview"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(components_MultiCarousel_MultiCarousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    items: gallery,
    deviceType: deviceType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }), !!discountInPercent && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["DiscountPercent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, discountInPercent, "%"))), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductInfoWrapper"], {
    dir: isRtl ? 'rtl' : 'ltr',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductInfo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductTitlePriceWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, title), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductPriceWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, discountInPercent ? __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["SalePrice"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, helper_constant__WEBPACK_IMPORTED_MODULE_5__["CURRENCY"], price) : '', __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductPrice"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, helper_constant__WEBPACK_IMPORTED_MODULE_5__["CURRENCY"], salePrice ? salePrice : price))), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductWeight"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, unit), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx(components_Truncate_Truncate__WEBPACK_IMPORTED_MODULE_7__["default"], {
    character: 600,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, description)), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductCartWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductCartBtn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, !isInCart(id) ? __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Cart",
    intlButtonId: "addCartButton",
    iconPosition: "left",
    colors: "primary",
    size: "small",
    variant: "outlined",
    className: "cart-button",
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_6__["CartIcon"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 29
      }
    }),
    onClick: handleAddClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }) : __jsx(components_Counter_Counter__WEBPACK_IMPORTED_MODULE_11__["Counter"], {
    value: getItem(id).quantity,
    onDecrement: handleRemoveClick,
    onIncrement: handleAddClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }))), __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductMeta"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["MetaSingle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, categories ? categories.map(item => __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["MetaItem"], {
    onClick: () => onCategoryClick(item.slug),
    key: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  }, item.title)) : '')))), isRtl && __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["ProductPreview"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx(components_MultiCarousel_MultiCarousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    items: gallery,
    deviceType: deviceType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }), !!discountInPercent && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_QuickView_style__WEBPACK_IMPORTED_MODULE_4__["DiscountPercent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  }, discountInPercent, "%"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (QuickView);

/***/ })

};;
//# sourceMappingURL=1.js.map
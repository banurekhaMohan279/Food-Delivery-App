(this["webpackJsonpHunger-Buddy"]=this["webpackJsonpHunger-Buddy"]||[]).push([[3],{38:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},39:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return c}))},40:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},41:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return i}));var o=n(40);function s(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?Object(o.a)(t):e}function i(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=r(t);if(e){var o=r(this).constructor;n=Reflect.construct(c,arguments,o)}else n=c.apply(this,arguments);return s(this,n)}}},42:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return c}))},43:function(t,e,n){"use strict";n.r(e);var r=n(38),c=n(39),o=n(42),s=n(41),i=n(1),u=n(0),a=n.n(u),f=n(12),l=n(20),p=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.restaurantDetails;return Object(i.jsxs)("div",{className:"RestaurantDetails",children:[Object(i.jsx)(l.a,{}),Object(i.jsx)("section",{className:"img-section",children:Object(i.jsx)("img",{src:t.featured_image})}),Object(i.jsxs)("section",{className:"details-section",children:[Object(i.jsxs)("h4",{children:[" ",t.name," "]}),Object(i.jsxs)("span",{children:[" ",t.timings," "]}),Object(i.jsxs)("span",{children:[" ",t.cuisines," "]}),Object(i.jsxs)("span",{children:[" ",t.phone_numbers," "]}),Object(i.jsxs)("span",{children:[" ",t.location.address," "]}),Object(i.jsx)("div",{className:"rest-types",children:t.establishment.map((function(t){return Object(i.jsxs)("span",{className:"rest-type",children:[" ",t," "]},"index")}))})]}),Object(i.jsx)("section",{className:"reviews-section"})]})}}]),n}(a.a.Component);e.default=Object(f.b)((function(t){return{restaurantDetails:t.restaurantDetailsReducer.restaurantDetails}}))(p)}}]);
//# sourceMappingURL=3.75ef7f89.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"51fc7573a6908c5c63a1":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),c=(n("8a2d1b95e05b6a321e74"),n("435859b6b76fb67a754a")),f=n.n(c),a=(n("0d7f0986bcd2f33d8a2a"),n("1037a6e0d5914309f74c"),n("ab4cb61bcb2dc161defb")),u=n("d7dd51e1bf6bfc2c9c3d"),b=n("54842915ef7097ebb6b8"),s=n("561b54665dad44e28695"),d=n("4dd2a92e69dcbe1bab10");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,c=arguments.length-3;if(t||0===c||(t={children:void 0}),t&&i)for(var f in i)void 0===t[f]&&(t[f]=i[f]);else t||(t=i||{});if(1===c)t.children=r;else if(c>1){for(var a=new Array(c),u=0;u<c;u++)a[u]=arguments[u+3];t.children=a}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=m(f.a,{item:!0,md:4,xs:12},void 0,m(d.Lb,{})),O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,v(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){(0,this.props.fetchData)(b.a)}},{key:"render",value:function(){var e=this.props,t=e.dataProps,n=(e.submitPost,e.submitLike),o=e.submitComment,r=e.fetchComment,i=e.commentIndex,c=e.closeNotif,a=e.messageNotif;return m("div",{},void 0,m(d.ib,{close:function(){return c()},message:a}),m(f.a,{container:!0,alignItems:"flex-start",justify:"flex-start",direction:"row",spacing:3},void 0,m(f.a,{item:!0,md:8,xs:12},void 0,m("div",{},void 0,m(d.Wb,{dataTimeline:t,onlike:n,submitComment:o,fetchComment:r,commentIndex:i}))),w))}}])&&p(n.prototype,o),r&&p(n,r),t}(i.a.Component),g=Object(u.connect)((function(e){return{force:e,dataProps:e.getIn(["socmed","dataTimeline"]),commentIndex:e.getIn(["socmed","commentIndex"]),messageNotif:e.getIn(["socmed","notifMsg"])}}),(function(e){return{fetchData:Object(a.bindActionCreators)(s.b,e),submitPost:Object(a.bindActionCreators)(s.d,e),submitComment:Object(a.bindActionCreators)(s.e,e),submitLike:Object(a.bindActionCreators)(s.f,e),fetchComment:Object(a.bindActionCreators)(s.c,e),closeNotif:function(){return e(s.a)}}}))(O);t.default=g}}]);
!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=19)}({18:function(n,e,t){"use strict";t.r(e),t.d(e,"load",function(){return r});let r=()=>{let n=document.querySelector(".home"),e=document.querySelector(".shop"),t=(document.querySelector(".cart"),document.querySelector(".contact"),document.querySelector(".login")),r=document.querySelector(".content"),i=(document.querySelector(".swiper-container"),document.querySelector(".search-snipet"),document.querySelector(".side-menu")),o=document.querySelector("#empty");var a=1,s=1;t.addEventListener("click",()=>{if(console.log(a),a%2==0){r.innerHTML="",$(r).load("./register.html"),t.innerHTML="Login",a++,setTimeout(function(){let n=document.querySelector(".register-form");document.querySelector("#regex").addEventListener("click",function(){n.style.display="none",t.innerHTML="Login",a=1})},500)}else{r.innerHTML="",$(r).load("./login.html"),t.innerHTML="Register",a--,setTimeout(function(){let n=document.querySelector(".login-form");document.querySelector("#logex").addEventListener("click",function(){n.style.display="none",t.innerHTML="Login",a=1})},500)}}),(document.querySelector(".logout").style.display="block")&&(t.innerHTML="Login",a=1),n.addEventListener("click",()=>{r.innerHTML=""}),e.addEventListener("click",()=>{r.innerHTML="",$(r).load("./shop.html")}),o.addEventListener("click",()=>{if(s%2!=0){for(let n=1;n<=4;n++)i.children[n].style.display="block";i.style.height="300px",s++}else{for(let n=1;n<=4;n++)i.children[n].style.display="none";i.style.height="50px",s++}})}},19:function(n,e,t){"use strict";t.r(e);t(20);var r=t(18);Object(r.load)()},20:function(n,e,t){var r=t(21);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(23)(r,i);r.locals&&(n.exports=r.locals)},21:function(n,e,t){(n.exports=t(22)(!1)).push([n.i,"body {\n  margin-left: 0px;\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  font-family: 'Gugi', cursive;\n  background-color: #9c5f5f; }\n\n.bgc-adidas img {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 0; }\n\n.side-menu {\n  color: white;\n  position: fixed;\n  z-index: 1;\n  background-color: rgba(218, 137, 137, 0.274);\n  height: 100%;\n  width: 102px; }\n\n.side-menu div i {\n  font-size: 28px;\n  height: 30px; }\n\n.side-menu .empty i {\n  display: none; }\n\n.side-menu div span {\n  font-size: 18px; }\n\n.side-menu div {\n  padding: 10px;\n  text-align: center; }\n\n.side-menu div:hover:not(.text):not(.empty) {\n  background-color: rgba(218, 137, 137, 0.582); }\n\n.empty {\n  height: 30%;\n  opacity: 100%; }\n\n.search {\n  margin-left: 43%;\n  margin-top: 27px;\n  position: fixed;\n  z-index: 1; }\n\n.search input {\n  border: none;\n  border-radius: 15px;\n  width: 280px;\n  height: 34px;\n  background-color: rgba(241, 138, 138, 0.301);\n  color: white;\n  font-size: 24px;\n  text-align: center; }\n\n.search input::placeholder {\n  color: white; }\n\n.search input:focus {\n  outline: none; }\n\n.search input:-webkit-autofill:focus {\n  background-color: rgba(241, 138, 138, 0.301); }\n\n.search i {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  right: 10px;\n  top: 8px; }\n\n.search i:hover {\n  color: #c96262; }\n\n.login {\n  position: fixed;\n  z-index: 1;\n  color: white;\n  margin-left: 92.3%;\n  margin-top: 27px;\n  padding: 10px;\n  padding-left: 25px;\n  padding-right: 25px;\n  background-color: rgba(241, 138, 138, 0.301);\n  border-radius: 20px; }\n\n.login:hover {\n  background-color: rgba(241, 138, 138, 0.582);\n  cursor: pointer; }\n\n.logout {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  color: white;\n  margin-left: 92.3%;\n  margin-top: 27px;\n  padding: 10px;\n  padding-left: 25px;\n  padding-right: 25px;\n  background-color: rgba(241, 138, 138, 0.301);\n  border-radius: 20px; }\n\n.logout:hover {\n  background-color: rgba(241, 138, 138, 0.582);\n  cursor: pointer; }\n\n.swiper-container {\n  display: block;\n  height: 65%;\n  width: 65%;\n  top: 18%;\n  left: 18%;\n  position: fixed;\n  border-radius: 10px; }\n\n.swiper-slide {\n  background-color: rgba(218, 137, 137, 0.582);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff; }\n\n.swiper-pagination {\n  background-color: rgba(218, 137, 137, 0.582); }\n\n/*-------------------Login - Register----------------------------*/\n.login-form {\n  margin-left: 39.5%;\n  margin-top: 19%;\n  padding: 40px;\n  padding-top: 60px;\n  padding-bottom: 80px;\n  border-radius: 20px;\n  position: fixed;\n  z-index: 1;\n  background-color: rgba(218, 137, 137, 0.274); }\n\n.login-form i {\n  position: absolute;\n  color: white;\n  margin-left: 325px;\n  margin-top: -40px;\n  font-size: 22px; }\n\n.login-form i:hover {\n  color: #c96262; }\n\n.register-form {\n  margin-left: 39.5%;\n  margin-top: 19%;\n  padding: 40px;\n  padding-top: 60px;\n  padding-bottom: 80px;\n  border-radius: 20px;\n  position: fixed;\n  z-index: 1;\n  background-color: rgba(218, 137, 137, 0.274); }\n\n.register-form i {\n  position: absolute;\n  color: white;\n  margin-left: 325px;\n  margin-top: -40px;\n  font-size: 22px; }\n\n.register-form i:hover {\n  color: #c96262; }\n\n.username input {\n  height: 28px;\n  width: 320px;\n  font-size: 22px;\n  font-family: 'Gugi', cursive;\n  border: none;\n  border-radius: 7px;\n  text-align: center; }\n\n.password {\n  padding-top: 15px; }\n\n.password input {\n  height: 28px;\n  width: 320px;\n  font-size: 22px;\n  font-family: 'Gugi', cursive;\n  border: none;\n  border-radius: 7px;\n  text-align: center; }\n\n.send {\n  margin-top: 15px;\n  margin-left: 80px; }\n\n.send input {\n  height: 36px;\n  width: 168px;\n  border-radius: 12px;\n  background-color: #2ed378;\n  border: none;\n  color: white;\n  font-size: 20px; }\n\n/*--------------------------------------------------------------------*/\n.slide1 {\n  display: flex; }\n\n@media screen and (max-width: 1140px) {\n  body {\n    background-color: #9c5f5f; }\n  .bgc-adidas img {\n    display: none; }\n  .login {\n    margin-left: 88%; }\n  .logout {\n    margin-left: 88%; }\n  .login-form {\n    margin-left: 35%;\n    margin-top: 18%; }\n  .register-form {\n    margin-left: 35%;\n    margin-top: 18%; }\n  .swiper-container {\n    left: 18%;\n    width: 75%; } }\n\n@media (max-width: 800px) {\n  .empty {\n    height: 10%; }\n  .login {\n    margin-left: 83%; }\n  .logout {\n    margin-left: 83%; }\n  .login-form {\n    margin-left: 35%;\n    margin-top: 18%; }\n  .register-form {\n    margin-left: 35%;\n    margin-top: 18%; }\n  .swiper-container {\n    left: 18%;\n    width: 75%; } }\n\n@media (max-width: 650px) {\n  .bgc-adidas img {\n    display: none; }\n  .side-menu {\n    display: flex;\n    z-index: 2;\n    top: 86%;\n    background-color: rgba(218, 137, 137, 0.274);\n    height: 14%;\n    width: 100%;\n    justify-content: space-around;\n    align-items: center; }\n  .side-menu span {\n    display: none; }\n  .side-menu div:not(.empty) {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .side-menu div:hover:not(.text):not(.empty) {\n    background-color: rgba(218, 137, 137, 0); }\n  .side-menu div:hover:not(.empty) i {\n    color: #ff9797; }\n  .side-menu div:not(.empty) i {\n    font-size: 30px; }\n  .empty {\n    display: none; }\n  .login {\n    position: relative;\n    float: right;\n    margin-right: 1%;\n    margin-left: 0;\n    margin-top: 5px; }\n  .logout {\n    position: relative;\n    float: right;\n    margin-right: 1%;\n    margin-left: 0;\n    margin-top: 5px; }\n  .login-form {\n    margin-left: 24%;\n    margin-right: 24%;\n    margin-top: 25%;\n    padding: 10px;\n    padding-top: 40px; }\n  .login-form i {\n    margin-left: 87%;\n    margin-top: -33px; }\n  .register-form {\n    margin-left: 24%;\n    margin-right: 24%;\n    margin-top: 25%;\n    padding: 10px;\n    padding-top: 40px; }\n  .register-form i {\n    margin-left: 87%;\n    margin-top: -33px; }\n  .search {\n    margin-top: 10%;\n    margin-left: 32%;\n    margin-right: 32%; }\n  .swiper-container {\n    margin-top: 2%;\n    left: 2%;\n    width: 96%;\n    height: 60%; } }\n\n@media (max-width: 500px) {\n  .login-form {\n    margin-left: 18%;\n    margin-top: 25%;\n    padding: 10px;\n    padding-top: 40px; }\n  .login-form i {\n    margin-left: 87%;\n    margin-top: -33px; }\n  .register-form {\n    margin-left: 18%;\n    margin-top: 25%;\n    padding: 10px;\n    padding-top: 40px; }\n  .register-form i {\n    margin-left: 87%;\n    margin-top: -33px; }\n  .search {\n    margin-top: 13%;\n    margin-left: 26%; }\n  .swiper-container {\n    margin-top: 3%;\n    left: 2%;\n    width: 96%;\n    height: 60%; } }\n\n@media screen and (max-width: 400px) {\n  .login-form {\n    margin-left: 2.5%;\n    margin-top: 25%;\n    padding: 10px;\n    padding-top: 40px; }\n  .login-form i {\n    margin-left: 87%;\n    margin-top: -33px; }\n  .register-form {\n    margin-left: 2.5%;\n    margin-top: 25%;\n    padding: 10px;\n    padding-top: 40px; }\n  .register-form i {\n    margin-left: 87%;\n    margin-top: -33px; }\n  .search {\n    margin-top: 18%;\n    margin-left: 12%; }\n  .swiper-container {\n    margin-top: 6%;\n    left: 2%;\n    width: 96%;\n    height: 60%; } }\n",""])},22:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(o).concat([i]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<n.length;i++){var a=n[i];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},23:function(n,e,t){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),p=null,l=0,d=[],c=t(24);function f(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(n,e){for(var t=[],r={},i=0;i<n.length;i++){var o=n[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function g(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),d.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertAt.before,t);t.insertBefore(e,i)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=d.indexOf(n);e>=0&&d.splice(e,1)}function h(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return x(e,n.attrs),g(n,e),e}function x(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function b(n,e){var t,r,i,o;if(e.transform&&n.css){if(!(o="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=o}if(e.singleton){var a=l++;t=p||(p=h(e)),r=w.bind(null,t,a,!1),i=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",x(e,n.attrs),g(n,e),e}(e),r=function(n,e,t){var r=t.css,i=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=c(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),i=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){m(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return f(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var a=t[i];(s=o[a.id]).refs--,r.push(s)}n&&f(u(n,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete o[s.id]}}}};var y,v=(y=[],function(n,e){return y[n]=e,y.filter(Boolean).join("\n")});function w(n,e,t,r){var i=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=v(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}},24:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}});
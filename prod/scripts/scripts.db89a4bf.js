parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"g2Hq":[function(require,module,exports) {
function e(){var e=document.querySelector(".wrap-table-scroll"),c=document.querySelector(".wrap-table-scroll-follow");if(!e&&!c)return!1;e.addEventListener("scroll",function(e){c.scrollLeft=e.target.scrollLeft})}function c(){var e=document.querySelectorAll(".cell__checkbox:not(.checkbox-all)");if(e.length<=0)return!1;e.forEach(function(e){e.addEventListener("change",function(c){var t=c.target.closest(".tr");t&&(e.checked?o(t,"tr-checked","add"):o(t,"tr-checked","remove"))})})}function t(){var e=document.querySelectorAll(".checkbox-all");if(0===e.length)return!1;e.forEach(function(e){e.addEventListener("change",function(c){var t=e.checked,n=e.closest(".table").querySelectorAll(".cell__checkbox:not(.checkbox-all)");t?n.forEach(function(e){e.checked=!0;var c=e.closest(".tr");c&&o(c,"tr-checked","add")}):n.forEach(function(e){e.checked=!1;var c=e.closest(".tr");c&&o(c,"tr-checked","remove")})})})}function n(){var e=document.querySelectorAll(".cell__search");if(0===e.length)return!1;function c(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?e.classList.remove("hide"):e.classList.add("hide")}e.forEach(function(e){!function(e){var t=e.querySelector(".cell__input"),n=e.querySelector(".cell__reset");t.addEventListener("input",function(){var e=t.value.trim();e.length>3?c(n,!0):c(n,!1)}),n.addEventListener("click",function(){t.value="",c(n,!1)})}(e)})}function r(){var e=document.querySelectorAll(".cell__sort");e.forEach(function(c){c.addEventListener("click",function(){var t=c.classList.contains("cell__sorts--asc"),n=c.classList.contains("cell__sorts--desc");switch(e.forEach(function(e){o(e,"cell__sorts--desc","remove"),o(e,"cell__sorts--asc","remove")}),!0){case!t:o(c,"cell__sorts--desc","remove"),o(c,"cell__sorts--asc","add");break;case!n:o(c,"cell__sorts--asc","remove"),o(c,"cell__sorts--desc","add")}})})}function l(){var e=document.querySelector(".tr--edit"),c=e.querySelector(".cell__button--success"),t=e.querySelector(".cell__button--error"),n=e.querySelectorAll(".cell__input");function r(c){e.classList.remove("tr--edit"),c.forEach(function(e){var c=e.value.trim(),t=e.offsetParent.closest(".cell__inner").querySelector(".cell__data");""!==c&&(t.innerHTML="",t.innerHTML=c.split(" ").map(function(e){return'<span class="cell__text">'.concat(e,"</span>")}).join(" "))})}e.addEventListener("keydown",function(c){"Enter"===c.key&&r(n),"Escape"===c.key&&e.classList.remove("tr--edit")}),c.addEventListener("click",function(){r(n)}),t.addEventListener("click",function(){e.classList.remove("tr--edit")})}function o(e,c){"add"===(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"add")?e.classList.add(c):e.classList.remove(c)}window.onload=function(){n(),t(),c(),e(),r(),l()};
},{}]},{},["g2Hq"], null)
//# sourceMappingURL=../scripts/scripts.db89a4bf.js.map
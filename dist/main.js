!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var o=()=>{const e=document.querySelector(".clubs-list > ul"),t=document.getElementById("free_visit_form"),r=document.getElementById("callback_form"),o=document.querySelector(".popup-menu"),n=document.querySelectorAll(".popup"),l=document.getElementById("gift");document.addEventListener("click",c=>{const s=c.target;switch(s){case s.closest(".clubs-list__title"):e.classList.toggle("fade-in");break;case s.closest(".open-popup"):t.classList.add("fade-in");break;case s.closest("#header-callback__btn"):r.classList.add("fade-in");break;case s.closest(".fixed-gift__img"):s.closest(".fixed-gift").remove(),l.classList.add("fade-in");break;case s.closest(".menu-button__img, .close-menu-btn__img, .popup-menu > ul > li > a"):o.classList.toggle("slide-burger-menu");break;case s.closest(".close-btn, .close_icon, .overlay"):n.forEach(e=>{e.classList.remove("fade-in","slide-burger-menu")})}})};var n=()=>{const e=document.querySelector("header"),t=document.getElementById("totop"),r=e.getBoundingClientRect().height;window.addEventListener("scroll",()=>{window.scrollY>=r?t.className="show":t.className=""})};var l=()=>{const e=document.querySelector(".menu-button"),t=document.querySelector(".top-menu"),r=t.getBoundingClientRect().y;window.addEventListener("scroll",()=>{document.documentElement.clientWidth<=768?(t.getBoundingClientRect().y<0&&e.closest(".top-menu").classList.add("fixed-menu__button"),window.scrollY<r&&e.closest(".top-menu").classList.remove("fixed-menu__button")):document.documentElement.clientWidth>769&&e.closest(".top-menu").classList.remove("fixed-menu__button")})};var c=e=>{const t=document.querySelector(e),r=t.querySelectorAll(".slide"),o=t.querySelector(".slider-dots");let n,l=0;r.forEach(e=>{const t=document.createElement("li");t.className="slider-dots__dot",o.appendChild(t)});const c=o.querySelectorAll(".slider-dots__dot");c[0].classList.add("slider-dots__dot_active");const s=(e=2e3)=>{n=setInterval(()=>{r[l].classList.remove("fade-in"),c[l].classList.remove("slider-dots__dot_active"),l++,l>=r.length&&(l=0),r[l].classList.add("fade-in"),c[l].classList.add("slider-dots__dot_active")},e)};t.addEventListener("mouseover",e=>{e.target.closest(".slider-arrow, .slider-dots__dot")&&clearInterval(n)}),t.addEventListener("mouseout",e=>{e.target.matches(".slider-dots__dot, .slider-arrow")&&s()}),t.addEventListener("click",e=>{const t=e.target;r[l].classList.remove("fade-in"),c[l].classList.remove("slider-dots__dot_active"),t.closest(".slider-arrow.prev")?l--:t.closest(".slider-arrow.next")?l++:t.closest(".slider-dots__dot")&&c.forEach((e,r)=>{e.classList.remove("slider-dots__dot_active"),e===t&&(e.classList.add("slider-dots__dot_active"),l=r)}),l>=r.length?l=0:l<0&&(l=r.length-1),r[l].classList.add("fade-in"),c[l].classList.add("slider-dots__dot_active")}),s()};var s=()=>{const e=document.querySelector(".services-slider"),t=document.querySelector(".services-slider-wrap"),r=e.querySelectorAll(".slide");let o,n=0,l=5;const c=()=>{let e=window.innerWidth;e<1200&&e>=991&&(l=4),e<991&&e>=768&&(l=3),e<768&&e>=479&&(l=2),e<479&&(l=1),o=Math.floor(100/l)};c(),window.addEventListener("resize",c),e.addEventListener("click",e=>{const c=e.target;switch(c){case c.closest(".slider-arrow.prev, .slider-arrow.prev > img"):n>=0&&(--n,n<0&&(n=r.length-l),t.style.transform=`translateX(-${n*o}%)`);break;case c.closest(".slider-arrow.next, .slider-arrow.next > img"):n<=r.length-l&&(++n,n>r.length-l&&(n=0),t.style.transform=`translateX(-${n*o}%)`)}})};var a=()=>{const e=document.querySelector(".calculator"),t=document.querySelectorAll('input[name="card-type"]'),r=document.getElementById("card_leto_mozaika"),o=document.getElementById("promocode"),n=document.getElementById("price-total");e&&e.addEventListener("input",()=>{let e;t.forEach(t=>{if(t.checked)switch(+t.value){case 1:e=r.checked?1999:2999;break;case 6:e=r.checked?9990:14990;break;case 9:e=r.checked?13900:21990;break;case 12:e=r.checked?19900:24990}}),"ТЕЛО2019"===o.value?n.textContent=Math.floor(.7*e):n.textContent=e})};var d=function(e,t="+7 (___) ___-__-__"){const r=document.querySelector(e);function o(e){const r=e.keyCode,o=t,n=o.replace(/\D/g,""),l=this.value.replace(/\D/g,"");let c=0,s=o.replace(/[_\d]/g,(function(e){return c<l.length?l.charAt(c++)||n.charAt(c):e}));c=s.indexOf("_"),-1!=c&&(s=s.slice(0,c));let a=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||r>47&&r<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")}r.addEventListener("input",o),r.addEventListener("focus",o),r.addEventListener("blur",o)};var i=e=>{const t=document.getElementById("thanks"),r=document.getElementById("error"),o=document.querySelector(e),n=o.querySelectorAll("input"),l=o.querySelector(".check"),c=o.querySelector("#footer_leto_mozaika"),s=o.querySelector("#footer_leto_schelkovo"),a=document.createElement("div"),d=document.createElement("div");d.textContent="Пожалуйста, поставьте галочку!",d.className="check_error";let i,u=0;o.addEventListener("input",e=>{const t=e.target;"promocode"!==t.id&&("name"===t.name?t.value=t.value.replace(/[^а-я|А-Я| ]/g,""):"phone"===t.name&&(t.value=t.value.replace(/^\D/g,"")))}),o.addEventListener("submit",e=>{e.preventDefault(),d.remove();const m=new FormData(o),f={};if(m.forEach((e,t)=>{f[t]=e}),!(l&&l.checked||s&&s.checked||c&&c.checked))return o.appendChild(d),!1;a.className="spinner",o.appendChild(a),i=setInterval(()=>{u+=5,u>=360&&(u=0),a.style.transform=`rotate(${u}deg)`},20),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(f).then(e=>{if(clearInterval(i),a.remove(),200!==e.status)throw r.classList.add("fade-in"),new Error("Something wrong! network status isn`t 200");t.classList.add("fade-in"),n.forEach(e=>{"radio"!==e.type&&"form_name"!==e.name&&("checkbox"===e.type?e.checked=!1:c||s?(c.checked=!1,s.checked=!1):e.value="")})}).catch(e=>{console.error(e)})})};var u=()=>{const e=[].slice.call(document.querySelectorAll('a[href*="#"]'));e.forEach(e=>{e.addEventListener("click",t=>{if("redirect"===e.className)return;let r;t.preventDefault(),r=document.querySelector(e.getAttribute("href")).getBoundingClientRect().top+window.scrollY;const o=setInterval(()=>{let t=r/50;if(t>window.scrollY-r&&window.innerHeight+window.scrollY<document.body.offsetHeight)window.scrollBy(0,t);else if("totop"===e.id){const e=setInterval(()=>{if(!(Math.max(document.body.scrollTop,document.documentElement.scrollTop)>0))return clearInterval(e),!1;window.scrollBy(0,-50)},8);clearInterval(o)}else window.scrollTo(0,r),clearInterval(o)},8)})})};document.addEventListener("DOMContentLoaded",()=>{o(),n(),l(),u(),c(".main-slider"),c(".gallery-slider"),s(),a(),d("#callback_form-phone"),d("#callback_form1-phone"),d("#callback_form2-phone"),d("#callback_footer_form-phone"),d("#phone"),i('form[name="callback-form"]'),i('form[name="free-visit-form"]'),i('form[name="banner-form"]'),i("#card_order"),i("#footer_form")})}]);
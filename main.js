!function(){var e={409:function(){const e=document.querySelectorAll(".tasks__date"),t=(new Date).toISOString().slice(0,10);function o(){e.forEach((e=>{const o=e.closest(".tasks__item").querySelector("[data-completed]");e.innerText!=t||o.classList.contains("tasks__button-complete-tick--checked")||new Notification("Внимание!",{body:"Срок вашей задачи подошел, загляните в приложение ToDo",icon:"https://cdn-icons-png.flaticon.com/512/3248/3248093.png"})}))}"Notification"in window?"granted"===Notification.permission?o():Notification.requestPermission().then((e=>{"granted"===e?o():"denied"===e?console.log("Доступ к уведомлениям отклонен"):"default"===e&&console.log("Разрешение на уведомления не получено")})):console.error("Уведомления не поддерживаются"),e.forEach((e=>{const o=e.closest(".tasks__item").querySelector("[data-completed]");e.innerText!=t||o.classList.contains("tasks__button-complete-tick--checked")?e.style.color="black":(e.style.color="red","red"==e.style.color?e.nextSibling.nextSibling.style.color="red":e.nextSibling.nextSibling.style.color="black")}))},91:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},179:function(e,t,o){"use strict";e.exports=o.p+"1dfcb80f3298b35ba459.js"}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,o),c.exports}o.m=e,o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var n=a.length-1;n>-1&&!e;)e=a[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),o.b=document.baseURI||self.location.href,function(){"use strict";var e=o(91),t=o.n(e),a=new URL(o(179),o.b);t()(a);const n=document.querySelector("[data-task-container]"),c=document.querySelector("#task-template").content.querySelector(".tasks__item");function r(e,t,o,a,r,s){const l=c.cloneNode(!0);l.querySelector(".tasks__title").innerText=e,l.querySelector(".tasks__description").innerText=t,l.querySelector(".tasks__date").innerText=o,l.querySelector(".tasks__time").innerText=a,1==s?l.querySelector("[data-completed]").classList.add("tasks__button-complete-tick--checked"):l.querySelector("[data-completed]").classList.remove("tasks__button-complete-tick--checked"),l.setAttribute("id",`${r}`),n.appendChild(l)}const s=document.querySelector("[data-task-name]"),l=document.querySelector("[data-task-description]"),i=document.querySelector("[data-task-date]"),d=document.querySelector("[data-task-time]"),u=document.querySelector("[data-task-add]"),m=document.querySelector("[data-form]"),S=document.querySelector("[data-sort]"),p=document.querySelector("[data-task-container]"),k=`_${Math.random().toString(30).substring(2,17)+Math.random().toString(30).substring(2,17)}`;u.addEventListener("click",(()=>{!function(e,t,o,a){let n;const c=[{name:`${e}`,description:`${t}`,date:`${o}`,time:`${a}`,id:`item ${k}`,completed:!1}];localStorage.setItem(`item ${k}`,JSON.stringify(c[0])),n=JSON.parse(localStorage.getItem(`item ${k}`)),r(n.name,n.description,n.date,n.time,`item ${k}`,n.completed)}(s.value,l.value,i.value,d.value),m.reset(),location.reload()}));for(let e in localStorage)if(localStorage.hasOwnProperty(e)&&-1!==e.indexOf("item")){let t;t=JSON.parse(localStorage.getItem(e)),r(t.name,t.description,t.date,t.time,e,t.completed)}function g(e,t,o,a,n){let c;c=JSON.parse(localStorage.getItem(`${e}`)),c.name=t,c.description=o,c.date=a,c.time=n,localStorage.setItem(`${e}`,JSON.stringify(c))}S.addEventListener("click",(()=>{let e=[];for(let t in localStorage)if(localStorage.hasOwnProperty(t)&&-1!==t.indexOf("item")){let o;o=JSON.parse(localStorage.getItem(t)),e.push(o)}const t=e.sort(((e,t)=>e.date<t.date?-1:e.date>t.date?1:e.time<t.time?-1:e.time>t.time?1:0));p.innerHTML='<li class="tasks__main-item">\n        <h3 class="tasks__title">Задачи</h3>\n        <button class="button button--small" data-sort type="button">Сортировать по дате</button>\n     </li>',t.forEach((e=>{r(e.name,e.description,e.date,e.time,e.id,e.completed)}));const o=document.querySelectorAll(".tasks__date"),a=(new Date).toISOString().slice(0,10);o.forEach((e=>{const t=e.closest(".tasks__item").querySelector("[data-completed]");e.innerText!=a||t.classList.contains("tasks__button-complete-tick--checked")?e.style.color="black":(e.style.color="red","red"==e.style.color?e.nextSibling.nextSibling.style.color="red":e.nextSibling.nextSibling.style.color="black")}))})),window.addEventListener("click",(e=>{const t=e.target;if(t.hasAttribute("data-completed")){t.classList.toggle("tasks__button-complete-tick--checked");const e=t.closest(".tasks__item"),o=e.querySelector(".tasks__date"),a=e.querySelector(".tasks__time");let n;n=JSON.parse(localStorage.getItem(`${e.id}`)),t.classList.contains("tasks__button-complete-tick--checked")?(n.completed=!0,o.style.color="black",a.style.color="black"):(n.completed=!1,o.style.color="red",a.style.color="red"),localStorage.setItem(`${e.id}`,JSON.stringify(n))}})),window.addEventListener("click",(e=>{const t=e.target;if(t.hasAttribute("data-delete")){const e=t.closest(".tasks__item");localStorage.removeItem(`${e.id}`),p.removeChild(e)}}));const y=document.querySelector("[data-form-modal]"),_=document.querySelector("[data-modal]"),f=document.querySelector("[data-close]"),v=document.querySelector("[data-task-name-modal]"),b=document.querySelector("[data-task-description-modal]"),h=document.querySelector("[data-task-date-modal]"),q=document.querySelector("[data-task-time-modal]"),x=document.querySelector("[data-task-add-modal]");f.addEventListener("click",(function(){_.classList.add("modal--closed"),y.reset()})),x.addEventListener("click",(()=>{_.classList.add("modal--closed")})),window.addEventListener("click",(e=>{const t=e.target;if(t.hasAttribute("data-change")){_.classList.remove("modal--closed");const e=t.closest(".tasks__item"),o=e.querySelector(".tasks__title"),a=e.querySelector(".tasks__description"),n=e.querySelector(".tasks__date"),c=e.querySelector(".tasks__time");v.value=o.innerText,b.value=a.innerText,h.value=n.innerText,q.value=c.innerText,v.addEventListener("change",(t=>{const a=t.target;o.innerText=a.value,g(e.id,a.value,b.value,h.value,q.value)})),b.addEventListener("change",(t=>{const o=t.target;a.innerText=o.value,g(e.id,v.value,o.value,h.value,q.value)})),h.addEventListener("change",(t=>{const o=t.target;n.innerText=o.value,g(e.id,v.value,b.value,o.value,q.value)})),q.addEventListener("change",(t=>{const o=t.target;c.innerText=o.value,g(e.id,v.value,b.value,h.value,o.value)}))}})),y.addEventListener("submit",(e=>{e.preventDefault()})),o(409)}()}();
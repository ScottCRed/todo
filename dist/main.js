(()=>{"use strict";var r={426:(r,e,n)=>{n.d(e,{Z:()=>c});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([r.id,":root {\r\n    --primary-main: rgb(0, 16, 88);\r\n    --secondary-main: rgba(73, 88, 121, 0.719);\r\n    --primary-sub: rgba(73, 88, 121, 0.205);\r\n    --secondary-sub: rgba(0, 16, 88, 0.849);\r\n}\r\n\r\nbody {\r\n    height:100vh;\r\n    margin: 0;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: rgb(109, 132, 182);\r\n    background-color: var(--primary-main);\r\n    height: 10vh;\r\n    font-size: 60px;\r\n    font-weight: 500;\r\n    text-shadow: 2px 1px rgb(71, 71, 71);\r\n}\r\n\r\n.addTask, .addProject {\r\n    visibility: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    position: fixed;\r\n    z-index: 1;\r\n    height: 100vh;\r\n    width: 100%;\r\n    padding-top: 100px;\r\n    background-color: rgb(8, 4, 4, 0.8);\r\n    color: aliceblue;\r\n}\r\n\r\n.addProject {\r\n    z-index: 2;\r\n}\r\n\r\n.formAppear {\r\n    visibility: visible;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.sumBar{\r\n    background-color: var(--secondary-main);\r\n    height: 80vh;\r\n    width: 400px;\r\n}\r\n\r\n.mainDisplay {\r\n    background-color: var(--primary-sub);\r\n    height: 80vh;\r\n    width: 100%;\r\n}\r\n\r\nh2 {\r\n    font-size: 40px;\r\n    font-weight: 300;\r\n    text-shadow: 1px 1px rgb(138, 137, 137);\r\n    padding: 5px;\r\n    margin: 0;\r\n}\r\n\r\n.projectItem, .projectAdd {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 15px 5px;\r\n    padding: 5px;\r\n    font-size: 20px;\r\n    width: 150px;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n}\r\n\r\n.taskBox, .taskAddButton {\r\n    margin: 10px;\r\n    padding: 5px;\r\n    font-size: 20px;\r\n    width: 150px;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n}\r\n\r\n.remove, .addPButton {\r\n    border: 1px solid black;\r\n    border-radius: 50%;\r\n    background-color: var(--primary-sub);\r\n}\r\n\r\n.footer {\r\n    display: flex;\r\n    background-color: var(--secondary-sub);\r\n    height: 10vh;\r\n    color: rgb(109, 132, 182);\r\n    font-size: 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n\r\np {\r\n    display: flex;\r\n    flex-direction: column;\r\n}",""]);const c=i},645:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n="",t=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),t&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=r(e),t&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(r,n,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<r.length;d++){var u=[].concat(r[d]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var e=[];function n(r){for(var n=-1,t=0;t<e.length;t++)if(e[t].identifier===r){n=t;break}return n}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],d=t.base?s[0]+t.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(r,e){var n=e.domAPI(e);return n.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;n.update(r=e)}else n.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=t(r,o),d=0;d<a.length;d++){var u=n(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:r=>{var e={};r.exports=function(r,n){var t=function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[r]=n}return e[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},565:(r,e,n)=>{r.exports=function(r){var e=n.nc;e&&r.setAttribute("nonce",e)}},795:r=>{r.exports=function(r){var e=r.insertStyleElement(r);return{update:function(n){!function(r,e,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,r,e.options)}(e,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},589:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}},e={};function n(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return r[t](a,a.exports,n),a.exports}n.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return n.d(e,{a:e}),e},n.d=(r,e)=>{for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},n.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),n.nc=void 0,(()=>{var r=n(379),e=n.n(r),t=n(795),o=n.n(t),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),u=n.n(d),l=n(589),p=n.n(l),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let v=[],h=[];class y{constructor(r,e,n,t){this.taskTitle=form.title.value,this.description=form.description.textContent,this.dueDate=form.date.value,this.priority=form.priority.value}}document.querySelector(".taskAddButton").addEventListener("click",(function(){document.querySelector(".addTask").classList.add("formAppear"),console.log("task baby")})),document.querySelector(".projectAdd").addEventListener("click",(function(){document.querySelector(".addProject").classList.add("formAppear"),document.getElementById("projectForm").reset()})),document.querySelector(".submit-button-p").addEventListener("click",(function(){event.preventDefault(),document.querySelector(".addProject").classList.remove("formAppear");const r=projectForm.projectTitle.value;v.push(r),function(){document.querySelector(".projectContainer").innerHTML="";for(let r=0;r<v.length;r++){const e=document.querySelector(".projectContainer"),n=document.createElement("div");n.setAttribute("id",v.indexOf(r)),n.classList.add("projectItem"),n.textContent=v[r];const t=document.createElement("button");t.classList.add("remove"),t.textContent="X",n.appendChild(t),e.appendChild(n)}}()})),document.querySelector(".submit-button-t").addEventListener("click",(function(){event.preventDefault(),document.querySelector(".addTask").classList.remove("formAppear");const r=new y(this.taskTitle,this.description,this.dueDate,this.priority);h.push(r),console.log(h)}))})()})();
(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>c});var t=n(81),o=n.n(t),i=n(645),a=n.n(i)()(o());a.push([e.id,":root {\r\n    --primary-main: rgb(0, 16, 88);\r\n    --secondary-main: rgba(73, 88, 121, 0.719);\r\n    --primary-sub: rgba(73, 88, 121, 0.205);\r\n    --secondary-sub: rgba(0, 16, 88, 0.849);\r\n}\r\n\r\nbody {\r\n    height:100vh;\r\n    margin: 0;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: rgb(109, 132, 182);\r\n    background-color: var(--primary-main);\r\n    height: 10vh;\r\n    font-size: 60px;\r\n    font-weight: 500;\r\n    text-shadow: 2px 1px rgb(71, 71, 71);\r\n}\r\n\r\n.addTask, .addProject {\r\n    visibility: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    position: fixed;\r\n    z-index: 1;\r\n    height: 100vh;\r\n    width: 100%;\r\n    padding-top: 100px;\r\n    background-color: rgb(8, 4, 4, 0.8);\r\n    color: aliceblue;\r\n}\r\n\r\n.addProject {\r\n    z-index: 2;\r\n}\r\n\r\n.formAppear {\r\n    visibility: visible;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.sumBar{\r\n    background-color: var(--secondary-main);\r\n    height: 80vh;\r\n    width: 400px;\r\n}\r\n\r\n.mainDisplay {\r\n    background-color: var(--primary-sub);\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 80vh;\r\n    width: 100%;\r\n}\r\n\r\n.contentContainer {\r\n    display: flex;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nh2 {\r\n    font-size: 40px;\r\n    font-weight: 300;\r\n    text-shadow: 1px 1px rgb(138, 137, 137);\r\n    padding: 5px;\r\n    margin: 0;\r\n}\r\n\r\n.projectItem, .projectAdd {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 15px 5px;\r\n    padding: 5px;\r\n    font-size: 20px;\r\n    width: 150px;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n}\r\n\r\n.taskBox, .taskAdd {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    margin: 10px;\r\n    padding: 5px;\r\n    font-size: 20px;\r\n    height: 150px;\r\n    width: 150px;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n}\r\n\r\n.taskBox {\r\n    align-items:flex-start ;\r\n}\r\n\r\n.taskAddButton {\r\n    border: 1px solid black;\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 30px;\r\n    background-color: rgb(0, 0, 0, 0);\r\n}\r\n\r\n.remove, .addPButton {\r\n    border: 1px solid black;\r\n    border-radius: 50%;\r\n    \r\n}\r\n\r\n.footer {\r\n    display: flex;\r\n    background-color: var(--secondary-sub);\r\n    height: 10vh;\r\n    color: rgb(109, 132, 182);\r\n    font-size: 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n\r\np {\r\n    display: flex;\r\n    flex-direction: column;\r\n}",""]);const c=a},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);r[c].references--}for(var s=t(e,o),d=0;d<i.length;d++){var l=n(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=s}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return e[t](i,i.exports,n),i.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.nc=void 0,(()=>{let e=[];class r{constructor(e,r,n){this.taskTitle=taskForm.taskTitle.value,this.description=taskForm.description.value,this.dueDate=taskForm.dueDate.value,this.priority=taskForm.priority.value}}function t(e){const r=document.querySelector(".taskContainer"),n=document.createElement("div");n.classList.add("taskBox"),r.appendChild(n);const t=document.createElement("div");t.textContent="Task: "+e.taskTitle,n.appendChild(t);const o=document.createElement("div");o.textContent="Description: "+e.description,n.appendChild(o);const i=document.createElement("div");i.textContent="Due: "+e.dueDate,n.appendChild(i);const a=document.createElement("div");a.textContent="Priority: "+e.priority,n.appendChild(a)}var o=n(379),i=n.n(o),a=n(795),c=n.n(a),s=n(569),d=n.n(s),l=n(565),u=n.n(l),p=n(216),f=n.n(p),m=n(589),h=n.n(m),v=n(426),x={};x.styleTagTransform=h(),x.setAttributes=u(),x.insert=d().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=f(),i()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals;let y=[["Default Project"]],g=[],b=0;function k(e){const r=document.querySelector(".projectContainer");r.innerHTML="";for(let e=0;e<y.length;e++){const n=document.createElement("div");n.setAttribute("id",e),n.classList.add("projectItem"),n.textContent=y[e][0];const t=document.createElement("button");t.classList.add("remove"),t.textContent="X",t.addEventListener("click",(()=>{y.splice(y.indexOf(y[e]),1),k()})),n.appendChild(t),r.appendChild(n)}}k(),document.querySelector(".taskAdd").addEventListener("click",(function(){document.querySelector(".addTask").classList.add("formAppear"),document.getElementById("taskForm").reset(),console.log("task baby")})),document.querySelector(".projectAdd").addEventListener("click",(function(){document.querySelector(".addProject").classList.add("formAppear"),document.getElementById("projectForm").reset()})),document.querySelector(".submit-button-p").addEventListener("click",(function(){event.preventDefault();const r=document.querySelector(".addProject");r.setAttribute("id",b),r.classList.remove("formAppear"),g.push(projectForm.projectTitle.value,e),y.push(g),g=[],console.log(y),b++,k()})),document.querySelector(".submit-button-t").addEventListener("click",(function(){event.preventDefault(),document.querySelector(".addTask").classList.remove("formAppear");const n=new r(this.taskTitle,this.description,this.dueDate,this.priority);e.push(n),console.log(e),console.log(projectForm.projectTitle.value),function(){document.querySelector(".taskContainer").innerHTML="";for(let r=0;r<e.length;r++)t(e[r])}()})),document.querySelector(".projectItem").addEventListener("click",(function(e,r){y.push(b),console.log(y)}))})()})();
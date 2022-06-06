(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),i=n.n(r),s=n(645),o=n.n(s)()(i());o.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: bisque;\r\n}\r\n\r\n#container {\r\n  margin: 15vh auto 5vh auto;\r\n  width: 40%;\r\n  box-shadow: 3px 2px 5px 5px #f4f4f4;\r\n}\r\n\r\n#heading,\r\n#form {\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid grey;\r\n}\r\n\r\n#list-ul {\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#form input {\r\n  outline: none;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.clear-btn {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.list-li {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  padding: 2px;\r\n}\r\n\r\n.list-input {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#input-span,\r\n#heading-span {\r\n  color: grey;\r\n  opacity: 0.7;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.del-btn {\r\n  cursor: pointer;\r\n  align-self: flex-end;\r\n  color: grey;\r\n  opacity: 0.7;\r\n}\r\n",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},o=[],a=0;a<e.length;a++){var l=e[a],c=r.base?l[0]+r.base:l[0],d=s[c]||0,p="".concat(c," ").concat(d);s[c]=d+1;var u=n(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=i(f,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var s=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var a=n(s[o]);t[a].references--}for(var l=r(e,i),c=0;c<s.length;c++){var d=n(s[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),s=n(569),o=n.n(s),a=n(565),l=n.n(a),c=n(216),d=n.n(c),p=n(589),u=n.n(p),f=n(426),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=new class{constructor(){this.lists=JSON.parse(localStorage.getItem("list"))||[],this.editId=null}addList(){const e=document.getElementById("task-input"),t={description:"",completed:!1,index:0};if(t.description=e.value,!t.description)return null;if(this.editId){const e=this.editId[this.editId.length-1];this.lists.splice(e,1,t),localStorage.setItem("list",JSON.stringify(this.lists))}else t.index=this.lists.length+1,this.lists.push(t),localStorage.setItem("list",JSON.stringify(this.lists)),this.showLists([t]),e.value="";window.location.reload(),this.isEditing=null}showLists(e){(e||this.lists).forEach(((e,t)=>{document.getElementById("list-ul").innerHTML+=`<li class="list-li" id="collection-${t}">\n      <div class="list-input">\n      <div class="input-box">\n      <input type="checkbox" class="completed" required ${e.completed?"checked":""}>\n      <label class="check ${e.completed?"checked":""}" id="description-${t}">${e.description}</label>\n      </div>\n      <span><i class="fa fa-trash-o del-btn btn-${t}" aria-hidden="true"></i></i></span>\n      </div>\n      </li>`}))}editTask(e,t){document.getElementById("task-input").value=t,this.editId=e}delete(e){document.querySelectorAll(".del-btn").forEach((t=>{if(t.classList.contains(e)){const n=e[e.length];this.lists.splice(n,1),this.lists.forEach(((e,t)=>{e.index=t+1})),localStorage.setItem("list",JSON.stringify(this.lists)),t.parentElement.parentElement.parentElement.remove()}}))}completed(){const e=this.parentElement.parentElement.parentElement.id,t=e[e.length-1],n=this.checked;this.nextElementSibling.classList.toggle("checked");const r=JSON.parse(localStorage.getItem("list"));r.splice(t,1,{description:this.nextElementSibling.innerHTML,completed:n,index:t}),localStorage.setItem("list",JSON.stringify(r))}clearComplete(){document.querySelectorAll(".checked").forEach((e=>{const{parentElement:t}=e.parentElement.parentElement,n=t.id,r=n[n.length-1];this.lists[r].completed=!0;const i=this.lists.filter((e=>!0!==e.completed));localStorage.setItem("list",JSON.stringify(i)),window.location.reload()}))}};window.addEventListener("load",m.showLists());const v=document.querySelectorAll(".del-btn"),g=document.querySelector("#btn"),y=document.querySelectorAll(".check"),x=document.getElementById("task-input"),b=document.querySelectorAll(".completed");document.getElementById("add-btn").addEventListener("click",(()=>m.addList())),x.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),m.addList())})),b.forEach((e=>{e.addEventListener("click",m.completed)})),g.addEventListener("click",(()=>m.clearComplete())),y.forEach((e=>{e.addEventListener("click",(()=>{m.editTask(e.id,e.innerText)}))})),v.forEach((e=>e.addEventListener("click",(()=>m.delete(e.classList[e.classList.length-1])))))})()})();
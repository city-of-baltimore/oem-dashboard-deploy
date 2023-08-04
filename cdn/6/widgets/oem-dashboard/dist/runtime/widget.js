System.register(["jimu-core/react","jimu-arcgis","jimu-ui","esri/layers/FeatureLayer","esri/layers/Layer","esri/Basemap","esri/identity/OAuthInfo","esri/identity/IdentityManager","esri/widgets/LayerList","esri/symbols/SimpleMarkerSymbol","esri/Color","jimu-ui/basic/color-picker"],(function(e,t){var r={},a={},i={},s={},n={},o={},l={},c={},d={},u={},p={},m={};return{setters:[function(e){r.Component=e.Component,r.default=e.default},function(e){a.JimuMapViewComponent=e.JimuMapViewComponent},function(e){i.AdvancedSelect=e.AdvancedSelect,i.Button=e.Button,i.CollapsablePanel=e.CollapsablePanel,i.Icon=e.Icon,i.Loading=e.Loading,i.Modal=e.Modal,i.ModalBody=e.ModalBody,i.ModalFooter=e.ModalFooter,i.ModalHeader=e.ModalHeader,i.Slider=e.Slider,i.Tab=e.Tab,i.Tabs=e.Tabs,i.TextInput=e.TextInput},function(e){s.default=e.default},function(e){n.default=e.default},function(e){o.default=e.default},function(e){l.default=e.default},function(e){c.default=e.default},function(e){d.default=e.default},function(e){u.default=e.default},function(e){p.default=e.default},function(e){m.ColorPicker=e.ColorPicker}],execute:function(){e((()=>{var e={138:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(81),i=r.n(a),s=r(645),n=r.n(s)()(i());n.push([e.id,".jimu-widget{position:relative}.p-5{padding:0.5rem !important}.grid{position:absolute;width:100%;height:100%;overflow:hidden;display:grid;grid-template-columns:repeat(2, 50%);grid-template-rows:1fr 60px}.grid-item{padding:0.5rem !important;position:relative}#add-layers-grid-item{grid-column:1;grid-row:1 / 3}#current-layers-grid-item{grid-column:2;grid-row:1}#save-template-grid-item{grid-column:2;grid-row:2}.loading{height:80px;width:200px}.add-button .jimu-icon{margin-right:4px !important;margin-left:0 !important;margin-bottom:3px}.add-button{display:block;width:100%}.add-button>.icon-btn-sizer{justify-content:left;text-align:left}#clear-all-button{width:100%}#clear-all-button .jimu-icon{margin-bottom:2px}#open-save-template-button .jimu-icon{margin-bottom:4px}#open-save-template-button{width:100%}.tabs{margin-top:10px}.pane-content{height:calc(100% - 145px);width:calc(100% - 16px);overflow-y:auto;position:absolute}#template-tab-0.active,#template-tab-0.active:hover{color:#b4d5ff;background-color:black}#template-tab-0:hover{color:white;background-color:black}#template-tab-0{color:white;background-color:#4d4d4d}.template-dropdown-content{margin-left:15px}#add-layer-advanced-select{margin-top:10px}.advanced-select-menu .add-button:hover{color:white}.advanced-select-menu .select-item-placeholder{margin:0 !important;width:0 !important}.esri-legend{background-color:transparent}.color-picker-block{display:inline-block;position:relative;top:11px;left:5px}#layer-size-slider>input{display:inline-block;width:86%;position:relative;top:3px;margin:0 10px}.esri-layer-list{max-height:calc(100vh - 250px);overflow-y:auto}.esri-layer-list__item-actions-list .esri-disabled-element,.esri-layer-list__item-actions-list .esri-disabled-element:hover{color:#b0b0b0;cursor:default}.esri-layer-list__item-container{padding-left:0}#picture-marker-warning{margin-top:10px}\n",""]);const o=n},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",a=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),a&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),a&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,a,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var n={};if(a)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(n[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);a&&n[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,a=0;a<t.length;a++)if(t[a].identifier===e){r=a;break}return r}function a(e,a){for(var s={},n=[],o=0;o<e.length;o++){var l=e[o],c=a.base?l[0]+a.base:l[0],d=s[c]||0,u="".concat(c," ").concat(d);s[c]=d+1;var p=r(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=i(m,a);a.byIndex=o,t.splice(o,0,{identifier:u,updater:h,references:1})}n.push(u)}return n}function i(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,i){var s=a(e=e||[],i=i||{});return function(e){e=e||[];for(var n=0;n<s.length;n++){var o=r(s[n]);t[o].references--}for(var l=a(e,i),c=0;c<s.length;c++){var d=r(s[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=l}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var a=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var a="";r.supports&&(a+="@supports (".concat(r.supports,") {")),r.media&&(a+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(a+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),a+=r.css,i&&(a+="}"),r.media&&(a+="}"),r.supports&&(a+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},673:e=>{"use strict";e.exports=o},639:e=>{"use strict";e.exports=p},380:e=>{"use strict";e.exports=c},263:e=>{"use strict";e.exports=l},818:e=>{"use strict";e.exports=s},195:e=>{"use strict";e.exports=n},511:e=>{"use strict";e.exports=u},447:e=>{"use strict";e.exports=d},826:e=>{"use strict";e.exports=a},315:e=>{"use strict";e.exports=r},726:e=>{"use strict";e.exports=i},362:e=>{"use strict";e.exports=m}},t={};function h(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,h),i.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var r in t)h.o(t,r)&&!h.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),h.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.p="",h.nc=void 0;var f={};return h.p=window.jimuConfig.baseUrl,(()=>{"use strict";h.r(f),h.d(f,{__set_webpack_public_path__:()=>de,default:()=>ce});var e=h(379),t=h.n(e),r=h(795),a=h.n(r),i=h(569),s=h.n(i),n=h(565),o=h.n(n),l=h(216),c=h.n(l),d=h(589),u=h.n(d),p=h(138),m={};m.styleTagTransform=u(),m.setAttributes=o(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=c(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var g=h(315),y=h(826),v=h(726),b=h(818),w=h(195),E=h(673),C=function(){return C=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},C.apply(this,arguments)},T=function(e,t){return T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},T(e,t)},S=function(){return S=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},S.apply(this,arguments)};function k(e){return Object.keys(e).some((function(t){var r=e[t];if(!r)return!1;switch(r&&r.toParam&&(r=r.toParam()),r.constructor.name){case"Array":case"Object":case"Date":case"Function":case"Boolean":case"String":case"Number":return!1;default:return!0}}))}function O(e){var t={};return Object.keys(e).forEach((function(r){var a,i,s=e[r];if(s&&s.toParam&&(s=s.toParam()),s||0===s||"boolean"==typeof s||"string"==typeof s){var n;switch(s.constructor.name){case"Array":var o=null===(i=null===(a=s[0])||void 0===a?void 0:a.constructor)||void 0===i?void 0:i.name;n="Array"===o?s:"Object"===o?JSON.stringify(s):s.join(",");break;case"Object":n=JSON.stringify(s);break;case"Date":n=s.valueOf();break;case"Function":n=null;break;case"Boolean":n=s+"";break;default:n=s}(n||0===n||"string"==typeof n||Array.isArray(n))&&(t[r]=n)}})),t}function x(e,t){return Array.isArray(t)&&t[0]&&Array.isArray(t[0])?t.map((function(t){return x(e,t)})).join("&"):encodeURIComponent(e)+"="+encodeURIComponent(t)}function I(e){var t=O(e);return Object.keys(t).map((function(e){return x(e,t[e])})).join("&")}var j=function(e,t,r,a,i){e=e||"UNKNOWN_ERROR",t=t||"UNKNOWN_ERROR_CODE",this.name="ArcGISRequestError",this.message="UNKNOWN_ERROR_CODE"===t?e:t+": "+e,this.originalMessage=e,this.code=t,this.response=r,this.url=a,this.options=i};j.prototype=Object.create(Error.prototype),j.prototype.constructor=j;var M="@esri/arcgis-rest-js",R={httpMethod:"POST",params:{f:"json"}},L=function(e){function t(t,r,a,i,s){void 0===t&&(t="AUTHENTICATION_ERROR"),void 0===r&&(r="AUTHENTICATION_ERROR_CODE");var n=e.call(this,t,r,a,i,s)||this;return n.name="ArcGISAuthError",n.message="AUTHENTICATION_ERROR_CODE"===r?t:r+": "+t,n}return function(e,t){function r(){this.constructor=e}T(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.retry=function(e,t){var r=this;void 0===t&&(t=3);var a=0,i=function(s,n){e(r.url,r.options).then((function(e){var t=S(S({},r.options),{authentication:e});return a+=1,A(r.url,t)})).then((function(e){s(e)})).catch((function(e){"ArcGISAuthError"===e.name&&a<t?i(s,n):"ArcGISAuthError"===e.name&&a>=t?n(r):n(e)}))};return new Promise((function(e,t){i(e,t)}))},t}(j);function A(e,t){void 0===t&&(t={params:{f:"json"}});var r=S(S(S({httpMethod:"POST"},R),t),{params:S(S({},R.params),t.params),headers:S(S({},R.headers),t.headers)}),a=[],i=[];if(r.fetch||"undefined"==typeof fetch?(a.push("`fetch`"),i.push("`node-fetch`")):r.fetch=fetch.bind(Function("return this")()),"undefined"==typeof Promise&&(a.push("`Promise`"),i.push("`es6-promise`")),"undefined"==typeof FormData&&(a.push("`FormData`"),i.push("`isomorphic-form-data`")),!r.fetch||"undefined"==typeof Promise||"undefined"==typeof FormData)throw new Error("`arcgis-rest-request` requires a `fetch` implementation and global variables for `Promise` and `FormData` to be present in the global scope. You are missing "+a.join(", ")+". We recommend installing the "+i.join(", ")+" modules at the root of your application to add these to the global scope. See https://bit.ly/2KNwWaJ for more info.");var s=r.httpMethod,n=r.authentication,o=r.rawResponse,l=S({f:"json"},r.params),c=null,d={method:s,credentials:r.credentials||"same-origin"};return r.headers&&r.headers["X-Esri-Auth-Client-Id"]&&e.indexOf("/oauth2/platformSelf")>-1&&(d.credentials="include"),(n?n.getToken(e,{fetch:r.fetch}).catch((function(t){return t.url=e,t.options=r,c=t,Promise.resolve("")})):Promise.resolve("")).then((function(t){t.length&&(l.token=t),n&&n.getDomainCredentials&&(d.credentials=n.getDomainCredentials(e));var a={};if("GET"===d.method){l.token&&r.hideToken&&"undefined"==typeof window&&(a["X-Esri-Authorization"]="Bearer "+l.token,delete l.token);var i=""===I(l)?e:e+"?"+I(l);r.maxUrlLength&&i.length>r.maxUrlLength||l.token&&r.hideToken?(d.method="POST",t.length&&r.hideToken&&(l.token=t,delete a["X-Esri-Authorization"])):e=i}var s=new RegExp("/items/.+/updateResources").test(e);return"POST"===d.method&&(d.body=function(e,t){var r=k(e)||t,a=O(e);if(r){var i=new FormData;return Object.keys(a).forEach((function(e){if("undefined"!=typeof Blob&&a[e]instanceof Blob){var t=a.fileName||a[e].name||e;i.append(e,a[e],t)}else a[e].constructor&&"ReadStream"===a[e].constructor.name&&Number.isInteger(a.dataSize)?i.append(e,a[e],{knownLength:a.dataSize}):i.append(e,a[e])})),i}return I(e)}(l,s)),d.headers=S(S({},a),r.headers),"undefined"!=typeof window||d.headers.referer||(d.headers.referer=M),k(l)||s||(d.headers["Content-Type"]="application/x-www-form-urlencoded"),r.fetch(e,d)})).then((function(t){if(!t.ok){var a=t.status,i=t.statusText;throw new j(i,"HTTP "+a,t,e,r)}if(o)return t;switch(l.f){case"json":case"geojson":return t.json();case"html":case"text":return t.text();default:return t.blob()}})).then((function(t){if("json"!==l.f&&"geojson"!==l.f||o)return t;var a=function(e,t,r,a,i){if(e.code>=400){var s=e.message,n=e.code;throw new j(s,n,e,t,a)}if(e.error){var o=e.error,l=(s=o.message,n=o.code,o.messageCode),c=l||n||"UNKNOWN_ERROR_CODE";if(498===n||499===n||"GWM_0003"===l||400===n&&"Unable to generate token."===s)throw i||new L(s,c,e,t,a);throw new j(s,c,e,t,a)}if("failed"===e.status||"failure"===e.status){s=void 0,n="UNKNOWN_ERROR_CODE";try{s=JSON.parse(e.statusMessage).message,n=JSON.parse(e.statusMessage).code}catch(t){s=e.statusMessage||e.message}throw new j(s,n,e,t,a)}return e}(t,e,0,r,c);if(c){var i=e.toLowerCase().split(/\/rest(\/admin)?\/services\//)[0];r.authentication.federatedServers[i]={token:[],expires:new Date(Date.now()+864e5)},c=null}return a}))}function N(e){return A(("string"!=typeof(t=e.url)||"/"===(t=t.trim())[t.length-1]&&(t=t.slice(0,-1)),t+"/addFeatures"),function(e,t,r){var a=S(S({params:{}},r),e);return a.params=["features","gdbVersion","returnEditMoment","rollbackOnFailure"].reduce((function(t,r){return(e[r]||"boolean"==typeof e[r])&&(t[r]=e[r]),t}),a.params),["params","httpMethod","rawResponse","authentication","portal","fetch","maxUrlLength","headers"].reduce((function(e,t){return a[t]&&(e[t]=a[t]),e}),{})}(e,0,{params:C({},e.params)}));var t}var P=h(263),_=h(380);class D extends g.Component{render(){return g.default.createElement(v.Button,{"aria-label":"Button",icon:!0,onClick:this.props.handleClick,size:"sm",type:"tertiary",className:"add-button",disabled:this.props.disabled},g.default.createElement(v.Icon,{icon:"https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/plus-32.svg",size:"l"}),this.props.title)}}const z=D;class F extends g.Component{constructor(){super(...arguments),this.addLayer=()=>{this.props.layer.visible=!0,this.props.jmv.view.map.add(this.props.layer)}}render(){return g.default.createElement(z,{title:this.props.layer.title,handleClick:this.addLayer})}}const B=F;class U extends g.Component{render(){return g.default.createElement("div",{id:"add-layer-advanced-select"},g.default.createElement(v.AdvancedSelect,{isMultiple:!1,isEmptyOptionHidden:!0,onChange:function(){},placeholder:"Search for layer...",size:"default",sortValuesByLabel:!0,staticValues:this.props.layers.map((e=>({label:e.title,value:e.id,render:t=>g.default.createElement(B,{layer:e,jmv:this.props.jmv})})))}))}}const W=U;class V extends g.Component{constructor(){super(...arguments),this.handleAdd=()=>{return e=this,t=void 0,a=function*(){for(let e of this.props.template.layers)e.visible=!0;this.props.jmv.view.map.addMany(this.props.template.layers)},new((r=void 0)||(r=Promise))((function(i,s){function n(e){try{l(a.next(e))}catch(e){s(e)}}function o(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,o)}l((a=a.apply(e,t||[])).next())}));var e,t,r,a}}render(){return g.default.createElement(v.CollapsablePanel,{label:g.default.createElement(z,{title:this.props.template.title,handleClick:this.handleAdd,disabled:0===this.props.template.layers.length}),level:0,onRequestClose:function(){},onRequestOpen:function(){},type:"default",disabled:0===this.props.template.layers.length},g.default.createElement("div",{className:"template-dropdown-content"},this.props.template.layers.map((e=>g.default.createElement(B,{layer:e,jmv:this.props.jmv})))))}}const J=V;class H extends g.Component{constructor(){super(...arguments),this.renderCategoryTabs=()=>this.props.categories.map((e=>g.default.createElement(v.Tab,{id:"category-"+e.id+"-tab",className:"tab",title:e.title},g.default.createElement("div",{id:"category-"+e.id+"-tab-content",className:"pane-content p-5 border"},e.layers.map((e=>g.default.createElement(B,{layer:e,jmv:this.props.jmv})))))))}render(){return g.default.createElement("div",{id:"add-layers-component"},g.default.createElement("h2",null,"Add Layers"),this.props.layers&&g.default.createElement(W,{layers:this.props.layers,jmv:this.props.jmv}),g.default.createElement("div",{className:"tabs"},g.default.createElement(v.Tabs,{defaultValue:"template-tab",onChange:function(){},onClose:function(){},type:"tabs",scrollable:!0},this.props.templates&&g.default.createElement(v.Tab,{id:"template-tab",className:"tab",title:"Templates"},g.default.createElement("div",{id:"template-tab-content",className:"pane-content p-5 border"},this.props.templates.map((e=>g.default.createElement(J,{template:e,jmv:this.props.jmv}))))),this.props.categories&&this.renderCategoryTabs())))}}const G=H;class q extends g.Component{constructor(e){super(e),this.toggleOpen=()=>{this.setState({open:!this.state.open})},this.state={title:void 0,open:!1}}render(){return g.default.createElement("div",{id:"save-template-component"},g.default.createElement(v.Button,{onClick:this.toggleOpen,id:"open-save-template-button"},g.default.createElement(v.Icon,{icon:"https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/plus-32.svg",size:"l"}),"Save Template"),g.default.createElement(v.Modal,{isOpen:this.state.open,onClosed:function(){},onEnter:function(){},onExit:function(){},onOpened:function(){},toggle:this.toggleOpen},g.default.createElement(v.ModalHeader,{toggle:this.toggleOpen},"Save Template"),g.default.createElement(v.ModalBody,null,g.default.createElement(v.TextInput,{className:"mb-3",placeholder:"Enter Template Title...",onAcceptValue:e=>this.setState({title:e})})),g.default.createElement(v.ModalFooter,null,g.default.createElement(v.Button,{onClick:()=>{this.props.handleClick(this.state.title),this.toggleOpen()},id:"save-template-button"},g.default.createElement(v.Icon,{icon:"https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/plus-32.svg",size:"l"}),"Save"))))}}const Y=q;class X extends g.Component{render(){return g.default.createElement(v.Button,{"aria-label":"Button",onClick:()=>this.props.jmv.view.map.removeAll(),size:"default",id:"clear-all-button"},g.default.createElement(v.Icon,{icon:"https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/x-32.svg",size:"l"}),"Clear All")}}const Z=X;var K=h(447),Q=h(511),$=h(639),ee=h(362);class te extends g.Component{constructor(e){super(e),this.onOpened=()=>{let e=this.props.layer.renderer.symbol;switch(e.type){case"simple-marker":this.setState({showColorPicker:!0,showSizeSlider:!0,color:e.color.toString(),size:e.size});break;case"picture-marker":this.setState({showColorPicker:!1,showSizeSlider:!0,color:"#ffffff",size:e.width});break;default:this.setState({showColorPicker:!0,showSizeSlider:!1,color:e.color.toString(),size:null})}},this.handleColorWarningClick=()=>{this.setState({showColorPicker:!0})},this.state={showColorPicker:!1,showSizeSlider:!1,color:null,size:null}}render(){return g.default.createElement(v.Modal,{isOpen:this.props.open,onClosed:function(){},onEnter:function(){},onExit:function(){},onOpened:this.onOpened,toggle:this.props.toggleOpen},g.default.createElement(v.ModalHeader,{toggle:this.props.toggleOpen},"Edit Layer Style"),g.default.createElement(v.ModalBody,null,this.state.showSizeSlider&&g.default.createElement("div",{id:"layer-size-slider"},"Size:",g.default.createElement(v.Slider,{"aria-label":"Layer Size Slider",onChange:e=>this.setState({size:+e.target.value}),min:0,max:Math.max(100,this.state.size),value:this.state.size}),g.default.createElement("label",null,this.state.size)),this.state.showColorPicker&&g.default.createElement("div",{id:"layer-color-picker"},"Color:",g.default.createElement(ee.ColorPicker,{"aria-label":"Layer Color Picker",color:this.state.color,height:30,width:30,onChange:e=>{this.setState({color:e})},onClick:function(){},placement:"bottom",type:"default"})),g.default.createElement("br",null),"picture-marker"===this.props.layer.renderer.symbol.type&&!this.state.showColorPicker&&g.default.createElement("div",{id:"picture-marker-warning"},g.default.createElement(v.Button,{onClick:this.handleColorWarningClick},"Change Color"),g.default.createElement("br",null),g.default.createElement("em",null,"Warning: changing the color of this layer will change the symbol type from a picture marker to a simple circular marker."))),g.default.createElement(v.ModalFooter,null,g.default.createElement(v.Button,{onClick:()=>this.props.changeStyle(this.state)},g.default.createElement(v.Icon,{icon:"https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/plus-32.svg",size:"l"}),"Save")))}}const re=te;class ae extends g.Component{constructor(e){super(e),this.myRef=g.default.createRef(),this.activeViewChangeHandler=e=>{if(this.state.jmv&&this.state.widget&&this.state.widget.destroy(),e&&(this.setState({jmv:e}),this.myRef.current)){const t=new K.default({view:e.view,listItemCreatedFunction:function(e){return t=this,r=void 0,i=function*(){let t=e.item;t.panel={className:"esri-icon-legend",content:["legend"]},yield t.layer.when(),t.actionsSections=[[{title:"Remove",className:"esri-icon-minus",id:"remove"}],[{title:"Zoom to",className:"esri-icon-zoom-in-magnifying-glass",id:"zoom"}],[{title:"Edit layer style",image:"https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/layers-editable-24.svg",id:"change-style",disabled:!("feature"===t.layer.type&&"simple"===t.layer.renderer.type&&(null!=t.layer.renderer.symbol.color||"picture-marker"===t.layer.renderer.symbol.type))}],[{title:"Send backwards",image:"https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/send-backwards-24.svg",id:"send-backwards"}],[{title:"Bring forward",image:"https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/bring-forward-24.svg",id:"bring-forward"}],[{title:"Send to back",image:"https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/send-to-back-24.svg",id:"send-to-back"}],[{title:"Bring to front",image:"https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/bring-to-front-24.svg",id:"bring-to-front"}]]},new((a=void 0)||(a=Promise))((function(e,s){function n(e){try{l(i.next(e))}catch(e){s(e)}}function o(e){try{l(i.throw(e))}catch(e){s(e)}}function l(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,o)}l((i=i.apply(t,r||[])).next())}));var t,r,a,i},container:this.myRef.current});t.on("trigger-action",(t=>{const r=t.action.id,a=t.item.layer;switch(r){case"zoom":e.view.goTo(a.fullExtent);break;case"remove":e.view.map.remove(a);break;case"change-style":this.openLayerStyleModal(a);break;case"send-backwards":this.sendBackwards(a);break;case"bring-forward":this.bringForward(a);break;case"send-to-back":this.sendToBack(a);break;case"bring-to-front":this.bringToFront(a)}})),this.setState({widget:t})}},this.sendBackwards=e=>{let t=this.state.jmv.view.map.layers.findIndex((t=>t===e));t>0&&(this.state.jmv.view.map.layers.removeAt(t),this.state.jmv.view.map.layers.add(e,t-1))},this.bringForward=e=>{let t=this.state.jmv.view.map.layers.findIndex((t=>t===e));t>-1&&t<this.state.jmv.view.map.layers.length&&(this.state.jmv.view.map.layers.removeAt(t),this.state.jmv.view.map.layers.add(e,t+1))},this.sendToBack=e=>{let t=this.state.jmv.view.map.layers.findIndex((t=>t===e));t>-1&&(this.state.jmv.view.map.layers.removeAt(t),this.state.jmv.view.map.layers.add(e,0))},this.bringToFront=e=>{let t=this.state.jmv.view.map.layers.findIndex((t=>t===e));t>-1&&(this.state.jmv.view.map.layers.removeAt(t),this.state.jmv.view.map.layers.add(e))},this.openLayerStyleModal=e=>{this.setState({modalOpen:!0,currentLayer:e})},this.toggleOpen=()=>{this.setState({modalOpen:!this.state.modalOpen})},this.changeStyle=e=>{let t=this.state.currentLayer.renderer;switch(t.symbol.type){case"simple-marker":t.symbol.color=new $.default(e.color),t.symbol.size=e.size;break;case"picture-marker":if(e.showColorPicker)t.symbol=new Q.default({color:e.color,size:e.size});else{let r=t.symbol,a=r.height/r.width;r.width=e.size,r.height=e.size*a}break;default:t.symbol.color=new $.default(e.color)}let r=this.state.widget.viewModel,a=r.operationalItems.findIndex((e=>e.layer===this.state.currentLayer)),i=r.operationalItems.at(a).clone();r.operationalItems.removeAt(a),r.operationalItems.add(i,a),this.toggleOpen()},this.state={jmv:null,widget:null,modalOpen:!1,currentLayer:null}}render(){let e=this.state.currentLayer;return g.default.createElement("div",null,g.default.createElement(y.JimuMapViewComponent,{useMapWidgetId:this.props.useMapWidgetId,onActiveViewChange:this.activeViewChangeHandler}),g.default.createElement("div",{ref:this.myRef}),e&&"feature"===e.type&&"simple"===e.renderer.type&&g.default.createElement(re,{changeStyle:this.changeStyle,layer:this.state.currentLayer,open:this.state.modalOpen,toggleOpen:this.toggleOpen}))}}const ie=ae;class se extends g.Component{render(){return g.default.createElement("div",{id:"current-layers-component"},g.default.createElement("h2",null,"Current Layers"),g.default.createElement(Z,{jmv:this.props.jmv}),g.default.createElement(ie,{useMapWidgetId:this.props.useMapWidgetId}))}}const ne=se;var oe=function(e,t,r,a){return new(r||(r=Promise))((function(i,s){function n(e){try{l(a.next(e))}catch(e){s(e)}}function o(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,o)}l((a=a.apply(e,t||[])).next())}))};class le extends g.Component{constructor(e){super(e),this.templateTableUrl="https://services1.arcgis.com/UWYHeuuJISiGmgXx/arcgis/rest/services/OEM_Database_v2/FeatureServer/1",this.layerTableURL="https://services1.arcgis.com/UWYHeuuJISiGmgXx/arcgis/rest/services/OEM_Database_v2/FeatureServer/0",this.categoryTableUrl="https://services1.arcgis.com/UWYHeuuJISiGmgXx/arcgis/rest/services/OEM_Database_v2/FeatureServer/2",this.templateLayerRelationshipsUrl="https://services1.arcgis.com/UWYHeuuJISiGmgXx/arcgis/rest/services/OEM_Database_v2/FeatureServer/3",this.getCategories=()=>oe(this,void 0,void 0,(function*(){let e=yield this.categoryTable.queryFeatures({where:"1=1",outFields:["*"],orderByFields:["TITLE"]}),t=new Map,r=!1;for(let a of e.features)try{t.set(a.attributes.OBJECTID,{id:a.attributes.OBJECTID,title:a.attributes.TITLE,layers:[]})}catch(e){console.error(e),r=!0}this.setState({categories:t}),r&&alert("Error loading one or more categories!")})),this.getLayers=()=>oe(this,void 0,void 0,(function*(){let e=yield this.layerTable.queryFeatures({where:"1=1",outFields:["OBJECTID","TITLE","URL","SCOPE","CATEGORYID","RENDERER"],orderByFields:["TITLE"]}),t=new Map,r=!1;for(let a of e.features)try{let e=yield w.default.fromArcGISServerUrl(a.attributes.URL);if(e.id=a.attributes.OBJECTID,e.title=a.attributes.SCOPE+" "+a.attributes.TITLE,null!=a.attributes.RENDERER&&"feature"===e.type)try{e.renderer=JSON.parse(a.attributes.RENDERER)}catch(e){console.error(e)}t.set(a.attributes.OBJECTID,e),this.state.categories.get(a.attributes.CATEGORYID).layers.push(e)}catch(e){console.error(e),r=!0}this.setState({layers:t}),r&&alert("Error loading one or more layers!")})),this.getTemplates=()=>oe(this,void 0,void 0,(function*(){let e=yield this.templateTable.queryFeatures({where:"1=1",outFields:["*"],orderByFields:["TITLE"]}),t=new Map,r=!1;for(let a of e.features)try{t.set(a.attributes.OBJECTID,{id:a.attributes.OBJECTID,title:a.attributes.TITLE,layers:[]})}catch(e){console.error(e),r=!0}this.setState({templates:t}),r&&alert("Error loading one or more templates!")})),this.getTemplateLayers=()=>oe(this,void 0,void 0,(function*(){let e=yield this.templateLayerRelationships.queryFeatures({where:"1=1",outFields:["*"]});for(let t of e.features){let e=this.state.layers.get(t.attributes.LAYERID);e&&this.state.templates.get(t.attributes.TEMPLATEID).layers.push(e)}this.setState({templates:this.state.templates,loading:!1})})),this.addTemplate=e=>oe(this,void 0,void 0,(function*(){try{if(e)if((yield this.templateTable.queryFeatureCount({where:"TITLE = '"+e+"'",outFields:["*"]}))>0)alert("Error, a template with this title already exists!");else{const t=new P.default({appId:"eS2vUdIZbHaVOrDz",portalUrl:"baltimore.maps.arcgis.com",flowType:"auto",popup:!1});_.default.registerOAuthInfos([t]);let r=yield _.default.checkSignInStatus(t.portalUrl+"/sharing");r||(r=yield _.default.getCredential(t.portalUrl+"/sharing"));let a=(yield N({url:this.templateTableUrl,features:[{attributes:{TITLE:e}}],params:{token:r.token}})).addResults[0].objectId;yield this.addTemplateLayers(a,r.token),yield this.getTemplates(),yield this.getTemplateLayers()}else alert("Error, please enter a title!")}catch(e){console.error(e),alert("Error saving template, please try again!")}})),this.addTemplateLayers=(e,t)=>oe(this,void 0,void 0,(function*(){let r=[],a=this.state.jimuMapView.view.map.allLayers;for(let t of a)this.state.layers.has(+t.id)&&r.push({attributes:{TEMPLATEID:e,LAYERID:t.id}});yield N({url:this.templateLayerRelationshipsUrl,features:r,params:{token:t}})})),this.activeViewChangeHandler=e=>{e&&(this.state.jimuMapView||(e.view.map.basemap=E.default.fromId("arcgis-topographic")),this.setState({jimuMapView:e}))},this.state={jimuMapView:void 0,layers:new Map,templates:new Map,categories:new Map,loading:!0}}componentDidMount(){return oe(this,void 0,void 0,(function*(){try{this.templateTable=new b.default({url:this.templateTableUrl}),this.layerTable=new b.default({url:this.layerTableURL}),this.categoryTable=new b.default({url:this.categoryTableUrl}),this.templateLayerRelationships=new b.default({url:this.templateLayerRelationshipsUrl})}catch(e){return console.error(e),void alert("Error connecting to database, please try again!")}try{yield this.getCategories()}catch(e){return console.error(e),void alert("Error loading categories, please try again!")}try{yield this.getTemplates()}catch(e){return console.error(e),void alert("Error loading templates, please try again!")}try{yield this.getLayers()}catch(e){return console.error(e),void alert("Error loading layers, please try again!")}try{yield this.getTemplateLayers()}catch(e){return console.error(e),void alert("Error loading template layers, please try again!")}}))}render(){var e,t;return g.default.createElement("div",{className:"widget-starter jimu-widget"},this.props.useMapWidgetIds&&1===this.props.useMapWidgetIds.length&&g.default.createElement(y.JimuMapViewComponent,{useMapWidgetId:null===(e=this.props.useMapWidgetIds)||void 0===e?void 0:e[0],onActiveViewChange:this.activeViewChangeHandler}),g.default.createElement("div",{className:"grid"},g.default.createElement("div",{id:"add-layers-grid-item",className:"grid-item"},this.state.loading&&g.default.createElement(v.Loading,{type:"SECONDARY"}),this.state.jimuMapView&&g.default.createElement(G,{jmv:this.state.jimuMapView,layers:Array.from(this.state.layers.values()),templates:Array.from(this.state.templates.values()),categories:Array.from(this.state.categories.values())})),g.default.createElement("div",{id:"current-layers-grid-item",className:"grid-item"},!(this.props.useMapWidgetIds&&1===this.props.useMapWidgetIds.length)&&g.default.createElement(v.Loading,{type:"SECONDARY"}),this.props.useMapWidgetIds&&1===this.props.useMapWidgetIds.length&&g.default.createElement(ne,{useMapWidgetId:null===(t=this.props.useMapWidgetIds)||void 0===t?void 0:t[0],jmv:this.state.jimuMapView})),g.default.createElement("div",{id:"save-template-grid-item",className:"grid-item"},g.default.createElement(Y,{handleClick:this.addTemplate}))))}}const ce=le;function de(e){h.p=e}})(),f})())}}}));

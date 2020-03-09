(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{370:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return y}));var r=n(1),o=n(9),a=(n(0),n(382)),i=n(397),l=n(398),c={id:"overview",title:"Clients overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Client","Overview"],description:"An overview of the OpenHIM Clients"},s={id:"api/clients/overview",title:"Clients overview",description:"An overview of the OpenHIM Clients",source:"@site/docs/api/clients/overview.md",permalink:"/docs/next/api/clients/overview",version:"next",sidebar_label:"Overview",sidebar:"api",previous:{title:"Trigger a Polling Channel",permalink:"/docs/next/api/channels/polling-trigger"},next:{title:"Create Client",permalink:"/docs/next/api/clients/create"}},p=[{value:"Schema Model",id:"schema-model",children:[]}],u={rightToc:p};function y(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"schema-model"},"Schema Model"),Object(a.b)(l.a,{mdxType:"GetCurrentVersion"},Object(a.b)(i.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/src/model/clients.js",language:"javascript",mdxType:"ExternalContentSyntaxHighlighter"})))}y.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||y[d]||a;return n?o.a.createElement(f,l({ref:t},s,{components:n})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},386:function(e,t,n){"use strict";var r=n(8),o=n(52),a=n(36),i=n(37),l=n(71),c=n(72),s=Math.max,p=Math.min,u=Math.floor,y=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;n(73)("replace",2,(function(e,t,n,f){return[function(r,o){var a=e(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,a,o):n.call(String(a),r,o)},function(e,t){var o=f(n,e,this,t);if(o.done)return o.value;var u=r(e),y=String(this),d="function"==typeof t;d||(t=String(t));var g=u.global;if(g){var h=u.unicode;u.lastIndex=0}for(var m=[];;){var b=c(u,y);if(null===b)break;if(m.push(b),!g)break;""===String(b[0])&&(u.lastIndex=l(y,a(u.lastIndex),h))}for(var O,w="",k=0,j=0;j<m.length;j++){b=m[j];for(var x=String(b[0]),S=s(p(i(b.index),y.length),0),P=[],T=1;T<b.length;T++)P.push(void 0===(O=b[T])?O:String(O));var E=b.groups;if(d){var C=[x].concat(P,S,y);void 0!==E&&C.push(E);var N=String(t.apply(void 0,C))}else N=v(x,y,S,P,E,t);S>=k&&(w+=y.slice(k,S)+N,k=S+x.length)}return w+y.slice(k)}];function v(e,t,r,a,i,l){var c=r+e.length,s=a.length,p=d;return void 0!==i&&(i=o(i),p=y),n.call(l,p,(function(n,o){var l;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(c);case"<":l=i[o.slice(1,-1)];break;default:var p=+o;if(0===p)return n;if(p>s){var y=u(p/10);return 0===y?n:y<=s?void 0===a[y-1]?o.charAt(1):a[y-1]+o.charAt(1):n}l=a[p-1]}return void 0===l?"":l}))}}))},392:function(e,t,n){"use strict";var r=n(8),o=n(36),a=n(71),i=n(72);n(73)("match",1,(function(e,t,n,l){return[function(n){var r=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=l(n,e,this);if(t.done)return t.value;var c=r(e),s=String(this);if(!c.global)return i(c,s);var p=c.unicode;c.lastIndex=0;for(var u,y=[],d=0;null!==(u=i(c,s));){var f=String(u[0]);y[d]=f,""===f&&(c.lastIndex=a(s,o(c.lastIndex),p)),d++}return 0===d?null:y}]}))},393:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(51),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(0),i={Prism:r.a,theme:o};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=c({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=c({},n,{backgroundColor:null}),o};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=c({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?c({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,i=c({},d(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?c({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,i=0,l=[],c=[l];i>-1;){for(;(a=r[i]++)<o[i];){var y=void 0,d=t[i],f=n[i][a];if("string"==typeof f?(d=i>0?d:["plain"],y=f):(d=u(d,f.type),f.alias&&(d=u(d,f.alias)),y=f.content),"string"==typeof y){var v=y.split(s),g=v.length;l.push({types:d,content:v[0]});for(var h=1;h<g;h++)p(l),c.push(l=[]),l.push({types:d,content:v[h]})}else i++,t.push(d),n.push(y),r.push(0),o.push(y.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return p(l),c}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=f},394:function(e,t,n){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},397:function(e,t,n){"use strict";var r=n(1),o=(n(395),n(18),n(386),n(5)),a=n(0),i=n.n(a),l=n(396),c=n.n(l),s=n(393),p=n(394),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={data:null,spinner:!0,url:t.url.replace("<VERSION>",t.version)},n}Object(o.a)(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=this;c.a.get(this.state.url).then((function(t){t.data?e.setState({data:t.data,spinner:!1}):e.setState({data:null,spinner:!1})})).catch((function(t){console.error(t.toString()),e.setState({data:null,spinner:!1})}))},n.render=function(){return this.state.spinner?i.a.createElement("div",{className:"spinnerContainer"},i.a.createElement("div",{id:"loading"})):this.state.data?i.a.createElement(s.a,Object(r.a)({},s.b,{theme:p.a,code:this.state.data,language:""+this.props.language}),(function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,a=e.getTokenProps;return i.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return i.a.createElement("div",o({line:e,key:t}),e.map((function(e,t){return i.a.createElement("span",a({token:e,key:t}))})))})))})):i.a.createElement("div",null,"Schema model not found for version "+this.props.version)},t}(a.Component);t.a=u},398:function(e,t,n){"use strict";(function(e){n(386),n(392);var r,o=n(5),a=n(0),i=n.n(a);r="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};var l=function(e){function t(t){var n;n=e.call(this,t)||this;var o=null;r&&r.location&&(o=r.location.href.match(/[\d].[\d].x/));var a="master";return o&&(a="v"+o[0].replace("x","0")),n.state={version:a},n}return Object(o.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.cloneElement(this.props.children,{version:this.state.version}))},t}(a.Component);t.a=l}).call(this,n(74))}}]);
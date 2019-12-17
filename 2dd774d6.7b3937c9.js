(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"default",(function(){return v}));var r=n(1),o=n(6),i=(n(0),n(338)),a=n(359),c=n(363),l={id:"overview",title:"Clients overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Client","Overview"],description:"An overview of the OpenHIM Clients"},s=[{value:"Schema Model",id:"schema-model",children:[]}],u={id:"version-5.2.x/api/clients/overview",title:"Clients overview",description:"An overview of the OpenHIM Clients",source:"@site/versioned_docs/version-5.2.x/api/clients/overview.md",permalink:"/docs/api/clients/overview",version:"5.2.x",sidebar_label:"Overview",sidebar:"version-5.2.x/api",previous:{title:"Trigger a Polling Channel",permalink:"/docs/api/channels/polling-trigger"},next:{title:"Create Client",permalink:"/docs/api/clients/create"}},p={rightToc:s,metadata:u},f="wrapper";function v(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(f,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"schema-model"},"Schema Model"),Object(i.b)(c.a,{mdxType:"GetCurrentVersion"},Object(i.b)(a.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/src/model/clients.js",language:"javascript",mdxType:"ExternalContentSyntaxHighlighter"})))}v.isMDXComponent=!0},343:function(e,t,n){"use strict";var r=n(352)(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},344:function(e,t,n){"use strict";var r=n(350),o=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},345:function(e,t,n){"use strict";n(353);var r=n(18),o=n(8),i=n(34),a=n(32),c=n(11),l=n(346),s=c("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var f=c(e),v=!i((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),d=v?!i((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[s]=function(){return n}),n[f](""),!t})):void 0;if(!v||!d||"replace"===e&&!u||"split"===e&&!p){var g=/./[f],h=n(a,f,""[e],(function(e,t,n,r,o){return t.exec===l?v&&!o?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),y=h[0],b=h[1];r(String.prototype,e,y),o(RegExp.prototype,f,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},346:function(e,t,n){"use strict";var r,o,i=n(347),a=RegExp.prototype.exec,c=String.prototype.replace,l=a,s=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),u=void 0!==/()??/.exec("")[1];(s||u)&&(l=function(e){var t,n,r,o,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",i.call(l))),s&&(t=l.lastIndex),r=a.call(l,e),s&&r&&(l.lastIndex=l.global?r.index+r[0].length:t),u&&r&&r.length>1&&c.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),e.exports=l},347:function(e,t,n){"use strict";var r=n(17);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},349:function(e,t,n){"use strict";var r=n(17),o=n(53),i=n(49),a=n(33),c=n(343),l=n(344),s=Math.max,u=Math.min,p=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;n(345)("replace",2,(function(e,t,n,d){return[function(r,o){var i=e(this),a=null==r?void 0:r[t];return void 0!==a?a.call(r,i,o):n.call(String(i),r,o)},function(e,t){var o=d(n,e,this,t);if(o.done)return o.value;var p=r(e),f=String(this),v="function"==typeof t;v||(t=String(t));var h=p.global;if(h){var y=p.unicode;p.lastIndex=0}for(var b=[];;){var m=l(p,f);if(null===m)break;if(b.push(m),!h)break;""===String(m[0])&&(p.lastIndex=c(f,i(p.lastIndex),y))}for(var x,S="",w=0,E=0;E<b.length;E++){m=b[E];for(var O=String(m[0]),j=s(u(a(m.index),f.length),0),C=[],k=1;k<m.length;k++)C.push(void 0===(x=m[k])?x:String(x));var I=m.groups;if(v){var R=[O].concat(C,j,f);void 0!==I&&R.push(I);var M=String(t.apply(void 0,R))}else M=g(O,f,j,C,I,t);j>=w&&(S+=f.slice(w,j)+M,w=j+O.length)}return S+f.slice(w)}];function g(e,t,r,i,a,c){var l=r+e.length,s=i.length,u=v;return void 0!==a&&(a=o(a),u=f),n.call(c,u,(function(n,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(l);case"<":c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return n;if(u>s){var f=p(u/10);return 0===f?n:f<=s?void 0===i[f-1]?o.charAt(1):i[f-1]+o.charAt(1):n}c=i[u-1]}return void 0===c?"":c}))}}))},350:function(e,t,n){var r=n(51),o=n(11)("toStringTag"),i="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),o))?n:i?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},351:function(e,t,n){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},352:function(e,t,n){var r=n(33),o=n(32);e.exports=function(e){return function(t,n){var i,a,c=String(o(t)),l=r(n),s=c.length;return l<0||l>=s?e?"":void 0:(i=c.charCodeAt(l))<55296||i>56319||l+1===s||(a=c.charCodeAt(l+1))<56320||a>57343?e?c.charAt(l):i:e?c.slice(l,l+2):a-56320+(i-55296<<10)+65536}}},353:function(e,t,n){"use strict";var r=n(346);n(52)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},354:function(e,t,n){"use strict";var r=n(17),o=n(49),i=n(343),a=n(344);n(345)("match",1,(function(e,t,n,c){return[function(n){var r=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=c(n,e,this);if(t.done)return t.value;var l=r(e),s=String(this);if(!l.global)return a(l,s);var u=l.unicode;l.lastIndex=0;for(var p,f=[],v=0;null!==(p=a(l,s));){var d=String(p[0]);f[v]=d,""===d&&(l.lastIndex=i(s,o(l.lastIndex),u)),v++}return 0===v?null:f}]}))},359:function(e,t,n){"use strict";var r=n(1),o=(n(360),n(362),n(349),n(5)),i=n(0),a=n.n(i),c=n(355),l=n.n(c),s=n(356),u=n(351),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={data:null,spinner:!0,url:t.url.replace("<VERSION>",t.version)},n}Object(o.a)(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=this;l.a.get(this.state.url).then((function(t){t.data?e.setState({data:t.data,spinner:!1}):e.setState({data:null,spinner:!1})})).catch((function(t){console.error(t.toString()),e.setState({data:null,spinner:!1})}))},n.render=function(){return this.state.spinner?a.a.createElement("div",{className:"spinnerContainer"},a.a.createElement("div",{id:"loading"})):this.state.data?a.a.createElement(s.a,Object(r.a)({},s.b,{theme:u.a,code:this.state.data,language:""+this.props.language}),(function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,i=e.getTokenProps;return a.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return a.a.createElement("div",o({line:e,key:t}),e.map((function(e,t){return a.a.createElement("span",i({token:e,key:t}))})))})))})):a.a.createElement("div",null,"Schema model not found for version "+this.props.version)},t}(i.Component);t.a=p},360:function(e,t,n){"use strict";n(361);var r=n(17),o=n(347),i=n(12),a=/./.toString,c=function(e){n(18)(RegExp.prototype,"toString",e,!0)};n(34)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?c((function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?o.call(e):void 0)})):"toString"!=a.name&&c((function(){return a.call(this)}))},361:function(e,t,n){n(12)&&"g"!=/./g.flags&&n(19).f(RegExp.prototype,"flags",{configurable:!0,get:n(347)})},362:function(e,t,n){"use strict";var r=n(350),o={};o[n(11)("toStringTag")]="z",o+""!="[object z]"&&n(18)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},363:function(e,t,n){"use strict";(function(e){n(349),n(354);var r,o=n(5),i=n(0),a=n.n(i);r="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};var c=function(e){function t(t){var n;n=e.call(this,t)||this;var o=null;r&&r.location&&(o=r.location.href.match(/[\d].[\d].x/));var i="master";return o&&(i="v"+o[0].replace("x","0")),n.state={version:i},n}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement("div",null,a.a.cloneElement(this.props.children,{version:this.state.version}))},t}(i.Component);t.a=c}).call(this,n(50))}}]);
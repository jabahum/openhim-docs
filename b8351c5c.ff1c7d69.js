(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{277:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"rightToc",(function(){return s})),n.d(e,"metadata",(function(){return u})),n.d(e,"default",(function(){return v}));var r=n(1),o=n(6),a=(n(0),n(338)),i=n(359),c=n(363),l={id:"overview",title:"Contact groups overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Contact group","Overview"],description:"An overview of the OpenHIM Contact groups"},s=[{value:"Schema Model",id:"schema-model",children:[]}],u={id:"version-5.2.x/api/contacts-group/overview",title:"Contact groups overview",description:"An overview of the OpenHIM Contact groups",source:"@site/versioned_docs/version-5.2.x/api/contacts-group/overview.md",permalink:"/docs/api/contacts-group/overview",version:"5.2.x",sidebar_label:"Overview",sidebar:"version-5.2.x/api",previous:{title:"Delete client",permalink:"/docs/api/clients/delete"},next:{title:"Create Contact group",permalink:"/docs/api/contacts-group/create"}},p={rightToc:s,metadata:u},f="wrapper";function v(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.b)(f,Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Allows for the management of OpenHIM contact groups."),Object(a.b)("h2",{id:"schema-model"},"Schema Model"),Object(a.b)(c.a,{mdxType:"GetCurrentVersion"},Object(a.b)(i.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/src/model/contactGroups.js",language:"javascript",mdxType:"ExternalContentSyntaxHighlighter"})))}v.isMDXComponent=!0},343:function(t,e,n){"use strict";var r=n(352)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},344:function(t,e,n){"use strict";var r=n(350),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var a=n.call(t,e);if("object"!=typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},345:function(t,e,n){"use strict";n(353);var r=n(18),o=n(8),a=n(34),i=n(32),c=n(11),l=n(346),s=c("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=c(t),v=!a((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),d=v?!a((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[f](""),!e})):void 0;if(!v||!d||"replace"===t&&!u||"split"===t&&!p){var g=/./[f],h=n(i,f,""[t],(function(t,e,n,r,o){return e.exec===l?v&&!o?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),y=h[0],b=h[1];r(String.prototype,t,y),o(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},346:function(t,e,n){"use strict";var r,o,a=n(347),i=RegExp.prototype.exec,c=String.prototype.replace,l=i,s=(r=/a/,o=/b*/g,i.call(r,"a"),i.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),u=void 0!==/()??/.exec("")[1];(s||u)&&(l=function(t){var e,n,r,o,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",a.call(l))),s&&(e=l.lastIndex),r=i.call(l,t),s&&r&&(l.lastIndex=l.global?r.index+r[0].length:e),u&&r&&r.length>1&&c.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=l},347:function(t,e,n){"use strict";var r=n(17);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},349:function(t,e,n){"use strict";var r=n(17),o=n(53),a=n(49),i=n(33),c=n(343),l=n(344),s=Math.max,u=Math.min,p=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;n(345)("replace",2,(function(t,e,n,d){return[function(r,o){var a=t(this),i=null==r?void 0:r[e];return void 0!==i?i.call(r,a,o):n.call(String(a),r,o)},function(t,e){var o=d(n,t,this,e);if(o.done)return o.value;var p=r(t),f=String(this),v="function"==typeof e;v||(e=String(e));var h=p.global;if(h){var y=p.unicode;p.lastIndex=0}for(var b=[];;){var m=l(p,f);if(null===m)break;if(b.push(m),!h)break;""===String(m[0])&&(p.lastIndex=c(f,a(p.lastIndex),y))}for(var x,S="",w=0,E=0;E<b.length;E++){m=b[E];for(var O=String(m[0]),j=s(u(i(m.index),f.length),0),k=[],C=1;C<m.length;C++)k.push(void 0===(x=m[C])?x:String(x));var I=m.groups;if(v){var R=[O].concat(k,j,f);void 0!==I&&R.push(I);var M=String(e.apply(void 0,R))}else M=g(O,f,j,k,I,e);j>=w&&(S+=f.slice(w,j)+M,w=j+O.length)}return S+f.slice(w)}];function g(t,e,r,a,i,c){var l=r+t.length,s=a.length,u=v;return void 0!==i&&(i=o(i),u=f),n.call(c,u,(function(n,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(l);case"<":c=i[o.slice(1,-1)];break;default:var u=+o;if(0===u)return n;if(u>s){var f=p(u/10);return 0===f?n:f<=s?void 0===a[f-1]?o.charAt(1):a[f-1]+o.charAt(1):n}c=a[u-1]}return void 0===c?"":c}))}}))},350:function(t,e,n){var r=n(51),o=n(11)("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),o))?n:a?r(e):"Object"==(i=r(e))&&"function"==typeof e.callee?"Arguments":i}},351:function(t,e,n){"use strict";e.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},352:function(t,e,n){var r=n(33),o=n(32);t.exports=function(t){return function(e,n){var a,i,c=String(o(e)),l=r(n),s=c.length;return l<0||l>=s?t?"":void 0:(a=c.charCodeAt(l))<55296||a>56319||l+1===s||(i=c.charCodeAt(l+1))<56320||i>57343?t?c.charAt(l):a:t?c.slice(l,l+2):i-56320+(a-55296<<10)+65536}}},353:function(t,e,n){"use strict";var r=n(346);n(52)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},354:function(t,e,n){"use strict";var r=n(17),o=n(49),a=n(343),i=n(344);n(345)("match",1,(function(t,e,n,c){return[function(n){var r=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=c(n,t,this);if(e.done)return e.value;var l=r(t),s=String(this);if(!l.global)return i(l,s);var u=l.unicode;l.lastIndex=0;for(var p,f=[],v=0;null!==(p=i(l,s));){var d=String(p[0]);f[v]=d,""===d&&(l.lastIndex=a(s,o(l.lastIndex),u)),v++}return 0===v?null:f}]}))},359:function(t,e,n){"use strict";var r=n(1),o=(n(360),n(362),n(349),n(5)),a=n(0),i=n.n(a),c=n(355),l=n.n(c),s=n(356),u=n(351),p=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={data:null,spinner:!0,url:e.url.replace("<VERSION>",e.version)},n}Object(o.a)(e,t);var n=e.prototype;return n.componentWillMount=function(){var t=this;l.a.get(this.state.url).then((function(e){e.data?t.setState({data:e.data,spinner:!1}):t.setState({data:null,spinner:!1})})).catch((function(e){console.error(e.toString()),t.setState({data:null,spinner:!1})}))},n.render=function(){return this.state.spinner?i.a.createElement("div",{className:"spinnerContainer"},i.a.createElement("div",{id:"loading"})):this.state.data?i.a.createElement(s.a,Object(r.a)({},s.b,{theme:u.a,code:this.state.data,language:""+this.props.language}),(function(t){var e=t.className,n=t.style,r=t.tokens,o=t.getLineProps,a=t.getTokenProps;return i.a.createElement("pre",{className:e,style:n},r.map((function(t,e){return i.a.createElement("div",o({line:t,key:e}),t.map((function(t,e){return i.a.createElement("span",a({token:t,key:e}))})))})))})):i.a.createElement("div",null,"Schema model not found for version "+this.props.version)},e}(a.Component);e.a=p},360:function(t,e,n){"use strict";n(361);var r=n(17),o=n(347),a=n(12),i=/./.toString,c=function(t){n(18)(RegExp.prototype,"toString",t,!0)};n(34)((function(){return"/a/b"!=i.call({source:"a",flags:"b"})}))?c((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?o.call(t):void 0)})):"toString"!=i.name&&c((function(){return i.call(this)}))},361:function(t,e,n){n(12)&&"g"!=/./g.flags&&n(19).f(RegExp.prototype,"flags",{configurable:!0,get:n(347)})},362:function(t,e,n){"use strict";var r=n(350),o={};o[n(11)("toStringTag")]="z",o+""!="[object z]"&&n(18)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},363:function(t,e,n){"use strict";(function(t){n(349),n(354);var r,o=n(5),a=n(0),i=n.n(a);r="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{location:{}};var c=function(t){function e(e){var n;n=t.call(this,e)||this;var o=null;r&&r.location&&(o=r.location.href.match(/[\d].[\d].x/));var a="master";return o&&(a="v"+o[0].replace("x","0")),n.state={version:a},n}return Object(o.a)(e,t),e.prototype.render=function(){return i.a.createElement("div",null,i.a.cloneElement(this.props.children,{version:this.state.version}))},e}(a.Component);e.a=c}).call(this,n(50))}}]);
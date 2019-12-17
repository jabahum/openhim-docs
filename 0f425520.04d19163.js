(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{109:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"rightToc",(function(){return s})),n.d(e,"metadata",(function(){return u})),n.d(e,"default",(function(){return f}));var r=n(1),o=n(6),i=(n(0),n(338)),a=n(357),c=n(358),l={id:"overview",title:"OpenHIM Config Options Overview",sidebar_label:"Overview",keywords:["openhim","core","config","options"]},s=[],u={id:"configuration/overview",title:"OpenHIM Config Options Overview",description:"import ExternalContentSyntaxHighlighter from '../_react_components/ExternalContentSyntaxHighlighter.jsx';",source:"@site/docs/configuration/overview.md",permalink:"/docs/next/configuration/overview",version:"next",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Install on a Virtual Machine",permalink:"/docs/next/installation/virtual-machine"},next:{title:"Certificates",permalink:"/docs/next/configuration/certificates"}},p={rightToc:s,metadata:u},d="wrapper";function f(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.b)(d,Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)(c.a,{mdxType:"GetCurrentVersion"},Object(i.b)(a.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/config.md",language:"json",mdxType:"ExternalContentSyntaxHighlighter"})))}f.isMDXComponent=!0},343:function(t,e,n){"use strict";var r=n(352)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},344:function(t,e,n){"use strict";var r=n(350),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},345:function(t,e,n){"use strict";n(353);var r=n(18),o=n(8),i=n(34),a=n(32),c=n(11),l=n(346),s=c("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=c(t),f=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),v=f?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[d](""),!e})):void 0;if(!f||!v||"replace"===t&&!u||"split"===t&&!p){var g=/./[d],h=n(a,d,""[t],(function(t,e,n,r,o){return e.exec===l?f&&!o?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),y=h[0],m=h[1];r(String.prototype,t,y),o(RegExp.prototype,d,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},346:function(t,e,n){"use strict";var r,o,i=n(347),a=RegExp.prototype.exec,c=String.prototype.replace,l=a,s=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),u=void 0!==/()??/.exec("")[1];(s||u)&&(l=function(t){var e,n,r,o,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",i.call(l))),s&&(e=l.lastIndex),r=a.call(l,t),s&&r&&(l.lastIndex=l.global?r.index+r[0].length:e),u&&r&&r.length>1&&c.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=l},347:function(t,e,n){"use strict";var r=n(17);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},349:function(t,e,n){"use strict";var r=n(17),o=n(53),i=n(49),a=n(33),c=n(343),l=n(344),s=Math.max,u=Math.min,p=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g;n(345)("replace",2,(function(t,e,n,v){return[function(r,o){var i=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,i,o):n.call(String(i),r,o)},function(t,e){var o=v(n,t,this,e);if(o.done)return o.value;var p=r(t),d=String(this),f="function"==typeof e;f||(e=String(e));var h=p.global;if(h){var y=p.unicode;p.lastIndex=0}for(var m=[];;){var x=l(p,d);if(null===x)break;if(m.push(x),!h)break;""===String(x[0])&&(p.lastIndex=c(d,i(p.lastIndex),y))}for(var b,w="",S=0,E=0;E<m.length;E++){x=m[E];for(var O=String(x[0]),k=s(u(a(x.index),d.length),0),j=[],C=1;C<x.length;C++)j.push(void 0===(b=x[C])?b:String(b));var I=x.groups;if(f){var M=[O].concat(j,k,d);void 0!==I&&M.push(I);var R=String(e.apply(void 0,M))}else R=g(O,d,k,j,I,e);k>=S&&(w+=d.slice(S,k)+R,S=k+O.length)}return w+d.slice(S)}];function g(t,e,r,i,a,c){var l=r+t.length,s=i.length,u=f;return void 0!==a&&(a=o(a),u=d),n.call(c,u,(function(n,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(l);case"<":c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return n;if(u>s){var d=p(u/10);return 0===d?n:d<=s?void 0===i[d-1]?o.charAt(1):i[d-1]+o.charAt(1):n}c=i[u-1]}return void 0===c?"":c}))}}))},350:function(t,e,n){var r=n(51),o=n(11)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},351:function(t,e,n){"use strict";e.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},352:function(t,e,n){var r=n(33),o=n(32);t.exports=function(t){return function(e,n){var i,a,c=String(o(e)),l=r(n),s=c.length;return l<0||l>=s?t?"":void 0:(i=c.charCodeAt(l))<55296||i>56319||l+1===s||(a=c.charCodeAt(l+1))<56320||a>57343?t?c.charAt(l):i:t?c.slice(l,l+2):a-56320+(i-55296<<10)+65536}}},353:function(t,e,n){"use strict";var r=n(346);n(52)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},354:function(t,e,n){"use strict";var r=n(17),o=n(49),i=n(343),a=n(344);n(345)("match",1,(function(t,e,n,c){return[function(n){var r=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=c(n,t,this);if(e.done)return e.value;var l=r(t),s=String(this);if(!l.global)return a(l,s);var u=l.unicode;l.lastIndex=0;for(var p,d=[],f=0;null!==(p=a(l,s));){var v=String(p[0]);d[f]=v,""===v&&(l.lastIndex=i(s,o(l.lastIndex),u)),f++}return 0===f?null:d}]}))},357:function(t,e,n){"use strict";var r=n(1),o=n(0),i=n.n(o),a=n(355),c=n.n(a),l=n(356),s=n(351);class u extends o.Component{constructor(t){super(t),this.state={data:null,spinner:!0,url:t.url.replace("<VERSION>",t.version)}}componentWillMount(){c.a.get(this.state.url).then(t=>{t.data?this.setState({data:t.data,spinner:!1}):this.setState({data:null,spinner:!1})}).catch(t=>{console.error(t.toString()),this.setState({data:null,spinner:!1})})}render(){return this.state.spinner?i.a.createElement("div",{className:"spinnerContainer"},i.a.createElement("div",{id:"loading"})):this.state.data?i.a.createElement(l.a,Object(r.a)({},l.b,{theme:s.a,code:this.state.data,language:`${this.props.language}`}),({className:t,style:e,tokens:n,getLineProps:r,getTokenProps:o})=>i.a.createElement("pre",{className:t,style:e},n.map((t,e)=>i.a.createElement("div",r({line:t,key:e}),t.map((t,e)=>i.a.createElement("span",o({token:t,key:e}))))))):i.a.createElement("div",null,`Schema model not found for version ${this.props.version}`)}}e.a=u},358:function(t,e,n){"use strict";(function(t){n(349),n(354);var r,o=n(5),i=n(0),a=n.n(i);r="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{location:{}};var c=function(t){function e(e){var n;n=t.call(this,e)||this;var o=null;r&&r.location&&(o=r.location.href.match(/[\d].[\d].x/));var i="master";return o&&(i="v"+o[0].replace("x","0")),n.state={version:i},n}return Object(o.a)(e,t),e.prototype.render=function(){return a.a.createElement("div",null,a.a.cloneElement(this.props.children,{version:this.state.version}))},e}(i.Component);e.a=c}).call(this,n(50))}}]);
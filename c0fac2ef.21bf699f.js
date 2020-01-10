(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"default",(function(){return v}));var r=n(1),a=n(6),o=(n(0),n(338)),i=n(361),c=n(362),l={id:"overview",title:"Audits overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Audit","Overview"],description:"An overview of the OpenHIM Audits"},s=[{value:"ATNA Audit",id:"atna-audit",children:[]},{value:"Schema Model",id:"schema-model",children:[]}],u={id:"version-5.2.x/api/audits/overview",title:"Audits overview",description:"An overview of the OpenHIM Audits",source:"@site/versioned_docs/version-5.2.x/api/audits/overview.md",permalink:"/docs/api/audits/overview",version:"5.2.x",sidebar_label:"Overview",sidebar:"version-5.2.x/api",previous:{title:"API Authentication",permalink:"/docs/api/introduction/authentication"},next:{title:"Create Audit",permalink:"/docs/api/audits/create"}},p={rightToc:s,metadata:u},d="wrapper";function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(d,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Allows for the management of OpenHIM audits."),Object(o.b)("p",null,"The OpenHIM will generate audit events on application start/stop, as well as user authentication. These events can either be sent to the OpenHIM\u2019s own internal audit repository, or to an external repository."),Object(o.b)("h2",{id:"atna-audit"},"ATNA Audit"),Object(o.b)("p",null,"The OpenHIM provides full support as an Audit Repository actor in the IHE ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://wiki.ihe.net/index.php/Audit_Trail_and_Node_Authentication"}),"ATNA")," profile."),Object(o.b)("h2",{id:"schema-model"},"Schema Model"),Object(o.b)(c.a,{mdxType:"GetCurrentVersion"},Object(o.b)(i.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/src/model/audits.js",language:"javascript",mdxType:"ExternalContentSyntaxHighlighter"})))}v.isMDXComponent=!0},343:function(e,t,n){"use strict";var r=n(17),a=n(52),o=n(49),i=n(33),c=n(344),l=n(345),s=Math.max,u=Math.min,p=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;n(346)("replace",2,(function(e,t,n,f){return[function(r,a){var o=e(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,a):n.call(String(o),r,a)},function(e,t){var a=f(n,e,this,t);if(a.done)return a.value;var p=r(e),d=String(this),v="function"==typeof t;v||(t=String(t));var g=p.global;if(g){var b=p.unicode;p.lastIndex=0}for(var y=[];;){var m=l(p,d);if(null===m)break;if(y.push(m),!g)break;""===String(m[0])&&(p.lastIndex=c(d,o(p.lastIndex),b))}for(var x,w="",A=0,O=0;O<y.length;O++){m=y[O];for(var S=String(m[0]),E=s(u(i(m.index),d.length),0),I=[],j=1;j<m.length;j++)I.push(void 0===(x=m[j])?x:String(x));var k=m.groups;if(v){var M=[S].concat(I,E,d);void 0!==k&&M.push(k);var T=String(t.apply(void 0,M))}else T=h(S,d,E,I,k,t);E>=A&&(w+=d.slice(A,E)+T,A=E+S.length)}return w+d.slice(A)}];function h(e,t,r,o,i,c){var l=r+e.length,s=o.length,u=v;return void 0!==i&&(i=a(i),u=d),n.call(c,u,(function(n,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(l);case"<":c=i[a.slice(1,-1)];break;default:var u=+a;if(0===u)return n;if(u>s){var d=p(u/10);return 0===d?n:d<=s?void 0===o[d-1]?a.charAt(1):o[d-1]+a.charAt(1):n}c=o[u-1]}return void 0===c?"":c}))}}))},344:function(e,t,n){"use strict";var r=n(349)(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},345:function(e,t,n){"use strict";var r=n(356),a=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var o=n.call(e,t);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},346:function(e,t,n){"use strict";n(350);var r=n(18),a=n(8),o=n(34),i=n(32),c=n(11),l=n(347),s=c("species"),u=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var d=c(e),v=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),f=v?!o((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[s]=function(){return n}),n[d](""),!t})):void 0;if(!v||!f||"replace"===e&&!u||"split"===e&&!p){var h=/./[d],g=n(i,d,""[e],(function(e,t,n,r,a){return t.exec===l?v&&!a?{done:!0,value:h.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),b=g[0],y=g[1];r(String.prototype,e,b),a(RegExp.prototype,d,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}}},347:function(e,t,n){"use strict";var r,a,o=n(353),i=RegExp.prototype.exec,c=String.prototype.replace,l=i,s=(r=/a/,a=/b*/g,i.call(r,"a"),i.call(a,"a"),0!==r.lastIndex||0!==a.lastIndex),u=void 0!==/()??/.exec("")[1];(s||u)&&(l=function(e){var t,n,r,a,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",o.call(l))),s&&(t=l.lastIndex),r=i.call(l,e),s&&r&&(l.lastIndex=l.global?r.index+r[0].length:t),u&&r&&r.length>1&&c.call(r[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)})),r}),e.exports=l},349:function(e,t,n){var r=n(33),a=n(32);e.exports=function(e){return function(t,n){var o,i,c=String(a(t)),l=r(n),s=c.length;return l<0||l>=s?e?"":void 0:(o=c.charCodeAt(l))<55296||o>56319||l+1===s||(i=c.charCodeAt(l+1))<56320||i>57343?e?c.charAt(l):o:e?c.slice(l,l+2):i-56320+(o-55296<<10)+65536}}},350:function(e,t,n){"use strict";var r=n(347);n(51)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},351:function(e,t,n){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},352:function(e,t,n){"use strict";var r=n(17),a=n(49),o=n(344),i=n(345);n(346)("match",1,(function(e,t,n,c){return[function(n){var r=e(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=c(n,e,this);if(t.done)return t.value;var l=r(e),s=String(this);if(!l.global)return i(l,s);var u=l.unicode;l.lastIndex=0;for(var p,d=[],v=0;null!==(p=i(l,s));){var f=String(p[0]);d[v]=f,""===f&&(l.lastIndex=o(s,a(l.lastIndex),u)),v++}return 0===v?null:d}]}))},361:function(e,t,n){"use strict";var r=n(1),a=(n(354),n(355),n(343),n(5)),o=n(0),i=n.n(o),c=n(357),l=n.n(c),s=n(358),u=n(351),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={data:null,spinner:!0,url:t.url.replace("<VERSION>",t.version)},n}Object(a.a)(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=this;l.a.get(this.state.url).then((function(t){t.data?e.setState({data:t.data,spinner:!1}):e.setState({data:null,spinner:!1})})).catch((function(t){console.error(t.toString()),e.setState({data:null,spinner:!1})}))},n.render=function(){return this.state.spinner?i.a.createElement("div",{className:"spinnerContainer"},i.a.createElement("div",{id:"loading"})):this.state.data?i.a.createElement(s.a,Object(r.a)({},s.b,{theme:u.a,code:this.state.data,language:""+this.props.language}),(function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,o=e.getTokenProps;return i.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return i.a.createElement("div",a({line:e,key:t}),e.map((function(e,t){return i.a.createElement("span",o({token:e,key:t}))})))})))})):i.a.createElement("div",null,"Schema model not found for version "+this.props.version)},t}(o.Component);t.a=p},362:function(e,t,n){"use strict";(function(e){n(343),n(352);var r,a=n(5),o=n(0),i=n.n(o);r="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};var c=function(e){function t(t){var n;n=e.call(this,t)||this;var a=null;r&&r.location&&(a=r.location.href.match(/[\d].[\d].x/));var o="master";return a&&(o="v"+a[0].replace("x","0")),n.state={version:o},n}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.cloneElement(this.props.children,{version:this.state.version}))},t}(o.Component);t.a=c}).call(this,n(50))}}]);
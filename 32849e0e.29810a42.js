(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(6),a=(n(0),n(338)),l=n(359),i=n(360),c={id:"run-openhim-on-startup",title:"Run the OpenHIM on startup",sidebar_label:"Run the OpenHIM on startup",keywords:["OpenHIM","Startup","systemd"],description:"Running OpenHIM on startup"},s=[{value:"systemd",id:"systemd",children:[]}],u={id:"how-to/run-openhim-on-startup",title:"Run the OpenHIM on startup",description:"Running OpenHIM on startup",source:"@site/docs/how-to/how-to-run-on-startup.md",permalink:"/docs/next/how-to/run-openhim-on-startup",version:"next",sidebar_label:"Run the OpenHIM on startup",sidebar:"docs",previous:{title:"Setup SSL",permalink:"/docs/next/how-to/setup-ssl"},next:{title:"Export/import Configuration",permalink:"/docs/next/how-to/export-import-configuration"}},p={rightToc:s,metadata:u},b="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(b,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This how to guide assumes the following"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You are working on an Ubuntu server"),Object(a.b)("li",{parentName:"ul"},"The OpenHIM Core is already installed using ",Object(a.b)("inlineCode",{parentName:"li"},"npm")),Object(a.b)("li",{parentName:"ul"},"NodeJS is installed")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Make sure the OpenHIM Core is not currently running on your machine before proceeding.")),Object(a.b)("h2",{id:"systemd"},"systemd"),Object(a.b)("p",null,"To help you get the OpenHIM server running on boot we supply a script for ",Object(a.b)("inlineCode",{parentName:"p"},"systemd"),"."),Object(a.b)(i.a,{mdxType:"GetCurrentVersion"},Object(a.b)(l.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/resources/openhim-core.service",language:"service",mdxType:"ExternalContentSyntaxHighlighter"})),Object(a.b)("p",null,"To setup the service create the following file with your editor of choice (vim in this example) and put in the above content:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo vim /lib/systemd/system/openhim-core.service\n")),Object(a.b)("p",null,"For the ",Object(a.b)("inlineCode",{parentName:"p"},"ExecStart")," field fill in the correct paths to NodeJS and your OpenHIM Core module. To find these directory paths try the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"which node\n")),Object(a.b)("p",null,"This will show you where NodeJS is installed. The OpenHIM npm module will be installed nearby (usually within ",Object(a.b)("inlineCode",{parentName:"p"},"../../lib/node_modules/openhim-core")," in relation to node)."),Object(a.b)("p",null,"Your ",Object(a.b)("inlineCode",{parentName:"p"},"ExecStart")," field should look something like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-service"}),"ExecStart=/usr/local/bin/node /usr/local/lib/node_modules/openhim-core/lib/server.js\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you have installed NodeJS using ",Object(a.b)("inlineCode",{parentName:"p"},"nvm")," the directory base will be ",Object(a.b)("inlineCode",{parentName:"p"},"/home/<user>/.nvm/versions/node/<node-version>/")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"/usr/local/"))),Object(a.b)("p",null,"Once your script is complete reload systemd with the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo systemctl daemon-reload\n")),Object(a.b)("p",null,"Then, start the service:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo systemctl start openhim-core\n")),Object(a.b)("p",null,"Next check the service status:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo systemctl status openhim-core\n")),Object(a.b)("p",null,"You can confirm that the OpenHIM is accessible by navigating to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://localhost:8080/heartbeat"}),"https://localhost:8080/heartbeat")," on a browser. The browser will give you a security warning as SSL has not been setup yet. Accept the risk and the browser should return the OpenHIM uptime."),Object(a.b)("p",null,"To diagnose any problems you can view the OpenHIM logs from the service with the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"journalctl -u openhim-core.service -b\n")),Object(a.b)("p",null,"To configure the OpenHIM to run on server startup type the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo systemctl enable openhim-core\n")))}d.isMDXComponent=!0},343:function(e,t,n){"use strict";var r=n(17),o=n(52),a=n(49),l=n(33),i=n(344),c=n(345),s=Math.max,u=Math.min,p=Math.floor,b=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;n(346)("replace",2,(function(e,t,n,h){return[function(r,o){var a=e(this),l=null==r?void 0:r[t];return void 0!==l?l.call(r,a,o):n.call(String(a),r,o)},function(e,t){var o=h(n,e,this,t);if(o.done)return o.value;var p=r(e),b=String(this),d="function"==typeof t;d||(t=String(t));var f=p.global;if(f){var g=p.unicode;p.lastIndex=0}for(var v=[];;){var y=c(p,b);if(null===y)break;if(v.push(y),!f)break;""===String(y[0])&&(p.lastIndex=i(b,a(p.lastIndex),g))}for(var O,j="",x=0,w=0;w<v.length;w++){y=v[w];for(var N=String(y[0]),S=s(u(l(y.index),b.length),0),I=[],E=1;E<y.length;E++)I.push(void 0===(O=y[E])?O:String(O));var k=y.groups;if(d){var M=[N].concat(I,S,b);void 0!==k&&M.push(k);var C=String(t.apply(void 0,M))}else C=m(N,b,S,I,k,t);S>=x&&(j+=b.slice(x,S)+C,x=S+N.length)}return j+b.slice(x)}];function m(e,t,r,a,l,i){var c=r+e.length,s=a.length,u=d;return void 0!==l&&(l=o(l),u=b),n.call(i,u,(function(n,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(c);case"<":i=l[o.slice(1,-1)];break;default:var u=+o;if(0===u)return n;if(u>s){var b=p(u/10);return 0===b?n:b<=s?void 0===a[b-1]?o.charAt(1):a[b-1]+o.charAt(1):n}i=a[u-1]}return void 0===i?"":i}))}}))},344:function(e,t,n){"use strict";var r=n(349)(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},345:function(e,t,n){"use strict";var r=n(356),o=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var a=n.call(e,t);if("object"!=typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},346:function(e,t,n){"use strict";n(350);var r=n(18),o=n(8),a=n(34),l=n(32),i=n(11),c=n(347),s=i("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var b=i(e),d=!a((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),h=d?!a((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[s]=function(){return n}),n[b](""),!t})):void 0;if(!d||!h||"replace"===e&&!u||"split"===e&&!p){var m=/./[b],f=n(l,b,""[e],(function(e,t,n,r,o){return t.exec===c?d&&!o?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),g=f[0],v=f[1];r(String.prototype,e,g),o(RegExp.prototype,b,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},347:function(e,t,n){"use strict";var r,o,a=n(353),l=RegExp.prototype.exec,i=String.prototype.replace,c=l,s=(r=/a/,o=/b*/g,l.call(r,"a"),l.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),u=void 0!==/()??/.exec("")[1];(s||u)&&(c=function(e){var t,n,r,o,c=this;return u&&(n=new RegExp("^"+c.source+"$(?!\\s)",a.call(c))),s&&(t=c.lastIndex),r=l.call(c,e),s&&r&&(c.lastIndex=c.global?r.index+r[0].length:t),u&&r&&r.length>1&&i.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),e.exports=c},349:function(e,t,n){var r=n(33),o=n(32);e.exports=function(e){return function(t,n){var a,l,i=String(o(t)),c=r(n),s=i.length;return c<0||c>=s?e?"":void 0:(a=i.charCodeAt(c))<55296||a>56319||c+1===s||(l=i.charCodeAt(c+1))<56320||l>57343?e?i.charAt(c):a:e?i.slice(c,c+2):l-56320+(a-55296<<10)+65536}}},350:function(e,t,n){"use strict";var r=n(347);n(51)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},351:function(e,t,n){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},352:function(e,t,n){"use strict";var r=n(17),o=n(49),a=n(344),l=n(345);n(346)("match",1,(function(e,t,n,i){return[function(n){var r=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=i(n,e,this);if(t.done)return t.value;var c=r(e),s=String(this);if(!c.global)return l(c,s);var u=c.unicode;c.lastIndex=0;for(var p,b=[],d=0;null!==(p=l(c,s));){var h=String(p[0]);b[d]=h,""===h&&(c.lastIndex=a(s,o(c.lastIndex),u)),d++}return 0===d?null:b}]}))},359:function(e,t,n){"use strict";var r=n(1),o=(n(354),n(355),n(343),n(5)),a=n(0),l=n.n(a),i=n(357),c=n.n(i),s=n(358),u=n(351),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={data:null,spinner:!0,url:t.url.replace("<VERSION>",t.version)},n}Object(o.a)(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=this;c.a.get(this.state.url).then((function(t){t.data?e.setState({data:t.data,spinner:!1}):e.setState({data:null,spinner:!1})})).catch((function(t){console.error(t.toString()),e.setState({data:null,spinner:!1})}))},n.render=function(){return this.state.spinner?l.a.createElement("div",{className:"spinnerContainer"},l.a.createElement("div",{id:"loading"})):this.state.data?l.a.createElement(s.a,Object(r.a)({},s.b,{theme:u.a,code:this.state.data,language:""+this.props.language}),(function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,a=e.getTokenProps;return l.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return l.a.createElement("div",o({line:e,key:t}),e.map((function(e,t){return l.a.createElement("span",a({token:e,key:t}))})))})))})):l.a.createElement("div",null,"Schema model not found for version "+this.props.version)},t}(a.Component);t.a=p},360:function(e,t,n){"use strict";(function(e){n(343),n(352);var r,o=n(5),a=n(0),l=n.n(a);r="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};var i=function(e){function t(t){var n;n=e.call(this,t)||this;var o=null;r&&r.location&&(o=r.location.href.match(/[\d].[\d].x/));var a="master";return o&&(a="v"+o[0].replace("x","0")),n.state={version:a},n}return Object(o.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",null,l.a.cloneElement(this.props.children,{version:this.state.version}))},t}(a.Component);t.a=i}).call(this,n(50))}}]);
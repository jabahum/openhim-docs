/*! For license information please see 368c75cd.3fdd6b90.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(1),a=(n(0),n(382)),o=n(384),i=n(385);const l={id:"read",title:"Read Server Uptime",sidebar_label:"Read",keywords:["OpenHIM","API","Server","Uptime","Heartbeat"],description:"Read the OpenHIM server's uptime in seconds"},c={id:"version-5.2.x/api/server-uptime/read",title:"Read Server Uptime",description:"Read the OpenHIM server's uptime in seconds",source:"@site/versioned_docs/version-5.2.x/api/server-uptime/read.md",permalink:"/docs/api/server-uptime/read",version:"5.2.x",sidebar_label:"Read",sidebar:"version-5.2.x/api",previous:{title:"Server Uptime overview",permalink:"/docs/api/server-uptime/overview"},next:{title:"Tasks overview",permalink:"/docs/api/tasks/overview"}},s=[{value:"Example",id:"example",children:[]}],u={rightToc:s},p="wrapper";function d({components:e,...t}){return Object(a.b)(p,Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To read the OpenHIM uptime you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/heartbeat\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(a.b)("p",null,"Copy the below code into a file titled openhim-api.js"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/heartbeat',\n    rejectUnauthorized: false\n  }\n  \n  const options = { method: 'GET',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(a.b)("p",null,"Execute the below command in your terminal to run the nodejs script"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(a.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(a.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-curl"}),"  curl -k https://localhost:8080/heartbeat\n")))),Object(a.b)("p",null,"The response status code will be ",Object(a.b)("inlineCode",{parentName:"p"},"200")," if successful."))}d.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),p=r,d=u[l+"."+p]||u[p]||s[p]||o;return n?a.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(d,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},383:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},384:function(e,t,n){"use strict";n(24),n(19),n(18);var r=n(0),a=n.n(r),o=n(383),i=n.n(o),l=n(128),c=n.n(l),s={left:37,right:39};t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,l=e.values,u=Object(r.useState)(o),p=u[0],d=u[1],b=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===t,className:i()("tab-item",c.a.tabItem,{"tab-item--active":p===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case s.right:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s.left:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(b,e.target,e)},onFocus:function(){return d(t)},onClick:function(){return d(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===p}))[0]))}},385:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);
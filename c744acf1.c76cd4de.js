/*! For license information please see c744acf1.c76cd4de.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{335:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(9),i=(n(0),n(382)),o=n(384),c=n(385),l={id:"delete",title:"Delete visualizer",sidebar_label:"Delete",keywords:["OpenHIM","API","Visualizer","Delete"],description:"Delete an OpenHIM Visualizer via the API"},s={id:"version-5.2.x/api/visualizer/delete",title:"Delete visualizer",description:"Delete an OpenHIM Visualizer via the API",source:"@site/versioned_docs/version-5.2.x/api/visualizer/delete.md",permalink:"/docs/api/visualizer/delete",version:"5.2.x",sidebar_label:"Delete",sidebar:"version-5.2.x/api",previous:{title:"Update an existing visualizer",permalink:"/docs/api/visualizer/update"}},u=[{value:"Delete a specific visualizer record",id:"delete-a-specific-visualizer-record",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To delete a visualizer record you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(i.b)("h2",{id:"delete-a-specific-visualizer-record"},"Delete a specific visualizer record"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-curl"}),"Method: DELETE\nEndpoint: {openhim_url}:8080/visualizers/:visualizerId\n")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(i.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(i.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"Replace the ",Object(i.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/visualizers/visualizerId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { method: 'DELETE',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n"))),Object(i.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(i.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-curl"}),"./openhim-api.sh root@openhim.org openhim-password -v -X DELETE https://localhost:8080/visualizers/visualizerId\n")))),Object(i.b)("p",null,"The response status code will be ",Object(i.b)("inlineCode",{parentName:"p"},"200")," if successful."))}d.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(h,c({ref:t},s,{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},383:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},384:function(e,t,n){"use strict";n(24),n(19),n(18);var r=n(0),a=n.n(r),i=n(383),o=n.n(i),c=n(128),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,c=e.values,p=Object(r.useState)(i),d=p[0],b=p[1],h=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===t,className:o()("tab-item",l.a.tabItem,{"tab-item--active":d===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return b(t)},onClick:function(){return b(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===d}))[0]))}},385:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);
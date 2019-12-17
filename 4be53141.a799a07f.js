/*! For license information please see 4be53141.a799a07f.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(6),r=(n(0),n(338)),o=n(340),c=n(341),l={id:"read",title:"Read Client/s",sidebar_label:"Read",keywords:["OpenHIM","API","Client","Read"],description:"Read OpenHIM Clients via the API"},s=[{value:"Read all clients",id:"read-all-clients",children:[]},{value:"Read a specific client",id:"read-a-specific-client",children:[]},{value:"Read a specific client by domain",id:"read-a-specific-client-by-domain",children:[]},{value:"Example",id:"example",children:[]}],p={id:"api/clients/read",title:"Read Client/s",description:"Read OpenHIM Clients via the API",source:"@site/docs/api/clients/read.md",permalink:"/docs/next/api/clients/read",version:"next",sidebar_label:"Read",sidebar:"api",previous:{title:"Create Client",permalink:"/docs/next/api/clients/create"},next:{title:"Update an existing client",permalink:"/docs/next/api/clients/update"}},d={rightToc:s,metadata:p},u="wrapper";function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(u,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To read existing client records you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(r.b)("h2",{id:"read-all-clients"},"Read all clients"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/clients\n")),Object(r.b)("h2",{id:"read-a-specific-client"},"Read a specific client"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/clients/:clientId\n")),Object(r.b)("h2",{id:"read-a-specific-client-by-domain"},"Read a specific client by domain"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/clients/domain/:clientDomain\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},":clientDomain")," is the ",Object(r.b)("inlineCode",{parentName:"p"},"domain")," property of the client to fetch."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(r.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/clients/clientId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = { method: 'GET',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n"))),Object(r.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/clients/clientId\n")))),Object(r.b)("p",null,"The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful."))}b.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a),r=i.a.createContext({}),o=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=o(n),d=a,u=p[c+"."+d]||p[d]||s[d]||r;return n?i.a.createElement(u,Object.assign({},{ref:t},l,{components:n})):i.a.createElement(u,Object.assign({},{ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:a,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},339:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=i.apply(null,a);o&&e.push(o)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},340:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(339),o=n.n(r),c=n(85),l=n.n(c);const s={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:r,values:c}=e,[p,d]=Object(a.useState)(r),u=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:o()("tab-item",l.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},341:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);
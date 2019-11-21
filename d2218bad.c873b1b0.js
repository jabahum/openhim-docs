/*! For license information please see d2218bad.c873b1b0.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{264:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));t(0);var a=t(302),r=t(308),o=t(309);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}const s={id:"create",title:"Create a new Visualizer",sidebar_label:"Create",keywords:["OpenHIM","API","Visualizer","Create"],description:"Create an OpenHIM Visualizer via the API"},c=[{value:"Create visualizer",id:"create-visualizer",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c},p="wrapper";function u({components:e,...n}){return Object(a.b)(p,i({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"create-visualizer"},"Create visualizer"),Object(a.b)("p",null,"To create a new visualizer record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the visualizer record."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: /visualizers\nPayload: JSON object of the visualizer record\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(a.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"},{label:"JSON Data",value:"json"}],mdxType:"Tabs"},Object(a.b)(o.a,{value:"nodejs",mdxType:"TabItem"},Object(a.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(a.b)("a",i({parentName:"p"},{href:"/openhim-docs/docs/api/introduction/authentication"}),"authentication section"),". "),Object(a.b)("p",null,"Replace the ",Object(a.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(a.b)("inlineCode",{parentName:"p"},"jsonData")," payload to submit"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/visualizers',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const jsonData = 'jsonData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { \n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: jsonData,\n    json: true\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(a.b)("p",null,"Execute the below command in your terminal to run the nodejs script"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(a.b)(o.a,{value:"bash",mdxType:"TabItem"},Object(a.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(a.b)("a",i({parentName:"p"},{href:"/openhim-docs/docs/api/introduction/authentication"}),"authentication section"),". "),Object(a.b)("p",null,"Execute the below command in your terminal with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(a.b)("inlineCode",{parentName:"p"},"jsondData.json")," file exists with the visualizer object."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/visualizers -d @jsonData.json -H "Content-Type:application/json"\n'))),Object(a.b)(o.a,{value:"json",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-json"}),'{\n  "name": "Visualizer1",\n  "time": {\n    "updatePeriod": 200\n  },\n  "size": {\n    "padding": 20,\n    "height": 400,\n    "width": 1000,\n    "responsive": true\n  },\n  "color": {\n    "text": "#4a4254",\n    "error": "#a84b5c",\n    "active": "#10e057",\n    "inactive": "#c8cacf"\n  },\n  "mediators": [\n    {\n      "mediator": "urn:mediator:fhir-proxy",\n      "name": "OpenHIM Mediator FHIR Proxy",\n      "display": "OpenHIM Mediator FHIR Proxy",\n      "_id": "57a4a09078ae562b26d5b2b2"\n    },\n    {\n      "mediator": "urn:mediator:shell-script",\n      "name": "OpenHIM Shell Script Mediator",\n      "display": "OpenHIM Shell Script Mediator",\n      "_id": "57a4a09078ae562b26d5b2b1"\n    }\n  ],\n  "channels": [\n    {\n      "eventType": "channel",\n      "eventName": "FHIR Proxy",\n      "display": "FHIR Proxy",\n      "_id": "57a4a09078ae562b26d5b2b4"\n    },\n    {\n      "eventType": "channel",\n      "eventName": "Echo",\n      "display": "Echo",\n      "_id": "57a4a09078ae562b26d5b2b3"\n    }\n  ],\n  "components": [\n    {\n      "eventType": "primary",\n      "eventName": "OpenHIM Mediator FHIR Proxy Route",\n      "display": "FHIR Server",\n      "_id": "57a4a09078ae562b26d5b2b6"\n    },\n    {\n      "eventType": "primary",\n      "eventName": "echo",\n      "display": "Echo",\n      "_id": "57a4a09078ae562b26d5b2b5"\n    }\n  ]\n}\n')))),Object(a.b)("p",null,"The response status code will be ",Object(a.b)("inlineCode",{parentName:"p"},"201")," if successful."))}u.isMDXComponent=!0},302:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a),o=r.a.createContext({}),i=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},s=function(e){var n=i(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(t),u=a,d=p[s+"."+u]||p[u]||l[u]||o;return t?r.a.createElement(d,Object.assign({},{ref:n},c,{components:t})):r.a.createElement(d,Object.assign({},{ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},305:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},308:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(305),i=t.n(o);n.a=function(e){const{block:n,children:t,defaultValue:o,values:s}=e,[c,l]=Object(a.useState)(o);return r.a.createElement("div",null,r.a.createElement("ul",{className:i()("tabs",{"tabs--block":n})},s.map(({value:e,label:n})=>r.a.createElement("li",{className:i()("tab-item",{"tab-item--active":c===e}),key:e,onClick:()=>l(e)},n))),r.a.createElement("div",{className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===c)[0]))}},309:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);
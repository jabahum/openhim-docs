/*! For license information please see 09ce1a73.ea021820.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"metadata",(function(){return p})),t.d(n,"default",(function(){return d}));var a=t(1),r=t(6),o=(t(0),t(338)),l=t(340),c=t(341),i={id:"create",title:"Create Channel",sidebar_label:"Create",keywords:["OpenHIM","API","Channel","Create"],description:"Create an OpenHIM Channel via the API"},s=[{value:"Create channel",id:"create-channel",children:[]},{value:"Example",id:"example",children:[]}],p={id:"api/channels/create",title:"Create Channel",description:"Create an OpenHIM Channel via the API",source:"@site/docs/api/channels/create.md",permalink:"/docs/next/api/channels/create",version:"next",sidebar_label:"Create",sidebar:"api",previous:{title:"Channels overview",permalink:"/docs/next/api/channels/overview"},next:{title:"Read Channel/s",permalink:"/docs/next/api/channels/read"}},u={rightToc:s,metadata:p},h="wrapper";function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(h,Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-channel"},"Create channel"),Object(o.b)("p",null,"To create a new channel record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the channel record."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/channels\nPayload: JSON object of the channel record\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)(l.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(o.b)(l.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/channels',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the channel object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/channels -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"  The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"201")," if successful.")),Object(o.b)(c.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "http",\n  "authType": "public",\n  "status": "enabled",\n  "routes": [\n    {\n      "name": "FHIR Server",\n      "secured": false,\n      "host": "localhost",\n      "port": "3447",\n      "path": "",\n      "pathTransform": "",\n      "primary": true,\n      "username": "",\n      "password": "",\n      "type": "http",\n      "status": "enabled",\n      "forwardAuthHeader": false\n    }\n  ],\n  "requestBody": true,\n  "responseBody": true,\n  "rewriteUrlsConfig": [],\n  "rewriteUrls": false,\n  "addAutoRewriteRules": true,\n  "name": "FHIR Server",\n  "urlPattern": "^/fhir/.*$",\n  "methods": [\n    "GET",\n    "POST",\n    "DELETE",\n    "PUT",\n    "OPTIONS",\n    "HEAD",\n    "TRACE",\n    "CONNECT",\n    "PATCH"\n  ],\n  "matchContentRegex": null,\n  "matchContentXpath": null,\n  "matchContentValue": null,\n  "matchContentJson": null,\n  "pollingSchedule": null,\n  "tcpHost": null,\n  "tcpPort": null\n}\n')))))}d.isMDXComponent=!0},338:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a),o=r.a.createContext({}),l=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=l(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var i="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=l(t),u=a,h=p[c+"."+u]||p[u]||s[u]||o;return t?r.a.createElement(h,Object.assign({},{ref:n},i,{components:t})):r.a.createElement(h,Object.assign({},{ref:n},i))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[i]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=t[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},339:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var c in a)t.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},340:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(339),l=t.n(o),c=t(85),i=t.n(c);const s={left:37,right:39};n.a=function(e){const{block:n,children:t,defaultValue:o,values:c}=e,[p,u]=Object(a.useState)(o),h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":n})},c.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:l()("tab-item",i.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,n,t)=>{switch(t.keyCode){case s.right:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s.left:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(h,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},n))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===p)[0]))}},341:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);
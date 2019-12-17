/*! For license information please see bdff3492.038e8ca1.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{282:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(6),o=(a(0),a(338)),i=a(340),s=a(341),c={id:"create",title:"Create Task",sidebar_label:"Create",keywords:["OpenHIM","API","Task","Create"],description:"Create an OpenHIM Task via the API"},l=[{value:"Create task",id:"create-task",children:[]},{value:"Example",id:"example",children:[]}],p={id:"version-5.2.x/api/tasks/create",title:"Create Task",description:"Create an OpenHIM Task via the API",source:"@site/versioned_docs/version-5.2.x/api/tasks/create.md",permalink:"/docs/api/tasks/create",version:"5.2.x",sidebar_label:"Create",sidebar:"version-5.2.x/api",previous:{title:"Tasks overview",permalink:"/docs/api/tasks/overview"},next:{title:"Read Task/s",permalink:"/docs/api/tasks/read"}},u={rightToc:l,metadata:p},d="wrapper";function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-task"},"Create task"),Object(o.b)("p",null,"To create a new task record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object for the task record."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/tasks\nPayload: JSON object of the task record\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)(i.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(o.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/tasks',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(s.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the task object."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/tasks -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"  The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"201")," if successful.")),Object(o.b)(s.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("p",null,"  The ",Object(o.b)("inlineCode",{parentName:"p"},"tids")," field contains an array of transaction ids, and these are the transactions to be rerun. The ",Object(o.b)("inlineCode",{parentName:"p"},"batchSize")," field indicates the number of transactions to rerun concurrently. The ",Object(o.b)("inlineCode",{parentName:"p"},"paused")," field is used to prevent the task from being rerun soon after its been added."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "tids": [\n    "5bb777777bbb66cc5d4444ee",\n    "5ceec0bb3ca344f9a30df633",\n    "5af732d1cbf94ba88b8f0bc0"\n  ],\n  "batchSize": 2,   //optional\n  "paused": true    //optional\n}\n')))))}b.isMDXComponent=!0},338:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=i(a),u=n,d=p[s+"."+u]||p[u]||l[u]||o;return a?r.a.createElement(d,Object.assign({},{ref:t},c,{components:a})):r.a.createElement(d,Object.assign({},{ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},339:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},340:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(339),i=a.n(o),s=a(85),c=a.n(s);const l={left:37,right:39};t.a=function(e){const{block:t,children:a,defaultValue:o,values:s}=e,[p,u]=Object(n.useState)(o),d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:i()("tab-item",c.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case l.right:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case l.left:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(d,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===p)[0]))}},341:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);
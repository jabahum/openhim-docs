/*! For license information please see 7fa9a6c2.dc2d5e6d.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{232:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(1),r=(a(0),a(338)),o=a(340),s=a(341);const i={id:"update",title:"Update an existing task",sidebar_label:"Update",keywords:["OpenHIM","API","Task","Update"],description:"Update an OpenHIM Task via the API"},c=[{value:"Update task",id:"update-task",children:[]},{value:"Example",id:"example",children:[]}],l={id:"api/tasks/update",title:"Update an existing task",description:"Update an OpenHIM Task via the API",source:"@site/docs/api/tasks/update.md",permalink:"/docs/next/api/tasks/update",version:"next",sidebar_label:"Update",sidebar:"api",previous:{title:"Read Task/s",permalink:"/docs/next/api/tasks/read"},next:{title:"Delete task",permalink:"/docs/next/api/tasks/delete"}},p={rightToc:c,metadata:l},d="wrapper";function u({components:e,...t}){return Object(r.b)(d,Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"update-task"},"Update task"),Object(r.b)("p",null,"To update an existing task record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the task record."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/task/:taskId\nPayload: JSON object of the task record\n")),Object(r.b)("p",null,"Tasks can be paused, resumed or cancelled by sending through an update with status equal to ",Object(r.b)("inlineCode",{parentName:"p"},"Paused"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Queued")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Cancelled")," respectively."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(o.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"lang",mdxType:"TabItem"},Object(r.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(r.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/tasks/taskId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(r.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(r.b)(s.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the updated task object."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/tasks/taskId -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(r.b)("p",null,"  The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(r.b)(s.a,{value:"sample",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "tids": [\n    "5bb777777bbb66cc5d4444ee",\n    "5ceec0bb3ca344f9a30df633",\n    "5kl732d1cbf94ba88b8f0bc6",\n    "5af744d1cbf94ba88b8f0bc8",\n    "5be732d1cbf94ba88b8f0bc7"\n  ],\n  "batchSize": 2,\n  "paused": true\n}\n')))))}u.isMDXComponent=!0},338:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n),o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p[i+"."+d]||p[d]||l[d]||o;return a?r.a.createElement(u,Object.assign({},{ref:t},c,{components:a})):r.a.createElement(u,Object.assign({},{ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},339:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},340:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(339),s=a.n(o),i=a(85),c=a.n(i);const l={left:37,right:39};t.a=function(e){const{block:t,children:a,defaultValue:o,values:i}=e,[p,d]=Object(n.useState)(o),u=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:s()("tab-item",c.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case l.right:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case l.left:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===p)[0]))}},341:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);
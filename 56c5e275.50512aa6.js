/*! For license information please see 56c5e275.50512aa6.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return h}));var a=n(1),o=(n(0),n(338)),r=n(340),i=n(341);const s={id:"create",title:"Create Mediator",sidebar_label:"Create",keywords:["OpenHIM","API","Mediator","Create"],description:"Add an OpenHIM mediator via the API"},l=[{value:"Add Mediator",id:"add-mediator",children:[]},{value:"Adding Mediator Example",id:"adding-mediator-example",children:[]},{value:"Send heartbeat to the OpenHIM",id:"send-heartbeat-to-the-openhim",children:[]},{value:"Sending Heartbeat Example",id:"sending-heartbeat-example",children:[]},{value:"Install mediator channels",id:"install-mediator-channels",children:[]},{value:"Install Channels Example",id:"install-channels-example",children:[]}],c={id:"version-5.2.x/api/mediators/create",title:"Create Mediator",description:"Add an OpenHIM mediator via the API",source:"@site/versioned_docs/version-5.2.x/api/mediators/create.md",permalink:"/docs/api/mediators/create",version:"5.2.x",sidebar_label:"Create",sidebar:"version-5.2.x/api",previous:{title:"Mediators overview",permalink:"/docs/api/mediators/overview"},next:{title:"Read Mediator/s",permalink:"/docs/api/mediators/read"}},p={rightToc:l,metadata:c},d="wrapper";function h({components:e,...t}){return Object(o.b)(d,Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"add-mediator"},"Add Mediator"),Object(o.b)("p",null,"To add a mediator, you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object of the mediator."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/mediators\nPayload: JSON object of the mediator\n")),Object(o.b)("h2",{id:"adding-mediator-example"},"Adding Mediator Example"),Object(o.b)(r.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(o.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/mediators',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the mediator object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/mediators -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"201")," if successful.")),Object(o.b)(i.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "urn": "urn:uuid:EEA84E13-1C92-467C-B0BD-7C480462D1ED",\n  "version": "1.0.0",\n  "name": "Test Mediator",\n  "description": "A mediator for testing",\n  "endpoints": [\n    {\n      "name": "Save Encounter",\n      "host": "localhost",\n      "port": "8005",\n      "type": "http"\n    }\n  ],\n  "defaultChannelConfig": [\n    {\n      "name": "Save Encounter 1",\n      "urlPattern": "/encounters",\n      "type": "http",\n      "allow": [],\n      "routes": [\n        {\n          "name": "Save Encounter 1",\n          "host": "localhost",\n          "port": "8005",\n          "type": "http"\n        }\n      ]\n    },\n    {\n      "name": "Save Encounter 2",\n      "urlPattern": "/encounters2",\n      "type": "http",\n      "allow": [],\n      "routes": [\n        {\n          "name": "Save Encounter 2",\n          "host": "localhost",\n          "port": "8005",\n          "type": "http"\n        }\n      ]\n    }\n  ],\n  "configDefs": [\n    {\n      "param": "param1",\n      "type": "string"\n    },\n    {\n      "param": "param2",\n      "type": "string"\n    }\n  ]\n}\n')))),Object(o.b)("h2",{id:"send-heartbeat-to-the-openhim"},"Send heartbeat to the OpenHIM"),Object(o.b)("p",null,"To send a heartbeat to the OpenHIM, you need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object containing the mediator's uptime and config (an optional boolean which is used to determine whether the OpenHIM should return the latest config)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/mediators/:urn/heartbeat\nPayload: JSON object containing mediator's uptime and config\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"urn")," parameter is the unique resource name of the mediator. The heartbeat endpoint can only be accessed by an admin user."),Object(o.b)("p",null,"The response will always have a ",Object(o.b)("inlineCode",{parentName:"p"},"200")," status if successful or a ",Object(o.b)("inlineCode",{parentName:"p"},"404")," if the mediator specified by the urn cannot be found. The response body will contain the latest mediator config that has been set on the OpenHIM-core server only if the config has changed since the last time a heartbeat was received from this mediator. Otherwise, the response body is left empty."),Object(o.b)("h2",{id:"sending-heartbeat-example"},"Sending Heartbeat Example"),Object(o.b)(r.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(o.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/mediators/:urn/heartbeat',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the mediator's uptime and config. Make sure to pass the correct ",Object(o.b)("inlineCode",{parentName:"p"},"urn"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/mediators/:urn/heartbeat -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(o.b)(i.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "uptime": 50.25, // in seconds\n  "config": true // (Optional) a flag to force the OpenHIM-core to send back the latest config\n}\n')))),Object(o.b)("h2",{id:"install-mediator-channels"},"Install mediator channels"),Object(o.b)("p",null,"To install channels that are listed in the mediator's config ( ",Object(o.b)("inlineCode",{parentName:"p"},"defaultChannelConfig")," property ), you need to make a TLS request to the below method and endpoint and supply an array with the names of the channels to install."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/mediators/:urn/channels\nPayload: An JSON array containing the channel names\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," If the JSON array  is not supplied all the channels in the ",Object(o.b)("inlineCode",{parentName:"p"},"defaultChannelConfig")," will be installed."),Object(o.b)("h2",{id:"install-channels-example"},"Install Channels Example"),Object(o.b)(r.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(o.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/mediators/:urn/channels',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(i.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the JSON array containing the channel names."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/mediators/:urn/channels -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"201")," if the channels were successfully created and ",Object(o.b)("inlineCode",{parentName:"p"},"400")," if you provide a channel name that doesn't exist.")),Object(o.b)(i.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("p",null,"Ensure that the channels name supplied in the JSON array match the names of the channels supplied in the ",Object(o.b)("inlineCode",{parentName:"p"},"defaultChannelConfig"),", when the mediator was created."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'  ["Save Encounter 1"]\n')))))}h.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,h=p[s+"."+d]||p[d]||c[d]||r;return n?o.a.createElement(h,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(h,Object.assign({},{ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},339:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},340:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(339),i=n.n(r),s=n(85),l=n.n(s);const c={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:r,values:s}=e,[p,d]=Object(a.useState)(r),h=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:i()("tab-item",l.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case c.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},341:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);
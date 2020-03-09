/*! For license information please see cd63a75e.60b40905.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{342:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(1),o=n(9),r=(n(0),n(382)),i=n(384),c=n(385),s={id:"update",title:"Update Mediator",sidebar_label:"Update",keywords:["OpenHIM","API","Mediator","Update"],description:"Update an OpenHIM mediator via the API"},p={id:"api/mediators/update",title:"Update Mediator",description:"Update an OpenHIM mediator via the API",source:"@site/docs/api/mediators/update.md",permalink:"/docs/next/api/mediators/update",version:"next",sidebar_label:"Update",sidebar:"api",previous:{title:"Read Mediator/s",permalink:"/docs/next/api/mediators/read"},next:{title:"Delete mediator",permalink:"/docs/next/api/mediators/delete"}},l=[{value:"Update Mediator",id:"update-mediator",children:[]},{value:"Update Example",id:"update-example",children:[]},{value:"Set Mediator configuration",id:"set-mediator-configuration",children:[]},{value:"Setting Mediator&#39;s configuration Example",id:"setting-mediators-configuration-example",children:[]}],u={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"update-mediator"},"Update Mediator"),Object(r.b)("p",null,"To update a mediator, you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object of the mediator."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/mediators\nPayload: JSON object of the mediator\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," For a mediator to be updated the version number in the update object has to be greater than current one for that mediator. If the mediator does not exist a new one is created."),Object(r.b)("h2",{id:"update-example"},"Update Example"),Object(r.b)(i.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(r.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(r.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/mediators',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(r.b)("p",null,"Execute the below command in your terminal to run the nodejs script"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(r.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the mediator update object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v https://localhost:8080/mediators -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(r.b)("p",null,"The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"201")," whether the update succeeds or not. To check the status of the update, fetch the updated mediator or check the console.")),Object(r.b)(c.a,{value:"sample",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),' {\n  "urn": "urn:uuid:EEA84E13-1C92-467C-B0BD-7C480462D1ED",\n  "version": "1.0.1",\n  "name": "Updated Mediator",\n  "description": "An updated mediator for testing",\n  "endpoints": [\n    {\n      "name": "Save Encounter",\n      "host": "localhost",\n      "port": "8005",\n      "type": "http"\n    }\n  ],\n  "defaultChannelConfig": [\n    {\n      "name": "Save Encounter 1",\n      "urlPattern": "/encounters",\n      "type": "http",\n      "allow": [],\n      "routes": [\n        {\n          "name": "Save Encounter 1",\n          "host": "localhost",\n          "port": "8005",\n          "type": "http"\n        }\n      ]\n    }\n  ],\n  "configDefs": [\n    {\n      "param": "param1",\n      "type": "string"\n    },\n    {\n      "param": "param2",\n      "type": "string"\n    }\n  ]\n}\n')))),Object(r.b)("h2",{id:"set-mediator-configuration"},"Set Mediator configuration"),Object(r.b)("p",null,"To set a mediator's configuration, you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the JSON object of the mediator's configuration."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/mediators/:urn/config\nPayload: JSON object of the mediator's config\n")),Object(r.b)("p",null,"The response will have an http status code of ",Object(r.b)("inlineCode",{parentName:"p"},"201")," if successful, ",Object(r.b)("inlineCode",{parentName:"p"},"404")," if the mediator referenced by ",Object(r.b)("inlineCode",{parentName:"p"},"urn")," cannot be found and ",Object(r.b)("inlineCode",{parentName:"p"},"400")," if the config supplied cannot be validated against the configuration definition supplied in the mediator registration message."),Object(r.b)("p",null,"This endpoint can only be called by an admin user."),Object(r.b)("h2",{id:"setting-mediators-configuration-example"},"Setting Mediator's configuration Example"),Object(r.b)(i.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(r.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(r.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/mediators/:urn/config',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const SampleData = 'SampleData'\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(r.b)("p",null,"Execute the below command in your terminal to run the nodejs script"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(r.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(r.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(r.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(r.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the mediator's config object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT "https://localhost:8080/mediators/:urn/config" -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(r.b)("p",null,"The response status code will be ",Object(r.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(r.b)(c.a,{value:"sample",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "param1": "Config Test parameter 1",\n  "param2": "Config Test parameter 2"\n}\n')))))}d.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return n?o.a.createElement(h,c({ref:t},p,{components:n})):o.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},383:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},384:function(e,t,n){"use strict";n(24),n(19),n(18);var a=n(0),o=n.n(a),r=n(383),i=n.n(r),c=n(128),s=n.n(c),p=37,l=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,c=e.values,u=Object(a.useState)(r),d=u[0],b=u[1],h=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===t,className:i()("tab-item",s.a.tabItem,{"tab-item--active":d===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return b(t)},onClick:function(){return b(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===d}))[0]))}},385:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);
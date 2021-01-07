(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{431:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),i=(t(0),t(438)),o=t(442),c=t(443),l={id:"update",title:"Update an existing visualizer",sidebar_label:"Update",keywords:["OpenHIM","API","Visualizer","Update"],description:"Update an OpenHIM Visualizer via the API"},s={unversionedId:"api/visualizer/update",id:"version-5.4.x/api/visualizer/update",isDocsHomePage:!1,title:"Update an existing visualizer",description:"Update an OpenHIM Visualizer via the API",source:"@site/versioned_docs/version-5.4.x/api/visualizer/update.md",slug:"/api/visualizer/update",permalink:"/docs/api/visualizer/update",version:"5.4.x",sidebar_label:"Update",sidebar:"version-5.4.x/api",previous:{title:"Read Visualizer/s",permalink:"/docs/api/visualizer/read"},next:{title:"Delete visualizer",permalink:"/docs/api/visualizer/delete"}},u=[{value:"Update visualizer",id:"update-visualizer",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"update-visualizer"},"Update visualizer"),Object(i.b)("p",null,"To update an existing visualizer record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the visualizer record."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/visualizers/:visualizerId\nPayload: JSON object of the visualizer record\n")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)(o.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"lang",mdxType:"TabItem"},Object(i.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(i.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"nodejs",mdxType:"TabItem"},Object(i.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"  Replace the ",Object(i.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(i.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/visualizers/visualizerId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { \n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(i.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(i.b)(c.a,{value:"bash",mdxType:"TabItem"},Object(i.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(i.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the updated visualizer object."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/visualizers/visualizerId -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(i.b)("p",null,"  The response status code will be ",Object(i.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(i.b)(c.a,{value:"sample",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "57a4a09078ae562b26d5b2b0",\n  "name": "Visualizer1",\n  "time": {\n    "updatePeriod": 200\n  },\n  "size": {\n    "padding": 20,\n    "height": 400,\n    "width": 1000,\n    "responsive": true\n  },\n  "color": {\n    "text": "#4a4254",\n    "error": "#a84b5c",\n    "active": "#10e057",\n    "inactive": "#c8cacf"\n  },\n  "mediators": [\n    {\n      "mediator": "urn:mediator:fhir-proxy",\n      "name": "OpenHIM Mediator FHIR Proxy",\n      "display": "OpenHIM Mediator FHIR Proxy",\n      "_id": "57a4a09078ae562b26d5b2b2"\n    },\n    {\n      "mediator": "urn:mediator:shell-script",\n      "name": "OpenHIM Shell Script Mediator",\n      "display": "OpenHIM Shell Script Mediator",\n      "_id": "57a4a09078ae562b26d5b2b1"\n    }\n  ],\n  "channels": [\n    {\n      "eventType": "channel",\n      "eventName": "FHIR Proxy",\n      "display": "FHIR Proxy",\n      "_id": "57a4a09078ae562b26d5b2b4"\n    },\n    {\n      "eventType": "channel",\n      "eventName": "Echo",\n      "display": "Echo",\n      "_id": "57a4a09078ae562b26d5b2b3"\n    }\n  ],\n  "components": [\n    {\n      "eventType": "primary",\n      "eventName": "OpenHIM Mediator FHIR Proxy Route",\n      "display": "FHIR Server",\n      "_id": "57a4a09078ae562b26d5b2b6"\n    },\n    {\n      "eventType": "primary",\n      "eventName": "echo",\n      "display": "Echo",\n      "_id": "57a4a09078ae562b26d5b2b5"\n    }\n  ]\n}\n')))))}d.isMDXComponent=!0},438:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},439:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},440:function(e,n,t){"use strict";var a=t(0),r=t(441);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},442:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(440),o=t(439),c=t(56),l=t.n(c),s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(i.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(a.useState)(c),O=v[0],y=v[1],j=a.Children.toArray(e.children);if(null!=d){var g=h[d];null!=g&&g!==O&&p.some((function(e){return e.value===g}))&&y(g)}var w=function(e){y(e),null!=d&&f(d,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(x,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(a.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},443:function(e,n,t){"use strict";var a=t(3),r=t(0),i=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}}}]);
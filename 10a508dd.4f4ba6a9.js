/*! For license information please see 10a508dd.4f4ba6a9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(382)),i=n(384),l=n(385),c={id:"update",title:"Update an existing role",sidebar_label:"Update",keywords:["OpenHIM","API","Role","Update"],description:"Update an OpenHIM Role via the API"},s={id:"version-5.2.x/api/roles/update",title:"Update an existing role",description:"Update an OpenHIM Role via the API",source:"@site/versioned_docs/version-5.2.x/api/roles/update.md",permalink:"/docs/api/roles/update",version:"5.2.x",sidebar_label:"Update",sidebar:"version-5.2.x/api",previous:{title:"Read Role/s",permalink:"/docs/api/roles/read"},next:{title:"Delete role",permalink:"/docs/api/roles/delete"}},p=[{value:"Update role",id:"update-role",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"update-role"},"Update role"),Object(o.b)("p",null,"To update an existing role record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the role record."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/roles/:roleId\nPayload: JSON object of the role record\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)(i.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"lang",mdxType:"TabItem"},Object(o.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(o.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/roles/roleId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = { \n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(l.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(o.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the updated role object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/roles/roleId -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(o.b)("p",null,"  The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(o.b)(l.a,{value:"sample",mdxType:"TabItem"},Object(o.b)("p",null,"  with a json body containing any updates to channels and clients. As with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../roles/create"}),"create a new role")," operation, channels and clients can be specified either by their ",Object(o.b)("inlineCode",{parentName:"p"},"_id")," or ",Object(o.b)("inlineCode",{parentName:"p"},"name")," for a channel and ",Object(o.b)("inlineCode",{parentName:"p"},"clientID")," for a client."),Object(o.b)("p",null,"  Note that the channel and client arrays, if specified, must contain the complete list of items to apply to, i.e. roles will be removed if they exist on any channels and clients that are not contained in the respective arrays. This also means that if ",Object(o.b)("inlineCode",{parentName:"p"},"channels")," and ",Object(o.b)("inlineCode",{parentName:"p"},"clients")," are specified as empty arrays, the result will be the same as deleting the role. If the fields are not specified, then the existing setup will be left as is."),Object(o.b)("p",null,"  The following example will change ",Object(o.b)("inlineCode",{parentName:"p"},"Role1")," by giving the clients ",Object(o.b)("em",{parentName:"p"},"jembi")," and ",Object(o.b)("em",{parentName:"p"},"client-service")," permission to access ",Object(o.b)("em",{parentName:"p"},"channel1"),". Any other channels will be removed, e.g. following from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../roles/create"}),"create a new role")," example, access to ",Object(o.b)("em",{parentName:"p"},"channel2")," will be removed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "Role-name-updated",\n  "channels": [\n    {\n      "name": "channel1"\n    },\n    {\n      "name": "channel2"\n    }\n  ],\n  "clients": [\n    {\n      "clientID": "jembi"\n    }\n  ]\n}\n')),Object(o.b)("p",null,"  Roles can also be renamed by specifying the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," field."))))}d.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(h,l({ref:t},s,{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},383:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},384:function(e,t,n){"use strict";n(24),n(19),n(18);var a=n(0),r=n.n(a),o=n(383),i=n.n(o),l=n(128),c=n.n(l),s=37,p=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,l=e.values,u=Object(a.useState)(o),d=u[0],b=u[1],h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===t,className:i()("tab-item",c.a.tabItem,{"tab-item--active":d===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return b(t)},onClick:function(){return b(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===d}))[0]))}},385:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);
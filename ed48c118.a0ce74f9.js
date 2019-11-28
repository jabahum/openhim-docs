/*! For license information please see ed48c118.a0ce74f9.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));n(0);var a=n(325),r=n(327),o=n(328);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const c={id:"delete",title:"Delete contact group",sidebar_label:"Delete",keywords:["OpenHIM","API","Contact group","Delete"],description:"Delete an OpenHIM Contact group via the API"},s=[{value:"Delete a specific visualizer record",id:"delete-a-specific-visualizer-record",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:s},p="wrapper";function u({components:e,...t}){return Object(a.b)(p,i({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"delete-a-specific-visualizer-record"},"Delete a specific visualizer record"),Object(a.b)("p",null,"To delete a contact group record you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-curl"}),"Method: DELETE\nEndpoint: {openhim_url}:8080/groups/:groupId\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(a.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(a.b)(o.a,{value:"nodejs",mdxType:"TabItem"},Object(a.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(a.b)("a",i({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(a.b)("p",null,"Replace the ",Object(a.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/groups/groupId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { method: 'DELETE',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n"))),Object(a.b)(o.a,{value:"bash",mdxType:"TabItem"},Object(a.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(a.b)("a",i({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(a.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-curl"}),"./openhim-api.sh root@openhim.org openhim-password -v -X DELETE https://localhost:8080/groups/groupId\n")))),Object(a.b)("p",null,"The response status code will be ",Object(a.b)("inlineCode",{parentName:"p"},"200")," if successful."))}u.isMDXComponent=!0},325:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),u=a,d=p[c+"."+u]||p[u]||l[u]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},326:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},327:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(326),i=n.n(o);t.a=function(e){const{block:t,children:n,defaultValue:o,values:c}=e,[s,l]=Object(a.useState)(o);return r.a.createElement("div",null,r.a.createElement("ul",{className:i()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>r.a.createElement("li",{className:i()("tab-item",{"tab-item--active":s===e}),key:e,onClick:()=>l(e)},t))),r.a.createElement("div",{className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===s)[0]))}},328:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);
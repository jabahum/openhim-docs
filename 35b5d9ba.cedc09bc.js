/*! For license information please see 35b5d9ba.cedc09bc.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),i=(n(0),n(338)),r=n(340),o=n(341);const s={id:"read",title:"Read Transaction/s",sidebar_label:"Read",keywords:["OpenHIM","API","Transactions","Read"],description:"Read OpenHIM Transactions via the API"},c=[{value:"Read all transactions",id:"read-all-transactions",children:[{value:"Read client's transactions",id:"read-clients-transactions",children:[]}]},{value:"Read a specific transaction",id:"read-a-specific-transaction",children:[]},{value:"Example Fetch transactions",id:"example-fetch-transactions",children:[]}],l={id:"api/transactions/read",title:"Read Transaction/s",description:"Read OpenHIM Transactions via the API",source:"@site/docs/api/transactions/read.md",permalink:"/docs/next/api/transactions/read",version:"next",sidebar_label:"Read",sidebar:"api",previous:{title:"Create Transaction",permalink:"/docs/next/api/transactions/create"},next:{title:"Update transaction",permalink:"/docs/next/api/transactions/update"}},p={rightToc:c,metadata:l},d="wrapper";function u({components:e,...t}){return Object(i.b)(d,Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To read existing transaction records you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(i.b)("h2",{id:"read-all-transactions"},"Read all transactions"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/transactions?[filters]\n")),Object(i.b)("p",null,"The following query parameters are supported:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filterLimit"),": The max number of transactions to return"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filterPage"),": The page to return (used in conjunction with ",Object(i.b)("inlineCode",{parentName:"li"},"filterLimit"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filterRepresentation"),": Determines how much information for a transaction to return; options are",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"simple"),": minimal transaction information"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"simpledetails"),": minimal transaction information, but with more fields than simple"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bulkrerun"),": minimal transaction information required in order to determine rerun status"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"full"),": Full transaction information"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fulltruncate"),": The same as full except that large transaction bodies will be truncated"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"channelID"),": Only return transactions that are linked to the specified channel"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filters"),": Advanced filters specified as an object. Transaction fields can be specified based on the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jembi/openhim-core-js/blob/master/src/model/transactions.js#L40-L56"}),"transaction schema"),". For example, in order to filter by response status 200 and a property called ",Object(i.b)("inlineCode",{parentName:"li"},"prop")," with a value ",Object(i.b)("inlineCode",{parentName:"li"},"val"),", the following query could be used: ",Object(i.b)("inlineCode",{parentName:"li"},"/transactions?filterLimit=100&filterPage=0&filters=%7B%22response.status%22:%22200%22,%22properties%22:%7B%22prop%22:%22val%22%7D%7D"))),Object(i.b)("h3",{id:"read-clients-transactions"},"Read client's transactions"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/transactions/clients/:clientId\n")),Object(i.b)("h2",{id:"read-a-specific-transaction"},"Read a specific transaction"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: GET\nEndpoint: {openhim_url}:8080/transactions/:transactionId\n")),Object(i.b)("h2",{id:"example-fetch-transactions"},"Example Fetch transactions"),Object(i.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(i.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"nodejs",mdxType:"TabItem"},Object(i.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"Replace the ",Object(i.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/transactions',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { method: 'GET',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    qs: {\n      filterLimit: 5,\n      filterPage: 0,\n      filterRepresentation: 'full'\n    }\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n"))),Object(i.b)(o.a,{value:"bash",mdxType:"TabItem"},Object(i.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(i.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v "https://localhost:8080/transactions?filterLimit=5&filterPage=0&filterRepresentation=full"\n')))),Object(i.b)("p",null,"The response status code will be ",Object(i.b)("inlineCode",{parentName:"p"},"200")," if successful."))}u.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a),r=i.a.createContext({}),o=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=o(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=o(n),d=a,u=p[s+"."+d]||p[d]||l[d]||r;return n?i.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):i.a.createElement(u,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},339:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=i.apply(null,a);o&&e.push(o)}else if("object"===r)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},340:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(339),o=n.n(r),s=n(85),c=n.n(s);const l={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:r,values:s}=e,[p,d]=Object(a.useState)(r),u=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:o()("tab-item",c.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case l.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},341:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);
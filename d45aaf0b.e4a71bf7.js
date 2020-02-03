/*! For license information please see d45aaf0b.e4a71bf7.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),s=(n(0),n(338)),o=n(340),r=n(341);const i={id:"update",title:"Update an existing client",sidebar_label:"Update",keywords:["OpenHIM","API","Client","Update"],description:"Update an OpenHIM Client via the API"},c=[{value:"Update client",id:"update-client",children:[]},{value:"Example",id:"example",children:[]}],l={id:"api/clients/update",title:"Update an existing client",description:"Update an OpenHIM Client via the API",source:"@site/docs/api/clients/update.md",permalink:"/docs/next/api/clients/update",version:"next",sidebar_label:"Update",sidebar:"api",previous:{title:"Read Client/s",permalink:"/docs/next/api/clients/read"},next:{title:"Delete client",permalink:"/docs/next/api/clients/delete"}},p={rightToc:c,metadata:l},d="wrapper";function u({components:e,...t}){return Object(s.b)(d,Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"update-client"},"Update client"),Object(s.b)("p",null,"To update an existing client record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the client record."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/clients/:clientId\nPayload: JSON object of the client record\n")),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)(o.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"lang",mdxType:"TabItem"},Object(s.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(s.b)(o.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"nodejs",mdxType:"TabItem"},Object(s.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(s.b)("p",null,"  Replace the ",Object(s.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(s.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\nconst genClientPassword = (password) => {\n  return new Promise((resolve) => {\n    const passwordSalt = crypto.randomBytes(16)\n    // create passhash\n    let shasum = crypto.createHash('sha512')\n    shasum.update(password)\n    shasum.update(passwordSalt.toString('hex'))\n    const passwordHash = shasum.digest('hex')\n\n    resolve({\n      \"passwordSalt\": passwordSalt.toString('hex'),\n      \"passwordHash\": passwordHash\n    })\n  })\n}\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/clients/clientId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const clientPassword = \"client-password\"\n  const clientPasswordDetails = await genClientPassword(clientPassword)\n\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(s.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(s.b)(r.a,{value:"bash",mdxType:"TabItem"},Object(s.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(s.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(s.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the updated client object."),Object(s.b)("h4",{id:"generate-a-valid-password-hash-and-salt"},"generate a valid password hash and salt"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# gen-client-password.sh\n\n#!/bin/bash\nif (( $# < 1)); then\n    echo "OpenHIM Client Password: Curl wrapper that generates the client Password details";\n    echo "Usage: $0 PASSWORD";\n    exit 0;\nfi\npass=$1;\nshift;\nshift;\n\nsalt=`cat /dev/urandom | tr -dc \'abcdef0-9\' | fold -w 32 | head -n 1`;\npasshash=`echo -n "$pass$salt" | shasum -a 512 | awk \'{print $1}\'`;\n\necho Password Salt: $salt\necho Password Hash: $passhash\n\necho "";\n')),Object(s.b)("p",null,"  and execute the above bash script with the below command"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"./gen-client-password.sh <CLIENT_PASSWORD>\n")),Object(s.b)("p",null,"  Once you have generated the hash and salt for the password, supply it into the ",Object(s.b)("inlineCode",{parentName:"p"},"SampleData.json")," payload to be submitted"),Object(s.b)("p",null,"  Execute the below command in your terminal to create the client"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/clients/clientId -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(s.b)("p",null,"  The response status code will be ",Object(s.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(s.b)(r.a,{value:"sample",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "57a4a09078ae562b26d5b2b0",\n  "roles": [\n    "testing",\n    "another-role"\n  ],\n  "clientID": "testing",\n  "name": "Testing",\n  "passwordAlgorithm": "sha512",\n  "passwordSalt": "94b37205cb460a3a7193a3071021a4eb",\n  "passwordHash": "c3d24c5708c7eebe6ec6d900dd713d1c96fd0f45a731c9ae92cbd7f010981b9259cecca2cae415005c02dbfec734ca5c61dc44d150651b94711e121f14465bf6"\n}\n')))))}u.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d}));var a=n(0),s=n.n(a),o=s.a.createContext({}),r=function(e){var t=s.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=r(e.components);return s.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=r(n),d=a,u=p[i+"."+d]||p[d]||l[d]||o;return n?s.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):s.a.createElement(u,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,r[1]=i;for(var d=2;d<o;d++)r[d]=n[d];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},339:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var r=s.apply(null,a);r&&e.push(r)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a)}()},340:function(e,t,n){"use strict";var a=n(0),s=n.n(a),o=n(339),r=n.n(o),i=n(85),c=n.n(i);const l={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:o,values:i}=e,[p,d]=Object(a.useState)(o),u=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>s.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:r()("tab-item",c.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case l.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},341:function(e,t,n){"use strict";var a=n(0),s=n.n(a);t.a=function(e){return s.a.createElement("div",null,e.children)}}}]);
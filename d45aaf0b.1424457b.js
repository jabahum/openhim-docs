/*! For license information please see d45aaf0b.1424457b.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));n(0);var a=n(325),r=n(327),o=n(328);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const l={id:"update",title:"Update an existing client",sidebar_label:"Update",keywords:["OpenHIM","API","Client","Update"],description:"Update an OpenHIM Client via the API"},c=[{value:"Update client",id:"update-client",children:[]},{value:"Example",id:"example",children:[]}],i={rightToc:c},p="wrapper";function d({components:e,...t}){return Object(a.b)(p,s({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"update-client"},"Update client"),Object(a.b)("p",null,"To update an existing client record you will need to make a TLS request to the OpenHIM API for the below method and endpoint and supply the updated JSON object for the client record."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-curl"}),"Method: PUT\nEndpoint: {openhim_url}:8080/clients/:clientId\nPayload: JSON object of the client record\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)(r.a,{defaultValue:"lang",values:[{label:"Languages",value:"lang"},{label:"Sample Data",value:"sample"}],mdxType:"Tabs"},Object(a.b)(o.a,{value:"lang",mdxType:"TabItem"},Object(a.b)("p",null,"  Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API."),Object(a.b)(r.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(a.b)(o.a,{value:"nodejs",mdxType:"TabItem"},Object(a.b)("p",null,"  Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(a.b)("a",s({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(a.b)("p",null,"  Replace the ",Object(a.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details and supply the ",Object(a.b)("inlineCode",{parentName:"p"},"SampleData")," payload to submit"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods.\n// This is described within the authentication section\n\nconst genClientPassword = (password) => {\n  return new Promise((resolve) => {\n    const passwordSalt = crypto.randomBytes(16)\n    // create passhash\n    let shasum = crypto.createHash('sha512')\n    shasum.update(password)\n    shasum.update(passwordSalt.toString('hex'))\n    const passwordHash = shasum.digest('hex')\n\n    resolve({\n      \"passwordSalt\": passwordSalt.toString('hex'),\n      \"passwordHash\": passwordHash\n    })\n  })\n}\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/clients/clientId',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n  const clientPassword = \"client-password\"\n  const clientPasswordDetails = await genClientPassword(clientPassword)\n\n  const SampleData = 'SampleData'\n\n  const headers = await genAuthHeaders(openhimOptions)\n\n  const options = {\n    method: 'PUT',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers,\n    body: SampleData,\n    json: true\n  }\n\n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n\n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(a.b)("p",null,"  Execute the below command in your terminal to run the nodejs script"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(a.b)(o.a,{value:"bash",mdxType:"TabItem"},Object(a.b)("p",null,"  Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(a.b)("a",s({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(a.b)("p",null,"  Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details and ensure your ",Object(a.b)("inlineCode",{parentName:"p"},"SampleData.json")," file exists with the updated client object."),Object(a.b)("h4",{id:"generate-a-valid-password-hash-and-salt"},"generate a valid password hash and salt"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-bash"}),'# gen-client-password.sh\n\n#!/bin/bash\nif (( $# < 1)); then\n    echo "OpenHIM Client Password: Curl wrapper that generates the client Password details";\n    echo "Usage: $0 PASSWORD";\n    exit 0;\nfi\npass=$1;\nshift;\nshift;\n\nsalt=`cat /dev/urandom | tr -dc \'abcdef0-9\' | fold -w 32 | head -n 1`;\npasshash=`echo -n "$pass$salt" | shasum -a 512 | awk \'{print $1}\'`;\n\necho Password Salt: $salt\necho Password Hash: $passhash\n\necho "";\n')),Object(a.b)("p",null,"  and execute the above bash script with the below command"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-curl"}),"./gen-client-password.sh <CLIENT_PASSWORD>\n")),Object(a.b)("p",null,"  Once you have generated the hash and salt for the password, supply it into the ",Object(a.b)("inlineCode",{parentName:"p"},"SampleData.json")," payload to be submitted"),Object(a.b)("p",null,"  Execute the below command in your terminal to create the client"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-curl"}),'./openhim-api.sh root@openhim.org openhim-password -v -X PUT https://localhost:8080/clients/clientId -d @SampleData.json -H "Content-Type:application/json"\n')))),Object(a.b)("p",null,"  The response status code will be ",Object(a.b)("inlineCode",{parentName:"p"},"200")," if successful.")),Object(a.b)(o.a,{value:"sample",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "57a4a09078ae562b26d5b2b0",\n  "roles": [\n    "testing",\n    "another-role"\n  ],\n  "clientID": "testing",\n  "name": "Testing",\n  "passwordAlgorithm": "sha512",\n  "passwordSalt": "94b37205cb460a3a7193a3071021a4eb",\n  "passwordHash": "c3d24c5708c7eebe6ec6d900dd713d1c96fd0f45a731c9ae92cbd7f010981b9259cecca2cae415005c02dbfec734ca5c61dc44d150651b94711e121f14465bf6"\n}\n')))))}d.isMDXComponent=!0},325:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a),o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,u=p[l+"."+d]||p[d]||i[d]||o;return n?r.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(u,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=n[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},326:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var s=r.apply(null,a);s&&e.push(s)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},327:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(326),s=n.n(o);t.a=function(e){const{block:t,children:n,defaultValue:o,values:l}=e,[c,i]=Object(a.useState)(o);return r.a.createElement("div",null,r.a.createElement("ul",{className:s()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>r.a.createElement("li",{className:s()("tab-item",{"tab-item--active":c===e}),key:e,onClick:()=>i(e)},t))),r.a.createElement("div",{className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===c)[0]))}},328:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);
/*! For license information please see f3b85bd6.08024400.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{327:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"default",(function(){return h}));var a=n(1),l=n(6),r=(n(0),n(338)),o=n(340),i=n(341),c={id:"configuration",title:"Configuration",sidebar_label:"Configuration",keywords:["OpenHIM","Configuration"],description:"OpenHIM configuration"},s=[{value:"Adding Clients",id:"adding-clients",children:[]},{value:"Adding Channels",id:"adding-channels",children:[]},{value:"Example",id:"example",children:[]}],b={id:"version-5.2.x/getting-started/configuration",title:"Configuration",description:"OpenHIM configuration",source:"@site/versioned_docs/version-5.2.x/getting-started/configuration.md",permalink:"/docs/getting-started/configuration",version:"5.2.x",sidebar_label:"Configuration",sidebar:"version-5.2.x/docs",previous:{title:"Install OpenHIM",permalink:"/docs/getting-started/install"},next:{title:"Install via Docker",permalink:"/docs/installation/docker"}},p={rightToc:s,metadata:b},u="wrapper";function h(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)(u,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Once you have successfully installed the OpenHIM core and console and you are able to successfully access the console at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:9000"}),"http://localhost:9000")," we can proceed to create a basic channel and client so that we can send a test request through the OpenHIM core."),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"Client")," is usually some system that you want to be able to send request to the OpenHIM. Setting up a ",Object(r.b)("strong",{parentName:"p"},"client")," allows the OpenHIM to authenticate requests. A ",Object(r.b)("strong",{parentName:"p"},"Channel")," defines a path that a request will take through the OpenHIM. It describes one more ",Object(r.b)("strong",{parentName:"p"},"routes")," for the request to be forwarded to, which ",Object(r.b)("strong",{parentName:"p"},"clients")," are allowed to use this ",Object(r.b)("strong",{parentName:"p"},"channel"),", which requests are to be directed to this ",Object(r.b)("strong",{parentName:"p"},"channel")," and many more options that allow you to control what happens for a particular request."),Object(r.b)("p",null,"To manage ",Object(r.b)("strong",{parentName:"p"},"clients")," and ",Object(r.b)("strong",{parentName:"p"},"channels")," you will need to log into the OpenHIM console and then you may follow the steps below."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note")," - Only an Admin user has the permission to Add/Edit/Delete a ",Object(r.b)("strong",{parentName:"p"},"Client")," or ",Object(r.b)("strong",{parentName:"p"},"Channel"))),Object(r.b)("h2",{id:"adding-clients"},"Adding Clients"),Object(r.b)("p",null,"Follow the below steps to successfully create/update a ",Object(r.b)("strong",{parentName:"p"},"Client")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Navigate to the ",Object(r.b)("strong",{parentName:"li"},"Clients")," page on the OpenHIM Console."),Object(r.b)("li",{parentName:"ul"},"Here you will be presented with a list of all the created ",Object(r.b)("strong",{parentName:"li"},"Clients")),Object(r.b)("li",{parentName:"ul"},"Click on the blue ",Object(r.b)("strong",{parentName:"li"},"+ Client")," button to open a popup modal box where you will supply the ",Object(r.b)("strong",{parentName:"li"},"Client")," details ",Object(r.b)("strong",{parentName:"li"},"OR")," click on one of the existing ",Object(r.b)("strong",{parentName:"li"},"Clients")," to open up the popup modal with the ",Object(r.b)("strong",{parentName:"li"},"Client"),"'s saved details."),Object(r.b)("li",{parentName:"ul"},"Supply all the required fields (marked with a ","*",") and click the blue ",Object(r.b)("strong",{parentName:"li"},"Save changes")," button when completed.")),Object(r.b)("p",null,"There are many fields available, to find a detailed explanation of all possible fields, please refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../configuration/clients"}),"Clients documentation")," page"),Object(r.b)("h2",{id:"adding-channels"},"Adding Channels"),Object(r.b)("p",null,"Follow the below steps to successfully create/update a ",Object(r.b)("strong",{parentName:"p"},"Channel")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Navigate to the ",Object(r.b)("strong",{parentName:"li"},"Channels")," menu option found in the left sidebar."),Object(r.b)("li",{parentName:"ul"},"On the ",Object(r.b)("strong",{parentName:"li"},"Channels")," page you will be presented with a list of all the created ",Object(r.b)("strong",{parentName:"li"},"Channels")),Object(r.b)("li",{parentName:"ul"},'Click on the blue "',Object(r.b)("strong",{parentName:"li"},"+ Channel"),'" button to open a popup modal box where you will supply the ',Object(r.b)("strong",{parentName:"li"},"Channel")," details ",Object(r.b)("strong",{parentName:"li"},"OR")," click on one of the existing ",Object(r.b)("strong",{parentName:"li"},"Channels")," to open up the popup modal with the ",Object(r.b)("strong",{parentName:"li"},"Channels'")," saved details."),Object(r.b)("li",{parentName:"ul"},'Supply all the required fields and click the blue "',Object(r.b)("strong",{parentName:"li"},"Save changes"),'" button when completed.')),Object(r.b)("p",null,"The two ",Object(r.b)("em",{parentName:"p"},"most")," important fields to supply are the ",Object(r.b)("strong",{parentName:"p"},"URL Pattern")," field and the ",Object(r.b)("strong",{parentName:"p"},"Allowed roles and clients")," field. The ",Object(r.b)("strong",{parentName:"p"},"URL Pattern")," field describes which incoming requests should be sent down this ",Object(r.b)("strong",{parentName:"p"},"channel"),". It does this by looking at the URL of the incoming request and testing if it matches the RegEx that you supply in this field."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),", ",Object(r.b)("em",{parentName:"p"},"only the first")," url matched ",Object(r.b)("strong",{parentName:"p"},"channel")," that is found receives the request for processing.")),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Allowed roles and clients")," field identifies which ",Object(r.b)("strong",{parentName:"p"},"clients")," are allowed to send requests to this ",Object(r.b)("strong",{parentName:"p"},"channel"),". If a request matches a private ",Object(r.b)("strong",{parentName:"p"},"channel")," but the ",Object(r.b)("strong",{parentName:"p"},"client")," system is not specified in this field or a ",Object(r.b)("strong",{parentName:"p"},"role")," which contains the ",Object(r.b)("strong",{parentName:"p"},"client")," is not specified in this field then the request will be denied access to the ",Object(r.b)("strong",{parentName:"p"},"channel")," as it could not successfully authenticate the the supplied authentication details to those linked to the channel."),Object(r.b)("p",null,"There are many fields that you may supply, to find a detailed explanation of all the available fields, please refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../configuration/channels"}),"Channels documentation")," page"),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"For this example, we will be creating a very basic channel that requires client authentication details to verify the request is authorized for the specific channel being requested."),Object(r.b)(o.a,{defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Import Config",value:"import"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,"Lets proceed by supplying the below details within our relevant sections to complete this configuration of our channel and client."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Client:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"clientID: ",Object(r.b)("inlineCode",{parentName:"li"},"HL7")),Object(r.b)("li",{parentName:"ul"},"client Name: ",Object(r.b)("inlineCode",{parentName:"li"},"Health Level 7")),Object(r.b)("li",{parentName:"ul"},"Add new Role: ",Object(r.b)("inlineCode",{parentName:"li"},"HL7")),Object(r.b)("li",{parentName:"ul"},"Basic Auth Password: ",Object(r.b)("inlineCode",{parentName:"li"},"hl7password"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Channel:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Basic Info Tab:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"HL7 Patient example Channel")))),Object(r.b)("li",{parentName:"ul"},"Request Matching Tab:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"urlPatten: ",Object(r.b)("inlineCode",{parentName:"li"},"/hl7-patient-example")),Object(r.b)("li",{parentName:"ul"},"Channel Authentication: ",Object(r.b)("inlineCode",{parentName:"li"},"Private")),Object(r.b)("li",{parentName:"ul"},"Client to access this channel: ",Object(r.b)("inlineCode",{parentName:"li"},"HL7")))),Object(r.b)("li",{parentName:"ul"},"Routes Tab: Add new route:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Name: ",Object(r.b)("inlineCode",{parentName:"li"},"HL7 patient example Route")),Object(r.b)("li",{parentName:"ul"},"Route Secured: ",Object(r.b)("inlineCode",{parentName:"li"},"yes")),Object(r.b)("li",{parentName:"ul"},"Host: ",Object(r.b)("inlineCode",{parentName:"li"},"www.hl7.org")),Object(r.b)("li",{parentName:"ul"},"Port: ",Object(r.b)("inlineCode",{parentName:"li"},"443")),Object(r.b)("li",{parentName:"ul"},"Route Path: ",Object(r.b)("inlineCode",{parentName:"li"},"/fhir/patient-example.json")))))),Object(r.b)(i.a,{value:"import",mdxType:"TabItem"},Object(r.b)("p",null,"Import the below JSON object into the OpenHIM as described within the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/import-export/create"}),"Import/Export")," section"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Clients": [\n    {\n      "roles": [\n        "HL7"\n      ],\n      "clientID": "HL7",\n      "name": "Health Level 7",\n      "passwordAlgorithm": "sha512",\n      "passwordSalt": "cbdd2b7cc46bc713b439b352c8c09b49",\n      "passwordHash": "3cbd8a269cca1b42afa2b19fc9cd1b844229fadd0ff1ac1b66ed614f30e2056ccf47f0c92b4723a77a87aeb9688c5af76f5b3f0e1b2dbc88988a36320f326a23"\n    }\n  ],\n  "Channels": [\n    {\n      "methods": [\n        "GET",\n        "POST",\n        "DELETE",\n        "PUT",\n        "OPTIONS",\n        "HEAD",\n        "TRACE",\n        "CONNECT",\n        "PATCH"\n      ],\n      "type": "http",\n      "allow": [\n        "HL7"\n      ],\n      "whitelist": [],\n      "authType": "private",\n      "matchContentTypes": [],\n      "properties": [],\n      "txViewAcl": [],\n      "txViewFullAcl": [],\n      "txRerunAcl": [],\n      "status": "enabled",\n      "rewriteUrls": false,\n      "addAutoRewriteRules": true,\n      "autoRetryEnabled": false,\n      "autoRetryPeriodMinutes": 60,\n      "routes": [\n        {\n          "type": "http",\n          "status": "enabled",\n          "forwardAuthHeader": false,\n          "name": "HL7 patient example Route",\n          "secured": true,\n          "host": "www.hl7.org",\n          "port": 443,\n          "path": "/fhir/patient-example.json",\n          "pathTransform": "",\n          "primary": true,\n          "username": "",\n          "password": ""\n        }\n      ],\n      "requestBody": true,\n      "responseBody": true,\n      "rewriteUrlsConfig": [],\n      "name": "HL7 Patient example Channel",\n      "urlPattern": "^/hl7-patient-example$",\n      "matchContentRegex": null,\n      "matchContentXpath": null,\n      "matchContentValue": null,\n      "matchContentJson": null,\n      "pollingSchedule": null,\n      "tcpHost": null,\n      "tcpPort": null,\n      "updatedBy": {\n        "id": "5dee04aadf48ea0011e3a1fa",\n        "name": "Super User"\n      },\n      "alerts": []\n    }\n  ]\n}\n')))),Object(r.b)("p",null,"Once you have configured your client and channel ",Object(r.b)("strong",{parentName:"p"},"as described in the above example"),", you should now be able to successfully make a authenticated request through the OpenHIM to fetch the example HL7 FHIR Patient object."),Object(r.b)("p",null,"Execute the below command in your terminal to see the output of the request."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl "http://localhost:5001/hl7-patient-example" -H "Authorization: Basic $(echo -n HL7:hl7password | base64)"\n')),Object(r.b)("p",null,"You can also use any alternative 3rd party client to send this request through the OpenHIM. An example of a 3rd party client is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.getpostman.com/"}),"Postman")))}h.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return p}));var a=n(0),l=n.n(a),r=l.a.createContext({}),o=function(e){var t=l.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=o(e.components);return l.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),b=o(n),p=a,u=b[i+"."+p]||b[p]||s[p]||r;return n?l.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):l.a.createElement(u,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},339:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=l.apply(null,a);o&&e.push(o)}else if("object"===r)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()},340:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(339),o=n.n(r),i=n(85),c=n.n(i);const s={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:r,values:i}=e,[b,p]=Object(a.useState)(r),u=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===e,className:o()("tab-item",c.a.tabItem,{"tab-item--active":b===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},t))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===b)[0]))}},341:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);
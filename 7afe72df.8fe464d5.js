(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(1),o=(n(0),n(338)),s=n(343);const i={id:"design-details",title:"Detailed design using Node.js",sidebar_label:"Detailed design using Node.js",keywords:["openhim","design"],description:"Designing the OpenHIM"},r=[{value:"Libraries to use",id:"libraries-to-use",children:[]},{value:"General Overview",id:"general-overview",children:[]},{value:"Design",id:"design",children:[]},{value:"Authentication and Authorization",id:"authentication-and-authorization",children:[{value:"Authentication",id:"authentication",children:[]},{value:"Authorization",id:"authorization",children:[]}]},{value:"Message persistence",id:"message-persistence",children:[]},{value:"Router",id:"router",children:[]},{value:"Restful API",id:"restful-api",children:[]}],l={id:"version-5.2.x/dev-guide/design-details",title:"Detailed design using Node.js",description:"Designing the OpenHIM",source:"@site/versioned_docs/version-5.2.x/dev-guide/design-details.md",permalink:"/docs/dev-guide/design-details",version:"5.2.x",sidebar_label:"Detailed design using Node.js",sidebar:"version-5.2.x/docs",previous:{title:"Design overview",permalink:"/docs/dev-guide/design-overview"},next:{title:"Getting started with OpenHIM development",permalink:"/docs/dev-guide/openhim-development"}},c={rightToc:r,metadata:l},u="wrapper";function d({components:e,...t}){return Object(o.b)(u,Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," this design document was written before the development OpenHIM an as such some of the detail have changed or evolved with the OpenHIM's continued development. It is a good starting point but not a complete picture.")),Object(o.b)("p",null,"Node.js is a good technology option on which to develop the interoperability layer core component for the following reasons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Very lightweight"),Object(o.b)("li",{parentName:"ul"},"Robust HTTP library"),Object(o.b)("li",{parentName:"ul"},"Great support from 3rd party libraries for reading and modifying HTTP requests"),Object(o.b)("li",{parentName:"ul"},"Highly performant")),Object(o.b)("h2",{id:"libraries-to-use"},"Libraries to use"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://koajs.com/"}),"Koa")," - Koa is a new web application framework for node.js. It provides easy mechanisms to expose web endpoints and process requests and responses in a stack-like approach."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://passportjs.org/"}),"Passport.js")," - Middleware to provide authentication mechanisms (in the current implementation this has not yet been used).")),Object(o.b)("h2",{id:"general-overview"},"General Overview"),Object(o.b)("p",null,"The Koa framework provides an easy way to modify HTTP request and responses as they are being processed. Each step that the OpenHIM needs to perform can be written as Koa middleware. Each middleware can handle a different aspect of processing that the OpenHIM need to perform such as authentication, authorization, message persistence and message routing. Developing each of these steps as Koa middleware allows them to be easily reused and allows us to add new steps for future versions. The Koa stack approach to processing requests also fits our use case well as it allows the middleware to affect both the request and the response as it is travelling through the system."),Object(o.b)("p",null,"The Koa framework also gives us some convenience objects, such as ",Object(o.b)("inlineCode",{parentName:"p"},"ctx.request")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ctx.response"),", that are designed to be used for web applications but they are equally useful for handling web services."),Object(o.b)("h2",{id:"design"},"Design"),Object(o.b)("p",null,"The OpenHIM-core uses Koa middleware to act on HTTP requests and Responses. Koa allows you to setup a stack of middleware, each middleware is called in order and gets an opportunity to act on the request (going down the stack) and is then suspended. Once the end of the stack is reached Koa traverses back up the stack allowing each middleware to act on the response."),Object(o.b)("p",null,"Each row in the diagram below represents a middleware component of the OpenHIM-core. Each of the components of the OpenHIM-core will be described further in the following sections. The OpenHIM-core also has a REST API that will allow a web UI to be created for easy of management."),Object(o.b)("img",{alt:"OpenHIM Design",src:Object(s.a)("img/design/OpenHIM-js-design.png")}),Object(o.b)("h2",{id:"authentication-and-authorization"},"Authentication and Authorization"),Object(o.b)("p",null,"The are two possible combinations of authentication that the interoperability layer(IL) should provide to determine a client's identity:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"HTTP basic authentication"),Object(o.b)("li",{parentName:"ul"},"ATNAs Node Authentication (PKI)")),Object(o.b)("p",null,"Once identity has been established the IL core component should check if that client has the authority to access the requested service."),Object(o.b)("p",null,"The HIM should also provide a single-sign-on (SSO) facility to allow users of the HIE management application to have a single identity that they may used to access these applications. To do this the HIM should also act as an openid provider and provide functions to manage SSO users."),Object(o.b)("p",null,"The two main workflows that we wish to enable for authentication and authorization are described in the following workflows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.ohie.org/display/documents/Common+message+security+workflow"}),"Common message security workflow")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.ohie.org/display/documents/SSO+User+workflow"}),"SSO User workflow"))),Object(o.b)("h3",{id:"authentication"},"Authentication"),Object(o.b)("p",null,"Client details for authentication are stored in the MongoDB database in the following format. Either a password or a certificate (in binary form) is stored in this structure depending on whether the user chooses to use PKI or HTTP basic auth to authenticate clients."),Object(o.b)("p",null,"The OpenHIM application should allow new clients to be added and managed with the following details:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "clientID": "Musha_OpenMRS",\n    "domain": "him.jembi.org",\n    "name": "OpenMRS Musha instance",\n    "roles": [ "OpenMRS_PoC", "PoC" ],\n    "passwordHash": "",\n    "cert": ""\n}\n')),Object(o.b)("h4",{id:"basic-auth"},"Basic auth"),Object(o.b)("p",null,"When authentication is set to HTTP basic auth, then Koa middleware is setup to intercept the request as soon as it enters the OpenHIM as shown above. This middleware will read client details (username and password-hash) out of the MongoDB store to determine if the client can be authenticated. If the client is rejected an error is returned else the request is considered authenticated and is then passed onto the authorization step."),Object(o.b)("h4",{id:"public-key-infrastructure-pki---mutual-tls"},"Public key Infrastructure (PKI) - mutual TLS"),Object(o.b)("p",null,"When the authentication method is set to PKI then the node http server must be setup to use https and it must be set to trust only clients that have a known certificate (stored in a ",Object(o.b)("inlineCode",{parentName:"p"},"Client"),"'s details). The domain of a client (identified in its certificate) will be used to map a request received from a client to its details as stored by the OpenHIM (shown above)."),Object(o.b)("p",null,"To help perform the authentication the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://passportjs.org/"}),"passport.js")," module will be used. This provides us with middleware for a number of different authentication schemes. There is also ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rkusa/koa-passport"}),"Koa middleware available for passport"),"."),Object(o.b)("h3",{id:"authorization"},"Authorization"),Object(o.b)("p",null,"The OpenHIM only performs simple authorisation based on the path that is being requested. It should be able to restrict access to certain paths to clients with particular roles. Roles are identified in each client's details. The channel description shown in the router section below shows that each path has one or more allowed roles or clients associated with it. The authorisation component will check if the authenticated client has the authority to access the current path. If authorized the request will be passed on, else, the request will be denied and a HTTP 401 message will be returned."),Object(o.b)("h2",{id:"message-persistence"},"Message persistence"),Object(o.b)("p",null,"Each request and response will be persisted so that it can be logged and so that the erroneous transaction may be re-run. This persistence occurs at two stages. Firstly, once a request is authenticated and authorised. Secondly, once a response has been received from the external service. All the metadata about a transaction is stored in a single document in MongoDB. The relevant sections are just updated as new information is received. The structure of this information is shown below."),Object(o.b)("p",null,"In addition, the ability to store orchestration steps exists in the structure. We anticipate exposing a web service to enable mediators to report requests and responses that they make and receive from external services and have these stored alongside the actual transaction."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "_id": "123",\n    "status": "Processing|Failed|Completed",\n    "clientID": "Musha_OpenMRS",\n    "request": {\n        "path": "/api/test",\n        "headers": {\n            "header1": "value1",\n            "header2": "value2"\n        },\n        "querystring": "param1=value1&param2=value2",\n        "body": "<HTTP body>",\n        "method": "POST",\n        "timestamp": "<ISO 8601>"\n    },\n    "response": {\n        "status": 201,\n        "body": "<HTTP body>",\n        "headers": {\n            "header1": "value1",\n            "header2": "value2"\n        },\n        "timestamp": "<ISO 8601>"\n    },\n    "routes": [\n        {\n            "name": "<route name>"\n            // Same structure as above\n            "request": { ... },\n            "response": { ... }\n        }\n    ]\n    "orchestrations": [\n        {\n            "name": "<orchestration name>"\n            // Same structure as above\n            "request": { ... },\n            "response": { ... }\n        }\n    ]\n    "properties": { // optional meta data about a transaction\n        "prop1": "value1",\n        "prop2": "value2"\n    }\n}\n')),Object(o.b)("h2",{id:"router"},"Router"),Object(o.b)("p",null,"The router allows requests to be forwarded to one or more external services (these could be mediators or an actual HIE component). It does this by allowing the user to configure a number of channels. Each channel matches a certain path and contains a number of routes on which to forward requests. Request may be forwarded to multiple routes however, there can only be one ",Object(o.b)("strong",{parentName:"p"},"primary route"),". The primary route is a the route whose response is returned back to the service requester making use of the OpenHIM."),Object(o.b)("p",null,"Channels may be added, removed or updated dynamically as the application is running."),Object(o.b)("p",null,"A channel may be access controlled via the ",Object(o.b)("inlineCode",{parentName:"p"},"allow")," field. This field will specify a list of users or groups that are allowed to send requests to that channel. If a channel receives a request from an un-authorised source it will return an error."),Object(o.b)("p",null,"A custom router will have to be developed that can route according to these rules. The router can be built using the node.js functions provided to make HTTP requests and responses can be relayed using the ",Object(o.b)("inlineCode",{parentName:"p"},".pipe()")," function."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "name": "Some Registry Channel",\n        "urlPattern": "test/sample/.+",\n        "allow": "*",\n        "routes": [\n            {\n                "name": "Some Registry",\n                "path": "some/other/path", // this is optional if left out original path is used\n                "host": "localhost",\n                "port": 8080\n            }\n\n        ],\n        "properties": [ // optional meta data about a channel\n            { "prop1": "value1" },\n            { "prop2": "value2" }\n        ]\n    },\n    {\n        "name": "Some Registry Channel",\n        "urlPattern": "test/sample2/.+/test2",\n        "allow": [ "Alice","Bob", "PoC" ],\n        "routes": [\n            {\n                "name": "Some Registry",\n                "host": "localhost",\n                "port": 8080,\n                "primary": true\n            },\n            {\n                "name": "Logger",\n                "host": "log-host",\n                "port": 4789\n            }\n        ],\n        "properties": [ // optional meta data about a channel\n            { "prop1": "value1" },\n            { "prop2": "value2" }\n        ]\n    }\n]\n')),Object(o.b)("h2",{id:"restful-api"},"Restful API"),Object(o.b)("p",null,"The OpenHIM must also expose a restful API that enables it to be configured and to allow access to the logged transactions. This restful API will drive a web application that can allow the OpenHIM to be configured and will allow transactions to be viewed and monitored."),Object(o.b)("p",null,"The API must supply CRUD access to the following constructs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"transaction logs"),Object(o.b)("li",{parentName:"ul"},"transaction channels"),Object(o.b)("li",{parentName:"ul"},"client details")),Object(o.b)("p",null,"It should also allow for the following actions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"single and batch re-processing of transactions"),Object(o.b)("li",{parentName:"ul"},"querying for monitoring statistics")),Object(o.b)("p",null,"The API reference as it currently exists can be ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../api/transactions/overview"}),"found here"),"."))}d.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a),s=o.a.createContext({}),i=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},r=function(e){var t=i(e.components);return o.a.createElement(s.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,h=u[r+"."+d]||u[d]||c[d]||s;return n?o.a.createElement(h,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(h,Object.assign({},{ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[l]="string"==typeof e?e:a,i[1]=r;for(var d=2;d<s;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},342:function(e,t,n){"use strict";var a=n(0),o=n(32);t.a=function(){return Object(a.useContext)(o.a)}},343:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(342);function o(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);
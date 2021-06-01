(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{369:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(556)),i=n(562),c={id:"roadmap",title:"Roadmap",sidebar_label:"Roadmap",keywords:["OpenHIM","Roadmap"],description:"The OpenHIM's roadmap"},d={unversionedId:"introduction/roadmap",id:"version-7.0.x/introduction/roadmap",isDocsHomePage:!1,title:"Roadmap",description:"The OpenHIM's roadmap",source:"@site/versioned_docs/version-7.0.x/introduction/roadmap.md",slug:"/introduction/roadmap",permalink:"/docs/introduction/roadmap",version:"7.0.x",sidebar_label:"Roadmap",sidebar:"version-7.0.x/docs",previous:{title:"Key Components and What They Do",permalink:"/docs/introduction/key-components"},next:{title:"Getting Involved",permalink:"/docs/introduction/community"}},p=[{value:"OpenHIM Roadmap",id:"openhim-roadmap",children:[{value:"Scope",id:"scope",children:[]},{value:"Timeline",id:"timeline",children:[]},{value:"Milestones and Deadlines",id:"milestones-and-deadlines",children:[]}]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"openhim-roadmap"},"OpenHIM Roadmap"),Object(o.b)("h3",{id:"scope"},"Scope"),Object(o.b)("p",null,"The OpenHIM roadmap covers four key functional areas, aiming to serve the needs of both new and existing implementations and ensuring that project-specific features and support requests are built into the core product to be made available across implementations."),Object(o.b)("h4",{id:"console-and-core"},"Console and Core"),Object(o.b)("p",null,"This covers features of the core OpenHIM product, including user experience improvements, improvements to containerizing and orchestrating deployment of the OpenHIM, routing engine refactoring to allow for optimisation of transaction handling and processing towards improved performance, support for alerting and transaction replays to rerun past messages in the stream and perform new calculations or re-execute logic that failed previously."),Object(o.b)("h4",{id:"mediator-library"},"Mediator Library"),Object(o.b)("p",null,"This covers features related to improved development and deployment of OpenHIM mediators, including advancements to the OpenHIM mapping mediator, DHIS2 Tracker mediators, and others to support common HIE use cases and alignment with the OpenHIE specification, containerizing and orchestrating deployment of OpenHIM mediators, and improved support for HL7 FHIR data exchange in line with the increased maturity of FHIR and adoption of the standard by the OpenHIE community."),Object(o.b)("h4",{id:"modernization"},"Modernization"),Object(o.b)("p",null,"Product modernization is aimed at keeping the OpenHIM technology and dependency stack up to date, ensuring application security and leveraging performance and reliability improvements as the tools in the technology stack advance. This includes updating packages and interdependencies in the OpenHIM to patch potential security flaws and vulnerabilities, and enable compatibility with newer versions of underlying software e.g. Node.js and MongoDB. These efforts aim to improve the scalability of the OpenHIM, and allow for more secure handling of payloads using fewer resources in support of the rollout and ongoing maintenance of OpenHIM implementations."),Object(o.b)("h4",{id:"support-and-maintenance"},"Support and Maintenance"),Object(o.b)("p",null,"This covers ongoing support for OpenHIM implementations and the user community, including updates to OpenHIM deployment processes and end user documentation, support channels and tutorials that allow implementers to more easily and effectively set up, configure and maintain their instances of the OpenHIM."),Object(o.b)("h3",{id:"timeline"},"Timeline"),Object(o.b)("img",{alt:"OpenHIM Roadmap",src:Object(i.a)("img/roadmap.png")}),Object(o.b)("h3",{id:"milestones-and-deadlines"},"Milestones and Deadlines"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Milestone"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Due Date (Proposed)"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Status"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"OpenHIM version release"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"June 2021"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TODO")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mapping Mediator version release"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"June 2021"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TODO")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DHIS2 Tracker Mediators version release"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"September 2021"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TODO")))))}s.isMDXComponent=!0},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,b=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},562:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(23),a=n(563);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,d=o.absolute,p=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},563:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);
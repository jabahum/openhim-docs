(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return h}));var r=n(1),o=n(9),i=(n(0),n(382)),a=n(388),s={id:"mhero",title:"mHero",sidebar_label:"mHero",keywords:["OpenHIM","mHero"],description:"Mobile Health Worker Electronic Response and Outreach"},c={id:"version-5.2.x/implementations/mhero",title:"mHero",description:"Mobile Health Worker Electronic Response and Outreach",source:"@site/versioned_docs/version-5.2.x/implementations/mhero.md",permalink:"/docs/implementations/mhero",version:"5.2.x",sidebar_label:"mHero",sidebar:"version-5.2.x/docs",previous:{title:"DATIM",permalink:"/docs/implementations/datim"},next:{title:"MomConnect",permalink:"/docs/implementations/momconnect"}},l=[{value:"How the OpenHIM is used",id:"how-the-openhim-is-used",children:[]}],u={rightToc:l};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Mobile Health Worker Electronic Response and Outreach (mHero) harnesses the power of mobile technology to reach frontline health workers. It is a two-way, mobile phone-based communication system that uses basic text messaging, or SMS, to connect ministries of health and health workers. mHero was rapidly developed in August 2014 to support health-sector communication during the Ebola outbreak in Liberia and is being extended for use in Sierra Leone, Guinea and Mali."),Object(i.b)("p",null,"Health officials can use mHero to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Communicate critical messages to health workers during a crisis or emergency response."),Object(i.b)("li",{parentName:"ul"},"Target messages to health workers based on cadre, location, or skill set."),Object(i.b)("li",{parentName:"ul"},"Collect critical information that powers resilient health systems, including stock levels, routine and one-time assessments, and validation of health worker and facility data."),Object(i.b)("li",{parentName:"ul"},"Provide care reminders and manage client referrals to strengthen clinical support.")),Object(i.b)("p",null,"For more information please see the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.mhero.org"}),"mHero")," website."),Object(i.b)("h2",{id:"how-the-openhim-is-used"},"How the OpenHIM is used"),Object(i.b)("p",null,"mHero is not a new technology. It\u2019s a way to connect data from existing health information systems to allow for targeted, real-time communication. mHero brings together existing components of a country\u2019s health information system using open international interoperability standards for health information exchange. The OpenHIM is deployed as the interoperability layer that connects the following systems:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"DHIS2 houses information on service delivery statistics and facilities"),Object(i.b)("li",{parentName:"ul"},"iHRIS houses information on health workers, including their mobile phone numbers"),Object(i.b)("li",{parentName:"ul"},"SMS messages are developed and tested in RapidPro"),Object(i.b)("li",{parentName:"ul"},"DHIS2 and iHRIS are connected through the health worker registry, which connects to RapidPro through the OpenHIM")),Object(i.b)("img",{alt:"mhero architecture",src:Object(a.a)("img/mhero/mhero-diagram.png")}),Object(i.b)("p",null,"Within the context of mHero, the OpenHIM performs a few vital functions."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It triggers the synchronization between RapidPro and the OpenInfoMan."),Object(i.b)("li",{parentName:"ul"},"It provides visibility into the messages being exchanged. This allows the user to ensure that the data exchange is occurring correctly."),Object(i.b)("li",{parentName:"ul"},"It ensures that the communication between components occurs securely and it logs the transactions for historical and audit purposes."),Object(i.b)("li",{parentName:"ul"},"It provides authentication and authorisation mechanisms to control access to the OpenInfoMan documents")),Object(i.b)("p",null,"The OpenHIM provides polling channels to trigger the synchronization between RapidPro and the OpenInfoMan. These polling channels execute periodically and trigger an mHero mediator which in turn pulls data out of the OpenInfoMan and pushes it into RapidPro. To learn more about polling channels please see the OpenHIM docs here."),Object(i.b)("p",null,"The OpenHIM provides a web console that enables the user to view these synchronization message. This enables any problems to be debugged effectively and provides confidence that the synchronization is working effectively."),Object(i.b)("p",null,"The OpenHIM was designed to protect an HIE by providing mechanisms to secure transactions between various components of the HIE. It can ensure that requests that access certain OpenInfoMan documents come from known and authorised sources."),Object(i.b)("p",null,"Within mHero, the OpenInfoMan contains a number of documents which contain health worker and facility information. The OpenHIM prevents unauthorised access to these documents by implementing a role-based access control mechanism. This allows documents with sensitive information to be secured and documents with non-sensitive information to be as open and accessible as necessary."))}h.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},h=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),m=r,d=h["".concat(a,".").concat(m)]||h[m]||p[m]||i;return n?o.a.createElement(d,s({ref:t},l,{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},387:function(e,t,n){"use strict";var r=n(0),o=n(53);t.a=function(){return Object(r.useContext)(o.a)}},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(389);var r=n(387);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},389:function(e,t,n){"use strict";var r=n(20),o=n(36),i=n(390),a="".startsWith;r(r.P+r.F*n(391)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return a?a.call(t,r,n):t.slice(n,n+r.length)===r}})},390:function(e,t,n){var r=n(75),o=n(25);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},391:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);
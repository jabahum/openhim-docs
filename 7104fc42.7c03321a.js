(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(1),r=(n(0),n(382)),a=n(387);const i={id:"mhero",title:"mHero",sidebar_label:"mHero",keywords:["OpenHIM","mHero"],description:"Mobile Health Worker Electronic Response and Outreach"},s={id:"version-5.2.x/implementations/mhero",title:"mHero",description:"Mobile Health Worker Electronic Response and Outreach",source:"@site/versioned_docs/version-5.2.x/implementations/mhero.md",permalink:"/docs/implementations/mhero",version:"5.2.x",sidebar_label:"mHero",sidebar:"version-5.2.x/docs",previous:{title:"DATIM",permalink:"/docs/implementations/datim"},next:{title:"MomConnect",permalink:"/docs/implementations/momconnect"}},c=[{value:"How the OpenHIM is used",id:"how-the-openhim-is-used",children:[]}],l={rightToc:c},h="wrapper";function u({components:e,...t}){return Object(r.b)(h,Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Mobile Health Worker Electronic Response and Outreach (mHero) harnesses the power of mobile technology to reach frontline health workers. It is a two-way, mobile phone-based communication system that uses basic text messaging, or SMS, to connect ministries of health and health workers. mHero was rapidly developed in August 2014 to support health-sector communication during the Ebola outbreak in Liberia and is being extended for use in Sierra Leone, Guinea and Mali."),Object(r.b)("p",null,"Health officials can use mHero to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Communicate critical messages to health workers during a crisis or emergency response."),Object(r.b)("li",{parentName:"ul"},"Target messages to health workers based on cadre, location, or skill set."),Object(r.b)("li",{parentName:"ul"},"Collect critical information that powers resilient health systems, including stock levels, routine and one-time assessments, and validation of health worker and facility data."),Object(r.b)("li",{parentName:"ul"},"Provide care reminders and manage client referrals to strengthen clinical support.")),Object(r.b)("p",null,"For more information please see the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.mhero.org"}),"mHero")," website."),Object(r.b)("h2",{id:"how-the-openhim-is-used"},"How the OpenHIM is used"),Object(r.b)("p",null,"mHero is not a new technology. It\u2019s a way to connect data from existing health information systems to allow for targeted, real-time communication. mHero brings together existing components of a country\u2019s health information system using open international interoperability standards for health information exchange. The OpenHIM is deployed as the interoperability layer that connects the following systems:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"DHIS2 houses information on service delivery statistics and facilities"),Object(r.b)("li",{parentName:"ul"},"iHRIS houses information on health workers, including their mobile phone numbers"),Object(r.b)("li",{parentName:"ul"},"SMS messages are developed and tested in RapidPro"),Object(r.b)("li",{parentName:"ul"},"DHIS2 and iHRIS are connected through the health worker registry, which connects to RapidPro through the OpenHIM")),Object(r.b)("img",{alt:"mhero architecture",src:Object(a.a)("img/mhero/mhero-diagram.png")}),Object(r.b)("p",null,"Within the context of mHero, the OpenHIM performs a few vital functions."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It triggers the synchronization between RapidPro and the OpenInfoMan."),Object(r.b)("li",{parentName:"ul"},"It provides visibility into the messages being exchanged. This allows the user to ensure that the data exchange is occurring correctly."),Object(r.b)("li",{parentName:"ul"},"It ensures that the communication between components occurs securely and it logs the transactions for historical and audit purposes."),Object(r.b)("li",{parentName:"ul"},"It provides authentication and authorisation mechanisms to control access to the OpenInfoMan documents")),Object(r.b)("p",null,"The OpenHIM provides polling channels to trigger the synchronization between RapidPro and the OpenInfoMan. These polling channels execute periodically and trigger an mHero mediator which in turn pulls data out of the OpenInfoMan and pushes it into RapidPro. To learn more about polling channels please see the OpenHIM docs here."),Object(r.b)("p",null,"The OpenHIM provides a web console that enables the user to view these synchronization message. This enables any problems to be debugged effectively and provides confidence that the synchronization is working effectively."),Object(r.b)("p",null,"The OpenHIM was designed to protect an HIE by providing mechanisms to secure transactions between various components of the HIE. It can ensure that requests that access certain OpenInfoMan documents come from known and authorised sources."),Object(r.b)("p",null,"Within mHero, the OpenInfoMan contains a number of documents which contain health worker and facility information. The OpenHIM prevents unauthorised access to these documents by implementing a role-based access control mechanism. This allows documents with sensitive information to be secured and documents with non-sensitive information to be as open and accessible as necessary."))}u.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o),a=r.a.createContext({}),i=function(e){var t=r.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return r.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),h=i(n),u=o,m=h[s+"."+u]||h[u]||l[u]||a;return n?r.a.createElement(m,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},386:function(e,t,n){"use strict";var o=n(0),r=n(52);t.a=function(){return Object(o.useContext)(r.a)}},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(388);var o=n(386);function r(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},388:function(e,t,n){"use strict";var o=n(20),r=n(36),a=n(389),i="".startsWith;o(o.P+o.F*n(390)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return i?i.call(t,o,n):t.slice(n,n+o.length)===o}})},389:function(e,t,n){var o=n(72),r=n(25);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},390:function(e,t,n){var o=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);
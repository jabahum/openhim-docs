(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),a=n(6),r=(n(0),n(338)),i=n(348),s={id:"mhero",title:"mHero",sidebar_label:"mHero",keywords:["OpenHIM","mHero"],description:"Mobile Health Worker Electronic Response and Outreach"},c=[{value:"How the OpenHIM is used",id:"how-the-openhim-is-used",children:[]}],l={id:"implementations/mhero",title:"mHero",description:"Mobile Health Worker Electronic Response and Outreach",source:"@site/docs/implementations/mhero.md",permalink:"/docs/next/implementations/mhero",version:"next",sidebar_label:"mHero",sidebar:"docs",previous:{title:"DATIM",permalink:"/docs/next/implementations/datim"},next:{title:"MomConnect",permalink:"/docs/next/implementations/momconnect"}},h={rightToc:c,metadata:l},m="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(m,Object(o.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Mobile Health Worker Electronic Response and Outreach (mHero) harnesses the power of mobile technology to reach frontline health workers. It is a two-way, mobile phone-based communication system that uses basic text messaging, or SMS, to connect ministries of health and health workers. mHero was rapidly developed in August 2014 to support health-sector communication during the Ebola outbreak in Liberia and is being extended for use in Sierra Leone, Guinea and Mali."),Object(r.b)("p",null,"Health officials can use mHero to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Communicate critical messages to health workers during a crisis or emergency response."),Object(r.b)("li",{parentName:"ul"},"Target messages to health workers based on cadre, location, or skill set."),Object(r.b)("li",{parentName:"ul"},"Collect critical information that powers resilient health systems, including stock levels, routine and one-time assessments, and validation of health worker and facility data."),Object(r.b)("li",{parentName:"ul"},"Provide care reminders and manage client referrals to strengthen clinical support.")),Object(r.b)("p",null,"For more information please see the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.mhero.org"}),"mHero")," website."),Object(r.b)("h2",{id:"how-the-openhim-is-used"},"How the OpenHIM is used"),Object(r.b)("p",null,"mHero is not a new technology. It\u2019s a way to connect data from existing health information systems to allow for targeted, real-time communication. mHero brings together existing components of a country\u2019s health information system using open international interoperability standards for health information exchange. The OpenHIM is deployed as the interoperability layer that connects the following systems:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"DHIS2 houses information on service delivery statistics and facilities"),Object(r.b)("li",{parentName:"ul"},"iHRIS houses information on health workers, including their mobile phone numbers"),Object(r.b)("li",{parentName:"ul"},"SMS messages are developed and tested in RapidPro"),Object(r.b)("li",{parentName:"ul"},"DHIS2 and iHRIS are connected through the health worker registry, which connects to RapidPro through the OpenHIM")),Object(r.b)("img",{alt:"mhero architecture",src:Object(i.a)("img/mhero/mhero-diagram.png")}),Object(r.b)("p",null,"Within the context of mHero, the OpenHIM performs a few vital functions."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It triggers the synchronization between RapidPro and the OpenInfoMan."),Object(r.b)("li",{parentName:"ul"},"It provides visibility into the messages being exchanged. This allows the user to ensure that the data exchange is occurring correctly."),Object(r.b)("li",{parentName:"ul"},"It ensures that the communication between components occurs securely and it logs the transactions for historical and audit purposes."),Object(r.b)("li",{parentName:"ul"},"It provides authentication and authorisation mechanisms to control access to the OpenInfoMan documents")),Object(r.b)("p",null,"The OpenHIM provides polling channels to trigger the synchronization between RapidPro and the OpenInfoMan. These polling channels execute periodically and trigger an mHero mediator which in turn pulls data out of the OpenInfoMan and pushes it into RapidPro. To learn more about polling channels please see the OpenHIM docs here."),Object(r.b)("p",null,"The OpenHIM provides a web console that enables the user to view these synchronization message. This enables any problems to be debugged effectively and provides confidence that the synchronization is working effectively."),Object(r.b)("p",null,"The OpenHIM was designed to protect an HIE by providing mechanisms to secure transactions between various components of the HIE. It can ensure that requests that access certain OpenInfoMan documents come from known and authorised sources."),Object(r.b)("p",null,"Within mHero, the OpenInfoMan contains a number of documents which contain health worker and facility information. The OpenHIM prevents unauthorised access to these documents by implementing a role-based access control mechanism. This allows documents with sensitive information to be secured and documents with non-sensitive information to be as open and accessible as necessary."))}u.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o),r=a.a.createContext({}),i=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),h=i(n),m=o,u=h[s+"."+m]||h[m]||l[m]||r;return n?a.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},342:function(e,t,n){"use strict";var o=n(0),a=n(35);t.a=function(){return Object(o.useContext)(a.a)}},348:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(342);function a(e){const{siteConfig:t}=Object(o.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);
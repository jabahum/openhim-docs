(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));n(0);var o=n(292);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const r={id:"mhero",title:"mHero",sidebar_label:"mHero"},i=[{value:"How the OpenHIM is used",id:"how-the-openhim-is-used",children:[]}],s={rightToc:i},c="wrapper";function l({components:e,...t}){return Object(o.b)(c,a({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Mobile Health Worker Electronic Response and Outreach (mHero) harnesses the power of mobile technology to reach frontline health workers. It is a two-way, mobile phone-based communication system that uses basic text messaging, or SMS, to connect ministries of health and health workers. mHero was rapidly developed in August 2014 to support health-sector communication during the Ebola outbreak in Liberia and is being extended for use in Sierra Leone, Guinea and Mali."),Object(o.b)("p",null,"Health officials can use mHero to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Communicate critical messages to health workers during a crisis or emergency response."),Object(o.b)("li",{parentName:"ul"},"Target messages to health workers based on cadre, location, or skill set."),Object(o.b)("li",{parentName:"ul"},"Collect critical information that powers resilient health systems, including stock levels, routine and one-time assessments, and validation of health worker and facility data."),Object(o.b)("li",{parentName:"ul"},"Provide care reminders and manage client referrals to strengthen clinical support.")),Object(o.b)("p",null,"For more information please see the ",Object(o.b)("a",a({parentName:"p"},{href:"http://www.mhero.org"}),"mHero")," website."),Object(o.b)("h2",{id:"how-the-openhim-is-used"},"How the OpenHIM is used"),Object(o.b)("p",null,"mHero is not a new technology. It\u2019s a way to connect data from existing health information systems to allow for targeted, real-time communication. mHero brings together existing components of a country\u2019s health information system using open international interoperability standards for health information exchange. The OpenHIM is deployed as the interoperability layer that connects the following systems:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"DHIS2 houses information on service delivery statistics and facilities"),Object(o.b)("li",{parentName:"ul"},"iHRIS houses information on health workers, including their mobile phone numbers"),Object(o.b)("li",{parentName:"ul"},"SMS messages are developed and tested in RapidPro"),Object(o.b)("li",{parentName:"ul"},"DHIS2 and iHRIS are connected through the health worker registry, which connects to RapidPro through the OpenHIM")),Object(o.b)("p",null,Object(o.b)("img",a({parentName:"p"},{src:"assets/mhero/mhero-diagram.png",alt:"mhero architecture"}))),Object(o.b)("p",null,"Within the context of mHero, the OpenHIM performs a few vital functions."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It triggers the synchronization between RapidPro and the OpenInfoMan."),Object(o.b)("li",{parentName:"ul"},"It provides visibility into the messages being exchanged. This allows the user to ensure that the data exchange is occurring correctly."),Object(o.b)("li",{parentName:"ul"},"It ensures that the communication between components occurs securely and it logs the transactions for historical and audit purposes."),Object(o.b)("li",{parentName:"ul"},"It provides authentication and authorisation mechanisms to control access to the OpenInfoMan documents")),Object(o.b)("p",null,"The OpenHIM provides polling channels to trigger the synchronization between RapidPro and the OpenInfoMan. These polling channels execute periodically and trigger an mHero mediator which in turn pulls data out of the OpenInfoMan and pushes it into RapidPro. To learn more about polling channels please see the OpenHIM docs here."),Object(o.b)("p",null,"The OpenHIM provides a web console that enables the user to view these synchronization message. This enables any problems to be debugged effectively and provides confidence that the synchronization is working effectively."),Object(o.b)("p",null,"The OpenHIM was designed to protect an HIE by providing mechanisms to secure transactions between various components of the HIE. It can ensure that requests that access certain OpenInfoMan documents come from known and authorised sources."),Object(o.b)("p",null,"Within mHero, the OpenInfoMan contains a number of documents which contain health worker and facility information. The OpenHIM prevents unauthorised access to these documents by implementing a role-based access control mechanism. This allows documents with sensitive information to be secured and documents with non-sensitive information to be as open and accessible as necessary."))}l.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o),r=a.a.createContext({}),i=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),h=i(n),u=o,p=h[s+"."+u]||h[u]||l[u]||r;return n?a.a.createElement(p,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(p,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
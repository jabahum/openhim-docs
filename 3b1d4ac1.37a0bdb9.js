(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{198:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(556)),a={id:"momconnect",title:"MomConnect",sidebar_label:"MomConnect",keywords:["OpenHIM","Momconnect"],description:"Momconnect OpenHIM implementation"},c={unversionedId:"implementations/momconnect",id:"version-5.2.x/implementations/momconnect",isDocsHomePage:!1,title:"MomConnect",description:"Momconnect OpenHIM implementation",source:"@site/versioned_docs/version-5.2.x/implementations/momconnect.md",slug:"/implementations/momconnect",permalink:"/docs/5.2.x/implementations/momconnect",version:"5.2.x",sidebar_label:"MomConnect",sidebar:"version-5.2.x/docs",previous:{title:"mHero",permalink:"/docs/5.2.x/implementations/mhero"},next:{title:"OpenHIE",permalink:"/docs/5.2.x/implementations/openhie"}},s=[{value:"How the OpenHIM is used",id:"how-the-openhim-is-used",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"MomConnect is a South African National Department of Health (NDoH) initiative to use cellphone SMS technology to register every pregnant woman in South Africa."),Object(i.b)("p",null,"Once enrolled the system will send each mother stage-based messages to support her and her baby during the course of her pregnancy, childbirth and up to the child\u2019s first birthday."),Object(i.b)("p",null,"The system will also be used to provide feedback (rating, compliments and complaints) about public health services to a central communication centre."),Object(i.b)("p",null,"MomConnect aims to strengthen demand and accountability of Maternal and Child Health services in order to improve access, coverage and quality of care for mothers and their children in the community."),Object(i.b)("h2",{id:"how-the-openhim-is-used"},"How the OpenHIM is used"),Object(i.b)("p",null,"The OpenHIM is used to provide security and visibility into the MomConnect HIE. It also provides a number of orchestration and transformation service to enable pregnancies to be registered correctly in a pregnancy register. Alerting and reporting services are also provided to ensure that the HIE is running smoothly on a day-to-day basis."))}p.isMDXComponent=!0},556:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,b=m["".concat(a,".").concat(d)]||m[d]||u[d]||i;return t?o.a.createElement(b,c(c({ref:n},l),{},{components:t})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
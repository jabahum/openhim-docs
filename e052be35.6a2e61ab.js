(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{401:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(438)),o={id:"auditing",title:"Auditing",sidebar_label:"Auditing",keywords:["OpenHIM","Auditing"],description:"Auditing on the OpenHIM"},c={unversionedId:"user-guide/auditing",id:"version-5.2.x/user-guide/auditing",isDocsHomePage:!1,title:"Auditing",description:"Auditing on the OpenHIM",source:"@site/versioned_docs/version-5.2.x/user-guide/auditing.md",slug:"/user-guide/auditing",permalink:"/docs/5.2.x/user-guide/auditing",version:"5.2.x",sidebar_label:"Auditing",sidebar:"version-5.2.x/docs",previous:{title:"OpenHIM Core versioning and compatibility",permalink:"/docs/5.2.x/user-guide/openhim-core-versioning-and-compatibility"},next:{title:"Design overview",permalink:"/docs/5.2.x/dev-guide/design-overview"}},p=[{value:"ATNA Audit Repository",id:"atna-audit-repository",children:[]},{value:"ATNA Audit Events",id:"atna-audit-events",children:[]}],u={toc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"atna-audit-repository"},"ATNA Audit Repository"),Object(a.b)("p",null,"The OpenHIM provides full support as an Audit Repository actor in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://wiki.ihe.net/index.php?title=Audit_Trail_and_Node_Authentication"}),"IHE ATNA profile"),"."),Object(a.b)("p",null,"You can make use of this functionality by enabling any of the audit servers in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/config/default.json#L111-L125"}),"config")," before starting up the OpenHIM-core:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"auditing": {\n  "servers": {\n    "udp": {\n      "enabled": true,\n      "port": 5050\n    },\n    "tls": {\n      "enabled": true,\n      "port": 5051\n    },\n    "tcp": {\n      "enabled": true,\n      "port": 5052\n    }\n  },\n  ...\n}\n')),Object(a.b)("p",null,"The OpenHIM supports both RFC3881 and DICOM formatted audit events."),Object(a.b)("p",null,"The OpenHIM-console has an audit viewer available on the 'Audit Log' page."),Object(a.b)("h2",{id:"atna-audit-events"},"ATNA Audit Events"),Object(a.b)("p",null,"The OpenHIM will generate audit events on application start, stop, and user authentication. These events can either be sent to the OpenHIM's own internal audit repository, or to an external repository. This can be setup in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/config/default.json#L111-L116"}),"config")," by choosing an appropriate ",Object(a.b)("inlineCode",{parentName:"p"},"interface"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"auditEvents": {\n  "interface": "tls",\n  "host": "192.168.1.11",\n  "port": 8888\n}\n')),Object(a.b)("p",null,"Options for the interface are: ",Object(a.b)("inlineCode",{parentName:"p"},"internal"),", ",Object(a.b)("inlineCode",{parentName:"p"},"udp"),", ",Object(a.b)("inlineCode",{parentName:"p"},"tls")," and ",Object(a.b)("inlineCode",{parentName:"p"},"tcp"),". The host and port do not need to be set for the ",Object(a.b)("inlineCode",{parentName:"p"},"internal")," interface."),Object(a.b)("p",null,"Note that audit events are generated in RFC3881 format, but see our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-mediator-RFC3881toDICOM"}),"RFC3881 to DICOM Mediator")," for converting to DICOM."))}s.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,f=d["".concat(o,".").concat(b)]||d[b]||l[b]||a;return n?i.a.createElement(f,c(c({ref:t},u),{},{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
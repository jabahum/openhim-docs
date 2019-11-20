(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));n(327),n(12),n(53),n(331),n(333),n(0);var r=n(292);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={id:"design-overview",title:"Design overview",sidebar_label:"Design overview"},o=[{value:"Key Requirements",id:"key-requirements",children:[]},{value:"The architecture",id:"the-architecture",children:[{value:"The core (thin proxy) component",id:"the-core-thin-proxy-component",children:[]},{value:"Administration Console",id:"administration-console",children:[]},{value:"Mediators",id:"mediators",children:[]}]}],s={rightToc:o},c="wrapper";function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(c,a({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section describes the architectural design of an Interoperability Layer for use within the ",Object(r.b)("a",a({parentName:"p"},{href:"https://ohie.org/"}),"OpenHIE project")," (The OpenHIM is a reference implementation of an OpenHIE Interoperability Layer). It describes the key components that should make up an interoperability layer and how this relates to the other services that are used in OpenHIE."),Object(r.b)("p",null,"Conceptually, the OpenHIM consists of the following three components:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Core (thin proxy)"),Object(r.b)("li",{parentName:"ol"},"Administration Console"),Object(r.b)("li",{parentName:"ol"},"Mediators including orchestrators and adapter services")),Object(r.b)("h2",{id:"key-requirements"},"Key Requirements"),Object(r.b)("p",null,"The full set of requirements that the Interoperability Layer community have identified can be found here: ",Object(r.b)("a",a({parentName:"p"},{href:"https://wiki.ohie.org/display/SUB/Interoperability+Layer+-+Use+Cases+and+Requirements"}),"Interoperability Layer - Use Cases and Requirements")),Object(r.b)("p",null,"The following is a list of key requirements that are seen as necessary for any type of interoperability layer:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Provide a central point for authentication and authorization to the HIE services."),Object(r.b)("li",{parentName:"ul"},"Log, audit and monitor communications for the components of the HIE."),Object(r.b)("li",{parentName:"ul"},"Provide error management and transaction monitoring information to the administrators of the HIE."),Object(r.b)("li",{parentName:"ul"},"Provide transaction orchestration services as well as adapter services to transform message between different message formats.")),Object(r.b)("p",null,"The defined set of requirements for Version 4.0.0 of the OpenHIM can be found here: OpenHIM V4.0.0 Functional and Technical Specification (",Object(r.b)("a",a({parentName:"p"},{href:"https://docs.google.com/document/d/1w8F7bndVEcaM62BJ4T921JGFLnhUF4jAZP2sNnCQUzY/edit#"}),"https://docs.google.com/document/d/1w8F7bndVEcaM62BJ4T921JGFLnhUF4jAZP2sNnCQUzY/edit#"),")"),Object(r.b)("h2",{id:"the-architecture"},"The architecture"),Object(r.b)("p",null,"Below, the architecture of the Interoperability Layer is shown in the context of the other expected services and registries."),Object(r.b)("p",null,Object(r.b)("img",a({parentName:"p"},{src:"assets/design/Central-HIM-componentv2.png",alt:"Central HIM component"}))),Object(r.b)("h3",{id:"the-core-thin-proxy-component"},"The core (thin proxy) component"),Object(r.b)("p",null,"The core provides the key functions and services required for an interoperability layer. These functions are useful in a service-oriented architecture (SOA) environment, which is essentially a collection of services that communicate with each other."),Object(r.b)("p",null,"This component can be thought of as the entry point into the HIE. It provides some common mundane services so that other domain services don't have to implement these. This component essentially acts as a web service proxy while performing some additional functions on the incoming requests. It makes use of several other services in order to perform the functions mentioned below:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Authorisation and Authentication - This service ensures that the client (human user or system) requesting or submitting information is known to the HIE and has the correct privileges or permissions to do so."),Object(r.b)("li",{parentName:"ul"},"Log Service - This service stores each message in its entirety along with metadata about the message, such as who sent it, time and date the message was received, and the response that the service returned, as well as error information if available."),Object(r.b)("li",{parentName:"ul"},"Audit service - This service audits each message received by storing an audit log entry. This log entry contains certain key information such as who sent the message, what information was requested and when the information was requested."),Object(r.b)("li",{parentName:"ul"},"Basic Routing - A routing mechanism that routes requests received to the correct upstream service. The router makes use of a publish and subscribe pattern so that messages can be routed to multiple interested parties. This allows for the secondary use of the messages received by the system. For example, an encounter message could be routed to the Shared Health Record (SHR) as well as an aggregation service where they could be aggregated and submitted to an aggregate data store such as a data warehouse.")),Object(r.b)("p",null,"The interoperability layer and system that it connects to will make use of the ",Object(r.b)("a",a({parentName:"p"},{href:"http://wiki.ihe.net/index.php?title=Audit_Trail_and_Node_Authentication"}),"IHE ATNA profile"),"'s node authentication section for authentication. For authorization the provider registry will maintain a list of provider authorities and the interoperability layer will check these during orchestration of each transaction."),Object(r.b)("p",null,"Derek Ritz has put together a great slideshow to show how authorization and authentication will be handled within OpenHIE. Please see this resource here: ",Object(r.b)("a",a({parentName:"p"},{href:"https://wiki.ohie.org/download/attachments/11370499/13-10-16%20authentication%20and%20authorization.pptx?version=1&modificationDate=1381995929235&api=v2"}),"authentication and authorization slideshow"),"."),Object(r.b)("h3",{id:"administration-console"},"Administration Console"),Object(r.b)("p",null,"The console is an interactive web application which allows the system administrator to configure the OpenHIM core and carry out maintenance and monitoring of the transactions passing through the channels. The main functions of the OpenHIM console are to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create and manage users and adjust their group membership"),Object(r.b)("li",{parentName:"ul"},"Configure clients, channels, and routes"),Object(r.b)("li",{parentName:"ul"},"Monitor transactions"),Object(r.b)("li",{parentName:"ul"},"View an audit log of the system interactions"),Object(r.b)("li",{parentName:"ul"},"Manage errors by allowing an administrator to re-run failed transactions individually or in bulk")),Object(r.b)("h3",{id:"mediators"},"Mediators"),Object(r.b)("p",null,"Mediation refers to the processing of data so that it can be communicated from one interface to another. OpenHIM mediators are separate services that run independently from the OpenHIM core and perform additional mediation tasks for a particular use case. They are often implementation specific, designed and built to meet a specific need. Each of these components are separate, independent services that perform a specific function following the micro services architecture (",Object(r.b)("a",a({parentName:"p"},{href:"http://yobriefca.se/blog/2013/04/29/micro-service-architecture/"}),"click here for additional information about micro service architectures"),")."),Object(r.b)("p",null,"There are three types of mediators:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Pass-through mediator - Accepts a request and passes it on unchanged."),Object(r.b)("li",{parentName:"ul"},"Adaptor mediator - This service type adapts an incoming request to a form that the intended recipient of the request can understand: it accepts a request and transforms/adapts the request into another format before sending the request on to its final destination e.g. HL7 v2 to HL7 v3 or MHD to XDS.b. They are used to simplify communication with the domain services (for orchestrator use) and to adapt a standards-based interface to a custom domain service interface (or vice versa)."),Object(r.b)("li",{parentName:"ul"},"Orchestration mediator - This service type enables a business process to be executed: this normally involves one or more additional services being invoked to process the required transaction. It accepts a request and uses that request to execute a business function that may need to call out to other service endpoints on other systems e.g. enriching a message with a client\u2019s unique identifier retrieved from a client registry.")),Object(r.b)("p",null,"These services are invoked whenever there is a need to orchestrate or adapt a certain transaction. Both the orchestrator and adapter services are also expected to log and audit messages that they send out to the domain services. If they are not needed the core interoperability layer component will just call the domain service directly. Orchestrators may use other adapters to send messages to other services. Designing these orchestrators and adapters as independent services allow for additional logic or business processes to be added as the need arises. This allows the solution architecture to adapt and grow as the environment changes."),Object(r.b)("p",null,'Mediators can be built using any desired platform or any language fit for the requirement. The OpenHIM core defines the interfaces that the mediators are able to use to communicate and exchange metadata with the core, both at a transaction-level as well as general configuration for the mediator. Mediators can also use these interfaces to send their "availability" status to the Core for monitoring purposes.'))}l.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),i=a.a.createContext({}),o=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=o(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),h=o(n),u=r,d=h[s+"."+u]||h[u]||l[u]||i;return n?a.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(d,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},327:function(e,t,n){var r=n(51);r(r.S+r.F,"Object",{assign:n(328)})},328:function(e,t,n){"use strict";var r=n(13),a=n(34),i=n(329),o=n(330),s=n(52),c=n(54),l=Object.assign;e.exports=!l||n(33)((function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=r}))?function(e,t){for(var n=s(e),l=arguments.length,h=1,u=i.f,d=o.f;l>h;)for(var p,m=c(arguments[h++]),b=u?a(m).concat(u(m)):a(m),f=b.length,g=0;f>g;)p=b[g++],r&&!d.call(m,p)||(n[p]=m[p]);return n}:l},329:function(e,t){t.f=Object.getOwnPropertySymbols},330:function(e,t){t.f={}.propertyIsEnumerable},331:function(e,t,n){"use strict";var r=n(332),a={};a[n(11)("toStringTag")]="z",a+""!="[object z]"&&n(19)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},332:function(e,t,n){var r=n(55),a=n(11)("toStringTag"),i="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),a))?n:i?r(t):"Object"==(o=r(t))&&"function"==typeof t.callee?"Arguments":o}},333:function(e,t,n){var r=n(52),a=n(34);n(334)("keys",(function(){return function(e){return a(r(e))}}))},334:function(e,t,n){var r=n(51),a=n(18),i=n(33);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],o={};o[e]=t(n),r(r.S+r.F*i((function(){n(1)})),"Object",o)}}}]);
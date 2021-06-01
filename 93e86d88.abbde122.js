(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{374:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(556)),o=a(562),s={id:"about",hide_title:!0,title:"About the OpenHIM",sidebar_label:"About the OpenHIM",keywords:["OpenHIM","About"],description:"About the OpenHIM"},c={unversionedId:"introduction/about",id:"version-5.4.x/introduction/about",isDocsHomePage:!1,title:"About the OpenHIM",description:"About the OpenHIM",source:"@site/versioned_docs/version-5.4.x/introduction/about.md",slug:"/introduction/about",permalink:"/docs/5.4.x/introduction/about",version:"5.4.x",sidebar_label:"About the OpenHIM",sidebar:"version-5.4.x/docs",next:{title:"Key Components and What They Do",permalink:"/docs/5.4.x/introduction/key-components"}},l=[{value:"Ok. But, what does the OpenHIM actually do?",id:"ok-but-what-does-the-openhim-actually-do",children:[]},{value:"What are the benefits of using the OpenHIM?",id:"what-are-the-benefits-of-using-the-openhim",children:[]},{value:"Where is the OpenHIM used?",id:"where-is-the-openhim-used",children:[]},{value:"Components of the OpenHIM",id:"components-of-the-openhim",children:[{value:"The OpenHIM Core",id:"the-openhim-core",children:[]},{value:"OpenHIM Administration Console",id:"openhim-administration-console",children:[]},{value:"Mediators",id:"mediators",children:[]}]},{value:"Funders",id:"funders",children:[]},{value:"Development Partners",id:"development-partners",children:[]},{value:"Other Partners",id:"other-partners",children:[]}],h={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("img",{alt:"OpenHIM",src:Object(o.a)("img/openhim-logo-green.svg")}),Object(i.b)("p",null,"The Open Health Information Mediator (OpenHIM) is an interoperability layer: a software component that enables easier interoperability between disparate electronic information systems by providing a central point where the exchange of data is managed. An interoperability layer receives transactions from different information systems and coordinates the interactions between them. The OpenHIM provides a layer of abstraction between systems that allows for the transformation of incoming messages to a form that the other system components expect and can support the business logic by orchestrating the transaction flow."),Object(i.b)("p",null,"The OpenHIM was initially developed by Jembi Health Systems in collaboration with the Health Architecture Laboratory ( HeAL) at the University of KwaZulu-Natal as part of the Rwanda Health Enterprise Architecture (RHEA) project, and formed the basis for Ryan Crichton\u2019s Master's thesis \u201c",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://researchspace.ukzn.ac.za/xmlui/handle/10413/12343"}),"The Open Health Information Mediator: an Architecture for Enabling Interoperability in Low to Middle Income Countries"),"\u201d. The OpenHIM is a current reference technology for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.ohie.org/display/SUB/Interoperability+Layer+Roadmap"}),"interoperability layer")," of the OpenHIE (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.ohie.org/display/documents/OpenHIE+Introduction"}),"Open Health Information Exchange"),"). It is supported through a number of implementation projects that drive its continuing development to meet real world needs."),Object(i.b)("p",null,"Some examples of common workflows that the OpenHIM can support to facilitate the sharing of health information within a Health Information Exchange are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Save a patient's clinical encounter to a shared health record so that authorised healthcare providers are able to access key clinical data that can inform better care"),Object(i.b)("li",{parentName:"ul"},"Retrieve relevant information about patient encounters and care plans for authorised healthcare providers"),Object(i.b)("li",{parentName:"ul"},"Receive aggregate reporting information from a client system and send this to an aggregate datastore"),Object(i.b)("li",{parentName:"ul"},"Manage health facilities"),Object(i.b)("li",{parentName:"ul"},"Manage patient demographics and identity to allow for the tracking of a patient\u2019s activity within and between healthcare organisations and across the continuum of care")),Object(i.b)("h2",{id:"ok-but-what-does-the-openhim-actually-do"},"Ok. But, what does the OpenHIM actually do?"),Object(i.b)("p",null,"The OpenHIM enables easier interoperability between systems by connecting all of the infrastructure services and client or point of service applications together. In the OpenHIE context, these systems are Health Information Systems (HISs) such as a client registry, worker registry, facility registry, shared health record, terminology service, etc."),Object(i.b)("img",{alt:"OpenHIE Architecture",src:Object(o.a)("img/overview/OpenHIEArchitecture.png")}),Object(i.b)("p",null,"The OpenHIM provides a single point of entry into the services of a health information exchange (HIE): it receives transactions from client systems, coordinates interaction between the different components of the HIE by routing requests to the correct orchestrator or registry, and provides the centralised common core functions to simplify data exchange."),Object(i.b)("p",null,"These core functions are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Standardised audit trail logging: each message that is received from a client should be logged (stored in its entirety with metadata) and audited (store key information about that transaction, who created it and when it was created)."),Object(i.b)("li",{parentName:"ul"},"Security Management: authentication and authorisation at a systems level"),Object(i.b)("li",{parentName:"ul"},"Console: this displays real time transaction details to enable a system administrator to monitor the operations of the HIE"),Object(i.b)("li",{parentName:"ul"},"Error Management: Provides the ability for a system administrator to resolve errors and re-run transactions")),Object(i.b)("p",null,"In addition, the OpenHIM can also provide additional mediation functions for transactions within the HIE in order to simplify the business logic required by client systems to interact with the HIE, making it easier and faster for these point of care applications to connect to the HIE. It provides an abstraction layer whereby the mediators can take complex messages and parse them into simpler sub-queries that are then directed to the appropriate registry or other component. The mediators can adapt an incoming request to a form that the intended recipient of the request can understand. Mediators can transform native messages into a standardised format that can be consumed by the registries, data warehouse or other services and thereby enable client systems that do not support a particular data exchange standard to still be able to interact with the HIE."),Object(i.b)("p",null,"The OpenHIM is also able to perform orchestration tasks for complex transactions so as to take the burden off client systems. Examples of orchestration could be the execution of a care plan or the validation of a patient identifier in a message against the Client Registry/Master Patient Index within the HIE. This orchestration may contact multiple service providers within the HIE on a client\u2019s behalf and compile an appropriate response to return to the client."),Object(i.b)("h2",{id:"what-are-the-benefits-of-using-the-openhim"},"What are the benefits of using the OpenHIM?"),Object(i.b)("p",null,"The OpenHIM acts as a central exchange that offers the following benefits:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It is an open source software application, with a zero cost licence (Mozilla Public License (MPL) version 2.0) and a publicly available codebase."),Object(i.b)("li",{parentName:"ul"},"It provides a single point of control within a Service Oriented Architecture (SOA), enabling:"),Object(i.b)("li",{parentName:"ul"},"Centralised security management:"),Object(i.b)("li",{parentName:"ul"},"Authentication to confirm a the identity of an individual user or client system"),Object(i.b)("li",{parentName:"ul"},"Authorisation to determine the user or client\u2019s privileges and access levels"),Object(i.b)("li",{parentName:"ul"},"Centralised certificate management which allows for easier setup and maintenance."),Object(i.b)("li",{parentName:"ul"},"Easy routing of messages between systems or system components."),Object(i.b)("li",{parentName:"ul"},"Centralised logging of all messages for auditing and reporting. This utilises ATNA and is compliant with international standards."),Object(i.b)("li",{parentName:"ul"},"Monitoring of transactions relating to performance, data synchronisation and system usage."),Object(i.b)("li",{parentName:"ul"},"Error management: Provides the ability for an administrator to review and bulk re-run requests or re-run individual requests, alleviating the need for point-of-service systems to re-send data."),Object(i.b)("li",{parentName:"ul"},"Alerting: User alerts can be configured to be sent when requests fail or a particular failure rate is exceeded. Users can be notified via email or SMS."),Object(i.b)("li",{parentName:"ul"},"The use of mediators for message transformation and orchestration. The OpenHIM provides a framework to add and manage your own custom implementation-specific mediators.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Transformation: Transforms messages received in one format into another format e.g. MHD to XDS.b or custom format to HL7v3."),Object(i.b)("li",{parentName:"ul"},"Orchestration: Ensures the correct workflow between the systems components."))),Object(i.b)("li",{parentName:"ul"},"The OpenHIM offers a publicly accessible mediator library for the re-use of ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://jembi.github.io/openhim-docs/mediator-library"}),"existing mediators"),"."),Object(i.b)("li",{parentName:"ul"},"The OpenHIM is configurable, providing the flexibility to support differing use cases."),Object(i.b)("li",{parentName:"ul"},"The OpenHIM supports interchangeability of components, allowing for easier swap-outs for new and improved technologies and helping to minimise vendor lock-in."),Object(i.b)("li",{parentName:"ul"},"The OpenHIM is scalable to handle large transaction loads. It supports same server and multi-server clusters."),Object(i.b)("li",{parentName:"ul"},"The OpenHIM allows messages to be easily intercepted for secondary use which is beneficial to enable additional functions as the HIE grows. For example, a patient encounter message could be routed to the SHR as well as to an aggregation service for submission to a data warehouse."),Object(i.b)("li",{parentName:"ul"},"The OpenHIM is easy to implement and manage on an operational basis.")),Object(i.b)("p",null,"As the OpenHIM provides these centralised services it means that domain services don\u2019t have to implement functionality to audit, log and authenticate messages, making it simpler, faster and more cost effective to develop, manage and maintain your system/s."),Object(i.b)("h2",{id:"where-is-the-openhim-used"},"Where is the OpenHIM used?"),Object(i.b)("p",null,"The OpenHIM has been implemented in a number of different projects, ranging from innovative prototypes to national level health systems strengthening projects. Read about some of these in our Implementation Case Studies."),Object(i.b)("h2",{id:"components-of-the-openhim"},"Components of the OpenHIM"),Object(i.b)("p",null,"The OpenHIM logically consists of three components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The OpenHIM Core provides the main functions and services"),Object(i.b)("li",{parentName:"ul"},"The Administration Console provides an easy to use interface for system administrators to configure and manage the OpenHIM, giving a window into the workings of the HIE."),Object(i.b)("li",{parentName:"ul"},"Mediators are additional services used to extend the functionality of the OpenHIM by transforming and orchestrating transactions.")),Object(i.b)("img",{alt:"OpenHIM Components",src:Object(o.a)("img/overview/OpenHIMComponents.png")}),Object(i.b)("h3",{id:"the-openhim-core"},"The OpenHIM Core"),Object(i.b)("p",null,"The OpenHIM Core provides the key functions and services required for an interoperability layer that are useful in a Service Oriented Architecture (SOA) environment. A service-oriented architecture is essentially a collection of services that communicate with each other. The communication can involve either simple data passing or it could involve two or more services coordinating an activity. The OpenHIM is used to connect these services to each other: it provides an interface that point of service applications (clients) are able to contact in order to reach the services provided in the SOA. You can think of this interface as a reverse proxy for your applications but with some special features."),Object(i.b)("p",null,"The functions of the OpenHIM Core are identified as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Basic Routing - A routing mechanism that routes requests received to the correct upstream service."),Object(i.b)("li",{parentName:"ul"},"Log Service and Audit Repository- This service stores each message in its entirety along with metadata about the message, such as the time and the date the message was received, who sent the message, what information was requested and the response that the service returned, as well as error information when available."),Object(i.b)("li",{parentName:"ul"},"Authorization and Authentication - The OpenHIM Core ensures that the client system requesting or submitting information is known and has the correct privileges to do so."),Object(i.b)("li",{parentName:"ul"},"Error Monitoring - Displaying and monitoring errors that occur between the services, including email and SMS alerting."),Object(i.b)("li",{parentName:"ul"},"Transaction ReRunning - Replays transactions by resending them to its target service(s). Transactions can also be rerun automatically if a service is unavailable."),Object(i.b)("li",{parentName:"ul"},"Transaction Metrics - Calculations of statistics such as the number of transactions in a specific period\nThe OpenHIM-core also provides a framework to add and manage your own implementation specific mediators in the system.")),Object(i.b)("h3",{id:"openhim-administration-console"},"OpenHIM Administration Console"),Object(i.b)("p",null,"The admin console is a web-based user interface that provides visual tools to assist administrators interacting with the OpenHIM Core for maintenance and monitoring. Administrators use the console to set up users and roles for the client systems that will be sending and receiving the information, and to configure the channels and routes that the information will pass through. Administrators can also monitor the OpenHIM transactions via the console and re-run failed transactions if necessary.\nThe main functions of the OpenHIM console are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Creation and management of client users and groups"),Object(i.b)("li",{parentName:"ul"},"Configuration of clients, channels and routes"),Object(i.b)("li",{parentName:"ul"},"Transaction monitoring"),Object(i.b)("li",{parentName:"ul"},"Auditing of system interactions"),Object(i.b)("li",{parentName:"ul"},"Error management")),Object(i.b)("h3",{id:"mediators"},"Mediators"),Object(i.b)("p",null,'OpenHIM mediators are separate micro services that run independently from the OpenHIM Core and perform additional mediation tasks for a particular use case. Mediators can be built using any platform or language fit for the requirement. The Core defines interfaces that mediators use to communicate and exchange metadata with the Core, both at a transaction-level as well as general configuration for the mediator. Mediators can also use these interfaces to send their "availability" status to Core for monitoring purposes.\nThere are three types of mediators:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pass-through mediator - Accepts a request and passes it on unchanged."),Object(i.b)("li",{parentName:"ul"},"Adaptor mediator - Accepts a request and transforms/adapts the request into another format before sending the request on to its final destination e.g. transform HL7 v2 to HL7 v3 or transform MHD to XDS.b. Adapters are used to simplify communication with the domain services and also to adapt a standards-based interface to a custom domain service interface."),Object(i.b)("li",{parentName:"ul"},"Orchestration mediator - Accepts a request and uses that request to execute a business function that may need to call out to other service endpoints on other systems e.g. enriching a message with a client\u2019s unique identifier retrieved from a client registry.\nThese services are invoked whenever there is a need to orchestrate or adapt a certain transaction. If they are not needed the OpenHIM core component will call the domain service directly. Orchestrators may use other adapters to send messages to other services.\nAs the architecture is designed to evolve as the environment changes, designing these orchestrators and adapters as independent services allows for additional logic or business processes to be added as the need arises. Mediators are often implementation specific so they will change to meet the specific needs and business processes of the system. A mediator library is available so that existing mediators can be re-used or adapted as needed. Both the orchestrator and adapter services are also expected to log and audit messages that they send out to the domain services. These services are implemented as mediators within the OpenHIM.")),Object(i.b)("div",{className:"funderImages"},Object(i.b)("h2",{id:"funders"},"Funders"),Object(i.b)("a",{href:"http://www.pepfar.gov/",title:"PEPFAR",target:"_blank"},Object(i.b)("img",{alt:"OpenHIM",src:Object(o.a)("img/funders/pepfar.jpg")})),Object(i.b)("a",{href:"http://www.cdc.gov/",title:"CDC",target:"_blank"},Object(i.b)("img",{alt:"OpenHIM",src:Object(o.a)("img/funders/cdc.jpg")})),Object(i.b)("a",{href:"http://www.idrc.ca/EN/Pages/default.aspx",title:"IDRC",target:"_blank"},Object(i.b)("img",{alt:"IDRC",src:Object(o.a)("img/funders/idrc.jpg")})),Object(i.b)("a",{href:"http://www.rockefellerfoundation.org/",title:"Rockefeller Foundation",target:"_blank"},Object(i.b)("img",{alt:"Rockefeller Foundation",src:Object(o.a)("img/funders/rockefellerFoundation.jpg")})),Object(i.b)("h2",{id:"development-partners"},"Development Partners"),Object(i.b)("a",{href:"http://jembi.org",title:"Jembi Health Systems",target:"_blank"},Object(i.b)("img",{alt:"Jembi Health Systems",src:Object(o.a)("img/funders/jembi.png")})),Object(i.b)("a",{href:"http://heal.cs.ukzn.ac.za/",title:"HeAL UKZN",target:"_blank"},Object(i.b)("img",{alt:"HeAL UKZN",src:Object(o.a)("img/funders/heal.png")})),Object(i.b)("h2",{id:"other-partners"},"Other Partners"),Object(i.b)("a",{href:"http://www.mohawkcollege.ca/",title:"Mohawk College",target:"_blank"},Object(i.b)("img",{alt:"Mohawk College",src:Object(o.a)("img/funders/mohawk.jpg")})),Object(i.b)("a",{href:"http://www.regenstrief.org/",title:"Regenstrief Institute",target:"_blank"},Object(i.b)("img",{alt:"Regenstrief Institute",src:Object(o.a)("img/funders/regenstriefInstitute.jpg")})),Object(i.b)("a",{href:"http://www.intrahealth.org/",title:"IntraHealth",target:"_blank"},Object(i.b)("img",{alt:"IntraHealth",src:Object(o.a)("img/funders/intraHealth.jpg")})),Object(i.b)("a",{href:"http://hisp.org",title:"HISP",target:"_blank"},Object(i.b)("img",{alt:"HISP",src:Object(o.a)("img/funders/hisp.png")})),Object(i.b)("a",{href:"http://ohie.org",title:"OpenHIE",target:"_blank"},Object(i.b)("img",{alt:"OpenHIE",src:Object(o.a)("img/funders/openhie-logo.png")})),Object(i.b)("a",{href:"http://www.ecgroupinc.com/index.htm",title:"eCGroup",target:"_blank"},"eCGroup")))}d.isMDXComponent=!0},556:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),h=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=h(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=h(a),u=n,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},562:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(23),r=a(563);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(s)return t+a;var h=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+h:h}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},563:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));a(0);var r=a(292);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const n={id:"mediators",title:"Mediators",sidebar_label:"Mediators"},i=[{value:"Mediator Types",id:"mediator-types",children:[{value:"Pass-through mediator",id:"pass-through-mediator",children:[]},{value:"Adaptor mediator",id:"adaptor-mediator",children:[]},{value:"Orchestration mediator",id:"orchestration-mediator",children:[]}]},{value:"Installing Mediators",id:"installing-mediators",children:[]},{value:"Existing Mediators",id:"existing-mediators",children:[]}],s={rightToc:i},d="wrapper";function l({components:e,...t}){return Object(r.b)(d,o({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"OpenHIM mediators are separate micro services that run independently to the OpenHIM and perform additional mediation tasks for a particular use case. The common tasks within a mediator are as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Message format adaptation - this is the transformation of messages received in a certain format into another format (eg. HL7 v2 to HL7 v3 or MHD to XDS.b)."),Object(r.b)("li",{parentName:"ul"},"Message orchestration - this is the execution of a business function that may need to call out to one or more other service endpoint on other systems. (eg. Enriching a message with a client's unique identifier retrieved from a client registry then sending the enriched message to a shared health record).")),Object(r.b)("p",null,"Mediators can be built using any platform that is desired (some good options are pure Java using our mediator engine, Node.js, Apache Camel, Mule ESB, or any language or platform that is a good fit for your needs). The only restriction is that the mediator MUST communicate with the OpenHIM-core in a particular way. Mediators must register themselves with the OpenHIM-core, accept request from the OpenHIM-core and return a specialised response to the OpenHIM-core to explain what that mediator did. A diagram of how mediators fit into the overall OpenHIM architecture can be seen below. ",Object(r.b)("img",o({parentName:"p"},{src:"assets/mediators/mediators-overview.png",alt:"OpenHIM architecture"}))),Object(r.b)("p",null,"If you are interested in developing you own mediators see the ",Object(r.b)("a",o({parentName:"p"},{href:"../dev-guide/mediators.html"}),"documentation available here")," and see our ",Object(r.b)("a",o({parentName:"p"},{href:"../tutorial/index.html",title:"Tutorials"}),"tutorials page")," for specific examples to get you started."),Object(r.b)("h2",{id:"mediator-types"},"Mediator Types"),Object(r.b)("p",null,"There are a few common types of mediators, these are described below."),Object(r.b)("h3",{id:"pass-through-mediator"},"Pass-through mediator"),Object(r.b)("p",null,"A Pass-through mediator just accepts a request and passes it on unchanged, these are not very useful and are only really used as a starting point for development."),Object(r.b)("h3",{id:"adaptor-mediator"},"Adaptor mediator"),Object(r.b)("p",null,"An Adaptor mediators accept a request and transform/adapt that request into another format before sending the request on to its final destination."),Object(r.b)("h3",{id:"orchestration-mediator"},"Orchestration mediator"),Object(r.b)("p",null,"An Orchestration mediator accepts a request and uses that request to execute some business process. This could involve making webservice calls to one or more other services to gather additional information about the request or to process it further. Finally a response is collated and returned to the OpenHIM."),Object(r.b)("h2",{id:"installing-mediators"},"Installing Mediators"),Object(r.b)("p",null,"Mediators may be developed in any language and only talk to the OpenHIM via its RESTful API. Therefore, the installation instructions will differ for each mediator. Please refer to the documentation of that mediator to details on how to install it. However, there are a few points that apply to all mediators:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Mediators DO NOT have to be installed on the same server and the OpenHIM."),Object(r.b)("li",{parentName:"ul"},"You should ensure that the mediator is able to reach the OpenHIM-core servers RESTful API endpoint."),Object(r.b)("li",{parentName:"ul"},"You should ensure that the OpenHIM is able to reach the mediator's endpoint for receiving requests."),Object(r.b)("li",{parentName:"ul"},"You should ensure that you configure the mediator with correct credentials so that it may access the OpenHIMs RESTful API as an admin user."),Object(r.b)("li",{parentName:"ul"},"You should ensure that the mediator trust the OpenHIM-core's certificate (if it is self signed) as API communication MUST take place over https.")),Object(r.b)("h2",{id:"existing-mediators"},"Existing Mediators"),Object(r.b)("p",null,"To find some existing mediators we suggest ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/search?utf8=%E2%9C%93&q=%22openhim-mediator%22&type=Repositories&ref=searchresults"}),'searching github for "openhim-mediator"')," which is the naming convention for OpenHIM mediators. For more information on writing you own mediator ",Object(r.b)("a",o({parentName:"p"},{href:"../dev-guide/mediators.html"}),"click here"),"."))}l.isMDXComponent=!0},292:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=a(0),o=a.n(r),n=o.a.createContext({}),i=function(e){var t=o.a.useContext(n),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=i(e.components);return o.a.createElement(n.Provider,{value:t},e.children)};var d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},c=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(a[r]=e[r]);return a}(e,["components","mdxType","originalType","parentName"]),c=i(a),u=r,h=c[s+"."+u]||c[u]||l[u]||n;return a?o.a.createElement(h,Object.assign({},{ref:t},d,{components:a})):o.a.createElement(h,Object.assign({},{ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);
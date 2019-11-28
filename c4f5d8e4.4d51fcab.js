(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{271:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(326),i=a.n(l),s=a(334),o=a(329),c=a(330),m=a(390),u=a.n(m);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const g=[{title:r.a.createElement(r.a.Fragment,null,"About"),imageUrl:"img/jembi-heal.png",imagePlacement:"left",description:r.a.createElement("div",null,r.a.createElement("p",null,"The OpenHIM allows you to"," ",r.a.createElement("b",null,"secure and view requests to your web service APIs"),". It acts as a reverse proxy to your upstream services and while doing so enables visibility into your service-oriented architecture (SOA) by logging each request and by providing metrics about requests hitting your services. It also provides a central entry point into your SOA and allows you to secure access through mutual TLS or basic-auth."),r.a.createElement("p",null,"The OpenHIM is easy to install and can be easily configured to meet your needs through the administration console. You can also"," ",r.a.createElement("b",null,"extend the OpenHIM to transform or orchestrate requests through the mediator framework.")),r.a.createElement("p",null,"Plus, the OpenHIM is ",r.a.createElement("b",null,"open-source"),"! It is published under the"," ",r.a.createElement("a",{href:"https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)"},"MPL-2.0")," ","and is currently developed and maintained by"," ",r.a.createElement("a",{href:"http://www.jembi.org/"},"Jembi Health Systems"),". It was initially developed in collaboration with"," ",r.a.createElement("a",{href:"http://www.ukzn.ac.za/"},"UKZN"),". Browse the OpenHIM features below or get started right away."," ",r.a.createElement("a",{href:"http://openhim.readthedocs.org/en/latest/getting-started.html#getting-started"},r.a.createElement("i",{className:"fa fa-arrow-circle-right"}))))},{title:r.a.createElement(r.a.Fragment,null,"Mediators"),imageUrl:"img/plug-solid.png",imagePlacement:"right",description:r.a.createElement("div",null,r.a.createElement("p",null,"The OpenHIM enables you to extend its functionality so that implementation specific processing may occur. The OpenHIM has first class support for mediators through its mediator framework. This framework enables mediators to communicate with the OpenHIM-core to register themselves, log the processing that they do and even fetch user defined config."),r.a.createElement("p",null,"Check out the ",r.a.createElement("a",{href:"mediator-library"},"mediator library")," to view mediators that have already been built. To learn more about creating your own mediators, see our"," ",r.a.createElement("a",{href:"docs/introduction/welcome"},"documentation"),"."))},{title:r.a.createElement(r.a.Fragment,null,"Acts as a reverse proxy for web services"),imageUrl:"img/OpenHIM-reverse-proxy.png",imagePlacement:"left",description:r.a.createElement("div",null,r.a.createElement("p",null,"You can easily configure the OpenHIM to proxy web services to multiple upstream hosts based on a URL pattern. It also supports multicasting requests to multiple different routes."))},{title:r.a.createElement(r.a.Fragment,null,"Gain visibility into your SOA"),imageUrl:"img/console.gif",imagePlacement:"right",description:r.a.createElement("div",null,r.a.createElement("p",null,"The administration console allows you to view requests as they travel through the system as well as view metrics such as transaction load and error rates."))},{title:r.a.createElement(r.a.Fragment,null,"Extend the OpenHIM's request processing via mediators"),imageUrl:"img/mediators.png",imagePlacement:"left",description:r.a.createElement("div",null,r.a.createElement("p",null,"The OpenHIM allows you to build your own micro-services called mediators that plug into the OpenHIM to extend its functionality. These mediators can be used to transform or orchestrate requests or more. They also report details of what processing has been done back to the OpenHIM using the mediator framework."),r.a.createElement("p",{className:"lead justify"},"View our ",r.a.createElement("a",{href:"mediator-library"},"mediator library")," to see mediator have already been built."))},{title:r.a.createElement(r.a.Fragment,null,"Secure access to your web services"),imageUrl:"img/certs.png",imagePlacement:"right",description:r.a.createElement("div",null,r.a.createElement("p",null,"The OpenHIM provides a secure interface to upstream hosts with certificate management and self signed certificate generation along with advanced access control mechanisms based on client and server certificates."))},{title:r.a.createElement(r.a.Fragment,null,"ATNA: audit repository and node authentication"),imageUrl:"img/audit.png",imagePlacement:"left",description:r.a.createElement("div",null,r.a.createElement("p",null,"If you need it, full support for IHE\u2019s ATNA profile is provided. Both node authentication and audit trails are supported. The OpenHIM also provides a full ATNA audit repository implementation and advanced audit viewer."))},{title:r.a.createElement(r.a.Fragment,null,"Alerting, for when things go wrong"),imageUrl:"img/alerts.png",imagePlacement:"right",description:r.a.createElement("div",null,r.a.createElement("p",null,"User alerts can be configured for when requests fail or a particular failure rate is exceeded. Users can be notified via email or sms."))},{title:r.a.createElement(r.a.Fragment,null,"Massively scalable"),imageUrl:"img/cluster.png",imagePlacement:"left",description:r.a.createElement("div",null,r.a.createElement("p",null,"The OpenHIM is scalable to handle large transaction loads. It supports same server and multi-server clusters and uses MongoDB as a database which is also massively scalable."))},{title:r.a.createElement(r.a.Fragment,null,"Re-run failed transactions"),imageUrl:"img/rerun.png",imagePlacement:"right",description:r.a.createElement("div",null,r.a.createElement("p",null,"If failures occur the OpenHIM can re-run requests to your services if your client systems are not able to. It allows you to review and bulk re-run requests or re-run individual requests."))},{title:r.a.createElement(r.a.Fragment,null,"Minimal transaction overhead"),imageUrl:"img/node-mongo.png",imagePlacement:"left",description:r.a.createElement("div",null,r.a.createElement("p",null,"The OpenHIM used the latest technologies such as Node.js and MongoDB to ensure that it doesn\u2019t introduce any significant overhead to your requests."))}];function p({imageUrl:e,title:t,imagePlacement:a,description:n}){const l=Object(c.a)(e);return"left"===a?r.a.createElement("div",{className:"row padding-vert feature even_item"},r.a.createElement("div",{className:"col center"},r.a.createElement("img",{className:"padding-horizontal",src:l,alt:t})),r.a.createElement("div",{className:"col col--offset-1"},r.a.createElement("h2",{className:"subtitle"},t),r.a.createElement("div",null,n))):r.a.createElement("div",{className:"row padding-vert feature even_item"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{className:"subtitle"},t),r.a.createElement("div",null,n)),r.a.createElement("div",{className:"col col--offset-1 center"},r.a.createElement("img",{className:"padding-horizontal",src:l,alt:t})))}t.default=function(){const e=Object(o.a)(),{siteConfig:t={}}=e;return r.a.createElement(s.a,{title:t.title,description:"Console for administrating the OpenHIM Core"},r.a.createElement("header",{className:i()("hero page",u.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"logo_header",src:"img/openhim-logo-green.svg",alt:"Project Logo"}),r.a.createElement("p",{className:"hero__subtitle subtitle"},t.tagline),r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"The ",r.a.createElement("strong",null,"Open Health Information Mediator")," (OpenHIM) is a middleware component designed to ease interoperability between disparate information systems. It provides secure communications and data governance as well as support for routing, orchestrating and translating requests as they flow between systems."),r.a.createElement("p",null,"Connecting health systems simply, securely and safely.")))),r.a.createElement("main",null,g&&g.length&&r.a.createElement("div",{className:"home page"},g.map((e,t)=>r.a.createElement(p,d({key:t},e))))))}},390:function(e,t,a){e.exports={heroBanner:"heroBanner_2Ftp",buttons:"buttons_1Wc3",features:"features_P2SU",featureImage:"featureImage_3Xqx"}}}]);
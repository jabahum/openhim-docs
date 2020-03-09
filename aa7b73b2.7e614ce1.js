(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{312:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(382)),s={id:"setup-basic-cluster",title:"Setup a basic cluster",sidebar_label:"Setup a basic cluster",keywords:["OpenHIM","cluster"],description:"Setup a basic cluster for the OpenHIM"},l={id:"version-5.2.x/how-to/setup-basic-cluster",title:"Setup a basic cluster",description:"Setup a basic cluster for the OpenHIM",source:"@site/versioned_docs/version-5.2.x/how-to/how-to-setup-a-basic-cluster.md",permalink:"/docs/how-to/setup-basic-cluster",version:"5.2.x",sidebar_label:"Setup a basic cluster",sidebar:"version-5.2.x/docs",previous:{title:"Export/import Configuration",permalink:"/docs/how-to/export-import-configuration"},next:{title:"Manually install on Windows",permalink:"/docs/how-to/manually-install-on-windows"}},i=[{value:"Background",id:"background",children:[]},{value:"Clustering on a single server",id:"clustering-on-a-single-server",children:[]},{value:"Clustering over multiple servers",id:"clustering-over-multiple-servers",children:[]}],c={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The OpenHIM Core is designed to be horizontally scalable. This means that if you need better performance, you can easily fire up more core instances. In this tutorial we will look at setting up a small, basic cluster of core instances."),Object(o.b)("h2",{id:"background"},"Background"),Object(o.b)("p",null,"The OpenHIM Core is built in Node.js and it is important to note that node uses a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/"}),"single threaded model"),". The threading model is designed for I/O bound processes - perfect for the OpenHIM - however this can lead to a single instance of core quickly becoming a bottleneck on very high transaction loads. In addition, a core single instance wouldn't take advantage of multiple cores on a CPU. We recommend that one OpenHIM instance, on a dedicated server, is used for every available CPU core. Besides, it would be useful to be able to run multiple core instances on multiple servers as well."),Object(o.b)("h2",{id:"clustering-on-a-single-server"},"Clustering on a single server"),Object(o.b)("p",null,"Luckily, since v1.2.0 of the OpenHIM, clustering on a single server is supported out of the box. So, setup is easy. All you need to do is run the OpenHIM with a flag to let it know you want to cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"openhim-core --cluster={n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"n")," is the number of instances that you want to run (eg, 2, 4 or 6) or it can be the special value of ",Object(o.b)("strong",{parentName:"p"},"auto")," where the OpenHIM will determine how many cores your server has and run that many instances. Each instance that the OpenHIM starts shares the same ports and the OpenHIM will share load between all of these instances."),Object(o.b)("h2",{id:"clustering-over-multiple-servers"},"Clustering over multiple servers"),Object(o.b)("p",null,"The approach we are taking towards scaling out the OpenHIM Core to multiple server is also straight forward. We will start up 4 instances on separate servers and setup load-balancing between them. For this tutorial we will look at using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.linuxvirtualserver.org/"}),"LVS")," on Ubuntu for load-balancing, but other options exist as well:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://nginx.com/"}),"NGINX")," - A very powerful load-balancer and web server. Note however that TCP load-balancing is only supported in their NGINX Plus commercial product. However http load-balancing can still be used, but can become more complex if you want to use https channels on the HIM."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/node-harmony"}),"node-harmony")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/loadbalancer"}),"loadbalancer"))),Object(o.b)("p",null,"First, install the OpenHIM on each server and grab a copy of the config file if you wish to use a non-default configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install -g openhim-core $ wget https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json\n")),Object(o.b)("p",null,"Next, startup each instance on each server, you may also use the ",Object(o.b)("inlineCode",{parentName:"p"},"--cluster")," option if you require."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"nohup openhim-core --cluster=auto\n")),Object(o.b)("p",null,"Now we can setup the load-balancer. If not already available, install the LVS Admin tool on the server that will act as you load balancer:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo apt-get install ipvsadm\n")),Object(o.b)("p",null,"Now we'll setup round-robin balancing and add each node to the cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"sudo ipvsadm -A -t 10.0.0.1:5000 -s rr\n\nsudo ipvsadm -a -t 10.0.0.1:5000 -r 10.0.0.2:5000 -m\n\nsudo ipvsadm -a -t 10.0.0.1:5000 -r 10.0.0.3:5000 -m\n\nsudo ipvsadm -a -t 10.0.0.1:5000 -r 10.0.0.4:5000 -m\n\nsudo ipvsadm -a -t 10.0.0.1:5000 -r 10.0.0.5:5000 -m\n\n")),Object(o.b)("p",null,"Replace the 10.0.0.x addresses with your servers' IP addresses. You can also follow these steps for the HTTP ports and the API ports (although another good strategy with regard to the API is to run another dedicated core instance and point the Console there). And that's it! Try running several transactions against your server on HTTPS - they should be load-balanced between the four instances AND each instance will itself be clustered on the server that it is running! This should allow you to handle MASSIVE load with ease."))}u.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(h,l({ref:t},c,{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
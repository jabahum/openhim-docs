(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{267:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=(n(0),n(338));const o={id:"setup-basic-cluster",title:"Setup a basic cluster",sidebar_label:"Setup a basic cluster",keywords:["OpenHIM","cluster"],description:"Setup a basic cluster for the OpenHIM"},s=[{value:"Background",id:"background",children:[]},{value:"Clustering on a single server",id:"clustering-on-a-single-server",children:[]},{value:"Clustering over multiple servers",id:"clustering-over-multiple-servers",children:[]}],l={id:"version-5.2.x/how-to/setup-basic-cluster",title:"Setup a basic cluster",description:"Setup a basic cluster for the OpenHIM",source:"@site/versioned_docs/version-5.2.x/how-to/how-to-setup-a-basic-cluster.md",permalink:"/docs/how-to/setup-basic-cluster",version:"5.2.x",sidebar_label:"Setup a basic cluster",sidebar:"version-5.2.x/docs",previous:{title:"Export/import Configuration",permalink:"/docs/how-to/export-import-configuration"},next:{title:"Manually install on Windows",permalink:"/docs/how-to/manually-install-on-windows"}},i={rightToc:s,metadata:l},c="wrapper";function u({components:e,...t}){return Object(r.b)(c,Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The OpenHIM Core is designed to be horizontally scalable. This means that if you need better performance, you can easily fire up more core instances. In this tutorial we will look at setting up a small, basic cluster of core instances."),Object(r.b)("h2",{id:"background"},"Background"),Object(r.b)("p",null,"The OpenHIM Core is built in Node.js and it is important to note that node uses a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/"}),"single threaded model"),". The threading model is designed for I/O bound processes - perfect for the OpenHIM - however this can lead to a single instance of core quickly becoming a bottleneck on very high transaction loads. In addition, a core single instance wouldn't take advantage of multiple cores on a CPU. We recommend that one OpenHIM instance, on a dedicated server, is used for every available CPU core. Besides, it would be useful to be able to run multiple core instances on multiple servers as well."),Object(r.b)("h2",{id:"clustering-on-a-single-server"},"Clustering on a single server"),Object(r.b)("p",null,"Luckily, since v1.2.0 of the OpenHIM, clustering on a single server is supported out of the box. So, setup is easy. All you need to do is run the OpenHIM with a flag to let it know you want to cluster:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"openhim-core --cluster={n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"n")," is the number of instances that you want to run (eg, 2, 4 or 6) or it can be the special value of ",Object(r.b)("strong",{parentName:"p"},"auto")," where the OpenHIM will determine how many cores your server has and run that many instances. Each instance that the OpenHIM starts shares the same ports and the OpenHIM will share load between all of these instances."),Object(r.b)("h2",{id:"clustering-over-multiple-servers"},"Clustering over multiple servers"),Object(r.b)("p",null,"The approach we are taking towards scaling out the OpenHIM Core to multiple server is also straight forward. We will start up 4 instances on separate servers and setup load-balancing between them. For this tutorial we will look at using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.linuxvirtualserver.org/"}),"LVS")," on Ubuntu for load-balancing, but other options exist as well:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://nginx.com/"}),"NGINX")," - A very powerful load-balancer and web server. Note however that TCP load-balancing is only supported in their NGINX Plus commercial product. However http load-balancing can still be used, but can become more complex if you want to use https channels on the HIM."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/node-harmony"}),"node-harmony")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/loadbalancer"}),"loadbalancer"))),Object(r.b)("p",null,"First, install the OpenHIM on each server and grab a copy of the config file if you wish to use a non-default configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install -g openhim-core $ wget https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json\n")),Object(r.b)("p",null,"Next, startup each instance on each server, you may also use the ",Object(r.b)("inlineCode",{parentName:"p"},"--cluster")," option if you require."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"nohup openhim-core --cluster=auto\n")),Object(r.b)("p",null,"Now we can setup the load-balancer. If not already available, install the LVS Admin tool on the server that will act as you load balancer:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"sudo apt-get install ipvsadm\n")),Object(r.b)("p",null,"Now we'll setup round-robin balancing and add each node to the cluster:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"sudo ipvsadm -A -t 10.0.0.1:5000 -s rr\n\nsudo ipvsadm -a -t 10.0.0.1:5000 -r 10.0.0.2:5000 -m\n\nsudo ipvsadm -a -t 10.0.0.1:5000 -r 10.0.0.3:5000 -m\n\nsudo ipvsadm -a -t 10.0.0.1:5000 -r 10.0.0.4:5000 -m\n\nsudo ipvsadm -a -t 10.0.0.1:5000 -r 10.0.0.5:5000 -m\n\n")),Object(r.b)("p",null,"Replace the 10.0.0.x addresses with your servers' IP addresses. You can also follow these steps for the HTTP ports and the API ports (although another good strategy with regard to the API is to run another dedicated core instance and point the Console there). And that's it! Try running several transactions against your server on HTTPS - they should be load-balanced between the four instances AND each instance will itself be clustered on the server that it is running! This should allow you to handle MASSIVE load with ease."))}u.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,d=u[l+"."+p]||u[p]||c[p]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},i,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},i))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[i]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
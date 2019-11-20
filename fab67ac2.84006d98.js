(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{280:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));t(0);var a=t(292);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}const o={id:"run-openhim-using-vagrant",title:"Run the OpenHIM using vagrant",sidebar_label:"Run the OpenHIM using vagrant"},i=[{value:"Steps",id:"steps",children:[]}],c={rightToc:i},l="wrapper";function s({components:e,...n}){return Object(a.b)(l,r({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you're a developer, or would just like to get the OpenHIM up and running for testing purposes, the quickest way to do so is to fire up a Vagrant instance."),Object(a.b)("h2",{id:"steps"},"Steps"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Setup ",Object(a.b)("a",r({parentName:"li"},{href:"https://www.vagrantup.com/"}),"Vagrant")," on your system. Note that you'll also have to install ",Object(a.b)("a",r({parentName:"li"},{href:"https://www.virtualbox.org/"}),"VirtualBox"),"."),Object(a.b)("li",{parentName:"ul"},"Clone the repo"),Object(a.b)("li",{parentName:"ul"},"(if necessary) ",Object(a.b)("inlineCode",{parentName:"li"},"sudo apt-get install git")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"git clone https://github.com/jembi/openhim-core-js.git")),Object(a.b)("li",{parentName:"ul"},"Launch the instance"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cd openhim-core-js/infrastructure/deployment/env")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"vagrant up"))),Object(a.b)("p",null,"And that's it! Your Vagrant instance should now be up and running. You can access it by running the command ",Object(a.b)("inlineCode",{parentName:"p"},"vagrant ssh"),". The OpenHIM itself will be available in the ",Object(a.b)("inlineCode",{parentName:"p"},"/openhim-core-js")," directory. You can proceed as follows in order to run it:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"vagrant ssh\n\ncd /openhim-core-js\n\ngrunt build\n\nnode lib/server.js\n")),Object(a.b)("p",null,"If you would like to run the console as well, the easiest way is to fire up another vagrant instance ","[in another terminal]",":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/jembi/openhim-console.git\n\ncd openhim-console/infrastructure/deployment/env\n\nvagrant up\n\nvagrant ssh\n\ncd /openhim-console\n\ngrunt serve\n")),Object(a.b)("p",null,"Note that the vagrant instances have port forwarding enabled, so to access the console you can do so by just navigating to ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",r({parentName:"strong"},{href:"http://localhost:9000"}),"http://localhost:9000"))," in your browser on the system that's running the vagrant instance, not the instance itself (which you would struggle to do anyway!)."),Object(a.b)("p",null,"When you're done you can dispose of an instance by running ",Object(a.b)("inlineCode",{parentName:"p"},"vagrant destroy")," (not ssh'd into the vagrant instance)."))}s.isMDXComponent=!0},292:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a),o=r.a.createContext({}),i=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=i(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(t),u=a,b=p[c+"."+u]||p[u]||s[u]||o;return t?r.a.createElement(b,Object.assign({},{ref:n},l,{components:t})):r.a.createElement(b,Object.assign({},{ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));n(0);var r=n(292);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const a={id:"setup-ssl",title:"Setup SSL",sidebar_label:"Setup SSL"},i=[{value:"Install SSL certificates for Openhim-core",id:"install-ssl-certificates-for-openhim-core",children:[]},{value:"Install SSL certificates for Openhim-console",id:"install-ssl-certificates-for-openhim-console",children:[]}],c={rightToc:i},l="wrapper";function s({components:e,...t}){return Object(r.b)(l,o({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"install-ssl-certificates-for-openhim-core"},"Install SSL certificates for Openhim-core"),Object(r.b)("p",null,"This can be accomplished directly from the OpenHIM console, where you can upload a new certificate for openhim-core through the console."),Object(r.b)("p",null,"Openhim-core can be set to automatically watch a path which contains it's certificates. The settings for which path and whether or not it should be automatically monitored, can be configured in the openhim-core config file under: ",Object(r.b)("inlineCode",{parentName:"p"},"certificateManagement"),"."),Object(r.b)("p",null,"If the config gets updated, openhim-core will need to be restarted."),Object(r.b)("h2",{id:"install-ssl-certificates-for-openhim-console"},"Install SSL certificates for Openhim-console"),Object(r.b)("p",null,"We recommend setting up NGINX in front of openhim-console which is where SSL certificates should then be used. Here is a ",Object(r.b)("a",o({parentName:"p"},{href:"https://www.digitalocean.com/community/tutorials/how-to-create-an-ssl-certificate-on-nginx-for-ubuntu-14-04"}),"blog")," to introduce you to how that could work."),Object(r.b)("p",null,"Certificates can be purchased or are freely available by using ",Object(r.b)("a",o({parentName:"p"},{href:"https://letsencrypt.org/"}),"Letsencrypt"),"."))}s.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),u=r,f=p[c+"."+u]||p[u]||s[u]||a;return n?o.a.createElement(f,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(f,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(382)),i={id:"docker",title:"Install via Docker",sidebar_label:"Install via Docker",keywords:["openhim","docker","docker-compose","install"],description:"Installing OpenHIM via docker"},l={id:"version-5.2.x/installation/docker",title:"Install via Docker",description:"Installing OpenHIM via docker",source:"@site/versioned_docs/version-5.2.x/installation/docker.md",permalink:"/docs/installation/docker",version:"5.2.x",sidebar_label:"Install via Docker",sidebar:"version-5.2.x/docs",previous:{title:"Configuration",permalink:"/docs/getting-started/configuration"},next:{title:"Install via NPM",permalink:"/docs/installation/npm"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The following steps will guide you through the process of installing the OpenHIM using docker images."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install ",Object(a.b)("strong",{parentName:"li"},"Docker")," via terminal ",Object(a.b)("inlineCode",{parentName:"li"},"curl https://get.docker.com/ | sh -")," Or install Docker using the link below, follow all the steps and most importantly, ensure that there is no previous docker installed while following ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#install-using-the-repository"}),"these instructions"),"."),Object(a.b)("li",{parentName:"ol"},"Install ",Object(a.b)("strong",{parentName:"li"},"Docker Compose"),", follow all the steps ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/#install-compose"}),"here")," and use the recommend example version which is the latest stable release."),Object(a.b)("li",{parentName:"ol"},"Install Git ",Object(a.b)("inlineCode",{parentName:"li"},"sudo apt install git")),Object(a.b)("li",{parentName:"ol"},"Clone the repository for setting up a docker image ",Object(a.b)("inlineCode",{parentName:"li"},"git clone https://github.com/jembi/openhim-common.git")),Object(a.b)("li",{parentName:"ol"},"Navigate into the repo ",Object(a.b)("inlineCode",{parentName:"li"},"cd openhim-common")),Object(a.b)("li",{parentName:"ol"},"Build the docker images ",Object(a.b)("inlineCode",{parentName:"li"},"docker-compose build && docker-compose up -d")),Object(a.b)("li",{parentName:"ol"},"Access the OpenHIM Console on ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://localhost:9000"}),"http://localhost:9000"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note"),": To configure the IP address the user must do the following ",Object(a.b)("inlineCode",{parentName:"p"},"sudo nano default.json")," edit the hostname to be that of the IP address of the docker image.")))}p.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,l({ref:t},s,{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
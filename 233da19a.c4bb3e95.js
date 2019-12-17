(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(1),a=n(6),r=(n(0),n(338)),i={id:"docker",title:"Install via Docker",sidebar_label:"Install via Docker",keywords:["openhim","docker","docker-compose","install"],description:"Installing OpenHIM via docker"},l=[],c={id:"version-5.2.x/installation/docker",title:"Install via Docker",description:"Installing OpenHIM via docker",source:"@site/versioned_docs/version-5.2.x/installation/docker.md",permalink:"/docs/installation/docker",version:"5.2.x",sidebar_label:"Install via Docker",sidebar:"version-5.2.x/docs",previous:{title:"Configuration",permalink:"/docs/getting-started/configuration"},next:{title:"Install via NPM",permalink:"/docs/installation/npm"}},s={rightToc:l,metadata:c},p="wrapper";function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(p,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The following steps will guide you through the process of installing the OpenHIM using docker images."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install ",Object(r.b)("strong",{parentName:"li"},"Docker")," via terminal ",Object(r.b)("inlineCode",{parentName:"li"},"curl https://get.docker.com/ | sh -")," Or install Docker using the link below, follow all the steps and most importantly, ensure that there is no previous docker installed while following ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#install-using-the-repository"}),"these instructions"),"."),Object(r.b)("li",{parentName:"ol"},"Install ",Object(r.b)("strong",{parentName:"li"},"Docker Compose"),", follow all the steps ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/#install-compose"}),"here")," and use the recommend example version which is the latest stable release."),Object(r.b)("li",{parentName:"ol"},"Install Git ",Object(r.b)("inlineCode",{parentName:"li"},"sudo apt install git")),Object(r.b)("li",{parentName:"ol"},"Clone the repository for setting up a docker image ",Object(r.b)("inlineCode",{parentName:"li"},"git clone https://github.com/jembi/openhim-common.git")),Object(r.b)("li",{parentName:"ol"},"Navigate into the repo ",Object(r.b)("inlineCode",{parentName:"li"},"cd openhim-common")),Object(r.b)("li",{parentName:"ol"},"Build the docker images ",Object(r.b)("inlineCode",{parentName:"li"},"docker-compose build && docker-compose up -d")),Object(r.b)("li",{parentName:"ol"},"Access the OpenHIM Console on ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://localhost:9000"}),"http://localhost:9000"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": To configure the IP address the user must do the following ",Object(r.b)("inlineCode",{parentName:"p"},"sudo nano default.json")," edit the hostname to be that of the IP address of the docker image.")))}d.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o),r=a.a.createContext({}),i=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,m=p[l+"."+d]||p[d]||s[d]||r;return n?a.a.createElement(m,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(m,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(438)),i={id:"prerequisites",title:"Prerequisites",sidebar_label:"Prerequisites",keywords:["OpenHIM","Prerequisites"],description:"OpenHIM installation prerequisites"},s={unversionedId:"getting-started/prerequisites",id:"version-5.2.x/getting-started/prerequisites",isDocsHomePage:!1,title:"Prerequisites",description:"OpenHIM installation prerequisites",source:"@site/versioned_docs/version-5.2.x/getting-started/prerequisites.md",slug:"/getting-started/prerequisites",permalink:"/docs/5.2.x/getting-started/prerequisites",version:"5.2.x",sidebar_label:"Prerequisites",sidebar:"version-5.2.x/docs",previous:{title:"Community",permalink:"/docs/5.2.x/introduction/community"},next:{title:"Install OpenHIM",permalink:"/docs/5.2.x/getting-started/install"}},c=[{value:"Install Docker",id:"install-docker",children:[]},{value:"Install Docker Compose",id:"install-docker-compose",children:[]},{value:"Docker Compose file",id:"docker-compose-file",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To easily get started with implementing the OpenHIM Core and Console and to start playing with the various features we can follow the below steps to get a local OpenHIM environment setup."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Don't have time to setup? Try our ",Object(a.b)("strong",{parentName:"p"},"sandbox")," environments! See the links in the footer.")),Object(a.b)("p",null,"The below method of spinning up the OpenHIM makes use of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.docker.com/resources/what-container"}),"Docker containers")," that allows for easier deployments of the OpenHIM."),Object(a.b)("p",null,"We will need to install some software that will allow us to spin up the OpenHIM with ease. We will be using ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," which is a container management service to create our OpenHIM instance."),Object(a.b)("h2",{id:"install-docker"},"Install Docker"),Object(a.b)("p",null,"Docker is the engine that will be running our entire local OpenHIM instance by using the publicly available OpenHIM core and console images. To install Docker please follow the relevant steps based on the operating system you are using as described in the below link"),Object(a.b)("p",null,"To ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"install Docker")," please follow the relevant steps as described within the install documentation"),Object(a.b)("h2",{id:"install-docker-compose"},"Install Docker Compose"),Object(a.b)("p",null,"Now that we have Docker installed on our machine, we will also need to install Docker Compose which is an additional service that makes use of our below ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and builds the relevant containers for us to have our OpenHIM instance up and running. The OpenHIM can be setup and configured without these steps however manually creating the relevant Docker containers requires more advanced knowledge of Docker."),Object(a.b)("p",null,"To ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"install Docker Compose")," please follow the relevant steps as described within the install documentation."),Object(a.b)("h2",{id:"docker-compose-file"},"Docker Compose file"),Object(a.b)("p",null,"Before we can use Docker to build our OpenHIM instance, we need to create a ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," that will contain our instructions for pulling the correct OpenHIM ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/r/jembi/openhim-core"}),"Core")," and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/r/jembi/openhim-console"}),"Console")," images from ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/r/jembi/"}),"Jembi's Dockerhub profile")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," can be downloaded from the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/infrastructure/docker-compose.yml"}),"OpenHIM core repository"),", or you can copy/paste the below yaml code into a file named ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose.yml")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yml"}),'version: \'3\'\n\nnetworks:\n  openhim:\n\nservices:\n  mongo-db:\n    container_name: mongo-db\n    image: mongo:4.0\n    networks:\n      - openhim\n    volumes:\n      - "mongo-data:/data/db"\n    restart: unless-stopped\n\n  openhim-core:\n    container_name: openhim-core\n    image: jembi/openhim-core:latest\n    restart: unless-stopped\n    environment:\n      mongo_url: "mongodb://mongo-db/openhim-development"\n      mongo_atnaUrl: "mongodb://mongo-db/openhim-development"\n      NODE_ENV: "development"\n    ports:\n      - "8080:8080"\n      - "5000:5000"\n      - "5001:5001"\n    networks:\n      - openhim\n    healthcheck:\n     test: "curl -sSk https://openhim-core:8080/heartbeat || exit 1"\n     interval: 30s\n     timeout: 30s\n     retries: 3\n\n  openhim-console:\n    container_name: openhim-console\n    image: jembi/openhim-console:latest\n    restart: unless-stopped\n    networks:\n      - openhim\n    ports:\n      - "9000:80"\n    healthcheck:\n     test: "curl -sS http://openhim-console || exit 1"\n     interval: 30s\n     timeout: 30s\n     retries: 3\n\nvolumes:\n  mongo-data:\n')))}p.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),b=o,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||a;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
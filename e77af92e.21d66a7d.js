(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{408:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(438)),i={id:"openhim-development",title:"Getting started with OpenHIM development",sidebar_label:"Getting started with OpenHIM development",keywords:["openhim","getting started","development"],description:"Getting started with the OpenHIM"},l={unversionedId:"dev-guide/openhim-development",id:"dev-guide/openhim-development",isDocsHomePage:!1,title:"Getting started with OpenHIM development",description:"Getting started with the OpenHIM",source:"@site/docs/dev-guide/getting-started-dev.md",slug:"/dev-guide/openhim-development",permalink:"/docs/next/dev-guide/openhim-development",version:"current",sidebar_label:"Getting started with OpenHIM development",sidebar:"docs",previous:{title:"Detailed design using Node.js",permalink:"/docs/next/dev-guide/design-details"},next:{title:"Developing mediators",permalink:"/docs/next/dev-guide/developing-mediators"}},p=[{value:"Setting up your OpenHIM-core dev environment",id:"setting-up-your-openhim-core-dev-environment",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setup",id:"setup",children:[]}]},{value:"Setting up your OpenHIM-console dev environment",id:"setting-up-your-openhim-console-dev-environment",children:[{value:"Prerequisites",id:"prerequisites-1",children:[]},{value:"Setup",id:"setup-1",children:[]}]}],c={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide describes how to get a development environment up for the OpenHIM-core and the OpenHIM-console.\nThis guide assumes you are running a ",Object(a.b)("strong",{parentName:"p"},"Linux")," environment."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you're only interested in playing around with the OpenHIM perhaps checkout our ",Object(a.b)("strong",{parentName:"p"},"sandbox environments"),"! Links in the footer.")),Object(a.b)("h2",{id:"setting-up-your-openhim-core-dev-environment"},"Setting up your OpenHIM-core dev environment"),Object(a.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"To follow this guide you will need internet access and the following software installed:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"NodeJS v10"),Object(a.b)("li",{parentName:"ul"},"npm"),Object(a.b)("li",{parentName:"ul"},"git"),Object(a.b)("li",{parentName:"ul"},"MongoDB v4.0")),Object(a.b)("h3",{id:"setup"},"Setup"),Object(a.b)("h4",{id:"clone-the-openhim-core"},"Clone the OpenHIM Core"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you are planning to contribute to the OpenHIM Core please fork the repository and create a pull request!")),Object(a.b)("p",null,"Clone the repo onto your local machine with the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/jembi/openhim-core-js.git\n")),Object(a.b)("p",null,"Next, download all the required dependencies using ",Object(a.b)("inlineCode",{parentName:"p"},"npm"),". Navigate into the openhim-core-js directory and run the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm install\n")),Object(a.b)("p",null,"Then start the project (MongoDB should already be running with the default port exposed):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm start\n")),Object(a.b)("p",null,"The server will by default start in production mode using the mongodb database 'openhim'. To start the serve in development mode use the following:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"NODE_ENV=development npm start")),Object(a.b)("p",null,"This uses of the development mongodb database called 'openhim-development'."),Object(a.b)("p",null,"This project uses ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/"}),"mocha")," as a unit testing framework with ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/visionmedia/should.js/"}),"should.js")," for assertions and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://sinonjs.org/"}),"sinon.js")," for spies and mocks. The tests can be run using:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm test\n\nnpm run test:unit // Unit tests\n\nnpm run test:int // Integration tests\n")),Object(a.b)("h2",{id:"setting-up-your-openhim-console-dev-environment"},"Setting up your OpenHIM-console dev environment"),Object(a.b)("h3",{id:"prerequisites-1"},"Prerequisites"),Object(a.b)("p",null,"To follow this guide you will need internet access and the following software installed:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"NodeJS v10"),Object(a.b)("li",{parentName:"ul"},"npm"),Object(a.b)("li",{parentName:"ul"},"git"),Object(a.b)("li",{parentName:"ul"},"MongoDB v4.0")),Object(a.b)("h3",{id:"setup-1"},"Setup"),Object(a.b)("h4",{id:"clone-the-openhim-console"},"Clone the OpenHIM Console"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you are planning to contribute to the OpenHIM Core please fork the repository and create a pull request!")),Object(a.b)("p",null,"Clone the repo onto your local machine with the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/jembi/openhim-console.git\n")),Object(a.b)("p",null,"Next, download all the required dependencies using ",Object(a.b)("inlineCode",{parentName:"p"},"npm"),". Navigate into the openhim-console directory and run the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm install\n")),Object(a.b)("p",null,"Then start the project (OpenHIM Core should already be running):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm start\n")),Object(a.b)("p",null,"Navigate to the default console development url at ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://localhost:9000"}),"http://localhost:9000"),". and login."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-txt"}),"username: root@openhim.org\npassword: openhim-password\n")))}s.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
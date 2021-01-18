(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{289:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),i=(n(0),n(438)),a={id:"openhim-development",title:"Getting started with OpenHIM development",sidebar_label:"Getting started with OpenHIM development",keywords:["openhim","getting started","development"],description:"Getting started with the OpenHIM"},l={unversionedId:"dev-guide/openhim-development",id:"version-5.4.x/dev-guide/openhim-development",isDocsHomePage:!1,title:"Getting started with OpenHIM development",description:"Getting started with the OpenHIM",source:"@site/versioned_docs/version-5.4.x/dev-guide/getting-started-dev.md",slug:"/dev-guide/openhim-development",permalink:"/docs/dev-guide/openhim-development",version:"5.4.x",sidebar_label:"Getting started with OpenHIM development",sidebar:"version-5.4.x/docs",previous:{title:"Detailed design using Node.js",permalink:"/docs/dev-guide/design-details"},next:{title:"Developing mediators",permalink:"/docs/dev-guide/developing-mediators"}},p=[{value:"Setting up your OpenHIM-core dev environment",id:"setting-up-your-openhim-core-dev-environment",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setup",id:"setup",children:[]}]},{value:"Setting up your OpenHIM-console dev environment",id:"setting-up-your-openhim-console-dev-environment",children:[{value:"Prerequisites",id:"prerequisites-1",children:[]},{value:"Setup",id:"setup-1",children:[]}]}],c={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide describes how to get a development environment up for the OpenHIM-core and the OpenHIM-console.\nThis guide assumes you are running a ",Object(i.b)("strong",{parentName:"p"},"Linux")," environment."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you're only interested in playing around with the OpenHIM perhaps checkout our ",Object(i.b)("strong",{parentName:"p"},"sandbox environments"),"! Links in the footer.")),Object(i.b)("h2",{id:"setting-up-your-openhim-core-dev-environment"},"Setting up your OpenHIM-core dev environment"),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"To follow this guide you will need internet access and the following software installed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"NodeJS v10"),Object(i.b)("li",{parentName:"ul"},"npm"),Object(i.b)("li",{parentName:"ul"},"git"),Object(i.b)("li",{parentName:"ul"},"MongoDB v4.0")),Object(i.b)("h3",{id:"setup"},"Setup"),Object(i.b)("h4",{id:"clone-the-openhim-core"},"Clone the OpenHIM Core"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you are planning to contribute to the OpenHIM Core please fork the repository and create a pull request!")),Object(i.b)("p",null,"Clone the repo onto your local machine with the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/jembi/openhim-core-js.git\n")),Object(i.b)("p",null,"Next, download all the required dependencies using ",Object(i.b)("inlineCode",{parentName:"p"},"npm"),". Navigate into the openhim-core-js directory and run the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm install\n")),Object(i.b)("p",null,"Then start the project (MongoDB should already be running with the default port exposed):"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm start\n")),Object(i.b)("p",null,"The server will by default start in production mode using the mongodb database 'openhim'. To start the serve in development mode use the following:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"NODE_ENV=development npm start")),Object(i.b)("p",null,"This uses of the development mongodb database called 'openhim-development'."),Object(i.b)("p",null,"This project uses ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://mochajs.org/"}),"mocha")," as a unit testing framework with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/visionmedia/should.js/"}),"should.js")," for assertions and ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://sinonjs.org/"}),"sinon.js")," for spies and mocks. The tests can be run using:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm test\n\nnpm run test:unit // Unit tests\n\nnpm run test:int // Integration tests\n")),Object(i.b)("h2",{id:"setting-up-your-openhim-console-dev-environment"},"Setting up your OpenHIM-console dev environment"),Object(i.b)("h3",{id:"prerequisites-1"},"Prerequisites"),Object(i.b)("p",null,"To follow this guide you will need internet access and the following software installed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"NodeJS v10"),Object(i.b)("li",{parentName:"ul"},"npm"),Object(i.b)("li",{parentName:"ul"},"git"),Object(i.b)("li",{parentName:"ul"},"MongoDB v4.0")),Object(i.b)("h3",{id:"setup-1"},"Setup"),Object(i.b)("h4",{id:"clone-the-openhim-console"},"Clone the OpenHIM Console"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you are planning to contribute to the OpenHIM Core please fork the repository and create a pull request!")),Object(i.b)("p",null,"Clone the repo onto your local machine with the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/jembi/openhim-console.git\n")),Object(i.b)("p",null,"Next, download all the required dependencies using ",Object(i.b)("inlineCode",{parentName:"p"},"npm"),". Navigate into the openhim-console directory and run the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm install\n")),Object(i.b)("p",null,"Then start the project (OpenHIM Core should already be running):"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm start\n")),Object(i.b)("p",null,"Navigate to the default console development url at ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://localhost:9000"}),"http://localhost:9000"),". and login."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-txt"}),"username: root@openhim.org\npassword: openhim-password\n")))}s.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
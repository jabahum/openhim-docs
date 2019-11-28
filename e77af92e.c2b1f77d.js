(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{302:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));n(0);var o=n(325);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const r={id:"openhim-development",title:"Getting started with OpenHIM development",sidebar_label:"Getting started with OpenHIM development"},i=[{value:"Setting up your OpenHIM-core dev environment",id:"setting-up-your-openhim-core-dev-environment",children:[]},{value:"Setting up your OpenHIM-console dev environment",id:"setting-up-your-openhim-console-dev-environment",children:[]}],l={rightToc:i},b="wrapper";function p({components:e,...t}){return Object(o.b)(b,a({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The fist thing you will need to do is get you development environment up. This guide describes how to get a development environment up for the OpenHIM-core and the OpenHIM-console."),Object(o.b)("h2",{id:"setting-up-your-openhim-core-dev-environment"},"Setting up your OpenHIM-core dev environment"),Object(o.b)("p",null,"You can use vagrant if you would want to get up and running quickly with a dev environment in a vm. See here to ",Object(o.b)("a",a({parentName:"p"},{href:"./how-to/how-to-run-the-openhim-using-vagrant.html"}),"use Vagrant")," to fire up an instance. Otherwise, read on to learn more."),Object(o.b)("p",null,"Clone the ",Object(o.b)("inlineCode",{parentName:"p"},"https://github.com/jembi/openhim-core-js.git")," repository."),Object(o.b)("p",null,"Ensure you have the following installed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",a({parentName:"li"},{href:"http://nodejs.org/"}),"Node.js")," v4 or greater"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",a({parentName:"li"},{href:"http://www.mongodb.org/"}),"MongoDB")," (in Ubuntu run ",Object(o.b)("inlineCode",{parentName:"li"},"sudo apt-get install mongodb"),", in OSX using ",Object(o.b)("a",a({parentName:"li"},{href:"http://brew.sh"}),"Homebrew"),", run ",Object(o.b)("inlineCode",{parentName:"li"},"brew update")," followed by ",Object(o.b)("inlineCode",{parentName:"li"},"brew install mongodb"),")")),Object(o.b)("p",null,"The OpenHIM core makes use of the ",Object(o.b)("a",a({parentName:"p"},{href:"http://koajs.com/"}),"Koa framework"),", which requires node version 4 or greater."),Object(o.b)("p",null,"The easiest way to use the latest version of node is to install ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/creationix/nvm"}),Object(o.b)("inlineCode",{parentName:"a"},"nvm")),". On Ubuntu, you can install using the install script but you have to add ",Object(o.b)("inlineCode",{parentName:"p"},"[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh # This loads NVM")," to the end of your ",Object(o.b)("inlineCode",{parentName:"p"},"~/.bashrc")," file as well."),Object(o.b)("p",null,"Once ",Object(o.b)("inlineCode",{parentName:"p"},"nvm")," is installed, run the following:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"nvm install --lts")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"nvm alias default lts/*")),Object(o.b)("p",null,"The latest LTS version of node should now be installed and set as default. The next step is to get all the required dependencies using ",Object(o.b)("inlineCode",{parentName:"p"},"npm"),". Navigate to the directory where the openhim-core-js source is located and run the following:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npm install")),Object(o.b)("p",null,"Then build the project:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"grunt build")),Object(o.b)("p",null,"In order to run the OpenHIM core server, ",Object(o.b)("a",a({parentName:"p"},{href:"http://www.mongodb.org/"}),"MongoDB")," must be installed and running."),Object(o.b)("p",null,"To run the server, execute:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npm start")," (this runs ",Object(o.b)("inlineCode",{parentName:"p"},"grunt build")," then ",Object(o.b)("inlineCode",{parentName:"p"},"node lib/server.js")," behind the scenes)"),Object(o.b)("p",null,"The server will by default start in development mode using the mongodb database 'openhim-development'. To start the serve in production mode use the following:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"NODE_ENV=production node lib/server.js")),Object(o.b)("p",null,"This starts the server with production defaults, including the use of the production mongodb database called 'openhim'."),Object(o.b)("p",null,"This project uses ",Object(o.b)("a",a({parentName:"p"},{href:"https://mochajs.org/"}),"mocha")," as a unit testing framework with ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/visionmedia/should.js/"}),"should.js")," for assertions and ",Object(o.b)("a",a({parentName:"p"},{href:"http://sinonjs.org/"}),"sinon.js")," for spies and mocks. The tests can be run using ",Object(o.b)("inlineCode",{parentName:"p"},"npm test"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pro tips:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"grunt watch")," - will automatically build the project on any changes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"grunt lint")," - ensure the code is lint free, this is also run before an ",Object(o.b)("inlineCode",{parentName:"li"},"npm test")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm link")," - will symlink you local working directory to the globally installed openhim-core module. Use this so you can use the global openhim-core binary to run your current work in progress. Also, if you build any local changes the server will automatically restart."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"grunt test --mochaGrep=<regex>")," - will only run tests with names matching the regex"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"grunt test --debugTests")," - enabled the node debugger while running unit tests. Add ",Object(o.b)("inlineCode",{parentName:"li"},"debugger")," statements and use ",Object(o.b)("inlineCode",{parentName:"li"},"node debug localhost:5858")," to connect to the debugger instance.")),Object(o.b)("h2",{id:"setting-up-your-openhim-console-dev-environment"},"Setting up your OpenHIM-console dev environment"),Object(o.b)("p",null,"Clone the repository at ",Object(o.b)("inlineCode",{parentName:"p"},"https://github.com/jembi/openhim-console.git")," and then run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")),Object(o.b)("p",null,"Install cli tools: ",Object(o.b)("inlineCode",{parentName:"p"},"npm install -g grunt-cli grunt bower")),Object(o.b)("p",null,"Install bower web components: ",Object(o.b)("inlineCode",{parentName:"p"},"bower install")),Object(o.b)("p",null,"To run the unit tests run ",Object(o.b)("inlineCode",{parentName:"p"},"grunt test")),Object(o.b)("p",null,"To start up a development instance of the webapp run ",Object(o.b)("inlineCode",{parentName:"p"},"grunt serve"),". The hostname and port can be changed in ",Object(o.b)("inlineCode",{parentName:"p"},"Gruntfile.js"),". The hostname can be changed to ",Object(o.b)("inlineCode",{parentName:"p"},"0.0.0.0")," in order to access the site from outside."),Object(o.b)("p",null,"Note all changes will be automatically applied to the webapp and the page will be reloaded after each change. In addition JSHint will be run to provide information about errors or bad code style. The unit tests will also be automatically be run if JSHint does not find any problems."),Object(o.b)("p",null,"For unit testing we are using ",Object(o.b)("a",a({parentName:"p"},{href:"https://mochajs.org/"}),"mocha")," with ",Object(o.b)("a",a({parentName:"p"},{href:"http://chaijs.com/api/bdd/"}),"chai.js")," for assertions. We are using the BDD ",Object(o.b)("inlineCode",{parentName:"p"},"should")," style for chai as it more closely resembles the unit testing style that is being used for the ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js"}),"OpenHIM-core component")),Object(o.b)("p",null,"This code was scaffolded using ",Object(o.b)("a",a({parentName:"p"},{href:"http://yeoman.io/"}),"Yeoman")," and the ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/yeoman/generator-angular"}),"angular generator"),". You can find more details about the commands available by looking at the docs of those tools."))}p.isMDXComponent=!0},325:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}));var o=n(0),a=n.n(o),r=a.a.createContext({}),i=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),c=o,u=s[l+"."+c]||s[c]||p[c]||r;return n?a.a.createElement(u,Object.assign({},{ref:t},b,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},b))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[b]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);
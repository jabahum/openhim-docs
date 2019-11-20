(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));n(0);var o=n(292);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const i={id:"manually-install-on-windows",title:"Manually install on Windows",sidebar_label:"Manually install on Windows"},l=[{value:"Install Node.js LTS",id:"install-nodejs-lts",children:[]},{value:"Install MongoDB",id:"install-mongodb",children:[]},{value:"OpenHIM Core",id:"openhim-core",children:[{value:"Install",id:"install",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Run as a Windows Service",id:"run-as-a-windows-service",children:[]}]},{value:"OpenHIM Console",id:"openhim-console",children:[{value:"Install IIS",id:"install-iis",children:[]},{value:"Setup Console",id:"setup-console",children:[]},{value:"Alternative Web Server Instructions",id:"alternative-web-server-instructions",children:[]}]},{value:"Finally",id:"finally",children:[]}],r={rightToc:l},s="wrapper";function c({components:e,...t}){return Object(o.b)(s,a({},r,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following is a quick start tutorial to help guide you through the steps required for a new OpenHIM installation on a Windows instance."),Object(o.b)("h2",{id:"install-nodejs-lts"},"Install Node.js LTS"),Object(o.b)("p",null,"Install the latest LTS version of Node.js from their ",Object(o.b)("a",a({parentName:"p"},{href:"http://nodejs.org/"}),"official site"),". Note that the OpenHIM only officially supports the LTS edition of node, which is currently version 8.x"),Object(o.b)("p",null,"The official process should be suitable for the OpenHIM; simply download and run the installer msi."),Object(o.b)("h2",{id:"install-mongodb"},"Install MongoDB"),Object(o.b)("p",null,"Install the latest version of MongoDB from their ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.mongodb.org/"}),"official site")),Object(o.b)("p",null,"As with Node.js, the official process should be suitable for the OpenHIM. Note however that MongoDB requires some additional steps after running the installer - in particular it would be a good idea to setup MongoDB as a service."),Object(o.b)("p",null,"The following guide should help you get fully setup: ",Object(o.b)("a",a({parentName:"p"},{href:"https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/"}),"https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/")),Object(o.b)("h2",{id:"openhim-core"},"OpenHIM Core"),Object(o.b)("h3",{id:"install"},"Install"),Object(o.b)("p",null,"To install the OpenHIM Core, launch a Node.js command prompt via ",Object(o.b)("strong",{parentName:"p"},"Start > All Programs > Node.js > Node.js command prompt"),". From here you can install Core using the following command"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-sh"}),"npm install -g openhim-core\n")),Object(o.b)("p",null,"You may see some warnings during the install process, especially if you do not have a C++ compiler installed, but this is not a problem and you can ignore these."),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Create a folder for storing the OpenHIM config, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"C:\\OpenHIM")," and grab a copy of the ",Object(o.b)("a",a({parentName:"p"},{href:"https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json"}),"default config")," from github and save it to locally, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"C:\\OpenHIM\\core.json"),". Change this config to suit your needs."),Object(o.b)("p",null,"You should now be able to run the OpenHIM Core. In a Node.js command prompt, run the following:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-sh"}),"openhim-core --conf=C:\\OpenHIM\\core.json\n")),Object(o.b)("p",null,"or with whichever file location you chose to create for the config."),Object(o.b)("h3",{id:"run-as-a-windows-service"},"Run as a Windows Service"),Object(o.b)("p",null,"To ensure the OpenHIM runs all the time, we will install it as a Windows Service using ",Object(o.b)("a",a({parentName:"p"},{href:"http://nssm.cc/download"}),"NSSM")," (the Non-Sucking Service Manager)"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download ",Object(o.b)("a",a({parentName:"li"},{href:"http://nssm.cc/download"}),"NSSM")," (the Non-Sucking Service Manager)"),Object(o.b)("li",{parentName:"ol"},"Open the archive and extract the ",Object(o.b)("inlineCode",{parentName:"li"},"win32")," or ",Object(o.b)("inlineCode",{parentName:"li"},"win64")," directory (depending on your Windows architecture) to a location on disk, for example ",Object(o.b)("inlineCode",{parentName:"li"},"c:\\nssm")),Object(o.b)("li",{parentName:"ol"},"Add the location ",Object(o.b)("inlineCode",{parentName:"li"},"c:\\nssm")," to your path, so that ",Object(o.b)("inlineCode",{parentName:"li"},"nssm")," is accessible without knowing and typing the whole path to the file on the command line"),Object(o.b)("li",{parentName:"ol"},"Open a command window with administrator privileges"),Object(o.b)("li",{parentName:"ol"},"Type ",Object(o.b)("inlineCode",{parentName:"li"},'nssm install openhim-core "C:\\Program Files\\nodejs\\node.exe" "<insert-full-path>\\node_modules\\openhim-core\\bin\\openhim-core.js --conf=C:\\OpenHIM\\core.json"')),Object(o.b)("li",{parentName:"ol"},"To capture the log output, type ",Object(o.b)("inlineCode",{parentName:"li"},'nssm set openhim-core AppStdout "c:\\OpenHIM\\stdout.log')),Object(o.b)("li",{parentName:"ol"},"To capture the error output, type ",Object(o.b)("inlineCode",{parentName:"li"},'nssm set openhim-core AppStderr "c:\\OpenHIM\\stderr.log')),Object(o.b)("li",{parentName:"ol"},"Type ",Object(o.b)("inlineCode",{parentName:"li"},"net start openhim-core")," to start the service or start it from the service manager.")),Object(o.b)("p",null,"You\u2019re done. You\u2019ve installed the OpenHIM as a windows service."),Object(o.b)("h2",{id:"openhim-console"},"OpenHIM Console"),Object(o.b)("p",null,"A web server will be required to host the OpenHIM Console and in this guide we will use IIS and as an alternative we will also explain how to use Nginx. However any good web server will be suitable, e.g. Apache."),Object(o.b)("h3",{id:"install-iis"},"Install IIS"),Object(o.b)("p",null,"Go to the ",Object(o.b)("a",a({parentName:"p"},{href:"http://www.iis.net/learn/install"}),"microsoft docs")," for articles on how to install IIS for your particular flavour of Windows OS."),Object(o.b)("p",null,"If you want to check if IIS is installed, browse to ",Object(o.b)("a",a({parentName:"p"},{href:"http://localhost"}),"http://localhost")," in your browser. If an image pops up, then IIS has been installed correctly."),Object(o.b)("h3",{id:"setup-console"},"Setup Console"),Object(o.b)("p",null,"Download the ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/jembi/openhim-console/releases/latest"}),"latest Console release")," and extract the contents into a folder such as ",Object(o.b)("inlineCode",{parentName:"p"},"C:\\OpenHIM\\Console"),". Note that you will need to use a utility such as ",Object(o.b)("a",a({parentName:"p"},{href:"http://www.7-zip.org/"}),"7-Zip")," to extract the .tar.gz archive."),Object(o.b)("p",null,"Console contains a config file located in ",Object(o.b)("inlineCode",{parentName:"p"},"Console\\config\\default.json"),". You will need to edit the ",Object(o.b)("inlineCode",{parentName:"p"},"host")," and ",Object(o.b)("inlineCode",{parentName:"p"},"port")," fields to point to the ",Object(o.b)("em",{parentName:"p"},"public")," address that the OpenHIM Core is running on. If you are only using the OpenHIM locally, then it is fine to leave the setting on localhost, however if you wish to make the Console accessible to other hosts, you will need to change the setting to either the machine's public IP address or domain name."),Object(o.b)("h4",{id:"configure-the-console-for-iis"},"Configure the Console for IIS"),Object(o.b)("p",null,"Create a new site in Internet Information Services Manager. You can name it whatever you want. I'll call it Console in these instructions."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Start IIS Manager."),Object(o.b)("li",{parentName:"ol"},"In the Connections panel, expand Sites"),Object(o.b)("li",{parentName:"ol"},"Right-click Sites and then click Add Web Site."),Object(o.b)("li",{parentName:"ol"},"In the Add Web Site dialog box, fill in the required fields, for example:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Site name: ",Object(o.b)("inlineCode",{parentName:"li"},"Console")),Object(o.b)("li",{parentName:"ul"},"Physical path: ",Object(o.b)("inlineCode",{parentName:"li"},"C:\\OpenHIM\\Console")),Object(o.b)("li",{parentName:"ul"},'Port: Make sure the port is something other than 80, as this will conflict with "Default Web Site" in IIS')))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"alternative-web-server-instructions"},"Alternative Web Server Instructions"),Object(o.b)("h4",{id:"install-nginx"},"Install Nginx"),Object(o.b)("p",null,"A web server will be required to host the OpenHIM Console and in this guide we will use Nginx. However any good web server will be suitable, e.g. Apache or IIS."),Object(o.b)("p",null,"As per ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install/"}),"this guide"),", download and extract the Nginx windows binary. You don't need to start nginx yet however."),Object(o.b)("h4",{id:"setup-console-1"},"Setup Console"),Object(o.b)("p",null,"Download the ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/jembi/openhim-console/releases/latest"}),"latest Console release")," and extract the contents into a folder such as ",Object(o.b)("inlineCode",{parentName:"p"},"C:\\OpenHIM\\Console"),". Note that you will need to use a utility such as ",Object(o.b)("a",a({parentName:"p"},{href:"http://www.7-zip.org/"}),"7-Zip")," to extract the .tar.gz archive."),Object(o.b)("p",null,"Console contains a config file located in ",Object(o.b)("inlineCode",{parentName:"p"},"Console\\config\\default.json"),". You will need to edit the ",Object(o.b)("inlineCode",{parentName:"p"},"host")," and ",Object(o.b)("inlineCode",{parentName:"p"},"port")," fields to point to the ",Object(o.b)("em",{parentName:"p"},"public")," address that the OpenHIM Core is running on. If you are only using the OpenHIM locally, then it is fine to leave the setting on localhost, however if you wish to make the Console accessible to other hosts, you will need to change the setting to either the machine's public IP address or domain name."),Object(o.b)("p",null,"Next locate the Nginx configuration file ",Object(o.b)("inlineCode",{parentName:"p"},"<nginx location>\\conf\\nginx.conf")," and change the root context to point to the Console:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-sh"}),"location / {\n    root   C:\\OpenHIM\\Console;\n    index  index.html index.htm;\n}\n")),Object(o.b)("p",null,"Also change any other settings as required, e.g. port numbers."),Object(o.b)("p",null,"Now you can startup Nginx from a command prompt by running:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-sh"}),"cd <nginx location>\nstart nginx\n")),Object(o.b)("h2",{id:"finally"},"Finally"),Object(o.b)("p",null,"The OpenHIM Core and Console should now be up and running!"),Object(o.b)("p",null,"Access the console on ",Object(o.b)("a",a({parentName:"p"},{href:"http://yourserver:port_number"}),"http://yourserver:port_number")," and login with ",Object(o.b)("strong",{parentName:"p"},"root@openhim.org")," using the password: ",Object(o.b)("strong",{parentName:"p"},"openhim-password")))}c.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o),i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},r=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,h=p[r+"."+b]||p[b]||c[b]||i;return n?a.a.createElement(h,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(h,Object.assign({},{ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[s]="string"==typeof e?e:o,l[1]=r;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
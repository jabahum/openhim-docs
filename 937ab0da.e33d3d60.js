(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{211:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return p}));t(0);var r=t(292);function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const o={id:"build-centos-rpm-package",title:"Build a CentOS RPM package",sidebar_label:"Build a CentOS RPM package"},c=[{value:"Using Vagrant",id:"using-vagrant",children:[]},{value:"Using Docker",id:"using-docker",children:[]}],i={rightToc:c},l="wrapper";function p({components:e,...a}){return Object(r.b)(l,n({},i,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The build process for the RPM package is based off of ",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/bbc/speculate/wiki/Packaging-a-Node.js-project-as-an-RPM-for-CentOS-7"}),"this")," blog. There is the option to use Vagrant or Docker to build the packages for both the core and console."),Object(r.b)("p",null,"The reason for including vagrant is to be able to test the RPM package by running it as a service using SystemCtl - similar to how it will likely be used in a production environment. SystemCtl is not available out the box in docker containers."),Object(r.b)("p",null,"Refer to this ",Object(r.b)("a",n({parentName:"p"},{href:"https://developers.redhat.com/blog/2014/05/05/running-systemd-within-docker-container/"}),"blog")," for a more detailed description of a possible work-around. This is not recommended since it is a hack. This is where vagrant comes in since it sets up an isolated VM."),Object(r.b)("h2",{id:"using-vagrant"},"Using Vagrant"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Setup environment"),Object(r.b)("p",{parentName:"li"},"Navigate to the infrastructure folder: ",Object(r.b)("inlineCode",{parentName:"p"},"infrastructure/centos")),Object(r.b)("p",{parentName:"li"},"Provision VM and automatically build RPM package:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"vagrant up\n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"If error free, skip to Step 3")),Object(r.b)("p",{parentName:"li"},"or without automatic provisioning (useful if you prefer manual control of the process):"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"vagrant up --no-provision\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"[Optional]"," The ",Object(r.b)("inlineCode",{parentName:"p"},"Vagrantfile")," provisions the VM with the latest source code from master and attempts to compile the RPM package for you. However, in the event an error occurs, or if you prefer to have manual control over the process, then you'll need to do the following:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Remote into the VM: ",Object(r.b)("inlineCode",{parentName:"li"},"vagrant ssh")),Object(r.b)("li",{parentName:"ul"},"Download or sync all source code into VM."),Object(r.b)("li",{parentName:"ul"},"Ensure all dependencies are installed.")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"npm i && npm i speculate\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Run speculate to generate the SPEC files needed to build the RPM package.")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"npm run spec\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Ensure the directory with the source code is linked to the rpmbuild directory - the folder RPMBUILD will use.")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"ln -s ~/openhim-core ~/rpmbuild\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Build RPM package.")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"rpmbuild -bb ~/rpmbuild/SPECS/openhim-core.spec\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install & Test package"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"sudo yum install -y ~/rpmbuild/RPMS/x86_64/openhim-core-{current_version}.x86_64.rpm\nsudo systemctl start openhim-core\ncurl https://localhost:8080/heartbeat -k\n")),Object(r.b)("p",{parentName:"li"},"Note: In order for openhim-core to run successfully, you'll need to point it to a valid instance of Mongo or install it locally:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"sudo yum install mongodb-org\nsudo service mongod start\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"How to check the logs"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"sudo systemctl status openhim-core\nsudo tail -f -n 100 /var/log/messages\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If everything checks out then extract the RPM package by leaving the VM."),Object(r.b)("p",{parentName:"li"},"Install Vagrant scp ",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/invernizzi/vagrant-scp"}),"plugin"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"vagrant plugin install vagrant-scp\n")),Object(r.b)("p",{parentName:"li"},"Then copy the file from the VM:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"vagrant scp default:/home/vagrant/rpmbuild/RPMS/x86_64/{filename}.rpm .\n")))),Object(r.b)("h2",{id:"using-docker"},"Using Docker"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Setup environment"),Object(r.b)("p",{parentName:"li"},"Navigate to the infrastructure folder: ",Object(r.b)("inlineCode",{parentName:"p"},"infrastructure/centos")),Object(r.b)("p",{parentName:"li"},"Build the docker image with centos, ready to build the rpm packages:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"docker build -t rpmbuilder .\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Build package"),Object(r.b)("p",{parentName:"li"},"Note, the RPMBUILD tool for CentOS does not allow special characters in the version name, such as the dash in 'v3.4.0-rc'."),Object(r.b)("p",{parentName:"li"},"Run the container and build the rpm packages for latest versions of core & console. This step will build the packages and copy them to the folder specified and automatically remove the docker container."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"docker run -v /folder/for/new/packages/core:/usr/packages --rm rpmbuilder\n")),Object(r.b)("p",{parentName:"li"},"In order to build a package for a specific version of core & console, pass the target versions as parameters as follows:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"docker run -v /folder/for/new/packages/core:/usr/packages --rm rpmbuilder --core-version=v3.4.0 --console-version=v1.11.1\n")),Object(r.b)("p",{parentName:"li"},"Note, the parameters are optional and it is not required to specify a version for either core or console since both will default to the latest code.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"How to test newly created packages"),Object(r.b)("p",{parentName:"li"},"Copy the packages to a CentOS system or VM and install them as a service. Alternatively use the vagrant approach as explained earlier."))))}p.isMDXComponent=!0},292:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return b}));var r=t(0),n=t.n(r),o=n.a.createContext({}),c=function(e){var a=n.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):Object.assign({},a,e)),t},i=function(e){var a=c(e.components);return n.a.createElement(o.Provider,{value:a},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},s=Object(r.forwardRef)((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===a.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),s=c(t),b=r,m=s[i+"."+b]||s[b]||p[b]||o;return t?n.a.createElement(m,Object.assign({},{ref:a},l,{components:t})):n.a.createElement(m,Object.assign({},{ref:a},l))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=s;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[l]="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=t[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);
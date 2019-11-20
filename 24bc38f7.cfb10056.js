(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return c}));n(0);var o=n(292);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const a={id:"virtual-machine",title:"Install via Virtual Machine",sidebar_label:"Install via Virtual Machine"},i=[{value:"Server Edition Linux",id:"server-edition-linux",children:[]},{value:"Desktop Edition Linux",id:"desktop-edition-linux",children:[]}],l={rightToc:i},s="wrapper";function c({components:e,...t}){return Object(o.b)(s,r({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When installing the OpenHIM on a VM that is running on your local machine, please take note of the following."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Oracle's ",Object(o.b)("a",r({parentName:"p"},{href:"https://www.virtualbox.org/"}),"VirtualBox")," is ",Object(o.b)("strong",{parentName:"p"},"recommended")," for the setup of VMs.")),Object(o.b)("h2",{id:"server-edition-linux"},"Server Edition Linux"),Object(o.b)("p",null,"If you are running a server edition of Linux such as Ubuntu 16.04 LTS as a VM, you will need to configure a static IP address (or use DHCP if your network has a DHCP server) that falls within the same network block as the rest of your network. If your local machine is not part of a network, make sure that the network block for your local machine matches that of the VM."),Object(o.b)("p",null,"For example, if your local machine IP address is 192.168.1.5 then the network block is 192.168.1.0 with a subnet mask of 255.255.255.0. This means that the hostname for the OpenHIM must contain the first three octets that is 192.168.1. The last octet must be unique such as 192.168.1.6."),Object(o.b)("p",null,"When asked to configure the OpenHIM console during the OpenHIM installation process, you will need to specify the IP address which is the same IP address that has been assigned to the VMs eth0 interface."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To verify the ",Object(o.b)("inlineCode",{parentName:"li"},"eth0")," IP address, run the command ",Object(o.b)("inlineCode",{parentName:"li"},"ifconfig -a")),Object(o.b)("li",{parentName:"ul"},"To change your ",Object(o.b)("inlineCode",{parentName:"li"},"eth0")," network configuration, run the command ",Object(o.b)("inlineCode",{parentName:"li"},"sudo vi /etc/network/interfaces"))),Object(o.b)("p",null,"You may also need to configure your local machine (the machine running the VM instance) network settings for the VM by changing the network adapter type to 'bridged' so that internet services will be possible as well as to access the OpenHIM console via your local machine internet browser."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": This happens within the VM software itself, not in the installed server edition of linux.")),Object(o.b)("h2",{id:"desktop-edition-linux"},"Desktop Edition Linux"),Object(o.b)("p",null,"If you are running a desktop edition of Linux such as Ubuntu 14.04 LTS as a VM, you will be able to logon to the OpenHIM console directly from the VM by using localhost as your configured hostname."),Object(o.b)("p",null,"Should you wish to access the OpenHIM console from your local machine, please follow the steps in ",Object(o.b)("a",r({parentName:"p"},{href:"#server-edition-linux"}),"Server Edition Linux"),"."))}c.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o),a=r.a.createContext({}),i=function(e){var t=r.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return r.a.createElement(a.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),h=o,p=u[l+"."+h]||u[h]||c[h]||a;return n?r.a.createElement(p,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(p,Object.assign({},{ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var h=2;h<a;h++)i[h]=n[h];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
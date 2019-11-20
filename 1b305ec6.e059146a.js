(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));n(0);var o=n(292);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const r={id:"console-configuration",title:"Console Configuration",sidebar_label:"Console Configuration"},i=[{value:"How to update your NGINX Config file",id:"how-to-update-your-nginx-config-file",children:[]},{value:"How to Generate a free Let\u2019s Encrypt (letsencrypt) certificate",id:"how-to-generate-a-free-lets-encrypt-letsencrypt-certificate",children:[]}],c={rightToc:i},l="wrapper";function s({components:e,...t}){return Object(o.b)(l,a({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The OpenHIM console is accessible by navigating to your web server."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": The default port for the OpenHIM console is port ",Object(o.b)("strong",{parentName:"p"},"80"),". It is possible to change this port in your NGINX configuration file. See ",Object(o.b)("a",a({parentName:"p"},{href:"#how-to-update-your-nginx-config-file"}),"How to update your NGINX Config file")," for instructions on how to do this.")),Object(o.b)("p",null,"For example, assuming your web server host is your local machine, the Uniform resource Locator (URL) will be ",Object(o.b)("a",a({parentName:"p"},{href:"http://localhost:80/"}),"http://localhost:80/"),". The default OpenHIM administrator login credentials are as follows. Upon logging in, you will be prompted to customize your credentials so that it is more secure:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Username: root@openhim.org"),Object(o.b)("li",{parentName:"ul"},"Password: openhim-password")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": You will have problems logging in if your OpenHIM server is still setup to use a self-signed certificate (the default). Please see section ",Object(o.b)("strong",{parentName:"p"},"How to Generate a free Let\u2019s Encrypt (letsencrypt) certificate")," which identifies the steps necessary to generate a free certificate. If you choose to do this later, you may get around this by following these steps:")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Visit the following link: ",Object(o.b)("a",a({parentName:"li"},{href:"https://localhost:8080/authenticate/root@openhim.org"}),"https://localhost:8080/authenticate/root@openhim.org")," in Chrome.",Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": Make sure you are visiting this link from the system that is running the OpenHIM core. Otherwise, replace localhost and 8080 with the appropriate OpenHIM core server hostname (or IP Address) and API port."))),Object(o.b)("li",{parentName:"ol"},"You should see a message saying \u201cYour connection is not private\u201d. Click \u201cAdvanced\u201d and then click \u201cProceed\u201d."),Object(o.b)("li",{parentName:"ol"},"Once you have done this, you should see some JSON text displayed on the screen, you can ignore this and close the page. This will ignore the fact that the certificate is self-signed."),Object(o.b)("li",{parentName:"ol"},"Now, you should be able to go back to the OpenHIM console login page and login. This problem will occur every now and then until you load a properly signed certificate into the OpenHIM core server.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The credentials used from this point will be considered the OpenHIM administrative account and is therefore highly recommended that you apply a strong password. General best practices in password creation that have been identified in this ",Object(o.b)("a",a({parentName:"p"},{href:"https://www.symantec.com/connect/articles/simplest-security-guide-better-password-practices"}),"article")," may help you.")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"how-to-update-your-nginx-config-file"},"How to update your NGINX Config file"),Object(o.b)("p",null,"The following steps guides you through the process of updating your NGINX config file for the purpose of changing the default listening port for the OpenHIM console:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate to the NGINX config file ",Object(o.b)("inlineCode",{parentName:"li"},"vim /etc/nginx/sites-enabled/openhim-console")),Object(o.b)("li",{parentName:"ol"},"Add the following line directly after the curly bracket: listen 12345; // Where 12345 is the port number that you have chosen to use"),Object(o.b)("li",{parentName:"ol"},"Save and exit with the command :wq"),Object(o.b)("li",{parentName:"ol"},"Check your configuration for syntax errors ",Object(o.b)("inlineCode",{parentName:"li"},"sudo nginx -t")),Object(o.b)("li",{parentName:"ol"},"Refresh the NGINX config ",Object(o.b)("inlineCode",{parentName:"li"},"service nginx reload"))),Object(o.b)("p",null,"Your NGINX configuration will then appear as follows:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-nginx"}),"server {\n  listen 12345;\n  root /usr/share/openhim-console;\n  index index.html;\n\n  location / {\n    try_files $uri $url/ =404;\n  }\n}\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"how-to-generate-a-free-lets-encrypt-letsencrypt-certificate"},"How to Generate a free Let\u2019s Encrypt (letsencrypt) certificate"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": This section only applies to OpenHIM installations that have a public facing domain name. If you are running the OpenHIM on your local machine or on a virtual machine, you may continue with the self-signed certificate.")),Object(o.b)("p",null,"You are able to generate a free certificate by following these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fetch letsencrypt certbot script and make it executable (These commands assume you are running as the root user):"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",a({parentName:"pre"},{className:"language-sh"}),"wget https://dl.eff.org/certbot-auto\nchmod a+x certbot-auto\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install certbot dependencies (If this fails and you have a small amount of ram then you may need to add a swapfile):"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",a({parentName:"pre"},{className:"language-sh"}),"./certbot-auto\n./certbot-auto certonly --webroot -w /usr/share/openhim-console -d <your_hostname>\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Allow the openhim the ability to read the generated certificate and key:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",a({parentName:"pre"},{className:"language-sh"}),"chmod 750 /etc/letsencrypt/live/\nchmod 750 /etc/letsencrypt/archive/\nchown :openhim /etc/letsencrypt/live/ /etc/letsencrypt/archive/\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Change your OpenHIM cert config in /etc/openhim/config.json to the following:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",a({parentName:"pre"},{className:"language-json"}),'"certificateManagement": {\n  "watchFSForCert": true,\n  "certPath": "/etc/letsencrypt/live/<your_hostname>/fullchain.pem",\n  "keyPath": "/etc/letsencrypt/live/<your_hostname>/privkey.pem"\n}\n\n(or enter these details when asked during the OpenHIM installation)\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"setup auto renewal of the certificate:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",a({parentName:"pre"},{className:"language-sh"}),"crontab -e\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"append the following line at the end of your crontab:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",a({parentName:"pre"},{className:"language-text"}),"0 0 * * * /root/certbot-auto renew --no-self-upgrade >> /var/log/letsencrypt-renewal.log\n")))))}s.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o),r=a.a.createContext({}),i=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),b=o,u=p[c+"."+b]||p[b]||s[b]||r;return n?a.a.createElement(u,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
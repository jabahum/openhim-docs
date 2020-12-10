(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{303:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return u}));var i=r(1),a=(r(0),r(382));const n={id:"certificates-keystore",title:"Certificates & Keystore",sidebar_label:"Certificates & Keystore",keywords:["OpenHIM","Certificates","Keystore"],description:"Manage OpenHIM certificates and keystore"},c={id:"version-5.2.x/user-guide/certificates-keystore",title:"Certificates & Keystore",description:"Manage OpenHIM certificates and keystore",source:"@site/versioned_docs/version-5.2.x/user-guide/certificates.md",permalink:"/docs/user-guide/certificates-keystore",version:"5.2.x",sidebar_label:"Certificates & Keystore",sidebar:"version-5.2.x/docs",previous:{title:"Polling Channels (scheduled tasks)",permalink:"/docs/user-guide/polling-channels"},next:{title:"Mediators",permalink:"/docs/user-guide/mediators"}},o=[{value:"Server certificate &amp; key",id:"server-certificate--key",children:[{value:"Generating a server certificate",id:"generating-a-server-certificate",children:[]}]},{value:"Client certificates",id:"client-certificates",children:[{value:"Generating a trusted client certificate",id:"generating-a-trusted-client-certificate",children:[]}]}],s={rightToc:o},l="wrapper";function u({components:e,...t}){return Object(a.b)(l,Object(i.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The OpenHIM has a built-in capability to manage TLS certificates and keys through its keystore. You can upload a certificate and key that you have bought from a certificate authority such as Thwate or you can even generate your self-signed certificate to use in your private OpenHIM implementation. Both mechanisms are secure, however, we suggest that you purchase a certificate from a trusted certificate authority to save you some pain with self-signed certificates."),Object(a.b)("p",null,"The OpenHIM also allows you to trust particular certificates. This allows you to specify exactly which client or external hosts you trust and it ties in with the OpenHIM's authentication mechanism for clients."),Object(a.b)("h2",{id:"server-certificate--key"},"Server certificate & key"),Object(a.b)("p",null,"To upload an OpenHIM server certificate, simply drag and drop the certificate and key onto the correct boxes within the certificates page. You will be asked to restart the OpenHIM for this to take effect. The OpenHIM will also warn you if the key and certificate pair that you have uploaded do not match. ",Object(a.b)("strong",{parentName:"p"},"DO NOT")," restart the server if these don't match. It will prevent the server from being able to startup correctly and you will have to fix this manually in the database. If your key requires a passphrase be sure to submit that in the field provided as well."),Object(a.b)("h3",{id:"generating-a-server-certificate"},"Generating a server certificate"),Object(a.b)("p",null,"To generate a self-signed certificate click on the '+ Create Server Certificate' button in the top right. This will guide you through the process of creating a certificate and key and it will automatically add this to the server once you are done. Make sure you download the certificate and key when prompted. For security reasons, the key is not stored on the server."),Object(a.b)("h2",{id:"client-certificates"},"Client certificates"),Object(a.b)("p",null,"If you have client or host certificates for the OpenHIM, drop them into the bottom box on the certificates page to upload them. These certificates may be attached to clients when you edit a particular client from the client's page. This allows clients to be authenticated when using mutual TLS. They may also be used on a route when editing a channel to trust a particular host's certificate."),Object(a.b)("h3",{id:"generating-a-trusted-client-certificate"},"Generating a trusted client certificate"),Object(a.b)("p",null,"You may generate a client certificate by clicking the '+ Create Client Certificate' button and following the steps. Download the certificate and key when prompted as the key is not stored on the server for security reasons."))}u.isMDXComponent=!0},382:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return d}));var i=r(0),a=r.n(i),n=a.a.createContext({}),c=function(e){var t=a.a.useContext(n),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},o=function(e){var t=c(e.components);return a.a.createElement(n.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,s=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(r[i]=e[i]);return r}(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,h=u[o+"."+d]||u[d]||l[d]||n;return r?a.a.createElement(h,Object.assign({},{ref:t},s,{components:r})):a.a.createElement(h,Object.assign({},{ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,c=new Array(n);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:i,c[1]=o;for(var d=2;d<n;d++)c[d]=r[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);
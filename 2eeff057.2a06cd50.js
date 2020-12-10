(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{197:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(1),a=(t(0),t(382));const o={id:"polling-channels",title:"Polling Channels (scheduled tasks)",sidebar_label:"Polling Channels (scheduled tasks)",keywords:["OpenHIM","Polling channel"],description:"OpenHIM polling channels feature"},i={id:"version-5.2.x/user-guide/polling-channels",title:"Polling Channels (scheduled tasks)",description:"OpenHIM polling channels feature",source:"@site/versioned_docs/version-5.2.x/user-guide/polling-channels.md",permalink:"/docs/user-guide/polling-channels",version:"5.2.x",sidebar_label:"Polling Channels (scheduled tasks)",sidebar:"version-5.2.x/docs",previous:{title:"Alerting and reports",permalink:"/docs/user-guide/alerting-reports"},next:{title:"Certificates & Keystore",permalink:"/docs/user-guide/certificates-keystore"}},l=[],s={rightToc:l},c="wrapper";function p({components:e,...n}){return Object(a.b)(c,Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A great feature of the OpenHIM is the ability to trigger tasks in other systems.\nThis is made possible by the polling channel. Polling channels are channels that the OpenHIM can trigger internally on a schedule. When a channel is triggered it will cause each of the routes that are configured for that channel to execute."),Object(a.b)("p",null,"The OpenHIM will trigger the polling channel with a ",Object(a.b)("inlineCode",{parentName:"p"},"GET")," request to the ",Object(a.b)("inlineCode",{parentName:"p"},"/trigger"),"\npath on the defined schedule. Each route can override the path with their own as\nlong as they are configured with a path. External systems can be triggered by\npointing a route at them. The external systems will have to expose an HTTP\nendpoint for them to be triggered. The triggering will always happen as an HTTP\n",Object(a.b)("inlineCode",{parentName:"p"},"GET")," request."),Object(a.b)("p",null,"To configure a polling channel in the console, navigate to the 'Channels' page,\nselect add channel and set the type of the channel to 'polling'. You will be able\nto provide a schedule for the polling channel to be executed. You may provide this\nin cron format (ie. 0 4 ","*"," ","*"," ","*"," ) or in a descriptive format (ie. 5 minutes). See\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rschmukler/agenda#everyinterval-name-data-options-cb"}),"the agenda documentation"),"\nfor a more complete description of this format. From there you may configure the\nrest of the channel as usual and add routes for each external system that is to\nbe triggered."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"When using cron format, it is important to note that the server's timezone will be used to action the trigger")))}p.isMDXComponent=!0},382:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(t),h=r,u=p[l+"."+h]||p[h]||c[h]||o;return t?a.a.createElement(u,Object.assign({},{ref:n},s,{components:t})):a.a.createElement(u,Object.assign({},{ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var h=2;h<o;h++)i[h]=t[h];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);
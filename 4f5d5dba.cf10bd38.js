(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));t(0);var r=t(292);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const o={id:"polling-channels",title:"Polling Channels (scheduled tasks)",sidebar_label:"Polling Channels (scheduled tasks)"},i=[],l={rightToc:i},c="wrapper";function s({components:e,...n}){return Object(r.b)(c,a({},l,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A great feature of the OpenHIM is the ability to trigger tasks in other systems.\nThis is made possible by a special type of channel called a polling channel. Polling\nchannels are channels that the OpenHIM will trigger internally on some sort of\nschedule. When a channel is triggered it will cause each of the routes that are\nconfigured for that channel to execute."),Object(r.b)("p",null,"The OpenHIM will trigger the polling channel with a ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," request to the ",Object(r.b)("inlineCode",{parentName:"p"},"/trigger"),"\npath on the defined schedule. Each route can override the path with their own as\nlong as they are configured with a path. External systems can be triggered by\npointing a route at them. The external systems will have to expose an HTTP\nendpoint for them to be triggered. The triggering will always happen as an HTTP\n",Object(r.b)("inlineCode",{parentName:"p"},"GET")," request."),Object(r.b)("p",null,"To configure a polling channel, in the console click on 'Channels' on the menu,\nchoose add channel and set the type of the channel to 'polling'. You will be able\nto provide a schedule for the polling channel to be executed. You may provide this\nin cron format (ie. 0 4 ","*"," ","*"," ","*"," ) or in a descriptive format (ie. 5 minutes). See\n",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/rschmukler/agenda#everyinterval-name-data-options-cb"}),"the agenda documentation"),"\nfor a more complete description of this format. From there you may configure the\nrest of the channel as usual and add routes for each external system that is to\nbe triggered."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NB")," When using cron format, it is important to note that the servers' timezone will be used to action the trigger"))}s.isMDXComponent=!0},292:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(t),h=r,u=p[l+"."+h]||p[h]||s[h]||o;return t?a.a.createElement(u,Object.assign({},{ref:n},c,{components:t})):a.a.createElement(u,Object.assign({},{ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var h=2;h<o;h++)i[h]=t[h];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);
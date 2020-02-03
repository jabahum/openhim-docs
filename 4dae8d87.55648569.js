(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{184:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"default",(function(){return c}));var n=r(1),a=(r(0),r(338));const o={id:"alerting-reports",title:"Alerting and reports",sidebar_label:"Alerting and reports",keywords:["OpenHIM","Alerts","Reports"],description:"Alerting and reporting on the OpenHIM"},s=[{value:"Failure alerting",id:"failure-alerting",children:[]},{value:"Reports",id:"reports",children:[]}],i={id:"version-5.2.x/user-guide/alerting-reports",title:"Alerting and reports",description:"Alerting and reporting on the OpenHIM",source:"@site/versioned_docs/version-5.2.x/user-guide/alerting.md",permalink:"/docs/user-guide/alerting-reports",version:"5.2.x",sidebar_label:"Alerting and reports",sidebar:"version-5.2.x/docs",previous:{title:"Transaction List",permalink:"/docs/user-guide/transaction-list"},next:{title:"Polling Channels (scheduled tasks)",permalink:"/docs/user-guide/polling-channels"}},l={rightToc:s,metadata:i},u="wrapper";function c({components:e,...t}){return Object(a.b)(u,Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The OpenHIM supports alerting users via email or sms under specific conditions. It is also able to send out daily and weekly reports about the transactions that it has processed. In the following section we explore these functions in more detail."),Object(a.b)("h2",{id:"failure-alerting"},"Failure alerting"),Object(a.b)("p",null,"Alerts can be sent out to a group of users when a particular http status code is received as a response to a transaction. To setup alerts, edit the channel that you wish to enable alerts for and select the 'Alerts' tab. On this tab you can add rules for when alerts are sent out. You must specify on which http status code you want the alerts to trigger (eg. 401). You can even specify a range like 4xx for any status codes in the 400-499 range. You may also optionally set a failure rate. This allows you to only trigger alerts if the rate of failure is above the percentage that you specify. Alerts are sampled at 1 min intervals."),Object(a.b)("p",null,"To ensure that alerts are sent to the right group of people, you must specify the users or contact list. You may choose individual users or choose to add an entire contact list of users. Contact lists can be managed through the 'Contact lists' option on the main menu."),Object(a.b)("p",null,"You may add as many alerts as you need and as many users and contact lists as you require for each alert."),Object(a.b)("h2",{id:"reports"},"Reports"),Object(a.b)("p",null,"The OpenHIM can also produce daily and weekly reports for users. These will contain information such as how many requests were processed and how many of those were successful or how many failed. There are two ways to setup reporting. A user may enable reporting on their profile (click on the username on the top right and choose profile, then enable the reports that you wish to receive) or an admin user can enable reporting for any other user. By default, the daily reports are sent at 7am the following day and the weekly reports are sent out at 7am each Monday for the previous week."))}c.isMDXComponent=!0},338:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n),o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},c=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),c=s(r),p=n,d=c[i+"."+p]||c[p]||u[p]||o;return r?a.a.createElement(d,Object.assign({},{ref:t},l,{components:r})):a.a.createElement(d,Object.assign({},{ref:t},l))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);
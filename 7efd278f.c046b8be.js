(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{196:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));r(0);var n=r(292);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const o={id:"transaction-list",title:"Transaction List",sidebar_label:"Transaction List"},s=[{value:"Error resolution",id:"error-resolution",children:[]}],i={rightToc:s},c="wrapper";function u({components:e,...t}){return Object(n.b)(c,a({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"transactions")," page is pretty straight forward. It shows a list of the most recent transactions that the OpenHIM has received and processed. You are presented with a number of different filters (even more are accessible by clicking the 'Toggle Advanced Filters' button)."),Object(n.b)("p",null,"You may click on each transaction in the list to get more details on it. From here you can view the request and response details, re-run that transaction or view the different routes that it was sent to (if there are multiple)."),Object(n.b)("p",null,"If this transaction was routed though a mediator you may see some additional details such as the orchestrations that the mediator performed."),Object(n.b)("p",null,"Each transaction is marked with a status that show what state of processing it is in and whether the transaction was successful or not. Here is what each status means for a particular transaction:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Processing - We are waiting for responses from one or more routes"),Object(n.b)("li",{parentName:"ul"},"Successful - The primary route and all other routes returned successful http response codes (2xx)."),Object(n.b)("li",{parentName:"ul"},"Failed - The primary route has returned a failed http response code (5xx)"),Object(n.b)("li",{parentName:"ul"},"Completed - The primary route and the other routes did not return a failure http response code (5xx) but some weren't successful (2xx)."),Object(n.b)("li",{parentName:"ul"},"Completed with error(s) - The primary route did not return a failure http response code (5xx) but one of the routes did.")),Object(n.b)("h2",{id:"error-resolution"},"Error resolution"),Object(n.b)("p",null,"If a transaction has failed or needs to be re-run you may do so by either clicking on the transaction and choosing 're-run transaction' or you can perform a bulk re-run by selecting the desired transactions and choosing 're-run selected transactions'. You may also choose to re-run all transactions that match a particular filter. Just filter by the desired parameters and click 're-run all transaction that match current filters'."),Object(n.b)("p",null,"All bulk re-runs can be monitored in the 'tasks' page."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," the original transaction is always stored when a transaction is re-run, it is just marked as re-run. You will be warned if you try to re-run a transaction that has already been re-run as this could cause duplicate data in your system.")))}u.isMDXComponent=!0},292:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n),o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),l=s(r),p=n,d=l[i+"."+p]||l[p]||u[p]||o;return r?a.a.createElement(d,Object.assign({},{ref:t},c,{components:r})):a.a.createElement(d,Object.assign({},{ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=l;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);
/*! For license information please see 083762ca.0af44fb1.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"metadata",(function(){return p})),t.d(n,"default",(function(){return d}));var a=t(1),r=t(6),o=(t(0),t(338)),i=t(340),l=t(341),c={id:"polling-trigger",title:"Trigger a Polling Channel",sidebar_label:"Trigger Polling",keywords:["OpenHIM","API","Channel","Polling","Trigger"],description:"Manually trigger a polling channel request"},s=[{value:"Manually trigger a polling channel",id:"manually-trigger-a-polling-channel",children:[]},{value:"Example",id:"example",children:[]}],p={id:"version-5.2.x/api/channels/polling-trigger",title:"Trigger a Polling Channel",description:"Manually trigger a polling channel request",source:"@site/versioned_docs/version-5.2.x/api/channels/polling-trigger.md",permalink:"/docs/api/channels/polling-trigger",version:"5.2.x",sidebar_label:"Trigger Polling",sidebar:"version-5.2.x/api",previous:{title:"Delete Channel",permalink:"/docs/api/channels/delete"},next:{title:"Clients overview",permalink:"/docs/api/clients/overview"}},u={rightToc:s,metadata:p},h="wrapper";function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(h,Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"manually-trigger-a-polling-channel"},"Manually trigger a polling channel"),Object(o.b)("p",null,"The polling is configured in the same way as we do for normal channel configuration, however, we don't supply a ",Object(o.b)("inlineCode",{parentName:"p"},"urlPattern")," to match an incoming request on as the polling channel is triggered internally from the OpenHIM core based on the supplied cron pattern. "),Object(o.b)("p",null,"To manually trigger a polling channel request you will need to make a TLS request to the OpenHIM API for the below method and endpoint."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"Method: POST\nEndpoint: {openhim_url}:8080/channels/:channelId/trigger\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Before we can send our request to the OpenHIM API we need to ensure that we construct our valid HTTP headers to successfully authenticate with the OpenHIM API. "),Object(o.b)(i.a,{defaultValue:"nodejs",values:[{label:"NodeJS",value:"nodejs"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("p",null,"Copy the below code at the bottom of your nodejs script that handles the authentication of the OpenHIM headers as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"openhimOptions")," values with the correct implementation details"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// append below code to the \"openhim-api.js\" script containing the authentication methods. \n// This is described within the authentication section\n\n(async () => {\n  const openhimOptions = {\n    apiURL: 'https://localhost:8080',\n    apiEndpoint: '/channels/channelId/trigger',\n    username: 'root@openhim.org',\n    password: 'openhim-password',\n    rejectUnauthorized: false\n  }\n\n  const headers = await genAuthHeaders(openhimOptions)\n  \n  const options = { \n    method: 'POST',\n    url: `${openhimOptions.apiURL}${openhimOptions.apiEndpoint}`,\n    rejectUnauthorized: openhimOptions.rejectUnauthorized,\n    headers: headers\n  }\n  \n  request(options, (error, response, body) => {\n    if (error) throw new Error(error)\n  \n    console.log({\n      statusCode: response.statusCode,\n      body\n    })\n  })\n})()\n")),Object(o.b)("p",null,"Execute the below command in your terminal to run the nodejs script"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node openhim-api.js\n"))),Object(o.b)(l.a,{value:"bash",mdxType:"TabItem"},Object(o.b)("p",null,"Ensure that you have created your bash script to construct the HTTP authentication headers and send the request to the OpenHIM API as described in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../introduction/authentication"}),"authentication section"),"."),Object(o.b)("p",null,"Execute the below command in your terminal where the file is located with the required arguments. Replace the placeholder arguments with the correct implementation details"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-curl"}),"./openhim-api.sh root@openhim.org openhim-password -v -X POST https://localhost:8080/channels/channelId/trigger\n")))),Object(o.b)("p",null,"The response status code will be ",Object(o.b)("inlineCode",{parentName:"p"},"201")," if successful."))}d.isMDXComponent=!0},338:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a),o=r.a.createContext({}),i=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=i(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(t),u=a,h=p[l+"."+u]||p[u]||s[u]||o;return t?r.a.createElement(h,Object.assign({},{ref:n},c,{components:t})):r.a.createElement(h,Object.assign({},{ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},339:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},340:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(339),i=t.n(o),l=t(85),c=t.n(l);const s={left:37,right:39};n.a=function(e){const{block:n,children:t,defaultValue:o,values:l}=e,[p,u]=Object(a.useState)(o),h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":n})},l.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:i()("tab-item",c.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,n,t)=>{switch(t.keyCode){case s.right:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s.left:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(h,e.target,e),onFocus:()=>u(e),onClick:()=>u(e)},n))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===p)[0]))}},341:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);
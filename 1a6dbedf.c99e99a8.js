(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));a(0);var n=a(292);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const i={id:"basic-configuration",title:"Basic configuration",sidebar_label:"Basic configuration"},l=[{value:"Adding Clients",id:"adding-clients",children:[]},{value:"Adding Channels",id:"adding-channels",children:[]}],o={rightToc:l},s="wrapper";function b({components:e,...t}){return Object(n.b)(s,r({},o,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This getting started guide will take you through two very important parts of the OpenHIM console which will allow you to create ",Object(n.b)("strong",{parentName:"p"},"Clients")," and ",Object(n.b)("strong",{parentName:"p"},"Channels")," to get messages routed through the system."),Object(n.b)("p",null,"Before you get started with ",Object(n.b)("strong",{parentName:"p"},"Clients")," and ",Object(n.b)("strong",{parentName:"p"},"Channels")," you will need OpenHIM core and OpenHIM console setup. To do so, follow the installation guide ",Object(n.b)("a",r({parentName:"p"},{href:"../getting-started.html"}),"here"),"."),Object(n.b)("p",null,"To get a better understanding of what the openHIM core does and how it works, read up on the ",Object(n.b)("a",r({parentName:"p"},{href:"../about.html"}),"OpenHIM core concepts")),Object(n.b)("p",null,"A ",Object(n.b)("strong",{parentName:"p"},"Client")," is usually some system that you want to able to send request to the OpenHIM. Setting up a ",Object(n.b)("strong",{parentName:"p"},"client")," allows the OpenHIM to authenticate requests. A ",Object(n.b)("strong",{parentName:"p"},"Channel")," defines a path that a request will take through the OpenHIM. It describes one more ",Object(n.b)("strong",{parentName:"p"},"routes")," for the request to be forwarded to, which ",Object(n.b)("strong",{parentName:"p"},"clients")," are allowed to use this ",Object(n.b)("strong",{parentName:"p"},"channel"),", which requests are to be directed to this ",Object(n.b)("strong",{parentName:"p"},"channel")," and many more options that allow you to controls what happens for a particular request."),Object(n.b)("p",null,"To manage ",Object(n.b)("strong",{parentName:"p"},"clients")," and ",Object(n.b)("strong",{parentName:"p"},"channels")," you will need to log into the OpenHIM console and then you may follow the steps below."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note")," - Only an Admin user has the permission to Add/Edit/Delete a ",Object(n.b)("strong",{parentName:"p"},"Client")," or ",Object(n.b)("strong",{parentName:"p"},"Channel")),Object(n.b)("h2",{id:"adding-clients"},"Adding Clients"),Object(n.b)("p",null,"Follow the below steps to successfully create/update a ",Object(n.b)("strong",{parentName:"p"},"Client")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Navigate to the ",Object(n.b)("strong",{parentName:"li"},"Clients")," menu option found in the left sidebar."),Object(n.b)("li",{parentName:"ul"},"On the ",Object(n.b)("strong",{parentName:"li"},"Clients")," page you will be presented with a list of all the created ",Object(n.b)("strong",{parentName:"li"},"Clients")),Object(n.b)("li",{parentName:"ul"},'Click on the blue "',Object(n.b)("strong",{parentName:"li"},"+ Client"),'" button to open a popup modal box where you will supply the ',Object(n.b)("strong",{parentName:"li"},"Client")," details ",Object(n.b)("strong",{parentName:"li"},"OR")," click on one of the existing ",Object(n.b)("strong",{parentName:"li"},"Clients")," to open up the popup modal with the ",Object(n.b)("strong",{parentName:"li"},"Clients'")," saved details."),Object(n.b)("li",{parentName:"ul"},"Supply all the required fields (marked with a ","*",') and click the blue "',Object(n.b)("strong",{parentName:"li"},"Save changes"),'" button when completed.')),Object(n.b)("p",null,"There are many fields that you may supply, here is an explanation of what each of them do:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Client ID")," - This is a unique ID giving to a client to be used as a reference when adding ",Object(n.b)("strong",{parentName:"li"},"Channels")," as well as for authorisation checking."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Client Name")," - This is a descriptive name of the ",Object(n.b)("strong",{parentName:"li"},"Client"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Domain")," - A domain that is associated with this ",Object(n.b)("strong",{parentName:"li"},"Client")," - ",Object(n.b)("strong",{parentName:"li"},"Note")," The domain needs to match the CN of the certificate if a certificate is used otherwise the ",Object(n.b)("strong",{parentName:"li"},"Client")," won't be authorised successfully."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Roles")," - The ",Object(n.b)("strong",{parentName:"li"},"Client"),' roles field is a list of authorized user groups that are allowed to access this channel. You can either select a role from the suggested roles that appear when you start typing, or you can add a new role to the list by typing in the role and pressing "',Object(n.b)("strong",{parentName:"li"},"Enter"),'"'),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Certificate")," - The certificate field is used when the OpenHIM core is running using Mutual TLS Authentication and needs to authenticate requests coming from the ",Object(n.b)("strong",{parentName:"li"},"Client"),". By default, OpenHIM core uses Mutual TLS Authentication"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Basic Auth Password")," - The password field is used when the OpenHIM core is running in basic auth mode and does not require a certificate, it does however require a password.")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note")," - Either a Certificate OR a Basic Auth Password is required depending on the configuration. If Basic Auth is enabled in the OpenHIM core configuration then only a password is required, if Mutual TLS Authentication is enabled then a ",Object(n.b)("strong",{parentName:"p"},"Client")," Certificate is required."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note")," - When a ",Object(n.b)("strong",{parentName:"p"},"Client"),' Certificate is added or updated, the OpenHIM console will inform the user that a server restart is required. This is for the new certificate to be applied correctly. The user can either decide to manually restart the server at a later time or to click the red "',Object(n.b)("strong",{parentName:"p"},"Restart Server Now!"),'" button.'),Object(n.b)("h2",{id:"adding-channels"},"Adding Channels"),Object(n.b)("p",null,"Follow the below steps to successfully create/update a ",Object(n.b)("strong",{parentName:"p"},"Channel")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Navigate to the ",Object(n.b)("strong",{parentName:"li"},"Channels")," menu option found in the left sidebar."),Object(n.b)("li",{parentName:"ul"},"On the ",Object(n.b)("strong",{parentName:"li"},"Channels")," page you will be presented with a list of all the created ",Object(n.b)("strong",{parentName:"li"},"Channels")),Object(n.b)("li",{parentName:"ul"},'Click on the blue "',Object(n.b)("strong",{parentName:"li"},"+ Channel"),'" button to open a popup modal box where you will supply the ',Object(n.b)("strong",{parentName:"li"},"Channel")," details ",Object(n.b)("strong",{parentName:"li"},"OR")," click on one of the existing ",Object(n.b)("strong",{parentName:"li"},"Channels")," to open up the popup modal with the ",Object(n.b)("strong",{parentName:"li"},"Channels'")," saved details."),Object(n.b)("li",{parentName:"ul"},'Supply all the required fields and click the blue "',Object(n.b)("strong",{parentName:"li"},"Save changes"),'" button when completed.')),Object(n.b)("p",null,"The two ",Object(n.b)("em",{parentName:"p"},"most")," important fields to supply are the ",Object(n.b)("strong",{parentName:"p"},"URL Pattern")," field and the ",Object(n.b)("strong",{parentName:"p"},"Allowed roles and clients")," field. The ",Object(n.b)("strong",{parentName:"p"},"URL Pattern")," field describes which incoming requests should be send down this ",Object(n.b)("strong",{parentName:"p"},"channel"),". It does this by looking at the URL of the incoming request and testing if it matches the RegEx that you supply in this field. Note, only the first matched ",Object(n.b)("strong",{parentName:"p"},"channel")," that is found receives the request for processing. The ",Object(n.b)("strong",{parentName:"p"},"Allowed roles and clients")," field identifies which ",Object(n.b)("strong",{parentName:"p"},"clients")," are allowed to send requests to this ",Object(n.b)("strong",{parentName:"p"},"channel"),". If a request matches a ",Object(n.b)("strong",{parentName:"p"},"channel")," but the ",Object(n.b)("strong",{parentName:"p"},"client")," system is not specified in this field or a ",Object(n.b)("strong",{parentName:"p"},"role")," containing that the ",Object(n.b)("strong",{parentName:"p"},"client")," belongs to is not specified in this field then the request will be denied access to the ",Object(n.b)("strong",{parentName:"p"},"channel"),"."),Object(n.b)("p",null,"There are many fields that you may supply and these are spread over a number of tabs, here is an explanation of what each of them do:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Basic Info tab"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Channel Name")," - This is a descriptive name of the ",Object(n.b)("strong",{parentName:"li"},"Channel"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Channel Type")," - Select a ",Object(n.b)("strong",{parentName:"li"},"Channel")," type",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"HTTP")," - Default ",Object(n.b)("strong",{parentName:"li"},"Channel")," type.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Methods")," - The allowed ",Object(n.b)("inlineCode",{parentName:"li"},"http")," methods for a channel"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"TCP")," - Supply a TCP Host and Port"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"TLS")," - Supply a TLS Host and Port"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Polling")," - Supply a Polling schedule - Cron format: '",Object(n.b)("em",{parentName:"li"},"/10 ")," ","*"," ","*"," ","*","' or Written format: '10 minutes' - The module 'Agenda' is used to accomplish the polling - You can find more documentation ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/rschmukler/agenda"}),"here")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Status")," - Set whether this channel is enabled to receive requests or if it's disabled","*","."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Request Matching tab"),":",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"URL Pattern")," - Supply a URL pattern to match an incoming transaction - ",Object(n.b)("strong",{parentName:"li"},"Note")," this field accepts a RegEx value - More information on RegEx can be found ",Object(n.b)("a",r({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"}),"here")," or ",Object(n.b)("a",r({parentName:"li"},{href:"http://www.regular-expressions.info/"}),"here"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"NB!. This field is not applicable for ",Object(n.b)("strong",{parentName:"li"},"Channel Type")," of ",Object(n.b)("strong",{parentName:"li"},"TCP")," or ",Object(n.b)("strong",{parentName:"li"},"TLS")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Priority")," - If a transaction matches the URL patterns of two or more channels, then the channel with higher priority will be picked. A value of 1 is the highest possible priority (first priority). Larger numbers therefore indicate that a channel should take lower priority."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Authentication Type")," - Set whether this channel is ",Object(n.b)("strong",{parentName:"li"},"Private")," or ",Object(n.b)("strong",{parentName:"li"},"Public")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Whitelisted IP addresses")," - ???A list of IP addresses that will be given access without authentication required???"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Allowed roles and clients")," - Only applicable when ",Object(n.b)("strong",{parentName:"li"},"Authentication Type")," is set to ",Object(n.b)("strong",{parentName:"li"},"Private"),". Supply the roles and ",Object(n.b)("strong",{parentName:"li"},"Clients")," allowed to make requests to this channel"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Match Content Types")," - Supply what content type to match too. (e.g text/json)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Matching Options")," - These options allows a ",Object(n.b)("strong",{parentName:"li"},"Channel")," to be used if the request body matches certain conditions.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"No Matching")," - No matching applicable"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"RegEx Matching")," - Supply a RegEx to match"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"XML Matching")," - Supply a X Path as well as a value to match"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"JSON Matching")," - Supply a JSON property as well as a value to match"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Routes tab"),":",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Mediator Route")," - Select a mediator route if any, to populate the required route fields"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Name")," - This is a descriptive name of the route"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Route Type")," - Select whether this route is an HTTP/TCP or MLLP request"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Path")," - Supply a path the route should follow. If none supplied then the ",Object(n.b)("strong",{parentName:"li"},"Channel")," URL Pattern will be used."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Path Transform")," - Applies a said-like expression to the path string - Multiple endpoints can be reached using the same route."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Host")," - The host where this route should go to."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Port")," - The port where this route should go to."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Basic Auth Username")," - Supply a username if the route requires basic authentication."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Basic Auth Password")," - Supply a password if the route requires basic authentication."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Is this the primary route?")," - Set whether or not a route is primary - Setting a route to primary indicates that this is the first route to check and is the primary endpoint to reach."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Status")," - Set whether or not a route is enabled/disabled."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"+ Save"),' - All required fields need to be supplied before the blue "',Object(n.b)("strong",{parentName:"li"},"+ Save"),'" button becomes active.'),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Note")," - At least one route needs to be added to the ",Object(n.b)("strong",{parentName:"li"},"Channel")," and only one route is allowed to be set to primary"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Data Control tab"),":",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Store Request Body")," - Select whether or not to store the request body.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Note")," - If a transaction is made through a POST/PUT/PATCH method and request body is NOT saved, then the transaction cannot be rerun."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Store Response Body")," - Select whether or not to store the response body."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Auto Retry")," - A feature that allows the OpenHIM to periodically resend failed transactions. Only transactions that have failed due to a connection type error, e.g. if a server is unavailable, or an internal OpenHIM error will be retried. I.e. if a target server responds with a status of 500, then that transaction won't be retried since the transaction was delivered by the OpenHIM.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Automatically resend failed transactions")," - Enable/disable auto retry for the channel."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"How often")," - A minimum period to wait (in minutes) before retrying a transaction."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Enabled max number of attempts")," - Enable/disable a limit for the number of times a transaction should be retried."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Time")," - Value for maximum number of retries."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"URL Rewriting enabled")," - URL rewriting allows the OpenHIM to look for URLs in a response and rewrite them so that they point to the correct location.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"From Host/Port")," - Supply the host and port value you are looking to rewrite."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"To Host/Port")," - Supply the host and port value that will replace the 'From Host/Port' matches."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Path Transform")," - Applies a said-like expression to the path string - Multiple endpoints can be reached using the same route."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Add Auto Rewrite Rules")," - Determines whether automatic rewrite rules are used. These rules enabled URLs to be automatically rewritten for any URLs that points to a host that the OpenHIM proxies (any host on a primary route). These can be overridden by user specified rules if need be."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"User Access tab"),":",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"User groups allowed to view this channel's transactions")," - Supply the groups allowed to view this ",Object(n.b)("strong",{parentName:"li"},"Channel's")," transactions"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"User groups allowed to view this channel's transactions request/response body")," - Supply the groups allowed to view the request/response body of this ",Object(n.b)("strong",{parentName:"li"},"Channel's")," transactions"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"User groups allowed to rerun this channel's transactions")," - Supply the groups allowed to rerun this ",Object(n.b)("strong",{parentName:"li"},"Channel's")," transactions"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Alerts tab"),":",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Status")," - Supply the status of a transaction when the alert should be sent. This can be supplied in a range format (e.g 2xx or 4xx)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Failure Rate (%)")," - Supply the failure rate of when to start sending the alerts (e.g 50 - once failure rate above 50% then alerts will be sent)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Add Users")," - Add individual users to receive alerts",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"User")," - Select a user from the drop down to receive a alert"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Method")," - Select the method of how the alert should be delivered ","[Email | SMS]"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Max Alerts")," - Select the frequency of how often to send a alert ","[no max | 1 per hour | 1 per day]"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Add Groups")," - Add an entire group to receive alerts",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Add a new group")," - Select a group from the drop down to be added to alerts"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"+ Alert"),' - All required fields need to be supplied before the blue "',Object(n.b)("strong",{parentName:"li"},"+ Save"),'" button becomes active.')))),Object(n.b)("p",null,"If you find a field that is not described here, please let us know by ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/issues/new"}),"filing an issue on github")," with the 'documentation' label."))}b.isMDXComponent=!0},292:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c}));var n=a(0),r=a.n(n),i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},o=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=l(a),c=n,u=p[o+"."+c]||p[c]||b[c]||i;return a?r.a.createElement(u,Object.assign({},{ref:t},s,{components:a})):r.a.createElement(u,Object.assign({},{ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);
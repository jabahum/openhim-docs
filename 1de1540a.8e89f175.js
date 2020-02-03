(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(1),o=(a(0),a(338));const r={id:"channels",title:"Channels",sidebar_label:"Channels",keywords:["openhim","channel","config"],description:"Manage OpenHIM channels"},l=[{value:"Basic Info Tab",id:"basic-info-tab",children:[]},{value:"Request Matching Tab",id:"request-matching-tab",children:[]},{value:"Routes Tab",id:"routes-tab",children:[]},{value:"Data Control Tab",id:"data-control-tab",children:[]},{value:"User Access Tab",id:"user-access-tab",children:[]},{value:"Alerts Tab",id:"alerts-tab",children:[]},{value:"How to add a channel",id:"how-to-add-a-channel",children:[]},{value:"How to remove a channel",id:"how-to-remove-a-channel",children:[]},{value:"How to edit a channel",id:"how-to-edit-a-channel",children:[]},{value:"How to copy a channel\u2019s config",id:"how-to-copy-a-channels-config",children:[]}],i={id:"version-5.2.x/configuration/channels",title:"Channels",description:"Manage OpenHIM channels",source:"@site/versioned_docs/version-5.2.x/configuration/channels.md",permalink:"/docs/configuration/channels",version:"5.2.x",sidebar_label:"Channels",sidebar:"version-5.2.x/docs",previous:{title:"Certificates",permalink:"/docs/configuration/certificates"},next:{title:"Clients",permalink:"/docs/configuration/clients"}},b={rightToc:l,metadata:i},c="wrapper";function s({components:e,...t}){return Object(o.b)(c,Object(n.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A channel defines a path that a request will take through the OpenHIM. It describes one or more routes for the request to be forwarded to, which clients are allowed to use the channel, which requests are to be directed to this channel and many more options that allows you to control what happens for a particular request.\nThe management of clients and channels are discussed later in the document. Only an OpenHIM administrative user has the permission to ",Object(o.b)("inlineCode",{parentName:"p"},"Add"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Edit")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Delete")," a Client or Channel"),Object(o.b)("p",null,"Using an OpenHIM administrative account, you will be able to add, edit and remove channels by following the steps below."),Object(o.b)("p",null,"Two of the most important fields are the URL pattern field and the allowed roles and clients field. The URL pattern field describes which incoming requests should be sent down a channel. It does this by looking at the URL of the incoming request and tests to verify that it matches the Regular Expression (RegEx) that you supplied in this field."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": Only the first matched channel that is found will receive the request for processing.")),Object(o.b)("p",null,"The allowed roles and clients field identifies which clients are allowed to send requests to a channel. If a request matches a channel but the client system is not specified in the field, or where a role that the client belongs to is not specified in this field, then the request will be denied access to the channel."),Object(o.b)("p",null,"The following is an explanation of the fields that are used in the ",Object(o.b)("inlineCode",{parentName:"p"},"Add Channels")," form."),Object(o.b)("h2",{id:"basic-info-tab"},"Basic Info Tab"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Channel Name")," - This is a descriptive name of the Channel.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Channel Type")," - The type of channel to be configured:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Hypertext Transfer Protocol (HTTP)"))," - Default channel type.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Transmission Control Protocol (TCP)"))," - Supply a TCP host and port number.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Transport Layer Security (TLS)"))," - Supply a TLS host and port number.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Polling"))," - Supply a Polling schedule in a cron format: ",Object(o.b)("inlineCode",{parentName:"p"},"*/10 * * * *")," or written format: ",Object(o.b)("inlineCode",{parentName:"p"},"10 minutes"),"."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": The module called ",Object(o.b)("inlineCode",{parentName:"p"},"Agenda")," is used to accomplish the polling. Please visit the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/agenda/agenda"}),"Agenda documentation")," for more information."))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Status"))," - Enable or disable the channel."))),Object(o.b)("h2",{id:"request-matching-tab"},"Request Matching Tab"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"URL Pattern - Supply a URL pattern to match an incoming transaction.",Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": this field accepts a RegEx value. This field is not applicable for Channel Type of TCP or TLS."))),Object(o.b)("li",{parentName:"ol"},"Priority - If a transaction matches the URL patterns of two or more channels, then the channel with higher priority will be picked. A value of 1 is the highest possible priority (first priority). Larger numbers therefore indicate that a channel should take lower priority."),Object(o.b)("li",{parentName:"ol"},"Authentication Type - Set whether this channel is private or public."),Object(o.b)("li",{parentName:"ol"},"Whitelisted IP Addresses - A list of IP addresses that will be given access without authentication required."),Object(o.b)("li",{parentName:"ol"},"Allowed Roles and Clients - Only applicable when Authentication Type is set to private. Supply the Roles and Clients allowed to make requests to this channel."),Object(o.b)("li",{parentName:"ol"},"Match Content Types - Supply what content type to match to. (e.g text/json)."),Object(o.b)("li",{parentName:"ol"},"Matching Options - These options allow a Channel to be used if the request body matches certain conditions.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"No Matching - No matching applicable."),Object(o.b)("li",{parentName:"ul"},"RegEx Matching - Supply a RegEx to match."),Object(o.b)("li",{parentName:"ul"},"XML Matching - Supply an X Path as well as a value to match."),Object(o.b)("li",{parentName:"ul"},"JSON Matching - Supply a JSON property as well as a value to match.")))),Object(o.b)("h2",{id:"routes-tab"},"Routes Tab"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Mediator Route")," - Select a mediator route if any, to populate the required route fields.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Name")," - This is a descriptive name of the route.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Route Type")," - Select whether this route is an HTTP/TCP or MLLP request.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Path")," - Supply a path the route should follow. If none supplied, then the Channel URL pattern will be used.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Path Transform")," - Applies a said-like expression to the path string - multiple endpoints can be reached using the same route.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Host")," - The host where this route should go to.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Port")," - The port where this route should go to.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Basic Auth Username")," - Supply a username if the route requires basic authentication.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Basic Auth Password")," - Supply a password if the route requires basic authentication.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Is this the primary route?")," - Set whether the route is primary - setting a route to primary indicates that this is the first route to check and is the primary endpoint to reach.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Status")," - Set whether the route is enabled/disabled.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"'",Object(o.b)("strong",{parentName:"p"},"+ Save"),"' - All required fields need to be supplied before the blue ",Object(o.b)("inlineCode",{parentName:"p"},"+ Save")," button becomes active."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": At least one route needs to be added to the Channel and only one route is allowed to be set to primary.")))),Object(o.b)("h2",{id:"data-control-tab"},"Data Control Tab"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Store Request Body")," - Select whether to store the request body."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": If a transaction is made through a POST/PUT/PATCH method and request body is NOT saved, then the transaction cannot be rerun."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Store Response Body")," - Select whether to store the response body.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Auto Retry")," - A feature that allows the OpenHIM to periodically resend failed transactions. Only transactions that have failed due to a connection type error, e.g. if a server is unavailable, or an internal OpenHIM error will be retried. I.e. if a target server responds with a status of 500, then that transaction won\u2019t be retried since the transaction was delivered by the OpenHIM."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Automatically resend failed transactions")," - Enable/disable auto retry for the channel."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"How often")," - A minimum period to wait (in minutes) before retrying a transaction."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Enabled max number of attempts")," - Enable/disable a limit for the number of times a transaction should be retried."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Time")," - Value for maximum number of retries."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"URL Rewriting Enabled")," - URL rewriting allows the OpenHIM to look for URLs in a response and rewrite them so that they point to the correct location."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"From Host/Port")," - Supply the host and port value you are looking to rewrite."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"To Host/Port")," - Supply the host and port value that will replace the \u2018From Host/Port\u2019 matches."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Path Transform")," - Applies a said-like expression to the path string - multiple endpoints can be reached using the same route."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Add Auto Rewrite Rules")," - Determines whether automatic rewrite rules are used. These rules enabled URLs to be automatically rewritten for any URLs that points to a host that the OpenHIM proxies (any host on a primary route). These can be overridden by user specified rules if need be."))),Object(o.b)("h2",{id:"user-access-tab"},"User Access Tab"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"User groups allowed to view this channel\u2019s transactions")," - Supply the groups allowed to view this Channel\u2019s transactions."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"User groups allowed to view this channel\u2019s transactions' request/response bodies")," - Supply the groups allowed to view the request/response bodies of this Channel\u2019s transactions."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"User groups allowed to rerun this channel\u2019s transactions")," - Supply the groups allowed to rerun this Channel\u2019s transactions.")),Object(o.b)("h2",{id:"alerts-tab"},"Alerts Tab"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Status")," - Supply the status of a transaction when the alert should be sent. This can be supplied in a range format (e.g 2xx or 4xx)."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Failure Rate (%)")," - Supply the failure rate of when to start sending the alerts (e.g 50 - once failure rate above 50% then alerts will be sent)."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Add Users")," - Add individual users to receive alerts.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"User")," - Select a user from the drop down to receive an alert."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Method")," - Select the method of how the alert should be delivered ","[Email | SMS]","."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Max Alerts")," - Select the frequency of how often to send an alert ","[no max | 1 per hour | 1 per day]","."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Add Groups")," - Add an entire group to receive alerts."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Add a new group")," - Select a group from the drop down to be added to alerts."),Object(o.b)("li",{parentName:"ol"},"'",Object(o.b)("strong",{parentName:"li"},"+ Alert"),"' - All required fields need to be supplied before the blue ",Object(o.b)("inlineCode",{parentName:"li"},"+ Save")," button becomes active.")),Object(o.b)("h2",{id:"how-to-add-a-channel"},"How to add a channel"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": All fields marked with a ","*"," or ","*","*"," indicates a mandatory field.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"* - Indicates a required field which means that it cannot be left blank.\n** - Indicates that one of the fields are required, no both.\n")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Channels")," found in the left navigation menu."),Object(o.b)("li",{parentName:"ol"},"Click on the green ",Object(o.b)("inlineCode",{parentName:"li"},"+ Channel")," button."),Object(o.b)("li",{parentName:"ol"},"Supply all the required fields and click the blue ",Object(o.b)("inlineCode",{parentName:"li"},"Save changes")," button when completed. See the above section which may assist with this process.")),Object(o.b)("h2",{id:"how-to-remove-a-channel"},"How to remove a channel"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Channels")," found in the left navigation menu."),Object(o.b)("li",{parentName:"ol"},"Locate the channel to be deleted."),Object(o.b)("li",{parentName:"ol"},"Click on the red ",Object(o.b)("inlineCode",{parentName:"li"},"X")," button."),Object(o.b)("li",{parentName:"ol"},"You will be prompted to confirm your action to delete the chosen channel.")),Object(o.b)("h2",{id:"how-to-edit-a-channel"},"How to edit a channel"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Channels")," found in the left navigation menu."),Object(o.b)("li",{parentName:"ol"},"Locate the channel to be edited."),Object(o.b)("li",{parentName:"ol"},"Click on the amber button that looks like a pencil on the far right."),Object(o.b)("li",{parentName:"ol"},"Update the channel information as required."),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("inlineCode",{parentName:"li"},"Save Changes")," button to update the channel.")),Object(o.b)("h2",{id:"how-to-copy-a-channels-config"},"How to copy a channel\u2019s config"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Channels")," found in the left navigation menu."),Object(o.b)("li",{parentName:"ol"},"Locate the channel to be copied."),Object(o.b)("li",{parentName:"ol"},"Click on the blue button that looks like an A4 paper icon on the far right."),Object(o.b)("li",{parentName:"ol"},"Give your channel a unique name."),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("inlineCode",{parentName:"li"},"Save Changes")," button to create the new channel using the same config as the channel being copied.")))}s.isMDXComponent=!0},338:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return p}));var n=a(0),o=a.n(n),r=o.a.createContext({}),l=function(e){var t=o.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=l(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var b="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),s=l(a),p=n,h=s[i+"."+p]||s[p]||c[p]||r;return a?o.a.createElement(h,Object.assign({},{ref:t},b,{components:a})):o.a.createElement(h,Object.assign({},{ref:t},b))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[b]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{282:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(556)),i={id:"users",title:"Users",sidebar_label:"Users",keywords:["openhim","users","config"],description:"Manage OpenHIM users"},s={unversionedId:"configuration/users",id:"version-7.0.x/configuration/users",isDocsHomePage:!1,title:"Users",description:"Manage OpenHIM users",source:"@site/versioned_docs/version-7.0.x/configuration/users.md",slug:"/configuration/users",permalink:"/docs/configuration/users",version:"7.0.x",sidebar_label:"Users",sidebar:"version-7.0.x/docs",previous:{title:"Mediators",permalink:"/docs/configuration/mediators"},next:{title:"Visualizers",permalink:"/docs/configuration/visualizers"}},l=[{value:"How are <code>Users</code> different from <code>Clients</code>",id:"how-are-users-different-from-clients",children:[]},{value:"User Groups",id:"user-groups",children:[{value:"Group Permissions",id:"group-permissions",children:[]}]},{value:"How to add users",id:"how-to-add-users",children:[]},{value:"How to remove users",id:"how-to-remove-users",children:[]},{value:"How to edit users",id:"how-to-edit-users",children:[]}],c={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As an OpenHIM administrator, you may create other users. These too may belong to the admin group or may belong to other groups. Non-admin users cannot create clients and channels, however, they may view transactions for certain channels that they are given access to."),Object(o.b)("p",null,"The following is an explanation of the fields that are used in the ",Object(o.b)("inlineCode",{parentName:"p"},"Add a Channel")," form:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Email")," - Email address for the user.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"First Name")," - User first name.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Surname")," - User surname/family name.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Phone Number")," - Mobile contact number in the MSISDN format (eg. 27825555555) should you want to receive sms alerts.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Permissions Group")," - The group name to which the user will be assigned. You may use an existing group or create a new group."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": While typing in the textbox, the OpenHIM will validate each keystroke to lookup any matching group names."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Password")," - The user's password."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": Confirmation for a user account will need activation via email. A user's account will remain disabled/locked until he/she has confirmed."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Reports")," - Choose which reports the user needs to receive via email. These reports include the following transaction statuses:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Completed"),Object(o.b)("li",{parentName:"ul"},"Completed with errors"),Object(o.b)("li",{parentName:"ul"},"Failed"),Object(o.b)("li",{parentName:"ul"},"Processing"),Object(o.b)("li",{parentName:"ul"},"Successful"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"List Settings and General Settings")," - You may pre-define how you want the user to view transactions."))),Object(o.b)("h2",{id:"how-are-users-different-from-clients"},"How are ",Object(o.b)("inlineCode",{parentName:"h2"},"Users")," different from ",Object(o.b)("inlineCode",{parentName:"h2"},"Clients")),Object(o.b)("p",null,"Clients are different from users in that they ",Object(o.b)("strong",{parentName:"p"},"represent systems")," that can route transactions through the OpenHIM. Users are people accessing and configuring the OpenHIM whereas clients are the systems that are allowed to send requests to the OpenHIM."),Object(o.b)("h2",{id:"user-groups"},"User Groups"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Groups")," are created automatically by just adding a new group name in the user form. You do not need to add a group explicitly. When you go on to create the channel, you just need to make sure the group name matches the one you specified when you created the ",Object(o.b)("inlineCode",{parentName:"p"},"User"),"."),Object(o.b)("p",null,"There are two kinds of groups:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Admin - This is a special group that grants users all permissions."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Note: The Admin group is created automatically."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The rest are defined by a system administrator."))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": When creating a channel, an administrator can set the level of user access by specifying the user groups which may have the necessary rights to view a channel, view a channels transactions, view the transactions request and response body, and rerun failed transactions.")),Object(o.b)("h3",{id:"group-permissions"},"Group Permissions"),Object(o.b)("p",null,"Users can be assigned custom permissions on a channel. This is done by adding the group to which they belong to that particular permission in the channel's configuration. By default, all custom user groups do not have permissions on any channel and will need the permission to be set. Please see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#openhim-channels"}),"OpenHIM Channels")," for more information regarding channels."),Object(o.b)("p",null,"User permissions comprise of the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"View channel transactions."),Object(o.b)("li",{parentName:"ol"},"View channel transaction bodies.",Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": bodies may contain private patient data"))),Object(o.b)("li",{parentName:"ol"},"Re-run transactions.",Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": enabling this permission needs to be done with care because it may cause downstream duplicates and data corruption if the user hasn\u2019t received sufficient training around this process.")))),Object(o.b)("h2",{id:"how-to-add-users"},"How to add users"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": All fields marked with a ","*"," indicates a mandatory field.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("inlineCode",{parentName:"li"},"Users")," option found in the left navigation menu."),Object(o.b)("li",{parentName:"ol"},"Click on the green ",Object(o.b)("inlineCode",{parentName:"li"},"+ User")," button."),Object(o.b)("li",{parentName:"ol"},"Supply all the required fields and click the blue ",Object(o.b)("inlineCode",{parentName:"li"},"Save changes")," button when completed. See the above section which may assist with this process.")),Object(o.b)("h2",{id:"how-to-remove-users"},"How to remove users"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Users")," found in the left navigation menu."),Object(o.b)("li",{parentName:"ol"},"Locate the user to be deleted."),Object(o.b)("li",{parentName:"ol"},"Click on the red ",Object(o.b)("inlineCode",{parentName:"li"},"X")," button."),Object(o.b)("li",{parentName:"ol"},"You will be prompted to confirm your action to delete the chosen user.")),Object(o.b)("h2",{id:"how-to-edit-users"},"How to edit users"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Users")," found in the left navigation menu."),Object(o.b)("li",{parentName:"ol"},"Locate the user to be edited."),Object(o.b)("li",{parentName:"ol"},"Click on the amber button that looks like a pencil."),Object(o.b)("li",{parentName:"ol"},"Update the user information as required."),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("inlineCode",{parentName:"li"},"Save Changes")," button to update the user.")))}b.isMDXComponent=!0},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
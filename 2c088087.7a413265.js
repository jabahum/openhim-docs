(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),i=n(9),o=(n(0),n(382)),r={id:"visualizers",title:"Visualizers",sidebar_label:"Visualizers",keywords:["openhim","visualizer","config"],description:"Manage OpenHIM visualizers"},l={id:"configuration/visualizers",title:"Visualizers",description:"Manage OpenHIM visualizers",source:"@site/docs/configuration/visualizers.md",permalink:"/docs/next/configuration/visualizers",version:"next",sidebar_label:"Visualizers",sidebar:"docs",previous:{title:"Users",permalink:"/docs/next/configuration/users"},next:{title:"Building a Basic Mediator",permalink:"/docs/next/tutorial/mediators/basic-scaffold"}},c=[{value:"How to add a visualizer",id:"how-to-add-a-visualizer",children:[]},{value:"How to remove a visualizer",id:"how-to-remove-a-visualizer",children:[]},{value:"How to edit a visualizer",id:"how-to-edit-a-visualizer",children:[]},{value:"How to copy a visualizer&#39;s config",id:"how-to-copy-a-visualizers-config",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The visualizer displays a live view of how transactions are being routed through the OpenHIM. Multiple visualizers can be created and these are shared among OpenHIM admin users."),Object(o.b)("p",null,"The following is an explanation of the fields that are used in the visualizations Management form:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Visualizer Name")," - A unique name to identify the visualizer.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Components")," - The components to be added to the visualizer."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Event Type - The nature of the event being triggered:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Primary Route - These routes are created during the creation of a channel."),Object(o.b)("li",{parentName:"ul"},"Secondary Route - These routes are created during the creation of a channel and are not set as the primary route."),Object(o.b)("li",{parentName:"ul"},"Orchestration - A mediator that processes a request and makes more subsequent request to perform a specific action."),Object(o.b)("li",{parentName:"ul"},"Channel - Channels that are currently available in the OpenHIM console. See ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./channels"}),"OpenHim Channels")," for more information regarding channels."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Event Name - The name of the event. These names are available as a dropdown for ",Object(o.b)("inlineCode",{parentName:"p"},"Primary Route"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Secondary Route")," and Channel.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Display - An easily identifiable name to be displayed in the visualizers list of components being monitored."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": You may add one or more components by completing the fields above and clicking on the green ",Object(o.b)("inlineCode",{parentName:"p"},"+")," button. The red ",Object(o.b)("inlineCode",{parentName:"p"},"X")," button allows you to delete a component."))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Channels")," - A dropdown list of channels where you can select a channel to be monitored. You may select one or more channels by clicking on the Select Channel dropdown and choose a channel name. The red ",Object(o.b)("inlineCode",{parentName:"p"},"X")," button allows you to delete a channel.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Mediators")," - The mediators to be added to the visualizer. Select a mediator from the dropdown list of mediator names. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./mediators"}),"OpenHIM Mediators")," for more information regarding mediators.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Advanced Settings")," - Allows you to customize your OpenHIM visualizer:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Visualizer Color Management")," - Choose your desired color styles for events monitoring."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Visualizer Size Management")," - Choose your desired size for the visualizer."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Visualizer Time Management")," - Choose when and for how long to display an event.")))),Object(o.b)("h2",{id:"how-to-add-a-visualizer"},"How to add a visualizer"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": All fields marked with a ","*"," indicates a mandatory field.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Visualizers")," found in the left navigation menu."),Object(o.b)("li",{parentName:"ol"},"Click on the green ",Object(o.b)("inlineCode",{parentName:"li"},"+ Visualizer")," button."),Object(o.b)("li",{parentName:"ol"},"Supply all the required fields and click the blue ",Object(o.b)("inlineCode",{parentName:"li"},"Create Visualizer")," button when completed. See the above section which may assist with this process.")),Object(o.b)("h2",{id:"how-to-remove-a-visualizer"},"How to remove a visualizer"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Visualizers")," found in the left navigation menu."),Object(o.b)("li",{parentName:"ol"},"Locate the visualizer to be deleted."),Object(o.b)("li",{parentName:"ol"},"Click on the red ",Object(o.b)("inlineCode",{parentName:"li"},"X")," button."),Object(o.b)("li",{parentName:"ol"},"You will be prompted to confirm your action to delete the chosen visualizer.")),Object(o.b)("h2",{id:"how-to-edit-a-visualizer"},"How to edit a visualizer"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Visualizers")," found in the left navigation menu."),Object(o.b)("li",{parentName:"ol"},"Locate the visualizer to be edited."),Object(o.b)("li",{parentName:"ol"},"Click on the amber button that looks like a pencil."),Object(o.b)("li",{parentName:"ol"},"Update the visualizer information as required."),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("inlineCode",{parentName:"li"},"Save Changes")," button to update the visualizer.")),Object(o.b)("h2",{id:"how-to-copy-a-visualizers-config"},"How to copy a visualizer's config"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Visualizers")," found in the left navigation menu."),Object(o.b)("li",{parentName:"ol"},"Locate the visualizer to be copied."),Object(o.b)("li",{parentName:"ol"},"Click on the blue button that looks like an A4 paper icon on the left."),Object(o.b)("li",{parentName:"ol"},"Give your visualizer a unique name."),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("inlineCode",{parentName:"li"},"Create Visualizer")," button to create the new visualizer using the same config as the visualizer being copied.")))}s.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(r,".").concat(m)]||u[m]||p[m]||o;return n?i.a.createElement(d,l({ref:t},b,{components:n})):i.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
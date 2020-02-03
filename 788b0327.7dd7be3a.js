(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{222:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"rightToc",(function(){return i})),o.d(t,"metadata",(function(){return p})),o.d(t,"default",(function(){return s}));var r=o(1),n=(o(0),o(338));const a={id:"import-export",title:"Import/Export",sidebar_label:"Import/Export",keywords:["openhim","import","export","config"],description:"Manage OpenHIM imports and exports"},i=[{value:"How to import data",id:"how-to-import-data",children:[]},{value:"How to export data",id:"how-to-export-data",children:[]}],p={id:"version-5.2.x/configuration/import-export",title:"Import/Export",description:"Manage OpenHIM imports and exports",source:"@site/versioned_docs/version-5.2.x/configuration/import-export.md",permalink:"/docs/configuration/import-export",version:"5.2.x",sidebar_label:"Import/Export",sidebar:"version-5.2.x/docs",previous:{title:"Contact list",permalink:"/docs/configuration/contact-list"},next:{title:"Mediators",permalink:"/docs/configuration/mediators"}},l={rightToc:i,metadata:p},c="wrapper";function s({components:e,...t}){return Object(n.b)(c,Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Import and export the OpenHIM's configuration as desired. The configuration will be written out to or read in from a JSON file."),Object(n.b)("h2",{id:"how-to-import-data"},"How to import data"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(n.b)("li",{parentName:"ol"},"Click on ",Object(n.b)("inlineCode",{parentName:"li"},"Export/Import")," found in the left navigation menu."),Object(n.b)("li",{parentName:"ol"},"Drag and drop your export file into the designated area, or click in the Import Data box to launch a browse dialog to search for and select a file.")),Object(n.b)("h2",{id:"how-to-export-data"},"How to export data"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note"),": The server's TLS private key will be exported and should be protected!")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(n.b)("li",{parentName:"ol"},"Click on ",Object(n.b)("inlineCode",{parentName:"li"},"Export/Import")," found in the left navigation menu."),Object(n.b)("li",{parentName:"ol"},"Choose the values per category that you wish to export. By default, all values per category are selected. The categories are:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Channels"),Object(n.b)("li",{parentName:"ul"},"Clients"),Object(n.b)("li",{parentName:"ul"},"Contact Groups"),Object(n.b)("li",{parentName:"ul"},"Keystore"),Object(n.b)("li",{parentName:"ul"},"Mediators"),Object(n.b)("li",{parentName:"ul"},"Users"))),Object(n.b)("li",{parentName:"ol"},"Click on the green ",Object(n.b)("inlineCode",{parentName:"li"},"Generate Export Script")," button")))}s.isMDXComponent=!0},338:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return d}));var r=o(0),n=o.n(r),a=n.a.createContext({}),i=function(e){var t=n.a.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):Object.assign({},t,e)),o},p=function(e){var t=i(e.components);return n.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(o[r]=e[r]);return o}(e,["components","mdxType","originalType","parentName"]),s=i(o),d=r,u=s[p+"."+d]||s[d]||c[d]||a;return o?n.a.createElement(u,Object.assign({},{ref:t},l,{components:o})):n.a.createElement(u,Object.assign({},{ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[l]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<a;d++)i[d]=o[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}s.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{222:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"rightToc",(function(){return p})),o.d(t,"metadata",(function(){return l})),o.d(t,"default",(function(){return d}));var r=o(1),n=o(6),a=(o(0),o(338)),i={id:"import-export",title:"Import/Export",sidebar_label:"Import/Export",keywords:["openhim","import","export","config"],description:"Manage OpenHIM imports and exports"},p=[{value:"How to import data",id:"how-to-import-data",children:[]},{value:"How to export data",id:"how-to-export-data",children:[]}],l={id:"version-5.2.x/configuration/import-export",title:"Import/Export",description:"Manage OpenHIM imports and exports",source:"@site/versioned_docs/version-5.2.x/configuration/import-export.md",permalink:"/docs/configuration/import-export",version:"5.2.x",sidebar_label:"Import/Export",sidebar:"version-5.2.x/docs",previous:{title:"Contact list",permalink:"/docs/configuration/contact-list"},next:{title:"Mediators",permalink:"/docs/configuration/mediators"}},c={rightToc:p,metadata:l},s="wrapper";function d(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)(s,Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Import and export the OpenHIM's configuration as desired. The configuration will be written out to or read in from a JSON file."),Object(a.b)("h2",{id:"how-to-import-data"},"How to import data"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(a.b)("li",{parentName:"ol"},"Click on ",Object(a.b)("inlineCode",{parentName:"li"},"Export/Import")," found in the left navigation menu."),Object(a.b)("li",{parentName:"ol"},"Drag and drop your export file into the designated area, or click in the Import Data box to launch a browse dialog to search for and select a file.")),Object(a.b)("h2",{id:"how-to-export-data"},"How to export data"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note"),": The server's TLS private key will be exported and should be protected!")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Log in to your OpenHIM console."),Object(a.b)("li",{parentName:"ol"},"Click on ",Object(a.b)("inlineCode",{parentName:"li"},"Export/Import")," found in the left navigation menu."),Object(a.b)("li",{parentName:"ol"},"Choose the values per category that you wish to export. By default, all values per category are selected. The categories are:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Channels"),Object(a.b)("li",{parentName:"ul"},"Clients"),Object(a.b)("li",{parentName:"ul"},"Contact Groups"),Object(a.b)("li",{parentName:"ul"},"Keystore"),Object(a.b)("li",{parentName:"ul"},"Mediators"),Object(a.b)("li",{parentName:"ul"},"Users"))),Object(a.b)("li",{parentName:"ol"},"Click on the green ",Object(a.b)("inlineCode",{parentName:"li"},"Generate Export Script")," button")))}d.isMDXComponent=!0},338:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return d}));var r=o(0),n=o.n(r),a=n.a.createContext({}),i=function(e){var t=n.a.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):Object.assign({},t,e)),o},p=function(e){var t=i(e.components);return n.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(o[r]=e[r]);return o}(e,["components","mdxType","originalType","parentName"]),s=i(o),d=r,u=s[p+"."+d]||s[d]||c[d]||a;return o?n.a.createElement(u,Object.assign({},{ref:t},l,{components:o})):n.a.createElement(u,Object.assign({},{ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[l]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<a;d++)i[d]=o[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}s.displayName="MDXCreateElement"}}]);
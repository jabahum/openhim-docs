(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));n(0);var r=n(292);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const a={id:"export-import-configuration",title:"Export/import Configuration",sidebar_label:"Export/import Configuration"},i=[{value:"Exporting",id:"exporting",children:[]},{value:"Importing",id:"importing",children:[]}],p={rightToc:i},c="wrapper";function l({components:e,...t}){return Object(r.b)(c,o({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," This can now be done directly from the OpenHIM console which may be easier. See ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/docs/dev-guide/api-ref.md#metadata-resource"}),"here"),"."),Object(r.b)("h2",{id:"exporting"},"Exporting"),Object(r.b)("p",null,"Follow the steps below to export and import the server metadata configuration manually. By default, the Users, Channels, Clients, ContactGroups and Mediators collections will be exported.\nCopy the file ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/resources/openhim-configuration-export.sh"}),"openhim-configuration-export.sh")," to a folder where you wish your export to be saved. Run the shell scrip by executing the following command:\n",Object(r.b)("inlineCode",{parentName:"p"},"./openhim-configuration-export.sh")),Object(r.b)("p",null,"Your exported collections should be located in the folder structure '/dump/openhim/'."),Object(r.b)("h2",{id:"importing"},"Importing"),Object(r.b)("p",null,"To import you data successfully ensure that you are in the correct folder where the dump files are located. Execute the below command to import your collections.\n",Object(r.b)("inlineCode",{parentName:"p"},"mongorestore --db openhim dump/openhim")),Object(r.b)("p",null,"NB! if you have changed your database name, then do so for the export/import as well.\nNB! Please ensure that you stop the server before exporting and importing."))}l.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},p=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),s=r,m=u[p+"."+s]||u[s]||l[s]||a;return n?o.a.createElement(m,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(m,Object.assign({},{ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
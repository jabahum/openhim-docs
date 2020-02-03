(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{140:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"rightToc",(function(){return p})),o.d(t,"metadata",(function(){return c})),o.d(t,"default",(function(){return s}));var r=o(1),n=(o(0),o(338)),a=o(343);const i={id:"export-import-configuration",title:"Export/import Configuration",sidebar_label:"Export/import Configuration",keywords:["OpenHIM","Export","Import","Configuration"],description:"Export/import OpenHIM configuration"},p=[{value:"Export/import metadata from MongoDB",id:"exportimport-metadata-from-mongodb",children:[{value:"Export",id:"export",children:[]},{value:"Import",id:"import",children:[]}]},{value:"Export/import metadata from the OpenHIM Console",id:"exportimport-metadata-from-the-openhim-console",children:[{value:"Export",id:"export-1",children:[]},{value:"Import",id:"import-1",children:[]}]},{value:"Export More Data",id:"export-more-data",children:[]}],c={id:"how-to/export-import-configuration",title:"Export/import Configuration",description:"Export/import OpenHIM configuration",source:"@site/docs/how-to/how-to-import-export.md",permalink:"/docs/next/how-to/export-import-configuration",version:"next",sidebar_label:"Export/import Configuration",sidebar:"docs",previous:{title:"Run the OpenHIM on startup",permalink:"/docs/next/how-to/run-openhim-on-startup"},next:{title:"Setup a basic cluster",permalink:"/docs/next/how-to/setup-basic-cluster"}},l={rightToc:p,metadata:c},b="wrapper";function s({components:e,...t}){return Object(n.b)(b,Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"exportimport-metadata-from-mongodb"},"Export/import metadata from MongoDB"),Object(n.b)("p",null,"Follow the steps below to export and import the ",Object(n.b)("strong",{parentName:"p"},"server metadata configuration")," manually. By default, the Users, Channels, Clients, ContactGroups and Mediators collections will be exported."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Ensure that you ",Object(n.b)("strong",{parentName:"p"},"stop")," the server before exporting and importing.")),Object(n.b)("h3",{id:"export"},"Export"),Object(n.b)("p",null,"Copy the file ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jembi/openhim-core-js/blob/master/resources/openhim-configuration-export.sh"}),"openhim-configuration-export.sh")," to a folder where you wish your export to be saved. Run the shell script by executing the following command:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"./openhim-configuration-export.sh\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"If your MongoDB Server and Mongo Client are different versions your may need to add ",Object(n.b)("inlineCode",{parentName:"p"},"--forceTableScan")," to the ",Object(n.b)("inlineCode",{parentName:"p"},"mongodump")," command in the script.")),Object(n.b)("p",null,"Your exported collections should be located in the folder structure '/dump/openhim/'."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"For full import/export API details see ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"../api/import-export/overview"}),"here"),".")),Object(n.b)("h3",{id:"import"},"Import"),Object(n.b)("p",null,"To import you data ensure that you are in the correct folder where the dump files are located. Execute the below command to import your collections."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"mongorestore --db openhim dump/openhim\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," If you have changed your database name, then do so for the export/import as well."),Object(n.b)("h2",{id:"exportimport-metadata-from-the-openhim-console"},"Export/import metadata from the OpenHIM Console"),Object(n.b)("p",null,"Export/import can now be done directly from the OpenHIM console which may be easier."),Object(n.b)("p",null,"Navigate to the ",Object(n.b)("inlineCode",{parentName:"p"},"Export/Import")," page on the console."),Object(n.b)("h3",{id:"export-1"},"Export"),Object(n.b)("p",null,"To export your configuration, open the relevant drop downs to check that the desired configs are selected (all configs are selected by default). Deselect any unwanted settings. Then ",Object(n.b)("inlineCode",{parentName:"p"},"click Generate Export Script"),". See below for expected screen."),Object(n.b)("img",{alt:"export/import screen",src:Object(a.a)("img/tutorial/import-export.png")}),Object(n.b)("h3",{id:"import-1"},"Import"),Object(n.b)("p",null,"To import config drag and drop your export file, generated from the desired OpenHIM instance, into the specified box."),Object(n.b)("h2",{id:"export-more-data"},"Export More Data"),Object(n.b)("p",null,"If you need to export more data from your OpenHIM instance, add the desired mongo collection names to the list in the export script using the export method described ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#Export/import-metadata-from-MongoDB"}),"above"),"."),Object(n.b)("p",null,"List of all OpenHIM MongoDb collections:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"agendaJobs"),Object(n.b)("li",{parentName:"ul"},"alerts"),Object(n.b)("li",{parentName:"ul"},"auditMeta"),Object(n.b)("li",{parentName:"ul"},"audits"),Object(n.b)("li",{parentName:"ul"},"autoretries"),Object(n.b)("li",{parentName:"ul"},"channelAudits"),Object(n.b)("li",{parentName:"ul"},"channels"),Object(n.b)("li",{parentName:"ul"},"clients"),Object(n.b)("li",{parentName:"ul"},"contactgroups"),Object(n.b)("li",{parentName:"ul"},"dbversions"),Object(n.b)("li",{parentName:"ul"},"events"),Object(n.b)("li",{parentName:"ul"},"keystores"),Object(n.b)("li",{parentName:"ul"},"log"),Object(n.b)("li",{parentName:"ul"},"mediators"),Object(n.b)("li",{parentName:"ul"},"metrics"),Object(n.b)("li",{parentName:"ul"},"tasks"),Object(n.b)("li",{parentName:"ul"},"transactions"),Object(n.b)("li",{parentName:"ul"},"users"),Object(n.b)("li",{parentName:"ul"},"visualizers")),Object(n.b)("p",null,"To add transactions to the data dump for example append the name ",Object(n.b)("inlineCode",{parentName:"p"},"transactions")," to the list in the script:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"// openhim-configuration-export.sh\n\ncollections=(users channels clients contactGroups mediators transactions)\n")))}s.isMDXComponent=!0},338:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return s}));var r=o(0),n=o.n(r),a=n.a.createContext({}),i=function(e){var t=n.a.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):Object.assign({},t,e)),o},p=function(e){var t=i(e.components);return n.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(o[r]=e[r]);return o}(e,["components","mdxType","originalType","parentName"]),b=i(o),s=r,u=b[p+"."+s]||b[s]||l[s]||a;return o?n.a.createElement(u,Object.assign({},{ref:t},c,{components:o})):n.a.createElement(u,Object.assign({},{ref:t},c))}));function s(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=o[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},342:function(e,t,o){"use strict";var r=o(0),n=o(32);t.a=function(){return Object(r.useContext)(n.a)}},343:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r=o(342);function n(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:o="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?o+e.slice(1):o+e}}}]);
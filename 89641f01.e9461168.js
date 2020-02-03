(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return u}));var s=n(1),r=(n(0),n(338)),a=n(347),o=n(348);const i={id:"overview",title:"Tasks overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Task","Overview"],description:"An overview of the OpenHIM Tasks"},l=[{value:"Schema Model",id:"schema-model",children:[]}],c={id:"api/tasks/overview",title:"Tasks overview",description:"An overview of the OpenHIM Tasks",source:"@site/docs/api/tasks/overview.md",permalink:"/docs/next/api/tasks/overview",version:"next",sidebar_label:"Overview",sidebar:"api",previous:{title:"Read Server Uptime",permalink:"/docs/next/api/server-uptime/read"},next:{title:"Create Task",permalink:"/docs/next/api/tasks/create"}},p={rightToc:l,metadata:c},d="wrapper";function u({components:e,...t}){return Object(r.b)(d,Object(s.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Allows for the management of OpenHIM tasks. Tasks are used to submit transactions to be rerun."),Object(r.b)("h2",{id:"schema-model"},"Schema Model"),Object(r.b)(o.a,{mdxType:"GetCurrentVersion"},Object(r.b)(a.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/src/model/tasks.js",language:"javascript",mdxType:"ExternalContentSyntaxHighlighter"})))}u.isMDXComponent=!0},344:function(e,t,n){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},347:function(e,t,n){"use strict";var s=n(1),r=n(0),a=n.n(r),o=n(345),i=n.n(o),l=n(346),c=n(344);class p extends r.Component{constructor(e){super(e),this.state={data:null,spinner:!0,url:e.url.replace("<VERSION>",e.version)}}componentWillMount(){i.a.get(this.state.url).then(e=>{e.data?this.setState({data:e.data,spinner:!1}):this.setState({data:null,spinner:!1})}).catch(e=>{console.error(e.toString()),this.setState({data:null,spinner:!1})})}render(){return this.state.spinner?a.a.createElement("div",{className:"spinnerContainer"},a.a.createElement("div",{id:"loading"})):this.state.data?a.a.createElement(l.a,Object(s.a)({},l.b,{theme:c.a,code:this.state.data,language:`${this.props.language}`}),({className:e,style:t,tokens:n,getLineProps:s,getTokenProps:r})=>a.a.createElement("pre",{className:e,style:t},n.map((e,t)=>a.a.createElement("div",s({line:e,key:t}),e.map((e,t)=>a.a.createElement("span",r({token:e,key:t}))))))):a.a.createElement("div",null,`Schema model not found for version ${this.props.version}`)}}t.a=p},348:function(e,t,n){"use strict";(function(e){var s=n(0),r=n.n(s);let a;a="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};class o extends s.Component{constructor(e){super(e);const t=/[\d].[\d].x/;let n=null;a&&a.location&&(n=a.location.href.match(t));let s="master";n&&(s=`v${n[0].replace("x","0")}`),this.state={version:s}}render(){return r.a.createElement("div",null,r.a.cloneElement(this.props.children,{version:this.state.version}))}}t.a=o}).call(this,n(49))}}]);
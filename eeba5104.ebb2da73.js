(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{321:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),s=(r(0),r(338)),a=r(349),o=r(350);const i={id:"overview",title:"Certificates Overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Certificates","Overview"],description:"An overview of the OpenHIM certificates"},c=[{value:"Schema Model",id:"schema-model",children:[]}],l={id:"version-5.2.x/api/certificates/overview",title:"Certificates Overview",description:"An overview of the OpenHIM certificates",source:"@site/versioned_docs/version-5.2.x/api/certificates/overview.md",permalink:"/docs/api/certificates/overview",version:"5.2.x",sidebar_label:"Overview",sidebar:"version-5.2.x/api",previous:{title:"Read Audit/s",permalink:"/docs/api/audits/read"},next:{title:"Create Certificates",permalink:"/docs/api/certificates/create"}},d={rightToc:c,metadata:l},p="wrapper";function u({components:e,...t}){return Object(s.b)(p,Object(n.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This resource allows you to set and fetch the server certificate and key, and to set and query trusted certificates"),Object(s.b)("h2",{id:"schema-model"},"Schema Model"),Object(s.b)(o.a,{mdxType:"GetCurrentVersion"},Object(s.b)(a.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/src/model/keystore.js",language:"javascript",mdxType:"ExternalContentSyntaxHighlighter"})))}u.isMDXComponent=!0},344:function(e,t,r){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},349:function(e,t,r){"use strict";var n=r(1),s=r(0),a=r.n(s),o=r(345),i=r.n(o),c=r(346),l=r(344);class d extends s.Component{constructor(e){super(e),this.state={data:null,spinner:!0,url:e.url.replace("<VERSION>",e.version)}}componentWillMount(){i.a.get(this.state.url).then(e=>{e.data?this.setState({data:e.data,spinner:!1}):this.setState({data:null,spinner:!1})}).catch(e=>{console.error(e.toString()),this.setState({data:null,spinner:!1})})}render(){return this.state.spinner?a.a.createElement("div",{className:"spinnerContainer"},a.a.createElement("div",{id:"loading"})):this.state.data?a.a.createElement(c.a,Object(n.a)({},c.b,{theme:l.a,code:this.state.data,language:`${this.props.language}`}),({className:e,style:t,tokens:r,getLineProps:n,getTokenProps:s})=>a.a.createElement("pre",{className:e,style:t},r.map((e,t)=>a.a.createElement("div",n({line:e,key:t}),e.map((e,t)=>a.a.createElement("span",s({token:e,key:t}))))))):a.a.createElement("div",null,`Schema model not found for version ${this.props.version}`)}}t.a=d},350:function(e,t,r){"use strict";(function(e){var n=r(0),s=r.n(n);let a;a="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};class o extends n.Component{constructor(e){super(e);const t=/[\d].[\d].x/;let r=null;a&&a.location&&(r=a.location.href.match(t));let n="master";r&&(n=`v${r[0].replace("x","0")}`),this.state={version:n}}render(){return s.a.createElement("div",null,s.a.cloneElement(this.props.children,{version:this.state.version}))}}t.a=o}).call(this,r(49))}}]);
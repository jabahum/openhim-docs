(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=(n(0),n(338)),o=n(347),s=n(348);const i={id:"overview",title:"Transactions overview",sidebar_label:"Overview",keywords:["OpenHIM","API","Transactions","Overview"],description:"An overview of the OpenHIM Transaction"},l=[{value:"Schema Model",id:"schema-model",children:[]}],c={id:"api/transactions/overview",title:"Transactions overview",description:"An overview of the OpenHIM Transaction",source:"@site/docs/api/transactions/overview.md",permalink:"/docs/next/api/transactions/overview",version:"next",sidebar_label:"Overview",sidebar:"api",previous:{title:"Delete task",permalink:"/docs/next/api/tasks/delete"},next:{title:"Create Transaction",permalink:"/docs/next/api/transactions/create"}},p={rightToc:l,metadata:c},d="wrapper";function u({components:e,...t}){return Object(a.b)(d,Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Allows for the management of OpenHIM transactions. Transactions store the details about request and responses sent through specific channels."),Object(a.b)("p",null,"An important concept to grasp with a transaction is the meaning of a transaction's status. Here is a description of what each state means:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Processing")," - We are waiting for responses from one or more routes"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Successful")," - The primary route and all other routes returned successful http response codes (2xx)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Failed")," - The primary route has returned a failed http response code (5xx)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Completed")," - The primary route and the other routes did not return a failure http response code (5xx) but some weren't successful (2xx)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Completed with error(s)")," - The primary route did not return a failure http response code (5xx) but one of the routes did.")),Object(a.b)("h2",{id:"schema-model"},"Schema Model"),Object(a.b)(s.a,{mdxType:"GetCurrentVersion"},Object(a.b)(o.a,{url:"https://raw.githubusercontent.com/jembi/openhim-core-js/<VERSION>/src/model/transactions.js",language:"javascript",mdxType:"ExternalContentSyntaxHighlighter"})))}u.isMDXComponent=!0},344:function(e,t,n){"use strict";t.a={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]}},347:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),s=n(345),i=n.n(s),l=n(346),c=n(344);class p extends a.Component{constructor(e){super(e),this.state={data:null,spinner:!0,url:e.url.replace("<VERSION>",e.version)}}componentWillMount(){i.a.get(this.state.url).then(e=>{e.data?this.setState({data:e.data,spinner:!1}):this.setState({data:null,spinner:!1})}).catch(e=>{console.error(e.toString()),this.setState({data:null,spinner:!1})})}render(){return this.state.spinner?o.a.createElement("div",{className:"spinnerContainer"},o.a.createElement("div",{id:"loading"})):this.state.data?o.a.createElement(l.a,Object(r.a)({},l.b,{theme:c.a,code:this.state.data,language:`${this.props.language}`}),({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:a})=>o.a.createElement("pre",{className:e,style:t},n.map((e,t)=>o.a.createElement("div",r({line:e,key:t}),e.map((e,t)=>o.a.createElement("span",a({token:e,key:t}))))))):o.a.createElement("div",null,`Schema model not found for version ${this.props.version}`)}}t.a=p},348:function(e,t,n){"use strict";(function(e){var r=n(0),a=n.n(r);let o;o="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{location:{}};class s extends r.Component{constructor(e){super(e);const t=/[\d].[\d].x/;let n=null;o&&o.location&&(n=o.location.href.match(t));let r="master";n&&(r=`v${n[0].replace("x","0")}`),this.state={version:r}}render(){return a.a.createElement("div",null,a.a.cloneElement(this.props.children,{version:this.state.version}))}}t.a=s}).call(this,n(49))}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{321:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),c=a(329),i=a(330),s=a(331);var o=function(e){const{metadata:t}=e;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous"),r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next"),r.a.createElement("h4",{className:"pagination-nav__link--label"},t.next.title," \xbb"))))};var m=function(e,t,a){const[r,l]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n=[],c=[];function i(){const i=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const r=n[e],{top:l}=r.getBoundingClientRect();l>=0&&l<=a&&(t=r),e+=1}return t}();if(i){let a=0,n=!1;for(c=document.getElementsByClassName(e);a<c.length&&!n;){const e=c[a],{href:s}=e,o=decodeURIComponent(s.substring(s.indexOf("#")+1));i.id===o&&(r&&r.classList.remove(t),e.classList.add(t),l(e),n=!0),a+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}})},d=a(379),u=a.n(d);const E="contents__link",g="contents__link--active",v=100;function p({headings:e}){return m(E,g,v),r.a.createElement("div",{className:"col col--3"},r.a.createElement("div",{className:u.a.tableOfContents},r.a.createElement(f,{headings:e})))}function f({headings:e,isChild:t}){return e.length?r.a.createElement("ul",{className:t?"":"contents contents__left-border"},e.map(e=>r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:E,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(f,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(c.a)(),{url:a}=t,{metadata:n,content:s}=e,{description:m,title:d,permalink:E,image:g,editUrl:v,lastUpdatedAt:f,lastUpdatedBy:h,keywords:b}=n,w=a+Object(i.a)(g);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,d&&r.a.createElement("title",null,d),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),g&&r.a.createElement("meta",{property:"og:image",content:w}),g&&r.a.createElement("meta",{property:"twitter:image",content:w}),g&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+d}),E&&r.a.createElement("meta",{property:"og:url",content:a+E})),r.a.createElement("div",{className:"padding-vert--lg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:u.a.docItemContainer},r.a.createElement("article",null,!n.hide_title&&r.a.createElement("header",null,r.a.createElement("h1",{className:u.a.docTitle},n.title)),r.a.createElement("div",{className:"markdown"},r.a.createElement(s,null))),(v||f||h)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},v&&r.a.createElement("a",{href:v,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(f||h)&&r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,"Last updated"," ",f&&r.a.createElement(r.a.Fragment,null,"on"," ",r.a.createElement("time",{dateTime:new Date(1e3*f).toISOString(),className:u.a.docLastUpdatedAt},new Date(1e3*f).toLocaleDateString()),h&&" "),h&&r.a.createElement(r.a.Fragment,null,"by ",r.a.createElement("strong",null,h)),!1))))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(o,{metadata:n})))),s.rightToc&&r.a.createElement(p,{headings:s.rightToc})))))}},329:function(e,t,a){"use strict";var n=a(0),r=a(33);t.a=function(){return Object(n.useContext)(r.a)}},330:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(329);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},331:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(17);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,s=t||a,o=i.test(s);let m=!1;const d="undefined"!=typeof window&&"IntersectionObserver"in window;let u;return Object(n.useEffect)(()=>(!d&&o&&window.docusaurus.prefetch(s),()=>{d&&u&&u.disconnect()}),[s,d,o]),s&&o?r.a.createElement(l.b,c({},e,{onMouseEnter:()=>{m||(window.docusaurus.preload(s),m=!0)},innerRef:e=>{d&&e&&o&&((e,t)=>{(u=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(u.unobserve(e),u.disconnect(),t())})})).observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):r.a.createElement("a",c({},e,{href:s}))}},379:function(e,t,a){e.exports={docTitle:"docTitle_1vWb",docItemContainer:"docItemContainer_2cwg",tableOfContents:"tableOfContents_TbNY",docLastUpdatedAt:"docLastUpdatedAt_1sqk"}}}]);
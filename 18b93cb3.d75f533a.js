(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{121:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(366),o=n(342),c=n(363),i=n(348),s=n(381),u=n(339),m=n.n(u),d=n(427);t.default=function(){var e=Object(o.a)().siteConfig,t=void 0===e?{}:e,n=d[0],a=d.filter((function(e){return e!==n})),u=["4.0.5","3.4.2","3.3.0","3.2.1","3.1.0","3.0.0","2.0.0"],f="https://github.com/"+t.organizationName+"/"+t.projectName;return r.a.createElement(l.a,{permalink:"/versions",keywords:["OpenHIM","Versions"],description:"Versions page listing all documented site versions"},r.a.createElement("header",{className:m()("hero center page",s.styles.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"logo_header",src:"/img/openhim-logo-green.svg",alt:"Project Logo"}),r.a.createElement("p",{className:"hero__subtitle subtitle"},"Documentation Versions"))),r.a.createElement("div",{className:"container margin-vert--xl",style:{textAlign:"center"}},r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"latest"},"Latest Version (Stable)"),r.a.createElement("p",null,"Here you can find the latest documentation."),r.a.createElement("table",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,n),r.a.createElement("td",null,r.a.createElement(c.a,{to:Object(i.a)("/docs/introduction/about")},"Documentation")),r.a.createElement("td",null,r.a.createElement(c.a,{to:Object(i.a)("/docs/api/introduction/welcome")},"API")),r.a.createElement("td",null,r.a.createElement("a",{href:f+"/releases/tag/v"+n},"Release Notes")))))),r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),r.a.createElement("p",null,"Here you can find the documentation for unreleased version."),r.a.createElement("table",null,r.a.createElement("tbody",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("tr",null,r.a.createElement("th",null,"master"),r.a.createElement("td",null,r.a.createElement(c.a,{to:Object(i.a)("/docs/next/introduction/about")},"Documentation")),r.a.createElement("td",null,r.a.createElement(c.a,{to:Object(i.a)("/docs/next/api/introduction/welcome")},"API")),r.a.createElement("td",null,r.a.createElement("a",{href:f},"Source Code")))))),(a.length>0||u.length>0)&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"archive"},"Past Versions"),r.a.createElement("p",null,"Here you can find documentation for previous versions of ",t.title,"."),r.a.createElement("table",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("th",null,e),r.a.createElement("td",null,r.a.createElement(c.a,{to:Object(i.a)("/docs/"+e+"/introduction/about")},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:f+"/releases/tag/v"+e},"Release Notes")))})),r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"3"},"Read The Docs version")),u.map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("th",null,e),r.a.createElement("td",null,r.a.createElement("a",{href:Object(i.a)("resources/openhim-v"+e+".pdf")},"Download PDF")),r.a.createElement("td",null,r.a.createElement("a",{href:Object(i.a)("resources/openhim-v"+e+".zip")},"Download HTML")))})))))))}},365:function(e,t){var n,a,r=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===l||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:l}catch(e){n=l}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var i,s=[],u=!1,m=-1;function d(){u&&i&&(u=!1,i.length?s=i.concat(s):m=-1,s.length&&f())}function f(){if(!u){var e=c(d);u=!0;for(var t=s.length;t;){for(i=s,s=[];++m<t;)i&&i[m].run();m=-1,t=s.length}i=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function E(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||u||c(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=E,r.addListener=E,r.once=E,r.off=E,r.removeListener=E,r.removeAllListeners=E,r.emit=E,r.prependListener=E,r.prependOnceListener=E,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},427:function(e){e.exports=JSON.parse('["5.2.x"]')}}]);
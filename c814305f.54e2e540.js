(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(336),i=a.n(o),s=a(297),l=a(294);function c(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h2",null,r.a.createElement("a",{href:"https://github.com/"+e.data.full_name},e.data.name))),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",{className:"lead"},e.data.description),r.a.createElement("p",{className:"lead"},e.data.stargazers_count," \ud83c\udf1f - Written in"," ",r.a.createElement("b",null,e.data.language)),r.a.createElement("a",{className:"button button--secondary",href:"https://github.com/"+e.data.full_name+"/releases"},"Download")),r.a.createElement("hr",null))}class d extends n.Component{constructor(){super();this.state={data:[],spinner:!0}}componentWillMount(){i.a.get("https://api.github.com/search/repositories?q=%22openhim-mediator%22&sort=stars&order=desc").then(e=>{e.data.items&&e.data.items.length>0&&this.setState({data:e.data.items,spinner:!1})}).catch((function(e){console.error(e.toString())}))}render(){if(this.state.spinner)return r.a.createElement("div",{id:"loading"});var e=this.state.data.map((function(e){return r.a.createElement(c,{key:e.id,data:e})}));return r.a.createElement("div",null,e)}}t.default=function(){const e=Object(l.a)(),{siteConfig:t={}}=e;return r.a.createElement(s.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},r.a.createElement("div",{className:"homeContainer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h1",{className:"hero__title"},"OpenHIM Mediator Library"),r.a.createElement("p",{className:"hero__subtitle"},"This is like the app store for the OpenHIM. Here you will find a number of mediators that are designed to extend the OpenHIM's functionality for a specific purpose. Browse the mediators below to see if any suit your needs. If not, then it is easy to create your own."),r.a.createElement("p",{className:"hero__subtitle"},'To get your own mediator published here all you need to do is follow the github repository naming convention. Any public repository beginning with "openhim-mediator" will be displayed here.'),r.a.createElement("div",null,r.a.createElement("a",{className:"button button--secondary button--outline button--lg",href:"/openhim-docs/docs/introduction/about"},"Create a new mediator \xbb"))),r.a.createElement("hr",null),r.a.createElement(d,null))))}}}]);
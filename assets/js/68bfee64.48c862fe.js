"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7541],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,N=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(N,o(o({ref:t},s),{},{components:r})):n.createElement(N,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},97061:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={id:"roadmap",title:"Roadmap"},p=void 0,u={type:"mdx",permalink:"/community/roadmap",source:"@site/src/pages/community/roadmap.md",title:"Roadmap",description:"\x3c!--",frontMatter:{id:"roadmap",title:"Roadmap"}},s=[],m={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"future-development-long-term-goals"},"Future development: long term goals"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Application and task priority support"),(0,l.kt)("li",{parentName:"ul"},"Preemption of allocations"),(0,l.kt)("li",{parentName:"ul"},"User and group quota and limit enforcement"),(0,l.kt)("li",{parentName:"ul"},"Offer an alternative mode of deployment as plugins to the default scheduler, in addition to the current standalone mode")),(0,l.kt)("h1",{id:"next-release-development"},"Next Release Development"),(0,l.kt)("p",null,"Release Details:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Version: 1.0.0"),(0,l.kt)("li",{parentName:"ul"},"Target release date: March 2022"),(0,l.kt)("li",{parentName:"ul"},"Release manager: Wilfred Spiegelenburg"),(0,l.kt)("li",{parentName:"ul"},"Development status: ",(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/issues/?filter=12348416"},"Issue tracker"))),(0,l.kt)("p",null,"Planned major features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-971"},"YUNIKORN-971")," Implement YuniKorn as a Kubernetes scheduler plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-978"},"YUNIKORN-978")," Admission controller deployment improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-984"},"YUNIKORN-984")," Enforcing User and Group limits (phase 1)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-954"},"YUNIKORN-954")," Remove old REST api"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-720"},"YUNIKORN-720")," Improved queue metrics")),(0,l.kt)("p",null,"Supported Kubernetes versions and the Kubernetes dependency will be defined and finalised during the development cycle. "),(0,l.kt)("h1",{id:"past-releases"},"Past Releases"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Release Date"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Release Manager"),(0,l.kt)("th",{parentName:"tr",align:null},"Release Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.12.1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2021-12-26"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Chaoran Yu"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.12.1"},"0.12.1-release-notes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.11.0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2021-08-18"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Kinga Marton"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.11.0"},"0.11.0-release-notes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.10.0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2021-04-09"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Tao Yang"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.10.0"},"0.10.0-release-notes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.9.0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2020-08-28"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Wilfred Spiegelenburg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.9.0"},"0.9.0-release-notes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.8.0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2020-05-04"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Weiwei Yang"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.8.0"},"0.8.0-release-notes"))))))}c.isMDXComponent=!0}}]);
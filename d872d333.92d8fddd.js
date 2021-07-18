(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{212:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var i=a(2),n=a(6),o=(a(0),a(244)),s=["components"],r={id:"state_aware_scheduling",title:"Batch Workloads Ordering with StateAware Policy"},l={unversionedId:"design/state_aware_scheduling",id:"version-0.11.0/design/state_aware_scheduling",isDocsHomePage:!1,title:"Batch Workloads Ordering with StateAware Policy",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/design/state_aware_scheduling.md",slug:"/design/state_aware_scheduling",permalink:"/docs/design/state_aware_scheduling",version:"0.11.0",sidebar:"version-0.11.0/docs",previous:{title:"Scheduler Configuration",permalink:"/docs/design/scheduler_configuration"},next:{title:"Scheduler Object States",permalink:"/docs/design/scheduler_object_states"}},c=[{value:"The problem",id:"the-problem",children:[{value:"Example issue",id:"example-issue",children:[]}]},{value:"Design",id:"design",children:[{value:"Design goals",id:"design-goals",children:[]},{value:"None goals",id:"none-goals",children:[]},{value:"Possible solutions",id:"possible-solutions",children:[]},{value:"Algorithm",id:"algorithm",children:[]},{value:"Fallback mechanism",id:"fallback-mechanism",children:[]},{value:"Example run",id:"example-run",children:[]}]}],u={rightToc:c};function p(e){var t=e.components,r=Object(n.a)(e,s);return Object(o.b)("wrapper",Object(i.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"the-problem"},"The problem"),Object(o.b)("p",null,"A common pattern while processing data is that the application can be divided into multiple stages.\nAnother way to look at this is the fact that processing needs to be kicked off and that the first step is to start a driver or manager for the application.\nLater stages might depend on the previous stages.\nWhen running applications in a size limited environment this could lead to a resource exhaustion when submitting multiple applications at the same time.\nThese first stages might consume all available resources leaving no room for the next stage(s) to start.\nOften this issue is caused by having a high number of applications start simultaneous and trying to get resources in parallel."),Object(o.b)("h3",{id:"example-issue"},"Example issue"),Object(o.b)("p",null,"When submitting numerous Spark applications in a short amount of time the drivers will all be started shortly after each other.\nThe drivers consume all available resources in a queue or in the whole cluster.\nAfter starting the drivers they will request resources for the executors.\nSince the queue or cluster has no resources left the executors will not be started.\nThe driver cannot progress.\nThe only way that progress would be made is if and when one of the drivers finishes or fails and frees up resources for executors to be started."),Object(o.b)("h2",{id:"design"},"Design"),Object(o.b)("h3",{id:"design-goals"},"Design goals"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Prevent resource exhaustion by first stage allocations"),Object(o.b)("li",{parentName:"ol"},"Improve chance for jobs to get minimal required resources over others")),Object(o.b)("h3",{id:"none-goals"},"None goals"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"This is NOT an implementation of Gang scheduling."),Object(o.b)("li",{parentName:"ol"},"No change to the currently supported FAIR or FIFO scheduling algorithms"),Object(o.b)("li",{parentName:"ol"},"Fix resource quota usage outside of the core scheduler for submitted but waiting applications")),Object(o.b)("h3",{id:"possible-solutions"},"Possible solutions"),Object(o.b)("p",null,"Other batch schedulers like the YARN schedulers use a limit on the number of simultaneous running applications.\nThey use either resource constraints on the driver or management stage or set a hard limit of the number of applications that can run in a queue.\nThe draw back of that solution is that it does not work well in a cluster that can scale up or down automatically in a cloud environment.\nTo work around that percentage based limits could be set on the consumed resources for the driver or management stage.\nThis does not alleviate the fact that driver or management stages can be of any size, large and or small, which complicates the percentage scenario further as it does not give a predictable behaviour."),Object(o.b)("p",null,"A different solution would be to assume a specific behaviour of the applications.\nUsing that assumption a limit on the applications could be set based on the state it is in.\nThe spark driver and executor behaviour is the most usual use case.\nThis would provide a way to limit scheduling to existing applications and only drip feed new applications into the list of applications to schedule when there are resources available."),Object(o.b)("h3",{id:"algorithm"},"Algorithm"),Object(o.b)("p",null,"The algorithm described here is based on the drip feed of new applications into the applications to schedule based on the states of all applications.\nScheduling is based on the applications in a queue.\nThe algorithm will be applied at a queue level.\nThis is not a cluster wide setup."),Object(o.b)("p",null,"What we want to achieve is the following behaviour: only schedule one (1) application that is in its early stage(s) (called a starting state) at the same time.\nOnly consider another new application if and when the previous application has transitioned out of the starting state.\nApplications will always be allocated resources on a first in first out basis based on submission time.\nThat means that an application that is newly added and in its starting phase will only get resources if applications in the later stages do not need any resources."),Object(o.b)("p",null,"This algorithm will be implemented as an application sorting policy on a queue.\nThis allows specific queues to limit parallel application startup while other queues with different work loads can schedule without or with different limitations."),Object(o.b)("h3",{id:"fallback-mechanism"},"Fallback mechanism"),Object(o.b)("p",null,"A fallback mechanism has to be built into the algorithm.\nNot all applications will request more than one allocation.\nThe other case that has to be accounted for could be a misbehaving or a slow application.\nHaving an application stuck in the starting state could cause a scheduler livelock and starvation of other applications."),Object(o.b)("p",null,"The fall back mechanism proposed is as simple as a time limit on the starting state.\nThis means that any application auto progresses out of the starting state.\nThe time limit will be set to five (5) minutes hard coded as a starting point and will not be made configurable."),Object(o.b)("p",null,"The other fallback mechanism considered was making the number of allocations for the starting state configurable.\nThis option provided a number of issues which made it difficult to implement.\nOne of the main stumbling blocks is the fact that it requires the application submitter to specify the value.\nIt also does not guarantee that the application will leave the starting state either and does not fix the livelock issue.\nIf an application was submitted with five required allocation but due to issues during the run never asked for more than four then the livelock would still occur."),Object(o.b)("p",null,"Setting a default of zero (0) would also not work as it would bypass the starting state.\nIt would make the sorting policy an opt-in instead of an opt-out.\nSetting a default of one (1) does not give us much enhancement to what we currently propose.\nIt makes the sorting policy an opt-out but does not give the cluster administrator any control over the scheduling behaviour.\nWeighing those against each other the proposal is to not make this configurable."),Object(o.b)("h3",{id:"example-run"},"Example run"),Object(o.b)("p",null,"Using Spark applications as an example: a new application can only be scheduled if the previous application has at least one (1) executor allocated."),Object(o.b)("p",null,Object(o.b)("img",{alt:"images",src:a(396).default})),Object(o.b)("p",null,"Assume we have the following Spark apps: App1 & App2 as in the diagram above. The applications were submitted in that order: App1 first, then App2. They were both submitted to the same queue."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Both applications are in the queue waiting for the first allocation: accepted by the scheduler. App1 has requested driver D1 and App2 has requested driver D2."),Object(o.b)("li",{parentName:"ol"},"The scheduler sorts the application and allows 1 accepted application to be scheduled (no starting applications yet): App1 as the oldest applications with an outstanding request is scheduled.",Object(o.b)("br",{parentName:"li"}),"App1 is allocated its driver (D1) and progresses to starting.",Object(o.b)("br",{parentName:"li"}),"App2 request for a driver is ignored as the scheduler is starting App1 (only 1 application in starting or accepted state is scheduled)."),Object(o.b)("li",{parentName:"ol"},"App1 requests executors E11 and E12. The scheduler assigns E11 and E12. At this point the application state changes to running when it has at least 1 executor allocated."),Object(o.b)("li",{parentName:"ol"},"App2 has been waiting to get the driver allocated. Since there are no applications in a starting state the scheduler looks at App2 which is in an accepted state. App2 moves from the accepted state to starting when the driver is allocated."),Object(o.b)("li",{parentName:"ol"},"App2 requests its executor E21. The application state changes to running when E21 is allocated.")),Object(o.b)("p",null,"This process would repeat itself for any new application submitted."))}p.isMDXComponent=!0},244:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=i,b=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return a?n.a.createElement(b,r(r({ref:t},c),{},{components:a})):n.a.createElement(b,r({ref:t},c))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},396:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fifo-state-example-294dbf22ea35a750c8ad768c8760929d.png"}}]);
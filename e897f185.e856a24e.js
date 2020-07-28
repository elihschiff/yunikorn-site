(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),c=(n(0),n(138)),o={id:"system",title:"System"},p={unversionedId:"api/system",id:"api/system",isDocsHomePage:!1,title:"System",description:"\x3c!--",source:"@site/docs/api/system.md",permalink:"/docs/next/api/system",version:"next",sidebar:"docs",previous:{title:"Scheduler",permalink:"/docs/next/api/scheduler"},next:{title:"Evaluate YuniKorn function & performance with Kubemark",permalink:"/docs/next/performance/evaluate_perf_function_with_kubemark"}},b=[{value:"pprof",id:"pprof",children:[{value:"Success response",id:"success-response",children:[]}]},{value:"Heap",id:"heap",children:[{value:"Success response",id:"success-response-1",children:[]}]},{value:"Thread create",id:"thread-create",children:[{value:"Success response",id:"success-response-2",children:[]}]},{value:"Goroutine",id:"goroutine",children:[{value:"Success response",id:"success-response-3",children:[]}]},{value:"Allocations",id:"allocations",children:[{value:"Success response",id:"success-response-4",children:[]}]},{value:"Block",id:"block",children:[{value:"Success response",id:"success-response-5",children:[]}]},{value:"Mutex",id:"mutex",children:[{value:"Success response",id:"success-response-6",children:[]}]},{value:"Cmdline",id:"cmdline",children:[{value:"Success response",id:"success-response-7",children:[]}]},{value:"Profile",id:"profile",children:[{value:"Success response",id:"success-response-8",children:[]}]},{value:"Symbol",id:"symbol",children:[{value:"Success response",id:"success-response-9",children:[]}]},{value:"Trace",id:"trace",children:[{value:"Success response",id:"success-response-10",children:[]}]}],s={rightToc:b};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"These endpoints are for the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/google/pprof"}),"pprof")," profiling tool."),Object(c.b)("h2",{id:"pprof"},"pprof"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL")," : ",Object(c.b)("inlineCode",{parentName:"p"},"/debug/pprof/")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")," : ",Object(c.b)("inlineCode",{parentName:"p"},"GET")),Object(c.b)("h3",{id:"success-response"},"Success response"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Code")," : ",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Content examples")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"/debug/pprof/\n\nTypes of profiles available:\nCount   Profile\n273 allocs\n0   block\n0   cmdline\n78  goroutine\n273 heap\n0   mutex\n0   profile\n29  threadcreate\n0   trace\nfull goroutine stack dump\nProfile Descriptions:\n\nallocs: A sampling of all past memory allocations\nblock: Stack traces that led to blocking on synchronization primitives\ncmdline: The command line invocation of the current program\ngoroutine: Stack traces of all current goroutines\nheap: A sampling of memory allocations of live objects. You can specify the gc GET parameter to run GC before taking the heap sample.\nmutex: Stack traces of holders of contended mutexes\nprofile: CPU profile. You can specify the duration in the seconds GET parameter. After you get the profile file, use the go tool pprof command to investigate the profile.\nthreadcreate: Stack traces that led to the creation of new OS threads\ntrace: A trace of execution of the current program. You can specify the duration in the seconds GET parameter. After you get the trace file, use the go tool trace command to investigate the trace.\n")),Object(c.b)("h2",{id:"heap"},"Heap"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL")," : ",Object(c.b)("inlineCode",{parentName:"p"},"/debug/pprof/heap")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")," : ",Object(c.b)("inlineCode",{parentName:"p"},"GET")),Object(c.b)("h3",{id:"success-response-1"},"Success response"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Code")," : ",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Content examples")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-proto"}),"// binary data from proto\n")),Object(c.b)("h2",{id:"thread-create"},"Thread create"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL")," : ",Object(c.b)("inlineCode",{parentName:"p"},"/debug/pprof/threadcreate")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")," : ",Object(c.b)("inlineCode",{parentName:"p"},"GET")),Object(c.b)("h3",{id:"success-response-2"},"Success response"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Code")," : ",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Content examples")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-proto"}),"// binary data from proto\n")),Object(c.b)("h2",{id:"goroutine"},"Goroutine"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL")," : ",Object(c.b)("inlineCode",{parentName:"p"},"/debug/pprof/goroutine")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")," : ",Object(c.b)("inlineCode",{parentName:"p"},"GET")),Object(c.b)("h3",{id:"success-response-3"},"Success response"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Code")," : ",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Content examples")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-proto"}),"// binary data from proto\n")),Object(c.b)("h2",{id:"allocations"},"Allocations"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL")," : ",Object(c.b)("inlineCode",{parentName:"p"},"/debug/pprof/allocs")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")," : ",Object(c.b)("inlineCode",{parentName:"p"},"GET")),Object(c.b)("h3",{id:"success-response-4"},"Success response"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Code")," : ",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Content examples")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-proto"}),"// binary data from proto\n")),Object(c.b)("h2",{id:"block"},"Block"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL")," : ",Object(c.b)("inlineCode",{parentName:"p"},"/debug/pprof/block")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")," : ",Object(c.b)("inlineCode",{parentName:"p"},"GET")),Object(c.b)("h3",{id:"success-response-5"},"Success response"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Code")," : ",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Content examples")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-proto"}),"// binary data from proto\n")),Object(c.b)("h2",{id:"mutex"},"Mutex"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL")," : ",Object(c.b)("inlineCode",{parentName:"p"},"/debug/pprof/mutex")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")," : ",Object(c.b)("inlineCode",{parentName:"p"},"GET")),Object(c.b)("h3",{id:"success-response-6"},"Success response"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Code")," : ",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Content examples")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-proto"}),"// binary data from proto\n")),Object(c.b)("h2",{id:"cmdline"},"Cmdline"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL")," : ",Object(c.b)("inlineCode",{parentName:"p"},"/debug/pprof/cmdline")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")," : ",Object(c.b)("inlineCode",{parentName:"p"},"GET")),Object(c.b)("h3",{id:"success-response-7"},"Success response"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Code")," : ",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Content examples")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-proto"}),"// binary data from proto\n")),Object(c.b)("h2",{id:"profile"},"Profile"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL")," : ",Object(c.b)("inlineCode",{parentName:"p"},"/debug/pprof/profile")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")," : ",Object(c.b)("inlineCode",{parentName:"p"},"GET")),Object(c.b)("h3",{id:"success-response-8"},"Success response"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Code")," : ",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Content examples")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-proto"}),"// binary data from proto\n")),Object(c.b)("h2",{id:"symbol"},"Symbol"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL")," : ",Object(c.b)("inlineCode",{parentName:"p"},"/debug/pprof/symbol")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")," : ",Object(c.b)("inlineCode",{parentName:"p"},"GET")),Object(c.b)("h3",{id:"success-response-9"},"Success response"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Code")," : ",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Content examples")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-proto"}),"// binary data from proto\n")),Object(c.b)("h2",{id:"trace"},"Trace"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"URL")," : ",Object(c.b)("inlineCode",{parentName:"p"},"/debug/pprof/trace")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Method")," : ",Object(c.b)("inlineCode",{parentName:"p"},"GET")),Object(c.b)("h3",{id:"success-response-10"},"Success response"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Code")," : ",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Content examples")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-proto"}),"// binary data from proto\n")))}l.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),i=l(n),d=r,O=i["".concat(o,".").concat(d)]||i[d]||u[d]||c;return n?a.a.createElement(O,p(p({ref:t},s),{},{components:n})):a.a.createElement(O,p({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
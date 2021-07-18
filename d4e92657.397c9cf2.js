(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return i}));var r=n(2),a=n(6),o=(n(0),n(244)),c=["components"],p={id:"system",title:"System"},b={unversionedId:"api/system",id:"version-0.10.0/api/system",isDocsHomePage:!1,title:"System",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/api/system.md",slug:"/api/system",permalink:"/docs/0.10.0/api/system",version:"0.10.0",sidebar:"version-0.10.0/docs",previous:{title:"Scheduler",permalink:"/docs/0.10.0/api/scheduler"},next:{title:"Trouble Shooting",permalink:"/docs/0.10.0/user_guide/trouble_shooting"}},s=[{value:"pprof",id:"pprof",children:[{value:"Success response",id:"success-response",children:[]}]},{value:"Heap",id:"heap",children:[{value:"Success response",id:"success-response-1",children:[]}]},{value:"Thread create",id:"thread-create",children:[{value:"Success response",id:"success-response-2",children:[]}]},{value:"Goroutine",id:"goroutine",children:[{value:"Success response",id:"success-response-3",children:[]}]},{value:"Allocations",id:"allocations",children:[{value:"Success response",id:"success-response-4",children:[]}]},{value:"Block",id:"block",children:[{value:"Success response",id:"success-response-5",children:[]}]},{value:"Mutex",id:"mutex",children:[{value:"Success response",id:"success-response-6",children:[]}]},{value:"Cmdline",id:"cmdline",children:[{value:"Success response",id:"success-response-7",children:[]}]},{value:"Profile",id:"profile",children:[{value:"Success response",id:"success-response-8",children:[]}]},{value:"Symbol",id:"symbol",children:[{value:"Success response",id:"success-response-9",children:[]}]},{value:"Trace",id:"trace",children:[{value:"Success response",id:"success-response-10",children:[]}]}],l={rightToc:s};function i(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"These endpoints are for the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/google/pprof"},"pprof")," profiling tool."),Object(o.b)("h2",{id:"pprof"},"pprof"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/debug/pprof/")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("h3",{id:"success-response"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"/debug/pprof/\n\nTypes of profiles available:\nCount   Profile\n273 allocs\n0   block\n0   cmdline\n78  goroutine\n273 heap\n0   mutex\n0   profile\n29  threadcreate\n0   trace\nfull goroutine stack dump\nProfile Descriptions:\n\nallocs: A sampling of all past memory allocations\nblock: Stack traces that led to blocking on synchronization primitives\ncmdline: The command line invocation of the current program\ngoroutine: Stack traces of all current goroutines\nheap: A sampling of memory allocations of live objects. You can specify the gc GET parameter to run GC before taking the heap sample.\nmutex: Stack traces of holders of contended mutexes\nprofile: CPU profile. You can specify the duration in the seconds GET parameter. After you get the profile file, use the go tool pprof command to investigate the profile.\nthreadcreate: Stack traces that led to the creation of new OS threads\ntrace: A trace of execution of the current program. You can specify the duration in the seconds GET parameter. After you get the trace file, use the go tool trace command to investigate the trace.\n")),Object(o.b)("h2",{id:"heap"},"Heap"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/debug/pprof/heap")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("h3",{id:"success-response-1"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),Object(o.b)("h2",{id:"thread-create"},"Thread create"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/debug/pprof/threadcreate")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("h3",{id:"success-response-2"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),Object(o.b)("h2",{id:"goroutine"},"Goroutine"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/debug/pprof/goroutine")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("h3",{id:"success-response-3"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),Object(o.b)("h2",{id:"allocations"},"Allocations"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/debug/pprof/allocs")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("h3",{id:"success-response-4"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),Object(o.b)("h2",{id:"block"},"Block"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/debug/pprof/block")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("h3",{id:"success-response-5"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),Object(o.b)("h2",{id:"mutex"},"Mutex"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/debug/pprof/mutex")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("h3",{id:"success-response-6"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),Object(o.b)("h2",{id:"cmdline"},"Cmdline"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/debug/pprof/cmdline")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("h3",{id:"success-response-7"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),Object(o.b)("h2",{id:"profile"},"Profile"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/debug/pprof/profile")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("h3",{id:"success-response-8"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),Object(o.b)("h2",{id:"symbol"},"Symbol"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/debug/pprof/symbol")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("h3",{id:"success-response-9"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),Object(o.b)("h2",{id:"trace"},"Trace"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"URL")," : ",Object(o.b)("inlineCode",{parentName:"p"},"/debug/pprof/trace")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Method")," : ",Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("h3",{id:"success-response-10"},"Success response"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code")," : ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content examples")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")))}i.isMDXComponent=!0},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),i=l(n),d=r,O=i["".concat(c,".").concat(d)]||i[d]||u[d]||o;return n?a.a.createElement(O,p(p({ref:t},s),{},{components:n})):a.a.createElement(O,p({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
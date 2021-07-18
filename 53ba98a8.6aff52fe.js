(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var o=t(2),r=t(6),a=(t(0),t(244)),i=["components"],c={id:"profiling",title:"Profiling"},l={unversionedId:"performance/profiling",id:"version-0.11.0/performance/profiling",isDocsHomePage:!1,title:"Profiling",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/performance/profiling.md",slug:"/performance/profiling",permalink:"/docs/performance/profiling",version:"0.11.0",sidebar:"version-0.11.0/docs",previous:{title:"Scheduler Metrics",permalink:"/docs/performance/metrics"}},p=[{value:"CPU profiling",id:"cpu-profiling",children:[]},{value:"Memory Profiling",id:"memory-profiling",children:[]},{value:"Download profiling samples and analyze it locally",id:"download-profiling-samples-and-analyze-it-locally",children:[]},{value:"Resources",id:"resources",children:[]}],s={rightToc:p};function u(e){var n=e.components,c=Object(r.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},s,c,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use ",Object(a.b)("a",{parentName:"p",href:"https://github.com/google/pprof"},"pprof")," to do CPU, Memory profiling can help you understand the runtime status of YuniKorn scheduler. Profiling instruments have been\nadded to YuniKorn rest service, we can easily retrieve and analyze them from HTTP\nendpoints."),Object(a.b)("h2",{id:"cpu-profiling"},"CPU profiling"),Object(a.b)("p",null,"At this step, ensure you already have YuniKorn running, it can be either running from\nlocal via a ",Object(a.b)("inlineCode",{parentName:"p"},"make run")," command, or deployed as a pod running inside of K8s. Then run"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"go tool pprof http://localhost:9080/debug/pprof/profile\n")),Object(a.b)("p",null,"The profile data will be saved on local file system, once that is done, it enters into\nthe interactive mode. Now you can run profiling commands, such as"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"(pprof) top\nShowing nodes accounting for 14380ms, 44.85% of 32060ms total\nDropped 145 nodes (cum <= 160.30ms)\nShowing top 10 nodes out of 106\n      flat  flat%   sum%        cum   cum%\n    2130ms  6.64%  6.64%     2130ms  6.64%  __tsan_read\n    1950ms  6.08% 12.73%     1950ms  6.08%  __tsan::MetaMap::FreeRange\n    1920ms  5.99% 18.71%     1920ms  5.99%  __tsan::MetaMap::GetAndLock\n    1900ms  5.93% 24.64%     1900ms  5.93%  racecall\n    1290ms  4.02% 28.67%     1290ms  4.02%  __tsan_write\n    1090ms  3.40% 32.06%     3270ms 10.20%  runtime.mallocgc\n    1080ms  3.37% 35.43%     1080ms  3.37%  __tsan_func_enter\n    1020ms  3.18% 38.62%     1120ms  3.49%  runtime.scanobject\n    1010ms  3.15% 41.77%     1010ms  3.15%  runtime.nanotime\n     990ms  3.09% 44.85%      990ms  3.09%  __tsan::DenseSlabAlloc::Refill\n")),Object(a.b)("p",null,"you can type command such as ",Object(a.b)("inlineCode",{parentName:"p"},"web")," or ",Object(a.b)("inlineCode",{parentName:"p"},"gif")," to get a graph that helps you better\nunderstand the overall performance on critical code paths. You can get something\nlike below:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"CPU Profiling",src:t(341).default})),Object(a.b)("p",null,"Note, in order to use these\noptions, you need to install the virtualization tool ",Object(a.b)("inlineCode",{parentName:"p"},"graphviz")," first, if you are using Mac, simply run ",Object(a.b)("inlineCode",{parentName:"p"},"brew install graphviz"),", for more info please refer ",Object(a.b)("a",{parentName:"p",href:"https://graphviz.gitlab.io/"},"here"),"."),Object(a.b)("h2",{id:"memory-profiling"},"Memory Profiling"),Object(a.b)("p",null,"Similarly, you can run"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"go tool pprof http://localhost:9080/debug/pprof/heap\n")),Object(a.b)("p",null,"this will return a snapshot of current heap which allows us to check memory usage.\nOnce it enters the interactive mode, you can run some useful commands. Such as\ntop can list top memory consumption objects."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"(pprof) top\nShowing nodes accounting for 83.58MB, 98.82% of 84.58MB total\nShowing top 10 nodes out of 86\n      flat  flat%   sum%        cum   cum%\n      32MB 37.84% 37.84%       32MB 37.84%  github.com/apache/incubator-yunikorn-core/pkg/cache.NewClusterInfo\n      16MB 18.92% 56.75%       16MB 18.92%  github.com/apache/incubator-yunikorn-core/pkg/rmproxy.NewRMProxy\n      16MB 18.92% 75.67%       16MB 18.92%  github.com/apache/incubator-yunikorn-core/pkg/scheduler.NewScheduler\n      16MB 18.92% 94.59%       16MB 18.92%  github.com/apache/incubator-yunikorn-k8shim/pkg/dispatcher.init.0.func1\n    1.04MB  1.23% 95.81%     1.04MB  1.23%  k8s.io/apimachinery/pkg/runtime.(*Scheme).AddKnownTypeWithName\n    0.52MB  0.61% 96.43%     0.52MB  0.61%  github.com/gogo/protobuf/proto.RegisterType\n    0.51MB  0.61% 97.04%     0.51MB  0.61%  sync.(*Map).Store\n    0.50MB   0.6% 97.63%     0.50MB   0.6%  regexp.onePassCopy\n    0.50MB  0.59% 98.23%     0.50MB  0.59%  github.com/json-iterator/go.(*Iterator).ReadString\n    0.50MB  0.59% 98.82%     0.50MB  0.59%  text/template/parse.(*Tree).newText\n")),Object(a.b)("p",null,"you can also run ",Object(a.b)("inlineCode",{parentName:"p"},"web"),", ",Object(a.b)("inlineCode",{parentName:"p"},"pdf")," or ",Object(a.b)("inlineCode",{parentName:"p"},"gif")," command to get the graph for heap."),Object(a.b)("h2",{id:"download-profiling-samples-and-analyze-it-locally"},"Download profiling samples and analyze it locally"),Object(a.b)("p",null,"We have included essential go/go-tool binaries in scheduler docker image, you should be able to do some basic profiling\nanalysis inside of the docker container. However, if you want to dig into some issues, it might be better to do the analysis\nlocally. Then you need to copy the samples file to local environment first. The command to copy files is like following:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubectl cp ${SCHEDULER_POD_NAME}:${SAMPLE_PATH_IN_DOCKER_CONTAINER} ${LOCAL_COPY_PATH}\n")),Object(a.b)("p",null,"for example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kubectl cp yunikorn-scheduler-cf8f8dd8-6szh5:/root/pprof/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz /Users/wyang/Downloads/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz\n")),Object(a.b)("p",null,"once you get the file in your local environment, then you can run the ",Object(a.b)("inlineCode",{parentName:"p"},"pprof")," command for analysis."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"go tool pprof /Users/wyang/Downloads/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz\n")),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"pprof Document ",Object(a.b)("a",{parentName:"li",href:"https://github.com/google/pprof/tree/master/doc"},"https://github.com/google/pprof/tree/master/doc"),".")))}u.isMDXComponent=!0},244:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=o,f=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return t?r.a.createElement(f,c(c({ref:n},p),{},{components:t})):r.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},341:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/cpu_profile-9597863f861872384ae86daabd07f7f9.jpg"}}]);
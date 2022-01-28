"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7293],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},89596:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],u={id:"core_features",title:"\u7279\u5f81",keywords:["\u7279\u5f81"]},c=void 0,l={unversionedId:"get_started/core_features",id:"version-0.12.1/get_started/core_features",title:"\u7279\u5f81",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.12.1/get_started/core_features.md",sourceDirName:"get_started",slug:"/get_started/core_features",permalink:"/zh-cn/docs/get_started/core_features",tags:[],version:"0.12.1",frontMatter:{id:"core_features",title:"\u7279\u5f81",keywords:["\u7279\u5f81"]},sidebar:"version-0.12.1/docs",previous:{title:"\u5f00\u59cb",permalink:"/zh-cn/docs/"},next:{title:"Partition and Queue Configuration",permalink:"/zh-cn/docs/user_guide/queue_config"}},p=[{value:"\u5e94\u7528\u611f\u77e5\u8c03\u5ea6",id:"\u5e94\u7528\u611f\u77e5\u8c03\u5ea6",children:[],level:2},{value:"\u5c42\u6b21\u8d44\u6e90\u961f\u5217",id:"\u5c42\u6b21\u8d44\u6e90\u961f\u5217",children:[],level:2},{value:"\u4f5c\u4e1a\u6392\u5e8f\u548c\u6392\u961f",id:"\u4f5c\u4e1a\u6392\u5e8f\u548c\u6392\u961f",children:[],level:2},{value:"\u8d44\u6e90\u516c\u5e73\u6027",id:"\u8d44\u6e90\u516c\u5e73\u6027",children:[],level:2},{value:"\u8d44\u6e90\u9884\u7559",id:"\u8d44\u6e90\u9884\u7559",children:[],level:2},{value:"\u541e\u5410\u91cf",id:"\u541e\u5410\u91cf",children:[],level:2}],d={toc:p};function s(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"YuniKorn\u7684\u4e3b\u8981\u7279\u70b9\u5305\u62ec\uff1a"),(0,i.kt)("h2",{id:"\u5e94\u7528\u611f\u77e5\u8c03\u5ea6"},"\u5e94\u7528\u611f\u77e5\u8c03\u5ea6"),(0,i.kt)("p",null,"YuniKorn\u7684\u5173\u952e\u7279\u6027\u4e4b\u4e00\u5c31\u662f\u652f\u6301\u5e94\u7528\u611f\u77e5\u3002\u5728\u9ed8\u8ba4\u7684K8s\u8c03\u5ea6\u7a0b\u5e8f\u4e2d\uff0c\u5b83\u53ea\u80fd\u6839\u636ePod\u8fdb\u884c\u8c03\u5ea6\uff0c\u800c\u4e0d\u80fd\u57fa\u4e8e\u7528\u6237\u3001\u4f5c\u4e1a\u6216\u8005\u961f\u5217\u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u8c03\u5ea6\u3002\n\u4e0e\u4e4b\u4e0d\u540c\u7684\u662f\uff0cYuniKorn\u53ef\u4ee5\u8bc6\u522b\u7528\u6237\u3001\u4f5c\u4e1a\u6216\u8005\u961f\u5217\uff0c\u5e76\u5728\u505a\u51fa\u8c03\u5ea6\u51b3\u7b56\u65f6\uff0c\u8003\u8651\u66f4\u591a\u4e0e\u5b83\u4eec\u76f8\u5173\u7684\u56e0\u7d20\uff0c\u5982\u8d44\u6e90\u3001\u6392\u5e8f\u7b49\u3002\n\u8fd9\u4f7f\u6211\u4eec\u80fd\u591f\u5bf9\u8d44\u6e90\u914d\u989d\u3001\u8d44\u6e90\u516c\u5e73\u6027\u548c\u4f18\u5148\u7ea7\u8fdb\u884c\u7ec6\u7c92\u5ea6\u63a7\u5236\uff0c\u8fd9\u662f\u591a\u79df\u6237\u8ba1\u7b97\u7cfb\u7edf\u6700\u91cd\u8981\u7684\u9700\u6c42\u3002"),(0,i.kt)("h2",{id:"\u5c42\u6b21\u8d44\u6e90\u961f\u5217"},"\u5c42\u6b21\u8d44\u6e90\u961f\u5217"),(0,i.kt)("p",null,"\u5c42\u6b21\u961f\u5217\u63d0\u4f9b\u4e86\u4e00\u79cd\u6709\u6548\u7684\u673a\u5236\u6765\u7ba1\u7406\u96c6\u7fa4\u8d44\u6e90\u3002\n\u961f\u5217\u7684\u5c42\u6b21\u7ed3\u6784\u53ef\u4ee5\u5728\u903b\u8f91\u4e0a\u6620\u5c04\u5230\u7ec4\u7ec7\u7ed3\u6784\u3002\u8fd9\u4e3a\u4e0d\u540c\u79df\u6237\u63d0\u4f9b\u4e86\u5bf9\u8d44\u6e90\u7684\u7ec6\u7c92\u5ea6\u63a7\u5236\u3002\nYuniKorn UI \u63d0\u4f9b\u4e86\u4e00\u4e2a\u96c6\u4e2d\u7684\u89c6\u56fe\u6765\u76d1\u89c6\u8d44\u6e90\u961f\u5217\u7684\u4f7f\u7528\u60c5\u51b5\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u60a8\u4e86\u89e3\u4e0d\u540c\u79df\u6237\u662f\u5982\u4f55\u4f7f\u7528\u8d44\u6e90\u7684\u3002\n\u6b64\u5916\uff0c\u7528\u6237\u53ef\u4ee5\u5229\u7528\u8bbe\u7f6e\u6700\u5c0f/\u6700\u5927\u961f\u5217\u5bb9\u91cf\u6765\u4e3a\u6bcf\u4e2a\u79df\u6237\u8bbe\u5b9a\u5176\u5f39\u6027\u8d44\u6e90\u914d\u989d\u3002"),(0,i.kt)("h2",{id:"\u4f5c\u4e1a\u6392\u5e8f\u548c\u6392\u961f"},"\u4f5c\u4e1a\u6392\u5e8f\u548c\u6392\u961f"),(0,i.kt)("p",null,"YuniKorn\u5c06\u6bcf\u4e2a\u8d44\u6e90\u961f\u5217\u4e2d\u7684\u961f\u5217\u8fdb\u884c\u6392\u961f\uff0c\u6392\u5e8f\u7b56\u7565\u51b3\u5b9a\u54ea\u4e2a\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u9996\u5148\u83b7\u5f97\u8d44\u6e90\u3002\n\u8fd9\u4e2a\u7b56\u7565\u53ef\u4ee5\u662f\u591a\u79cd\u591a\u6837\u7684\uff0c\u4f8b\u5982\u7b80\u5355\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"FIFO"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Fair"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"StateAware")," \u6216\u57fa\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Priority")," \u7684\u7b56\u7565\u3002\n\u961f\u5217\u53ef\u4ee5\u7ef4\u6301\u5e94\u7528\u7684\u987a\u5e8f\uff0c\u8c03\u5ea6\u5668\u6839\u636e\u4e0d\u540c\u7684\u7b56\u7565\u4e3a\u4f5c\u4e1a\u5206\u914d\u76f8\u5e94\u7684\u8d44\u6e90\u3002\u8fd9\u79cd\u884c\u4e3a\u66f4\u5bb9\u6613\u88ab\u7406\u89e3\u548c\u63a7\u5236\u3002"),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u5f53\u914d\u7f6e\u961f\u5217\u6700\u5927\u5bb9\u91cf\u65f6\uff0c\u4f5c\u4e1a\u548c\u4efb\u52a1\u53ef\u4ee5\u5728\u8d44\u6e90\u961f\u5217\u4e2d\u6b63\u786e\u6392\u961f\u3002\n\u5982\u679c\u5269\u4f59\u7684\u5bb9\u91cf\u4e0d\u591f\uff0c\u5b83\u4eec\u53ef\u4ee5\u6392\u961f\u7b49\u5f85\uff0c\u76f4\u5230\u91ca\u653e\u4e00\u4e9b\u8d44\u6e90\u3002\u8fd9\u5c31\u7b80\u5316\u4e86\u5ba2\u6237\u7aef\u64cd\u4f5c\u3002\n\u800c\u5728\u9ed8\u8ba4\u8c03\u5ea6\u7a0b\u5e8f\u4e2d\uff0c\u8d44\u6e90\u7531\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d\u9650\u5236\uff1a\u5982\u679c\u547d\u540d\u7a7a\u95f4\u6ca1\u6709\u8db3\u591f\u7684\u914d\u989d\uff0cPod\u5c31\u4e0d\u80fd\u88ab\u521b\u5efa\u3002\u8fd9\u662f\u7531\u914d\u989d\u8bb8\u53ef\u63a7\u5236\u5668\u5f3a\u5236\u6267\u884c\u7684\u3002\n\u5ba2\u6237\u7aef\u9700\u8981\u66f4\u590d\u6742\u7684\u903b\u8f91\u6765\u5904\u7406\u6b64\u7c7b\u573a\u666f\uff0c\u4f8b\u5982\u6309\u6761\u4ef6\u91cd\u8bd5\u3002"),(0,i.kt)("h2",{id:"\u8d44\u6e90\u516c\u5e73\u6027"},"\u8d44\u6e90\u516c\u5e73\u6027"),(0,i.kt)("p",null,"\u5728\u591a\u79df\u6237\u73af\u5883\u4e2d\uff0c\u8bb8\u591a\u7528\u6237\u5171\u4eab\u96c6\u7fa4\u8d44\u6e90\u3002\n\u4e3a\u4e86\u907f\u514d\u79df\u6237\u4e89\u593a\u8d44\u6e90\u6216\u8005\u53ef\u80fd\u7684\u8d44\u6e90\u4e0d\u8db3\uff0c\u9700\u8981\u505a\u5230\u66f4\u7ec6\u7c92\u5ea6\u7684\u516c\u5e73\u6027\u9700\u6c42\uff0c\u4ee5\u6b64\u6765\u5b9e\u73b0\u8de8\u7528\u6237\u4ee5\u53ca\u8de8\u56e2\u961f/\u7ec4\u7ec7\u7684\u516c\u5e73\u6027\u3002\n\u8003\u8651\u5230\u6743\u91cd\u6216\u4f18\u5148\u7ea7\uff0c\u4e00\u4e9b\u66f4\u91cd\u8981\u7684\u5e94\u7528\u53ef\u4ee5\u83b7\u5f97\u8d85\u8fc7\u5176\u914d\u989d\u7684\u66f4\u591a\u7684\u9700\u6c42\u8d44\u6e90\u3002\n\u8fd9\u5f80\u5f80\u4e0e\u8d44\u6e90\u9884\u7b97\u6709\u5173\uff0c\u66f4\u7ec6\u7c92\u5ea6\u7684\u516c\u5e73\u6a21\u5f0f\u53ef\u4ee5\u8fdb\u4e00\u6b65\u63d0\u9ad8\u8d44\u6e90\u63a7\u5236\u3002"),(0,i.kt)("h2",{id:"\u8d44\u6e90\u9884\u7559"},"\u8d44\u6e90\u9884\u7559"),(0,i.kt)("p",null,"YuniKorn\u4f1a\u81ea\u52a8\u4e3a\u672a\u5b8c\u6210\u7684\u8bf7\u6c42\u8fdb\u884c\u8d44\u6e90\u9884\u7559\u3002\n\u5982\u679cPod\u65e0\u6cd5\u5206\u914d\uff0cYuniKorn\u5c06\u5c1d\u8bd5\u628a\u5b83\u9884\u7559\u5728\u4e00\u4e2a\u6ee1\u8db3\u6761\u4ef6\u7684\u8282\u70b9\u4e0a\uff0c\u5e76\u5728\u8fd9\u4e2a\u8282\u70b9\u4e0a\u6682\u65f6\u5206\u914d\u8be5 pod\uff08\u5728\u5c1d\u8bd5\u5176\u4ed6\u8282\u70b9\u4e4b\u524d\uff09\u3002\n\u8fd9\u79cd\u673a\u5236\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a Pod \u9700\u8981\u7684\u8d44\u6e90\u88ab\u540e\u6765\u63d0\u4ea4\u7684\u66f4\u5c0f\u7684\u3001\u66f4\u4e0d\u6311\u5254\u7684 Pod \u6240\u6324\u5360\u3002\n\u6b64\u529f\u80fd\u5728\u6279\u5904\u7406\u5de5\u4f5c\u8d1f\u8f7d\u573a\u666f\u4e2d\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u5f53\u5bf9\u96c6\u7fa4\u63d0\u4ea4\u5927\u91cf\u5f02\u6784 Pod \u65f6\uff0c\u5f88\u6709\u53ef\u80fd\u4e00\u4e9b Pod \u4f1a\u5904\u4e8e\u201c\u9965\u997f\u201d\u72b6\u6001\uff0c\u5373\u4f7f\u5b83\u4eec\u63d0\u4ea4\u5f97\u66f4\u65e9\u3002"),(0,i.kt)("h2",{id:"\u541e\u5410\u91cf"},"\u541e\u5410\u91cf"),(0,i.kt)("p",null,"\u541e\u5410\u91cf\u662f\u8861\u91cf\u8c03\u5ea6\u5668\u6027\u80fd\u7684\u5173\u952e\u6807\u51c6\u3002\u8fd9\u5bf9\u4e8e\u4e00\u4e2a\u5927\u89c4\u6a21\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\u6765\u8bf4\u662f\u81f3\u5173\u91cd\u8981\u7684\u3002\n\u5982\u679c\u541e\u5410\u91cf\u4e0d\u597d\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u6d6a\u8d39\u65f6\u95f4\u7b49\u5f85\u8c03\u5ea6\uff0c\u5e76\u8fdb\u4e00\u6b65\u5f71\u54cd\u670d\u52a1\u7684 SLA\uff08\u670d\u52a1\u7ea7\u522b\u534f\u8bae\uff09\u3002\n\u96c6\u7fa4\u8d8a\u5927\uff0c\u5bf9\u541e\u5410\u91cf\u7684\u8981\u6c42\u4e5f\u8d8a\u9ad8\u3002",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/performance/evaluate_perf_function_with_kubemark"},"\u57fa\u4e8eKube\u6807\u8bb0\u7684\u8fd0\u884c\u8bc4\u4f30")," \u7ae0\u8282\u663e\u793a\u4e86\u4e00\u4e9b\u6027\u80fd\u6570\u636e\u3002"))}s.isMDXComponent=!0}}]);
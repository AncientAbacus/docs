"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[50585],{35123:(e,t,s)=>{s.d(t,{Ay:()=>r,RM:()=>o});var c=s(74848),n=s(28453);const o=[];function i(e){const t={admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,c.jsxs)(t.admonition,{type:"caution",children:[(0,c.jsxs)(t.p,{children:["The build token ID, generated at the start of the build, expires after ",(0,c.jsx)(t.strong,{children:"3 hours"}),". If the ",(0,c.jsx)(t.strong,{children:"Cache Pull"})," or ",(0,c.jsx)(t.strong,{children:"Cache Push"})," step starts beyond this time, caching will fail."]}),(0,c.jsxs)(t.p,{children:["This may lead to a ",(0,c.jsx)(t.code,{children:"404 Error"})," in the ",(0,c.jsx)(t.strong,{children:"Cache Pull"})," step during the next build if the ",(0,c.jsx)(t.strong,{children:"Cache Push"})," step is not completed successfully."]})]})}function r(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},89717:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"workflows/common-workflow-steps/build-cache/cache-pull","title":"Cache Pull","description":"Enhance your development process with Cache Pull to quickly retrieve and reuse stored data, boosting efficiency and performance.","source":"@site/docs/workflows/common-workflow-steps/build-cache/cache-pull.md","sourceDirName":"workflows/common-workflow-steps/build-cache","slug":"/workflows/common-workflow-steps/build-cache/cache-pull","permalink":"/workflows/common-workflow-steps/build-cache/cache-pull","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/common-workflow-steps/build-cache/cache-pull.md","tags":[{"inline":false,"label":"cache pull","permalink":"/tags/cache-pull","description":"Description for cache pull"},{"inline":false,"label":"efficiency","permalink":"/tags/efficiency","description":"Description for efficiency"},{"inline":false,"label":"dependencies","permalink":"/tags/dependencies","description":"Description for dependencies"},{"inline":false,"label":"cache structure","permalink":"/tags/cache-structure","description":"Description for cache structure"}],"version":"current","frontMatter":{"title":"Cache Pull","description":"Enhance your development process with Cache Pull to quickly retrieve and reuse stored data, boosting efficiency and performance.","tags":["cache pull","efficiency","dependencies","cache structure"]},"sidebar":"mySidebar","previous":{"title":"Build Cache","permalink":"/workflows/common-workflow-steps/build-cache/"},"next":{"title":"Cache Push","permalink":"/workflows/common-workflow-steps/build-cache/cache-push"}}');var n=s(74848),o=s(28453),i=s(69678),r=s(35123);const l={title:"Cache Pull",description:"Enhance your development process with Cache Pull to quickly retrieve and reuse stored data, boosting efficiency and performance.",tags:["cache pull","efficiency","dependencies","cache structure"]},a="Cache Pull",h={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},...r.RM];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{ExternalUrlRef:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"cache-pull",children:"Cache Pull"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/build-cache/cache-push",children:(0,n.jsx)(t.strong,{children:"Cache Push"})})," uploads the cache archive file to a remote location, as we explained in detail in the ",(0,n.jsx)(t.strong,{children:"Cache Push"})," step. On the other hand, ",(0,n.jsx)(t.strong,{children:"Cache Pull"})," downloads and extracts that archive file in the build pipeline, restoring all files and folders to their original locations."]}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/build-cache/cache-push",children:(0,n.jsx)(t.strong,{children:"Cache Push"})})," and ",(0,n.jsx)(t.strong,{children:"Cache Pull"})," components should work in coordination on the same cache file. Therefore, to download the pushed cache, the ",(0,n.jsx)(t.strong,{children:"Cache Pull"})," must have the same cache label as the ",(0,n.jsx)(t.strong,{children:"Cache Push"}),"."]})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["If you need to use the cached folder in a different branch or a separate project, you have the capability to modify the values of ",(0,n.jsx)(t.code,{children:"$AC_GIT_BRANCH"})," or ",(0,n.jsx)(t.code,{children:"$AC_BUILD_PROFILE_ID"}),". For further information, please check out the following documentation:"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/build-cache/how-to-share-file-between-pipelines",children:"How to Share Files Between Pipelines"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/build-cache/how-to-share-file-between-build-profiles",children:"How to Share Files Between Build Profiles"})}),"\n"]}),(0,n.jsxs)(t.p,{children:["These variables can be adjusted within the ",(0,n.jsx)(t.a,{href:"#input-variables",children:"cache label"})," field, as indicated by the red highlight in the accompanying image. Simply replace them with the branch or project ID that corresponds to your intended usage."]}),(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/cache-01.png"})]}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:["There are no prerequisites required before using the ",(0,n.jsx)(t.strong,{children:"Cache Pull"})," step."]}),"\n",(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsx)(t.p,{children:"This component does not require any prerequisite steps for operation. The only thing necessary for the component to work as expected is to utilize the cached files before the step in which they will be used. Additionally, an important prerequisite for this step to function properly is that the files to be used must have been cached in previous builds."}),(0,n.jsxs)(t.p,{children:["For example, in the screenshot, to use cached files for Cocoapods, the ",(0,n.jsx)(t.strong,{children:"Cache Pull"})," step should be used before the ",(0,n.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps/cocoapods-install",children:(0,n.jsx)(t.strong,{children:"Cocoapods Install"})})," step."]}),(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/BE2911-pullOrder.png"})]}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsxs)(t.p,{children:["If there are no previously cached files and you attempt to use this step, the ",(0,n.jsx)(t.strong,{children:"Cache Pull"})," step will result in a ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"not found error"})})," because it cannot locate the specified files at the remote location."]})}),"\n",(0,n.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,n.jsx)(t.p,{children:"This step contains some input variable(s). It needs these variable(s) to work. The table below gives explanation for this variable(s)."}),"\n",(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/BE2911-pullInput.png"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Status"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$AC_CACHE_LABEL"})}),(0,n.jsxs)(t.td,{children:["User defined cache label to identify one cache from others. Both ",(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/build-cache/cache-push",children:(0,n.jsx)(t.strong,{children:"Cache Push"})})," and ",(0,n.jsx)(t.strong,{children:"Cache Pull"})," steps should have the same value to match."]}),(0,n.jsx)(t.td,{children:"Required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"})}),(0,n.jsxs)(t.td,{children:["Specifies the cloned repository path. This path will be generated after running the ",(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/git-clone",children:(0,n.jsx)(t.strong,{children:"Git Clone"})})," step."]}),(0,n.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,n.jsx)(r.Ay,{}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-cache-pull-component",children:(0,n.jsx)(s,{url:"https://github.com/appcircleio/appcircle-cache-pull-component",title:"GitHub - appcircleio/appcircle-cache-pull-component",description:"Contribute to appcircleio/appcircle-cache-pull-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/7202c0cb2736087150c8220a399f308374c94f6fd12631ad784165a27a47fb36/appcircleio/appcircle-cache-pull-component"})})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},69678:(e,t,s)=>{s.d(t,{A:()=>n});s(96540);var c=s(74848);function n(e){let{url:t,alt:s}=e;return(0,c.jsx)("img",{className:"screenshot",src:t,alt:s||"Screenshot"})}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var c=s(96540);const n={},o=c.createContext(n);function i(e){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),c.createElement(o.Provider,{value:t},e.children)}}}]);
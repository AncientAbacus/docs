"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[26366],{64472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"workflows/ios-specific-workflow-steps/carthage","title":"Carthage","description":"Appcircle supports Carthage for dependency management in iOS projects.","source":"@site/docs/workflows/ios-specific-workflow-steps/carthage.md","sourceDirName":"workflows/ios-specific-workflow-steps","slug":"/workflows/ios-specific-workflow-steps/carthage","permalink":"/workflows/ios-specific-workflow-steps/carthage","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/ios-specific-workflow-steps/carthage.md","tags":[{"inline":false,"label":"carthage","permalink":"/tags/carthage","description":"Description for carthage"},{"inline":false,"label":"ios","permalink":"/tags/ios","description":"Description for ios"},{"inline":false,"label":"management","permalink":"/tags/management","description":"Description for management"},{"inline":false,"label":"workflow","permalink":"/tags/workflow","description":"Description for workflow"},{"inline":false,"label":"step","permalink":"/tags/step","description":"Description for step"}],"version":"current","frontMatter":{"title":"Carthage","description":"Appcircle supports Carthage for dependency management in iOS projects.","tags":["carthage","ios","management","workflow","step"]},"sidebar":"mySidebar","previous":{"title":"BrowserStack App Automate","permalink":"/workflows/ios-specific-workflow-steps/browserstack-app-automation"},"next":{"title":"CocoaPods Deintegrate","permalink":"/workflows/ios-specific-workflow-steps/cocoapods-deintegrate"}}');var i=r(74848),o=r(28453),n=r(69678);const a={title:"Carthage",description:"Appcircle supports Carthage for dependency management in iOS projects.",tags:["carthage","ios","management","workflow","step"]},c="Carthage",l={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{ExternalUrlRef:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"carthage",children:"Carthage"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/Carthage/Carthage",children:"Carthage"})," is a dependency manager for Swift and Objective-C applications. ",(0,i.jsx)(t.a,{href:"https://github.com/Carthage/Carthage",children:"Carthage"})," handles the installation of external libraries your application depends on during a build."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/Carthage/Carthage",children:"Carthage"})," is widely used among iOS developers for dependency management, and it's very easy to include it in your iOS projects with Appcircle."]}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["Before running the ",(0,i.jsx)(t.strong,{children:"Carthage"})," step, you must complete certain prerequisites, as detailed in the table below:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/common-workflow-steps/git-clone",children:(0,i.jsx)(t.strong,{children:"Git Clone"})})}),(0,i.jsx)(t.td,{children:"This step clones your git repo on the runner where the build process will take place so that the necessary workflow operations can be performed."})]})})]}),"\n",(0,i.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE2828-cartOrder.png"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["Appcircle will look for a ",(0,i.jsx)(t.a,{href:"https://github.com/Carthage/Carthage/blob/master/Documentation/Artifacts.md",children:(0,i.jsx)(t.code,{children:"Cartfile"})})," file in your repository and use it to install the dependencies. For this reason, ",(0,i.jsx)(t.strong,{children:"it should be used after the Git Clone step"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,i.jsx)(t.p,{children:"The output(s) resulting from the operation of this component are as follows:"}),"\n",(0,i.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE2828-cartInput.png"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Status"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_CARTHAGE_COMMAND"})}),(0,i.jsxs)(t.td,{children:["Specifies the Carthage command to run. Defaults to ",(0,i.jsx)(t.code,{children:"bootstrap"}),". ",(0,i.jsx)(t.strong,{children:"Possible values:"})," ",(0,i.jsx)(t.code,{children:"bootstrap"}),", ",(0,i.jsx)(t.code,{children:"update"}),"."]}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"})}),(0,i.jsxs)(t.td,{children:["Specifies the cloned repository directory. This path will be generated after ",(0,i.jsx)(t.a,{href:"/workflows/common-workflow-steps/git-clone",children:(0,i.jsx)(t.strong,{children:"Git Clone"})}),"."]}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_CARTFILE_PATH"})}),(0,i.jsxs)(t.td,{children:["Specifies the path where the Cartfile resides. Defaults to the repository directory. ",(0,i.jsx)(t.strong,{children:"DO NOT"})," include Cartfile, this is only the path. ",(0,i.jsx)(t.strong,{children:"This value will be appended"})," to ",(0,i.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"}),". ",(0,i.jsx)(t.strong,{children:"Example:"})," ",(0,i.jsx)(t.code,{children:"./"})," or ",(0,i.jsx)(t.code,{children:"./subpath-to-cartfile/"}),"."]}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_CARTHAGE_FLAGS"})}),(0,i.jsxs)(t.td,{children:["Specifies additional flags after the Carthage command. The default value is empty. ",(0,i.jsx)(t.strong,{children:"For Xcode 12 and above, make sure to include"})," ",(0,i.jsx)(t.code,{children:"--use-xcframeworks"})," ",(0,i.jsx)(t.strong,{children:"here"}),". To shorten the build time, make sure to specify the platform: ",(0,i.jsx)(t.code,{children:"--platform iOS"}),". Example usage: ",(0,i.jsx)(t.code,{children:"--platform iOS --use-xcframeworks"}),"."]}),(0,i.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-carthage-component",children:(0,i.jsx)(r,{url:"https://github.com/appcircleio/appcircle-carthage-component",title:"GitHub - appcircleio/appcircle-carthage-component",description:"Contribute to appcircleio/appcircle-carthage-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/c5e20c2232173f30d0c08b233a4d783ae57e0925535a40e47a7924889dacf956/appcircleio/appcircle-carthage-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},69678:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(74848);function i(e){let{url:t,alt:r}=e;return(0,s.jsx)("img",{className:"screenshot",src:t,alt:r||"Screenshot"})}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>a});var s=r(96540);const i={},o=s.createContext(i);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[96352],{42775:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"workflows/ios-specific-workflow-steps/tuist-install","title":"Tuist Install","description":"Scale your Xcode projects by installing Tuist. Streamline project management and automate configurations for efficient iOS app development.","source":"@site/docs/workflows/ios-specific-workflow-steps/tuist-install.md","sourceDirName":"workflows/ios-specific-workflow-steps","slug":"/workflows/ios-specific-workflow-steps/tuist-install","permalink":"/workflows/ios-specific-workflow-steps/tuist-install","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/ios-specific-workflow-steps/tuist-install.md","tags":[{"inline":false,"label":"tuist","permalink":"/tags/tuist","description":"Description for tuist"},{"inline":false,"label":"xcode automation","permalink":"/tags/xcode-automation","description":"Description for xcode automation"},{"inline":false,"label":"project management","permalink":"/tags/project-management","description":"Description for project management"},{"inline":false,"label":"ios development","permalink":"/tags/ios-development","description":"Description for ios development"},{"inline":false,"label":"code generation","permalink":"/tags/code-generation","description":"Description for code generation"},{"inline":false,"label":"tuist install","permalink":"/tags/tuist-install","description":"Description for tuist install"}],"version":"current","frontMatter":{"title":"Tuist Install","description":"Scale your Xcode projects by installing Tuist. Streamline project management and automate configurations for efficient iOS app development.","tags":["tuist","xcode automation","project management","ios development","code generation","tuist install"]},"sidebar":"mySidebar","previous":{"title":"Tuist Commands","permalink":"/workflows/ios-specific-workflow-steps/tuist-commands"},"next":{"title":"Xcode Select","permalink":"/workflows/ios-specific-workflow-steps/xcode-select"}}');var n=i(74848),o=i(28453),r=i(69678);const l={title:"Tuist Install",description:"Scale your Xcode projects by installing Tuist. Streamline project management and automate configurations for efficient iOS app development.",tags:["tuist","xcode automation","project management","ios development","code generation","tuist install"]},c="Tuist Install",a={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{ExternalUrlRef:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"tuist-install",children:"Tuist Install"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.tuist.io/",children:(0,n.jsx)(t.strong,{children:"Tuist"})})," is a command-line tool that abstracts the intricacies of Xcode projects through project generation. It serves as a foundation to help teams maintain and optimize their large modular projects."]}),"\n",(0,n.jsx)(t.p,{children:"You can seamlessly integrate Tuist Install into your workflow with Appcircle, making setup and utilization within your existing development processes easy."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Tuist CLI tool is a tool that enables different actions to be performed in the project with different commands. The ",(0,n.jsx)(t.strong,{children:"Tuist Install"})," step only installs Tuist and runs the ",(0,n.jsx)(t.code,{children:"tuist generate"})," command to generate the project. On the other hand, if you want to run other commands that Tuist has, please visit the ",(0,n.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps/tuist-commands",children:(0,n.jsx)(t.strong,{children:"Tuist Commands"})})," step document."]})}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:["Before running the ",(0,n.jsx)(t.strong,{children:"Tuist Install"})," step, you must complete certain prerequisites, as detailed in the table below:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/git-clone",children:(0,n.jsx)(t.strong,{children:"Git Clone"})})}),(0,n.jsxs)(t.td,{children:["You need to clone the repository to start the Tuist process. After cloning, the system installs Tuist and creates the ",(0,n.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"})," variable."]})]})})]}),"\n",(0,n.jsxs)(t.admonition,{title:"Tuist Usage",type:"caution",children:[(0,n.jsxs)(t.p,{children:["Appcircle's Tuist Install component generates your project using only the ",(0,n.jsx)(t.code,{children:"tuist generate"})," command. This means that it will automatically generate the ",(0,n.jsx)(t.code,{children:".xcworkspace"})," and ",(0,n.jsx)(t.code,{children:".xcodeproj"})," files in the project after the tuist generate command runs. Note that if you use ",(0,n.jsx)(t.strong,{children:"Tuist Install"})," in the Appcircle pipeline and want to generate an ",(0,n.jsx)(t.strong,{children:"IPA"})," file, you need the other build steps, such as"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps/xcodebuild-for-devices",children:(0,n.jsx)(t.strong,{children:"Xcodebuild for Devices"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps/xcodebuild-for-ios-simulator",children:(0,n.jsx)(t.strong,{children:"Xcodebuild for iOS Simulator"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps/xcodebuild-for-testing",children:(0,n.jsx)(t.strong,{children:"Xcodebuild for Testing"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps/xcodebuild-for-unit-and-ui-test",children:(0,n.jsx)(t.strong,{children:"Xcodebuild for Unit and UI Testing"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps/cocoapods-install",children:(0,n.jsx)(t.strong,{children:"Cocoapods Install"})})}),"\n"]}),(0,n.jsxs)(t.p,{children:["For more iOS specific workflow steps, please visit the ",(0,n.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps",children:(0,n.jsx)(t.strong,{children:"iOS Integration"})})," documentation."]})]}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsxs)(t.p,{children:["In Tuist integrated projects, there will be cases where ",(0,n.jsx)(t.code,{children:".xcworkspace"})," and ",(0,n.jsx)(t.code,{children:".xcodeproj"})," files will be created after the ",(0,n.jsx)(t.code,{children:"tuist generate"})," command. For this reason, the ",(0,n.jsx)(t.strong,{children:"auto fill"})," feature in the ",(0,n.jsx)(t.strong,{children:"build configuration"})," may not work as expected. For more information about build configurations, please visit the ",(0,n.jsx)(t.a,{href:"/build/build-process-management/build-profile-configuration",children:(0,n.jsx)(t.strong,{children:"Build Configurations"})})," documentation."]})}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/tuistInstallStepOrder.png"}),"\n",(0,n.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,n.jsx)(t.p,{children:"This step contains some input variable(s). It needs these variable(s) to work. The table below gives explanation for this variable(s)."}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/tuistIntallStepInput.png"}),"\n",(0,n.jsx)(t.admonition,{title:"Tuist Version",type:"tip",children:(0,n.jsxs)(t.p,{children:["In some projects, the version of Tuist that needs to be installed and used can be integrated ",(0,n.jsx)(t.strong,{children:"into the project"})," with the ",(0,n.jsx)(t.code,{children:".tuist-version"})," file. If you have a project with ",(0,n.jsx)(t.strong,{children:"Tuist"})," version integrated in this way, Appcircle will ",(0,n.jsx)(t.strong,{children:"not detect"})," the Tuist version in the project, so if there is a ",(0,n.jsx)(t.strong,{children:"specific"})," Tuist version you want to install, you ",(0,n.jsx)(t.strong,{children:"must"})," enter this version in the ",(0,n.jsx)(t.strong,{children:"Tuist Version"})," input field in the step."]})}),"\n",(0,n.jsxs)(t.admonition,{title:"Tuist Install",type:"caution",children:[(0,n.jsxs)(t.p,{children:["Appcircle uses homebrew as ",(0,n.jsx)(t.a,{href:"https://docs.tuist.io/en/guides/quick-start/install-tuist",children:"installation method"})," in ",(0,n.jsx)(t.strong,{children:"Tuist Install"})," step, therefore only compatible versions are supported. For more information, please check this ",(0,n.jsx)(t.a,{href:"https://github.com/tuist/homebrew-tuist/tree/main/Formula",children:"list"})," for compatible versions of Tuist."]}),(0,n.jsxs)(t.p,{children:["For this reason, iOS apps using Tuist versions ",(0,n.jsx)(t.code,{children:"1.x"})," or ",(0,n.jsx)(t.code,{children:"2.x"})," are not supported with Appcircle's Tuist Components."]})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Status"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$AC_TUIST_PATH"})}),(0,n.jsxs)(t.td,{children:["Specifies the path to the directory containing the project definition. This path is automatically generated after the ",(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/git-clone",children:(0,n.jsx)(t.strong,{children:"Git Clone"})})," step."]}),(0,n.jsx)(t.td,{children:"Required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$AC_TUIST_VERSION"})}),(0,n.jsx)(t.td,{children:"Specifies the Tuist version. If not specified, the latest version of Tuist will be installed."}),(0,n.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-tuist-component",children:(0,n.jsx)(i,{url:"https://github.com/appcircleio/appcircle-tuist-component",title:"GitHub - appcircleio/appcircle-tuist-component: Appcircle.io Tuist Component",description:"Appcircle.io Tuist Component . Contribute to appcircleio/appcircle-tuist-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/879f1941a4848ad703e92691026b72c0cc4f39fac22f771e49fd6c35d26abd26/appcircleio/appcircle-tuist-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},69678:(e,t,i)=>{i.d(t,{A:()=>n});i(96540);var s=i(74848);function n(e){let{url:t,alt:i}=e;return(0,s.jsx)("img",{className:"screenshot",src:t,alt:i||"Screenshot"})}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var s=i(96540);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
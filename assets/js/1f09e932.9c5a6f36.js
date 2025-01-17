"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[42654],{77667:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"publish-integrations/ios-publish-integrations/app-information-app-store","title":"App Information from App Store","description":"Fetch and display your app\'s current listing information directly from the App Store to ensure all details are correct and up to date.","source":"@site/docs/publish-integrations/ios-publish-integrations/app-information-app-store.md","sourceDirName":"publish-integrations/ios-publish-integrations","slug":"/publish-integrations/ios-publish-integrations/app-information-app-store","permalink":"/publish-integrations/ios-publish-integrations/app-information-app-store","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/publish-integrations/ios-publish-integrations/app-information-app-store.md","tags":[{"inline":false,"label":"app information","permalink":"/tags/app-information","description":"Description for app information"},{"inline":false,"label":"app store","permalink":"/tags/app-store","description":"Description for app store"},{"inline":false,"label":"app store connect","permalink":"/tags/app-store-connect","description":"Description for app store connect"},{"inline":false,"label":"testflight","permalink":"/tags/testflight","description":"Description for testflight"},{"inline":false,"label":"app store version","permalink":"/tags/app-store-version","description":"Description for app store version"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"App Information from App Store","description":"Fetch and display your app\'s current listing information directly from the App Store to ensure all details are correct and up to date.","tags":["app information","app store","app store connect","testflight","app store version"],"sidebar_position":1},"sidebar":"mySidebar","previous":{"title":"iOS Integrations Overview","permalink":"/publish-integrations/ios-publish-integrations/"},"next":{"title":"Send to TestFlight","permalink":"/publish-integrations/ios-publish-integrations/sent-to-testflight"}}');var s=i(74848),r=i(28453),o=i(69678);const a={title:"App Information from App Store",description:"Fetch and display your app's current listing information directly from the App Store to ensure all details are correct and up to date.",tags:["app information","app store","app store connect","testflight","app store version"],sidebar_position:1},p="App Information from App Store",l={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"app-information-from-app-store",children:"App Information from App Store"})}),"\n",(0,s.jsxs)(t.p,{children:["This step enables you to view app version information from both ",(0,s.jsx)(t.a,{href:"https://developer.apple.com/testflight/",children:(0,s.jsx)(t.strong,{children:"TestFlight"})})," and the ",(0,s.jsx)(t.a,{href:"https://developer.apple.com/documentation/appstoreconnectapi/app_store",children:(0,s.jsx)(t.strong,{children:"App Store"})})," on a single screen, including the version you intend to submit. Upon running this step, it displays the latest version information from TestFlight and the App Store as follows:"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2917-infoDetail.png"}),"\n",(0,s.jsx)(t.p,{children:"Below are brief descriptions of the information provided on the App Information screen."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Information"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Additional Info"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Bundle ID"})}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.code,{children:"bundleIds"})," resource represents the app's unique identifier that you can register, modify, and delete."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://developer.apple.com/documentation/appstoreconnectapi/bundle_ids",children:"Apple's documentation"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"App Icon"})}),(0,s.jsx)(t.td,{children:"Specifies the icon that will appear for the app on the selected platform."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://developer.apple.com/design/human-interface-guidelines/app-icons",children:"Apple App Icon documentation"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"App Name"})}),(0,s.jsx)(t.td,{children:"The display name of the application on the selected platform."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Version"})}),(0,s.jsxs)(t.td,{children:["The current available app versions. For example, ",(0,s.jsx)(t.code,{children:"1.0.5"}),"."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Build Number"})}),(0,s.jsxs)(t.td,{children:["Version code information of your application. For example, ",(0,s.jsx)(t.code,{children:"1.0.5(1)"}),"."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Uploaded Date"})}),(0,s.jsxs)(t.td,{children:["Date the application was first uploaded. The ",(0,s.jsx)(t.strong,{children:"Release Candidate"})," version is based on the date it was uploaded to the ",(0,s.jsx)(t.strong,{children:"Publish module"}),"."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Expire Date"})}),(0,s.jsxs)(t.td,{children:["The expiration date of the application version in TestFlight and the App Store. The ",(0,s.jsx)(t.strong,{children:"Release Candidate"})," version does not have an expiration date."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Release Type"})}),(0,s.jsxs)(t.td,{children:["Indicates the release type of your application. For example, if you have an application released to the market, you will see the type as ",(0,s.jsx)(t.strong,{children:"After Approval"}),"."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Processing State"})}),(0,s.jsxs)(t.td,{children:["This indicates the status of your application; it will appear as ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Valid"})})," when there are no issues. For instance, if your application has expired in the TestFlight environment, the state will be ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Expire"})}),". If the application is rejected, the state will be ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Reject"})}),"."]}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["Make sure the ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/account/adding-an-app-store-connect-api-key#linking-appcircle-with-app-store-connect",children:(0,s.jsx)(t.strong,{children:"App Store Connect API Key"})})," is added to Appcircle and selected in ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/publish-module/#publish-settings",children:(0,s.jsx)(t.strong,{children:"Publish Settings"})}),"."]})}),"\n",(0,s.jsxs)(t.admonition,{title:"App Information from App Store",type:"tip",children:[(0,s.jsx)(t.p,{children:"Since this step compares three different versions, it can be used in various scenarios."}),(0,s.jsxs)(t.p,{children:["For example, your company's release management may involve a specific approval mechanism. When a step is completed, you need to get approval and continue the process according to the next approval. At this point, you can present version information to the people responsible for Publish with this step, and then you can continue the process by getting approval from the relevant people with the ",(0,s.jsx)(t.a,{href:"/publish-integrations/common-publish-integrations/get-approval-via-email",children:(0,s.jsx)(t.strong,{children:"Get Approval via Email step"})}),". In this way, your entire Publish team will be able to see which version is the latest version in your production and beta test environments and compare it with your ",(0,s.jsx)(t.a,{href:"/publish-module/publish-information/marking-release-candidates",children:(0,s.jsx)(t.strong,{children:"Release Candidate"})})," version."]}),(0,s.jsx)(t.p,{children:"Similarly, the authorized person in your approval mechanism will provide approval to start your release process based on this comparison."})]}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["This step does not depend on any other steps to function. However, it is advisable to use it as the initial step in your ",(0,s.jsx)(t.strong,{children:"Publish Flow"}),"."]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2917-appInfo.png"}),"\n",(0,s.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(t.p,{children:"This step does not need any input variable."}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:["This step requires only the ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/publish-integrations/ios-publish-integrations/send-to-app-store#adding-an-app-store-connect-api-key-recommended-method",children:(0,s.jsx)(t.strong,{children:"App Store Connect API Key"})})," credentials. Ensure this API key is configured in Appcircle and selected for the appropriate flow."]})}),"\n",(0,s.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-publish-appstore-app-information",children:(0,s.jsx)(i,{url:"https://github.com/appcircleio/appcircle-publish-appstore-app-information",title:"GitHub - appcircleio/appcircle-publish-appstore-app-information: gets package details from appstore",description:"gets package details from appstore. Contribute to appcircleio/appcircle-publish-appstore-app-information development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/2ab42510556176dcb5d753d9484c6625fd75b401cd93d5fc29dc0c9f6ec08038/appcircleio/appcircle-publish-appstore-app-information"})})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},69678:(e,t,i)=>{i.d(t,{A:()=>s});i(96540);var n=i(74848);function s(e){let{url:t,alt:i}=e;return(0,n.jsx)("img",{className:"screenshot",src:t,alt:i||"Screenshot"})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
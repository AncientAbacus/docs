"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[7981],{94961:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"publish-integrations/common-publish-integrations/send-to-microsoft-intune","title":"Publish to Microsoft Intune","description":"Learn how to submit your app to Microsoft Intune using Appcircle\u2019s streamlined integration process.","source":"@site/docs/publish-integrations/common-publish-integrations/send-to-microsoft-intune.md","sourceDirName":"publish-integrations/common-publish-integrations","slug":"/publish-integrations/common-publish-integrations/send-to-microsoft-intune","permalink":"/publish-integrations/common-publish-integrations/send-to-microsoft-intune","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/publish-integrations/common-publish-integrations/send-to-microsoft-intune.md","tags":[{"inline":false,"label":"android","permalink":"/tags/android","description":"Description for android"},{"inline":false,"label":"ios","permalink":"/tags/ios","description":"Description for ios"},{"inline":false,"label":"android integrations","permalink":"/tags/android-integrations","description":"Description for android integrations"},{"inline":false,"label":"android publish integrations","permalink":"/tags/android-publish-integrations","description":"Description for android publish integrations"},{"inline":false,"label":"microsoft intune","permalink":"/tags/microsoft-intune","description":"Description for microsoft intune"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Publish to Microsoft Intune","description":"Learn how to submit your app to Microsoft Intune using Appcircle\u2019s streamlined integration process.","tags":["android","ios","android integrations","android publish integrations","microsoft intune"],"sidebar_position":1},"sidebar":"mySidebar","previous":{"title":"Get Approval via Email","permalink":"/publish-integrations/common-publish-integrations/get-approval-via-email"},"next":{"title":"Update Metadata on Microsoft Intune","permalink":"/publish-integrations/common-publish-integrations/update-metadata-on-microsoft-intune"}}');var s=t(74848),o=t(28453),r=t(69678);const a={title:"Publish to Microsoft Intune",description:"Learn how to submit your app to Microsoft Intune using Appcircle\u2019s streamlined integration process.",tags:["android","ios","android integrations","android publish integrations","microsoft intune"],sidebar_position:1},c="Publish to Microsoft Intune",d={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Providing Microsoft Intune API Credentials for Accessing Intune",id:"providing-microsoft-intune-api-credentials-for-accessing-intune",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{ContentRef:t,ExternalUrlRef:n}=i;return t||u("ContentRef",!0),n||u("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"publish-to-microsoft-intune",children:"Publish to Microsoft Intune"})}),"\n",(0,s.jsxs)(i.p,{children:["This step enables you to submit your line of business apps to the ",(0,s.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/mem/intune/fundamentals/what-is-intune",children:"Microsoft Intune"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(i.p,{children:"Below are the prerequisite steps necessary for this operation, accompanied by their descriptions."}),"\n",(0,s.jsx)(i.h3,{id:"providing-microsoft-intune-api-credentials-for-accessing-intune",children:"Providing Microsoft Intune API Credentials for Accessing Intune"}),"\n",(0,s.jsx)(i.p,{children:"To send an app from Appcircle to Microsoft Intune, you need to register an application with the Microsoft Identity Platform and provide this application's credentials."}),"\n",(0,s.jsx)(t,{url:"/account/my-organization/security/credentials/adding-microsoft-intune-api-key",children:(0,s.jsx)(i.p,{children:"Adding Microsoft Intune API Credentials"})}),"\n",(0,s.jsxs)(i.p,{children:["After completing the integration with Microsoft Intune, go to ",(0,s.jsx)(i.a,{href:"/publish-module/publish-settings",children:"Publishing Settings"}),". In the ",(0,s.jsx)(i.a,{href:"/publish-module/publish-settings#store-credentials",children:"Store Credential"})," section, select the Microsoft Intune Credential you integrated, from the drop-down list."]}),"\n",(0,s.jsx)(i.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(i.h2,{id:"ios",children:"iOS"}),"\n",(0,s.jsx)(i.p,{children:"Below are the parameters necessary for this step's operation for iOS, along with their descriptions."}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/send-to-microsoft-intune-inputs-ios-light.png"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Variable Name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Status"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_INTUNE_PUBLISHER_NAME"})}),(0,s.jsx)(i.td,{children:"This parameter is used to specify the publisher name for the selected version. By default, it takes the name of your organization or the email address of the user initiating the step."}),(0,s.jsx)(i.td,{children:"Optional"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_INTUNE_TARGETED_PLATFORM"})}),(0,s.jsxs)(i.td,{children:["The ",(0,s.jsx)(i.code,{children:"Applicable Device Type"})," specifies the the device types that can install this app. Options: ",(0,s.jsx)(i.code,{children:"Both"}),", ",(0,s.jsx)(i.code,{children:"iPad"}),", ",(0,s.jsx)(i.code,{children:"iPhone and iPod"}),". Default: ",(0,s.jsx)(i.code,{children:"Both"}),"."]}),(0,s.jsx)(i.td,{children:"Optional"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_INTUNE_MIN_OS_VERSION"})}),(0,s.jsxs)(i.td,{children:["The ",(0,s.jsx)(i.code,{children:"Minimum Operating System"})," specifies the earliest operating system version on which the app can be installed. If you assign the app to a device with an earlier operating system, it will not be installed. Default: ",(0,s.jsx)(i.code,{children:"iOS 8.0"}),"."]}),(0,s.jsx)(i.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsxs)(i.admonition,{type:"warning",children:[(0,s.jsxs)(i.p,{children:["If you choose to create a new application in Microsoft Intune while marking the app version as release candidate and execute this step before updating the ",(0,s.jsx)(i.a,{href:"https://docs.appcircle.io/publish-module/publish-information/meta-data-information#microsoft-intune-metadata-information",children:"metadata information"}),", these values will be assigned to the application being created by default."]}),(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/send-to-intune-select-app-light-v2.png"})]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"android",children:"Android"}),"\n",(0,s.jsx)(i.p,{children:"Below are the parameters necessary for this step's operation for Android, along with their descriptions."}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/send-to-microsoft-intune-inputs-android-light.png"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Variable Name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Status"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_INTUNE_PUBLISHER_NAME"})}),(0,s.jsx)(i.td,{children:"This parameter is used to specify the publisher name for the selected version. By default, it takes the name of your organization or the email address of the user initiating the step."}),(0,s.jsx)(i.td,{children:"Optional"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_INTUNE_TARGETED_PLATFORM"})}),(0,s.jsxs)(i.td,{children:["The ",(0,s.jsx)(i.code,{children:"Targeted Platform"})," specifies the the device types that can install this app. Options: ",(0,s.jsx)(i.code,{children:"Android device administrator"}),", ",(0,s.jsx)(i.code,{children:"Android (AOSP)"}),". Default: ",(0,s.jsx)(i.code,{children:"Android (AOSP)"}),"."]}),(0,s.jsx)(i.td,{children:"Optional"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_INTUNE_MIN_OS_VERSION"})}),(0,s.jsxs)(i.td,{children:["The ",(0,s.jsx)(i.code,{children:"Minimum Operating System"})," specifies the earliest operating system version on which the app can be installed. If you assign the app to a device with an earlier operating system, it will not be installed. Default: ",(0,s.jsx)(i.code,{children:"Android 4.0 (Ice Cream Sandwich)"}),"."]}),(0,s.jsx)(i.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsxs)(i.p,{children:["If you choose to create a new application in Microsoft Intune while marking the app version as release candidate and execute this step before updating the ",(0,s.jsx)(i.a,{href:"https://docs.appcircle.io/publish-module/publish-information/meta-data-information#microsoft-intune-metadata-information",children:"metadata information"}),", these values will be assigned to the application being created by default."]}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.code,{children:"Targeted Platform"})," is set when the application is first created in Microsoft Intune and cannot be changed afterwards. Ensure that you select the correct platform before executing this step."]}),"\n"]}),(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/send-to-intune-select-app-light-v2.png"})]}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsx)(i.p,{children:"Microsoft Intune does not support the distribution of  Android App Bundle (AAB) files. If your release candidate version is an AAB file, this step will fail."})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-publish-send-to-intune-ios",children:(0,s.jsx)(n,{url:"https://github.com/appcircleio/appcircle-publish-send-to-intune-ios",title:"GitHub - appcircleio/appcircle-publish-send-to-intune-ios: sends ipa to intune store",description:"sends ipa to intune store. Contribute to appcircleio/appcircle-publish-send-to-intune-ios development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/6c4b810e2e2aaa1144826dfca1369d76b9ba7431720c49a7bfa534d71a06086f/appcircleio/appcircle-publish-send-to-intune-ios"})}),"\n",(0,s.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-publish-send-to-intune-android",children:(0,s.jsx)(n,{url:"https://github.com/appcircleio/appcircle-publish-send-to-intune-android",title:"GitHub - appcircleio/appcircle-publish-send-to-intune-android: sends aab/apk to intune store",description:"sends aab/apk to intune store. Contribute to appcircleio/appcircle-publish-send-to-intune-android development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/f606e9a7ae371ebd0e5f1d0584f5036682ba814375a8fb978f40bc491594e2ff/appcircleio/appcircle-publish-send-to-intune-android"})})]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function u(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},69678:(e,i,t)=>{t.d(i,{A:()=>s});t(96540);var n=t(74848);function s(e){let{url:i,alt:t}=e;return(0,n.jsx)("img",{className:"screenshot",src:i,alt:t||"Screenshot"})}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var n=t(96540);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);
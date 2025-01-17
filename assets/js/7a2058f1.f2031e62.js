"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[75125],{7059:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"publish-integrations/android-publish-integrations/publish-to-huawei-appgallery","title":"Publish to Huawei AppGallery","description":"Publish your Android applications to Huawei AppGallery with Appcircle","source":"@site/docs/publish-integrations/android-publish-integrations/publish-to-huawei-appgallery.md","sourceDirName":"publish-integrations/android-publish-integrations","slug":"/publish-integrations/android-publish-integrations/publish-to-huawei-appgallery","permalink":"/publish-integrations/android-publish-integrations/publish-to-huawei-appgallery","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/publish-integrations/android-publish-integrations/publish-to-huawei-appgallery.md","tags":[{"inline":false,"label":"android","permalink":"/tags/android","description":"Description for android"},{"inline":false,"label":"android integrations","permalink":"/tags/android-integrations","description":"Description for android integrations"},{"inline":false,"label":"android publish integrations","permalink":"/tags/android-publish-integrations","description":"Description for android publish integrations"},{"inline":false,"label":"huawei appgallery","permalink":"/tags/huawei-appgallery","description":"Description for huawei appgallery"},{"inline":false,"label":"publish appgallery","permalink":"/tags/publish-appgallery","description":"Description for publish appgallery"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Publish to Huawei AppGallery","description":"Publish your Android applications to Huawei AppGallery with Appcircle","tags":["android","android integrations","android publish integrations","huawei appgallery","publish appgallery"],"sidebar_position":2},"sidebar":"mySidebar","previous":{"title":"Publish to Google Play","permalink":"/publish-integrations/android-publish-integrations/publish-to-google-play"},"next":{"title":"Build Infrastructure","permalink":"/infrastructure/"}}');var l=t(74848),a=t(28453),n=t(69678),s=t(70344);const o={title:"Publish to Huawei AppGallery",description:"Publish your Android applications to Huawei AppGallery with Appcircle",tags:["android","android integrations","android publish integrations","huawei appgallery","publish appgallery"],sidebar_position:2},p="Publish to Huawei AppGallery",d={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:2},{value:"Output Variables",id:"output-variables",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"publish-to-huawei-appgallery",children:"Publish to Huawei AppGallery"})}),"\n",(0,l.jsxs)(i.p,{children:["Appcircle supports sending ",(0,l.jsx)(i.a,{href:"https://developer.huawei.com/consumer/en/doc/app/agc-help-releaseapkrpk-0000001106463276",children:"APK"})," and ",(0,l.jsx)(i.a,{href:"https://developer.huawei.com/consumer/en/doc/app/agc-help-releasebundle-0000001100316672",children:"AAB"})," binaries to ",(0,l.jsx)(i.a,{href:"https://appgallery.huawei.com/",children:"Huawei AppGallery"})," through the Publish module."]}),"\n",(0,l.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsx)(i.p,{children:"Before uploading a binary to the store, please make sure that an application listing is created in Huawei AppGallery Connect and the initial binary is manually uploaded with the same keystore and the application ID. Otherwise, the store upload process will fail."}),"\n",(0,l.jsx)(i.p,{children:"You also need to have an AppGallery Connect API and its key as a JSON file. Please refer to the following document for more information on creating your API key."}),"\n",(0,l.jsx)(s.A,{url:"/account/my-organization/security/credentials/adding-huawei-api-key",children:(0,l.jsx)(i.p,{children:"Adding Huawei AppGallery API Key"})}),"\n",(0,l.jsxs)(i.p,{children:["After completing the integration with Huawei AppGallery API Key, go to ",(0,l.jsx)(i.a,{href:"/publish-module/publish-settings",children:"Publishing Settings"}),". In the ",(0,l.jsx)(i.a,{href:"/publish-module/publish-settings#store-credentials",children:(0,l.jsx)(i.code,{children:"Store Credential"})})," section, select the Huawei AppGallery API Key you uploaded, from the drop-down list."]}),"\n",(0,l.jsxs)(i.p,{children:["If you are using ",(0,l.jsx)(i.a,{href:"/publish-module/publish-settings#publish-variables",children:"Publish Variables"}),", you should select them in the ",(0,l.jsx)(i.a,{href:"/publish-module/publish-settings",children:"Publishing Settings"})," window."]}),"\n",(0,l.jsx)(i.h2,{id:"input-variables",children:"Input Variables"}),"\n",(0,l.jsx)(i.p,{children:"The parameters required for this step to work as expected are listed below:"}),"\n",(0,l.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/android-publishflow-publish-huawei-appgallery-1.png"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Variable Name"}),(0,l.jsx)(i.th,{children:"Description"}),(0,l.jsx)(i.th,{children:"Status"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"$AC_HUAWEI_APP_ID"})}),(0,l.jsxs)(i.td,{children:["It is required to publish the app to Huawei AppGallery. You can find the App ID on the ",(0,l.jsx)(i.a,{href:"https://developer.huawei.com/consumer/en/console",children:"Huawei Developer Console"})," by navigating to ",(0,l.jsx)(i.code,{children:"App Services"})," > ",(0,l.jsx)(i.code,{children:"AppGallery Connect"})," > ",(0,l.jsx)(i.code,{children:"My Apps"})," > ",(0,l.jsx)(i.code,{children:"your app"})," > ",(0,l.jsx)(i.code,{children:"App Information"}),"."]}),(0,l.jsx)(i.td,{children:"Required"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:(0,l.jsx)(i.code,{children:"$AC_RELEASE_NOTES"})}),(0,l.jsx)(i.td,{children:"Provides release notes for the submission to Huawei AppGallery."}),(0,l.jsx)(i.td,{children:"Optional"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"output-variables",children:"Output Variables"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"Publish to Huawei AppGallery"})," step does not produce any output. However, you can check the logs to see whether your app has successfully accessed Huawei AppGallery."]}),"\n",(0,l.jsx)(i.hr,{}),"\n",(0,l.jsx)(i.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-publish-send-to-appgallery.git",children:(0,l.jsx)(t,{url:"https://github.com/appcircleio/appcircle-publish-send-to-appgallery.git",title:"GitHub - appcircleio/appcircle-publish-send-to-appgallery: send to huawei app gallery component for Publish module",description:"send to huawei app gallery component for Publish module - appcircleio/appcircle-publish-send-to-appgallery",image:"https://opengraph.githubassets.com/2a9f9018c3d02e3da606ecc9927825dc6edcfda3d41caf798d452b50172791ac/appcircleio/appcircle-publish-send-to-appgallery"})})})]})}function u(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},70344:(e,i,t)=>{t.d(i,{A:()=>p});var r,l,a=t(96540);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.apply(null,arguments)}const s=e=>{let{title:i,titleId:t,...s}=e;return a.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"feather feather-file-text",viewBox:"0 0 24 24","aria-labelledby":t},s),i?a.createElement("title",{id:t},i):null,r||(r=a.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),l||(l=a.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var o=t(74848);function p(e){let{children:i,url:t}=e;return(0,o.jsxs)("a",{href:t,className:"content-ref-card",children:[(0,o.jsx)(s,{title:"File Icon",className:"file-icon"}),i]})}},69678:(e,i,t)=>{t.d(i,{A:()=>l});t(96540);var r=t(74848);function l(e){let{url:i,alt:t}=e;return(0,r.jsx)("img",{className:"screenshot",src:i,alt:t||"Screenshot"})}},28453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>s});var r=t(96540);const l={},a=r.createContext(l);function n(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);
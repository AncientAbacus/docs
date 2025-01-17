"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[83861],{81481:(i,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"testing-distribution/index","title":"Testing Distribution","description":"Learn how to create a distribution profile and share your builds with testers in Appcircle","source":"@site/docs/testing-distribution/index.md","sourceDirName":"testing-distribution","slug":"/testing-distribution/","permalink":"/testing-distribution/","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/testing-distribution/index.md","tags":[{"inline":false,"label":"distribution","permalink":"/tags/distribution","description":"Description for distribution"},{"inline":false,"label":"distribution profile","permalink":"/tags/distribution-profile","description":"Description for distribution profile"},{"inline":false,"label":"testing distribution","permalink":"/tags/testing-distribution","description":"Description for testing distribution"},{"inline":false,"label":"testers","permalink":"/tags/testers","description":"Description for testers"},{"inline":false,"label":"faq","permalink":"/tags/faq","description":"Description for faq"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Testing Distribution","description":"Learn how to create a distribution profile and share your builds with testers in Appcircle","tags":["distribution","distribution profile","testing distribution","testers","faq"],"sidebar_position":1},"sidebar":"mySidebar","previous":{"title":"Activity Log","permalink":"/signing-identities/signing-identities-activity-log"},"next":{"title":"Distribution Profile","permalink":"/testing-distribution/create-or-select-a-distribution-profile"}}');var n=t(74848),r=t(28453),o=t(69678);const a={title:"Testing Distribution",description:"Learn how to create a distribution profile and share your builds with testers in Appcircle",tags:["distribution","distribution profile","testing distribution","testers","faq"],sidebar_position:1},l=void 0,d={},c=[{value:"Distribution Profile",id:"distribution-profile",level:2},{value:"Testing Groups",id:"testing-groups",level:2},{value:"Re-sign Binaries",id:"re-sign-binaries",level:2},{value:"Testing Portal",id:"testing-portal",level:2},{value:"Reporting",id:"reporting",level:2},{value:"FAQ",id:"faq",level:2},{value:"No files or multiple files were received from autodistribute;",id:"no-files-or-multiple-files-were-received-from-autodistribute",level:3},{value:"Deleted versions still occupy storage space",id:"deleted-versions-still-occupy-storage-space",level:3},{value:"Access Denied on builds",id:"access-denied-on-builds",level:3}];function u(i){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"In order to share your builds with testers, you can create distribution profiles and assign testing groups to the distribution profiles."}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/distribution-start.png"}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsxs)(e.p,{children:["Note that an empty Testing Distribution profile named ",(0,n.jsx)(e.strong,{children:"Send to Myself"})," will be created automatically for you."]}),"\n"]}),"\n",(0,n.jsx)(e.admonition,{type:"info",children:(0,n.jsx)(e.p,{children:"A distribution profile corresponds to the multiple versions of the same application for iOS and Android. You do not need to create multiple Testing Distribution profiles for iOS and Android applications of the same application."})}),"\n",(0,n.jsx)("iframe",{width:"600",height:"315",src:"https://www.youtube.com/embed/vZ3p5uZZcmk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,n.jsx)(e.h2,{id:"distribution-profile",children:(0,n.jsx)(e.a,{href:"/testing-distribution/create-or-select-a-distribution-profile",children:"Distribution Profile"})}),"\n",(0,n.jsx)(e.p,{children:"To share builds with testers, distribution profiles should be created and testing groups assigned to these profiles."}),"\n",(0,n.jsx)(e.h2,{id:"testing-groups",children:(0,n.jsx)(e.a,{href:"/testing-distribution/testing-groups",children:"Testing Groups"})}),"\n",(0,n.jsx)(e.p,{children:"The testing group feature is used to manage and organize testers. Different versions of applications can be distributed to specific groups based on testing needs, such as OS versions, features, devices, and more."}),"\n",(0,n.jsx)(e.h2,{id:"re-sign-binaries",children:(0,n.jsx)(e.a,{href:"/testing-distribution/resigning-binaries",children:"Re-sign Binaries"})}),"\n",(0,n.jsx)(e.p,{children:"Re-signing is the process of modifying an existing binary with a new signing certificate or keystore, required when an application needs to be published under a different developer account or when updating an existing application. This process involves removing the original signature and replacing it with a new one."}),"\n",(0,n.jsx)(e.h2,{id:"testing-portal",children:(0,n.jsx)(e.a,{href:"/testing-distribution/testing-portal",children:"Testing Portal"})}),"\n",(0,n.jsx)(e.p,{children:"Appcircle has a separate distribution screen designed to make it easy for test group developers and testers download the distributed applications easily."}),"\n",(0,n.jsx)(e.h2,{id:"reporting",children:(0,n.jsx)(e.a,{href:"/testing-distribution/reports",children:"Reporting"})}),"\n",(0,n.jsx)(e.p,{children:"Optimize your application management with detailed reports. Utilize the App Sharing Report and App Versions Report to gain insights and make informed decisions about your app's distribution and evolution."}),"\n",(0,n.jsx)(e.h2,{id:"faq",children:"FAQ"}),"\n",(0,n.jsx)(e.h3,{id:"no-files-or-multiple-files-were-received-from-autodistribute",children:"No files or multiple files were received from autodistribute;"}),"\n",(0,n.jsxs)(e.p,{children:["A successful distribution depends on a correctly signed binary. Please check if the ",(0,n.jsx)(e.a,{href:"/build/build-process-management/build-profile-configuration#signing-configuration",children:"signing configuration"})," is correct."]}),"\n",(0,n.jsxs)(e.p,{children:["You can also check the list of the ",(0,n.jsx)(e.a,{href:"/build/post-build-operations/after-a-build",children:"generated build artifacts"})," to confirm the output. In Android, you can also check the ",(0,n.jsx)(e.code,{children:"ac_post_process_output.json"})," file in the build artifacts to see if the APKs are signed or not."]}),"\n",(0,n.jsx)(e.p,{children:"In Android, please also check if gradle sign is being used for the selected build variant. If gradle sign works alongside with Appcircle signing, you will receive multiple APKs."}),"\n",(0,n.jsx)(e.h3,{id:"deleted-versions-still-occupy-storage-space",children:"Deleted versions still occupy storage space"}),"\n",(0,n.jsx)(e.p,{children:"The master version of any artifact deployed from the Build to the Testing Distribution is stored within the build artifacts section. Once you delete such a version from the Testing Distribution, only the reference is removed and the binary is still available within the build artifacts of the related build. You also need to remove the binary from the build artifacts to save storage."}),"\n",(0,n.jsx)(e.h3,{id:"access-denied-on-builds",children:"Access Denied on builds"}),"\n",(0,n.jsxs)(e.p,{children:["On some distributed apps, the ",(0,n.jsx)(e.strong,{children:"Access Denied"})," error can be bypassed by one of these steps:"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Launching the distribution link on a different browser and Incognito Mode"}),"\n",(0,n.jsx)(e.li,{children:"Clearing the browser cache if the link is pasted to a browser instead of in-line browser on mail applications"}),"\n",(0,n.jsx)(e.li,{children:"If there is an authorization configuration on Distribution, clearing the authorization temporarily"}),"\n"]})]})}function p(i={}){const{wrapper:e}={...(0,r.R)(),...i.components};return e?(0,n.jsx)(e,{...i,children:(0,n.jsx)(u,{...i})}):u(i)}},69678:(i,e,t)=>{t.d(e,{A:()=>n});t(96540);var s=t(74848);function n(i){let{url:e,alt:t}=i;return(0,s.jsx)("img",{className:"screenshot",src:e,alt:t||"Screenshot"})}},28453:(i,e,t)=>{t.d(e,{R:()=>o,x:()=>a});var s=t(96540);const n={},r=s.createContext(n);function o(i){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function a(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(n):i.components||n:o(i.components),s.createElement(r.Provider,{value:e},i.children)}}}]);
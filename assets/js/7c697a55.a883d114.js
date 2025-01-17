"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[77068],{86063:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"workflows/android-specific-workflow-steps/appdome-build-to-secure-for-android","title":"Appdome Build-2Secure for Android","description":"Appdome Build-2Secure automates the integration of advanced security features, adaptive protections, code-signing, and certification processes into mobile applications, enhancing security without the need for manual coding or code analysis.","source":"@site/docs/workflows/android-specific-workflow-steps/appdome-build-to-secure-for-android.md","sourceDirName":"workflows/android-specific-workflow-steps","slug":"/workflows/android-specific-workflow-steps/appdome-build-to-secure-for-android","permalink":"/workflows/android-specific-workflow-steps/appdome-build-to-secure-for-android","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/android-specific-workflow-steps/appdome-build-to-secure-for-android.md","tags":[{"inline":false,"label":"android","permalink":"/tags/android","description":"Description for android"},{"inline":false,"label":"mobile","permalink":"/tags/mobile","description":"Description for mobile"},{"inline":false,"label":"security","permalink":"/tags/security","description":"Description for security"},{"inline":false,"label":"build","permalink":"/tags/build","description":"Description for build"},{"inline":false,"label":"appdome","permalink":"/tags/appdome","description":"Description for appdome"}],"version":"current","frontMatter":{"title":"Appdome Build-2Secure for Android","description":"Appdome Build-2Secure automates the integration of advanced security features, adaptive protections, code-signing, and certification processes into mobile applications, enhancing security without the need for manual coding or code analysis.","tags":["android","mobile","security","build","appdome"]},"sidebar":"mySidebar","previous":{"title":"App Post-Processor","permalink":"/workflows/android-specific-workflow-steps/app-post-processor"},"next":{"title":"AppSweep Mobile Security Testing","permalink":"/workflows/android-specific-workflow-steps/appsweep-mobile-security-testing"}}');var r=o(74848),t=o(28453),d=o(69678);const n={title:"Appdome Build-2Secure for Android",description:"Appdome Build-2Secure automates the integration of advanced security features, adaptive protections, code-signing, and certification processes into mobile applications, enhancing security without the need for manual coding or code analysis.",tags:["android","mobile","security","build","appdome"]},c="Appdome Build-2Secure for Android",a={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function l(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components},{ExternalUrlRef:o}=i;return o||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"appdome-build-2secure-for-android",children:"Appdome Build-2Secure for Android"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://apis.appdome.com/docs/integrate-in-cicd",children:"Appdome Build-2Secure"})," automates the integration of advanced security features, adaptive protections, code-signing, and certification processes into mobile applications, enhancing security without the need for manual coding or code analysis."]}),"\n",(0,r.jsxs)(i.p,{children:["For detailed information on the benefits that ",(0,r.jsx)(i.strong,{children:"Appdome Build-2Secure"})," adds to your mobile app, please refer to the following blog post:"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://appcircle.io/blog/elevate-your-mobile-app-security-with-appdome-integration",children:(0,r.jsx)(o,{url:"https://appcircle.io/blog/elevate-your-mobile-app-security-with-appdome-integration",title:"Elevate Your Mobile App Security with Appdome Integration - Appcircle Blog",description:"Learn to fortify app security seamlessly with Appdome integrated into Appcircle CI/CD pipelines",image:"https://ac.appcircle.io/wp-content/uploads/2024/01/mobile-app-security-with-appdome.png"})})}),"\n",(0,r.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(i.p,{children:["Before running the ",(0,r.jsx)(i.strong,{children:"Appdome Build-2Secure for Android"})," step, you must complete certain prerequisites, as detailed in the table below:"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-build",children:(0,r.jsx)(i.strong,{children:"Android Build"})})}),(0,r.jsxs)(i.td,{children:["The app required for this step is generated by the ",(0,r.jsx)(i.strong,{children:"Android Build"})," (or alternative build steps)."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-sign",children:(0,r.jsx)(i.strong,{children:"Android Sign"})})}),(0,r.jsx)(i.td,{children:"If you intend to use a signed app, this step must be executed beforehand to process the output. If your app is already signed in the build step, you can skip this step."})]})]})]}),"\n",(0,r.jsx)(i.admonition,{type:"danger",children:(0,r.jsxs)(i.p,{children:["If a step other than the ",(0,r.jsx)(i.strong,{children:"Android Build"})," or ",(0,r.jsx)(i.strong,{children:"Android Sign"})," step is used to build or sign the app, then the ",(0,r.jsx)(i.strong,{children:"Appdome Build-2Secure for Android"})," step depends on this step."]})}),"\n",(0,r.jsx)(d.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-appdome-build-to-secure_1.png"}),"\n",(0,r.jsx)(i.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,r.jsx)(i.p,{children:"This step contains some input variable(s). It needs these variable(s) to work. The table below gives explanation for this variable(s)."}),"\n",(0,r.jsx)(d.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-appdome-build-to-secure_2.png"}),"\n",(0,r.jsxs)(i.admonition,{title:"Sensitive Variables",type:"danger",children:[(0,r.jsxs)(i.p,{children:["Please do not use sensitive variables such as ",(0,r.jsx)(i.strong,{children:"Username"}),", ",(0,r.jsx)(i.strong,{children:"Password"}),", ",(0,r.jsx)(i.strong,{children:"API Key"}),", or ",(0,r.jsx)(i.strong,{children:"Personal Access Key"})," directly within the step."]}),(0,r.jsxs)(i.p,{children:["We recommend using ",(0,r.jsx)(i.a,{href:"/environment-variables/managing-variables",children:(0,r.jsx)(i.strong,{children:"Environment Variables"})})," groups for such sensitive variables."]})]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Variable Name"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Status"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$AC_APPDOME_APP_PATH"})}),(0,r.jsxs)(i.td,{children:["Specifies the URL or path of the app accessible from Appcircle. Default values are ",(0,r.jsx)(i.code,{children:"$AC_APK_PATH"})," or ",(0,r.jsx)(i.code,{children:"$AC_AAB_PATH"})," obtained from the ",(0,r.jsx)(i.strong,{children:"Android Build"})," step."]}),(0,r.jsx)(i.td,{children:"Required"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$AC_APPDOME_API_KEY"})}),(0,r.jsxs)(i.td,{children:["Specifies the Appdome API key, which must be obtained from the Appdome account. Refer to ",(0,r.jsx)(i.a,{href:"https://apis.appdome.com/docs/getting-started#getting-and-resetting-your-appdomes-build2secure-api-token",children:"this document"})," for more information."]}),(0,r.jsx)(i.td,{children:"Required"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$AC_APPDOME_FUSION_SET_ID"})}),(0,r.jsxs)(i.td,{children:["Specifies the Appdome Fusion Set ID, which must be obtained from the Appdome account. Refer to ",(0,r.jsx)(i.a,{href:"https://apis.appdome.com/docs/getting-started#getting-a-fusion-sets-id",children:"this document"})," for more information."]}),(0,r.jsx)(i.td,{children:"Required"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$AC_APPDOME_TEAM_ID"})}),(0,r.jsxs)(i.td,{children:["Specifies the Appdome Team ID. Insert your team's ID if using a team account. Refer to ",(0,r.jsx)(i.a,{href:"https://apis.appdome.com/docs/getting-started#getting-a-teams-id",children:"this document"})," for more information."]}),(0,r.jsx)(i.td,{children:"Optional"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$AC_APPDOME_SIGN_METHOD"})}),(0,r.jsxs)(i.td,{children:["Specifies the Appdome app signing method. Options are: ",(0,r.jsx)(i.code,{children:"On-Appdome"}),", ",(0,r.jsx)(i.code,{children:"Private-Signing"}),", and ",(0,r.jsx)(i.code,{children:"Auto-Dev-Signing"}),". The default value is ",(0,r.jsx)(i.code,{children:"On-Appdome"}),". For details, refer to ",(0,r.jsx)(i.a,{href:"https://www.appdome.com/how-to/devsecops-automation-mobile-cicd/automated-signing-secured-android-ios/automatic-code-signing-for-secured-android-apps-on-appdome/",children:"this document"}),"."]}),(0,r.jsx)(i.td,{children:"Required"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$AC_APPDOME_GP_SIGNING"})}),(0,r.jsxs)(i.td,{children:["Specifies whether your app is signed for Google Play. If ",(0,r.jsx)(i.code,{children:"true"}),", distribute through the Google Play App Signing program. Details are available ",(0,r.jsx)(i.a,{href:"https://www.appdome.com/how-to/devsecops-automation-mobile-cicd/automated-signing-secured-android-ios/automatic-code-signing-for-secured-android-apps-on-appdome/",children:"here"}),". The default value is ",(0,r.jsx)(i.code,{children:"false"}),"."]}),(0,r.jsx)(i.td,{children:"Required"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"$AC_APPDOME_BUILD_LOGS"})}),(0,r.jsxs)(i.td,{children:["If ",(0,r.jsx)(i.code,{children:"true"}),", it enables diagnostic logs for troubleshooting secured apps. Details are available ",(0,r.jsx)(i.a,{href:"https://www.appdome.com/how-to/devsecops-automation-mobile-cicd/test-secured-mobile-apps/appdome-diagnostic-logs-for-troubleshooting-secured-apps/",children:"here"}),"."]}),(0,r.jsx)(i.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,r.jsx)(i.p,{children:"The output(s) resulting from the operation of this component are as follows:"}),"\n",(0,r.jsx)(d.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-appdome-build-to-secure_3.png"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Variable Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"AC_APPDOME_SECURED_APK_PATH"})}),(0,r.jsxs)(i.td,{children:["Specified path of the secured APK file produced by ",(0,r.jsx)(i.strong,{children:"Appdome Build-2Secure"}),". This is available when the ",(0,r.jsx)(i.code,{children:"Signing Method"})," is set to ",(0,r.jsx)(i.code,{children:"On-Appdome"})," or ",(0,r.jsx)(i.code,{children:"Private-Signing"}),"."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"AC_APPDOME_SECURED_AAB_PATH"})}),(0,r.jsxs)(i.td,{children:["Specified path of the secured AAB file produced by ",(0,r.jsx)(i.strong,{children:"Appdome Build-2Secure"}),". This is available when the ",(0,r.jsx)(i.code,{children:"Signing Method"})," is set to ",(0,r.jsx)(i.code,{children:"On-Appdome"})," or ",(0,r.jsx)(i.code,{children:"Private-Signing"}),"."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"AC_APPDOME_PRIVATE_SIGN_SCRIPT_PATH"})}),(0,r.jsxs)(i.td,{children:["Specified path of the ",(0,r.jsx)(i.code,{children:".sh"})," sign script file produced by ",(0,r.jsx)(i.strong,{children:"Appdome Build-2Secure"}),". This is available when the ",(0,r.jsx)(i.code,{children:"Signing Method"})," is set to ",(0,r.jsx)(i.code,{children:"Auto-Dev-Signing"}),"."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"AC_APPDOME_CERTIFICATE_PATH"})}),(0,r.jsxs)(i.td,{children:["Specified path of the ",(0,r.jsx)(i.a,{href:"https://www.appdome.com/certified-secure-mobile-devsecops-certification/",children:(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.em,{children:"Certified Secure"})})})," certificate produced by ",(0,r.jsx)(i.strong,{children:"Appdome Build-2Secure"})," for your app is provided as a PDF file."]})]})]})]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-android-appdome-component.git",children:(0,r.jsx)(o,{url:"https://github.com/appcircleio/appcircle-android-appdome-component.git",title:"GitHub - appcircleio/appcircle-android-appdome-component: Appcircle Appdome Secure Component",description:"Appcircle Appdome Secure Component. Contribute to appcircleio/appcircle-android-appdome-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/b170ff021f3dc6d1652fb6e731cb667f9a5da769ff766ee047df06c5f2eb67e3/appcircleio/appcircle-android-appdome-component"})})})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},69678:(e,i,o)=>{o.d(i,{A:()=>r});o(96540);var s=o(74848);function r(e){let{url:i,alt:o}=e;return(0,s.jsx)("img",{className:"screenshot",src:i,alt:o||"Screenshot"})}},28453:(e,i,o)=>{o.d(i,{R:()=>d,x:()=>n});var s=o(96540);const r={},t=s.createContext(r);function d(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);
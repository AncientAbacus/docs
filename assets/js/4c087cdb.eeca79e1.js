"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[12552],{51264:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>d,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"workflows/android-specific-workflow-steps/index","title":"Android Specific Workflow Steps","description":"Android specific workflow steps in Appcircle","source":"@site/docs/workflows/android-specific-workflow-steps/index.md","sourceDirName":"workflows/android-specific-workflow-steps","slug":"/workflows/android-specific-workflow-steps/","permalink":"/workflows/android-specific-workflow-steps/","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/android-specific-workflow-steps/index.md","tags":[{"inline":false,"label":"android","permalink":"/tags/android","description":"Description for android"},{"inline":false,"label":"mobile","permalink":"/tags/mobile","description":"Description for mobile"}],"version":"current","frontMatter":{"title":"Android Specific Workflow Steps","description":"Android specific workflow steps in Appcircle","tags":["android","mobile"]},"sidebar":"mySidebar","previous":{"title":"Xcodebuild for Unit and UI Testing","permalink":"/workflows/ios-specific-workflow-steps/xcodebuild-for-unit-and-ui-test"},"next":{"title":"Android Build for UI Testing","permalink":"/workflows/android-specific-workflow-steps/android-build-for-ui-testing"}}');var s=r(74848),n=r(28453);const d={title:"Android Specific Workflow Steps",description:"Android specific workflow steps in Appcircle",tags:["android","mobile"]},t="Android Specific Workflow Steps",l={},a=[{value:"Android Build for UI Testing",id:"android-build-for-ui-testing",level:2},{value:"Android Build",id:"android-build",level:2},{value:"Android Dependency Report",id:"android-dependency-report",level:2},{value:"Android Sign",id:"android-sign",level:2},{value:"Android Unit Tests",id:"android-unit-tests",level:2},{value:"App Center Android Distribution",id:"app-center-android-distribution",level:2},{value:"Android App Post-Processor",id:"android-app-post-processor",level:2},{value:"Appdome Build-2Secure for Android",id:"appdome-build-2secure-for-android",level:2},{value:"AppSweep Mobile Security Testing",id:"appsweep-mobile-security-testing",level:2},{value:"Azure DevOps Bot for Detekt Report",id:"azure-devops-bot-for-detekt-report",level:2},{value:"BrowserStack App Automate - Espresso",id:"browserstack-app-automate---espresso",level:2},{value:"Bundle Universal Apk",id:"bundle-universal-apk",level:2},{value:"Detekt",id:"detekt",level:2},{value:"Firebase Test Lab for Android",id:"firebase-test-lab-for-android",level:2},{value:"Gradle Runner",id:"gradle-runner",level:2},{value:"Android Increment Build and Version Number",id:"android-increment-build-and-version-number",level:2},{value:"Android Lint",id:"android-lint",level:2},{value:"Test Reports for Android",id:"test-reports-for-android",level:2},{value:"Wait for Android Emulator",id:"wait-for-android-emulator",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{ExternalUrlRef:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"android-specific-workflow-steps",children:"Android Specific Workflow Steps"})}),"\n",(0,s.jsx)(i.p,{children:"The steps listed below are specific to the Android build profiles."}),"\n",(0,s.jsxs)(i.p,{children:["You can find the full list of available workflow steps in our ",(0,s.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-workflow-components",children:"workflow marketplace"})," and under each workflow step in this document, you can find the related repository URL, which also includes the documentation for the related step."]}),"\n",(0,s.jsx)(i.h2,{id:"android-build-for-ui-testing",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-build-for-ui-testing",children:"Android Build for UI Testing"})}),"\n",(0,s.jsxs)(i.p,{children:["Builds your test applications with gradlew. Runs ",(0,s.jsx)(i.code,{children:"./gradlew clean ${module}:assembleAndroidTest"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"android-build",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-build",children:"Android Build"})}),"\n",(0,s.jsx)(i.p,{children:"This step builds your Android application for the architectures specified in your project."}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:["If you are using Gradle 4.3 and above in your project, you can just use the ",(0,s.jsx)(i.code,{children:"--scan"})," flag in the build step to enable build scans. For existing projects, you may need to add the Gradle Scan (Gradle Enterprise) plugin. For more information, please refer to ",(0,s.jsx)(i.a,{href:"https://scans.gradle.com",children:(0,s.jsx)(r,{url:"https://scans.gradle.com/",title:"scans.gradle.com",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})]})}),"\n",(0,s.jsx)(i.h2,{id:"android-dependency-report",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-dependency-report",children:"Android Dependency Report"})}),"\n",(0,s.jsxs)(i.p,{children:["This step visualizes the whole dependency tree for every ",(0,s.jsx)(i.a,{href:"https://docs.gradle.org/current/userguide/declaring_dependencies.html#sec:what-are-dependency-configurations",children:"configuration"})," available in the project."]}),"\n",(0,s.jsx)(i.h2,{id:"android-sign",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-sign",children:"Android Sign"})}),"\n",(0,s.jsx)(i.p,{children:"This step signs your APK or App Bundle with the given Android keystore and exports a binary file compatible with Android devices."}),"\n",(0,s.jsx)(i.h2,{id:"android-unit-tests",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-unit-tests",children:"Android Unit Tests"})}),"\n",(0,s.jsx)(i.p,{children:"This step runs the unit tests of the project."}),"\n",(0,s.jsx)(i.h2,{id:"app-center-android-distribution",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/app-center-android-distribution",children:"App Center Android Distribution"})}),"\n",(0,s.jsxs)(i.p,{children:["Distribute APK, AAB, and mapping files to ",(0,s.jsx)(i.a,{href:"https://appcenter.ms/",children:"App Center"}),". You need to enter your token, owner, app, and group names to distribute your binaries."]}),"\n",(0,s.jsx)(i.h2,{id:"android-app-post-processor",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/app-post-processor",children:"Android App Post-Processor"})}),"\n",(0,s.jsx)(i.p,{children:"This step performs necessary system operations to identify and process the Android output binary files."}),"\n",(0,s.jsx)(i.h2,{id:"appdome-build-2secure-for-android",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/appdome-build-to-secure-for-android",children:"Appdome Build-2Secure for Android"})}),"\n",(0,s.jsx)(i.p,{children:"Appdome Build-2Secure is a comprehensive automated solution that seamlessly integrates advanced security features, adaptive protections, code-signing, and certification processes into mobile applications, enhancing security without the need for manual coding or code analysis."}),"\n",(0,s.jsxs)(i.p,{children:["For detailed information on the benefits Appdome Build-2Secure adds to your mobile app, refer to the blog post:\n",(0,s.jsx)(i.a,{href:"https://appcircle.io/blog/elevate-your-mobile-app-security-with-appdome-integration",children:(0,s.jsx)(r,{url:"https://appcircle.io/blog/elevate-your-mobile-app-security-with-appdome-integration",title:"Elevate Your Mobile App Security with Appdome Integration - Appcircle Blog",description:"Learn to fortify app security seamlessly with Appdome integrated into Appcircle CI/CD pipelines",image:"https://ac.appcircle.io/wp-content/uploads/2024/01/mobile-app-security-with-appdome.png"})})]}),"\n",(0,s.jsx)(i.h2,{id:"appsweep-mobile-security-testing",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/appsweep-mobile-security-testing",children:"AppSweep Mobile Security Testing"})}),"\n",(0,s.jsxs)(i.p,{children:["Scan your Android app using ",(0,s.jsx)(i.a,{href:"https://appsweep.guardsquare.com",children:"AppSweep"})]}),"\n",(0,s.jsx)(i.h2,{id:"azure-devops-bot-for-detekt-report",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/azure-bot-for-detekt-report",children:"Azure DevOps Bot for Detekt Report"})}),"\n",(0,s.jsx)(i.p,{children:"This step sends the Detekt report to Azure DevOps."}),"\n",(0,s.jsx)(i.h2,{id:"browserstack-app-automate---espresso",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/browserstack-app-automate-espresso",children:"BrowserStack App Automate - Espresso"})}),"\n",(0,s.jsxs)(i.p,{children:["Run your Espresso tests on BrowserStack App Automate. You need to add ",(0,s.jsx)(i.strong,{children:"Android Build for UI Testing"})," before this step to create the required ",(0,s.jsx)(i.code,{children:"$AC_APK_PATH"})," and ",(0,s.jsx)(i.code,{children:"$AC_TEST_APK_PATH"})," files."]}),"\n",(0,s.jsx)(i.h2,{id:"bundle-universal-apk",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/bundle-universal-apk",children:"Bundle Universal Apk"})}),"\n",(0,s.jsx)(i.p,{children:"This step generates a universal APK from an AAB."}),"\n",(0,s.jsx)(i.h2,{id:"detekt",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/detekt",children:"Detekt"})}),"\n",(0,s.jsx)(i.p,{children:"This step runs detekt gradle task."}),"\n",(0,s.jsx)(i.h2,{id:"firebase-test-lab-for-android",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/firebase-test-lab",children:"Firebase Test Lab for Android"})}),"\n",(0,s.jsx)(i.p,{children:"This step runs your Android tests on Firebase Test Lab."}),"\n",(0,s.jsx)(i.h2,{id:"gradle-runner",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/gradle-runner",children:"Gradle Runner"})}),"\n",(0,s.jsx)(i.p,{children:"This step runs given Gradle task."}),"\n",(0,s.jsx)(i.h2,{id:"android-increment-build-and-version-number",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/increment-build-and-version-number",children:"Android Increment Build and Version Number"})}),"\n",(0,s.jsx)(i.p,{children:"This step increments the version code and version name in the Android project."}),"\n",(0,s.jsx)(i.h2,{id:"android-lint",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/lint",children:"Android Lint"})}),"\n",(0,s.jsx)(i.p,{children:"This step runs lint Gradle tasks on the source files of the project."}),"\n",(0,s.jsx)(i.h2,{id:"test-reports-for-android",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/test-reports-for-android",children:"Test Reports for Android"})}),"\n",(0,s.jsxs)(i.p,{children:["This component provides detailed reports and insights on the results of Android app tests conducted.\nFor detailed information on the usage of ",(0,s.jsx)(i.strong,{children:"Test Reports for Android"}),", please refer to the documentation:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/continuous-testing/android-testing/running-android-unit-tests#generating-test-report",children:"Generating Test Report"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"wait-for-android-emulator",children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/wait-for-android-emulator",children:"Wait for Android Emulator"})}),"\n",(0,s.jsx)(i.p,{children:"This step waits for Android Emulator to boot. You must use this step before running any UI tests."})]})}function c(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>d,x:()=>t});var o=r(96540);const s={},n=o.createContext(s);function d(e){const i=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(n.Provider,{value:i},e.children)}}}]);
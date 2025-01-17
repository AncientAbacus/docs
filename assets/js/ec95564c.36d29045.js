"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[56447],{18007:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"workflows/android-specific-workflow-steps/android-build-for-ui-testing","title":"Android Build for UI Testing","description":"Learn how to use the Android Build for UI Testing workflow step in Appcircle","source":"@site/docs/workflows/android-specific-workflow-steps/android-build-for-ui-testing.md","sourceDirName":"workflows/android-specific-workflow-steps","slug":"/workflows/android-specific-workflow-steps/android-build-for-ui-testing","permalink":"/workflows/android-specific-workflow-steps/android-build-for-ui-testing","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/android-specific-workflow-steps/android-build-for-ui-testing.md","tags":[{"inline":false,"label":"android","permalink":"/tags/android","description":"Description for android"},{"inline":false,"label":"mobile","permalink":"/tags/mobile","description":"Description for mobile"},{"inline":false,"label":"ui testing","permalink":"/tags/ui-testing","description":"Description for ui testing"},{"inline":false,"label":"testing","permalink":"/tags/testing","description":"Description for testing"}],"version":"current","frontMatter":{"title":"Android Build for UI Testing","description":"Learn how to use the Android Build for UI Testing workflow step in Appcircle","tags":["android","mobile","ui testing","testing"]},"sidebar":"mySidebar","previous":{"title":"Android Specific Workflow Steps","permalink":"/workflows/android-specific-workflow-steps/"},"next":{"title":"Android Build","permalink":"/workflows/android-specific-workflow-steps/android-build"}}');var s=t(74848),n=t(28453),o=t(69678);const d={title:"Android Build for UI Testing",description:"Learn how to use the Android Build for UI Testing workflow step in Appcircle",tags:["android","mobile","ui testing","testing"]},l="Android Build for UI Testing",c={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"android-build-for-ui-testing",children:"Android Build for UI Testing"})}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.strong,{children:"Android Build for UI Testing"})," workflow step is tailored to ",(0,s.jsx)(i.a,{href:"https://developer.android.com/training/testing/instrumented-tests",children:"build your Android test application"})," using ",(0,s.jsx)(i.a,{href:"https://docs.gradle.org/current/userguide/gradle_wrapper.html",children:"Gradle Wrapper (gradlew)"})," for the designated architectures outlined in your project. This process employs the following gradle command: ",(0,s.jsx)(i.code,{children:"./gradlew clean <your-module>:assembleAndroidTest"})]}),"\n",(0,s.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(i.p,{children:["Before running the ",(0,s.jsx)(i.strong,{children:"Android Build for UI Testing"})," step, you must complete certain prerequisites, as detailed in the table below:"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/workflows/common-workflow-steps/git-clone",children:(0,s.jsx)(i.strong,{children:"Git Clone"})})}),(0,s.jsxs)(i.td,{children:["To initiate the ",(0,s.jsx)(i.strong,{children:"Android Build for UI Testing"})," process, the repository that needs to be built must be fetched from the branch. This is achieved as follows: Upon completion of the ",(0,s.jsx)(i.strong,{children:"Git Clone"})," step, it generates the ",(0,s.jsx)(i.code,{children:"$AC_REPOSITORY_DIR"})," variable, which is then used as the input for the ",(0,s.jsx)(i.strong,{children:"Android Build for UI Testing"})," step."]})]})})]}),"\n",(0,s.jsxs)(i.admonition,{type:"caution",children:[(0,s.jsxs)(i.p,{children:["If you're updating the version via Appcircle, ensure that the following step comes before the ",(0,s.jsx)(i.strong,{children:"Android Build for UI Testing"})," step:"]}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/increment-build-and-version-number",children:(0,s.jsx)(i.strong,{children:"Android Increment Build and Version Number"})})}),"\n"]})]}),"\n",(0,s.jsxs)(i.admonition,{type:"caution",children:[(0,s.jsxs)(i.p,{children:["If you're working with a ",(0,s.jsx)(i.strong,{children:"React Native Android"})," project, ensure that the following steps come before the ",(0,s.jsx)(i.strong,{children:"Android Build for UI Testing"})," step:"]}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/workflows/react-native-specific-workflow-steps/node-install",children:(0,s.jsx)(i.strong,{children:"Install Node"})})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/workflows/react-native-specific-workflow-steps/npm-yarn-commands",children:(0,s.jsx)(i.strong,{children:"NPM/Yarn Commands"})})}),"\n"]})]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-android-build-for-ui-testing_1.png"}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/firebase-test-lab",children:"Firebase Test Lab for Android"})})," step has been added as an example. You can use the APK you produce for UI testing in any component you choose."]})}),"\n",(0,s.jsx)(i.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(i.p,{children:"This step contains some input variable(s). It needs these variable(s) to work. The table below gives explanation for this variable(s)."}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-android-build-for-ui-testing_2.png",alt:"image2"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Variable Name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Status"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_REPOSITORY_DIR"})}),(0,s.jsxs)(i.td,{children:["This variable represents the path of the cloned Git repository. If this step runs after the ",(0,s.jsx)(i.a,{href:"/workflows/common-workflow-steps/git-clone",children:"Git Clone"})," step, the variable will be automatically populated."]}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_MODULE"})}),(0,s.jsxs)(i.td,{children:["This variable specifies the project module to be built. This variable can also be set via the build ",(0,s.jsx)(i.a,{href:"/build/build-process-management/build-profile-configuration",children:"Configuration"}),". In Android Studio, you can locate the available modules for your project. For more information, please refer to this ",(0,s.jsx)(i.a,{href:"https://developer.android.com/studio/projects#ApplicationModules",children:"Android document"}),"."]}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_PROJECT_PATH"})}),(0,s.jsxs)(i.td,{children:["Specifies the project path. If your project that needs to be built is ",(0,s.jsx)(i.strong,{children:"not located"})," in the root directory where it was cloned from Git, you should provide the subpath as a relative path."]}),(0,s.jsx)(i.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,s.jsx)(i.p,{children:"The output(s) resulting from the operation of this component are as follows:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Variable Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"AC_APK_PATH"})}),(0,s.jsxs)(i.td,{children:["Path for the generated ",(0,s.jsx)(i.strong,{children:"APK"})," file. This path will be created after the ",(0,s.jsx)(i.strong,{children:"Android Build for UI Testing"})," step runs."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"AC_TEST_APK_PATH"})}),(0,s.jsxs)(i.td,{children:["Path for the generated ",(0,s.jsx)(i.code,{children:"*androidTest.apk"})," file. This output can be utilized wherever necessary for UI testing."]})]})]})]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-android-build-ui-test-component.git",children:(0,s.jsx)(t,{url:"https://github.com/appcircleio/appcircle-android-build-ui-test-component.git",title:"GitHub - appcircleio/appcircle-android-build-ui-test-component",description:"Contribute to appcircleio/appcircle-android-build-ui-test-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/ae52ec6615086b539825a765dfad2b2f67f7f6da753da498ec762fd4b2379da0/appcircleio/appcircle-android-build-ui-test-component"})})})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},69678:(e,i,t)=>{t.d(i,{A:()=>s});t(96540);var r=t(74848);function s(e){let{url:i,alt:t}=e;return(0,r.jsx)("img",{className:"screenshot",src:i,alt:t||"Screenshot"})}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>d});var r=t(96540);const s={},n=r.createContext(s);function o(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);
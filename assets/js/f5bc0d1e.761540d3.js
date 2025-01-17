"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[68191],{64318:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"workflows/android-specific-workflow-steps/firebase-test-lab","title":"Firebase Test Lab for Android","description":"Integrate Appcircle with Firebase Test Lab for continuous Android app testing. Prerequisites include Android Build for UI Testing.","source":"@site/docs/workflows/android-specific-workflow-steps/firebase-test-lab.md","sourceDirName":"workflows/android-specific-workflow-steps","slug":"/workflows/android-specific-workflow-steps/firebase-test-lab","permalink":"/workflows/android-specific-workflow-steps/firebase-test-lab","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/android-specific-workflow-steps/firebase-test-lab.md","tags":[{"inline":false,"label":"android","permalink":"/tags/android","description":"Description for android"},{"inline":false,"label":"test","permalink":"/tags/test","description":"Description for test"},{"inline":false,"label":"firebase","permalink":"/tags/firebase","description":"Description for firebase"},{"inline":false,"label":"test lab","permalink":"/tags/test-lab","description":"Description for test lab"},{"inline":false,"label":"continuous testing","permalink":"/tags/continuous-testing","description":"Description for continuous testing"},{"inline":false,"label":"ui testing","permalink":"/tags/ui-testing","description":"Description for ui testing"},{"inline":false,"label":"robo testing","permalink":"/tags/robo-testing","description":"Description for robo testing"},{"inline":false,"label":"instrumentation testing","permalink":"/tags/instrumentation-testing","description":"Description for instrumentation testing"}],"version":"current","frontMatter":{"title":"Firebase Test Lab for Android","description":"Integrate Appcircle with Firebase Test Lab for continuous Android app testing. Prerequisites include Android Build for UI Testing.","tags":["android","test","firebase","test lab","continuous testing","ui testing","robo testing","instrumentation testing"]},"sidebar":"mySidebar","previous":{"title":"Detekt","permalink":"/workflows/android-specific-workflow-steps/detekt"},"next":{"title":"Gradle Runner","permalink":"/workflows/android-specific-workflow-steps/gradle-runner"}}');var r=s(74848),n=s(28453),o=s(69678);const a={title:"Firebase Test Lab for Android",description:"Integrate Appcircle with Firebase Test Lab for continuous Android app testing. Prerequisites include Android Build for UI Testing.",tags:["android","test","firebase","test lab","continuous testing","ui testing","robo testing","instrumentation testing"]},d="Firebase Test Lab for Android",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Setting Up a Firebase Project and a Service Account",id:"1-setting-up-a-firebase-project-and-a-service-account",level:3},{value:"2. Build Workflow Configuration for Firebase Test Lab",id:"2-build-workflow-configuration-for-firebase-test-lab",level:3},{value:"Input Variables",id:"input-variables",level:2},{value:"Output Variables",id:"output-variables",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{ExternalUrlRef:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"firebase-test-lab-for-android",children:"Firebase Test Lab for Android"})}),"\n",(0,r.jsxs)(t.p,{children:["Appcircle is integrated with the ",(0,r.jsx)(t.a,{href:"https://firebase.google.com/products/test-lab",children:"Firebase Test Lab"})," for continuous testing. Your app can be built in Appcircle and directly deployed to the Firebase Test Lab to run automated tests."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["Before running the ",(0,r.jsx)(t.strong,{children:"Firebase Test Lab for Android"})," step, you must complete certain prerequisites, as detailed in the table below:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/workflows/android-specific-workflow-steps/android-build-for-ui-testing",children:(0,r.jsx)(t.strong,{children:"Android Build for UI Testing"})})}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.strong,{children:"Android Build for UI Testing"})," step must be executed to obtain the necessary Android application outputs for processing."]})]})})]}),"\n",(0,r.jsx)(t.p,{children:"In addition to the steps you need to run on Appcircle, there are also adjustments you need to make on the Firebase Test Lab side. These adjustments can be made as follows:"}),"\n",(0,r.jsx)(t.h3,{id:"1-setting-up-a-firebase-project-and-a-service-account",children:"1. Setting Up a Firebase Project and a Service Account"}),"\n",(0,r.jsxs)(t.p,{children:["To begin with the ",(0,r.jsx)(t.a,{href:"https://firebase.google.com/products/test-lab",children:"Firebase Test Lab"}),", you need to have an associated Firebase Project, which is created in the ",(0,r.jsx)(t.a,{href:"https://console.firebase.google.com",children:"Firebase console"}),". Go to the console, press the ",(0,r.jsx)(t.code,{children:"Add Project"})," button, and specify the project name and other settings:"]}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/image (45).png"}),"\n",(0,r.jsxs)(t.p,{children:["Once your project is created, go to the ",(0,r.jsx)(t.a,{href:"https://console.cloud.google.com/iam-admin/serviceaccounts/",children:"Google Cloud Platform console"})," to create a service account. Press the ",(0,r.jsx)(t.code,{children:"Create Service Account"})," button and follow the prompts to create a service account with the ",(0,r.jsx)(t.strong,{children:"Editor"})," role:"]}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/image (49).png"}),"\n",(0,r.jsxs)(t.p,{children:["After the service account is created, click on the three-dot (",(0,r.jsx)(t.strong,{children:"\u22ee"}),") menu next to the service account and press ",(0,r.jsx)(t.code,{children:"Create Key"}),"."]}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/image (50).png"}),"\n",(0,r.jsxs)(t.p,{children:["Select the key format as ",(0,r.jsx)(t.code,{children:"JSON"})," and download the created key. This key will be used by Appcircle to deploy apps to the Firebase Test Lab."]}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/image (51).png"}),"\n",(0,r.jsxs)(t.p,{children:["As the final step, go to the ",(0,r.jsx)(t.a,{href:"https://console.developers.google.com/apis/library",children:"Google Developers Console API Library page"})," and find and enable the following APIs:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Google Cloud Testing API"}),"\n",(0,r.jsx)(t.li,{children:"Cloud Tool Results API."}),"\n"]}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/image (61).png"}),"\n",(0,r.jsx)(t.h3,{id:"2-build-workflow-configuration-for-firebase-test-lab",children:"2. Build Workflow Configuration for Firebase Test Lab"}),"\n",(0,r.jsxs)(t.p,{children:["To utilize the Firebase Test Lab in your builds, open the ",(0,r.jsx)(t.a,{href:"/workflows",children:"workflow editor"})," and add the ",(0,r.jsx)(t.strong,{children:"Firebase Test Lab for Android"})," step after the build or sign steps. If you want to run instrumentation tests, also add the ",(0,r.jsx)(t.strong,{children:"Android Build for UI Testing"})," step before the ",(0,r.jsx)(t.strong,{children:"Firebase Test Lab for Android"})," step."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["If you want to run ",(0,r.jsx)(t.strong,{children:"robo"})," tests, it is highly recommended not to add the ",(0,r.jsx)(t.strong,{children:"Android Build for UI Testing"})," step."]})}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/firebasetestlab-workflow-select.png"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to use the UI Test Build output or the Signed Build output in the Firebase Test Lab, add any of these steps before the ",(0,r.jsx)(t.strong,{children:"Firebase Test Lab for Android"})," step and take note of the output path of these steps. You will need this environment variable for testing configuration."]}),"\n",(0,r.jsx)(t.h2,{id:"input-variables",children:"Input Variables"}),"\n",(0,r.jsx)(t.p,{children:"This step contains some input variable(s). It needs these variable(s) to work. The table below gives explanation for this variable(s)."}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/firebasetestlab-android-firebase-workflow.png"}),"\n",(0,r.jsxs)(t.admonition,{title:"Sensitive Variables",type:"danger",children:[(0,r.jsxs)(t.p,{children:["Please do not use sensitive variables such as ",(0,r.jsx)(t.strong,{children:"Username"}),", ",(0,r.jsx)(t.strong,{children:"Password"}),", ",(0,r.jsx)(t.strong,{children:"API Key"}),", or ",(0,r.jsx)(t.strong,{children:"Personal Access Key"})," directly within the step."]}),(0,r.jsxs)(t.p,{children:["We recommend using ",(0,r.jsx)(t.a,{href:"/environment-variables/managing-variables",children:(0,r.jsx)(t.strong,{children:"Environment Variables"})})," groups for such sensitive variables."]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Status"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_FIREBASE_PROJECT_ID"})}),(0,r.jsx)(t.td,{children:"Specifies the name of the Firebase project created."}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_FIREBASE_KEY_FILE"})}),(0,r.jsxs)(t.td,{children:["Specifies the name of the key file uploaded as an environment variable (",(0,r.jsx)(t.code,{children:"$"})," is required before the key name)."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_FIREBASE_TEST_TYPE"})}),(0,r.jsxs)(t.td,{children:["Specifies the test type. ",(0,r.jsx)(t.code,{children:"robo"})," and ",(0,r.jsx)(t.code,{children:"instrumentation"})," are supported."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_FIREBASE_BUCKET_NAME"})}),(0,r.jsx)(t.td,{children:"Specifies the bucket name to store the test results in a Google Cloud Storage bucket."}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APK_PATH"})}),(0,r.jsxs)(t.td,{children:["The default value is the APK produced by the ",(0,r.jsx)(t.strong,{children:"Android Build"})," or ",(0,r.jsx)(t.strong,{children:"Android Build for UI Testing"})," step. You can specify a different environment variable to use the APK files produced in other steps."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_TEST_APK_PATH"})}),(0,r.jsxs)(t.td,{children:["Specify the environment variable as the path of the APK build for UI testing. The default value is the APK produced by the ",(0,r.jsx)(t.strong,{children:"Android Build for UI Testing"})," step."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_FIREBASE_EXTRA_ARGS"})}),(0,r.jsxs)(t.td,{children:["Firebase Test Extra Arguments ",(0,r.jsx)(t.code,{children:"(e.g., --timeout=3m)"}),". For further configuration of the test run, please refer to the ",(0,r.jsx)(t.a,{href:"https://cloud.google.com/sdk/gcloud/reference/firebase/test/android/run",children:"Google Cloud CLI"})," documentation."]}),(0,r.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Once everything is set up, press save to save your step configuration. Then you can configure and run your build just like any other app."}),"\n",(0,r.jsx)(t.h2,{id:"output-variables",children:"Output Variables"}),"\n",(0,r.jsxs)(t.p,{children:["This step does not produce any output as a variable. However, after your build is done, you can view the results of the ",(0,r.jsx)(t.strong,{children:"Firebase Test Lab for Android"})," step in the build logs."]}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/firebasetestlab-android-test-result.png"}),"\n",(0,r.jsxs)(t.p,{children:["The full details of the tests are accessible in the ",(0,r.jsx)(t.a,{href:"https://console.firebase.google.com",children:"Firebase console"})," and in your Google Cloud Storage bucket for analysis."]}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/image (63).png"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-android-firebase-test-lab-component",children:(0,r.jsx)(s,{url:"https://github.com/appcircleio/appcircle-android-firebase-test-lab-component",title:"GitHub - appcircleio/appcircle-android-firebase-test-lab-component",description:"Contribute to appcircleio/appcircle-android-firebase-test-lab-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/f13c682493dbfe48a9589c91ee10a9bcf9875b2033e0d8de70af37cdb2f2492a/appcircleio/appcircle-android-firebase-test-lab-component"})})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},69678:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var i=s(74848);function r(e){let{url:t,alt:s}=e;return(0,i.jsx)("img",{className:"screenshot",src:t,alt:s||"Screenshot"})}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var i=s(96540);const r={},n=i.createContext(r);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
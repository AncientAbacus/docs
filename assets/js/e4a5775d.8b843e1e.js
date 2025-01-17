"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[69383],{98257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"workflows/android-specific-workflow-steps/test-reports-for-android","title":"Test Reports for Android","description":"Explore the Test Report feature for Android in Appcircle. Understand how it presents test results and code coverage in a user-friendly interface.","source":"@site/docs/workflows/android-specific-workflow-steps/test-reports-for-android.md","sourceDirName":"workflows/android-specific-workflow-steps","slug":"/workflows/android-specific-workflow-steps/test-reports-for-android","permalink":"/workflows/android-specific-workflow-steps/test-reports-for-android","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/android-specific-workflow-steps/test-reports-for-android.md","tags":[{"inline":false,"label":"test","permalink":"/tags/test","description":"Description for test"},{"inline":false,"label":"test report","permalink":"/tags/test-report","description":"Description for test report"},{"inline":false,"label":"test result","permalink":"/tags/test-result","description":"Description for test result"},{"inline":false,"label":"automation","permalink":"/tags/automation","description":"Description for automation"}],"version":"current","frontMatter":{"title":"Test Reports for Android","description":"Explore the Test Report feature for Android in Appcircle. Understand how it presents test results and code coverage in a user-friendly interface.","tags":["test","test report","test result","automation"]},"sidebar":"mySidebar","previous":{"title":"Lint","permalink":"/workflows/android-specific-workflow-steps/lint"},"next":{"title":"Wait for Android Emulator","permalink":"/workflows/android-specific-workflow-steps/wait-for-android-emulator"}}');var i=r(74848),n=r(28453),o=r(69678);const c={title:"Test Reports for Android",description:"Explore the Test Report feature for Android in Appcircle. Understand how it presents test results and code coverage in a user-friendly interface.",tags:["test","test report","test result","automation"]},l="Test Reports for Android",d={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{ExternalUrlRef:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"test-reports-for-android",children:"Test Reports for Android"})}),"\n",(0,i.jsxs)(t.p,{children:["The Appcircle ",(0,i.jsx)(t.strong,{children:"Test Report"})," step displays your test results and code coverage in an aesthetically pleasing user interface."]}),"\n",(0,i.jsx)(t.p,{children:"This component supports the following test and coverage formats:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://junit.org",children:(0,i.jsx)(t.strong,{children:"JUnit"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.jacoco.org",children:(0,i.jsx)(t.strong,{children:"JaCoCo"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://cobertura.github.io/cobertura",children:(0,i.jsx)(t.strong,{children:"Cobertura"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://lcov-viewer.netlify.app",children:(0,i.jsx)(t.strong,{children:"lcov.info"})})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For additional details, please refer to the document:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/continuous-testing/android-testing/running-android-unit-tests#generating-test-report",children:(0,i.jsx)(t.strong,{children:"Generating Test Report"})})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["Before running the ",(0,i.jsx)(t.strong,{children:"Test Reports for Android"})," step, you must complete certain prerequisites, as detailed in the table below:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/android-specific-workflow-steps/android-unit-tests",children:(0,i.jsx)(t.strong,{children:"Android Unit Tests"})})}),(0,i.jsx)(t.td,{children:"This step must be executed to obtain the test report output."})]})})]}),"\n",(0,i.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-test-report_1.png"}),"\n",(0,i.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,i.jsx)(t.p,{children:"This step contains some input variable(s). It needs these variable(s) to work. The table below gives explanation for this variable(s)."}),"\n",(0,i.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-test-report_2.png"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Status"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_TEST_RESULT_PATH"})}),(0,i.jsx)(t.td,{children:"Specifies the directory and its subdirectories where compatible test files will be searched."}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_COVERAGE_RESULT_PATH"})}),(0,i.jsx)(t.td,{children:"Specifies the coverage path."}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_JACOCO_COVERAGE_TYPE"})}),(0,i.jsxs)(t.td,{children:["Determines the parameter in your JaCoCo report based on which the coverage will be calculated. This setting is necessary when using JaCoCo parseable coverage results and specifying the coverage result path. Types description can be found in this ",(0,i.jsx)(t.a,{href:"/continuous-testing/android-testing/running-android-unit-tests#jacoco-test-coverage",children:"documentation"})]}),(0,i.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,i.jsx)(t.p,{children:"The output(s) resulting from the operation of this component are as follows:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"AC_TEST_REPORT_JSON_PATH"})}),(0,i.jsx)(t.td,{children:"Specifies the path of the JSON report."})]})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-test-report-component",children:(0,i.jsx)(r,{url:"https://github.com/appcircleio/appcircle-test-report-component",title:"GitHub - appcircleio/appcircle-test-report-component: Appcircle Test Report Component",description:"Appcircle Test Report Component. Contribute to appcircleio/appcircle-test-report-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/2ce59f6fc37c8dae4c8043a40d0e22b82d305261c6ca1abd498bc94df9d63c14/appcircleio/appcircle-test-report-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},69678:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(74848);function i(e){let{url:t,alt:r}=e;return(0,s.jsx)("img",{className:"screenshot",src:t,alt:r||"Screenshot"})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var s=r(96540);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);
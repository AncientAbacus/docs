"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[14982],{35019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"workflows/android-specific-workflow-steps/azure-bot-for-detekt-report","title":"Azure DevOps Bot for Detekt Report","description":"The Azure DevOps Bot for Detekt Report step analyze your Detekt report and post the report details within the opened pull request in Azure DevOps.","source":"@site/docs/workflows/android-specific-workflow-steps/azure-bot-for-detekt-report.md","sourceDirName":"workflows/android-specific-workflow-steps","slug":"/workflows/android-specific-workflow-steps/azure-bot-for-detekt-report","permalink":"/workflows/android-specific-workflow-steps/azure-bot-for-detekt-report","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/android-specific-workflow-steps/azure-bot-for-detekt-report.md","tags":[{"inline":false,"label":"detekt","permalink":"/tags/detekt","description":"Description for detekt"},{"inline":false,"label":"report","permalink":"/tags/report","description":"Description for report"},{"inline":false,"label":"analysis","permalink":"/tags/analysis","description":"Description for analysis"}],"version":"current","frontMatter":{"title":"Azure DevOps Bot for Detekt Report","description":"The Azure DevOps Bot for Detekt Report step analyze your Detekt report and post the report details within the opened pull request in Azure DevOps.","tags":["detekt","report","analysis"]},"sidebar":"mySidebar","previous":{"title":"AppSweep Mobile Security Testing","permalink":"/workflows/android-specific-workflow-steps/appsweep-mobile-security-testing"},"next":{"title":"BrowserStack App Automate - Espresso","permalink":"/workflows/android-specific-workflow-steps/browserstack-app-automate-espresso"}}');var o=r(74848),i=r(28453),n=r(69678);const c={title:"Azure DevOps Bot for Detekt Report",description:"The Azure DevOps Bot for Detekt Report step analyze your Detekt report and post the report details within the opened pull request in Azure DevOps.",tags:["detekt","report","analysis"]},d="Azure DevOps Bot for Detekt Report",a={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{ExternalUrlRef:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"azure-devops-bot-for-detekt-report",children:"Azure DevOps Bot for Detekt Report"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Azure DevOps Bot for Detekt Report"})," step analyzes your ",(0,o.jsx)(t.a,{href:"https://detekt.dev/docs/introduction/reporting/",children:"Detekt report"})," and posts the details to an open pull request in ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/devops/",children:"Azure DevOps"}),". It also allows you to modify the ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/rest/api/azure/devops/git/pull-request-statuses",children:"pull request status"}),"."]}),"\n",(0,o.jsxs)(t.admonition,{type:"caution",children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://danger.systems/",children:"Danger"})," operates on a similar principle, allowing use of the ",(0,o.jsx)(t.a,{href:"/workflows/common-workflow-steps/danger",children:"Danger step"})," with platforms such as ",(0,o.jsx)(t.a,{href:"https://github.com/",children:"GitHub"}),", ",(0,o.jsx)(t.a,{href:"https://about.gitlab.com/",children:"GitLab"}),", and ",(0,o.jsx)(t.a,{href:"https://bitbucket.org/product/guides/getting-started/overview#a-brief-overview-of-bitbucket",children:"Bitbucket"}),". However, Danger currently does not support Azure DevOps."]}),(0,o.jsx)(t.p,{children:"For more information, refer to the Appcircle blog post about Danger:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://appcircle.io/blog/danger-in-ci-automate-your-mobile-code-reviews",children:(0,o.jsx)(t.strong,{children:"Danger in CI: Automate Your Mobile Code Reviews"})}),"."]}),"\n"]})]}),"\n",(0,o.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.p,{children:["Before running the ",(0,o.jsx)(t.strong,{children:"Azure DevOps Bot for Detekt Report"})," step, you must complete certain prerequisites, as detailed in the table below:"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"/workflows/android-specific-workflow-steps/detekt",children:(0,o.jsx)(t.strong,{children:"Detekt"})})}),(0,o.jsxs)(t.td,{children:["In order to generate the ",(0,o.jsx)(t.a,{href:"https://detekt.dev/docs/introduction/reporting/",children:"Detekt report"}),", the ",(0,o.jsx)(t.strong,{children:"Detekt"})," step must be executed beforehand."]})]})})]}),"\n",(0,o.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-azure-bot-for-detekt-report_1.png"}),"\n",(0,o.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,o.jsx)(t.p,{children:"This step contains some input variable(s). It needs these variable(s) to work. The table below gives explanation for this variable(s)."}),"\n",(0,o.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-azure-bot-for-detekt-report_2.png"}),"\n",(0,o.jsxs)(t.admonition,{title:"Sensitive Variables",type:"danger",children:[(0,o.jsxs)(t.p,{children:["Please do not use sensitive variables such as ",(0,o.jsx)(t.strong,{children:"Username"}),", ",(0,o.jsx)(t.strong,{children:"Password"}),", ",(0,o.jsx)(t.strong,{children:"API Key"}),", or ",(0,o.jsx)(t.strong,{children:"Personal Access Key"})," directly within the step."]}),(0,o.jsxs)(t.p,{children:["We recommend using ",(0,o.jsx)(t.a,{href:"/environment-variables/managing-variables",children:(0,o.jsx)(t.strong,{children:"Environment Variables"})})," groups for such sensitive variables."]})]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Variable Name"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Status"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AC_AZURE_ORG_NAME"})}),(0,o.jsxs)(t.td,{children:["Specifies the name of the Azure DevOps organization. You can find it in the Azure DevOps URL:  ",(0,o.jsx)(t.code,{children:"https://dev.azure.com/{Your_Organization}"}),". Check out ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/answers/questions/1080972/find-organization-name",children:"this document"})," to locate the organization name."]}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AC_AZURE_PROJECT_NAME"})}),(0,o.jsxs)(t.td,{children:["Specifies the name of the Azure DevOps project. You can find it in the Azure DevOps URL: ",(0,o.jsx)(t.code,{children:"https://dev.azure.com/{Your_Organization}/{Your_Project}"}),". For more information about Azure DevOps projects, refer to ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/devops/user-guide/project-admin-tutorial?toc=%2Fazure%2Fdevops%2Forganizations%2Ftoc.json&view=azure-devops",children:"this document"}),"."]}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AC_AZURE_REPO_NAME"})}),(0,o.jsxs)(t.td,{children:["Specifies the name of the Azure DevOps repository. Check out ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/devops/repos/git/repository-settings",children:"this document"})," for more details about Azure DevOps repositories."]}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AC_AZURE_BASE_URL"})}),(0,o.jsxs)(t.td,{children:["Specifies the base URL of Azure DevOps. The default value is ",(0,o.jsx)(t.code,{children:"https://dev.azure.com"}),"."]}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AC_AZURE_API_KEY"})}),(0,o.jsxs)(t.td,{children:["Specifies the API key for Azure DevOps. Refer to ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate",children:"this document"})," for details on how to obtain it."]}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AC_DETEKT_FILE_PATH"})}),(0,o.jsxs)(t.td,{children:["Specifies the file path of the Detekt report. If you used the ",(0,o.jsx)(t.strong,{children:"Detekt"})," step in the previous stage, this section will be automatically filled. The default value is ",(0,o.jsx)(t.code,{children:"$AC_DETEKT_OUTPUT_PATH"}),", which represents the output of the ",(0,o.jsx)(t.strong,{children:"Detekt"})," step."]}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AC_DOMAIN_NAME"})}),(0,o.jsxs)(t.td,{children:["Specifies the domain name of Appcircle. The default value is ",(0,o.jsx)(t.code,{children:"my.appcircle.io"}),", which is the domain for Appcircle Cloud."]}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AC_AZURE_API_VERSION"})}),(0,o.jsxs)(t.td,{children:["Specifies the version of the Azure API, for example: ",(0,o.jsx)(t.code,{children:"7.1"}),". Refer to the ",(0,o.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/devops/integrate/concepts/rest-api-versioning",children:"REST API versioning"})," document for more information."]}),(0,o.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-android-azure-bot-for-detekt-component.git",children:(0,o.jsx)(r,{url:"https://github.com/appcircleio/appcircle-android-azure-bot-for-detekt-component.git",title:"GitHub - appcircleio/appcircle-android-azure-bot-for-detekt-component: Bot script that allows Detekt outputs to make changes to Azure DevOps Pull Requests.",description:"Bot script that allows Detekt outputs to make changes to Azure DevOps Pull Requests. - appcircleio/appcircle-android-azure-bot-for-detekt-component",image:"https://opengraph.githubassets.com/303e01ec90975fc945b5a5c30e5c6e1cb60861948dbf4e1c729594eca2d4df2d/appcircleio/appcircle-android-azure-bot-for-detekt-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},69678:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var s=r(74848);function o(e){let{url:t,alt:r}=e;return(0,s.jsx)("img",{className:"screenshot",src:t,alt:r||"Screenshot"})}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>c});var s=r(96540);const o={},i=s.createContext(o);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
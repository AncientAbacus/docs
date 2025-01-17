"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[26283],{93978:(e,n,i)=>{i.d(n,{Ay:()=>s,RM:()=>r});var t=i(74848),o=i(28453);const r=[{value:"Need help?",id:"need-help",level:3}];function c(e){const n={a:"a",h3:"h3",...(0,o.R)(),...e.components},{ExternalUrlRef:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"need-help",children:"Need help?"}),"\n",(0,t.jsx)("p",{class:"need-help",children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,t.jsx)("p",{class:"need-help",children:(0,t.jsx)(n.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,t.jsx)(i,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},34120:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"build/manage-the-connections/adding-a-build-profile/connecting-to-github","title":"Connecting to GitHub","description":"Learn how to connect your GitHub repositories to Appcircle","source":"@site/docs/build/manage-the-connections/adding-a-build-profile/connecting-to-github.md","sourceDirName":"build/manage-the-connections/adding-a-build-profile","slug":"/build/manage-the-connections/adding-a-build-profile/connecting-to-github","permalink":"/build/manage-the-connections/adding-a-build-profile/connecting-to-github","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/build/manage-the-connections/adding-a-build-profile/connecting-to-github.md","tags":[{"inline":false,"label":"build profile","permalink":"/tags/build-profile","description":"Description for build profile"},{"inline":false,"label":"connection","permalink":"/tags/connection","description":"Description for connection"},{"inline":false,"label":"github","permalink":"/tags/github","description":"Description for github"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Connecting to GitHub","description":"Learn how to connect your GitHub repositories to Appcircle","tags":["build profile","connection","github"],"sidebar_position":1},"sidebar":"mySidebar","previous":{"title":"Adding a Build Profile & Connecting a Repository","permalink":"/build/manage-the-connections/adding-a-build-profile/"},"next":{"title":"Connecting to GitLab","permalink":"/build/manage-the-connections/adding-a-build-profile/connecting-to-gitlab"}}');var o=i(74848),r=i(28453),c=i(69678),s=i(93978);const a={title:"Connecting to GitHub",description:"Learn how to connect your GitHub repositories to Appcircle",tags:["build profile","connection","github"],sidebar_position:1},l="Connecting to GitHub",p={},u=[{value:"FAQ",id:"faq",level:2},{value:"Unable to grant access to a GitHub organization",id:"unable-to-grant-access-to-a-github-organization",level:3},...s.RM];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"connecting-to-github",children:"Connecting to GitHub"})}),"\n",(0,o.jsx)(n.p,{children:"If you authorize Appcircle to access your repositories on GitHub, you can select the repository that you want to connect in the next screen."}),"\n",(0,o.jsx)(n.p,{children:"If you are a part of an organization, you can also connect your organization's repositories too. To grant Appcircle permission to access the repositories of an organization, you need to have the necessary privileges at the organization level. For GitHub, you have to provide selective access to specific repositories."}),"\n",(0,o.jsxs)(n.p,{children:["In such a case, only the selected repositories will be listed. To be able to view other repositories, you must grant access for them under the Applications section in the account/organization settings screen on GitHub. You can directly access this screen by clicking on the ",(0,o.jsx)(n.strong,{children:"Missing a repository? Grant access from GitHub"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"For connection to GitHub, Appcircle uses GitHub App instead of GitHub OAuth. GitHub App is more secure and newer way implemented by GitHub to external apps to communicate within GitHub in a better fashion."})}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/main-connection.png"}),"\n",(0,o.jsxs)(n.p,{children:["After you click on ",(0,o.jsx)(n.strong,{children:"GitHub"}),", the following screen will appear. This will let you choose between selecting a repository which you are already authorized Appcircle to do or ask your consent about authorizing more repositories."]}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/github-main.png"}),"\n",(0,o.jsx)(n.p,{children:"When you successfully authorize your repository or repositories, the following screen will appear to let you select one for connection:"}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/connect-repository-github.png"}),"\n",(0,o.jsxs)(n.p,{children:["After the connection is successful, you can ",(0,o.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/#view-the-newly-created-build-profile",children:"view your newly created profile"})," and start building!"]}),"\n",(0,o.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,o.jsx)(n.h3,{id:"unable-to-grant-access-to-a-github-organization",children:"Unable to grant access to a GitHub organization"}),"\n",(0,o.jsx)(n.p,{children:"If you are unable to grant access to a specific organization while connecting to GitHub, it is likely that the permission for Appcircle needs an update from the organization application access settings."}),"\n",(0,o.jsx)(n.p,{children:"To resolve, go to Organization Settings ->Third-party access and press edit next to Appcircle to authorize it for the organization."}),"\n",(0,o.jsx)(s.Ay,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},69678:(e,n,i)=>{i.d(n,{A:()=>o});i(96540);var t=i(74848);function o(e){let{url:n,alt:i}=e;return(0,t.jsx)("img",{className:"screenshot",src:n,alt:i||"Screenshot"})}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var t=i(96540);const o={},r=t.createContext(o);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
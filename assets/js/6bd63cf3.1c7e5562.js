"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[31798],{44158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"workflows/common-workflow-steps/authenticate-with-netrc","title":"Authenticate with Netrc","description":"Authenticate with Netrc in your Appcircle workflows","source":"@site/docs/workflows/common-workflow-steps/authenticate-with-netrc.md","sourceDirName":"workflows/common-workflow-steps","slug":"/workflows/common-workflow-steps/authenticate-with-netrc","permalink":"/workflows/common-workflow-steps/authenticate-with-netrc","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/common-workflow-steps/authenticate-with-netrc.md","tags":[{"inline":false,"label":"netrc","permalink":"/tags/netrc","description":"Description for netrc"},{"inline":false,"label":"authentication","permalink":"/tags/authentication","description":"Description for authentication"},{"inline":false,"label":"git","permalink":"/tags/git","description":"Description for git"},{"inline":false,"label":"curl","permalink":"/tags/curl","description":"Description for curl"}],"version":"current","frontMatter":{"title":"Authenticate with Netrc","description":"Authenticate with Netrc in your Appcircle workflows","tags":["netrc","authentication","git","curl"]},"sidebar":"mySidebar","previous":{"title":"Appium Server","permalink":"/workflows/common-workflow-steps/appium-server"},"next":{"title":"AWS Device Farm and Deploy","permalink":"/workflows/common-workflow-steps/aws-device-farm-and-deploy"}}');var i=n(74848),o=n(28453),s=n(69678);const c={title:"Authenticate with Netrc",description:"Authenticate with Netrc in your Appcircle workflows",tags:["netrc","authentication","git","curl"]},a="Authenticate with Netrc",l={},h=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{ExternalUrlRef:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"authenticate-with-netrc",children:"Authenticate with Netrc"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:".netrc"})," file contains login and initialization information used by the auto-login process. You can use this component to add credentials for hosts such as your repositories or external hosts. Git automatically recognizes the ",(0,i.jsx)(t.code,{children:".netrc"})," file. However, if you want to use the ",(0,i.jsx)(t.code,{children:".netrc"})," file with curl, you need to append the ",(0,i.jsx)(t.code,{children:"-n"})," command line parameter. You may also use the ",(0,i.jsx)(t.code,{children:"--netrc-optional"})," parameter if you don't always use the ",(0,i.jsx)(t.code,{children:".netrc"})," file with curl."]}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["There are no prerequisites required before using the ",(0,i.jsx)(t.strong,{children:"Authenticate with Netrc"})," step."]}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsxs)(t.p,{children:["Please note that you should use this step before your ",(0,i.jsx)(t.strong,{children:"Git Clone"})," step. If you want to connect to a repository that requires access permission or pull a private dependency, please pay attention to the step order."]})}),"\n",(0,i.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/BE2792-net_order.png "}),"\n",(0,i.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,i.jsx)(t.p,{children:"This step contains some input variable(s). It needs these variable(s) to work. The table below gives explanation for this variable(s)."}),"\n",(0,i.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/BE2792-net_inputs.png"}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsxs)(t.p,{children:["When using the ",(0,i.jsx)(t.strong,{children:"Authenticate with Netrc"})," component, you need to specify a token or password in the ",(0,i.jsx)(t.code,{children:"$AC_NETRC_PASS"})," parameter within the component. For security reasons, we recommend using ",(0,i.jsx)(t.a,{href:"/environment-variables",children:(0,i.jsx)(t.strong,{children:"Enviroment Variables"})})," in steps where you need to specify the token and password."]})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Status"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_NETRC_HOSTNAME"})}),(0,i.jsxs)(t.td,{children:["Specifies the hostname of the server where the username and password will be used, for example, ",(0,i.jsx)(t.code,{children:"github.com"}),"."]}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_NETRC_USER"})}),(0,i.jsx)(t.td,{children:"Specifies the username of the host."}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_NETRC_PASS"})}),(0,i.jsxs)(t.td,{children:["The password or the ",(0,i.jsx)(t.code,{children:"authentication-token"}),"/",(0,i.jsx)(t.code,{children:"access-token"})," in the respective field, will be used by the host to authenticate you."]}),(0,i.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-netrc-component",children:(0,i.jsx)(n,{url:"https://github.com/appcircleio/appcircle-netrc-component",title:"GitHub - appcircleio/appcircle-netrc-component",description:"Contribute to appcircleio/appcircle-netrc-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/9bc7de0bef4f81ea20698eb47fdfa660249d6be9fb9a8d439b9541642c86551e/appcircleio/appcircle-netrc-component"})})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},69678:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(74848);function i(e){let{url:t,alt:n}=e;return(0,r.jsx)("img",{className:"screenshot",src:t,alt:n||"Screenshot"})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
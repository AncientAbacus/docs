"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[16781],{93642:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"appcircle-api-and-cli/cli-authentication","title":"CLI Authentication","description":"Learn how to authenticate with the Appcircle CLI","source":"@site/docs/appcircle-api-and-cli/cli-authentication.md","sourceDirName":"appcircle-api-and-cli","slug":"/appcircle-api-and-cli/cli-authentication","permalink":"/appcircle-api-and-cli/cli-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/appcircle-api-and-cli/cli-authentication.md","tags":[{"inline":false,"label":"authentication","permalink":"/tags/authentication","description":"Description for authentication"},{"inline":false,"label":"cli token","permalink":"/tags/cli-token","description":"Description for cli token"},{"inline":false,"label":"session token","permalink":"/tags/session-token","description":"Description for session token"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"CLI Authentication","description":"Learn how to authenticate with the Appcircle CLI","tags":["authentication","cli token","session token"],"sidebar_position":2},"sidebar":"mySidebar","previous":{"title":"API Authentication","permalink":"/appcircle-api-and-cli/api-authentication"},"next":{"title":"App Center Migration Tool","permalink":"/appcircle-api-and-cli/appcenter-migration-tool"}}');var c=n(74848),a=n(28453);n(69678);const o={title:"CLI Authentication",description:"Learn how to authenticate with the Appcircle CLI",tags:["authentication","cli token","session token"],sidebar_position:2},r=void 0,l={},p=[{value:"Appcircle CLI",id:"appcircle-cli",level:3},{value:"Using the Personal API Token for CLI Authentication",id:"using-the-personal-api-token-for-cli-authentication",level:3}];function s(e){const i={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components},{ExternalUrlRef:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.h3,{id:"appcircle-cli",children:"Appcircle CLI"}),"\n",(0,c.jsx)(i.p,{children:"Appcircle CLI is a unified command-line tool that provides access to Appcircle platform features, enabling you to manage your projects, builds, and more directly from your terminal."}),"\n",(0,c.jsx)(i.p,{children:"You can install the Appcircle CLI from npm:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"npm install -g @appcircle/cli\n"})}),"\n",(0,c.jsx)(i.p,{children:"or yarn:"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"yarn global add @appcircle/cli\n"})}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://www.npmjs.com/package/@appcircle/cli",children:(0,c.jsx)(n,{url:"https://www.npmjs.com/package/@appcircle/cli",title:"@appcircle/cli",description:"CLI tool for running Appcircle services from the command line. Latest version: 2.3.2, last published: 20 days ago. Start using @appcircle/cli in your project by running `npm i @appcircle/cli`. There are no other projects in the npm registry using @appcircle/cli.",image:"https://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png"})})}),"\n",(0,c.jsx)(i.p,{children:"You can find more information and the open source code of the CLI on GitHub as follows:"}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-cli",children:(0,c.jsx)(n,{url:"https://github.com/appcircleio/appcircle-cli",title:"GitHub - appcircleio/appcircle-cli",description:"Contribute to appcircleio/appcircle-cli development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/0f496a1d934b1aed52b0c91ad7fcc5086864f5fbc287c1ce47a497abda0cf675/appcircleio/appcircle-cli"})})}),"\n",(0,c.jsx)(i.h3,{id:"using-the-personal-api-token-for-cli-authentication",children:"Using the Personal API Token for CLI Authentication"}),"\n",(0,c.jsxs)(i.p,{children:["For authentication, you need to generate a session token from the ",(0,c.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-cli#appcircle-command-line-interface",children:"Appcircle CLI"})," using the Personal API Token and add the generated session token value as an environment variable."]}),"\n",(0,c.jsx)(i.admonition,{type:"tip",children:(0,c.jsxs)(i.p,{children:["For generating Personal API Token, please refer to ",(0,c.jsx)(i.a,{href:"/appcircle-api-and-cli/api-authentication#generatingmanaging-the-personal-api-tokens",children:"API Authentication."})]})}),"\n",(0,c.jsx)(i.p,{children:'Using the Appcircle CLI, create a full access API token using the following command with the Personal API Token specified as "pat":'}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"appcircle login ${pat}\n"})}),"\n",(0,c.jsxs)(i.p,{children:["Then copy the result and set it as the ",(0,c.jsx)(i.code,{children:"AC_ACCESS_TOKEN"})," environment variable."]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(s,{...e})}):s(e)}},69678:(e,i,n)=>{n.d(i,{A:()=>c});n(96540);var t=n(74848);function c(e){let{url:i,alt:n}=e;return(0,t.jsx)("img",{className:"screenshot",src:i,alt:n||"Screenshot"})}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var t=n(96540);const c={},a=t.createContext(c);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);
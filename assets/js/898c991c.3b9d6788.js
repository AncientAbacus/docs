"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[96363],{28496:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"self-hosted-appcircle/install-server/linux-package/configure-server/enterprise-store","title":"Customize Enterprise App Store","description":"Customize the Enterprise App Store on self-hosted installations","source":"@site/docs/self-hosted-appcircle/install-server/linux-package/configure-server/enterprise-store.md","sourceDirName":"self-hosted-appcircle/install-server/linux-package/configure-server","slug":"/self-hosted-appcircle/install-server/linux-package/configure-server/enterprise-store","permalink":"/self-hosted-appcircle/install-server/linux-package/configure-server/enterprise-store","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/install-server/linux-package/configure-server/enterprise-store.md","tags":[{"inline":false,"label":"enterprise app store","permalink":"/tags/enterprise-app-store","description":"Description for enterprise app store"},{"inline":false,"label":"customize","permalink":"/tags/customize","description":"Description for customize"},{"inline":false,"label":"self-hosted","permalink":"/tags/self-hosted","description":"Description for self-hosted"}],"version":"current","sidebarPosition":14,"frontMatter":{"title":"Customize Enterprise App Store","description":"Customize the Enterprise App Store on self-hosted installations","tags":["enterprise app store","customize","self-hosted"],"sidebar_position":14,"sidebar_label":"Customize Enterprise App Store"},"sidebar":"mySidebar","previous":{"title":"Testing Distribution Customization","permalink":"/self-hosted-appcircle/install-server/linux-package/configure-server/testing-distribution"},"next":{"title":"Auto-upgrading Server","permalink":"/self-hosted-appcircle/install-server/linux-package/configure-server/auto-updating"}}');var t=n(74848),i=n(28453);n(69678),n(70344);const o={title:"Customize Enterprise App Store",description:"Customize the Enterprise App Store on self-hosted installations",tags:["enterprise app store","customize","self-hosted"],sidebar_position:14,sidebar_label:"Customize Enterprise App Store"},l="Customize the Enterprise App Store on Self-hosted Installations",c={},a=[{value:"Tab Title Localization",id:"tab-title-localization",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"customize-the-enterprise-app-store-on-self-hosted-installations",children:"Customize the Enterprise App Store on Self-hosted Installations"})}),"\n",(0,t.jsx)(s.p,{children:"Some additional Enterprise App Store settings can be customized for self-hosted installations in order to make them more tailored to your users."}),"\n",(0,t.jsxs)(s.p,{children:["You can change how your store looks using the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"/enterprise-app-store/portal-customization",children:"Customize"})})," screen in the Enterprise App Store module, just like you can with Appcircle Cloud."]}),"\n",(0,t.jsx)(s.p,{children:"For self-hosted specific settings, you should follow the documentation below."}),"\n",(0,t.jsx)(s.h2,{id:"tab-title-localization",children:"Tab Title Localization"}),"\n",(0,t.jsx)(s.p,{children:"You can change the Enterprise App Store tab title according to the language selected on the self-hosted Appcircle server."}),"\n",(0,t.jsxs)(s.p,{children:["For example, you can set a title for ",(0,t.jsx)(s.strong,{children:"TR"})," and a different title for ",(0,t.jsx)(s.strong,{children:"EN"})," language selection on browsers."]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["Appcircle server version ",(0,t.jsx)(s.code,{children:"3.12.1"})," or later is required for this feature."]})}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"Be aware that this will cause a downtime on the Appcircle server."})}),"\n",(0,t.jsxs)(s.p,{children:["If you set titles from ",(0,t.jsx)(s.code,{children:"global.yaml"}),' by following the steps below, your title settings configured from the Enterprise App Store\'s "Customize" page will be overridden.']}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Log in to Appcircle server with SSH or remote connection."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Go to the ",(0,t.jsx)(s.code,{children:"appcircle-server"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"spacetech"})," in the example codes below are example project name."]}),(0,t.jsxs)(s.p,{children:["Please find your own project name and replace ",(0,t.jsx)(s.code,{children:"spacetech"})," with your project name."]}),(0,t.jsxs)(s.p,{children:["To see projects, you can check the ",(0,t.jsx)(s.code,{children:"projects"})," directory."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ls -l ./projects\n"})})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Shutdown Appcircle server."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" down\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Edit the ",(0,t.jsx)(s.code,{children:"global.yaml"})," file of your project."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"vi ./projects/spacetech/global.yaml\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add the ",(0,t.jsx)(s.code,{children:"lang"})," parameter to the ",(0,t.jsx)(s.code,{children:"storeWeb"})," entry."]}),"\n"]}),"\n",(0,t.jsxs)(s.admonition,{type:"caution",children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"storeWeb"})," key should already have been in the ",(0,t.jsx)(s.code,{children:"global.yaml"})," file."]}),(0,t.jsxs)(s.p,{children:["You just need to add the ",(0,t.jsx)(s.code,{children:"lang"})," key and other sub-keys to that section."]}),(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"global.yaml"})," should have only one ",(0,t.jsx)(s.code,{children:"storeWeb"})," key for proper working."]})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"storeWeb:\n  external:\n    subdomain: store\n  customDomain:\n    enabled: true\n    domain: store.spacetech.com\n  lang:\n    TR_STORE_TITLE: Uygulama Ma\u011fazas\u0131\n    EN_STORE_TITLE: App Store\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Apply configuration changes."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" export\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Start Appcircle server."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" up\n'})}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsx)(s.p,{children:"You should check the status of the Appcircle server after boot for any possible errors."}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" check\n'})}),(0,t.jsxs)(s.p,{children:["You should see the message: ",(0,t.jsx)(s.em,{children:'"All services are running successfully."'})]})]}),"\n",(0,t.jsx)(s.p,{children:"To see the new configuration updates on the store, follow the steps below:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Go to the Enterprise App Store page of your organization with a browser."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For example, ",(0,t.jsx)(s.code,{children:"store.spacetech.com"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Check the tab title. For our sample configuration,"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If the language is ",(0,t.jsx)(s.strong,{children:"TR"}),' selected, then you should see "Uygulama Ma\u011fazas\u0131" in the tab title.']}),"\n",(0,t.jsxs)(s.li,{children:["If the language is ",(0,t.jsx)(s.strong,{children:"EN"}),' selected, then you should see "App Store" in the tab title.']}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},70344:(e,s,n)=>{n.d(s,{A:()=>a});var r,t,i=n(96540);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(null,arguments)}const l=e=>{let{title:s,titleId:n,...l}=e;return i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"feather feather-file-text",viewBox:"0 0 24 24","aria-labelledby":n},l),s?i.createElement("title",{id:n},s):null,r||(r=i.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),t||(t=i.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var c=n(74848);function a(e){let{children:s,url:n}=e;return(0,c.jsxs)("a",{href:n,className:"content-ref-card",children:[(0,c.jsx)(l,{title:"File Icon",className:"file-icon"}),s]})}},69678:(e,s,n)=>{n.d(s,{A:()=>t});n(96540);var r=n(74848);function t(e){let{url:s,alt:n}=e;return(0,r.jsx)("img",{className:"screenshot",src:s,alt:n||"Screenshot"})}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var r=n(96540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);
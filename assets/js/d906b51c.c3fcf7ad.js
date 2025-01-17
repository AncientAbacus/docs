"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[38231],{19147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"account/my-organization/security/credentials/adding-an-app-store-connect-api-key","title":"App Store Connect API Key","description":"Learn how to generate an App Store Connect API Key for linking your Apple Developer account to Appcircle","source":"@site/docs/account/my-organization/security/credentials/adding-an-app-store-connect-api-key.md","sourceDirName":"account/my-organization/security/credentials","slug":"/account/my-organization/security/credentials/adding-an-app-store-connect-api-key","permalink":"/account/my-organization/security/credentials/adding-an-app-store-connect-api-key","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/account/my-organization/security/credentials/adding-an-app-store-connect-api-key.md","tags":[{"inline":false,"label":"account","permalink":"/tags/account","description":"Description for account"},{"inline":false,"label":"my organization","permalink":"/tags/my-organization","description":"Description for my organization"},{"inline":false,"label":"api integrations","permalink":"/tags/api-integrations","description":"Description for api integrations"},{"inline":false,"label":"app store connect","permalink":"/tags/app-store-connect","description":"Description for app store connect"},{"inline":false,"label":"app store connect api key","permalink":"/tags/app-store-connect-api-key","description":"Description for app store connect api key"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"App Store Connect API Key","description":"Learn how to generate an App Store Connect API Key for linking your Apple Developer account to Appcircle","tags":["account","my organization","api integrations","app store connect","app store connect api key"],"sidebar_position":2},"sidebar":"mySidebar","previous":{"title":"Credentials","permalink":"/account/my-organization/security/credentials/"},"next":{"title":"Google Play Service Account","permalink":"/account/my-organization/security/credentials/adding-google-play-service-account"}}');var i=t(74848),r=t(28453),a=t(69678);const s={title:"App Store Connect API Key",description:"Learn how to generate an App Store Connect API Key for linking your Apple Developer account to Appcircle",tags:["account","my organization","api integrations","app store connect","app store connect api key"],sidebar_position:2},c="App Store Connect API Key",p={},l=[{value:"Login to App Store Connect",id:"login-to-app-store-connect",level:2},{value:"Generating a New Key",id:"generating-a-new-key",level:2},{value:"Downloading the Key",id:"downloading-the-key",level:3},{value:"Linking Appcircle with App Store Connect",id:"linking-appcircle-with-app-store-connect",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components},{ExternalUrlRef:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"app-store-connect-api-key",children:"App Store Connect API Key"})}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/A0OgvrX5L-U",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsx)(n.p,{children:"You can add, delete and manage iOS Certificates and Provisioning Profiles manually using Appcircle. There is also an easier way. By linking your Apple Developer account to Appcircle, you can see a list of certificates and provisioning profiles and pick the ones you want to use for building and distributing."}),"\n",(0,i.jsxs)(n.p,{children:["To link your Apple Developer account, ",(0,i.jsx)(n.strong,{children:"you need an App Store Connect API Key"})," from Apple's ",(0,i.jsx)(n.strong,{children:"App Store Connect Panel"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"login-to-app-store-connect",children:"Login to App Store Connect"}),"\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://appstoreconnect.apple.com",children:(0,i.jsx)(t,{url:"https://appstoreconnect.apple.com",title:"appstoreconnect.apple.com",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})," and login with your account."]}),"\n",(0,i.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/app-store-connect-logged-in-low (1).jpg"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Make sure that the correct team is selected on the top right. For developer accounts that belong to multiple teams, this is important."})}),"\n",(0,i.jsxs)(n.p,{children:["Once the team is correct, select ",(0,i.jsx)(n.strong,{children:"Users and Access"})," from the menu:"]}),"\n",(0,i.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/app-store-connect-logged-in-selected-low (1).jpg"}),"\n",(0,i.jsxs)(n.p,{children:["After navigating to ",(0,i.jsx)(n.strong,{children:"Users and Access"}),", you will see 4 tabs next to the title. Select the ",(0,i.jsx)(n.strong,{children:"Keys"})," tab. Then make sure that ",(0,i.jsx)(n.strong,{children:"App Store Connect API"})," is selected from the list on the left."]}),"\n",(0,i.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/api-keys-tab-low (1).jpg"}),"\n",(0,i.jsx)(n.h2,{id:"generating-a-new-key",children:"Generating a New Key"}),"\n",(0,i.jsx)(n.p,{children:"To generate a new key, press the + button."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Only Account Holders can enable the API Key generation. If you see a disabled ",(0,i.jsx)(n.strong,{children:"Request Access"})," button, contact your account holder and make them follow the steps above. After they request access, you can create new keys."]})}),"\n",(0,i.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/api-keys-add-new-low (1).jpg"}),"\n",(0,i.jsx)(n.p,{children:"A modal popup will ask you to enter a name and add roles for this key:"}),"\n",(0,i.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/api-keys-new-modal-low.jpg"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["The Admin access is required to create new and download certificates or provisioning profiles. You can also give access to certain users, and on per app basis, but they require additional configuration from Apple Developer Portal.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.br,{}),"\n","To see a list of permissions each role has, visit: ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/support/roles/",children:(0,i.jsx)(t,{url:"https://developer.apple.com/support/roles/",title:"Apple Developer Program Roles - Manage your team - Account - Help - Apple Developer",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})]})}),"\n",(0,i.jsx)(n.h3,{id:"downloading-the-key",children:"Downloading the Key"}),"\n",(0,i.jsx)(n.p,{children:"After generating the key, download the key file by pressing Download API Key next to it."}),"\n",(0,i.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/download-api-key-low (2).jpg"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"You can only download the file once"}),". If you lose the file, you need to generate a new key."]})}),"\n",(0,i.jsx)(n.h2,{id:"linking-appcircle-with-app-store-connect",children:"Linking Appcircle with App Store Connect"}),"\n",(0,i.jsxs)(n.p,{children:["Adding a key to Appcircle is pretty easy. ",(0,i.jsx)(n.strong,{children:"Go to your organization"})," by either selecting the bottom left button from the toolbar, or picking it from the menu:"]}),"\n",(0,i.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/appcircle-admin-low.jpg"}),"\n",(0,i.jsxs)(n.p,{children:["On the Organization screen, select **Add New **on ",(0,i.jsxs)(n.strong,{children:["App Store Connect API Keys ",(0,i.jsx)(n.strong,{children:"list item"}),":"]})]}),"\n",(0,i.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/appcircle-organization-low.png"}),"\n",(0,i.jsxs)(n.p,{children:["On the form, upload the ",(0,i.jsx)(n.strong,{children:".p8"})," key file downloaded from App Store Connect:"]}),"\n",(0,i.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/image (93).png"}),"\n",(0,i.jsxs)(n.p,{children:["Fill in the rest of the form. You can find the ",(0,i.jsx)(n.strong,{children:"Key ID"})," and ",(0,i.jsx)(n.strong,{children:"Issuer ID"})," from App Store Connect Panel here:"]}),"\n",(0,i.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/keyid-issuerid-low (1).jpg"}),"\n",(0,i.jsx)(n.p,{children:"Copy and paste them to the form in Appcircle, give it a name, and save."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"You can add multiple keys. We'll ask you which key to use while downloading a certificate."})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},69678:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(74848);function i(e){let{url:n,alt:t}=e;return(0,o.jsx)("img",{className:"screenshot",src:n,alt:t||"Screenshot"})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
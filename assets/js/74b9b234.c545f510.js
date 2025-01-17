"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[9120],{7391:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"self-hosted-appcircle/self-hosted-runner/configure-runner/runner-service","title":"Service Configuration","description":"Learn how to configure self-hosted runner service","source":"@site/docs/self-hosted-appcircle/self-hosted-runner/configure-runner/runner-service.md","sourceDirName":"self-hosted-appcircle/self-hosted-runner/configure-runner","slug":"/self-hosted-appcircle/self-hosted-runner/configure-runner/runner-service","permalink":"/self-hosted-appcircle/self-hosted-runner/configure-runner/runner-service","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/self-hosted-runner/configure-runner/runner-service.md","tags":[{"inline":false,"label":"self-hosted runner","permalink":"/tags/self-hosted-runner","description":"Description for self-hosted runner"},{"inline":false,"label":"service","permalink":"/tags/service","description":"Description for service"},{"inline":false,"label":"configuration","permalink":"/tags/configuration","description":"Description for configuration"}],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Service Configuration","description":"Learn how to configure self-hosted runner service","tags":["self-hosted runner","service","configuration"],"sidebar_position":3},"sidebar":"mySidebar","previous":{"title":"Managing Runners","permalink":"/self-hosted-appcircle/self-hosted-runner/configure-runner/manage-runners"},"next":{"title":"Android Emulators","permalink":"/self-hosted-appcircle/self-hosted-runner/configure-runner/android-emulator"}}');var i=s(74848),t=s(28453);const o={title:"Service Configuration",description:"Learn how to configure self-hosted runner service",tags:["self-hosted runner","service","configuration"],sidebar_position:3},l="Overview",a={},c=[{value:"Install",id:"install",level:3},{value:"Status",id:"status",level:3},{value:"Start",id:"start",level:3},{value:"Stop",id:"stop",level:3},{value:"Restart",id:"restart",level:3},{value:"Uninstall",id:"uninstall",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,i.jsx)(n.p,{children:"After registration and configuration of self-hosted runner, you need to install launchd or systemd service to start runner as a daemon. Launchd service is used for macOS, systemd service is used for Linux."}),"\n",(0,i.jsx)(n.p,{children:"Self-hosted runner periodically checks for build jobs and dequeues eligible job for pipeline execution. So, it's always up in background and works non-interactively. When service is installed successfully, it will be automatically started on operating system boot without any manual intervention."}),"\n",(0,i.jsxs)(n.p,{children:["Runner service keeps its logs at ",(0,i.jsx)(n.code,{children:"$HOME/appcircle-runner"})," path. There are two log files:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"stdout.log"}),"\n",(0,i.jsx)(n.li,{children:"stderr.log"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"stdout.log"})," is connected to standard out of service and ",(0,i.jsx)(n.code,{children:"stderr.log"})," is connected to standard error of service."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"stdout.log"})," file has build job log. You can see same build log as web UI while pipeline is executing:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tail -f stdout.log\n"})}),"\n",(0,i.jsx)(n.p,{children:"Logs are rotated daily and are kept at most 7 days historically."}),"\n",(0,i.jsxs)(n.p,{children:["Old logs can be found under ",(0,i.jsx)(n.code,{children:"service.logs"})," directory. Each archived log file has date suffix and compressed by gzip. If you need to view an archived log, you can use ",(0,i.jsx)(n.code,{children:"gzip -dk LOG_FILE.gz"})," to extract archive file."]}),"\n",(0,i.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./ac-runner service -c install\n"})}),"\n",(0,i.jsx)(n.p,{children:"Installs and starts self-hosted runner service. It's used once, while installing and configuring self-hosted runner."}),"\n",(0,i.jsx)(n.h3,{id:"status",children:"Status"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./ac-runner service -c status\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can see current service status of self-hosted runner (up or down)."}),"\n",(0,i.jsx)(n.h3,{id:"start",children:"Start"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./ac-runner service -c start\n"})}),"\n",(0,i.jsx)(n.p,{children:"Starts runner service if it's stopped. If runner service is down for some reason, you can try start manually."}),"\n",(0,i.jsx)(n.h3,{id:"stop",children:"Stop"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./ac-runner service -c stop\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can disable self-hosted runner from web UI. (See, ",(0,i.jsx)(n.a,{href:"./manage-runners",children:"here"})," for details)"]}),"\n",(0,i.jsx)(n.p,{children:"If you need to disable self-hosted runner from CLI, you can use service stop option."}),"\n",(0,i.jsx)(n.p,{children:"Service start from CLI will enable runner again."}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:'Launchd or systemd service start and stop actions doesn\'t affect "Enabled" toggle button state on "Self-hosted Runners" list.'}),(0,i.jsxs)(n.p,{children:["When a self-hosted runner service is stopped from CLI, you will see it as ",(0,i.jsx)(n.code,{children:"Offline"}),". When service is started, it will become ",(0,i.jsx)(n.code,{children:"Online"}),"."]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsx)(n.p,{children:"You should be careful for running pipelines while stopping self-hosted runner service. When you stop service, it will immediately terminate self-hosted runner process and build job will be cut. It will be still shown as in-progress build but actually it's not working. It will stuck in that state until build timeout."}),(0,i.jsx)(n.p,{children:'Sometimes this situation may not be a problem for you, because you can cancel and retry build job with another online self-hosted runner. But if it\'s an unacceptable case for you, then you should check current state of runner from "Self-hosted Runners" list before stopping self-hosted runner service.'}),(0,i.jsxs)(n.p,{children:["You can also follow instantly service log ",(0,i.jsx)(n.code,{children:"stdout.log"})," for running build job. When runner becomes idle, you can stop service safely."]}),(0,i.jsx)(n.p,{children:'While waiting runner to complete its job, you can use "disable" toggle button from "self-hosted runners" list in order to prevent runner getting new build job from queue.'}),(0,i.jsx)(n.p,{children:"Service restart and uninstall processes have also same situation since they have service stop implicitly."})]}),"\n",(0,i.jsx)(n.h3,{id:"restart",children:"Restart"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./ac-runner service -c restart\n"})}),"\n",(0,i.jsx)(n.p,{children:"It's equivalent to stop and start with a single command."}),"\n",(0,i.jsx)(n.h3,{id:"uninstall",children:"Uninstall"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./ac-runner service -c uninstall\n"})}),"\n",(0,i.jsx)(n.p,{children:"Stops self-hosted runner service and removes launchd/systemd service entries. It reverts service install process."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
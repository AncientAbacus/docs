"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[99155],{29335:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"self-hosted-appcircle/self-hosted-runner/configure-runner/android-emulator","title":"Android Emulators","description":"Learn how to use Android emulators on self-hosted runners in Appcircle","source":"@site/docs/self-hosted-appcircle/self-hosted-runner/configure-runner/android-emulator.md","sourceDirName":"self-hosted-appcircle/self-hosted-runner/configure-runner","slug":"/self-hosted-appcircle/self-hosted-runner/configure-runner/android-emulator","permalink":"/self-hosted-appcircle/self-hosted-runner/configure-runner/android-emulator","draft":false,"unlisted":false,"editUrl":"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/self-hosted-runner/configure-runner/android-emulator.md","tags":[{"inline":false,"label":"self-hosted runner","permalink":"/tags/self-hosted-runner","description":"Description for self-hosted runner"},{"inline":false,"label":"android emulator","permalink":"/tags/android-emulator","description":"Description for android emulator"},{"inline":false,"label":"android","permalink":"/tags/android","description":"Description for android"},{"inline":false,"label":"emulator","permalink":"/tags/emulator","description":"Description for emulator"},{"inline":false,"label":"pipeline","permalink":"/tags/pipeline","description":"Description for pipeline"}],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Android Emulators","description":"Learn how to use Android emulators on self-hosted runners in Appcircle","tags":["self-hosted runner","android emulator","android","emulator","pipeline"],"sidebar_position":4},"sidebar":"mySidebar","previous":{"title":"Service Configuration","permalink":"/self-hosted-appcircle/self-hosted-runner/configure-runner/runner-service"},"next":{"title":"Self-signed Certificates","permalink":"/self-hosted-appcircle/self-hosted-runner/configure-runner/custom-certificates"}}');var o=r(74848),i=r(28453);const a={title:"Android Emulators",description:"Learn how to use Android emulators on self-hosted runners in Appcircle",tags:["self-hosted runner","android emulator","android","emulator","pipeline"],sidebar_position:4},l="Overview",t={},d=[{value:"Emulators on Linux",id:"emulators-on-linux",level:2},{value:"Check the capability of running KVM",id:"check-the-capability-of-running-kvm",level:3},{value:"Check if KVM module is loaded",id:"check-if-kvm-module-is-loaded",level:3},{value:"Emulators on MacOS",id:"emulators-on-macos",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,o.jsx)(n.p,{children:"On build pipeline, you can use android emulators for UI testing of android apps. Self-hosted runner supports this use case and installs below android emulator for general purpose usage by default."}),"\n",(0,o.jsxs)(n.p,{children:["For example, on ",(0,o.jsx)(n.code,{children:"macOS arm64"})," installation default emulator on self-hosted runner will be:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"    Name: Pixel_3a\n  Device: pixel_3a (Google)\n    Path: $HOME/.android/avd/Pixel_3a.avd\n  Target: Google Play (Google Inc.)\nBased on: Android 9.0 (Pie)\n Tag/ABI: google_apis_playstore/arm64-v8a\n"})}),"\n",(0,o.jsx)(n.p,{children:"Self-hosted runner chooses emulator ABI according to host architecture. So, android emulator ABI will be always compatible with host architecture for better optimization."}),"\n",(0,o.jsx)(n.p,{children:"For all types of platforms, whether linux or macOS, other properties of default emulator and its device name are same. You don't need any conditional steps on your workflow while using default installed emulator."}),"\n",(0,o.jsx)(n.p,{children:"If default emulator does not satisfy your requirements, you can install any additional emulators to self-hosted runner for your own usage."}),"\n",(0,o.jsx)(n.p,{children:"For example, in order to install Android 11 (API 30) emulator to arm64 macOS you can take below steps:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"1."})," Install emulator system image if not exists. (If it exists, command will return quickly with success.)"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'sdkmanager "system-images;android-30;google_apis;arm64-v8a"\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can see list of available system images with below command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'sdkmanager --list | grep "system-images;android"\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"2."}),' Create new pixel_3a device with "Pixel_Custom" emulator name.']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'avdmanager create avd -n Pixel_Custom -k "system-images;android-30;google_apis;arm64-v8a" -c 512M -d pixel_3a\n'})}),"\n",(0,o.jsxs)(n.p,{children:["When completed with success, you should see below device with ",(0,o.jsx)(n.code,{children:"avdmanager list avd"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"    Name: Pixel_Custom\n  Device: pixel_3a (Google)\n    Path: /Users/onur/.android/avd/Pixel_Custom.avd\n  Target: Google APIs (Google Inc.)\nBased on: Android 11.0 (R)\n Tag/ABI: google_apis/arm64-v8a\n  Sdcard: 512 MB\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsx)(n.p,{children:"Self-hosted installation checks machine architecture and decides whether to install the default Android emulator on the machine."}),(0,o.jsx)(n.p,{children:"If the machine does not support nested virtualization, it will not install the Android emulator with a warning message indicating the case."})]}),"\n",(0,o.jsx)(n.h2,{id:"emulators-on-linux",children:"Emulators on Linux"}),"\n",(0,o.jsx)(n.p,{children:"For linux hosts, there are some preconditions to run android emulator. These are not preventing installation of default android emulator on self-hosted runner but you won't be able to start or use emulator on pipeline. So, you should check and satisfy them."}),"\n",(0,o.jsxs)(n.p,{children:["Although we summarize key points on below sections, you can get more detailed information about configuring hardware acceleration for the android emulator from ",(0,o.jsx)(n.a,{href:"https://developer.android.com/studio/run/emulator-acceleration#dependencies-gpu",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"check-the-capability-of-running-kvm",children:"Check the capability of running KVM"}),"\n",(0,o.jsx)(n.p,{children:"To run KVM, you need a processor that supports hardware virtualization."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"grep -cw \".*\\(vmx\\|svm\\).*\" /proc/cpuinfo\n# or\negrep -c '(vmx|svm)' /proc/cpuinfo\n"})}),"\n",(0,o.jsx)(n.p,{children:"A non-zero result means the host CPU supports hardware virtualization."}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, you can use below command to check capability:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt install -y cpu-checker >/dev/null 2>&1 && sudo kvm-ok\n"})}),"\n",(0,o.jsx)(n.p,{children:"If virtualization is not enabled, be sure to enable the virtualization feature in your system."}),"\n",(0,o.jsx)(n.p,{children:"If you're using cloud computing services, you can take a look at below resources:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://aws.amazon.com/blogs/compute/running-hyper-v-on-amazon-ec2-bare-metal-instances/",children:"Amazon Web Services"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/instances/enable-nested-virtualization-vm-instances",children:"Google Cloud Computing"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/blog/nested-virtualization-in-azure",children:"Microsoft Azure"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"check-if-kvm-module-is-loaded",children:"Check if KVM module is loaded"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"lsmod | grep kvm\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you don't see any output, most probably you don't have KVM installed and running. So, follow below steps for Ubuntu based linux distributions."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"1."})," Run the command below to install KVM and additional virtualization packages."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt install -y qemu-kvm virt-manager libvirt-daemon-system virtinst libvirt-clients bridge-utils\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"2."})," After all the packages installed, enable and start the Libvirt daemon."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable --now libvirtd\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start libvirtd\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can check virtualization daemon is status as shown."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status libvirtd\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"3."})," Add the currently logged-in user to the kvm and libvirt groups so that they can create and manage virtual machines."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG kvm $USER\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG libvirt $USER\n"})}),"\n",(0,o.jsx)(n.p,{children:"To apply this change, you may need to log out and log in back again."}),"\n",(0,o.jsx)(n.h2,{id:"emulators-on-macos",children:"Emulators on MacOS"}),"\n",(0,o.jsx)(n.p,{children:"If your GPU hardware and drivers are compatible, the emulator uses the GPU for graphics acceleration. You may get an error message like below, if your user is not logged in. (mostly on reboot cases)"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"... FATAL: Could not compile shader for guest framebuffer blit. There may be an issue with the GPU drivers on your machine. ..."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"So, take following steps to enable auto-login for the currently logged-in user."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Apple"})," logo."]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.strong,{children:"System Preferences"})," from the menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Users & Groups."})," (In earlier versions of OS X, this is called ",(0,o.jsx)(n.strong,{children:"Accounts"}),".)"]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"lock"})," to make changes, and enter your administrator password when prompted."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Login Options"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Select the ",(0,o.jsx)(n.strong,{children:"Automatic login"})," username that you want to configure."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For more details, see ",(0,o.jsx)(n.a,{href:"https://support.apple.com/en-us/HT201476",children:"here"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var s=r(96540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
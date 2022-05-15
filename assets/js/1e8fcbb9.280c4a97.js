"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[5576],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9369:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3,title:"SMTP Configuration",id:"smtp-configuration"},l=void 0,p={unversionedId:"web/smtp-configuration",id:"web/smtp-configuration",title:"SMTP Configuration",description:"By default MineTrax will try to send transactional emails via PHP mail, which might lead to various problems like ISP blocking, large droprate, email landing in spam., etc.",source:"@site/docs/web/smtp-configuration.md",sourceDirName:"web",slug:"/web/smtp-configuration",permalink:"/docs/web/smtp-configuration",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/web/smtp-configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"SMTP Configuration",id:"smtp-configuration"},sidebar:"tutorialSidebar",previous:{title:"WebSocket Options",permalink:"/docs/web/websocket-options"},next:{title:"WebServer SSL Setup",permalink:"/docs/web/ssl-setup"}},m={},c=[],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default MineTrax will try to send transactional emails via PHP mail, which might lead to various problems like ISP blocking, large droprate, email landing in spam., etc."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Transactional emails are the emails such as password resets, welcome email, opted in notification email, etc."))),(0,i.kt)("p",null,"It is recommended to use a dedicated SMTP provider to do this job.\nFirstly you need to register at any SMTP providers and get your SMTP login details."),(0,i.kt)("p",null,"Here are list of some free SMTP Providers:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://sendgrid.com/"},"SendGrid")," - 100 email a day free"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.sendinblue.com/"},"SendInBlue")," - 300 email a day free"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://elasticemail.com/"},"ElasticEmail")," - 100 email a day free"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.pepipost.com/"},"Pepipost")," - 100 email a day free"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://kinsta.com/blog/gmail-smtp-server/"},"Gmail SMTP Server")," - 500 email per hour"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ses/"},"Amazon SES")," - 62000 a month if sent from Amazon hosted server"),(0,i.kt)("li",{parentName:"ol"},'and various others you can find by googling "Free SMTP Providers"')),(0,i.kt)("p",null,"After you have register at any SMTP provider, you need to get your SMTP login details and then change the smtp credentials in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"MAIL_MAILER=smtp\nMAIL_HOST= your smtp provider host\nMAIL_PORT=your smtp provider port\nMAIL_USERNAME= your smtp username\nMAIL_PASSWORD= your smtp password\nMAIL_ENCRYPTION= encryption mode (tls, ssl, null)\nMAIL_FROM_ADDRESS=no-reply@your_domain.com\n")),(0,i.kt)("p",null,"Example for Gmail:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"MAIL_MAILER=smtp\nMAIL_HOST=smtp.gmail.com\nMAIL_PORT=587\nMAIL_USERNAME=youremail@gmail.com\nMAIL_PASSWORD=password\nMAIL_ENCRYPTION=tls\nMAIL_FROM_ADDRESS=no-reply@yourdomain.com\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Emails are send in background via Queues.\nQueue are long running task and they don't pick up changes until restarted."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"You must restart all queue workers after this change.")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\nphp artisan queue:restart\n")))))}d.isMDXComponent=!0}}]);
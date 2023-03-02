import{k as ae,aJ as ie,aK as ne,aL as le,r as T,c,aM as se,aN as ue,aO as re,aP as ce,aQ as de,w as O,aR as fe,aS as me,aT as K,aU as L,a6 as ge,a4 as ve,h as d,C as $,E as he,g as xe,aV as ye}from"./index.60a9a997.js";import{u as qe,a as be}from"./use-prevent-scroll.5f4da33f.js";let h=0;const ke={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},p={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Te=ae({name:"QDialog",inheritAttrs:!1,props:{...ie,...ne,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...le,"shake","click","escapeKey"],setup(e,{slots:A,emit:s,attrs:E}){const f=xe(),{proxy:{$q:S}}=f,a=T(null),l=T(!1),u=T(!1);let i=null,n=null,m,x;const _=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:C}=be(),{registerTimeout:F}=se(),{registerTick:I,removeTick:z}=ue(),{transitionProps:Q,transitionStyle:D}=re(e,()=>p[e.position][0],()=>p[e.position][1]),{showPortal:H,hidePortal:M,portalIsAccessible:V,renderPortal:j}=ce(f,a,oe,"dialog"),{hide:g}=de({showing:l,hideOnRouteChange:_,handleShow:X,handleHide:Y,processOnMount:!0}),{addToHistory:U,removeFromHistory:W}=qe(l,g,_),J=c(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${ke[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),v=c(()=>l.value===!0&&e.seamless!==!0),N=c(()=>e.autoClose===!0?{onClick:Z}:{}),G=c(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${v.value===!0?"modal":"seamless"}`,E.class]);O(()=>e.maximized,t=>{l.value===!0&&b(t)}),O(v,t=>{C(t),t===!0?(fe(k),me(q)):(K(k),L(q))});function X(t){U(),n=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,b(e.maximized),H(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),I(r)):z(),F(()=>{if(f.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:o,bottom:w}=document.activeElement.getBoundingClientRect(),{innerHeight:R}=window,B=window.visualViewport!==void 0?window.visualViewport.height:R;o>0&&w>B/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-B,w>=R?1/0:Math.ceil(document.scrollingElement.scrollTop+w-B/2))),document.activeElement.scrollIntoView()}x=!0,a.value.click(),x=!1}H(!0),u.value=!1,s("show",t)},e.transitionDuration)}function Y(t){z(),W(),P(!0),u.value=!0,M(),n!==null&&(((t&&t.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),F(()=>{M(!0),u.value=!1,s("hide",t)},e.transitionDuration)}function r(t){ge(()=>{let o=a.value;o===null||o.contains(document.activeElement)===!0||(o=(t!==""?o.querySelector(t):null)||o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))})}function y(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):r(),s("shake");const o=a.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,a.value!==null&&(o.classList.remove("q-animate--scale"),r())},170))}function q(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&y():(s("escapeKey"),g()))}function P(t){i!==null&&(clearTimeout(i),i=null),(t===!0||l.value===!0)&&(b(!1),e.seamless!==!0&&(C(!1),K(k),L(q))),t!==!0&&(n=null)}function b(t){t===!0?m!==!0&&(h<1&&document.body.classList.add("q-body--dialog"),h++,m=!0):m===!0&&(h<2&&document.body.classList.remove("q-body--dialog"),h--,m=!1)}function Z(t){x!==!0&&(g(t),s("click",t))}function ee(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?g(t):e.noShake!==!0&&y(t.relatedTarget)}function k(t){e.allowFocusOutside!==!0&&V.value===!0&&ye(a.value,t.target)!==!0&&r('[tabindex]:not([tabindex="-1"])')}Object.assign(f.proxy,{focus:r,shake:y,__updateRefocusTarget(t){n=t||null}}),ve(P);const te=S.platform.is.ios===!0||S.platform.is.safari?"onClick":"onFocusin";function oe(){return d("div",{role:"dialog","aria-modal":v.value===!0?"true":"false",...E,class:G.value},[d($,{name:"q-transition--fade",appear:!0},()=>v.value===!0?d("div",{class:"q-dialog__backdrop fixed-full",style:D.value,"aria-hidden":"true",tabindex:-1,[te]:ee}):null),d($,Q.value,()=>l.value===!0?d("div",{ref:a,class:J.value,style:D.value,tabindex:-1,...N.value},he(A.default)):null)])}return j}});export{Te as Q};
import{k as ae,az as ie,aO as ne,aA as le,r as T,c,aP as se,aQ as ue,aR as re,aS as ce,aB as de,w as O,aT as fe,aU as me,aV as $,aW as A,a2 as ge,a0 as ve,h as d,C as K,E as he,g as xe,aX as ye}from"./index.31337442.js";import{u as qe,a as be}from"./use-prevent-scroll.8519556a.js";let h=0;const ke={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},L={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Te=ae({name:"QDialog",inheritAttrs:!1,props:{...ie,...ne,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...le,"shake","click","escapeKey"],setup(e,{slots:p,emit:s,attrs:E}){const f=xe(),{proxy:{$q:S}}=f,a=T(null),l=T(!1),u=T(!1);let i=null,n=null,m,x;const _=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:C}=be(),{registerTimeout:F}=se(),{registerTick:I,removeTick:z}=ue(),{transitionProps:Q,transitionStyle:D}=re(e,()=>L[e.position][0],()=>L[e.position][1]),{showPortal:H,hidePortal:P,portalIsAccessible:V,renderPortal:j}=ce(f,a,oe,"dialog"),{hide:g}=de({showing:l,hideOnRouteChange:_,handleShow:N,handleHide:Y,processOnMount:!0}),{addToHistory:W,removeFromHistory:U}=qe(l,g,_),X=c(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${ke[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),v=c(()=>l.value===!0&&e.seamless!==!0),G=c(()=>e.autoClose===!0?{onClick:Z}:{}),J=c(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${v.value===!0?"modal":"seamless"}`,E.class]);O(()=>e.maximized,t=>{l.value===!0&&b(t)}),O(v,t=>{C(t),t===!0?(fe(k),me(q)):($(k),A(q))});function N(t){W(),n=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,b(e.maximized),H(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),I(r)):z(),F(()=>{if(f.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:o,bottom:B}=document.activeElement.getBoundingClientRect(),{innerHeight:R}=window,w=window.visualViewport!==void 0?window.visualViewport.height:R;o>0&&B>w/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-w,B>=R?1/0:Math.ceil(document.scrollingElement.scrollTop+B-w/2))),document.activeElement.scrollIntoView()}x=!0,a.value.click(),x=!1}H(!0),u.value=!1,s("show",t)},e.transitionDuration)}function Y(t){z(),U(),M(!0),u.value=!0,P(),n!==null&&(((t&&t.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),F(()=>{P(!0),u.value=!1,s("hide",t)},e.transitionDuration)}function r(t){ge(()=>{let o=a.value;o===null||o.contains(document.activeElement)===!0||(o=(t!==""?o.querySelector(t):null)||o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))})}function y(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):r(),s("shake");const o=a.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,a.value!==null&&(o.classList.remove("q-animate--scale"),r())},170))}function q(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&y():(s("escapeKey"),g()))}function M(t){i!==null&&(clearTimeout(i),i=null),(t===!0||l.value===!0)&&(b(!1),e.seamless!==!0&&(C(!1),$(k),A(q))),t!==!0&&(n=null)}function b(t){t===!0?m!==!0&&(h<1&&document.body.classList.add("q-body--dialog"),h++,m=!0):m===!0&&(h<2&&document.body.classList.remove("q-body--dialog"),h--,m=!1)}function Z(t){x!==!0&&(g(t),s("click",t))}function ee(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?g(t):e.noShake!==!0&&y(t.relatedTarget)}function k(t){e.allowFocusOutside!==!0&&V.value===!0&&ye(a.value,t.target)!==!0&&r('[tabindex]:not([tabindex="-1"])')}Object.assign(f.proxy,{focus:r,shake:y,__updateRefocusTarget(t){n=t||null}}),ve(M);const te=S.platform.is.ios===!0||S.platform.is.safari?"onClick":"onFocusin";function oe(){return d("div",{role:"dialog","aria-modal":v.value===!0?"true":"false",...E,class:J.value},[d(K,{name:"q-transition--fade",appear:!0},()=>v.value===!0?d("div",{class:"q-dialog__backdrop fixed-full",style:D.value,"aria-hidden":"true",tabindex:-1,[te]:ee}):null),d(K,Q.value,()=>l.value===!0?d("div",{ref:a,class:X.value,style:D.value,tabindex:-1,...G.value},he(p.default)):null)])}return j}});export{Te as Q};

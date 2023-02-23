import{k as Z,G as Se,r as m,H as ze,c as r,a9 as Le,w as S,bv as oe,a4 as Fe,a5 as Qe,a0 as p,h as g,ai as we,bw as ue,bx as Re,aq as se,g as ce,by as de,C as Ve,E as qe,af as je,az as We,aA as Ie,aP as Ne,i as _e,bz as U,aB as Ee,B as fe,o as Ue,I as he,bA as Ce,ab as Xe}from"./index.bb9d4e92.js";import{T as K}from"./TouchPan.0d68d43e.js";import{b as I}from"./format.3e32b8d9.js";import{u as Ge,a as Ke}from"./use-prevent-scroll.8db089fc.js";const me=["vertical","horizontal"],ne={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},be={prevent:!0,mouse:!0,mouseAllDir:!0},ge=e=>e>=250?50:Math.ceil(e/5);var it=Z({name:"QScrollArea",props:{...Se,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:B,emit:_}){const k=m(!1),o=m(!1),c=m(!1),s={vertical:m(0),horizontal:m(0)},t={vertical:{ref:m(null),position:m(0),size:m(0)},horizontal:{ref:m(null),position:m(0),size:m(0)}},{proxy:y}=ce(),O=ze(e,y.$q);let i=null,H;const C=m(null),x=r(()=>"q-scrollarea"+(O.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=r(()=>{const l=t.vertical.size.value-s.vertical.value;if(l<=0)return 0;const n=I(t.vertical.position.value/l,0,1);return Math.round(n*1e4)/1e4}),t.vertical.thumbHidden=r(()=>(e.visible===null?c.value:e.visible)!==!0&&k.value===!1&&o.value===!1||t.vertical.size.value<=s.vertical.value+1),t.vertical.thumbStart=r(()=>t.vertical.percentage.value*(s.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=r(()=>Math.round(I(s.vertical.value*s.vertical.value/t.vertical.size.value,ge(s.vertical.value),s.vertical.value))),t.vertical.style=r(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=r(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=r(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=r(()=>{const l=t.horizontal.size.value-s.horizontal.value;if(l<=0)return 0;const n=I(Math.abs(t.horizontal.position.value)/l,0,1);return Math.round(n*1e4)/1e4}),t.horizontal.thumbHidden=r(()=>(e.visible===null?c.value:e.visible)!==!0&&k.value===!1&&o.value===!1||t.horizontal.size.value<=s.horizontal.value+1),t.horizontal.thumbStart=r(()=>t.horizontal.percentage.value*(s.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=r(()=>Math.round(I(s.horizontal.value*s.horizontal.value/t.horizontal.size.value,ge(s.horizontal.value),s.horizontal.value))),t.horizontal.style=r(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[y.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=r(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=r(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const z=r(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),q=[[K,l=>{R(l,"vertical")},void 0,{vertical:!0,...be}]],b=[[K,l=>{R(l,"horizontal")},void 0,{horizontal:!0,...be}]];function f(){const l={};return me.forEach(n=>{const h=t[n];l[n+"Position"]=h.position.value,l[n+"Percentage"]=h.percentage.value,l[n+"Size"]=h.size.value,l[n+"ContainerSize"]=s[n].value}),l}const F=Le(()=>{const l=f();l.ref=y,_("scroll",l)},0);function L(l,n,h){if(me.includes(l)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(l==="vertical"?de:oe)(C.value,n,h)}function Q({height:l,width:n}){let h=!1;s.vertical.value!==l&&(s.vertical.value=l,h=!0),s.horizontal.value!==n&&(s.horizontal.value=n,h=!0),h===!0&&D()}function u({position:l}){let n=!1;t.vertical.position.value!==l.top&&(t.vertical.position.value=l.top,n=!0),t.horizontal.position.value!==l.left&&(t.horizontal.position.value=l.left,n=!0),n===!0&&D()}function w({height:l,width:n}){t.horizontal.size.value!==n&&(t.horizontal.size.value=n,D()),t.vertical.size.value!==l&&(t.vertical.size.value=l,D())}function R(l,n){const h=t[n];if(l.isFirst===!0){if(h.thumbHidden.value===!0)return;H=h.position.value,o.value=!0}else if(o.value!==!0)return;l.isFinal===!0&&(o.value=!1);const $=ne[n],E=s[n].value,ee=(h.size.value-E)/(E-h.thumbSize.value),te=l.distance[$.dist],Y=H+(l.direction===$.dir?1:-1)*te*ee;X(Y,n)}function d(l,n){const h=t[n];if(h.thumbHidden.value!==!0){const $=l[ne[n].offset];if($<h.thumbStart.value||$>h.thumbStart.value+h.thumbSize.value){const E=$-h.thumbSize.value/2;X(E/s[n].value*h.size.value,n)}h.ref.value!==null&&h.ref.value.dispatchEvent(new MouseEvent(l.type,l))}}function A(l){d(l,"vertical")}function T(l){d(l,"horizontal")}function D(){k.value=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,k.value=!1},e.delay),e.onScroll!==void 0&&F()}function X(l,n){C.value[ne[n].scroll]=l}function V(){c.value=!0}function G(){c.value=!1}let N=null;return S(()=>y.$q.lang.rtl,l=>{C.value!==null&&oe(C.value,Math.abs(t.horizontal.position.value)*(l===!0?-1:1))}),Fe(()=>{N={top:t.vertical.position.value,left:t.horizontal.position.value}}),Qe(()=>{if(N===null)return;const l=C.value;l!==null&&(oe(l,N.left),de(l,N.top))}),p(F.cancel),Object.assign(y,{getScrollTarget:()=>C.value,getScroll:f,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:L,setScrollPercentage(l,n,h){L(l,n*(t[l].size.value-s[l].value)*(l==="horizontal"&&y.$q.lang.rtl===!0?-1:1),h)}}),()=>g("div",{class:x.value,onMouseenter:V,onMouseleave:G},[g("div",{ref:C,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[g("div",{class:"q-scrollarea__content absolute",style:z.value},we(B.default,[g(ue,{debounce:0,onResize:w})])),g(Re,{axis:"both",onScroll:u})]),g(ue,{debounce:0,onResize:Q}),g("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:A}),g("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:T}),se(g("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),q),se(g("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),b)])}});const Ye={ratio:[String,Number]};function Je(e,B){return r(()=>{const _=Number(e.ratio||(B!==void 0?B.value:void 0));return isNaN(_)!==!0&&_>0?{paddingBottom:`${100/_}%`}:null})}const Ze=16/9;var rt=Z({name:"QImg",props:{...Ye,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ze},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:B,emit:_}){const k=m(e.initialRatio),o=Je(e,k);let c=null,s=!1;const t=[m(null),m(b())],y=m(0),O=m(!1),i=m(!1),H=r(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),C=r(()=>({width:e.width,height:e.height})),x=r(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),z=r(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));S(()=>q(),f);function q(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function b(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function f(d){c!==null&&(clearTimeout(c),c=null),i.value=!1,d===null?(O.value=!1,t[y.value^1].value=b()):O.value=!0,t[y.value].value=d}function F({target:d}){s!==!0&&(c!==null&&(clearTimeout(c),c=null),k.value=d.naturalHeight===0?.5:d.naturalWidth/d.naturalHeight,L(d,1))}function L(d,A){s===!0||A===1e3||(d.complete===!0?Q(d):c=setTimeout(()=>{c=null,L(d,A+1)},50))}function Q(d){s!==!0&&(y.value=y.value^1,t[y.value].value=null,O.value=!1,i.value=!1,_("load",d.currentSrc||d.src))}function u(d){c!==null&&(clearTimeout(c),c=null),O.value=!1,i.value=!0,t[y.value].value=null,t[y.value^1].value=b(),_("error",d)}function w(d){const A=t[d].value,T={key:"img_"+d,class:x.value,style:z.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...A};return y.value===d?(T.class+=" q-img__image--waiting",Object.assign(T,{onLoad:F,onError:u})):T.class+=" q-img__image--loaded",g("div",{class:"q-img__container absolute-full",key:"img"+d},g("img",T))}function R(){return O.value!==!0?g("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},qe(B[i.value===!0?"error":"default"])):g("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},B.loading!==void 0?B.loading():e.noSpinner===!0?void 0:[g(je,{color:e.spinnerColor,size:e.spinnerSize})])}return f(q()),p(()=>{s=!0,c!==null&&(clearTimeout(c),c=null)}),()=>{const d=[];return o.value!==null&&d.push(g("div",{key:"filler",style:o.value})),i.value!==!0&&(t[0].value!==null&&d.push(w(0)),t[1].value!==null&&d.push(w(1))),d.push(g(Ve,{name:"q-transition--fade"},R)),g("div",{class:H.value,style:C.value,role:"img","aria-label":e.alt},d)}}});const ye=150;var ot=Z({name:"QDrawer",inheritAttrs:!1,props:{...We,...Se,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ie,"onLayout","miniState"],setup(e,{slots:B,emit:_,attrs:k}){const o=ce(),{proxy:{$q:c}}=o,s=ze(e,c),{preventBodyScroll:t}=Ke(),{registerTimeout:y,removeTimeout:O}=Ne(),i=_e(Ce,U);if(i===U)return console.error("QDrawer needs to be child of QLayout"),U;let H,C=null,x;const z=m(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),q=r(()=>e.mini===!0&&z.value!==!0),b=r(()=>q.value===!0?e.miniWidth:e.width),f=m(e.showIfAbove===!0&&z.value===!1?!0:e.modelValue===!0),F=r(()=>e.persistent!==!0&&(z.value===!0||E.value===!0));function L(a,v){if(R(),a!==!1&&i.animate(),P(0),z.value===!0){const M=i.instances[l.value];M!==void 0&&M.belowBreakpoint===!0&&M.hide(!1),j(1),i.isContainer.value!==!0&&t(!0)}else j(0),a!==!1&&le(!1);y(()=>{a!==!1&&le(!0),v!==!0&&_("show",a)},ye)}function Q(a,v){d(),a!==!1&&i.animate(),j(0),P(D.value*b.value),ie(),v!==!0?y(()=>{_("hide",a)},ye):O()}const{show:u,hide:w}=Ee({showing:f,hideOnRouteChange:F,handleShow:L,handleHide:Q}),{addToHistory:R,removeFromHistory:d}=Ge(f,w,F),A={belowBreakpoint:z,hide:w},T=r(()=>e.side==="right"),D=r(()=>(c.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),X=m(0),V=m(!1),G=m(!1),N=m(b.value*D.value),l=r(()=>T.value===!0?"left":"right"),n=r(()=>f.value===!0&&z.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:b.value:0),h=r(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(T.value?"R":"L")>-1||c.platform.is.ios===!0&&i.isContainer.value===!0),$=r(()=>e.overlay===!1&&f.value===!0&&z.value===!1),E=r(()=>e.overlay===!0&&f.value===!0&&z.value===!1),ee=r(()=>"fullscreen q-drawer__backdrop"+(f.value===!1&&V.value===!1?" hidden":"")),te=r(()=>({backgroundColor:`rgba(0,0,0,${X.value*.4})`})),Y=r(()=>T.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Te=r(()=>T.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),ke=r(()=>{const a={};return i.header.space===!0&&Y.value===!1&&(h.value===!0?a.top=`${i.header.offset}px`:i.header.space===!0&&(a.top=`${i.header.size}px`)),i.footer.space===!0&&Te.value===!1&&(h.value===!0?a.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(a.bottom=`${i.footer.size}px`)),a}),Be=r(()=>{const a={width:`${b.value}px`,transform:`translateX(${N.value}px)`};return z.value===!0?a:Object.assign(a,ke.value)}),Me=r(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),$e=r(()=>`q-drawer q-drawer--${e.side}`+(G.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(V.value===!0?" no-transition":f.value===!0?"":" q-layout--prevent-focus")+(z.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${q.value===!0?"mini":"standard"}`+(h.value===!0||$.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Y.value===!0?" q-drawer--top-padding":""))),Oe=r(()=>{const a=c.lang.rtl===!0?e.side:l.value;return[[K,Ae,void 0,{[a]:!0,mouse:!0}]]}),Pe=r(()=>{const a=c.lang.rtl===!0?l.value:e.side;return[[K,ve,void 0,{[a]:!0,mouse:!0}]]}),He=r(()=>{const a=c.lang.rtl===!0?l.value:e.side;return[[K,ve,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function ae(){De(z,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}S(z,a=>{a===!0?(H=f.value,f.value===!0&&w(!1)):e.overlay===!1&&e.behavior!=="mobile"&&H!==!1&&(f.value===!0?(P(0),j(0),ie()):u(!1))}),S(()=>e.side,(a,v)=>{i.instances[v]===A&&(i.instances[v]=void 0,i[v].space=!1,i[v].offset=0),i.instances[a]=A,i[a].size=b.value,i[a].space=$.value,i[a].offset=n.value}),S(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ae()}),S(()=>e.behavior+e.breakpoint,ae),S(i.isContainer,a=>{f.value===!0&&t(a!==!0),a===!0&&ae()}),S(i.scrollbarWidth,()=>{P(f.value===!0?0:void 0)}),S(n,a=>{W("offset",a)}),S($,a=>{_("onLayout",a),W("space",a)}),S(T,()=>{P()}),S(b,a=>{P(),re(e.miniToOverlay,a)}),S(()=>e.miniToOverlay,a=>{re(a,b.value)}),S(()=>c.lang.rtl,()=>{P()}),S(()=>e.mini,()=>{e.modelValue===!0&&(xe(),i.animate())}),S(q,a=>{_("miniState",a)});function P(a){a===void 0?fe(()=>{a=f.value===!0?0:b.value,P(D.value*a)}):(i.isContainer.value===!0&&T.value===!0&&(z.value===!0||Math.abs(a)===b.value)&&(a+=D.value*i.scrollbarWidth.value),N.value=a)}function j(a){X.value=a}function le(a){const v=a===!0?"remove":i.isContainer.value!==!0?"add":"";v!==""&&document.body.classList[v]("q-body--drawer-toggle")}function xe(){C!==null&&clearTimeout(C),o.proxy&&o.proxy.$el&&o.proxy.$el.classList.add("q-drawer--mini-animate"),G.value=!0,C=setTimeout(()=>{C=null,G.value=!1,o&&o.proxy&&o.proxy.$el&&o.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ae(a){if(f.value!==!1)return;const v=b.value,M=I(a.distance.x,0,v);if(a.isFinal===!0){M>=Math.min(75,v)===!0?u():(i.animate(),j(0),P(D.value*v)),V.value=!1;return}P((c.lang.rtl===!0?T.value!==!0:T.value)?Math.max(v-M,0):Math.min(0,M-v)),j(I(M/v,0,1)),a.isFirst===!0&&(V.value=!0)}function ve(a){if(f.value!==!0)return;const v=b.value,M=a.direction===e.side,J=(c.lang.rtl===!0?M!==!0:M)?I(a.distance.x,0,v):0;if(a.isFinal===!0){Math.abs(J)<Math.min(75,v)===!0?(i.animate(),j(1),P(0)):w(),V.value=!1;return}P(D.value*J),j(I(1-J/v,0,1)),a.isFirst===!0&&(V.value=!0)}function ie(){t(!1),le(!0)}function W(a,v){i.update(e.side,a,v)}function De(a,v){a.value!==v&&(a.value=v)}function re(a,v){W("size",a===!0?e.miniWidth:v)}return i.instances[e.side]=A,re(e.miniToOverlay,b.value),W("space",$.value),W("offset",n.value),e.showIfAbove===!0&&e.modelValue!==!0&&f.value===!0&&e["onUpdate:modelValue"]!==void 0&&_("update:modelValue",!0),Ue(()=>{_("onLayout",$.value),_("miniState",q.value),H=e.showIfAbove===!0;const a=()=>{(f.value===!0?L:Q)(!1,!0)};if(i.totalWidth.value!==0){fe(a);return}x=S(i.totalWidth,()=>{x(),x=void 0,f.value===!1&&e.showIfAbove===!0&&z.value===!1?u(!1):a()})}),p(()=>{x!==void 0&&x(),C!==null&&(clearTimeout(C),C=null),f.value===!0&&ie(),i.instances[e.side]===A&&(i.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const a=[];z.value===!0&&(e.noSwipeOpen===!1&&a.push(se(g("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Oe.value)),a.push(he("div",{ref:"backdrop",class:ee.value,style:te.value,"aria-hidden":"true",onClick:w},void 0,"backdrop",e.noSwipeBackdrop!==!0&&f.value===!0,()=>He.value)));const v=q.value===!0&&B.mini!==void 0,M=[g("div",{...k,key:""+v,class:[Me.value,k.class]},v===!0?B.mini():qe(B.default))];return e.elevated===!0&&f.value===!0&&M.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(he("aside",{ref:"content",class:$e.value,style:Be.value},M,"contentclose",e.noSwipeClose!==!0&&z.value===!0,()=>Pe.value)),g("div",{class:"q-drawer-container"},a)}}}),nt=Z({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:B,emit:_}){const{proxy:{$q:k}}=ce(),o=_e(Ce,U);if(o===U)return console.error("QFooter needs to be child of QLayout"),U;const c=m(parseInt(e.heightHint,10)),s=m(!0),t=m(Xe.value===!0||o.isContainer.value===!0?0:window.innerHeight),y=r(()=>e.reveal===!0||o.view.value.indexOf("F")>-1||k.platform.is.ios&&o.isContainer.value===!0),O=r(()=>o.isContainer.value===!0?o.containerHeight.value:t.value),i=r(()=>{if(e.modelValue!==!0)return 0;if(y.value===!0)return s.value===!0?c.value:0;const u=o.scroll.value.position+O.value+c.value-o.height.value;return u>0?u:0}),H=r(()=>e.modelValue!==!0||y.value===!0&&s.value!==!0),C=r(()=>e.modelValue===!0&&H.value===!0&&e.reveal===!0),x=r(()=>"q-footer q-layout__section--marginal "+(y.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(H.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(y.value!==!0?" hidden":""):"")),z=r(()=>{const u=o.rows.value.bottom,w={};return u[0]==="l"&&o.left.space===!0&&(w[k.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),u[2]==="r"&&o.right.space===!0&&(w[k.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),w});function q(u,w){o.update("footer",u,w)}function b(u,w){u.value!==w&&(u.value=w)}function f({height:u}){b(c,u),q("size",u)}function F(){if(e.reveal!==!0)return;const{direction:u,position:w,inflectionPoint:R}=o.scroll.value;b(s,u==="up"||w-R<100||o.height.value-O.value-w-c.value<300)}function L(u){C.value===!0&&b(s,!0),_("focusin",u)}S(()=>e.modelValue,u=>{q("space",u),b(s,!0),o.animate()}),S(i,u=>{q("offset",u)}),S(()=>e.reveal,u=>{u===!1&&b(s,e.modelValue)}),S(s,u=>{o.animate(),_("reveal",u)}),S([c,o.scroll,o.height],F),S(()=>k.screen.height,u=>{o.isContainer.value!==!0&&b(t,u)});const Q={};return o.instances.footer=Q,e.modelValue===!0&&q("size",c.value),q("space",e.modelValue),q("offset",i.value),p(()=>{o.instances.footer===Q&&(o.instances.footer=void 0,q("size",0),q("offset",0),q("space",!1))}),()=>{const u=we(B.default,[g(ue,{debounce:0,onResize:f})]);return e.elevated===!0&&u.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),g("footer",{class:x.value,style:z.value,onFocusin:L},u)}}});export{ot as Q,it as a,rt as b,nt as c};

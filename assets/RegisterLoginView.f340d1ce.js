import{k as R,u as le,l as oe,m as se,n as re,p as A,q as ie,s as ue,t as U,v as z,x as W,y as B,z as de,A as N,r as T,c as q,w as pe,B as ce,g as Z,h as S,C as me,D as ve,E as I,K as fe,G as ge,H as ye,I as be,J as he,L as Ve,M as K,N as Pe,O as xe,P as qe,Q as V,R as we,U as w,d as i,V as Ce,W as ke,X as E,Y as Te,Z as Se}from"./index.34fb8b7b.js";import{Q as Qe}from"./option-sizes.adf6df3d.js";import{Q as X,a as C}from"./QForm.a53b47a6.js";import{Q as Ae}from"./QToggle.998097b2.js";import{g as Y,s as O}from"./touch.70a9dd44.js";import{u as _e}from"./use-cache.b0833c75.js";import{v as j}from"./index.598c9681.js";import"./use-key-composition.610899c4.js";import"./use-checkbox.42718333.js";import"./_commonjsHelpers.b8add541.js";var G=R({name:"QTab",props:le,emits:oe,setup(t,{slots:l,emit:d}){const{renderTab:m}=se(t,l,d);return()=>m("div")}});function De(t){const l=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((d,m)=>{const n=parseFloat(d);n&&(l[m]=n)}),l}var Ue=re({name:"touch-swipe",beforeMount(t,{value:l,arg:d,modifiers:m}){if(m.mouse!==!0&&A.has.touch!==!0)return;const n=m.mouseCapture===!0?"Capture":"",e={handler:l,sensitivity:De(d),direction:Y(m),noop:ie,mouseStart(a){O(a,e)&&ue(a)&&(U(e,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),e.start(a,!0))},touchStart(a){if(O(a,e)){const p=a.target;U(e,"temp",[[p,"touchmove","move","notPassiveCapture"],[p,"touchcancel","end","notPassiveCapture"],[p,"touchend","end","notPassiveCapture"]]),e.start(a)}},start(a,p){A.is.firefox===!0&&z(t,!0);const b=W(a);e.event={x:b.left,y:b.top,time:Date.now(),mouse:p===!0,dir:!1}},move(a){if(e.event===void 0)return;if(e.event.dir!==!1){B(a);return}const p=Date.now()-e.event.time;if(p===0)return;const b=W(a),P=b.left-e.event.x,v=Math.abs(P),g=b.top-e.event.y,c=Math.abs(g);if(e.event.mouse!==!0){if(v<e.sensitivity[1]&&c<e.sensitivity[1]){e.end(a);return}}else if(v<e.sensitivity[2]&&c<e.sensitivity[2])return;const y=v/p,x=c/p;e.direction.vertical===!0&&v<c&&v<100&&x>e.sensitivity[0]&&(e.event.dir=g<0?"up":"down"),e.direction.horizontal===!0&&v>c&&c<100&&y>e.sensitivity[0]&&(e.event.dir=P<0?"left":"right"),e.direction.up===!0&&v<c&&g<0&&v<100&&x>e.sensitivity[0]&&(e.event.dir="up"),e.direction.down===!0&&v<c&&g>0&&v<100&&x>e.sensitivity[0]&&(e.event.dir="down"),e.direction.left===!0&&v>c&&P<0&&c<100&&y>e.sensitivity[0]&&(e.event.dir="left"),e.direction.right===!0&&v>c&&P>0&&c<100&&y>e.sensitivity[0]&&(e.event.dir="right"),e.event.dir!==!1?(B(a),e.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),de(),e.styleCleanup=f=>{e.styleCleanup=void 0,document.body.classList.remove("non-selectable");const s=()=>{document.body.classList.remove("no-pointer-events--children")};f===!0?setTimeout(s,50):s()}),e.handler({evt:a,touch:e.event.mouse!==!0,mouse:e.event.mouse,direction:e.event.dir,duration:p,distance:{x:v,y:c}})):e.end(a)},end(a){e.event!==void 0&&(N(e,"temp"),A.is.firefox===!0&&z(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(!0),a!==void 0&&e.event.dir!==!1&&B(a),e.event=void 0)}};if(t.__qtouchswipe=e,m.mouse===!0){const a=m.mouseCapture===!0||m.mousecapture===!0?"Capture":"";U(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}A.has.touch===!0&&U(e,"main",[[t,"touchstart","touchStart",`passive${m.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,l){const d=t.__qtouchswipe;d!==void 0&&(l.oldValue!==l.value&&(typeof l.value!="function"&&d.end(),d.handler=l.value),d.direction=Y(l.modifiers))},beforeUnmount(t){const l=t.__qtouchswipe;l!==void 0&&(N(l,"main"),N(l,"temp"),A.is.firefox===!0&&z(t,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete t.__qtouchswipe)}});const Ee={name:{required:!0},disable:Boolean},H={setup(t,{slots:l}){return()=>S("div",{class:"q-panel scroll",role:"tabpanel"},I(l.default))}},$e={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ze=["update:modelValue","beforeTransition","transition"];function Be(){const{props:t,emit:l,proxy:d}=Z(),{getCacheWithFn:m}=_e();let n,e;const a=T(null),p=T(null);function b(o){const u=t.vertical===!0?"up":"left";Q((d.$q.lang.rtl===!0?-1:1)*(o.direction===u?1:-1))}const P=q(()=>[[Ue,b,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),v=q(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),g=q(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),c=q(()=>`--q-transition-duration: ${t.transitionDuration}ms`),y=q(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),x=q(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),f=q(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);pe(()=>t.modelValue,(o,u)=>{const h=_(o)===!0?$(o):-1;e!==!0&&L(h===-1?0:h<$(u)?-1:1),a.value!==h&&(a.value=h,l("beforeTransition",o,u),ce(()=>{l("transition",o,u)}))});function s(){Q(1)}function r(){Q(-1)}function k(o){l("update:modelValue",o)}function _(o){return o!=null&&o!==""}function $(o){return n.findIndex(u=>u.props.name===o&&u.props.disable!==""&&u.props.disable!==!0)}function ee(){return n.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function L(o){const u=o!==0&&t.animated===!0&&a.value!==-1?"q-transition--"+(o===-1?v.value:g.value):null;p.value!==u&&(p.value=u)}function Q(o,u=a.value){let h=u+o;for(;h>-1&&h<n.length;){const D=n[h];if(D!==void 0&&D.props.disable!==""&&D.props.disable!==!0){L(o),e=!0,l("update:modelValue",D.props.name),setTimeout(()=>{e=!1});return}h+=o}t.infinite===!0&&n.length>0&&u!==-1&&u!==n.length&&Q(o,o===-1?n.length:-1)}function M(){const o=$(t.modelValue);return a.value!==o&&(a.value=o),!0}function F(){const o=_(t.modelValue)===!0&&M()&&n[a.value];return t.keepAlive===!0?[S(fe,x.value,[S(f.value===!0?m(y.value,()=>({...H,name:y.value})):H,{key:y.value,style:c.value},()=>o)])]:[S("div",{class:"q-panel scroll",style:c.value,key:y.value,role:"tabpanel"},[o])]}function te(){if(n.length!==0)return t.animated===!0?[S(me,{name:p.value},F)]:F()}function ae(o){return n=ve(I(o.default,[])).filter(u=>u.props!==null&&u.props.slot===void 0&&_(u.props.name)===!0),n.length}function ne(){return n}return Object.assign(d,{next:s,previous:r,goTo:k}),{panelIndex:a,panelDirectives:P,updatePanelsList:ae,updatePanelIndex:M,getPanelContent:te,getEnabledPanels:ee,getPanels:ne,isValidPanelName:_,keepAliveProps:x,needsUniqueKeepAliveWrapper:f,goToPanelByOffset:Q,goToPanel:k,nextPanel:s,previousPanel:r}}var J=R({name:"QTabPanel",props:Ee,setup(t,{slots:l}){return()=>S("div",{class:"q-tab-panel",role:"tabpanel"},I(l.default))}}),Ne=R({name:"QTabPanels",props:{...$e,...ge},emits:ze,setup(t,{slots:l}){const d=Z(),m=ye(t,d.proxy.$q),{updatePanelsList:n,getPanelContent:e,panelDirectives:a}=Be(),p=q(()=>"q-tab-panels q-panel-parent"+(m.value===!0?" q-tab-panels--dark q-dark":""));return()=>(n(l),be("div",{class:p.value},e(),"pan",t.swipeable,()=>a.value))}});const Re={id:"registerlogin"},Ie={class:"container q-mx-auto"},Le={class:"row justify-center"},Me={class:"col-8 col-lg-4"},Fe=w("div",{class:"text-h6 text-center"}," \u684C\u4E0B\u5427 ",-1),We=w("div",{class:"text-subtitle2 text-center"}," \u684C\u4E0A\u904A\u6232\uFF0C\u8B93\u6211\u5011\u62C9\u8FD1\u4EBA\u8207\u4EBA\u7684\u8DDD\u96E2 ",-1),tt={__name:"RegisterLoginView",setup(t){const l=T("register"),d=he(),m=Ve(),n=K({account:"",name:"",email:"",phone:"",password:"",accept:!1}),e=K({loginaccount:"",loginpassword:""}),a={email(f){return j.isEmail(f)||"\u683C\u5F0F\u932F\u8AA4"},phone(f){return j.isMobilePhone(f,"zh-TW")||"\u683C\u5F0F\u932F\u8AA4"},required(f){return!!f||"\u6B04\u4F4D\u5FC5\u586B"},length(f){return f.length>=4&&f.length<=12||"\u9577\u5EA6\u5FC5\u9808\u70BA 4 ~ 12 \u500B\u5B57"}},p=T(null);async function b(){var s,r;if(!!await p.value.validate())try{await Se.post("/users",n),d.notify({position:"top",message:"\u8A3B\u518A\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`}),m.push("/")}catch(k){d.notify({position:"top",message:((r=(s=k==null?void 0:k.response)==null?void 0:s.data)==null?void 0:r.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}}function P(){n.account="",n.name="",n.email="",n.phone="",n.password="",n.accept=!1}const v=T(null),g=Pe(),c=T("");async function y(){if(!!await v.value.validate())try{await g.login(e),c.value=g.name,g.token.length>0&&(d.notify({position:"top",message:`\u6B61\u8FCE\u56DE\u4F86\uFF0C${c.value}`,color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`}),m.push("/"))}catch(s){console.log(s)}}function x(){e.loginaccount="",e.loginapassword=""}return(f,s)=>(xe(),qe(we,null,{default:V(()=>[w("div",Re,[w("div",Ie,[w("div",Le,[w("div",Me,[i(Te,null,{default:V(()=>[i(Ce,null,{default:V(()=>[Fe,We]),_:1}),i(ke,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=r=>l.value=r),class:"text-teal"},{default:V(()=>[i(G,{label:"\u8A3B\u518A",name:"register",animated:""}),i(G,{label:"\u767B\u5165",name:"login"})]),_:1},8,["modelValue"]),i(Qe),i(Ne,{modelValue:l.value,"onUpdate:modelValue":s[10]||(s[10]=r=>l.value=r),animated:""},{default:V(()=>[i(J,{name:"register"},{default:V(()=>[i(X,{ref_key:"registerForm",ref:p,class:"q-gutter-md",onSubmit:b,onReset:P},{default:V(()=>[i(C,{modelValue:n.name,"onUpdate:modelValue":s[1]||(s[1]=r=>n.name=r),filled:"",label:"\u8ACB\u586B\u5165\u59D3\u540D *","lazy-rules":"",rules:[a.required]},null,8,["modelValue","rules"]),i(C,{modelValue:n.email,"onUpdate:modelValue":s[2]||(s[2]=r=>n.email=r),filled:"",type:"email",label:"\u8ACB\u586B\u5165\u4FE1\u7BB1 *","lazy-rules":"",rules:[a.required,a.email]},null,8,["modelValue","rules"]),i(C,{modelValue:n.phone,"onUpdate:modelValue":s[3]||(s[3]=r=>n.phone=r),filled:"",type:"text",label:"\u8ACB\u586B\u5165\u624B\u6A5F\u865F\u78BC *","lazy-rules":"",rules:[a.required,a.phone]},null,8,["modelValue","rules"]),i(C,{modelValue:n.account,"onUpdate:modelValue":s[4]||(s[4]=r=>n.account=r),filled:"",type:"text",label:"\u8ACB\u8A2D\u5B9A\u5E33\u865F *",hint:"\u5E33\u865F\u8ACB\u4EE54~12\u5B57\u5143\u7D44\u6210","lazy-rules":"",rules:[a.required,a.length]},null,8,["modelValue","rules"]),i(C,{modelValue:n.password,"onUpdate:modelValue":s[5]||(s[5]=r=>n.password=r),filled:"",type:"password",label:"\u8ACB\u8A2D\u5B9A\u5BC6\u78BC *",hint:"\u5BC6\u78BC\u8ACB\u4EE54~12\u5B57\u5143\u7D44\u6210","lazy-rules":"",rules:[a.required,a.length]},null,8,["modelValue","rules"]),i(Ae,{modelValue:n.accept,"onUpdate:modelValue":s[6]||(s[6]=r=>n.accept=r),label:"\u6211\u5DF2\u4E86\u89E3\u5E97\u5167\u76F8\u95DC\u898F\u5B9A\u4E26\u9858\u610F\u9075\u5B88",onClick:s[7]||(s[7]=r=>!f.accept)},null,8,["modelValue"]),w("div",null,[i(E,{label:"Submit",type:"submit",color:"primary"}),i(E,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1},512)]),_:1}),i(J,{name:"login"},{default:V(()=>[i(X,{ref_key:"loginForm",ref:v,class:"q-gutter-md",onSubmit:y,onReset:x},{default:V(()=>[i(C,{modelValue:e.loginaccount,"onUpdate:modelValue":s[8]||(s[8]=r=>e.loginaccount=r),filled:"",label:"\u8ACB\u8F38\u5165\u5E33\u865F *",hint:"\u5E33\u865F\u4EE54~12\u5B57\u5143\u7D44\u6210","lazy-rules":"",rules:[a.length,a.required]},null,8,["modelValue","rules"]),i(C,{modelValue:e.loginpassword,"onUpdate:modelValue":s[9]||(s[9]=r=>e.loginpassword=r),filled:"",type:"password",label:"\u8ACB\u8F38\u5165\u5BC6\u78BC *",hint:"\u5BC6\u78BC\u4EE54~12\u5B57\u5143\u7D44\u6210","lazy-rules":"",rules:[a.length,a.required]},null,8,["modelValue","rules"]),w("div",null,[i(E,{label:"Submit",type:"submit",color:"primary"}),i(E,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1},512)]),_:1})]),_:1},8,["modelValue"])]),_:1})])])])])]),_:1}))}};export{tt as default};

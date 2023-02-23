import{k as R,u as le,l as oe,m as se,n as re,p as A,q as ie,s as ue,t as U,v as z,x as W,y as B,z as de,A as N,r as T,c as w,w as pe,B as ce,g as Z,h as S,C as me,D as ve,E as I,K as fe,G as ge,H as ye,I as be,J as he,L as Ve,M as K,N as Pe,O as xe,P as qe,Q as P,R as we,U as C,d as i,V as Ce,W as ke,X as E,Y as Te,Z as Se}from"./index.d063aac3.js";import{Q as Qe}from"./option-sizes.e9147794.js";import{Q as X,a as k}from"./QForm.9af37089.js";import{Q as Ae}from"./QToggle.6c26efdb.js";import{g as Y,s as O}from"./touch.70a9dd44.js";import{u as _e}from"./use-cache.b0833c75.js";import{v as j}from"./index.598c9681.js";import"./use-key-composition.c5715751.js";import"./use-checkbox.f10b215c.js";import"./_commonjsHelpers.b8add541.js";var G=R({name:"QTab",props:le,emits:oe,setup(t,{slots:l,emit:u}){const{renderTab:m}=se(t,l,u);return()=>m("div")}});function De(t){const l=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((u,m)=>{const n=parseFloat(u);n&&(l[m]=n)}),l}var Ue=re({name:"touch-swipe",beforeMount(t,{value:l,arg:u,modifiers:m}){if(m.mouse!==!0&&A.has.touch!==!0)return;const n=m.mouseCapture===!0?"Capture":"",e={handler:l,sensitivity:De(u),direction:Y(m),noop:ie,mouseStart(a){O(a,e)&&ue(a)&&(U(e,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),e.start(a,!0))},touchStart(a){if(O(a,e)){const p=a.target;U(e,"temp",[[p,"touchmove","move","notPassiveCapture"],[p,"touchcancel","end","notPassiveCapture"],[p,"touchend","end","notPassiveCapture"]]),e.start(a)}},start(a,p){A.is.firefox===!0&&z(t,!0);const h=W(a);e.event={x:h.left,y:h.top,time:Date.now(),mouse:p===!0,dir:!1}},move(a){if(e.event===void 0)return;if(e.event.dir!==!1){B(a);return}const p=Date.now()-e.event.time;if(p===0)return;const h=W(a),x=h.left-e.event.x,v=Math.abs(x),g=h.top-e.event.y,c=Math.abs(g);if(e.event.mouse!==!0){if(v<e.sensitivity[1]&&c<e.sensitivity[1]){e.end(a);return}}else if(v<e.sensitivity[2]&&c<e.sensitivity[2])return;const b=v/p,q=c/p;e.direction.vertical===!0&&v<c&&v<100&&q>e.sensitivity[0]&&(e.event.dir=g<0?"up":"down"),e.direction.horizontal===!0&&v>c&&c<100&&b>e.sensitivity[0]&&(e.event.dir=x<0?"left":"right"),e.direction.up===!0&&v<c&&g<0&&v<100&&q>e.sensitivity[0]&&(e.event.dir="up"),e.direction.down===!0&&v<c&&g>0&&v<100&&q>e.sensitivity[0]&&(e.event.dir="down"),e.direction.left===!0&&v>c&&x<0&&c<100&&b>e.sensitivity[0]&&(e.event.dir="left"),e.direction.right===!0&&v>c&&x>0&&c<100&&b>e.sensitivity[0]&&(e.event.dir="right"),e.event.dir!==!1?(B(a),e.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),de(),e.styleCleanup=f=>{e.styleCleanup=void 0,document.body.classList.remove("non-selectable");const o=()=>{document.body.classList.remove("no-pointer-events--children")};f===!0?setTimeout(o,50):o()}),e.handler({evt:a,touch:e.event.mouse!==!0,mouse:e.event.mouse,direction:e.event.dir,duration:p,distance:{x:v,y:c}})):e.end(a)},end(a){e.event!==void 0&&(N(e,"temp"),A.is.firefox===!0&&z(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(!0),a!==void 0&&e.event.dir!==!1&&B(a),e.event=void 0)}};if(t.__qtouchswipe=e,m.mouse===!0){const a=m.mouseCapture===!0||m.mousecapture===!0?"Capture":"";U(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}A.has.touch===!0&&U(e,"main",[[t,"touchstart","touchStart",`passive${m.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,l){const u=t.__qtouchswipe;u!==void 0&&(l.oldValue!==l.value&&(typeof l.value!="function"&&u.end(),u.handler=l.value),u.direction=Y(l.modifiers))},beforeUnmount(t){const l=t.__qtouchswipe;l!==void 0&&(N(l,"main"),N(l,"temp"),A.is.firefox===!0&&z(t,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete t.__qtouchswipe)}});const Ee={name:{required:!0},disable:Boolean},H={setup(t,{slots:l}){return()=>S("div",{class:"q-panel scroll",role:"tabpanel"},I(l.default))}},$e={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ze=["update:modelValue","beforeTransition","transition"];function Be(){const{props:t,emit:l,proxy:u}=Z(),{getCacheWithFn:m}=_e();let n,e;const a=T(null),p=T(null);function h(s){const d=t.vertical===!0?"up":"left";Q((u.$q.lang.rtl===!0?-1:1)*(s.direction===d?1:-1))}const x=w(()=>[[Ue,h,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),v=w(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),g=w(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),c=w(()=>`--q-transition-duration: ${t.transitionDuration}ms`),b=w(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),q=w(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),f=w(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);pe(()=>t.modelValue,(s,d)=>{const V=_(s)===!0?$(s):-1;e!==!0&&L(V===-1?0:V<$(d)?-1:1),a.value!==V&&(a.value=V,l("beforeTransition",s,d),ce(()=>{l("transition",s,d)}))});function o(){Q(1)}function r(){Q(-1)}function y(s){l("update:modelValue",s)}function _(s){return s!=null&&s!==""}function $(s){return n.findIndex(d=>d.props.name===s&&d.props.disable!==""&&d.props.disable!==!0)}function ee(){return n.filter(s=>s.props.disable!==""&&s.props.disable!==!0)}function L(s){const d=s!==0&&t.animated===!0&&a.value!==-1?"q-transition--"+(s===-1?v.value:g.value):null;p.value!==d&&(p.value=d)}function Q(s,d=a.value){let V=d+s;for(;V>-1&&V<n.length;){const D=n[V];if(D!==void 0&&D.props.disable!==""&&D.props.disable!==!0){L(s),e=!0,l("update:modelValue",D.props.name),setTimeout(()=>{e=!1});return}V+=s}t.infinite===!0&&n.length>0&&d!==-1&&d!==n.length&&Q(s,s===-1?n.length:-1)}function M(){const s=$(t.modelValue);return a.value!==s&&(a.value=s),!0}function F(){const s=_(t.modelValue)===!0&&M()&&n[a.value];return t.keepAlive===!0?[S(fe,q.value,[S(f.value===!0?m(b.value,()=>({...H,name:b.value})):H,{key:b.value,style:c.value},()=>s)])]:[S("div",{class:"q-panel scroll",style:c.value,key:b.value,role:"tabpanel"},[s])]}function te(){if(n.length!==0)return t.animated===!0?[S(me,{name:p.value},F)]:F()}function ae(s){return n=ve(I(s.default,[])).filter(d=>d.props!==null&&d.props.slot===void 0&&_(d.props.name)===!0),n.length}function ne(){return n}return Object.assign(u,{next:o,previous:r,goTo:y}),{panelIndex:a,panelDirectives:x,updatePanelsList:ae,updatePanelIndex:M,getPanelContent:te,getEnabledPanels:ee,getPanels:ne,isValidPanelName:_,keepAliveProps:q,needsUniqueKeepAliveWrapper:f,goToPanelByOffset:Q,goToPanel:y,nextPanel:o,previousPanel:r}}var J=R({name:"QTabPanel",props:Ee,setup(t,{slots:l}){return()=>S("div",{class:"q-tab-panel",role:"tabpanel"},I(l.default))}}),Ne=R({name:"QTabPanels",props:{...$e,...ge},emits:ze,setup(t,{slots:l}){const u=Z(),m=ye(t,u.proxy.$q),{updatePanelsList:n,getPanelContent:e,panelDirectives:a}=Be(),p=w(()=>"q-tab-panels q-panel-parent"+(m.value===!0?" q-tab-panels--dark q-dark":""));return()=>(n(l),be("div",{class:p.value},e(),"pan",t.swipeable,()=>a.value))}});const Re={id:"registerlogin"},Ie={class:"container q-mx-auto"},Le={class:"row justify-center"},Me={class:"col-8 col-lg-6"},Fe=C("div",{class:"text-h6 text-center"}," \u684C\u4E0B\u5427 ",-1),We=C("div",{class:"text-subtitle2 text-center"}," \u684C\u4E0A\u904A\u6232\uFF0C\u8B93\u6211\u5011\u62C9\u8FD1\u4EBA\u8207\u4EBA\u7684\u8DDD\u96E2 ",-1),tt={__name:"RegisterLoginView",setup(t){const l=T("register"),u=he(),m=Ve(),n=K({account:"",name:"",email:"",phone:"",password:"",accept:!1}),e=K({loginaccount:"",loginpassword:""}),a={email(f){return j.isEmail(f)||"\u683C\u5F0F\u932F\u8AA4"},phone(f){return j.isMobilePhone(f,"zh-TW")||"\u683C\u5F0F\u932F\u8AA4"},required(f){return!!f||"\u6B04\u4F4D\u5FC5\u586B"},length(f){return f.length>=4&&f.length<=12||"\u9577\u5EA6\u5FC5\u9808\u70BA 4 ~ 12 \u500B\u5B57"}},p=T(null);async function h(){var o,r;if(!!await p.value.validate())try{await Se.post("/users",n),u.notify({position:"top",message:"\u8A3B\u518A\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`}),m.push("/")}catch(y){u.notify({position:"top",message:((r=(o=y==null?void 0:y.response)==null?void 0:o.data)==null?void 0:r.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}}function x(){n.account="",n.name="",n.email="",n.phone="",n.password="",n.accept=!1}const v=T(null),g=Pe(),c=T("");async function b(){var o,r;if(!!await v.value.validate())try{await g.login(e),c.value=g.name,g.token.length>0&&(u.notify({position:"top",message:`\u6B61\u8FCE\u56DE\u4F86\uFF0C${c.value}`,color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`}),m.push("/"))}catch(y){console.log(y),u.notify({position:"top",message:((r=(o=y==null?void 0:y.response)==null?void 0:o.data)==null?void 0:r.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}}function q(){e.loginaccount="",e.loginapassword=""}return(f,o)=>(xe(),qe(we,null,{default:P(()=>[C("div",Re,[C("div",Ie,[C("div",Le,[C("div",Me,[i(Te,null,{default:P(()=>[i(Ce,null,{default:P(()=>[Fe,We]),_:1}),i(ke,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=r=>l.value=r),class:"text-teal"},{default:P(()=>[i(G,{label:"\u8A3B\u518A",name:"register",animated:""}),i(G,{label:"\u767B\u5165",name:"login"})]),_:1},8,["modelValue"]),i(Qe),i(Ne,{modelValue:l.value,"onUpdate:modelValue":o[10]||(o[10]=r=>l.value=r),animated:""},{default:P(()=>[i(J,{name:"register"},{default:P(()=>[i(X,{ref_key:"registerForm",ref:p,class:"q-gutter-md",onSubmit:h,onReset:x},{default:P(()=>[i(k,{modelValue:n.name,"onUpdate:modelValue":o[1]||(o[1]=r=>n.name=r),filled:"",label:"\u8ACB\u586B\u5165\u59D3\u540D *","lazy-rules":"",rules:[a.required]},null,8,["modelValue","rules"]),i(k,{modelValue:n.email,"onUpdate:modelValue":o[2]||(o[2]=r=>n.email=r),filled:"",type:"email",label:"\u8ACB\u586B\u5165\u4FE1\u7BB1 *","lazy-rules":"",rules:[a.required,a.email]},null,8,["modelValue","rules"]),i(k,{modelValue:n.phone,"onUpdate:modelValue":o[3]||(o[3]=r=>n.phone=r),filled:"",type:"text",label:"\u8ACB\u586B\u5165\u624B\u6A5F\u865F\u78BC *","lazy-rules":"",rules:[a.required,a.phone]},null,8,["modelValue","rules"]),i(k,{modelValue:n.account,"onUpdate:modelValue":o[4]||(o[4]=r=>n.account=r),filled:"",type:"text",label:"\u8ACB\u8A2D\u5B9A\u5E33\u865F *",hint:"\u5E33\u865F\u8ACB\u4EE54~12\u5B57\u5143\u7D44\u6210","lazy-rules":"",rules:[a.required,a.length]},null,8,["modelValue","rules"]),i(k,{modelValue:n.password,"onUpdate:modelValue":o[5]||(o[5]=r=>n.password=r),filled:"",type:"password",label:"\u8ACB\u8A2D\u5B9A\u5BC6\u78BC *",hint:"\u5BC6\u78BC\u8ACB\u4EE54~12\u5B57\u5143\u7D44\u6210","lazy-rules":"",rules:[a.required,a.length]},null,8,["modelValue","rules"]),i(Ae,{modelValue:n.accept,"onUpdate:modelValue":o[6]||(o[6]=r=>n.accept=r),label:"\u6211\u5DF2\u4E86\u89E3\u5E97\u5167\u76F8\u95DC\u898F\u5B9A\u4E26\u9858\u610F\u9075\u5B88",onClick:o[7]||(o[7]=r=>!f.accept)},null,8,["modelValue"]),C("div",null,[i(E,{label:"Submit",type:"submit",color:"primary"}),i(E,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1},512)]),_:1}),i(J,{name:"login"},{default:P(()=>[i(X,{ref_key:"loginForm",ref:v,class:"q-gutter-md",onSubmit:b,onReset:q},{default:P(()=>[i(k,{modelValue:e.loginaccount,"onUpdate:modelValue":o[8]||(o[8]=r=>e.loginaccount=r),filled:"",label:"\u8ACB\u8F38\u5165\u5E33\u865F *",hint:"\u5E33\u865F\u4EE54~12\u5B57\u5143\u7D44\u6210","lazy-rules":"",rules:[a.length,a.required]},null,8,["modelValue","rules"]),i(k,{modelValue:e.loginpassword,"onUpdate:modelValue":o[9]||(o[9]=r=>e.loginpassword=r),filled:"",type:"password",label:"\u8ACB\u8F38\u5165\u5BC6\u78BC *",hint:"\u5BC6\u78BC\u4EE54~12\u5B57\u5143\u7D44\u6210","lazy-rules":"",rules:[a.length,a.required]},null,8,["modelValue","rules"]),C("div",null,[i(E,{label:"Submit",type:"submit",color:"primary"}),i(E,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1},512)]),_:1})]),_:1},8,["modelValue"])]),_:1})])])])])]),_:1}))}};export{tt as default};

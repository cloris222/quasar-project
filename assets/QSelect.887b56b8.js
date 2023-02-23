import{u as $e,b as rt,e as st,d as ct,a as qt,c as Et,f as nt,g as _t}from"./use-key-composition.74319b83.js";import{k as dt,q as Bt,r as O,c as y,w as ge,B as G,a9 as Ht,aG as Lt,a4 as Tt,a5 as Rt,a0 as ft,aH as Ne,h as C,g as vt,aI as Ae,aa as Pt,aJ as Dt,ac as Pe,a8 as Nt,$ as me,aK as $t,_ as Kt,y as Se,aL as jt,aF as Qt,aE as Ut,aC as Wt,ai as Xt}from"./index.cb468f67.js";import{Q as Yt}from"./QChip.dbaf8b22.js";import{Q as Gt}from"./QDialog.aae5d981.js";import{n as ot}from"./format.3e32b8d9.js";var Jt=dt({name:"QField",inheritAttrs:!1,props:$e,emits:rt,setup(){return st(ct())}});const $=1e3,Zt=["start","center","end","start-force","center-force","end-force"],mt=Array.prototype.filter,el=window.getComputedStyle(document.body).overflowAnchor===void 0?Bt:function(e,d){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const r=e.children||[];mt.call(r,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const p=r[d];p&&p.dataset&&(p.dataset.qVsAnchor="")}))};function he(e,d){return e+d}function De(e,d,r,p,M,a,q,w){const g=e===window?document.scrollingElement||document.documentElement:e,E=M===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-q-w,scrollMaxSize:0,offsetStart:-q,offsetEnd:-w};if(M===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=g.scrollLeft,s.scrollViewSize+=g.clientWidth),s.scrollMaxSize=g.scrollWidth,a===!0&&(s.scrollStart=(Ne===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=g.scrollTop,s.scrollViewSize+=g.clientHeight),s.scrollMaxSize=g.scrollHeight),r!==null)for(let b=r.previousElementSibling;b!==null;b=b.previousElementSibling)b.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=b[E]);if(p!==null)for(let b=p.nextElementSibling;b!==null;b=b.nextElementSibling)b.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=b[E]);if(d!==e){const b=g.getBoundingClientRect(),z=d.getBoundingClientRect();M===!0?(s.offsetStart+=z.left-b.left,s.offsetEnd-=z.width):(s.offsetStart+=z.top-b.top,s.offsetEnd-=z.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function at(e,d,r,p){d==="end"&&(d=(e===window?document.body:e)[r===!0?"scrollWidth":"scrollHeight"]),e===window?r===!0?(p===!0&&(d=(Ne===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-d),window.scrollTo(d,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,d):r===!0?(p===!0&&(d=(Ne===!0?e.scrollWidth-e.offsetWidth:0)-d),e.scrollLeft=d):e.scrollTop=d}function ze(e,d,r,p){if(r>=p)return 0;const M=d.length,a=Math.floor(r/$),q=Math.floor((p-1)/$)+1;let w=e.slice(a,q).reduce(he,0);return r%$!==0&&(w-=d.slice(a*$,r).reduce(he,0)),p%$!==0&&p!==M&&(w-=d.slice(p,q*$).reduce(he,0)),w}const St={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},cl=Object.keys(St),tl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...St};function ll({virtualScrollLength:e,getVirtualScrollTarget:d,getVirtualScrollEl:r,virtualScrollItemSizeComputed:p}){const M=vt(),{props:a,emit:q,proxy:w}=M,{$q:g}=w;let E,s,b,z=[],h;const N=O(0),_=O(0),Q=O({}),X=O(null),T=O(null),U=O(null),F=O({from:0,to:0}),I=y(()=>a.tableColspan!==void 0?a.tableColspan:100);p===void 0&&(p=y(()=>a.virtualScrollItemSize));const W=y(()=>p.value+";"+a.virtualScrollHorizontal),ye=y(()=>W.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);ge(ye,()=>{Y()}),ge(W,ue);function ue(){Z(s,!0)}function we(n){Z(n===void 0?s:n)}function J(n,i){const f=d();if(f==null||f.nodeType===8)return;const x=De(f,r(),X.value,T.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);b!==x.scrollViewSize&&Y(x.scrollViewSize),ne(f,x,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,Zt.indexOf(i)>-1?i:s>-1&&n>s?"end":"start")}function K(){const n=d();if(n==null||n.nodeType===8)return;const i=De(n,r(),X.value,T.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),f=e.value-1,x=i.scrollMaxSize-i.offsetStart-i.offsetEnd-_.value;if(E===i.scrollStart)return;if(i.scrollMaxSize<=0){ne(n,i,0,0);return}b!==i.scrollViewSize&&Y(i.scrollViewSize),be(F.value.from);const B=Math.floor(i.scrollMaxSize-Math.max(i.scrollViewSize,i.offsetEnd)-Math.min(h[f],i.scrollViewSize/2));if(B>0&&Math.ceil(i.scrollStart)>=B){ne(n,i,f,i.scrollMaxSize-i.offsetEnd-z.reduce(he,0));return}let S=0,v=i.scrollStart-i.offsetStart,H=v;if(v<=x&&v+i.scrollViewSize>=N.value)v-=N.value,S=F.value.from,H=v;else for(let m=0;v>=z[m]&&S<f;m++)v-=z[m],S+=$;for(;v>0&&S<f;)v-=h[S],v>-i.scrollViewSize?(S++,H=v):H=h[S]+v;ne(n,i,S,H)}function ne(n,i,f,x,B){const S=typeof B=="string"&&B.indexOf("-force")>-1,v=S===!0?B.replace("-force",""):B,H=v!==void 0?v:"start";let m=Math.max(0,f-Q.value[H]),R=m+Q.value.total;R>e.value&&(R=e.value,m=Math.max(0,R-Q.value.total)),E=i.scrollStart;const ae=m!==F.value.from||R!==F.value.to;if(ae===!1&&v===void 0){Ce(f);return}const{activeElement:pe}=document,j=U.value;ae===!0&&j!==null&&j!==pe&&j.contains(pe)===!0&&(j.addEventListener("focusout",Ve),setTimeout(()=>{j!==null&&j.removeEventListener("focusout",Ve)})),el(j,f-m);const Fe=v!==void 0?h.slice(m,f).reduce(he,0):0;if(ae===!0){const ee=R>=F.value.from&&m<=F.value.to?F.value.to:R;F.value={from:m,to:ee},N.value=ze(z,h,0,m),_.value=ze(z,h,R,e.value),requestAnimationFrame(()=>{F.value.to!==R&&E===i.scrollStart&&(F.value={from:F.value.from,to:R},_.value=ze(z,h,R,e.value))})}requestAnimationFrame(()=>{if(E!==i.scrollStart)return;ae===!0&&be(m);const ee=h.slice(m,f).reduce(he,0),ie=ee+i.offsetStart+N.value,Me=ie+h[f];let ke=ie+x;if(v!==void 0){const _e=ee-Fe,P=i.scrollStart+_e;ke=S!==!0&&P<ie&&Me<P+i.scrollViewSize?P:v==="end"?Me-i.scrollViewSize:ie-(v==="start"?0:Math.round((i.scrollViewSize-h[f])/2))}E=ke,at(n,ke,a.virtualScrollHorizontal,g.lang.rtl),Ce(f)})}function be(n){const i=U.value;if(i){const f=mt.call(i.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),x=f.length,B=a.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let S=n,v,H;for(let m=0;m<x;){for(v=B(f[m]),m++;m<x&&f[m].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=B(f[m]),m++;H=v-h[S],H!==0&&(h[S]+=H,z[Math.floor(S/$)]+=H),S++}}}function Ve(){U.value!==null&&U.value!==void 0&&U.value.focus()}function Z(n,i){const f=1*p.value;(i===!0||Array.isArray(h)===!1)&&(h=[]);const x=h.length;h.length=e.value;for(let S=e.value-1;S>=x;S--)h[S]=f;const B=Math.floor((e.value-1)/$);z=[];for(let S=0;S<=B;S++){let v=0;const H=Math.min((S+1)*$,e.value);for(let m=S*$;m<H;m++)v+=h[m];z.push(v)}s=-1,E=void 0,N.value=ze(z,h,0,F.value.from),_.value=ze(z,h,F.value.to,e.value),n>=0?(be(F.value.from),G(()=>{J(n)})):oe()}function Y(n){if(n===void 0&&typeof window!="undefined"){const v=d();v!=null&&v.nodeType!==8&&(n=De(v,r(),X.value,T.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}b=n;const i=parseFloat(a.virtualScrollSliceRatioBefore)||0,f=parseFloat(a.virtualScrollSliceRatioAfter)||0,x=1+i+f,B=n===void 0||n<=0?1:Math.ceil(n/p.value),S=Math.max(1,B,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/x));Q.value={total:Math.ceil(S*x),start:Math.ceil(S*i),center:Math.ceil(S*(.5+i)),end:Math.ceil(S*(1+i)),view:B}}function Ie(n,i){const f=a.virtualScrollHorizontal===!0?"width":"height",x={["--q-virtual-scroll-item-"+f]:p.value+"px"};return[n==="tbody"?C(n,{class:"q-virtual-scroll__padding",key:"before",ref:X},[C("tr",[C("td",{style:{[f]:`${N.value}px`,...x},colspan:I.value})])]):C(n,{class:"q-virtual-scroll__padding",key:"before",ref:X,style:{[f]:`${N.value}px`,...x}}),C(n,{class:"q-virtual-scroll__content",key:"content",ref:U,tabindex:-1},i.flat()),n==="tbody"?C(n,{class:"q-virtual-scroll__padding",key:"after",ref:T},[C("tr",[C("td",{style:{[f]:`${_.value}px`,...x},colspan:I.value})])]):C(n,{class:"q-virtual-scroll__padding",key:"after",ref:T,style:{[f]:`${_.value}px`,...x}})]}function Ce(n){s!==n&&(a.onVirtualScroll!==void 0&&q("virtualScroll",{index:n,from:F.value.from,to:F.value.to-1,direction:n<s?"decrease":"increase",ref:w}),s=n)}Y();const oe=Ht(K,g.platform.is.ios===!0?120:35);Lt(()=>{Y()});let o=!1;return Tt(()=>{o=!0}),Rt(()=>{if(o!==!0)return;const n=d();E!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?at(n,E,a.virtualScrollHorizontal,g.lang.rtl):J(s)}),ft(()=>{oe.cancel()}),Object.assign(w,{scrollTo:J,reset:ue,refresh:we}),{virtualScrollSliceRange:F,virtualScrollSliceSizeComputed:Q,setVirtualScrollSize:Y,onVirtualScrollEvt:oe,localResetVirtualScroll:Z,padVirtualScroll:Ie,scrollTo:J,reset:ue,refresh:we}}const it=e=>["add","add-unique","toggle"].includes(e),ul=".*+?^${}()|[]\\",nl=Object.keys($e);var dl=dt({name:"QSelect",inheritAttrs:!1,props:{...tl,...qt,...$e,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:it},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...rt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:d,emit:r}){const{proxy:p}=vt(),{$q:M}=p,a=O(!1),q=O(!1),w=O(-1),g=O(""),E=O(!1),s=O(!1);let b=null,z,h,N,_=null,Q,X,T,U;const F=O(null),I=O(null),W=O(null),ye=O(null),ue=O(null),we=Et(e),J=_t(Ze),K=y(()=>Array.isArray(e.options)?e.options.length:0),ne=y(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:be,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:Z,padVirtualScroll:Y,onVirtualScrollEvt:Ie,scrollTo:Ce,setVirtualScrollSize:oe}=ll({virtualScrollLength:K,getVirtualScrollTarget:wt,getVirtualScrollEl:Ge,virtualScrollItemSizeComputed:ne}),o=ct(),n=y(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&z!==void 0?z:[],c=u.map(k=>yt(k,l));return e.modelValue===null&&t===!0?c.filter(k=>k!==null):c}return u}),i=y(()=>{const t={};return nl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),f=y(()=>e.optionsDark===null?o.isDark.value:e.optionsDark),x=y(()=>nt(n.value)),B=y(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),S=y(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),v=y(()=>K.value===0),H=y(()=>n.value.map(t=>D.value(t)).join(", ")),m=y(()=>e.displayValue!==void 0?e.displayValue:H.value),R=y(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ae=y(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(R.value))),pe=y(()=>o.focused.value===!0?e.tabindex:-1),j=y(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${o.targetUid.value}_lb`};return w.value>=0&&(t["aria-activedescendant"]=`${o.targetUid.value}_${w.value}`),t}),Fe=y(()=>({id:`${o.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ee=y(()=>n.value.map((t,u)=>({index:u,opt:t,html:R.value(t),selected:!0,removeAtIndex:ht,toggleOption:te,tabindex:pe.value}))),ie=y(()=>{if(K.value===0)return[];const{from:t,to:u}=be.value;return e.options.slice(t,u).map((l,c)=>{const k=re.value(l)===!0,V=t+c,A={clickable:!0,active:!1,activeClass:_e.value,manualFocus:!0,focused:!1,disable:k,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${o.targetUid.value}_${V}`,onClick:()=>{te(l)}};return k!==!0&&(Le(l)===!0&&(A.active=!0),w.value===V&&(A.focused=!0),A["aria-selected"]=A.active===!0?"true":"false",M.platform.is.desktop===!0&&(A.onMousemove=()=>{a.value===!0&&se(V)})),{index:V,opt:l,html:R.value(l),label:D.value(l),selected:A.active,focused:A.focused,toggleOption:te,setOptionIndex:se,itemProps:A}})}),Me=y(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),ke=y(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),_e=y(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),P=y(()=>He(e.optionValue,"value")),D=y(()=>He(e.optionLabel,"label")),re=y(()=>He(e.optionDisable,"disable")),Oe=y(()=>n.value.map(t=>P.value(t))),gt=y(()=>{const t={onInput:Ze,onChange:J,onKeydown:Ye,onKeyup:We,onKeypress:Xe,onFocus:Qe,onClick(u){h===!0&&me(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=J,t});ge(n,t=>{z=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&o.innerLoading.value!==!0&&(q.value!==!0&&a.value!==!0||x.value!==!0)&&(N!==!0&&ve(),(q.value===!0||a.value===!0)&&ce(""))},{immediate:!0}),ge(()=>e.fillInput,ve),ge(a,Te),ge(K,Ot);function Ke(t){return e.emitValue===!0?P.value(t):t}function Be(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();r("remove",{index:t,value:u.splice(t,1)[0]}),r("update:modelValue",u)}else r("update:modelValue",null)}function ht(t){Be(t),o.focus()}function je(t,u){const l=Ke(t);if(e.multiple!==!0){e.fillInput===!0&&xe(D.value(t),!0,!0),r("update:modelValue",l);return}if(n.value.length===0){r("add",{index:0,value:l}),r("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&Le(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const c=e.modelValue.slice();r("add",{index:c.length,value:l}),c.push(l),r("update:modelValue",c)}function te(t,u){if(o.editable.value!==!0||t===void 0||re.value(t)===!0)return;const l=P.value(t);if(e.multiple!==!0){u!==!0&&(xe(e.fillInput===!0?D.value(t):"",!0,!0),le()),I.value!==null&&I.value.focus(),(n.value.length===0||Ae(P.value(n.value[0]),l)!==!0)&&r("update:modelValue",e.emitValue===!0?l:t);return}if((h!==!0||E.value===!0)&&o.focus(),Qe(),n.value.length===0){const V=e.emitValue===!0?l:t;r("add",{index:0,value:V}),r("update:modelValue",e.multiple===!0?[V]:V);return}const c=e.modelValue.slice(),k=Oe.value.findIndex(V=>Ae(V,l));if(k>-1)r("remove",{index:k,value:c.splice(k,1)[0]});else{if(e.maxValues!==void 0&&c.length>=e.maxValues)return;const V=e.emitValue===!0?l:t;r("add",{index:c.length,value:V}),c.push(V)}r("update:modelValue",c)}function se(t){if(M.platform.is.desktop!==!0)return;const u=t>-1&&t<K.value?t:-1;w.value!==u&&(w.value=u)}function qe(t=1,u){if(a.value===!0){let l=w.value;do l=ot(l+t,-1,K.value-1);while(l!==-1&&l!==w.value&&re.value(e.options[l])===!0);w.value!==l&&(se(l),Ce(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Ee(l>=0?D.value(e.options[l]):Q))}}function yt(t,u){const l=c=>Ae(P.value(c),t);return e.options.find(l)||u.find(l)||t}function He(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:c=>c!==null&&typeof c=="object"&&l in c?c[l]:c}function Le(t){const u=P.value(t);return Oe.value.find(l=>Ae(l,u))!==void 0}function Qe(t){e.useInput===!0&&I.value!==null&&(t===void 0||I.value===t.target&&t.target.value===H.value)&&I.value.select()}function Ue(t){$t(t,27)===!0&&a.value===!0&&(me(t),le(),ve()),r("keyup",t)}function We(t){const{value:u}=t.target;if(t.keyCode!==void 0){Ue(t);return}if(t.target.value="",b!==null&&(clearTimeout(b),b=null),ve(),typeof u=="string"&&u.length>0){const l=u.toLocaleLowerCase(),c=V=>{const A=e.options.find(L=>V.value(L).toLocaleLowerCase()===l);return A===void 0?!1:(n.value.indexOf(A)===-1?te(A):le(),!0)},k=V=>{c(P)!==!0&&(c(D)===!0||V===!0||ce(u,!0,()=>k(!0)))};k()}else o.clearValue(t)}function Xe(t){r("keypress",t)}function Ye(t){if(r("keydown",t),Kt(t)===!0)return;const u=g.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(w.value>-1||u===!0);if(t.keyCode===27){Pe(t);return}if(t.keyCode===9&&l===!1){de();return}if(t.target===void 0||t.target.id!==o.targetUid.value)return;if(t.keyCode===40&&o.innerLoading.value!==!0&&a.value===!1){Se(t),fe();return}if(t.keyCode===8&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Be(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&r("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(Se(t),w.value=-1,qe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&Ve.value!==void 0&&(Se(t),w.value=Math.max(-1,Math.min(K.value,w.value+(t.keyCode===33?-1:1)*Ve.value.view)),qe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(Se(t),qe(t.keyCode===38?-1:1,e.multiple));const c=K.value;if((T===void 0||U<Date.now())&&(T=""),c>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||T.length>0)){a.value!==!0&&fe(t);const k=t.key.toLocaleLowerCase(),V=T.length===1&&T[0]===k;U=Date.now()+1500,V===!1&&(Se(t),T+=k);const A=new RegExp("^"+T.split("").map(Re=>ul.indexOf(Re)>-1?"\\"+Re:Re).join(".*"),"i");let L=w.value;if(V===!0||L<0||A.test(D.value(e.options[L]))!==!0)do L=ot(L+1,-1,c-1);while(L!==w.value&&(re.value(e.options[L])===!0||A.test(D.value(e.options[L]))!==!0));w.value!==L&&G(()=>{se(L),Ce(L),L>=0&&e.useInput===!0&&e.fillInput===!0&&Ee(D.value(e.options[L]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||T!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&Se(t),w.value>-1&&w.value<c){te(e.options[w.value]);return}if(u===!0){const k=(V,A)=>{if(A){if(it(A)!==!0)return}else A=e.newValueMode;if(V==null)return;xe("",e.multiple!==!0,!0),(A==="toggle"?te:je)(V,A==="add-unique"),e.multiple!==!0&&(I.value!==null&&I.value.focus(),le())};if(e.onNewValue!==void 0?r("newValue",g.value,k):k(g.value),e.multiple!==!0)return}a.value===!0?de():o.innerLoading.value!==!0&&fe()}}function Ge(){return h===!0?ue.value:W.value!==null&&W.value.contentEl!==null?W.value.contentEl:void 0}function wt(){return Ge()}function bt(){return e.hideSelected===!0?[]:d["selected-item"]!==void 0?ee.value.map(t=>d["selected-item"](t)).slice():d.selected!==void 0?[].concat(d.selected()):e.useChips===!0?ee.value.map((t,u)=>C(Yt,{key:"option-"+u,removable:o.editable.value===!0&&re.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:pe.value,onRemove(){t.removeAtIndex(u)}},()=>C("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:D.value(t.opt)}))):[C("span",{[ae.value===!0?"innerHTML":"textContent"]:m.value})]}function Je(){if(v.value===!0)return d["no-option"]!==void 0?d["no-option"]({inputValue:g.value}):void 0;const t=d.option!==void 0?d.option:l=>C(Wt,{key:l.index,...l.itemProps},()=>C(Qt,()=>C(Ut,()=>C("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",ie.value.map(t));return d["before-options"]!==void 0&&(u=d["before-options"]().concat(u)),Xt(d["after-options"],u)}function Vt(t,u){const l=u===!0?{...j.value,...o.splitAttrs.attributes.value}:void 0,c={ref:u===!0?I:void 0,key:"i_t",class:B.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...l,id:u===!0?o.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...gt.value};return t!==!0&&h===!0&&(Array.isArray(c.class)===!0?c.class=[...c.class,"no-pointer-events"]:c.class+=" no-pointer-events"),C("input",c)}function Ze(t){b!==null&&(clearTimeout(b),b=null),!(t&&t.target&&t.target.qComposing===!0)&&(Ee(t.target.value||""),N=!0,Q=g.value,o.focused.value!==!0&&(h!==!0||E.value===!0)&&o.focus(),e.onFilter!==void 0&&(b=setTimeout(()=>{b=null,ce(g.value)},e.inputDebounce)))}function Ee(t){g.value!==t&&(g.value=t,r("inputValue",t))}function xe(t,u,l){N=l!==!0,e.useInput===!0&&(Ee(t),(u===!0||l!==!0)&&(Q=t),u!==!0&&ce(t))}function ce(t,u,l){if(e.onFilter===void 0||u!==!0&&o.focused.value!==!0)return;o.innerLoading.value===!0?r("filterAbort"):(o.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&N!==!0&&t===D.value(n.value[0])&&(t="");const c=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);_!==null&&clearTimeout(_),_=c,r("filter",t,(k,V)=>{(u===!0||o.focused.value===!0)&&_===c&&(clearTimeout(_),typeof k=="function"&&k(),s.value=!1,G(()=>{o.innerLoading.value=!1,o.editable.value===!0&&(u===!0?a.value===!0&&le():a.value===!0?Te(!0):a.value=!0),typeof V=="function"&&G(()=>{V(p)}),typeof l=="function"&&G(()=>{l(p)})}))},()=>{o.focused.value===!0&&_===c&&(clearTimeout(_),o.innerLoading.value=!1,s.value=!1),a.value===!0&&(a.value=!1)})}function Ct(){return C(jt,{ref:W,class:S.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&v.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:ke.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Fe.value,onScrollPassive:Ie,onBeforeShow:tt,onBeforeHide:pt,onShow:kt},Je)}function pt(t){lt(t),de()}function kt(){oe()}function xt(t){me(t),I.value!==null&&I.value.focus(),E.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function At(t){me(t),G(()=>{E.value=!1})}function zt(){const t=[C(Jt,{class:`col-auto ${o.fieldClass.value}`,...i.value,for:o.targetUid.value,dark:f.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:g.value.length>0,...o.splitAttrs.listeners.value,onFocus:xt,onBlur:At},{...d,rawControl:()=>o.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(C("div",{ref:ue,class:S.value+" scroll",style:e.popupContentStyle,...Fe.value,onClick:Pe,onScrollPassive:Ie},Je())),C(Gt,{ref:ye,modelValue:q.value,position:e.useInput===!0?"top":void 0,transitionShow:X,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:tt,onBeforeHide:It,onHide:Ft,onShow:Mt},()=>C("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(E.value===!0?" q-select__dialog--focused":"")},t))}function It(t){lt(t),ye.value!==null&&ye.value.__updateRefocusTarget(o.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),o.focused.value=!1}function Ft(t){le(),o.focused.value===!1&&r("blur",t),ve()}function Mt(){const t=document.activeElement;(t===null||t.id!==o.targetUid.value)&&I.value!==null&&I.value!==t&&I.value.focus(),oe()}function de(){q.value!==!0&&(w.value=-1,a.value===!0&&(a.value=!1),o.focused.value===!1&&(_!==null&&(clearTimeout(_),_=null),o.innerLoading.value===!0&&(r("filterAbort"),o.innerLoading.value=!1,s.value=!1)))}function fe(t){o.editable.value===!0&&(h===!0?(o.onControlFocusin(t),q.value=!0,G(()=>{o.focus()})):o.focus(),e.onFilter!==void 0?ce(g.value):(v.value!==!0||d["no-option"]!==void 0)&&(a.value=!0))}function le(){q.value=!1,de()}function ve(){e.useInput===!0&&xe(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&D.value(n.value[0])||"",!0,!0)}function Te(t){let u=-1;if(t===!0){if(n.value.length>0){const l=P.value(n.value[0]);u=e.options.findIndex(c=>Ae(P.value(c),l))}Z(u)}se(u)}function Ot(t,u){a.value===!0&&o.innerLoading.value===!1&&(Z(-1,!0),G(()=>{a.value===!0&&o.innerLoading.value===!1&&(t>u?Z():Te(!0))}))}function et(){q.value===!1&&W.value!==null&&W.value.updatePosition()}function tt(t){t!==void 0&&me(t),r("popupShow",t),o.hasPopupOpen=!0,o.onControlFocusin(t)}function lt(t){t!==void 0&&me(t),r("popupHide",t),o.hasPopupOpen=!1,o.onControlFocusout(t)}function ut(){h=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?d["no-option"]!==void 0||e.onFilter!==void 0||v.value===!1:!0),X=M.platform.is.ios===!0&&h===!0&&e.useInput===!0?"fade":e.transitionShow}return Pt(ut),Dt(et),ut(),ft(()=>{b!==null&&clearTimeout(b)}),Object.assign(p,{showPopup:fe,hidePopup:le,removeAtIndex:Be,add:je,toggleOption:te,getOptionIndex:()=>w.value,setOptionIndex:se,moveOptionSelection:qe,filter:ce,updateMenuPosition:et,updateInputValue:xe,isOptionSelected:Le,getEmittingOptionValue:Ke,isOptionDisabled:(...t)=>re.value.apply(null,t)===!0,getOptionValue:(...t)=>P.value.apply(null,t),getOptionLabel:(...t)=>D.value.apply(null,t)}),Object.assign(o,{innerValue:n,fieldClass:y(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:F,targetRef:I,hasValue:x,showPopup:fe,floatingLabel:y(()=>e.hideSelected!==!0&&x.value===!0||typeof g.value=="number"||g.value.length>0||nt(e.displayValue)),getControlChild:()=>{if(o.editable.value!==!1&&(q.value===!0||v.value!==!0||d["no-option"]!==void 0))return h===!0?zt():Ct();o.hasPopupOpen===!0&&(o.hasPopupOpen=!1)},controlEvents:{onFocusin(t){o.onControlFocusin(t)},onFocusout(t){o.onControlFocusout(t,()=>{ve(),de()})},onClick(t){if(Pe(t),h!==!0&&a.value===!0){de(),I.value!==null&&I.value.focus();return}fe(t)}},getControl:t=>{const u=bt(),l=t===!0||q.value!==!0||h!==!0;if(e.useInput===!0)u.push(Vt(t,l));else if(o.editable.value===!0){const k=l===!0?j.value:void 0;u.push(C("input",{ref:l===!0?I:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?o.targetUid.value:void 0,value:m.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...k,onKeydown:Ye,onKeyup:Ue,onKeypress:Xe})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&u.push(C("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:We}))}if(we.value!==void 0&&e.disable!==!0&&Oe.value.length>0){const k=Oe.value.map(V=>C("option",{value:V,selected:!0}));u.push(C("select",{class:"hidden",name:we.value,multiple:e.multiple},k))}const c=e.useInput===!0||l!==!0?void 0:o.splitAttrs.attributes.value;return C("div",{class:"q-field__native row items-center",...c},u)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[C(Nt,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:Me.value})]:null}),st(o)}});export{dl as Q,ll as a,cl as c,tl as u};

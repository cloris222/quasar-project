import{b as re,u as le,c as oe,d as ue,f as W,e as ie,g as se,h as ce}from"./use-key-composition.95045d83.js";import{r as Q,w as Z,B as z,a2 as fe,c as q,k as p,a3 as X,a4 as de,o as ee,h as U,a5 as me,g as te,a6 as ae,a7 as ve,a8 as ge,a9 as he,E as ke,aa as ye,y as Y,ab as xe}from"./index.60a9a997.js";const G={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},H={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ne=Object.keys(H);ne.forEach(e=>{H[e].regex=new RegExp(H[e].pattern)});const Me=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ne.join("")+"])|(.)","g"),J=/[.*+?^${}()|[\]\\]/g,w=String.fromCharCode(1),we={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function be(e,A,j,V){let c,f,S,P;const R=Q(null),k=Q(m());function O(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}Z(()=>e.type+e.autogrow,i),Z(()=>e.mask,t=>{if(t!==void 0)b(k.value,!0);else{const n=y(k.value);i(),e.modelValue!==n&&A("update:modelValue",n)}}),Z(()=>e.fillMask+e.reverseFillMask,()=>{R.value===!0&&b(k.value,!0)}),Z(()=>e.unmaskedValue,()=>{R.value===!0&&b(k.value)});function m(){if(i(),R.value===!0){const t=L(y(e.modelValue));return e.fillMask!==!1?x(t):t}return e.modelValue}function K(t){if(t<c.length)return c.slice(-t);let n="",l=c;const o=l.indexOf(w);if(o>-1){for(let u=t-l.length;u>0;u--)n+=w;l=l.slice(0,o)+n+l.slice(o)}return l}function i(){if(R.value=e.mask!==void 0&&e.mask.length>0&&O(),R.value===!1){P=void 0,c="",f="";return}const t=G[e.mask]===void 0?e.mask:G[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",l=n.replace(J,"\\$&"),o=[],u=[],r=[];let v=e.reverseFillMask===!0,s="",h="";t.replace(Me,(E,I,B,a,M)=>{if(a!==void 0){const C=H[a];r.push(C),h=C.negate,v===!0&&(u.push("(?:"+h+"+)?("+C.pattern+"+)?(?:"+h+"+)?("+C.pattern+"+)?"),v=!1),u.push("(?:"+h+"+)?("+C.pattern+")?")}else if(B!==void 0)s="\\"+(B==="\\"?"":B),r.push(B),o.push("([^"+s+"]+)?"+s+"?");else{const C=I!==void 0?I:M;s=C==="\\"?"\\\\\\\\":C.replace(J,"\\\\$&"),r.push(C),o.push("([^"+s+"]+)?"+s+"?")}});const D=new RegExp("^"+o.join("")+"("+(s===""?".":"[^"+s+"]")+"+)?"+(s===""?"":"["+s+"]*")+"$"),T=u.length-1,d=u.map((E,I)=>I===0&&e.reverseFillMask===!0?new RegExp("^"+l+"*"+E):I===T?new RegExp("^"+E+"("+(h===""?".":h)+"+)?"+(e.reverseFillMask===!0?"$":l+"*")):new RegExp("^"+E));S=r,P=E=>{const I=D.exec(e.reverseFillMask===!0?E:E.slice(0,r.length));I!==null&&(E=I.slice(1).join(""));const B=[],a=d.length;for(let M=0,C=E;M<a;M++){const _=d[M].exec(C);if(_===null)break;C=C.slice(_.shift().length),B.push(..._)}return B.length>0?B.join(""):E},c=r.map(E=>typeof E=="string"?E:w).join(""),f=c.split(w).join(n)}function b(t,n,l){const o=V.value,u=o.selectionEnd,r=o.value.length-u,v=y(t);n===!0&&i();const s=L(v),h=e.fillMask!==!1?x(s):s,D=k.value!==h;o.value!==h&&(o.value=h),D===!0&&(k.value=h),document.activeElement===o&&z(()=>{if(h===f){const d=e.reverseFillMask===!0?f.length:0;o.setSelectionRange(d,d,"forward");return}if(l==="insertFromPaste"&&e.reverseFillMask!==!0){const d=u-1;F.right(o,d,d);return}if(["deleteContentBackward","deleteContentForward"].indexOf(l)>-1){const d=e.reverseFillMask===!0?u===0?h.length>s.length?1:0:Math.max(0,h.length-(h===f?0:Math.min(s.length,r)+1))+1:u;o.setSelectionRange(d,d,"forward");return}if(e.reverseFillMask===!0)if(D===!0){const d=Math.max(0,h.length-(h===f?0:Math.min(s.length,r+1)));d===1&&u===1?o.setSelectionRange(d,d,"forward"):F.rightReverse(o,d,d)}else{const d=h.length-r;o.setSelectionRange(d,d,"backward")}else if(D===!0){const d=Math.max(0,c.indexOf(w),Math.min(s.length,u)-1);F.right(o,d,d)}else{const d=u-1;F.right(o,d,d)}});const T=e.unmaskedValue===!0?y(h):h;String(e.modelValue)!==T&&j(T,!0)}function N(t,n,l){const o=L(y(t.value));n=Math.max(0,c.indexOf(w),Math.min(o.length,n)),t.setSelectionRange(n,l,"forward")}const F={left(t,n,l,o){const u=c.slice(n-1).indexOf(w)===-1;let r=Math.max(0,n-1);for(;r>=0;r--)if(c[r]===w){n=r,u===!0&&n++;break}if(r<0&&c[n]!==void 0&&c[n]!==w)return F.right(t,0,0);n>=0&&t.setSelectionRange(n,o===!0?l:n,"backward")},right(t,n,l,o){const u=t.value.length;let r=Math.min(u,l+1);for(;r<=u;r++)if(c[r]===w){l=r;break}else c[r-1]===w&&(l=r);if(r>u&&c[l-1]!==void 0&&c[l-1]!==w)return F.left(t,u,u);t.setSelectionRange(o?n:l,l,"forward")},leftReverse(t,n,l,o){const u=K(t.value.length);let r=Math.max(0,n-1);for(;r>=0;r--)if(u[r-1]===w){n=r;break}else if(u[r]===w&&(n=r,r===0))break;if(r<0&&u[n]!==void 0&&u[n]!==w)return F.rightReverse(t,0,0);n>=0&&t.setSelectionRange(n,o===!0?l:n,"backward")},rightReverse(t,n,l,o){const u=t.value.length,r=K(u),v=r.slice(0,l+1).indexOf(w)===-1;let s=Math.min(u,l+1);for(;s<=u;s++)if(r[s-1]===w){l=s,l>0&&v===!0&&l--;break}if(s>u&&r[l-1]!==void 0&&r[l-1]!==w)return F.leftReverse(t,u,u);t.setSelectionRange(o===!0?n:l,l,"forward")}};function $(t){if(A("keydown",t),fe(t)===!0)return;const n=V.value,l=n.selectionStart,o=n.selectionEnd;if(t.keyCode===37||t.keyCode===39){const u=F[(t.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];t.preventDefault(),u(n,l,o,t.shiftKey)}else t.keyCode===8&&e.reverseFillMask!==!0&&l===o?F.left(n,l,o,!0):t.keyCode===46&&e.reverseFillMask===!0&&l===o&&F.rightReverse(n,l,o,!0)}function L(t){if(t==null||t==="")return"";if(e.reverseFillMask===!0)return g(t);const n=S;let l=0,o="";for(let u=0;u<n.length;u++){const r=t[l],v=n[u];if(typeof v=="string")o+=v,r===v&&l++;else if(r!==void 0&&v.regex.test(r))o+=v.transform!==void 0?v.transform(r):r,l++;else return o}return o}function g(t){const n=S,l=c.indexOf(w);let o=t.length-1,u="";for(let r=n.length-1;r>=0&&o>-1;r--){const v=n[r];let s=t[o];if(typeof v=="string")u=v+u,s===v&&o--;else if(s!==void 0&&v.regex.test(s))do u=(v.transform!==void 0?v.transform(s):s)+u,o--,s=t[o];while(l===r&&s!==void 0&&v.regex.test(s));else return u}return u}function y(t){return typeof t!="string"||P===void 0?typeof t=="number"?P(""+t):t:P(t)}function x(t){return f.length-t.length<=0?t:e.reverseFillMask===!0&&t.length>0?f.slice(0,-t.length)+t:t+f.slice(t.length)}return{innerValue:k,hasMask:R,moveCursorForPaste:N,updateMaskValue:b,onMaskedKeydown:$}}function Ce(e,A){function j(){const V=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(V)===V&&("length"in V?Array.from(V):[V]).forEach(f=>{c.items.add(f)}),{files:c.files}}catch{return{files:void 0}}}return A===!0?q(()=>{if(e.type==="file")return j()}):q(j)}var Ee=p({name:"QInput",inheritAttrs:!1,props:{...re,...we,...le,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...oe,"paste","change","keydown","animationend"],setup(e,{emit:A,attrs:j}){const{proxy:V}=te(),{$q:c}=V,f={};let S=NaN,P,R,k=null,O;const m=Q(null),K=ue(e),{innerValue:i,hasMask:b,moveCursorForPaste:N,updateMaskValue:F,onMaskedKeydown:$}=be(e,A,D,m),L=Ce(e,!0),g=q(()=>W(i.value)),y=ce(s),x=ie(),t=q(()=>e.type==="textarea"||e.autogrow===!0),n=q(()=>t.value===!0||["text","search","url","tel","password"].includes(e.type)),l=q(()=>{const a={...x.splitAttrs.listeners.value,onInput:s,onPaste:v,onChange:d,onBlur:E,onFocus:X};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=y,b.value===!0&&(a.onKeydown=$),e.autogrow===!0&&(a.onAnimationend=h),a}),o=q(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:K.value,...x.splitAttrs.attributes.value,id:x.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return t.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});Z(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),Z(()=>e.modelValue,a=>{if(b.value===!0){if(R===!0&&(R=!1,String(a)===S))return;F(a)}else i.value!==a&&(i.value=a,e.type==="number"&&f.hasOwnProperty("value")===!0&&(P===!0?P=!1:delete f.value));e.autogrow===!0&&z(T)}),Z(()=>e.autogrow,a=>{a===!0?z(T):m.value!==null&&j.rows>0&&(m.value.style.height="auto")}),Z(()=>e.dense,()=>{e.autogrow===!0&&z(T)});function u(){ae(()=>{const a=document.activeElement;m.value!==null&&m.value!==a&&(a===null||a.id!==x.targetUid.value)&&m.value.focus({preventScroll:!0})})}function r(){m.value!==null&&m.value.select()}function v(a){if(b.value===!0&&e.reverseFillMask!==!0){const M=a.target;N(M,M.selectionStart,M.selectionEnd)}A("paste",a)}function s(a){if(!a||!a.target)return;if(e.type==="file"){A("update:modelValue",a.target.files);return}const M=a.target.value;if(a.target.qComposing===!0){f.value=M;return}if(b.value===!0)F(M,!1,a.inputType);else if(D(M),n.value===!0&&a.target===document.activeElement){const{selectionStart:C,selectionEnd:_}=a.target;C!==void 0&&_!==void 0&&z(()=>{a.target===document.activeElement&&M.indexOf(a.target.value)===0&&a.target.setSelectionRange(C,_)})}e.autogrow===!0&&T()}function h(a){A("animationend",a),T()}function D(a,M){O=()=>{k=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==a&&S!==a&&(S=a,M===!0&&(R=!0),A("update:modelValue",a),z(()=>{S===a&&(S=NaN)})),O=void 0},e.type==="number"&&(P=!0,f.value=a),e.debounce!==void 0?(k!==null&&clearTimeout(k),f.value=a,k=setTimeout(O,e.debounce)):O()}function T(){requestAnimationFrame(()=>{const a=m.value;if(a!==null){const M=a.parentNode.style,{overflow:C}=a.style;c.platform.is.firefox!==!0&&(a.style.overflow="hidden"),M.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",a.style.overflow=C,M.marginBottom=""}})}function d(a){y(a),k!==null&&(clearTimeout(k),k=null),O!==void 0&&O(),A("change",a.target.value)}function E(a){a!==void 0&&X(a),k!==null&&(clearTimeout(k),k=null),O!==void 0&&O(),P=!1,R=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=i.value!==void 0?i.value:"")})}function I(){return f.hasOwnProperty("value")===!0?f.value:i.value!==void 0?i.value:""}de(()=>{E()}),ee(()=>{e.autogrow===!0&&T()}),Object.assign(x,{innerValue:i,fieldClass:q(()=>`q-${t.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:q(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:m,emitValue:D,hasValue:g,floatingLabel:q(()=>g.value===!0||W(e.displayValue)),getControl:()=>U(t.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...l.value,...e.type!=="file"?{value:I()}:L.value}),getShadowControl:()=>U("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(t.value===!0?"":" text-no-wrap")},[U("span",{class:"invisible"},I()),U("span",e.shadowText)])});const B=se(x);return Object.assign(V,{focus:u,select:r,getNativeElement:()=>m.value}),me(V,"nativeEl",()=>m.value),B}}),Ve=p({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:A,emit:j}){const V=te(),c=Q(null);let f=0;const S=[];function P(i){const b=typeof i=="boolean"?i:e.noErrorFocus!==!0,N=++f,F=(g,y)=>{j("validation"+(g===!0?"Success":"Error"),y)},$=g=>{const y=g.validate();return typeof y.then=="function"?y.then(x=>({valid:x,comp:g}),x=>({valid:!1,comp:g,err:x})):Promise.resolve({valid:y,comp:g})};return(e.greedy===!0?Promise.all(S.map($)).then(g=>g.filter(y=>y.valid!==!0)):S.reduce((g,y)=>g.then(()=>$(y).then(x=>{if(x.valid===!1)return Promise.reject(x)})),Promise.resolve()).catch(g=>[g])).then(g=>{if(g===void 0||g.length===0)return N===f&&F(!0),!0;if(N===f){const{comp:y,err:x}=g[0];if(x!==void 0&&console.error(x),F(!1,y),b===!0){const t=g.find(({comp:n})=>typeof n.focus=="function"&&ye(n.$)===!1);t!==void 0&&t.comp.focus()}}return!1})}function R(){f++,S.forEach(i=>{typeof i.resetValidation=="function"&&i.resetValidation()})}function k(i){i!==void 0&&Y(i);const b=f+1;P().then(N=>{b===f&&N===!0&&(e.onSubmit!==void 0?j("submit",i):i!==void 0&&i.target!==void 0&&typeof i.target.submit=="function"&&i.target.submit())})}function O(i){i!==void 0&&Y(i),j("reset"),z(()=>{R(),e.autofocus===!0&&e.noResetFocus!==!0&&m()})}function m(){ae(()=>{if(c.value===null)return;const i=c.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||c.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||c.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(c.value.querySelectorAll("[tabindex]"),b=>b.tabIndex>-1);i!=null&&i.focus({preventScroll:!0})})}ve(xe,{bindComponent(i){S.push(i)},unbindComponent(i){const b=S.indexOf(i);b>-1&&S.splice(b,1)}});let K=!1;return ge(()=>{K=!0}),he(()=>{K===!0&&e.autofocus===!0&&m()}),ee(()=>{e.autofocus===!0&&m()}),Object.assign(V.proxy,{validate:P,resetValidation:R,submit:k,reset:O,focus:m,getValidationComponents:()=>S}),()=>U("form",{class:"q-form",ref:c,onSubmit:k,onReset:O},ke(A.default))}});export{Ve as Q,Ee as a,Ce as u};

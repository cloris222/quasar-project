import{l as R,H as C,I,c as l,h as g,g as y,r as L,$ as Q,a0 as s,a1 as E,G as K,a2 as M,z as q}from"./index.142f4ee1.js";import{u as N,o as G}from"./option-sizes.7304c6c0.js";import{u as H,a as J}from"./use-key-composition.06046d44.js";const U={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},V={xs:2,sm:4,md:8,lg:16,xl:24};var Z=R({name:"QSeparator",props:{...C,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const b=y(),e=I(t,b.proxy.$q),u=l(()=>t.vertical===!0?"vertical":"horizontal"),c=l(()=>` q-separator--${u.value}`),d=l(()=>t.inset!==!1?`${c.value}-${U[t.inset]}`:""),h=l(()=>`q-separator${c.value}${d.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(e.value===!0?" q-separator--dark":"")),k=l(()=>{const n={};if(t.size!==void 0&&(n[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const v=t.spaced===!0?`${V.md}px`:t.spaced in V?`${V[t.spaced]}px`:t.spaced,f=t.vertical===!0?["Left","Right"]:["Top","Bottom"];n[`margin${f[0]}`]=n[`margin${f[1]}`]=v}return n});return()=>g("hr",{class:h.value,style:k.value,"aria-orientation":u.value})}});const ee={...C,...M,...H,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:t=>t==="tf"||t==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},te=["update:modelValue"];function ae(t,b){const{props:e,slots:u,emit:c,proxy:d}=y(),{$q:h}=d,k=I(e,h),n=L(null),{refocusTargetEl:v,refocusTarget:f}=N(e,n),z=Q(e,G),i=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),$=l(()=>{const a=s(e.val);return i.value===!0?e.modelValue.findIndex(o=>s(o)===a):-1}),r=l(()=>i.value===!0?$.value>-1:s(e.modelValue)===s(e.trueValue)),m=l(()=>i.value===!0?$.value===-1:s(e.modelValue)===s(e.falseValue)),S=l(()=>r.value===!1&&m.value===!1),B=l(()=>e.disable===!0?-1:e.tabindex||0),_=l(()=>`q-${t} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(k.value===!0?` q-${t}--dark`:"")+(e.dense===!0?` q-${t}--dense`:"")+(e.leftLabel===!0?" reverse":"")),w=l(()=>{const a=r.value===!0?"truthy":m.value===!0?"falsy":"indet",o=e.color!==void 0&&(e.keepColor===!0||(t==="toggle"?r.value===!0:m.value!==!0))?` text-${e.color}`:"";return`q-${t}__inner relative-position non-selectable q-${t}__inner--${a}${o}`}),O=l(()=>{const a={type:"checkbox"};return e.name!==void 0&&Object.assign(a,{".checked":r.value,"^checked":r.value===!0?"checked":void 0,name:e.name,value:i.value===!0?e.val:e.trueValue}),a}),A=J(O),P=l(()=>{const a={tabindex:B.value,role:t==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":S.value===!0?"mixed":r.value===!0?"true":"false"};return e.disable===!0&&(a["aria-disabled"]="true"),a});function x(a){a!==void 0&&(q(a),f(a)),e.disable!==!0&&c("update:modelValue",T(),a)}function T(){if(i.value===!0){if(r.value===!0){const a=e.modelValue.slice();return a.splice($.value,1),a}return e.modelValue.concat([e.val])}if(r.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(m.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function j(a){(a.keyCode===13||a.keyCode===32)&&q(a)}function D(a){(a.keyCode===13||a.keyCode===32)&&x(a)}const F=b(r,S);return Object.assign(d,{toggle:x}),()=>{const a=F();e.disable!==!0&&A(a,"unshift",` q-${t}__native absolute q-ma-none q-pa-none`);const o=[g("div",{class:w.value,style:z.value,"aria-hidden":"true"},a)];v.value!==null&&o.push(v.value);const p=e.label!==void 0?E(u.default,[e.label]):K(u.default);return p!==void 0&&o.push(g("div",{class:`q-${t}__label q-anchor--skip`},p)),g("div",{ref:n,class:_.value,...P.value,onClick:x,onKeydown:j,onKeyup:D},o)}}export{Z as Q,te as a,ae as b,ee as u};

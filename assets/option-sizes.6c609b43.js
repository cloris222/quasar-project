import{k as f,G as g,H as $,c as n,h as m,g as x,r as h}from"./index.3e2564e1.js";const S={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},c={xs:2,sm:4,md:8,lg:16,xl:24};var z=f({name:"QSeparator",props:{...g,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const l=x(),s=$(e,l.proxy.$q),i=n(()=>e.vertical===!0?"vertical":"horizontal"),r=n(()=>` q-separator--${i.value}`),a=n(()=>e.inset!==!1?`${r.value}-${S[e.inset]}`:""),t=n(()=>`q-separator${r.value}${a.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(s.value===!0?" q-separator--dark":"")),v=n(()=>{const o={};if(e.size!==void 0&&(o[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const d=e.spaced===!0?`${c.md}px`:e.spaced in c?`${c[e.spaced]}px`:e.spaced,u=e.vertical===!0?["Left","Right"]:["Top","Bottom"];o[`margin${u[0]}`]=o[`margin${u[1]}`]=d}return o});return()=>m("hr",{class:t.value,style:v.value,"aria-orientation":i.value})}});function b(e,l){const s=h(null),i=n(()=>e.disable===!0?null:m("span",{ref:s,class:"no-outline",tabindex:-1}));function r(a){const t=l.value;a!==void 0&&a.type.indexOf("key")===0?t!==null&&document.activeElement!==t&&t.contains(document.activeElement)===!0&&t.focus():s.value!==null&&(a===void 0||t!==null&&t.contains(a.target)===!0)&&s.value.focus()}return{refocusTargetEl:i,refocusTarget:r}}var y={xs:30,sm:35,md:40,lg:50,xl:60};export{z as Q,y as o,b as u};
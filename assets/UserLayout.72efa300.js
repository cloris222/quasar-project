import{N as y,r as k,bk as x,O as r,ak as C,d as e,Q as a,bl as V,bm as B,bn as D,U as t,X as d,ao as n,bf as L,aq as c,P as u,aF as s,a8 as _,al as o,aC as p,bo as N,am as h,bp as I,aN as f}from"./index.26672a92.js";import{Q as S,a as U,b as q,c as z}from"./QFooter.6f812ac1.js";import"./TouchPan.d6a5c07a.js";import"./touch.70a9dd44.js";import"./format.3e32b8d9.js";import"./use-prevent-scroll.4d3d5b1f.js";const A={id:"adminLayout"},F={class:"left_area"},H={class:"right_area"},O={class:"absolute-bottom bg-transparent"},P=["src"],R={class:"text-weight-bold"},T=t("br",null,null,-1),Y=t("div",{class:"copyright"}," Copyright \xA9 2023 Yung Chien Yang. All rights reserved. ",-1),Z={__name:"UserLayout",setup(j){const i=y(),{logout:g,avatar:v}=i,l=k(!1),b=()=>{l.value=!l.value};return(E,m)=>{const Q=x("router-view");return r(),C("div",A,[e(V,{view:"hHh lpR fFf"},{default:a(()=>[e(B,{elevated:"",class:"bg-primary text-white"},{default:a(()=>[e(D,{class:"justify-between"},{default:a(()=>[t("div",F,[e(d,{dense:"",flat:"",round:"",icon:"menu",onClick:b}),e(d,{flat:"",round:"",color:"white",icon:"home",to:"/",size:"lg"})]),t("div",H,[e(d,{flat:"",round:"",icon:"mdi-door-open",size:"lg",onClick:n(g)},null,8,["onClick"])])]),_:1})]),_:1}),e(S,{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=w=>l.value=w),"show-if-above":"",width:350,breakpoint:400},{default:a(()=>[e(U,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},{default:a(()=>[e(L,{padding:""},{default:a(()=>[c((r(),u(p,{clickable:"",to:"/user"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(_,{name:"face",color:"secondary"})]),_:1}),e(s,null,{default:a(()=>[o(" \u6703\u54E1\u8CC7\u6599 ")]),_:1})]),_:1})),[[f]]),c((r(),u(p,{clickable:"",to:"/user/orders"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(_,{name:"star",color:"secondary"})]),_:1}),e(s,null,{default:a(()=>[o(" \u6211\u7684\u9810\u7D04 ")]),_:1})]),_:1})),[[f]]),c((r(),u(p,{clickable:"",to:"/user/shoppings"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(_,{name:"event_available",color:"secondary"})]),_:1}),e(s,null,{default:a(()=>[o(" \u6211\u7684\u8A02\u55AE ")]),_:1})]),_:1})),[[f]])]),_:1})]),_:1}),e(q,{class:"absolute-top",src:"https://cdn.quasar.dev/img/material.png",style:{height:"150px"}},{default:a(()=>[t("div",O,[e(N,{size:"56px",class:"q-mb-sm"},{default:a(()=>[t("img",{src:n(v)},null,8,P)]),_:1}),t("div",R,[o(h(n(i).name)+" ",1),T,o(" "+h(n(i).account),1)])])]),_:1})]),_:1},8,["modelValue"]),e(I,null,{default:a(()=>[e(Q)]),_:1}),e(z,{elevated:"",class:"bg-primary text-white"},{default:a(()=>[Y]),_:1})]),_:1})])}}};export{Z as default};

import{M as k,O as C,r as B,bo as V,P as r,al as D,d as e,R as a,bp as L,bq as H,br as I,V as t,Y as f,ap as n,bj as R,ar as c,Q as d,aF as s,af as u,am as o,aH as _,bf as S,an as h,bs as q,aJ as p,bv as A}from"./index.6657fd98.js";import{Q as F,a as N,b as U,c as Y}from"./QFooter.6d5e7edd.js";import"./TouchPan.9cfed6c9.js";import"./touch.70a9dd44.js";import"./format.3e32b8d9.js";import"./use-prevent-scroll.fa0a1e6f.js";const j={id:"userLayout"},z={class:"left_area"},O=t("img",{src:A},null,-1),P=[O],T=t("h4",{class:"title"}," \u684C\u4E0B\u5427\u6703\u54E1\u5F8C\u53F0\u7CFB\u7D71 ",-1),E={class:"right_area"},J={class:"absolute-bottom bg-transparent"},M=["src"],G={class:"text-weight-bold"},K=t("br",null,null,-1),W=t("div",{class:"copyright"}," Copyright \xA9 2023 Yung Chien Yang. All rights reserved. ",-1),le={__name:"UserLayout",setup(X){const g=k(),i=C(),{logout:v,avatar:b}=i,l=B(!1),Q=()=>{l.value=!l.value},w=()=>{g.push("/")};return(Z,m)=>{const y=V("router-view");return r(),D("div",j,[e(L,{view:"hHh lpR fFf"},{default:a(()=>[e(H,{elevated:"",class:"bg-primary text-white"},{default:a(()=>[e(I,{class:"justify-between"},{default:a(()=>[t("div",z,[e(f,{flat:"",round:"",icon:"menu",class:"menuBtn",onClick:Q}),t("div",{class:"logoBtn",onClick:w},P),T]),t("div",E,[e(f,{flat:"",round:"",icon:"mdi-door-open",size:"lg",onClick:n(v)},null,8,["onClick"])])]),_:1})]),_:1}),e(F,{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=x=>l.value=x),"show-if-above":"",width:350,breakpoint:400},{default:a(()=>[e(N,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},{default:a(()=>[e(R,{padding:""},{default:a(()=>[c((r(),d(_,{clickable:"",to:"/user"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(u,{name:"face",color:"secondary"})]),_:1}),e(s,null,{default:a(()=>[o(" \u6703\u54E1\u8CC7\u6599 ")]),_:1})]),_:1})),[[p]]),c((r(),d(_,{clickable:"",to:"/user/orders"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(u,{name:"star",color:"secondary"})]),_:1}),e(s,null,{default:a(()=>[o(" \u6211\u7684\u9810\u7D04 ")]),_:1})]),_:1})),[[p]]),c((r(),d(_,{clickable:"",to:"/user/shoppings"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(u,{name:"event_available",color:"secondary"})]),_:1}),e(s,null,{default:a(()=>[o(" \u6211\u7684\u8A02\u55AE ")]),_:1})]),_:1})),[[p]])]),_:1})]),_:1}),e(U,{class:"absolute-top",src:"https://cdn.quasar.dev/img/material.png",style:{height:"150px"}},{default:a(()=>[t("div",J,[e(S,{size:"56px",class:"q-mb-sm"},{default:a(()=>[t("img",{src:n(b)},null,8,M)]),_:1}),t("div",G,[o(h(n(i).name)+" ",1),K,o(" "+h(n(i).account),1)])])]),_:1})]),_:1},8,["modelValue"]),e(q,null,{default:a(()=>[e(y)]),_:1}),e(Y,{elevated:"",class:"bg-primary text-white"},{default:a(()=>[W]),_:1})]),_:1})])}}};export{le as default};
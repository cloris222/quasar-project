import{L as k,N as C,r as B,bo as L,O as r,au as V,d as e,Q as a,bp as D,bq as N,br as q,U as t,X as f,ay as n,bj as I,aq as c,P as d,at as s,a8 as u,av as o,ap as _,bf as S,aw as h,bs as U,aN as p,bv as A}from"./index.16bc123c.js";import{Q as H,a as R,b as j,c as z}from"./QFooter.6e3ea8b4.js";import"./TouchPan.e2779799.js";import"./touch.70a9dd44.js";import"./format.3e32b8d9.js";import"./use-prevent-scroll.fb1710ee.js";const F={id:"userLayout"},O={class:"left_area"},P=t("img",{src:A},null,-1),T=[P],Y=t("h4",{class:"title"}," \u684C\u4E0B\u5427\u6703\u54E1\u5F8C\u53F0\u7CFB\u7D71 ",-1),E={class:"right_area"},X={class:"absolute-bottom bg-transparent"},G=["src"],J={class:"text-weight-bold"},K=t("br",null,null,-1),M=t("div",{class:"copyright"}," Copyright \xA9 2023 Yung Chien Yang. All rights reserved. ",-1),le={__name:"UserLayout",setup(W){const v=k(),i=C(),{logout:g,avatar:b}=i,l=B(!1),Q=()=>{l.value=!l.value},w=()=>{v.push("/")};return(Z,m)=>{const y=L("router-view");return r(),V("div",F,[e(D,{view:"hHh lpR fFf"},{default:a(()=>[e(N,{elevated:"",class:"bg-primary text-white"},{default:a(()=>[e(q,{class:"justify-between"},{default:a(()=>[t("div",O,[e(f,{flat:"",round:"",icon:"menu",class:"menuBtn",onClick:Q}),t("div",{class:"logoBtn",onClick:w},T),Y]),t("div",E,[e(f,{flat:"",round:"",icon:"mdi-door-open",size:"lg",onClick:n(g)},null,8,["onClick"])])]),_:1})]),_:1}),e(H,{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=x=>l.value=x),"show-if-above":"",width:350,breakpoint:400},{default:a(()=>[e(R,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},{default:a(()=>[e(I,{padding:""},{default:a(()=>[c((r(),d(_,{clickable:"",to:"/user"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(u,{name:"face",color:"secondary"})]),_:1}),e(s,null,{default:a(()=>[o(" \u6703\u54E1\u8CC7\u6599 ")]),_:1})]),_:1})),[[p]]),c((r(),d(_,{clickable:"",to:"/user/orders"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(u,{name:"star",color:"secondary"})]),_:1}),e(s,null,{default:a(()=>[o(" \u6211\u7684\u9810\u7D04 ")]),_:1})]),_:1})),[[p]]),c((r(),d(_,{clickable:"",to:"/user/shoppings"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(u,{name:"event_available",color:"secondary"})]),_:1}),e(s,null,{default:a(()=>[o(" \u6211\u7684\u8A02\u55AE ")]),_:1})]),_:1})),[[p]])]),_:1})]),_:1}),e(j,{class:"absolute-top",src:"https://cdn.quasar.dev/img/material.png",style:{height:"150px"}},{default:a(()=>[t("div",X,[e(S,{size:"56px",class:"q-mb-sm"},{default:a(()=>[t("img",{src:n(b)},null,8,G)]),_:1}),t("div",J,[o(h(n(i).name)+" ",1),K,o(" "+h(n(i).account),1)])])]),_:1})]),_:1},8,["modelValue"]),e(U,null,{default:a(()=>[e(y)]),_:1}),e(z,{elevated:"",class:"bg-primary text-white"},{default:a(()=>[M]),_:1})]),_:1})])}}};export{le as default};
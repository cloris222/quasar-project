import{b4 as k,L as C,J as S,N as B,r as L,M as D,Z as G,O as n,au as d,U as e,d as s,Q as o,F as g,ax as p,Y as b,X as u,av as c,a8 as N,b5 as y,V as r,P as U,aw as m,aq as z,aA as E}from"./index.16bc123c.js";import{Q as F,a as v}from"./QBreadcrumbs.142962db.js";import{Q as I}from"./QChip.348a6e5c.js";import{Q as Y}from"./QSpace.6d97e596.js";import{Q as $,a as A}from"./QForm.5e043099.js";import{Q as P}from"./QDialog.14f0e5ed.js";import"./use-key-composition.43202cad.js";import"./use-prevent-scroll.fb1710ee.js";const R={id:"boardGameList_idView"},T={class:"container"},J={class:"row q-mt-lg q-my-lg"},M={class:"col-12"},O={class:"gameInfo"},X={class:"row img_area bg-primary"},Z={class:"col-8 q-mx-auto q-pt-lg"},j={class:"slideshow"},H=["src"],K={class:"thumbnails"},W=["src","onClick"],x={class:"row info_area"},ee={class:"q-pt-lg"},se={class:"info_name"},ae={class:"info_rules"},oe={class:"col-10"},le=e("div",{class:"text-h6"}," \u8CFC\u7269\u8ECA ",-1),te={id:"footer"},re={class:"container"},ie=e("div",{class:"row"},[e("div",{class:"col-12"},[e("div",{class:"info_area"},[c(" \u5730\u5740 : \u65B0\u5317\u5E02\u6CF0\u5C71\u5340\u8CB4\u5B50\u91CC\u81F4\u9060\u65B0\u675155\u4E4B1\u865F "),e("br"),c(" \u96FB\u8A71 : 02-23941157 "),e("br"),c(" E-mail : admin@gmail.com "),e("br"),c(" \u71DF\u696D\u6642\u9593 : \u65E9\u4E0A10:00\u81F3\u665A\u4E0A23:00 \u6BCF\u9031\u4E09\u516C\u4F11 ")])])],-1),ne={class:"row"},ce={class:"col-12"},de={class:"btn_area"},ue=e("div",{class:"col-12"},[e("div",{class:"copyright"}," Copyright \xA9 2023 Yung Chien Yang. All rights reserved. ")],-1),we={__name:"boardGameList_idView",setup(me){const h=k(),Q=C(),w=S(),q=B(),f=L(0),V=a=>{f.value=a},l=D({name:"",images:[],category:[],gamer:0,age:0,rules:"",sell:!0,loading:!1});return(async()=>{try{console.log(h);const{data:a}=await G.get("/boardGameList/"+h.params.id);l.name=a.result.name,l.images=a.result.images,l.category=a.result.category,l.gamer=a.result.gamer,l.age=a.result.age,l.rules=a.result.rules,l.sell=a.result.sell,document.title="\u684C\u4E0B\u5427 | "+l.name}catch{w.notify({position:"top",message:"\u53D6\u5F97\u5167\u5BB9\u5931\u6557",color:"negative",avatar:`https://source.boringavatars.com/beam/256/${q.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`}),Q.go(-1)}})(),(a,_)=>(n(),d(g,null,[e("div",R,[e("div",T,[e("div",J,[e("div",M,[s(F,{class:"text-primary","active-color":"grey"},{separator:o(()=>[s(N,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:o(()=>[s(v,{label:"\u9996\u9801",icon:"home",to:"/"}),s(v,{label:"\u5E97\u5167\u684C\u904A",icon:"mdi-bookshelf",to:"/boardGameList"}),s(v,{label:l.name,icon:"mdi-cards"},null,8,["label"])]),_:1})])]),e("div",O,[e("div",X,[e("div",Z,[e("div",j,[(n(!0),d(g,null,p(l.images,(t,i)=>(n(),d("div",{key:i,class:y(["slide",{active:f.value===i}])},[e("img",{src:t},null,8,H)],2))),128))]),e("div",K,[(n(!0),d(g,null,p(l.images,(t,i)=>(n(),d("img",{key:i,src:t,class:y({active:f.value===i}),onClick:_e=>V(i)},null,10,W))),128))])])]),e("div",x,[s(b,null,{default:o(()=>[s(r,null,{default:o(()=>[e("div",ee,[(n(!0),d(g,null,p(l.category,(t,i)=>(n(),U(I,{key:i,color:"primary",class:"text-white"},{default:o(()=>[c(m(t),1)]),_:2},1024))),128))])]),_:1}),s(r,null,{default:o(()=>[s(r,null,{default:o(()=>[e("div",se,m(l.name),1)]),_:1}),s(r,null,{default:o(()=>[e("div",ae,m(l.rules),1)]),_:1})]),_:1})]),_:1}),e("div",oe,[s(P,{modelValue:a.cartDialog,"onUpdate:modelValue":_[1]||(_[1]=t=>a.cartDialog=t),persistent:""},{default:o(()=>[s(b,{class:"q-px-md"},{default:o(()=>[s(r,{class:"row items-center q-pb-md"},{default:o(()=>[le,s(Y),z(s(u,{icon:"close",flat:"",round:"",dense:""},null,512),[[E]])]),_:1}),s($,{class:"q-gutter-md",style:{width:"500px"},onSubmit:a.onSubmit},{default:o(()=>[s(r,null,{default:o(()=>[c(" \u54C1\u540D:"+m(a.form.name),1)]),_:1}),s(r,null,{default:o(()=>[c(" \u50F9\u9322:"+m(a.form.price),1)]),_:1}),s(r,null,{default:o(()=>[s(A,{modelValue:a.form.quantity,"onUpdate:modelValue":_[0]||(_[0]=t=>a.form.quantity=t),outlined:"",type:"number",label:"\u8ACB\u9078\u64C7\u5546\u54C1\u6578\u91CF *","lazy-rules":"",rules:[a.rules.required,a.rules.number]},null,8,["modelValue","rules"])]),_:1}),s(r,null,{default:o(()=>[s(u,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:a.form.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])])])])])]),e("div",te,[e("div",re,[ie,e("div",ne,[e("div",ce,[e("div",de,[s(u,{icon:"mdi-facebook",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),s(u,{icon:"mdi-instagram",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),s(u,{icon:"mdi-twitter",outline:"",rounded:"",color:"secondary"})])]),ue])])])],64))}};export{we as default};

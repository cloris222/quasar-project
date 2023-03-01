import{P as l,al as m,d as a,R as c,V as e,Y as _,W as x,am as n,an as p,ad as g,F as h,ao as f,Q as L,Z as I,L as S,N as V,r as Q,o as z,w as A,c as E,_ as F,ap as P,b1 as R,b2 as U}from"./index.d11d03a6.js";import{Q as Y,a as k}from"./QBreadcrumbs.2fbfc483.js";import{_ as C,Q as D}from"./lodash.61908efc.js";import{Q as M}from"./QSelect.4d2dbe26.js";import{Q as B}from"./QChip.4484fbeb.js";import"./TouchPan.fe0b08e9.js";import"./touch.70a9dd44.js";import"./use-key-composition.9013f02e.js";import"./format.3e32b8d9.js";import"./_commonjsHelpers.b8add541.js";import"./QDialog.9b24a70c.js";import"./use-prevent-scroll.fdfd41a5.js";const T={id:"boardGameListCard"},W={class:"cardImage"},Z=["src"],j={class:"row text-h6"},H={class:"gamer_icon"},J={style:{"font-size":"16px"}},K={__name:"boardGameListcard",props:{_id:{type:String,default:""},name:{type:String,default:""},images:{type:Array,default(){return[]}},category:{type:Array,default(){return[]}},gamer:{type:String,default:""},age:{type:Number,default:0},rules:{type:String,default:""},sell:{type:Boolean,default:!1}},setup(d){return(b,v)=>(l(),m("div",T,[a(I,{class:"boardGameListCard"},{default:c(()=>[e("div",W,[e("img",{src:d.images[0]},null,8,Z),a(_,{"icon-right":"mdi-arrow-right",label:"\u4E86\u89E3\u8A73\u60C5",color:"secondary",class:"detailBtn",to:"/boardGameList/"+d._id},null,8,["to"])]),a(x,null,{default:c(()=>[e("div",j,[n(p(d.name)+" ",1),e("div",H,[a(g,{name:"diversity_3",color:"primary",size:"sm",class:"q-mr-sm"}),e("span",J,p(d.gamer),1)])])]),_:1}),a(x,{class:"q-pt-none"},{default:c(()=>[(l(!0),m(h,null,f(d.category,(i,y)=>(l(),L(B,{key:y,color:"secondary","text-color":"white"},{default:c(()=>[n(p(i),1)]),_:2},1024))),128))]),_:1})]),_:1})]))}},O={id:"boardGameList"},X={class:"container"},ee={class:"row"},ae={class:"col-3"},te={class:"row filter_area"},se={class:"col-12 col-lg-5"},oe={class:"gamer_filter"},re={class:"title_area"},ie=e("div",{class:"text-white"}," \u4EBA\u6578 ",-1),le={class:"input_area"},ce={class:"col-12 col-lg-7"},ne={class:"category_filter"},de={class:"title_area"},me=e("div",{class:"text-white"}," \u6A19\u7C64 ",-1),ue={class:"input_area q-mr-lg"},_e={class:"chip_area"},pe={class:"row q-mx-auto boardGameList_card_area"},ge={id:"footer"},he={class:"container"},ve=e("div",{class:"row"},[e("div",{class:"col-12"},[e("div",{class:"info_area"},[n(" \u5730\u5740 : \u65B0\u5317\u5E02\u6CF0\u5C71\u5340\u8CB4\u5B50\u91CC\u81F4\u9060\u65B0\u675155\u4E4B1\u865F "),e("br"),n(" \u96FB\u8A71 : 02-23941157 "),e("br"),n(" E-mail : admin@gmail.com "),e("br"),n(" \u71DF\u696D\u6642\u9593 : \u65E9\u4E0A10:00\u81F3\u665A\u4E0A23:00 \u6BCF\u9031\u4E09\u516C\u4F11 ")])])],-1),ye={class:"row"},fe={class:"col-12"},be={class:"btn_area"},we=e("div",{class:"col-12"},[e("div",{class:"copyright"}," Copyright \xA9 2023 Yung Chien Yang. All rights reserved. ")],-1),Se={__name:"boardGameListView",setup(d){const b=S(),v=V([]),i=Q(["\u71B1\u9580\u904A\u6232","\u6700\u65B0\u904A\u6232"]),y=["\u6D3E\u5C0D\u904A\u6232","\u7B56\u7565\u904A\u6232","\u9663\u71DF\u904A\u6232","\u89AA\u5B50\u904A\u6232","\u7D19\u724C\u904A\u6232","\u5176\u4ED6\u904A\u6232","\u71B1\u9580\u904A\u6232","\u6700\u65B0\u904A\u6232","\u65B0\u624B\u53CB\u5584"],G=Q("less");z(()=>{A(()=>s.category,(o,r)=>{i.value=[],i.value.push(...s.category.map(t=>t))})});const $={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10\u2191"},q=o=>{i.value.splice(o,1),s.category.splice(o,1)},s=V({gamer:{min:1,max:5},category:["\u71B1\u9580\u904A\u6232","\u6700\u65B0\u904A\u6232"]}),N=E(()=>v.filter(o=>s.gamer.max===10?o.gamer.split("~").map(Number)[1]>=parseInt(s.gamer.max)&&parseInt(C.intersection(o.category,s.category).length)!==0:o.gamer.split("~").map(Number)[0]>=parseInt(s.gamer.min)&&o.gamer.split("~").map(Number)[1]<=parseInt(s.gamer.max)&&parseInt(C.intersection(o.category,s.category).length)!==0));return(async()=>{var o,r;try{const{data:t}=await F.get("/boardGameList");v.push(...t.result)}catch(t){b.notify({position:"top",message:((r=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:r.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}})(),(o,r)=>(l(),m(h,null,[e("div",O,[e("div",X,[e("div",ee,[e("div",ae,[a(Y,{class:"text-primary","active-color":"grey"},{separator:c(()=>[a(g,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:c(()=>[a(k,{label:"\u9996\u9801",icon:"home",to:"/"}),a(k,{label:"\u684C\u904A\u6E05\u55AE",icon:"mdi-bookshelf"})]),_:1})])]),e("div",te,[e("div",se,[e("div",oe,[e("div",re,[a(g,{name:"diversity_3",size:"sm",color:"secondary"}),ie]),e("div",le,[a(D,{modelValue:s.gamer,"onUpdate:modelValue":r[0]||(r[0]=t=>s.gamer=t),disable:G.value==="more",snap:"",markers:"","marker-labels":$,color:"white",min:1,max:10},null,8,["modelValue","disable"])])])]),e("div",ce,[e("div",ne,[e("div",de,[a(g,{name:"sell",size:"sm",color:"secondary"}),me]),e("div",ue,[a(M,{modelValue:s.category,"onUpdate:modelValue":r[1]||(r[1]=t=>s.category=t),filled:"",multiple:"",options:y,label:"\u65B0\u589E\u6A19\u7C64",style:{width:"250px"},"bottom-slots":"","bg-color":"white"},null,8,["modelValue"])]),e("div",_e,[(l(!0),m(h,null,f(i.value,(t,u)=>(l(),L(B,{key:u,modelValue:i.value,"onUpdate:modelValue":r[2]||(r[2]=w=>i.value=w),color:"secondary","text-color":"white",clickable:"",icon:"mdi-close-circle","icon-color":"white",onClick:w=>q(u)},{default:c(()=>[n(p(t),1)]),_:2},1032,["modelValue","onClick"]))),128))])])])]),e("div",pe,[(l(!0),m(h,null,f(P(N),(t,u)=>(l(),m("div",{key:u,class:"col-6 col-lg-4 q-mb-lg"},[a(K,R(U(t)),null,16)]))),128))])])]),e("div",ge,[e("div",he,[ve,e("div",ye,[e("div",fe,[e("div",be,[a(_,{icon:"mdi-facebook",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),a(_,{icon:"mdi-instagram",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),a(_,{icon:"mdi-twitter",outline:"",rounded:"",color:"secondary"})])]),we])])])],64))}};export{Se as default};

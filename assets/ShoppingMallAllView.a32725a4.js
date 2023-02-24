import{r as g,O as d,ak as h,d as a,Q as s,U as e,X as v,V as c,al as i,am as f,a8 as V,F as w,an as B,P,Y as E,N as L,J as T,M as $,o as X,w as Z,c as I,Z as G,ao as H,ap as K,aq as W,ar as ee}from"./index.34fb8b7b.js";import{Q as ae,a as z}from"./QBreadcrumbs.8360dcba.js";import{_ as A,Q as te,a as Q,b as le}from"./lodash.8f505506.js";import{Q as oe}from"./QSelect.128b4fac.js";import{Q as F}from"./QChip.94e8af33.js";import{Q as se}from"./QSpace.52326c5a.js";import{Q as re,a as ie}from"./QForm.a53b47a6.js";import{Q as ne}from"./QDialog.73c018a2.js";import"./option-sizes.adf6df3d.js";import"./use-key-composition.610899c4.js";import"./TouchPan.2a035f00.js";import"./touch.70a9dd44.js";import"./format.3e32b8d9.js";import"./_commonjsHelpers.b8add541.js";import"./use-prevent-scroll.320de15e.js";const ce={id:"ProductCard"},de={class:"cardImage"},ue=["src"],me={class:"row text-h6"},pe={class:"gamer"},_e={class:"gamer_icon"},ge={class:"gamer_number"},ve={__name:"ProductCard",props:{_id:{type:String,default:""},name:{type:String,default:""},images:{type:Array,default(){return[]}},category:{type:Array,default(){return[]}},gamer:{type:String,default:""},age:{type:Number,default:0},rules:{type:String,default:""},price:{type:Number,default:0},sell:{type:Boolean,default:!1}},emits:["open-cart-dialog"],setup(u,{emit:x}){const C=g(!0),S=()=>{x("open-cart-dialog",C.value)};return(U,m)=>(d(),h("div",ce,[a(E,{class:"productCard"},{default:s(()=>[e("div",de,[e("img",{src:u.images[0]},null,8,ue),a(v,{"icon-right":"mdi-arrow-right",label:"\u4E86\u89E3\u8A73\u60C5",color:"secondary",class:"detailBtn",to:"/products/"+u._id},null,8,["to"])]),a(c,null,{default:s(()=>[e("div",me,[i(f(u.name)+" ",1),e("div",pe,[e("div",_e,[a(V,{name:"diversity_3",color:"primary",size:"sm",class:"q-mr-sm"})]),e("div",ge,f(u.gamer),1)])])]),_:1}),a(c,{class:"q-pt-none"},{default:s(()=>[(d(!0),h(w,null,B(u.category,(k,p)=>(d(),P(F,{key:p,color:"primary","text-color":"white"},{default:s(()=>[i(f(k),1)]),_:2},1024))),128))]),_:1}),a(c,{class:"q-pt-none price_area"},{default:s(()=>[i(" $"+f(u.price),1)]),_:1}),a(c,{class:"q-pt-none btn_area flex justify-center no-wrap"},{default:s(()=>[a(v,{icon:"mdi-cart-outline",flat:"",class:"icon_cart",onClick:S})]),_:1})]),_:1})]))}},fe={id:"shoppingMall"},ye={class:"container"},he={class:"row q-mt-lg"},be={class:"col-3"},Ve={class:"toolSection"},ke={class:"row justify-center q-mt-lg q-mx-auto"},qe={class:"col-4"},Qe={class:"title_area"},we={class:"content_area"},xe={class:"col-4"},Ce={class:"title_area"},Se={class:"content_area"},Ue={class:"select_area"},$e={class:"chip_area"},Be={class:"col-4"},Ne={class:"title_area"},De={class:"content_area"},Ie={class:"radio_area"},ze={class:"row q-mx-auto justify-center"},Ae=e("div",{class:"text-h6"}," \u8CFC\u7269\u8ECA ",-1),Pe={id:"footer"},Ee={class:"container"},Fe=e("div",{class:"row"},[e("div",{class:"col-12"},[e("div",{class:"info_area"},[i(" \u5730\u5740 : \u65B0\u5317\u5E02\u6CF0\u5C71\u5340\u8CB4\u5B50\u91CC\u81F4\u9060\u65B0\u675155\u4E4B1\u865F "),e("br"),i(" \u96FB\u8A71 : 02-23941157 "),e("br"),i(" E-mail : admin@gmail.com "),e("br"),i(" \u71DF\u696D\u6642\u9593 : \u65E9\u4E0A10:00\u81F3\u665A\u4E0A23:00 \u6BCF\u9031\u4E09\u516C\u4F11 ")])])],-1),Me={class:"row"},je={class:"col-12"},Oe={class:"btn_area"},Re=e("div",{class:"col-12"},[e("div",{class:"copyright"}," Copyright \xA9 2023 Yung Chien Yang. All rights reserved. ")],-1),sa={__name:"ShoppingMallAllView",setup(u){const x=L(),{editCart:C}=x,S=T(),U=$([]),m=g(["\u6D3E\u5C0D\u904A\u6232","\u66A2\u92B7\u904A\u6232"]),k=g(!0),p=g(!1),M=["\u6D3E\u5C0D\u904A\u6232","\u7B56\u7565\u904A\u6232","\u9663\u71DF\u904A\u6232","\u89AA\u5B50\u904A\u6232","\u7D19\u724C\u904A\u6232","\u5176\u4ED6\u904A\u6232","\u66A2\u92B7\u904A\u6232","\u6700\u65B0\u4E0A\u67B6","\u64BF\u4FBF\u5B9C","\u516B\u6210\u65B0","\u8FD1\u5168\u65B0"],y=g("less"),b=g("0"),r=$({p_id:"",quantity:0,price:0,name:"",loading:!1}),j=o=>{p.value=!0,r.name=o.name,r.p_id=o._id,r.price=o.price,r.quantity=0,console.log(p.value)};X(()=>{Z(()=>n.category,(o,t)=>{m.value=[],m.value.push(...n.category.map(l=>l))})});const O=o=>{m.value.splice(o,1),n.category.splice(o,1)},N={required(o){return!!o||"\u6B04\u4F4D\u5FC5\u586B"},number(o){return o>0||"\u6578\u91CF\u932F\u8AA4"}},R=async()=>{r.loading=!0,await C({_id:r.p_id,quantity:r.quantity,price:r.price,message:"\u52A0\u5165\u8CFC\u7269\u8ECA\u6210\u529F"}),p.value=!1},n=$({gamer:{min:1,max:5},category:["\u6D3E\u5C0D\u904A\u6232","\u66A2\u92B7\u904A\u6232"]}),Y=I(()=>U.filter(o=>y.value==="less"?o.gamer.split("~").map(Number)[0]>=parseInt(n.gamer.min)&&o.gamer.split("~").map(Number)[1]<=parseInt(n.gamer.max)&&parseInt(A.intersection(o.category,n.category).length)!==0:o.gamer.split("~").map(Number)[1]>10&&parseInt(A.intersection(o.category,n.category).length)!==0)),D=g(Y),J=I(()=>b.value==="0"?D.value.slice().sort((o,t)=>o.price-t.price):D.value.slice().sort((o,t)=>t.price-o.price));return(async()=>{var o,t;try{const{data:l}=await G.get("/products");U.push(...l.result)}catch(l){S.notify({position:"top",message:((t=(o=l==null?void 0:l.response)==null?void 0:o.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}})(),(o,t)=>(d(),h(w,null,[e("div",fe,[e("div",ye,[e("div",he,[e("div",be,[a(ae,{class:"text-primary","active-color":"grey"},{separator:s(()=>[a(V,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:s(()=>[a(z,{label:"\u9996\u9801",icon:"home",to:"/"}),a(z,{label:"\u4E8C\u624B\u5C08\u5340",icon:"mdi-bookshelf"})]),_:1})])]),a(te,{modelValue:k.value,"onUpdate:modelValue":t[7]||(t[7]=l=>k.value=l),icon:"mdi-filter-variant",label:"\u7BE9\u9078\u689D\u4EF6"},{default:s(()=>[e("div",Ve,[e("div",ke,[e("div",qe,[e("div",Qe,[a(V,{name:"diversity_3",size:"sm"}),i(" \u4EBA\u6578 ")]),e("div",we,[a(Q,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=l=>y.value=l),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"less",label:"10\u4EBA\u4EE5\u4E0B"},null,8,["modelValue"]),a(Q,{modelValue:y.value,"onUpdate:modelValue":t[1]||(t[1]=l=>y.value=l),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"more",label:"10\u4EBA\u4EE5\u4E0A"},null,8,["modelValue"]),a(le,{modelValue:n.gamer,"onUpdate:modelValue":t[2]||(t[2]=l=>n.gamer=l),disable:y.value==="more",snap:"",markers:"","marker-labels":"",min:1,max:10},null,8,["modelValue","disable"])])]),e("div",xe,[e("div",Ce,[a(V,{name:"sell",size:"sm"}),i(" \u6A19\u7C64 ")]),e("div",Se,[e("div",Ue,[a(oe,{modelValue:n.category,"onUpdate:modelValue":t[3]||(t[3]=l=>n.category=l),filled:"",multiple:"",options:M,label:"\u65B0\u589E\u6A19\u7C64",style:{width:"250px"},"bottom-slots":""},null,8,["modelValue"])]),e("div",$e,[(d(!0),h(w,null,B(m.value,(l,q)=>(d(),P(F,{key:q,modelValue:m.value,"onUpdate:modelValue":t[4]||(t[4]=_=>m.value=_),color:"primary","text-color":"white",clickable:"",icon:"mdi-close-circle","icon-color":"white",onClick:_=>O(q)},{default:s(()=>[i(f(l),1)]),_:2},1032,["modelValue","onClick"]))),128))])])]),e("div",Be,[e("div",Ne,[a(V,{name:"monetization_on",size:"sm"}),i(" \u50F9\u683C ")]),e("div",De,[e("div",Ie,[a(Q,{modelValue:b.value,"onUpdate:modelValue":t[5]||(t[5]=l=>b.value=l),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"0",label:"\u7531\u4F4E\u5230\u9AD8"},null,8,["modelValue"]),a(Q,{modelValue:b.value,"onUpdate:modelValue":t[6]||(t[6]=l=>b.value=l),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"1",label:"\u7531\u9AD8\u5230\u4F4E"},null,8,["modelValue"])])])])])])]),_:1},8,["modelValue"]),e("div",ze,[(d(!0),h(w,null,B(H(J),(l,q)=>(d(),h("div",{key:q,class:"col-6 col-lg-4 q-mb-lg"},[a(ve,K(l,{onOpenCartDialog:_=>j(l)}),null,16,["onOpenCartDialog"]),a(ne,{modelValue:p.value,"onUpdate:modelValue":t[9]||(t[9]=_=>p.value=_),persistent:""},{default:s(()=>[a(E,{class:"q-px-md"},{default:s(()=>[a(c,{class:"row items-center q-pb-md"},{default:s(()=>[Ae,a(se),W(a(v,{icon:"close",flat:"",round:"",dense:""},null,512),[[ee]])]),_:1}),a(re,{class:"q-gutter-md",style:{width:"500px"},onSubmit:R},{default:s(()=>[a(c,null,{default:s(()=>[i(" \u54C1\u540D:"+f(r.name),1)]),_:1}),a(c,null,{default:s(()=>[i(" \u50F9\u9322:"+f(r.price),1)]),_:1}),a(c,null,{default:s(()=>[a(ie,{modelValue:r.quantity,"onUpdate:modelValue":t[8]||(t[8]=_=>r.quantity=_),outlined:"",type:"number",label:"\u8ACB\u9078\u64C7\u5546\u54C1\u6578\u91CF *","lazy-rules":"",rules:[N.required,N.number]},null,8,["modelValue","rules"])]),_:1}),a(c,null,{default:s(()=>[a(v,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:r.loading},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))),128))])])]),e("div",Pe,[e("div",Ee,[Fe,e("div",Me,[e("div",je,[e("div",Oe,[a(v,{icon:"mdi-facebook",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),a(v,{icon:"mdi-instagram",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),a(v,{icon:"mdi-twitter",outline:"",rounded:"",color:"secondary"})])]),Re])])])],64))}};export{sa as default};

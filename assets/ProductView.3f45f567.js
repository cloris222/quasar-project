import{b4 as z,L as N,J as U,N as E,r as w,M as k,Z as F,O as c,ak as m,U as e,d as s,Q as o,F as v,an as h,Y as C,X as _,al as d,a8 as I,b5 as V,V as r,P,am as p,aq as Y,ar as L}from"./index.31337442.js";import{Q as M,a as y}from"./QBreadcrumbs.89233b29.js";import{Q as R}from"./QChip.c623dcd2.js";import{Q as T}from"./QSpace.7fbb4a0c.js";import{Q as A,a as J}from"./QForm.126bc9ec.js";import{Q as O}from"./QDialog.2047b9e7.js";import"./use-key-composition.d648d796.js";import"./use-prevent-scroll.8519556a.js";const X={id:"productView"},Z={class:"container"},j={class:"row q-mt-lg q-my-lg"},G={class:"col-12"},H={class:"gameInfo"},K={class:"row img_area bg-primary"},W={class:"col-8 q-mx-auto q-pt-lg"},ee={class:"slideshow"},se=["src"],ae={class:"thumbnails"},te=["src","onClick"],oe={class:"row info_area"},le={class:"q-pt-lg"},ie={class:"info_name"},re={class:"info_rules"},ne={class:"info_priceandbtn"},ce={class:"info_price"},de={class:"info_btn"},ue={class:"col-10"},me=e("div",{class:"text-h6"}," \u8CFC\u7269\u8ECA ",-1),_e={id:"footer"},pe={class:"container"},ge=e("div",{class:"row"},[e("div",{class:"col-12"},[e("div",{class:"info_area"},[d(" \u5730\u5740 : \u65B0\u5317\u5E02\u6CF0\u5C71\u5340\u8CB4\u5B50\u91CC\u81F4\u9060\u65B0\u675155\u4E4B1\u865F "),e("br"),d(" \u96FB\u8A71 : 02-23941157 "),e("br"),d(" E-mail : admin@gmail.com "),e("br"),d(" \u71DF\u696D\u6642\u9593 : \u65E9\u4E0A10:00\u81F3\u665A\u4E0A23:00 \u6BCF\u9031\u4E09\u516C\u4F11 ")])])],-1),ve={class:"row"},fe={class:"col-12"},he={class:"btn_area"},ye=e("div",{class:"col-12"},[e("div",{class:"copyright"}," Copyright \xA9 2023 Yung Chien Yang. All rights reserved. ")],-1),De={__name:"ProductView",setup(be){const b=z(),x=N(),B=U(),q=E(),f=w(0),S=a=>{f.value=a},g=w(!1),l=k({p_id:"",quantity:0,price:0,name:""}),D=a=>{g.value=!0,l.name=a.name,l.p_id=a._id,l.price=a.price,l.quantity=0,console.log(g.value)},Q={required(a){return!!a||"\u6B04\u4F4D\u5FC5\u586B"},number(a){return a>0||"\u6578\u91CF\u932F\u8AA4"}},$=async()=>{l.loading=!0,await q.editCart({_id:l.p_id,quantity:l.quantity,price:l.price,message:"\u52A0\u5165\u8CFC\u7269\u8ECA\u6210\u529F"}),g.value=!1},t=k({_id:"",name:"",images:[],category:[],gamer:0,age:0,rules:"",price:0,sell:!0,loading:!1});return(async()=>{try{console.log(b);const{data:a}=await F.get("/products/"+b.params.id);t._id=a.result._id,t.name=a.result.name,t.images=a.result.images,t.category=a.result.category,t.gamer=a.result.gamer,t.age=a.result.age,t.rules=a.result.rules,t.price=a.result.price,t.sell=a.result.sell,document.title="\u684C\u4E0B\u5427 | "+t.name}catch{B.notify({position:"top",message:"\u53D6\u5F97\u5546\u54C1\u5931\u6557",color:"negative",avatar:`https://source.boringavatars.com/beam/256/${q.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`}),x.go(-1)}})(),(a,u)=>(c(),m(v,null,[e("div",X,[e("div",Z,[e("div",j,[e("div",G,[s(M,{class:"text-primary","active-color":"grey"},{separator:o(()=>[s(I,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:o(()=>[s(y,{label:"\u9996\u9801",icon:"home",to:"/"}),s(y,{label:"\u4E8C\u624B\u5C08\u5340",icon:"mdi-bookshelf",to:"/shoppingMall"}),s(y,{label:t.name,icon:"mdi-cards"},null,8,["label"])]),_:1})])]),e("div",H,[e("div",K,[e("div",W,[e("div",ee,[(c(!0),m(v,null,h(t.images,(i,n)=>(c(),m("div",{key:n,class:V(["slide",{active:f.value===n}])},[e("img",{src:i},null,8,se)],2))),128))]),e("div",ae,[(c(!0),m(v,null,h(t.images,(i,n)=>(c(),m("img",{key:n,src:i,class:V({active:f.value===n}),onClick:qe=>S(n)},null,10,te))),128))])])]),e("div",oe,[s(C,null,{default:o(()=>[s(r,null,{default:o(()=>[e("div",le,[(c(!0),m(v,null,h(t.category,(i,n)=>(c(),P(R,{key:n,color:"primary",class:"text-white"},{default:o(()=>[d(p(i),1)]),_:2},1024))),128))])]),_:1}),s(r,null,{default:o(()=>[s(r,null,{default:o(()=>[e("div",ie,p(t.name),1)]),_:1}),s(r,null,{default:o(()=>[e("div",re,p(t.rules),1)]),_:1}),s(r,null,{default:o(()=>[e("div",ne,[e("div",ce," $"+p(t.price),1),e("div",de,[s(_,{size:"lg",push:"",round:"",color:"secondary",icon:"mdi-cart-outline",onClick:u[0]||(u[0]=i=>D(t))})])])]),_:1})]),_:1})]),_:1}),e("div",ue,[s(O,{modelValue:g.value,"onUpdate:modelValue":u[2]||(u[2]=i=>g.value=i),persistent:""},{default:o(()=>[s(C,{class:"q-px-md"},{default:o(()=>[s(r,{class:"row items-center q-pb-md"},{default:o(()=>[me,s(T),Y(s(_,{icon:"close",flat:"",round:"",dense:""},null,512),[[L]])]),_:1}),s(A,{class:"q-gutter-md",style:{width:"500px"},onSubmit:$},{default:o(()=>[s(r,null,{default:o(()=>[d(" \u54C1\u540D:"+p(l.name),1)]),_:1}),s(r,null,{default:o(()=>[d(" \u50F9\u9322:"+p(l.price),1)]),_:1}),s(r,null,{default:o(()=>[s(J,{modelValue:l.quantity,"onUpdate:modelValue":u[1]||(u[1]=i=>l.quantity=i),outlined:"",type:"number",label:"\u8ACB\u9078\u64C7\u5546\u54C1\u6578\u91CF *","lazy-rules":"",rules:[Q.required,Q.number]},null,8,["modelValue","rules"])]),_:1}),s(r,null,{default:o(()=>[s(_,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:l.loading},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])])])])]),e("div",_e,[e("div",pe,[ge,e("div",ve,[e("div",fe,[e("div",he,[s(_,{icon:"mdi-facebook",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),s(_,{icon:"mdi-instagram",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),s(_,{icon:"mdi-twitter",outline:"",rounded:"",color:"secondary"})])]),ye])])])],64))}};export{De as default};

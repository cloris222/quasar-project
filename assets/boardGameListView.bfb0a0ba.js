import{O as i,ak as c,d as a,Q as r,U as t,X as q,V as x,al as u,am as g,a8 as y,F as h,an as b,P as B,Y as z,J as I,M as Q,r as v,c as N,Z as j,ao as E,b2 as F,b3 as P}from"./index.a23c6221.js";import{Q as R,a as w}from"./QBreadcrumbs.8bb0ba96.js";import{_ as A,Q as M,c as C,d as T}from"./lodash.5def7f50.js";import{Q as D}from"./QSelect.e3575141.js";import{Q as L}from"./QChip.872a70a8.js";import"./option-sizes.1fbc8d35.js";import"./use-key-composition.c7aa69f1.js";import"./TouchPan.79a19378.js";import"./touch.70a9dd44.js";import"./format.3e32b8d9.js";import"./_commonjsHelpers.b8add541.js";import"./QDialog.4cd64dde.js";import"./use-prevent-scroll.6bc0c5b0.js";const J={id:"boardGameListCard"},O={class:"cardImage"},X=["src"],Y={class:"row text-h6"},Z={style:{"font-size":"16px"}},H={__name:"boardGameListcard",props:{_id:{type:String,default:""},name:{type:String,default:""},images:{type:Array,default(){return[]}},category:{type:Array,default(){return[]}},gamer:{type:String,default:""},age:{type:Number,default:0},rules:{type:String,default:""},sell:{type:Boolean,default:!1}},setup(d){return(V,f)=>(i(),c("div",J,[a(z,{class:"boardGameListCard"},{default:r(()=>[t("div",O,[t("img",{src:d.images[0]},null,8,X),a(q,{"icon-right":"mdi-arrow-right",label:"\u4E86\u89E3\u8A73\u60C5",color:"secondary",class:"detailBtn",to:"/boardGameList/"+d._id},null,8,["to"])]),a(x,null,{default:r(()=>[t("div",Y,[u(g(d.name)+" ",1),a(y,{name:"diversity_3",color:"primary",size:"sm",class:"q-mr-sm"}),t("span",Z,g(d.gamer),1)])]),_:1}),a(x,{class:"q-pt-none"},{default:r(()=>[(i(!0),c(h,null,b(d.category,(n,p)=>(i(),B(L,{key:p,color:"primary","text-color":"white"},{default:r(()=>[u(g(n),1)]),_:2},1024))),128))]),_:1})]),_:1})]))}},K={id:"shoppingMall"},W={class:"container"},ee={class:"row q-mt-lg"},ae={class:"col-3"},te={class:"toolSection"},oe={class:"row justify-center q-mt-lg q-mx-auto"},se={class:"col-1 title_area"},le={class:"col-5 q-mb-lg"},re={class:"row justify-center q-mx-auto"},ie={class:"col-1 title_area"},ne={class:"col-2 q-mb-lg"},de={class:"col-3"},ce={class:"row q-mx-auto justify-center"},Qe={__name:"boardGameListView",setup(d){const V=I(),f=Q([]),n=v([]),p=v(!0),S=["\u6D3E\u5C0D\u904A\u6232","\u7B56\u7565\u904A\u6232","\u9663\u71DF\u904A\u6232","\u89AA\u5B50\u904A\u6232","\u7D19\u724C\u904A\u6232","\u5176\u4ED6\u904A\u6232","\u66A2\u92B7\u904A\u6232","\u6700\u65B0\u4E0A\u67B6","\u64BF\u4FBF\u5B9C","\u516B\u6210\u65B0","\u8FD1\u5168\u65B0"],m=v("less"),$=()=>{n.value=l.category.map(s=>s)},G=s=>{n.value.splice(s,1),l.category.splice(s,1)},l=Q({gamer:{min:1,max:5},category:["\u66A2\u92B7\u904A\u6232"]}),U=N(()=>f.filter(s=>s.gamer.split("~").map(Number)[0]>=parseInt(l.gamer.min)&&s.gamer.split("~").map(Number)[1]<=parseInt(l.gamer.max)&&parseInt(A.intersection(s.category,l.category).length)!==0));return(async()=>{var s,o;try{const{data:e}=await j.get("/boardGameList");f.push(...e.result)}catch(e){V.notify({position:"top",message:((o=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}})(),(s,o)=>(i(),c("div",K,[t("div",W,[t("div",ee,[t("div",ae,[a(R,{class:"text-primary","active-color":"grey"},{separator:r(()=>[a(y,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:r(()=>[a(w,{label:"\u9996\u9801",icon:"home",to:"/"}),a(w,{label:"\u684C\u904A\u6E05\u55AE",icon:"mdi-bookshelf"})]),_:1})])]),a(M,{modelValue:p.value,"onUpdate:modelValue":o[5]||(o[5]=e=>p.value=e),icon:"mdi-filter-variant",label:"\u7BE9\u9078\u689D\u4EF6"},{default:r(()=>[t("div",te,[t("div",oe,[t("div",se,[a(y,{name:"diversity_3",size:"sm"}),u(" \u4EBA\u6578 ")]),t("div",le,[a(C,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=e=>m.value=e),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"less",label:"10\u4EBA\u4EE5\u4E0B"},null,8,["modelValue"]),a(C,{modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=e=>m.value=e),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"more",label:"10\u4EBA\u4EE5\u4E0A"},null,8,["modelValue"]),a(T,{modelValue:l.gamer,"onUpdate:modelValue":o[2]||(o[2]=e=>l.gamer=e),disable:m.value==="more",snap:"",markers:"","marker-labels":"",min:1,max:10},null,8,["modelValue","disable"])])]),t("div",re,[t("div",ie,[a(y,{name:"sell",size:"sm"}),u(" \u6A19\u7C64 ")]),t("div",ne,[a(D,{modelValue:l.category,"onUpdate:modelValue":o[3]||(o[3]=e=>l.category=e),filled:"",multiple:"",options:S,label:"\u65B0\u589E\u6A19\u7C64",style:{width:"250px"},"bottom-slots":""},{append:r(()=>[a(q,{round:"",dense:"",flat:"",icon:"add",onClick:$})]),_:1},8,["modelValue"])]),t("div",de,[(i(!0),c(h,null,b(n.value,(e,_)=>(i(),B(L,{key:_,modelValue:n.value,"onUpdate:modelValue":o[4]||(o[4]=k=>n.value=k),color:"primary","text-color":"white",clickable:"",icon:"mdi-close-circle","icon-color":"white",onClick:k=>G(_)},{default:r(()=>[u(g(e),1)]),_:2},1032,["modelValue","onClick"]))),128))])])])]),_:1},8,["modelValue"]),t("div",ce,[(i(!0),c(h,null,b(E(U),(e,_)=>(i(),c("div",{key:_,class:"col-6 col-lg-3 q-mb-lg"},[a(H,F(P(e)),null,16)]))),128))])])]))}};export{Qe as default};

import{h as g,l as G,H,a2 as W,I as Z,$ as J,r as V,c as v,a0 as M,ad as x,a1 as X,G as ee,g as ae,z as j,P as p,al as C,d as t,R as r,V as a,Y as y,W as _,am as d,an as b,F as N,ao as F,Q as E,Z as Y,O as te,L as oe,N as A,o as le,w as se,_ as re,ap as ie,aq as ne,ar as ce,as as de}from"./index.142f4ee1.js";import{Q as ue,a as L}from"./QBreadcrumbs.f19e79a3.js";import{_ as O,Q as me}from"./lodash.3e1f07b5.js";import{Q as _e}from"./QSelect.0af3e3de.js";import{Q as K}from"./QChip.ae5db802.js";import{o as ve,u as ge}from"./option-sizes.7304c6c0.js";import{u as pe,a as fe}from"./use-key-composition.06046d44.js";import{Q as he}from"./QSpace.70d79ae6.js";import{Q as ye,a as be}from"./QForm.a6c2c61a.js";import{Q as ke}from"./QDialog.5865c394.js";import"./TouchPan.67e2024e.js";import"./touch.70a9dd44.js";import"./format.3e32b8d9.js";import"./_commonjsHelpers.b8add541.js";import"./use-prevent-scroll.0671a2ff.js";const qe=g("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[g("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),g("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var T=G({name:"QRadio",props:{...H,...W,...pe,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(o,{slots:k,emit:Q}){const{proxy:q}=ae(),S=Z(o,q.$q),u=J(o,ve),c=V(null),{refocusTargetEl:w,refocusTarget:f}=ge(o,c),m=v(()=>M(o.modelValue)===M(o.val)),i=v(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(o.disable===!0?" disabled":"")+(S.value===!0?" q-radio--dark":"")+(o.dense===!0?" q-radio--dense":"")+(o.leftLabel===!0?" reverse":"")),P=v(()=>{const e=o.color!==void 0&&(o.keepColor===!0||m.value===!0)?` text-${o.color}`:"";return`q-radio__inner relative-position q-radio__inner--${m.value===!0?"truthy":"falsy"}${e}`}),B=v(()=>(m.value===!0?o.checkedIcon:o.uncheckedIcon)||null),I=v(()=>o.disable===!0?-1:o.tabindex||0),R=v(()=>{const e={type:"radio"};return o.name!==void 0&&Object.assign(e,{".checked":m.value===!0,"^checked":m.value===!0?"checked":void 0,name:o.name,value:o.val}),e}),n=fe(R);function $(e){e!==void 0&&(j(e),f(e)),o.disable!==!0&&m.value!==!0&&Q("update:modelValue",o.val,e)}function z(e){(e.keyCode===13||e.keyCode===32)&&j(e)}function U(e){(e.keyCode===13||e.keyCode===32)&&$(e)}return Object.assign(q,{set:$}),()=>{const e=B.value!==null?[g("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[g(x,{class:"q-radio__icon",name:B.value})])]:[qe];o.disable!==!0&&n(e,"unshift"," q-radio__native q-ma-none q-pa-none");const l=[g("div",{class:P.value,style:u.value,"aria-hidden":"true"},e)];w.value!==null&&l.push(w.value);const s=o.label!==void 0?X(k.default,[o.label]):ee(k.default);return s!==void 0&&l.push(g("div",{class:"q-radio__label q-anchor--skip"},s)),g("div",{ref:c,class:i.value,tabindex:I.value,role:"radio","aria-label":o.label,"aria-checked":m.value===!0?"true":"false","aria-disabled":o.disable===!0?"true":void 0,onClick:$,onKeydown:z,onKeyup:U},l)}}});const we={id:"ProductCard"},Ve={class:"cardImage"},xe=["src"],Ce={class:"row text-h6"},Qe={class:"gamer"},Se={class:"gamer_icon"},$e={class:"gamer_number"},Be={__name:"ProductCard",props:{_id:{type:String,default:""},name:{type:String,default:""},images:{type:Array,default(){return[]}},category:{type:Array,default(){return[]}},gamer:{type:String,default:""},age:{type:Number,default:0},rules:{type:String,default:""},price:{type:Number,default:0},sell:{type:Boolean,default:!1}},emits:["open-cart-dialog"],setup(o,{emit:k}){const Q=V(!0),q=()=>{k("open-cart-dialog",Q.value)};return(S,u)=>(p(),C("div",we,[t(Y,{class:"productCard"},{default:r(()=>[a("div",Ve,[a("img",{src:o.images[0]},null,8,xe),t(y,{"icon-right":"mdi-arrow-right",label:"\u4E86\u89E3\u8A73\u60C5",color:"secondary",class:"detailBtn",to:"/products/"+o._id},null,8,["to"])]),t(_,null,{default:r(()=>[a("div",Ce,[d(b(o.name)+" ",1),a("div",Qe,[a("div",Se,[t(x,{name:"diversity_3",color:"primary",size:"sm",class:"q-mr-sm"})]),a("div",$e,b(o.gamer),1)])])]),_:1}),t(_,{class:"q-pt-none"},{default:r(()=>[(p(!0),C(N,null,F(o.category,(c,w)=>(p(),E(K,{key:w,color:"secondary","text-color":"white"},{default:r(()=>[d(b(c),1)]),_:2},1024))),128))]),_:1}),t(_,{class:"q-pt-none price_area"},{default:r(()=>[d(" $"+b(o.price),1)]),_:1}),t(_,{class:"q-pt-none btn_area flex justify-center no-wrap"},{default:r(()=>[t(y,{icon:"mdi-cart-outline",flat:"",class:"icon_cart",onClick:q})]),_:1})]),_:1})]))}},Ie={id:"shoppingMall"},ze={class:"container"},De={class:"row"},Ne={class:"col-3"},Pe={class:"row filter_area"},Re={class:"gamer_area col-4"},Ue={class:"title_area"},Ae=a("div",{class:"text-white"}," \u4EBA\u6578 ",-1),Fe={class:"input_area"},Me={class:"category_area col-6"},je={class:"title_area"},Le=a("div",{class:"text-white"}," \u6A19\u7C64 ",-1),Oe={class:"input_area"},Te={class:"select_area"},Ee={class:"chip_area"},Ye={class:"price_area col-2"},Ke={class:"title_area"},Ge=a("div",{class:"text-white"}," \u50F9\u683C ",-1),He={class:"input_area"},We={class:"radio_area"},Ze={class:"row q-mx-auto product_card_area"},Je=a("div",{class:"text-h6"}," \u8CFC\u7269\u8ECA ",-1),Xe={id:"footer"},ea={class:"container"},aa=a("div",{class:"row"},[a("div",{class:"col-12"},[a("div",{class:"info_area"},[d(" \u5730\u5740 : \u65B0\u5317\u5E02\u6CF0\u5C71\u5340\u8CB4\u5B50\u91CC\u81F4\u9060\u65B0\u675155\u4E4B1\u865F "),a("br"),d(" \u96FB\u8A71 : 02-23941157 "),a("br"),d(" E-mail : admin@gmail.com "),a("br"),d(" \u71DF\u696D\u6642\u9593 : \u65E9\u4E0A10:00\u81F3\u665A\u4E0A23:00 \u6BCF\u9031\u4E09\u516C\u4F11 ")])])],-1),ta={class:"row"},oa={class:"col-12"},la={class:"btn_area"},sa=a("div",{class:"col-12"},[a("div",{class:"copyright"}," Copyright \xA9 2023 Yung Chien Yang. All rights reserved. ")],-1),ka={__name:"ShoppingMallAllView",setup(o){const k=te(),{editCart:Q}=k,q=oe(),S=A([]),u=V(["\u6D3E\u5C0D\u904A\u6232","\u66A2\u92B7\u904A\u6232"]),c=V(!1),w=["\u6D3E\u5C0D\u904A\u6232","\u7B56\u7565\u904A\u6232","\u9663\u71DF\u904A\u6232","\u89AA\u5B50\u904A\u6232","\u7D19\u724C\u904A\u6232","\u5176\u4ED6\u904A\u6232","\u66A2\u92B7\u904A\u6232","\u6700\u65B0\u4E0A\u67B6","\u64BF\u4FBF\u5B9C","\u516B\u6210\u65B0","\u8FD1\u5168\u65B0"],f=V("0"),m={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10\u2191"},i=A({p_id:"",quantity:0,price:0,name:"",loading:!1}),P=e=>{c.value=!0,i.name=e.name,i.p_id=e._id,i.price=e.price,i.quantity=0,console.log(c.value)};le(()=>{se(()=>n.category,(e,l)=>{u.value=[],u.value.push(...n.category.map(s=>s))})});const B=e=>{u.value.splice(e,1),n.category.splice(e,1)},I={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"},number(e){return e>0||"\u6578\u91CF\u932F\u8AA4"}},R=async()=>{i.loading=!0,await Q({_id:i.p_id,quantity:i.quantity,price:i.price,message:"\u52A0\u5165\u8CFC\u7269\u8ECA\u6210\u529F"}),c.value=!1},n=A({gamer:{min:1,max:5},category:["\u6D3E\u5C0D\u904A\u6232","\u66A2\u92B7\u904A\u6232"]}),$=v(()=>S.filter(e=>n.gamer.max<10?e.gamer.split("~").map(Number)[0]>=parseInt(n.gamer.min)&&e.gamer.split("~").map(Number)[1]<=parseInt(n.gamer.max)&&parseInt(O.intersection(e.category,n.category).length)!==0:e.gamer.split("~").map(Number)[1]>=10&&parseInt(O.intersection(e.category,n.category).length)!==0)),z=V($),U=v(()=>f.value==="0"?z.value.slice().sort((e,l)=>e.price-l.price):z.value.slice().sort((e,l)=>l.price-e.price));return(async()=>{var e,l;try{const{data:s}=await re.get("/products");S.push(...s.result)}catch(s){q.notify({position:"top",message:((l=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}})(),(e,l)=>(p(),C(N,null,[a("div",Ie,[a("div",ze,[a("div",De,[a("div",Ne,[t(ue,{class:"text-primary","active-color":"grey"},{separator:r(()=>[t(x,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:r(()=>[t(L,{label:"\u9996\u9801",icon:"home",to:"/"}),t(L,{label:"\u4E8C\u624B\u5C08\u5340",icon:"mdi-bookshelf"})]),_:1})])]),a("div",Pe,[a("div",Re,[a("div",Ue,[t(x,{name:"diversity_3",size:"sm",color:"secondary"}),Ae]),a("div",Fe,[t(me,{modelValue:n.gamer,"onUpdate:modelValue":l[0]||(l[0]=s=>n.gamer=s),snap:"",markers:"",color:"white","marker-labels":m,min:1,max:10},null,8,["modelValue"])])]),a("div",Me,[a("div",je,[t(x,{name:"sell",size:"sm",color:"secondary"}),Le]),a("div",Oe,[a("div",Te,[t(_e,{modelValue:n.category,"onUpdate:modelValue":l[1]||(l[1]=s=>n.category=s),filled:"","bg-color":"white",multiple:"",options:w,label:"\u65B0\u589E\u6A19\u7C64",style:{width:"250px"},"bottom-slots":""},null,8,["modelValue"])]),a("div",Ee,[(p(!0),C(N,null,F(u.value,(s,D)=>(p(),E(K,{key:D,modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=h=>u.value=h),color:"secondary","text-color":"white",clickable:"",icon:"mdi-close-circle","icon-color":"white",onClick:h=>B(D)},{default:r(()=>[d(b(s),1)]),_:2},1032,["modelValue","onClick"]))),128))])])]),a("div",Ye,[a("div",Ke,[t(x,{name:"monetization_on",size:"sm",color:"secondary"}),Ge]),a("div",He,[a("div",We,[t(T,{modelValue:f.value,"onUpdate:modelValue":l[3]||(l[3]=s=>f.value=s),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"0",label:"\u7531\u4F4E\u5230\u9AD8",color:"secondary"},null,8,["modelValue"]),t(T,{modelValue:f.value,"onUpdate:modelValue":l[4]||(l[4]=s=>f.value=s),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"1",label:"\u7531\u9AD8\u5230\u4F4E",color:"secondary"},null,8,["modelValue"])])])])]),a("div",Ze,[(p(!0),C(N,null,F(ie(U),(s,D)=>(p(),C("div",{key:D,class:"col-6 col-lg-4 q-mb-lg"},[t(Be,ne(s,{onOpenCartDialog:h=>P(s)}),null,16,["onOpenCartDialog"]),t(ke,{modelValue:c.value,"onUpdate:modelValue":l[6]||(l[6]=h=>c.value=h),persistent:""},{default:r(()=>[t(Y,{class:"q-px-md"},{default:r(()=>[t(_,{class:"row items-center q-pb-md"},{default:r(()=>[Je,t(he),ce(t(y,{icon:"close",flat:"",round:"",dense:""},null,512),[[de]])]),_:1}),t(ye,{class:"q-gutter-md",style:{width:"500px"},onSubmit:R},{default:r(()=>[t(_,null,{default:r(()=>[d(" \u54C1\u540D:"+b(i.name),1)]),_:1}),t(_,null,{default:r(()=>[d(" \u50F9\u9322:"+b(i.price),1)]),_:1}),t(_,null,{default:r(()=>[t(be,{modelValue:i.quantity,"onUpdate:modelValue":l[5]||(l[5]=h=>i.quantity=h),outlined:"",type:"number",label:"\u8ACB\u9078\u64C7\u5546\u54C1\u6578\u91CF *","lazy-rules":"",rules:[I.required,I.number]},null,8,["modelValue","rules"])]),_:1}),t(_,null,{default:r(()=>[t(y,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:i.loading},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))),128))])])]),a("div",Xe,[a("div",ea,[aa,a("div",ta,[a("div",oa,[a("div",la,[t(y,{icon:"mdi-facebook",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),t(y,{icon:"mdi-instagram",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),t(y,{icon:"mdi-twitter",outline:"",rounded:"",color:"secondary"})])]),sa])])])],64))}};export{ka as default};

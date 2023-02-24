import{k as J,r as f,w as X,c as v,y as Z,h as G,g as H,O as b,ak as x,d as e,Q as r,U as a,X as y,V as _,al as m,am as k,a8 as S,F as I,an as T,P as O,Y,N as W,J as ee,M as F,Z as ae,ao as te,ap as le,aq as oe,ar as ne}from"./index.7ab451c2.js";import{Q as se,a as A}from"./QBreadcrumbs.1cdec3b0.js";import{u as ie,a as re,b as ue,k as ce,_ as E,Q as de,c as j,d as me}from"./lodash.aca77614.js";import{Q as ve}from"./QSelect.69df7d2e.js";import{Q as L}from"./QChip.49c78046.js";import{i as ge}from"./use-key-composition.931703ff.js";import{b as K}from"./format.3e32b8d9.js";import{Q as pe}from"./QSpace.ef8258e1.js";import{Q as fe,a as _e}from"./QForm.0cb02e7f.js";import{Q as ye}from"./QDialog.0cdfa4f9.js";import"./option-sizes.2126c03d.js";import"./TouchPan.26b7072b.js";import"./touch.70a9dd44.js";import"./_commonjsHelpers.b8add541.js";import"./use-prevent-scroll.2161912b.js";const be=()=>({});var he=J({name:"QSlider",props:{...ie,modelValue:{required:!0,default:null,validator:l=>typeof l=="number"||l===null},labelValue:[String,Number]},emits:re,setup(l,{emit:q}){const{proxy:{$q:w}}=H(),{state:n,methods:d}=ue({updateValue:$,updatePosition:B,getDragging:N,formAttrs:ge(l)}),g=f(null),h=f(0),u=f(0);function M(){u.value=l.modelValue===null?n.innerMin.value:K(l.modelValue,n.innerMin.value,n.innerMax.value)}X(()=>`${l.modelValue}|${n.innerMin.value}|${n.innerMax.value}`,M),M();const Q=v(()=>d.convertModelToRatio(u.value)),p=v(()=>n.active.value===!0?h.value:Q.value),c=v(()=>{const o={[n.positionProp.value]:`${100*n.innerMinRatio.value}%`,[n.sizeProp.value]:`${100*(p.value-n.innerMinRatio.value)}%`};return l.selectionImg!==void 0&&(o.backgroundImage=`url(${l.selectionImg}) !important`),o}),P=d.getThumbRenderFn({focusValue:!0,getNodeData:be,ratio:p,label:v(()=>l.labelValue!==void 0?l.labelValue:u.value),thumbColor:v(()=>l.thumbColor||l.color),labelColor:v(()=>l.labelColor),labelTextColor:v(()=>l.labelTextColor)}),D=v(()=>n.editable.value!==!0?{}:w.platform.is.mobile===!0?{onClick:d.onMobileClick}:{onMousedown:d.onActivate,onFocus:U,onBlur:d.onBlur,onKeydown:z,onKeyup:d.onKeyup});function $(o){u.value!==l.modelValue&&q("update:modelValue",u.value),o===!0&&q("change",u.value)}function N(){return g.value.getBoundingClientRect()}function B(o,V=n.dragging.value){const t=d.getDraggingRatio(o,V);u.value=d.convertRatioToModel(t),h.value=l.snap!==!0||l.step===0?t:d.convertModelToRatio(u.value)}function U(){n.focus.value=!0}function z(o){if(!ce.includes(o.keyCode))return;Z(o);const V=([34,33].includes(o.keyCode)?10:1)*n.step.value,t=([34,37,40].includes(o.keyCode)?-1:1)*(n.isReversed.value===!0?-1:1)*(l.vertical===!0?-1:1)*V;u.value=K(parseFloat((u.value+t).toFixed(n.decimals.value)),n.innerMin.value,n.innerMax.value),$()}return()=>{const o=d.getContent(c,n.tabindex,D,V=>{V.push(P())});return G("div",{ref:g,class:n.classes.value+(l.modelValue===null?" q-slider--no-value":""),...n.attributes.value,"aria-valuenow":l.modelValue},o)}}});const Ve={id:"ProductCard"},Ce={class:"cardImage"},ke=["src"],qe={class:"row text-h6"},xe={style:{"font-size":"16px"}},we={__name:"ProductCard",props:{_id:{type:String,default:""},name:{type:String,default:""},images:{type:Array,default(){return[]}},category:{type:Array,default(){return[]}},gamer:{type:String,default:""},age:{type:Number,default:0},rules:{type:String,default:""},price:{type:Number,default:0},sell:{type:Boolean,default:!1}},emits:["open-cart-dialog"],setup(l,{emit:q}){const w=f(!0),n=()=>{q("open-cart-dialog",w.value)};return(d,g)=>(b(),x("div",Ve,[e(Y,{class:"productCard"},{default:r(()=>[a("div",Ce,[a("img",{src:l.images[0]},null,8,ke),e(y,{"icon-right":"mdi-arrow-right",label:"\u4E86\u89E3\u8A73\u60C5",color:"secondary",class:"detailBtn",to:"/products/"+l._id},null,8,["to"])]),e(_,null,{default:r(()=>[a("div",qe,[m(k(l.name)+" ",1),e(S,{name:"diversity_3",color:"primary",size:"sm",class:"q-mr-sm"}),a("span",xe,k(l.gamer),1)])]),_:1}),e(_,{class:"q-pt-none"},{default:r(()=>[(b(!0),x(I,null,T(l.category,(h,u)=>(b(),O(L,{key:u,color:"primary","text-color":"white"},{default:r(()=>[m(k(h),1)]),_:2},1024))),128))]),_:1}),e(_,{class:"q-pt-none price_area"},{default:r(()=>[m(" $"+k(l.price),1)]),_:1}),e(_,{class:"q-pt-none btn_area flex justify-center no-wrap"},{default:r(()=>[e(y,{icon:"mdi-cart-outline",flat:"",class:"icon_cart",onClick:n})]),_:1})]),_:1})]))}},Qe={id:"shoppingMall"},Se={class:"container"},Me={class:"row q-mt-lg"},$e={class:"col-3"},Be={class:"toolSection"},Re={class:"row justify-center q-mt-lg q-mx-auto"},Ie={class:"col-1 title_area"},Pe={class:"col-5 q-mb-lg"},De={class:"row justify-center q-mx-auto"},Ne={class:"col-1 title_area"},Ue={class:"col-2 q-mb-lg"},ze={class:"col-3"},Fe={class:"row justify-center q-mx-auto"},Te={class:"col-1 title_area"},Ae={class:"col-12 col-lg-5 q-mb-lg"},Ee={class:"row q-mx-auto justify-center"},je=a("div",{class:"text-h6"}," \u8CFC\u7269\u8ECA ",-1),Ke={id:"footer"},Oe={class:"container"},Ye=a("div",{class:"row"},[a("div",{class:"col-12"},[a("div",{class:"info_area"},[m(" \u5730\u5740 : \u65B0\u5317\u5E02\u6CF0\u5C71\u5340\u8CB4\u5B50\u91CC\u81F4\u9060\u65B0\u675155\u4E4B1\u865F "),a("br"),m(" \u96FB\u8A71 : 02-23941157 "),a("br"),m(" E-mail : admin@gmail.com "),a("br"),m(" \u71DF\u696D\u6642\u9593 : \u65E9\u4E0A10:00\u81F3\u665A\u4E0A23:00 \u6BCF\u9031\u4E09\u516C\u4F11 ")])])],-1),Le={class:"row"},Je={class:"col-12"},Xe={class:"btn_area"},Ze=a("div",{class:"col-12"},[a("div",{class:"copyright"}," Copyright \xA9 2023 Yung Chien Yang. All rights reserved. ")],-1),ma={__name:"ShoppingMallAllView",setup(l){const q=W(),{editCart:w}=q,n=ee(),d=F([]),g=f([]),h=f(!0),u=f(!1),M=["\u6D3E\u5C0D\u904A\u6232","\u7B56\u7565\u904A\u6232","\u9663\u71DF\u904A\u6232","\u89AA\u5B50\u904A\u6232","\u7D19\u724C\u904A\u6232","\u5176\u4ED6\u904A\u6232","\u66A2\u92B7\u904A\u6232","\u6700\u65B0\u4E0A\u67B6","\u64BF\u4FBF\u5B9C","\u516B\u6210\u65B0","\u8FD1\u5168\u65B0"],Q=f(1),p=f("less"),c=F({p_id:"",quantity:0,price:0,name:"",loading:!1}),P=t=>{u.value=!0,c.name=t.name,c.p_id=t._id,c.price=t.price,c.quantity=0,console.log(u.value)},D=()=>{g.value=o.category.map(t=>t)},$=t=>{g.value.splice(t,1),o.category.splice(t,1)},N=t=>`$${100*t}`,B={required(t){return!!t||"\u6B04\u4F4D\u5FC5\u586B"},number(t){return t>0||"\u6578\u91CF\u932F\u8AA4"}},U=async()=>{c.loading=!0,await w({_id:c.p_id,quantity:c.quantity,price:c.price,message:"\u52A0\u5165\u8CFC\u7269\u8ECA\u6210\u529F"}),u.value=!1},z=v(()=>Q.value*100),o=F({gamer:{min:1,max:5},category:["\u66A2\u92B7\u904A\u6232"],price:z}),V=v(()=>d.filter(t=>p.value==="less"?t.gamer.split("~").map(Number)[0]>=parseInt(o.gamer.min)&&t.gamer.split("~").map(Number)[1]<=parseInt(o.gamer.max)&&parseInt(E.intersection(t.category,o.category).length)!==0&&t.price<=o.price:t.gamer.split("~").map(Number)[1]>10&&parseInt(E.intersection(t.category,o.category).length)!==0&&t.price<=o.price));return(async()=>{var t,i;try{const{data:s}=await ae.get("/products");d.push(...s.result)}catch(s){n.notify({position:"top",message:((i=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:i.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}})(),(t,i)=>(b(),x(I,null,[a("div",Qe,[a("div",Se,[a("div",Me,[a("div",$e,[e(se,{class:"text-primary","active-color":"grey"},{separator:r(()=>[e(S,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:r(()=>[e(A,{label:"\u9996\u9801",icon:"home",to:"/"}),e(A,{label:"\u4E8C\u624B\u5C08\u5340",icon:"mdi-bookshelf"})]),_:1})])]),e(de,{modelValue:h.value,"onUpdate:modelValue":i[6]||(i[6]=s=>h.value=s),icon:"mdi-filter-variant",label:"\u7BE9\u9078\u689D\u4EF6"},{default:r(()=>[a("div",Be,[a("div",Re,[a("div",Ie,[e(S,{name:"diversity_3",size:"sm"}),m(" \u4EBA\u6578 ")]),a("div",Pe,[e(j,{modelValue:p.value,"onUpdate:modelValue":i[0]||(i[0]=s=>p.value=s),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"less",label:"10\u4EBA\u4EE5\u4E0B"},null,8,["modelValue"]),e(j,{modelValue:p.value,"onUpdate:modelValue":i[1]||(i[1]=s=>p.value=s),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"more",label:"10\u4EBA\u4EE5\u4E0A"},null,8,["modelValue"]),e(me,{modelValue:o.gamer,"onUpdate:modelValue":i[2]||(i[2]=s=>o.gamer=s),disable:p.value==="more",snap:"",markers:"","marker-labels":"",min:1,max:10},null,8,["modelValue","disable"])])]),a("div",De,[a("div",Ne,[e(S,{name:"sell",size:"sm"}),m(" \u6A19\u7C64 ")]),a("div",Ue,[e(ve,{modelValue:o.category,"onUpdate:modelValue":i[3]||(i[3]=s=>o.category=s),filled:"",multiple:"",options:M,label:"\u65B0\u589E\u6A19\u7C64",style:{width:"250px"},"bottom-slots":""},{append:r(()=>[e(y,{round:"",dense:"",flat:"",icon:"add",onClick:D})]),_:1},8,["modelValue"])]),a("div",ze,[(b(!0),x(I,null,T(g.value,(s,R)=>(b(),O(L,{key:R,modelValue:g.value,"onUpdate:modelValue":i[4]||(i[4]=C=>g.value=C),color:"primary","text-color":"white",clickable:"",icon:"mdi-close-circle","icon-color":"white",onClick:C=>$(R)},{default:r(()=>[m(k(s),1)]),_:2},1032,["modelValue","onClick"]))),128))])]),a("div",Fe,[a("div",Te,[e(S,{name:"monetization_on",size:"sm"}),m(" \u50F9\u683C ")]),a("div",Ae,[e(he,{modelValue:Q.value,"onUpdate:modelValue":i[5]||(i[5]=s=>Q.value=s),markers:"","marker-labels":N,min:0,max:10,snap:""},null,8,["modelValue"])])])])]),_:1},8,["modelValue"]),a("div",Ee,[(b(!0),x(I,null,T(te(V),(s,R)=>(b(),x("div",{key:R,class:"col-6 col-lg-3 q-mb-lg"},[e(we,le(s,{onOpenCartDialog:C=>P(s)}),null,16,["onOpenCartDialog"]),e(ye,{modelValue:u.value,"onUpdate:modelValue":i[8]||(i[8]=C=>u.value=C),persistent:""},{default:r(()=>[e(Y,{class:"q-px-md"},{default:r(()=>[e(_,{class:"row items-center q-pb-md"},{default:r(()=>[je,e(pe),oe(e(y,{icon:"close",flat:"",round:"",dense:""},null,512),[[ne]])]),_:1}),e(fe,{class:"q-gutter-md",style:{width:"500px"},onSubmit:U},{default:r(()=>[e(_,null,{default:r(()=>[m(" \u54C1\u540D:"+k(c.name),1)]),_:1}),e(_,null,{default:r(()=>[m(" \u50F9\u9322:"+k(c.price),1)]),_:1}),e(_,null,{default:r(()=>[e(_e,{modelValue:c.quantity,"onUpdate:modelValue":i[7]||(i[7]=C=>c.quantity=C),outlined:"",type:"number",label:"\u8ACB\u9078\u64C7\u5546\u54C1\u6578\u91CF *","lazy-rules":"",rules:[B.required,B.number]},null,8,["modelValue","rules"])]),_:1}),e(_,null,{default:r(()=>[e(y,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:c.loading},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))),128))])])]),a("div",Ke,[a("div",Oe,[Ye,a("div",Le,[a("div",Je,[a("div",Xe,[e(y,{icon:"mdi-facebook",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),e(y,{icon:"mdi-instagram",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),e(y,{icon:"mdi-twitter",outline:"",rounded:"",color:"secondary"})])]),Ze])])])],64))}};export{ma as default};
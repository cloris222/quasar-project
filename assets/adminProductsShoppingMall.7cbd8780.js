import{Q as k,a as u}from"./QTable.15f5240b.js";import{Q as F}from"./QChip.66fcd6bc.js";import{Q as w}from"./QToggle.e1d43104.js";import{J as z,N as B,r as q,M as I,b6 as V,O as Q,ak as U,U as n,d as t,Q as s,X as p,F as $,an as D,P as N,am as h,Y as P,V as T,aq as L,a8 as M,aC as O,aF as R,al as A,ar as E}from"./index.1ae148d4.js";import{Q as J}from"./QSpace.81328f08.js";import{Q as X,a as m}from"./QForm.a7a00efc.js";import{Q as Y}from"./QFile.2e56c50c.js";import{Q as j}from"./QSelect.a028b92b.js";import{Q as G}from"./QCardActions.27e5feb5.js";import{Q as H}from"./QDialog.a7828847.js";import"./option-sizes.86a4e9bc.js";import"./use-checkbox.9e0da1bc.js";import"./use-key-composition.8877c87e.js";import"./format.3e32b8d9.js";import"./use-prevent-scroll.937e65a5.js";const K={id:"adminProductsShoppingMall"},W={class:"q-pa-md"},Z={class:"adminProductsImages"},ee=["props","src"],le={class:"rules_area"},ae={class:"productsSell"},oe={class:"productsOthers"},te={class:"text-h6"},_e={__name:"adminProductsShoppingMall",setup(se){const c=z(),g=B(),v=q([]),x=[{name:"name",required:!0,label:"\u5546\u54C1\u540D\u7A31",align:"left",field:e=>e.name,sortable:!0},{name:"images",align:"center",label:"\u5716\u7247",field:e=>e.images,sortable:!0},{name:"category",align:"center",label:"\u6A19\u7C64",field:e=>e.category,sortable:!0,sort:(e,a)=>parseInt(e,10)-parseInt(a,10)},{name:"gamer",align:"center",label:"\u904A\u6232\u4EBA\u6578",field:e=>e.gamer,sortable:!0,sort:(e,a)=>parseInt(e,10)-parseInt(a,10)},{name:"age",align:"center",label:"\u9069\u73A9\u5E74\u9F61",field:e=>e.age,sortable:!0,sort:(e,a)=>parseInt(e,10)-parseInt(a,10)},{name:"rules",align:"center",label:"\u904A\u6232\u8AAA\u660E",field:e=>e.rules,classes:"rules_area"},{name:"price",align:"center",label:"\u5546\u54C1\u50F9\u683C",field:e=>e.price,sortable:!0,sort:(e,a)=>parseInt(e,10)-parseInt(a,10)},{name:"sell",align:"center",label:"\u4E0A\u67B6\u72C0\u614B",field:e=>e.sell},{name:"others",align:"center",label:"\u64CD\u4F5C",field:e=>e.others}],f=["\u6D3E\u5C0D\u904A\u6232","\u7B56\u7565\u904A\u6232","\u9663\u71DF\u904A\u6232","\u89AA\u5B50\u904A\u6232","\u7D19\u724C\u904A\u6232","\u5176\u4ED6\u904A\u6232","\u66A2\u92B7\u904A\u6232","\u6700\u65B0\u4E0A\u67B6","\u64BF\u4FBF\u5B9C","\u516B\u6210\u65B0","\u8FD1\u5168\u65B0"],b=q(f),C=(e,a)=>{if(e===""){a(()=>{b.value=f});return}a(()=>{const o=e.toLowerCase();b.value=f.filter(i=>i.toLowerCase().indexOf(o)>-1)})},d={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"},price(e){return e>=0||"\u50F9\u683C\u932F\u8AA4"}},r=I([]),l=I({_id:"",name:"",images:[],category:[],gamer:0,age:0,rules:"",price:0,sell:!1,dialog:!1,idx:-1,loading:!1}),_=async e=>{e===-1?(l._id="",l.name="",l.images=[],l.category=[],l.gamer=0,l.age=0,l.rules="",l.price=0,l.sell=!1,l.idx=-1):(l._id=r[e]._id,l.name=r[e].name,l.images=r[e].images,l.category=r[e].category,l.gamer=r[e].gamer,l.age=r[e].age,l.rules=r[e].rules,l.price=r[e].price,l.sell=r[e].sell,l.idx=e),l.dialog=!0},S=async()=>{l.loading=!0;const e=new FormData;e.append("name",l.name),console.log(l.images);for(const a of l.images)e.append("images",a);for(const a of l.category)e.append("category",a);e.append("gamer",l.gamer),e.append("age",l.age),e.append("rules",l.rules),e.append("price",l.price),e.append("sell",l.sell);try{if(l._id.length===0){const{data:a}=await V.post("/products",e);r.push(a.result),c.notify({position:"top",message:"\u65B0\u589E\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}else{const{data:a}=await V.patch("/products/"+l._id,e);r[l.idx]=a.result,c.notify({position:"top",message:"\u7DE8\u8F2F\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}l.dialog=!1}catch{c.notify({position:"top",message:"\u64CD\u4F5C\u5931\u6557",color:"negative",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}l.loading=!1};return(async()=>{try{const{data:e}=await V.get("/products/all");r.push(...e.result)}catch(e){console.log(e)}})(),(e,a)=>(Q(),U("div",K,[n("div",W,[t(k,{selected:v.value,"onUpdate:selected":a[0]||(a[0]=o=>v.value=o),title:"\u5546\u54C1\u6E05\u55AE",rows:r,columns:x,"row-key":"name",class:"q-mt-lg"},{"body-cell-images":s(o=>[t(u,{props:o},{default:s(()=>[n("div",Z,[n("img",{props:o,src:o.row.images[0]},null,8,ee)])]),_:2},1032,["props"])]),"body-cell-category":s(o=>[t(u,{props:o,class:"text-center"},{default:s(()=>[n("div",null,[(Q(!0),U($,null,D(o.row.category,(i,y)=>(Q(),N(F,{key:y,color:"primary",label:i,"text-color":"white"},null,8,["label"]))),128))])]),_:2},1032,["props"])]),"body-cell-rules":s(o=>[t(u,{props:o,class:"text-center"},{default:s(()=>[n("p",le,h(o.row.rules),1)]),_:2},1032,["props"])]),"body-cell-sell":s(o=>[t(u,{props:o},{default:s(()=>[n("div",ae,[t(w,{modelValue:o.row.sell,"onUpdate:modelValue":i=>o.row.sell=i,props:o,label:e.sell,color:"primary"},null,8,["modelValue","onUpdate:modelValue","props","label"])])]),_:2},1032,["props"])]),"body-cell-others":s(o=>[t(u,{props:o},{default:s(()=>[n("div",oe,[t(p,{square:"",color:"secondary",icon:"edit",props:o,onClick:i=>_(r.findIndex(y=>y._id===o.row._id))},null,8,["props","onClick"])])]),_:2},1032,["props"])]),_:1},8,["selected","rows"]),t(p,{round:"",color:"primary",icon:"add",class:"addBtn q-mt-md",size:"lg",onClick:a[1]||(a[1]=o=>_(-1))})]),t(H,{modelValue:l.dialog,"onUpdate:modelValue":a[10]||(a[10]=o=>l.dialog=o),persistent:""},{default:s(()=>[t(P,{class:"q-px-md"},{default:s(()=>[t(T,{class:"row items-center q-pb-md"},{default:s(()=>[n("div",te,h(l._id.length>0?"\u7DE8\u8F2F\u5546\u54C1":"\u65B0\u589E\u5546\u54C1"),1),t(J),L(t(p,{icon:"close",flat:"",round:"",dense:""},null,512),[[E]])]),_:1}),t(X,{class:"q-gutter-md",style:{width:"500px"},onSubmit:S,onReset:e.onReset},{default:s(()=>[t(m,{modelValue:l.name,"onUpdate:modelValue":a[2]||(a[2]=o=>l.name=o),type:"text",outlined:"",label:"\u8ACB\u8F38\u5165\u5546\u54C1\u540D\u7A31 *","lazy-rules":"",rules:[d.required]},null,8,["modelValue","rules"]),t(Y,{modelValue:l.images,"onUpdate:modelValue":a[3]||(a[3]=o=>l.images=o),label:"\u8ACB\u9078\u64C7\u8981\u4E0A\u50B3\u7684\u5716\u7247",outlined:"",counter:"","max-files":"10",multiple:"",style:{"max-width":"300px"},rules:[d.required]},{prepend:s(()=>[t(M,{name:"add"})]),_:1},8,["modelValue","rules"]),t(j,{modelValue:l.category,"onUpdate:modelValue":a[4]||(a[4]=o=>l.category=o),outlined:"","use-input":"",multiple:"","input-debounce":"0",label:"\u8ACB\u9078\u64C7\u6A19\u7C64",options:b.value,style:{width:"250px"},behavior:"menu",rules:[d.required],onFilter:C},{"no-option":s(()=>[t(O,null,{default:s(()=>[t(R,{class:"text-grey"},{default:s(()=>[A(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","rules"]),t(m,{modelValue:l.gamer,"onUpdate:modelValue":a[5]||(a[5]=o=>l.gamer=o),outlined:"",type:"text",label:"\u8ACB\u9078\u64C7\u904A\u6232\u4EBA\u6578 *","lazy-rules":"",rules:[d.required]},null,8,["modelValue","rules"]),t(m,{modelValue:l.age,"onUpdate:modelValue":a[6]||(a[6]=o=>l.age=o),outlined:"",type:"number",label:"\u8ACB\u8F38\u5165\u9069\u73A9\u5E74\u9F61 *","lazy-rules":"",rules:[d.required]},null,8,["modelValue","rules"]),t(m,{modelValue:l.rules,"onUpdate:modelValue":a[7]||(a[7]=o=>l.rules=o),outlined:"",type:"textarea",label:"\u8ACB\u8F38\u5165\u904A\u6232\u8AAA\u660E *","lazy-rules":"",rules:[d.required]},null,8,["modelValue","rules"]),t(m,{modelValue:l.price,"onUpdate:modelValue":a[8]||(a[8]=o=>l.price=o),outlined:"",type:"number",label:"\u8ACB\u8F38\u5165\u5546\u54C1\u552E\u50F9 *","lazy-rules":"",rules:[d.required,d.price]},null,8,["modelValue","rules"]),t(w,{modelValue:l.sell,"onUpdate:modelValue":a[9]||(a[9]=o=>l.sell=o),label:"\u662F\u5426\u4E0A\u67B6"},null,8,["modelValue"]),n("div",null,[t(G,{align:"center"},{default:s(()=>[t(p,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:l.loading,size:"md"},null,8,["loading"])]),_:1})])]),_:1},8,["onReset"])]),_:1})]),_:1},8,["modelValue"])]))}};export{_e as default};

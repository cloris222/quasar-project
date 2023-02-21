import{Q as k,a as u}from"./QTable.63454a17.js";import{Q as S}from"./QChip.4d0e0216.js";import{Q as w}from"./QToggle.6ad7fa5c.js";import{M as B,r as q,L as x,b4 as V,N as _,ai as h,R as n,d as t,P as s,V as m,F,al as z,O as D,ak as U,ao as G,a5 as $,aA as N,aD as T,aj as A,ap as O}from"./index.e57dcb35.js";import{Q as P}from"./QSpace.a23978e3.js";import{a as j,Q as E}from"./QCard.821a7a75.js";import{Q as M,a as p}from"./QForm.d204c4d3.js";import{Q as R}from"./QFile.cccfc849.js";import{Q as H}from"./QSelect.0e5aa017.js";import{Q as J}from"./QCardActions.135ea52a.js";import{Q as K}from"./QDialog.88e85925.js";import{u as W}from"./use-quasar.f5da597e.js";import"./option-sizes.c1ab5399.js";import"./use-checkbox.99477d5e.js";import"./format.3e32b8d9.js";import"./use-prevent-scroll.869e15a4.js";const X={id:"adminBoardGameList"},Y={class:"q-pa-md"},Z={class:"img_area"},ee=["props","src"],ae={class:"rules_area"},le={class:"sell_area"},oe={class:"others_area"},te={class:"text-h6"},we={__name:"adminboardGameList",setup(se){const c=W(),g=B(),Q=q([]),C=[{name:"name",required:!0,label:"\u684C\u904A\u540D\u7A31",align:"left",field:e=>e.name,sortable:!0},{name:"images",align:"center",label:"\u5716\u7247",field:e=>e.images,sortable:!0},{name:"category",align:"center",label:"\u6A19\u7C64",field:e=>e.category,sortable:!0,sort:(e,o)=>parseInt(e,10)-parseInt(o,10)},{name:"gamer",align:"center",label:"\u904A\u6232\u4EBA\u6578",field:e=>e.gamer,sortable:!0,sort:(e,o)=>parseInt(e,10)-parseInt(o,10)},{name:"age",align:"center",label:"\u9069\u73A9\u5E74\u9F61",field:e=>e.age,sortable:!0,sort:(e,o)=>parseInt(e,10)-parseInt(o,10)},{name:"rules",align:"center",label:"\u904A\u6232\u8AAA\u660E",field:e=>e.rules,classes:"rules_area"},{name:"sell",align:"center",label:"\u4E0A\u67B6\u72C0\u614B",field:e=>e.sell},{name:"others",align:"center",label:"\u64CD\u4F5C",field:e=>e.others}],f=["\u6D3E\u5C0D\u904A\u6232","\u7B56\u7565\u904A\u6232","\u9663\u71DF\u904A\u6232","\u89AA\u5B50\u904A\u6232","\u7D19\u724C\u904A\u6232","\u5176\u4ED6\u904A\u6232","\u66A2\u92B7\u904A\u6232","\u6700\u65B0\u4E0A\u67B6","\u64BF\u4FBF\u5B9C","\u516B\u6210\u65B0","\u8FD1\u5168\u65B0"],b=q(f),I=(e,o)=>{if(e===""){o(()=>{b.value=f});return}o(()=>{const l=e.toLowerCase();b.value=f.filter(d=>d.toLowerCase().indexOf(l)>-1)})},i={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"},price(e){return e>=0||"\u50F9\u683C\u932F\u8AA4"}},r=x([]),a=x({_id:"",name:"",images:[],category:[],gamer:0,age:0,rules:"",sell:!1,dialog:!1,idx:-1,loading:!1}),v=async e=>{e===-1?(a._id="",a.name="",a.images=[],a.category=[],a.gamer=0,a.age=0,a.rules="",a.sell=!1,a.idx=-1):(a._id=r[e]._id,a.name=r[e].name,a.images=r[e].images,a.category=r[e].category,a.gamer=r[e].gamer,a.age=r[e].age,a.rules=r[e].rules,a.sell=r[e].sell,a.idx=e),a.dialog=!0},L=async()=>{a.loading=!0;const e=new FormData;e.append("name",a.name),console.log(a.images);for(const o of a.images)e.append("images",o);for(const o of a.category)e.append("category",o);e.append("gamer",a.gamer),e.append("age",a.age),e.append("rules",a.rules),e.append("sell",a.sell);try{if(a._id.length===0){const{data:o}=await V.post("/boardGameList",e);r.push(o.result),c.notify({position:"top",message:"\u65B0\u589E\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}else{const{data:o}=await V.patch("/boardGameList/"+a._id,e);r[a.idx]=o.result,c.notify({position:"top",message:"\u7DE8\u8F2F\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}a.dialog=!1}catch{c.notify({position:"top",message:"\u64CD\u4F5C\u5931\u6557",color:"negative",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}a.loading=!1};return(async()=>{try{const{data:e}=await V.get("/boardGameList/all");r.push(...e.result)}catch(e){console.log(e)}})(),(e,o)=>(_(),h("div",X,[n("div",Y,[t(k,{selected:Q.value,"onUpdate:selected":o[0]||(o[0]=l=>Q.value=l),title:"\u684C\u904A\u6E05\u55AE",rows:r,columns:C,"row-key":"name",class:"q-mt-lg"},{"body-cell-images":s(l=>[t(u,{props:l},{default:s(()=>[n("div",Z,[n("img",{props:l,src:l.row.images[0]},null,8,ee)])]),_:2},1032,["props"])]),"body-cell-category":s(l=>[t(u,{props:l,class:"text-center"},{default:s(()=>[n("div",null,[(_(!0),h(F,null,z(l.row.category,(d,y)=>(_(),D(S,{key:y,color:"primary",label:d,"text-color":"white"},null,8,["label"]))),128))])]),_:2},1032,["props"])]),"body-cell-rules":s(l=>[t(u,{props:l,class:"text-center"},{default:s(()=>[n("p",ae,U(l.row.rules),1)]),_:2},1032,["props"])]),"body-cell-sell":s(l=>[t(u,{props:l},{default:s(()=>[n("div",le,[t(w,{modelValue:l.row.sell,"onUpdate:modelValue":d=>l.row.sell=d,props:l,label:e.sell,color:"primary"},null,8,["modelValue","onUpdate:modelValue","props","label"])])]),_:2},1032,["props"])]),"body-cell-others":s(l=>[t(u,{props:l},{default:s(()=>[n("div",oe,[t(m,{square:"",color:"secondary",icon:"edit",props:l,onClick:d=>v(r.findIndex(y=>y._id===l.row._id))},null,8,["props","onClick"])])]),_:2},1032,["props"])]),_:1},8,["selected","rows"]),t(m,{round:"",color:"primary",icon:"add",class:"addBtn q-mt-md",size:"lg",onClick:o[1]||(o[1]=l=>v(-1))})]),t(K,{modelValue:a.dialog,"onUpdate:modelValue":o[9]||(o[9]=l=>a.dialog=l),persistent:""},{default:s(()=>[t(j,{class:"q-px-md"},{default:s(()=>[t(E,{class:"row items-center q-pb-md"},{default:s(()=>[n("div",te,U(a._id.length>0?"\u7DE8\u8F2F\u684C\u904A\u6E05\u55AE":"\u65B0\u589E\u684C\u904A\u6E05\u55AE"),1),t(P),G(t(m,{icon:"close",flat:"",round:"",dense:""},null,512),[[O]])]),_:1}),t(M,{class:"q-gutter-md",style:{width:"500px"},onSubmit:L},{default:s(()=>[t(p,{modelValue:a.name,"onUpdate:modelValue":o[2]||(o[2]=l=>a.name=l),type:"text",outlined:"",label:"\u8ACB\u8F38\u5165\u684C\u904A\u540D\u7A31 *","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),t(R,{modelValue:a.images,"onUpdate:modelValue":o[3]||(o[3]=l=>a.images=l),label:"\u8ACB\u9078\u64C7\u8981\u4E0A\u50B3\u7684\u5716\u7247",outlined:"",counter:"","max-files":"10",multiple:"",style:{"max-width":"300px"},rules:[i.required]},{prepend:s(()=>[t($,{name:"add"})]),_:1},8,["modelValue","rules"]),t(H,{modelValue:a.category,"onUpdate:modelValue":o[4]||(o[4]=l=>a.category=l),outlined:"","use-input":"",multiple:"","input-debounce":"0",label:"\u8ACB\u9078\u64C7\u6A19\u7C64",options:b.value,style:{width:"250px"},behavior:"menu",rules:[i.required],onFilter:I},{"no-option":s(()=>[t(N,null,{default:s(()=>[t(T,{class:"text-grey"},{default:s(()=>[A(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","rules"]),t(p,{modelValue:a.gamer,"onUpdate:modelValue":o[5]||(o[5]=l=>a.gamer=l),outlined:"",type:"text",label:"\u8ACB\u9078\u64C7\u904A\u6232\u4EBA\u6578 *","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),t(p,{modelValue:a.age,"onUpdate:modelValue":o[6]||(o[6]=l=>a.age=l),outlined:"",type:"number",label:"\u8ACB\u8F38\u5165\u9069\u73A9\u5E74\u9F61 *","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),t(p,{modelValue:a.rules,"onUpdate:modelValue":o[7]||(o[7]=l=>a.rules=l),outlined:"",type:"textarea",label:"\u8ACB\u8F38\u5165\u904A\u6232\u8AAA\u660E *","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),t(w,{modelValue:a.sell,"onUpdate:modelValue":o[8]||(o[8]=l=>a.sell=l),label:"\u662F\u5426\u4E0A\u67B6"},null,8,["modelValue"]),n("div",null,[t(J,{align:"center"},{default:s(()=>[t(m,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:a.loading,size:"md"},null,8,["loading"])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{we as default};

import{Q as L,a as u}from"./QTable.723c5b3d.js";import{Q as F}from"./QChip.af4eed6d.js";import{Q as w}from"./QToggle.f1e6db1a.js";import{J as S,N as B,r as q,M as x,b6 as V,O as _,ak as h,U as n,d as s,Q as t,X as m,F as z,an as G,P as $,am as U,Y as D,V as N,aq as T,a8 as A,aC as O,aF as P,al as E,ar as J}from"./index.24f7c922.js";import{Q as M}from"./QSpace.fafe89ed.js";import{Q as X,a as p}from"./QForm.a6935a0f.js";import{Q as Y}from"./QFile.2e884d79.js";import{Q as j}from"./QSelect.896f404b.js";import{Q as H}from"./QCardActions.13041748.js";import{Q as K}from"./QDialog.2d4f8164.js";import"./option-sizes.6eb96a2f.js";import"./use-checkbox.f98e197d.js";import"./use-key-composition.d631cd36.js";import"./format.3e32b8d9.js";import"./use-prevent-scroll.3f3bf19e.js";const R={id:"adminBoardGameList"},W={class:"q-pa-md"},Z={class:"img_area"},ee=["props","src"],ae={class:"rules_area"},le={class:"sell_area"},oe={class:"others_area"},se={class:"text-h6"},ve={__name:"adminboardGameList",setup(te){const c=S(),g=B(),Q=q([]),C=[{name:"name",required:!0,label:"\u684C\u904A\u540D\u7A31",align:"left",field:e=>e.name,sortable:!0},{name:"images",align:"center",label:"\u5716\u7247",field:e=>e.images,sortable:!0},{name:"category",align:"center",label:"\u6A19\u7C64",field:e=>e.category,sortable:!0,sort:(e,o)=>parseInt(e,10)-parseInt(o,10)},{name:"gamer",align:"center",label:"\u904A\u6232\u4EBA\u6578",field:e=>e.gamer,sortable:!0,sort:(e,o)=>parseInt(e,10)-parseInt(o,10)},{name:"age",align:"center",label:"\u9069\u73A9\u5E74\u9F61",field:e=>e.age,sortable:!0,sort:(e,o)=>parseInt(e,10)-parseInt(o,10)},{name:"rules",align:"center",label:"\u904A\u6232\u8AAA\u660E",field:e=>e.rules,classes:"rules_area"},{name:"sell",align:"center",label:"\u4E0A\u67B6\u72C0\u614B",field:e=>e.sell},{name:"others",align:"center",label:"\u64CD\u4F5C",field:e=>e.others}],f=["\u6D3E\u5C0D\u904A\u6232","\u7B56\u7565\u904A\u6232","\u9663\u71DF\u904A\u6232","\u89AA\u5B50\u904A\u6232","\u7D19\u724C\u904A\u6232","\u5176\u4ED6\u904A\u6232","\u66A2\u92B7\u904A\u6232","\u6700\u65B0\u4E0A\u67B6","\u64BF\u4FBF\u5B9C","\u516B\u6210\u65B0","\u8FD1\u5168\u65B0"],b=q(f),I=(e,o)=>{if(e===""){o(()=>{b.value=f});return}o(()=>{const l=e.toLowerCase();b.value=f.filter(i=>i.toLowerCase().indexOf(l)>-1)})},d={required(e){return!!e||"\u6B04\u4F4D\u5FC5\u586B"},price(e){return e>=0||"\u50F9\u683C\u932F\u8AA4"}},r=x([]),a=x({_id:"",name:"",images:[],category:[],gamer:0,age:0,rules:"",sell:!1,dialog:!1,idx:-1,loading:!1}),v=async e=>{e===-1?(a._id="",a.name="",a.images=[],a.category=[],a.gamer=0,a.age=0,a.rules="",a.sell=!1,a.idx=-1):(a._id=r[e]._id,a.name=r[e].name,a.images=r[e].images,a.category=r[e].category,a.gamer=r[e].gamer,a.age=r[e].age,a.rules=r[e].rules,a.sell=r[e].sell,a.idx=e),a.dialog=!0},k=async()=>{a.loading=!0;const e=new FormData;e.append("name",a.name),console.log(a.images);for(const o of a.images)e.append("images",o);for(const o of a.category)e.append("category",o);e.append("gamer",a.gamer),e.append("age",a.age),e.append("rules",a.rules),e.append("sell",a.sell);try{if(a._id.length===0){const{data:o}=await V.post("/boardGameList",e);r.push(o.result),c.notify({position:"top",message:"\u65B0\u589E\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}else{const{data:o}=await V.patch("/boardGameList/"+a._id,e);r[a.idx]=o.result,c.notify({position:"top",message:"\u7DE8\u8F2F\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}a.dialog=!1}catch{c.notify({position:"top",message:"\u64CD\u4F5C\u5931\u6557",color:"negative",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}a.loading=!1};return(async()=>{try{const{data:e}=await V.get("/boardGameList/all");r.push(...e.result)}catch(e){console.log(e)}})(),(e,o)=>(_(),h("div",R,[n("div",W,[s(L,{selected:Q.value,"onUpdate:selected":o[0]||(o[0]=l=>Q.value=l),title:"\u684C\u904A\u6E05\u55AE",rows:r,columns:C,"row-key":"name",class:"q-mt-lg"},{"body-cell-images":t(l=>[s(u,{props:l},{default:t(()=>[n("div",Z,[n("img",{props:l,src:l.row.images[0]},null,8,ee)])]),_:2},1032,["props"])]),"body-cell-category":t(l=>[s(u,{props:l,class:"text-center"},{default:t(()=>[n("div",null,[(_(!0),h(z,null,G(l.row.category,(i,y)=>(_(),$(F,{key:y,color:"primary",label:i,"text-color":"white"},null,8,["label"]))),128))])]),_:2},1032,["props"])]),"body-cell-rules":t(l=>[s(u,{props:l,class:"text-center"},{default:t(()=>[n("p",ae,U(l.row.rules),1)]),_:2},1032,["props"])]),"body-cell-sell":t(l=>[s(u,{props:l},{default:t(()=>[n("div",le,[s(w,{modelValue:l.row.sell,"onUpdate:modelValue":i=>l.row.sell=i,props:l,label:e.sell,color:"primary"},null,8,["modelValue","onUpdate:modelValue","props","label"])])]),_:2},1032,["props"])]),"body-cell-others":t(l=>[s(u,{props:l},{default:t(()=>[n("div",oe,[s(m,{square:"",color:"secondary",icon:"edit",props:l,onClick:i=>v(r.findIndex(y=>y._id===l.row._id))},null,8,["props","onClick"])])]),_:2},1032,["props"])]),_:1},8,["selected","rows"]),s(m,{round:"",color:"primary",icon:"add",class:"addBtn q-mt-md",size:"lg",onClick:o[1]||(o[1]=l=>v(-1))})]),s(K,{modelValue:a.dialog,"onUpdate:modelValue":o[9]||(o[9]=l=>a.dialog=l),persistent:""},{default:t(()=>[s(D,{class:"q-px-md"},{default:t(()=>[s(N,{class:"row items-center q-pb-md"},{default:t(()=>[n("div",se,U(a._id.length>0?"\u7DE8\u8F2F\u684C\u904A\u6E05\u55AE":"\u65B0\u589E\u684C\u904A\u6E05\u55AE"),1),s(M),T(s(m,{icon:"close",flat:"",round:"",dense:""},null,512),[[J]])]),_:1}),s(X,{class:"q-gutter-md",style:{width:"500px"},onSubmit:k},{default:t(()=>[s(p,{modelValue:a.name,"onUpdate:modelValue":o[2]||(o[2]=l=>a.name=l),type:"text",outlined:"",label:"\u8ACB\u8F38\u5165\u684C\u904A\u540D\u7A31 *","lazy-rules":"",rules:[d.required]},null,8,["modelValue","rules"]),s(Y,{modelValue:a.images,"onUpdate:modelValue":o[3]||(o[3]=l=>a.images=l),label:"\u8ACB\u9078\u64C7\u8981\u4E0A\u50B3\u7684\u5716\u7247",outlined:"",counter:"","max-files":"10",multiple:"",style:{"max-width":"300px"},rules:[d.required]},{prepend:t(()=>[s(A,{name:"add"})]),_:1},8,["modelValue","rules"]),s(j,{modelValue:a.category,"onUpdate:modelValue":o[4]||(o[4]=l=>a.category=l),outlined:"","use-input":"",multiple:"","input-debounce":"0",label:"\u8ACB\u9078\u64C7\u6A19\u7C64",options:b.value,style:{width:"250px"},behavior:"menu",rules:[d.required],onFilter:I},{"no-option":t(()=>[s(O,null,{default:t(()=>[s(P,{class:"text-grey"},{default:t(()=>[E(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","rules"]),s(p,{modelValue:a.gamer,"onUpdate:modelValue":o[5]||(o[5]=l=>a.gamer=l),outlined:"",type:"text",label:"\u8ACB\u9078\u64C7\u904A\u6232\u4EBA\u6578 *","lazy-rules":"",rules:[d.required]},null,8,["modelValue","rules"]),s(p,{modelValue:a.age,"onUpdate:modelValue":o[6]||(o[6]=l=>a.age=l),outlined:"",type:"number",label:"\u8ACB\u8F38\u5165\u9069\u73A9\u5E74\u9F61 *","lazy-rules":"",rules:[d.required]},null,8,["modelValue","rules"]),s(p,{modelValue:a.rules,"onUpdate:modelValue":o[7]||(o[7]=l=>a.rules=l),outlined:"",type:"textarea",label:"\u8ACB\u8F38\u5165\u904A\u6232\u8AAA\u660E *","lazy-rules":"",rules:[d.required]},null,8,["modelValue","rules"]),s(w,{modelValue:a.sell,"onUpdate:modelValue":o[8]||(o[8]=l=>a.sell=l),label:"\u662F\u5426\u4E0A\u67B6"},null,8,["modelValue"]),n("div",null,[s(H,{align:"center"},{default:t(()=>[s(m,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:a.loading,size:"md"},null,8,["loading"])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{ve as default};

import{Q as S,a as u}from"./QTable.5746e7f8.js";import{Q as B}from"./QChip.348a6e5c.js";import{Q as w}from"./QToggle.2b56736a.js";import{J as F,N as z,r as q,M as h,b6 as _,O as V,au as x,U as n,d as t,Q as s,X as m,F as G,ax as $,P as D,aw as U,Y as I,V as N,aq as T,a8 as A,ap as O,at as P,av as E,aA as J}from"./index.16bc123c.js";import{Q as M}from"./QSpace.6d97e596.js";import{Q as X,a as c}from"./QForm.5e043099.js";import{Q as Y}from"./QFile.bc542fab.js";import{Q as j}from"./QSelect.d4baac8d.js";import{Q as H}from"./QCardActions.fb0962b4.js";import{Q as K}from"./QDialog.14f0e5ed.js";import"./option-sizes.6cb7ee26.js";import"./use-checkbox.c07b7980.js";import"./use-key-composition.43202cad.js";import"./format.3e32b8d9.js";import"./use-prevent-scroll.fb1710ee.js";const R={id:"adminBoardGameList"},W={class:"container"},Z=n("div",{class:"row q-ml-md"},[n("div",{class:"col-12 bigTitle"}," \u684C\u904A\u6E05\u55AE ")],-1),ee={class:"q-pa-md"},ae={class:"img_area text-center"},le=["props","src"],oe={class:"rules_area text-center"},te={class:"sell_area"},se={class:"others_area"},re={class:"text-h6"},qe={__name:"adminboardGameList",setup(ne){const p=F(),g=z(),v=q([]),C=[{name:"name",required:!0,label:"\u684C\u904A\u540D\u7A31",align:"left",field:a=>a.name,sortable:!0},{name:"images",align:"center",label:"\u5716\u7247",field:a=>a.images},{name:"category",align:"center",label:"\u6A19\u7C64",field:a=>a.category},{name:"gamer",align:"center",label:"\u904A\u6232\u4EBA\u6578",field:a=>a.gamer},{name:"age",align:"center",label:"\u9069\u73A9\u5E74\u9F61",field:a=>a.age},{name:"rules",align:"center",label:"\u904A\u6232\u8AAA\u660E",field:a=>a.rules},{name:"sell",align:"center",label:"\u4E0A\u67B6\u72C0\u614B",field:a=>a.sell},{name:"others",align:"center",label:"\u64CD\u4F5C",field:a=>a.others}],f=["\u6D3E\u5C0D\u904A\u6232","\u7B56\u7565\u904A\u6232","\u9663\u71DF\u904A\u6232","\u89AA\u5B50\u904A\u6232","\u7D19\u724C\u904A\u6232","\u5176\u4ED6\u904A\u6232","\u71B1\u9580\u904A\u6232","\u6700\u65B0\u904A\u6232","\u65B0\u624B\u53CB\u5584"],b=q(f),L=(a,o)=>{if(a===""){o(()=>{b.value=f});return}o(()=>{const l=a.toLowerCase();b.value=f.filter(d=>d.toLowerCase().indexOf(l)>-1)})},i={required(a){return!!a||"\u6B04\u4F4D\u5FC5\u586B"},price(a){return a>=0||"\u50F9\u683C\u932F\u8AA4"}},r=h([]),e=h({_id:"",name:"",images:[],category:[],gamer:0,age:0,rules:"",sell:!1,dialog:!1,idx:-1,loading:!1}),Q=async a=>{a===-1?(e._id="",e.name="",e.images=[],e.category=[],e.gamer=0,e.age=0,e.rules="",e.sell=!1,e.idx=-1):(e._id=r[a]._id,e.name=r[a].name,e.images=r[a].images,e.category=r[a].category,e.gamer=r[a].gamer,e.age=r[a].age,e.rules=r[a].rules,e.sell=r[a].sell,e.idx=a),e.dialog=!0},k=async()=>{e.loading=!0;const a=new FormData;a.append("name",e.name),console.log(e.images);for(const o of e.images)a.append("images",o);for(const o of e.category)a.append("category",o);a.append("gamer",e.gamer),a.append("age",e.age),a.append("rules",e.rules),a.append("sell",e.sell);try{if(e._id.length===0){const{data:o}=await _.post("/boardGameList",a);r.push(o.result),p.notify({position:"top",message:"\u65B0\u589E\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}else{const{data:o}=await _.patch("/boardGameList/"+e._id,a);r[e.idx]=o.result,p.notify({position:"top",message:"\u7DE8\u8F2F\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}e.dialog=!1}catch{p.notify({position:"top",message:"\u64CD\u4F5C\u5931\u6557",color:"negative",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}e.loading=!1};return(async()=>{try{const{data:a}=await _.get("/boardGameList/all");r.push(...a.result)}catch(a){console.log(a)}})(),(a,o)=>(V(),x("div",R,[n("div",W,[Z,n("div",ee,[t(S,{selected:v.value,"onUpdate:selected":o[0]||(o[0]=l=>v.value=l),title:"\u684C\u904A\u6E05\u55AE",rows:r,columns:C,"row-key":"name",class:"q-mt-lg"},{"body-cell-images":s(l=>[t(u,{props:l},{default:s(()=>[n("div",ae,[n("img",{props:l,src:l.row.images[0]},null,8,le)])]),_:2},1032,["props"])]),"body-cell-category":s(l=>[t(u,{props:l},{default:s(()=>[n("div",null,[(V(!0),x(G,null,$(l.row.category,(d,y)=>(V(),D(B,{key:y,color:"primary",label:d,"text-color":"white"},null,8,["label"]))),128))])]),_:2},1032,["props"])]),"body-cell-rules":s(l=>[t(u,{props:l},{default:s(()=>[n("p",oe,U(l.row.rules),1)]),_:2},1032,["props"])]),"body-cell-sell":s(l=>[t(u,{props:l},{default:s(()=>[n("div",te,[t(w,{modelValue:l.row.sell,"onUpdate:modelValue":d=>l.row.sell=d,props:l,label:a.sell,color:"primary"},null,8,["modelValue","onUpdate:modelValue","props","label"])])]),_:2},1032,["props"])]),"body-cell-others":s(l=>[t(u,{props:l},{default:s(()=>[n("div",se,[t(m,{square:"",color:"secondary",icon:"edit",props:l,onClick:d=>Q(r.findIndex(y=>y._id===l.row._id))},null,8,["props","onClick"])])]),_:2},1032,["props"])]),_:1},8,["selected","rows"]),t(m,{round:"",color:"primary",icon:"add",class:"addBtn q-mt-md",size:"lg",onClick:o[1]||(o[1]=l=>Q(-1))})]),t(K,{modelValue:e.dialog,"onUpdate:modelValue":o[9]||(o[9]=l=>e.dialog=l),persistent:""},{default:s(()=>[t(I,{class:"q-px-md"},{default:s(()=>[t(N,{class:"row items-center q-pb-md"},{default:s(()=>[n("div",re,U(e._id.length>0?"\u7DE8\u8F2F\u684C\u904A\u6E05\u55AE":"\u65B0\u589E\u684C\u904A\u6E05\u55AE"),1),t(M),T(t(m,{icon:"close",flat:"",round:"",dense:""},null,512),[[J]])]),_:1}),t(X,{class:"q-gutter-md",style:{width:"500px"},onSubmit:k},{default:s(()=>[t(c,{modelValue:e.name,"onUpdate:modelValue":o[2]||(o[2]=l=>e.name=l),type:"text",outlined:"",label:"\u8ACB\u8F38\u5165\u684C\u904A\u540D\u7A31 *","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),t(Y,{modelValue:e.images,"onUpdate:modelValue":o[3]||(o[3]=l=>e.images=l),label:"\u8ACB\u9078\u64C7\u8981\u4E0A\u50B3\u7684\u5716\u7247",outlined:"",counter:"","max-files":"10",multiple:"",style:{"max-width":"300px"},rules:[i.required]},{prepend:s(()=>[t(A,{name:"add"})]),_:1},8,["modelValue","rules"]),t(j,{modelValue:e.category,"onUpdate:modelValue":o[4]||(o[4]=l=>e.category=l),outlined:"","use-input":"",multiple:"","input-debounce":"0",label:"\u8ACB\u9078\u64C7\u6A19\u7C64",options:b.value,style:{width:"250px"},behavior:"menu",rules:[i.required],onFilter:L},{"no-option":s(()=>[t(O,null,{default:s(()=>[t(P,{class:"text-grey"},{default:s(()=>[E(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","rules"]),t(c,{modelValue:e.gamer,"onUpdate:modelValue":o[5]||(o[5]=l=>e.gamer=l),outlined:"",type:"text",label:"\u8ACB\u9078\u64C7\u904A\u6232\u4EBA\u6578 *","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),t(c,{modelValue:e.age,"onUpdate:modelValue":o[6]||(o[6]=l=>e.age=l),outlined:"",type:"number",label:"\u8ACB\u8F38\u5165\u9069\u73A9\u5E74\u9F61 *","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),t(c,{modelValue:e.rules,"onUpdate:modelValue":o[7]||(o[7]=l=>e.rules=l),outlined:"",type:"textarea",label:"\u8ACB\u8F38\u5165\u904A\u6232\u8AAA\u660E *","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),t(w,{modelValue:e.sell,"onUpdate:modelValue":o[8]||(o[8]=l=>e.sell=l),label:"\u662F\u5426\u4E0A\u67B6"},null,8,["modelValue"]),n("div",null,[t(H,{align:"center"},{default:s(()=>[t(m,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:e.loading,size:"md"},null,8,["loading"])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}};export{qe as default};

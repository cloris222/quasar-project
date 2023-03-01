import{Q as S,a as u}from"./QTable.ac8a6068.js";import{Q as B}from"./QChip.213d8aef.js";import{Q as w}from"./QToggle.9d3e49aa.js";import{J as F,N as G,r as q,M as h,b4 as _,O as V,ak as x,U as n,d as s,Q as t,X as m,F as z,an as $,P as D,am as U,Y as I,V as N,aq as T,ac as A,aG as E,aE as O,al as P,ar as J}from"./index.60a9a997.js";import{Q as M}from"./QSpace.27e41e0b.js";import{Q as X,a as c}from"./QForm.0c1559e6.js";import{Q as Y}from"./QFile.cb07e5be.js";import{Q as j}from"./QSelect.2725495d.js";import{Q as H}from"./QCardActions.62c7d861.js";import{Q as K}from"./QDialog.b5f3d102.js";import"./use-checkbox.630cc3d1.js";import"./option-sizes.e5334702.js";import"./use-key-composition.95045d83.js";import"./format.3e32b8d9.js";import"./use-prevent-scroll.5f4da33f.js";const R={id:"adminBoardGameList"},W={class:"container"},Z=n("div",{class:"row q-ml-md"},[n("div",{class:"col-12 bigTitle"}," \u684C\u904A\u6E05\u55AE ")],-1),ee={class:"q-pa-md"},le={class:"img_area text-center"},ae=["props","src"],oe={class:"rules_area text-center"},se={class:"sell_area"},te={class:"others_area"},re={class:"text-h6"},qe={__name:"adminboardGameList",setup(ne){const p=F(),g=G(),v=q([]),C=[{name:"name",required:!0,label:"\u684C\u904A\u540D\u7A31",align:"left",field:l=>l.name,sortable:!0},{name:"images",align:"center",label:"\u5716\u7247",field:l=>l.images},{name:"category",align:"center",label:"\u6A19\u7C64",field:l=>l.category},{name:"gamer",align:"center",label:"\u904A\u6232\u4EBA\u6578",field:l=>l.gamer},{name:"age",align:"center",label:"\u9069\u73A9\u5E74\u9F61",field:l=>l.age},{name:"rules",align:"center",label:"\u904A\u6232\u8AAA\u660E",field:l=>l.rules},{name:"sell",align:"center",label:"\u4E0A\u67B6\u72C0\u614B",field:l=>l.sell},{name:"others",align:"center",label:"\u64CD\u4F5C",field:l=>l.others}],f=["\u6D3E\u5C0D\u904A\u6232","\u7B56\u7565\u904A\u6232","\u9663\u71DF\u904A\u6232","\u89AA\u5B50\u904A\u6232","\u7D19\u724C\u904A\u6232","\u5176\u4ED6\u904A\u6232","\u71B1\u9580\u904A\u6232","\u6700\u65B0\u904A\u6232","\u65B0\u624B\u53CB\u5584"],b=q(f),k=(l,o)=>{if(l===""){o(()=>{b.value=f});return}o(()=>{const a=l.toLowerCase();b.value=f.filter(d=>d.toLowerCase().indexOf(a)>-1)})},i={required(l){return!!l||"\u6B04\u4F4D\u5FC5\u586B"},price(l){return l>=0||"\u50F9\u683C\u932F\u8AA4"}},r=h([]),e=h({_id:"",name:"",images:[],category:[],gamer:0,age:0,rules:"",sell:!1,dialog:!1,idx:-1,loading:!1}),Q=async l=>{l===-1?(e._id="",e.name="",e.images=[],e.category=[],e.gamer=0,e.age=0,e.rules="",e.sell=!1,e.idx=-1):(e._id=r[l]._id,e.name=r[l].name,e.images=r[l].images,e.category=r[l].category,e.gamer=r[l].gamer,e.age=r[l].age,e.rules=r[l].rules,e.sell=r[l].sell,e.idx=l),e.dialog=!0},L=async()=>{e.loading=!0;const l=new FormData;l.append("name",e.name),console.log(e.images);for(const o of e.images)l.append("images",o);for(const o of e.category)l.append("category",o);l.append("gamer",e.gamer),l.append("age",e.age),l.append("rules",e.rules),l.append("sell",e.sell);try{if(e._id.length===0){const{data:o}=await _.post("/boardGameList",l);r.push(o.result),p.notify({position:"top",message:"\u65B0\u589E\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}else{const{data:o}=await _.patch("/boardGameList/"+e._id,l);r[e.idx]=o.result,p.notify({position:"top",message:"\u7DE8\u8F2F\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}e.dialog=!1}catch{p.notify({position:"top",message:"\u64CD\u4F5C\u5931\u6557",color:"negative",avatar:`https://source.boringavatars.com/beam/256/${g.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}e.loading=!1};return(async()=>{try{const{data:l}=await _.get("/boardGameList/all");r.push(...l.result)}catch(l){console.log(l)}})(),(l,o)=>(V(),x("div",R,[n("div",W,[Z,n("div",ee,[s(S,{selected:v.value,"onUpdate:selected":o[0]||(o[0]=a=>v.value=a),title:"\u684C\u904A\u6E05\u55AE",rows:r,columns:C,"row-key":"name",class:"q-mt-lg"},{"body-cell-images":t(a=>[s(u,{props:a},{default:t(()=>[n("div",le,[n("img",{props:a,src:a.row.images[0]},null,8,ae)])]),_:2},1032,["props"])]),"body-cell-category":t(a=>[s(u,{props:a},{default:t(()=>[n("div",null,[(V(!0),x(z,null,$(a.row.category,(d,y)=>(V(),D(B,{key:y,color:"primary",label:d,"text-color":"white"},null,8,["label"]))),128))])]),_:2},1032,["props"])]),"body-cell-rules":t(a=>[s(u,{props:a},{default:t(()=>[n("p",oe,U(a.row.rules),1)]),_:2},1032,["props"])]),"body-cell-sell":t(a=>[s(u,{props:a},{default:t(()=>[n("div",se,[s(w,{modelValue:a.row.sell,"onUpdate:modelValue":d=>a.row.sell=d,props:a,label:l.sell,color:"primary"},null,8,["modelValue","onUpdate:modelValue","props","label"])])]),_:2},1032,["props"])]),"body-cell-others":t(a=>[s(u,{props:a},{default:t(()=>[n("div",te,[s(m,{square:"",color:"secondary",icon:"edit",props:a,onClick:d=>Q(r.findIndex(y=>y._id===a.row._id))},null,8,["props","onClick"])])]),_:2},1032,["props"])]),_:1},8,["selected","rows"]),s(m,{round:"",color:"primary",icon:"add",class:"addBtn q-mt-md",size:"lg",onClick:o[1]||(o[1]=a=>Q(-1))})]),s(K,{modelValue:e.dialog,"onUpdate:modelValue":o[9]||(o[9]=a=>e.dialog=a),persistent:""},{default:t(()=>[s(I,{class:"q-px-md"},{default:t(()=>[s(N,{class:"row items-center q-pb-md"},{default:t(()=>[n("div",re,U(e._id.length>0?"\u7DE8\u8F2F\u684C\u904A\u6E05\u55AE":"\u65B0\u589E\u684C\u904A\u6E05\u55AE"),1),s(M),T(s(m,{icon:"close",flat:"",round:"",dense:""},null,512),[[J]])]),_:1}),s(X,{class:"q-gutter-md",style:{width:"500px"},onSubmit:L},{default:t(()=>[s(c,{modelValue:e.name,"onUpdate:modelValue":o[2]||(o[2]=a=>e.name=a),type:"text",outlined:"",label:"\u8ACB\u8F38\u5165\u684C\u904A\u540D\u7A31 *","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),s(Y,{modelValue:e.images,"onUpdate:modelValue":o[3]||(o[3]=a=>e.images=a),label:"\u8ACB\u9078\u64C7\u8981\u4E0A\u50B3\u7684\u5716\u7247",outlined:"",counter:"","max-files":"10",multiple:"",style:{"max-width":"300px"},rules:[i.required]},{prepend:t(()=>[s(A,{name:"add"})]),_:1},8,["modelValue","rules"]),s(j,{modelValue:e.category,"onUpdate:modelValue":o[4]||(o[4]=a=>e.category=a),outlined:"","use-input":"",multiple:"","input-debounce":"0",label:"\u8ACB\u9078\u64C7\u6A19\u7C64",options:b.value,style:{width:"250px"},behavior:"menu",rules:[i.required],onFilter:k},{"no-option":t(()=>[s(E,null,{default:t(()=>[s(O,{class:"text-grey"},{default:t(()=>[P(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","rules"]),s(c,{modelValue:e.gamer,"onUpdate:modelValue":o[5]||(o[5]=a=>e.gamer=a),outlined:"",type:"text",label:"\u8ACB\u9078\u64C7\u904A\u6232\u4EBA\u6578 *","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),s(c,{modelValue:e.age,"onUpdate:modelValue":o[6]||(o[6]=a=>e.age=a),outlined:"",type:"number",label:"\u8ACB\u8F38\u5165\u9069\u73A9\u5E74\u9F61 *","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),s(c,{modelValue:e.rules,"onUpdate:modelValue":o[7]||(o[7]=a=>e.rules=a),outlined:"",type:"textarea",label:"\u8ACB\u8F38\u5165\u904A\u6232\u8AAA\u660E *","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),s(w,{modelValue:e.sell,"onUpdate:modelValue":o[8]||(o[8]=a=>e.sell=a),label:"\u662F\u5426\u4E0A\u67B6"},null,8,["modelValue"]),n("div",null,[s(H,{align:"center"},{default:t(()=>[s(m,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:e.loading,size:"md"},null,8,["loading"])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}};export{qe as default};

import{Q as C,a as r}from"./QTable.fcb2f5bf.js";import{Q as v}from"./QToggle.4ca4f052.js";import{J as S,N as k,r as V,M as Q,b6 as g,O as I,ak as B,U as i,d as t,Q as s,X as n,am as p,Y as N,V as z,aq as h,a8 as q,ar as x}from"./index.bb9d4e92.js";import{Q as F}from"./QSpace.6959320e.js";import{Q as P,a as T}from"./QPopupProxy.99ec2e7f.js";import{Q as A,a as _}from"./QForm.793fd9a0.js";import{Q as M}from"./QFile.987b9b01.js";import{Q as O}from"./QCardActions.4bbe0b80.js";import{Q as Y}from"./QDialog.d56b237b.js";import"./option-sizes.877540f7.js";import"./QSelect.d59e5525.js";import"./use-key-composition.2851cd70.js";import"./QChip.ab670c67.js";import"./format.3e32b8d9.js";import"./use-checkbox.689179b6.js";import"./use-cache.b0833c75.js";import"./use-prevent-scroll.8db089fc.js";const j={id:"adminNews"},E={class:"container q-mx-auto"},J={class:"row"},L={class:"col-12"},X={class:"title_area"},G={class:"newsImg"},H=["props","src"],K={class:"description_area"},R={class:"newsSell"},W={class:"newsOthers"},Z={class:"text-h6"},ee={class:"row items-center justify-end"},we={__name:"adminNews",setup(le){const u=S(),c=k(),b=V([]),U=[{name:"date",required:!0,label:"\u516C\u544A\u65E5\u671F",align:"left",field:l=>l.name,sortable:!0,sort:(l,o)=>parseInt(l,10)-parseInt(o,10)},{name:"title",align:"center",label:"\u516C\u544A\u6A19\u984C",field:l=>l.name},{name:"images",align:"center",label:"\u5716\u7247",field:l=>l.name},{name:"description",align:"center",label:"\u516C\u544A\u5167\u6587",field:l=>l.name},{name:"sell",align:"center",label:"\u4E0A\u67B6\u72C0\u614B",field:l=>l.name},{name:"others",align:"center",label:"\u64CD\u4F5C",field:l=>l.others}],f={required(l){return!!l||"\u6B04\u4F4D\u5FC5\u586B"}},d=Q([]),m=new Date,e=Q({_id:"",date:m,title:"",images:[],description:"",sell:!1,dialog:!1,idx:-1,loading:!1}),y=async l=>{l===-1?(e._id="",e.date="",e.title="",e.images=[],e.description="",e.sell=!1,e.idx=-1):(e._id=d[l]._id,e.date=d[l].date,e.title=d[l].title,e.images=d[l].images,e.description=d[l].description,e.sell=d[l].sell,e.idx=l),e.dialog=!0},D=async()=>{e.loading=!0;const l=new FormData;l.append("date",e.date);for(const o of e.images)l.append("images",o);l.append("title",e.title),l.append("age",e.age),l.append("description",e.description),l.append("sell",e.sell);try{if(e._id.length===0){const{data:o}=await g.post("/news",l);d.push(o.result),u.notify({position:"top",message:"\u65B0\u589E\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${c.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}else{const{data:o}=await g.patch("/news/"+e._id,l);d[e.idx]=o.result,u.notify({position:"top",message:"\u7DE8\u8F2F\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${c.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}e.dialog=!1}catch{u.notify({position:"top",message:"\u64CD\u4F5C\u5931\u6557",color:"negative",avatar:`https://source.boringavatars.com/beam/256/${c.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}e.loading=!1};return e.date=V(`${m.getFullYear()}-0${m.getMonth()+1}-${m.getDate()}`),(async()=>{try{const{data:l}=await g.get("/news/all");d.push(...l.result)}catch(l){console.log(l)}})(),(l,o)=>(I(),B("div",j,[i("div",E,[i("div",J,[i("div",L,[t(C,{selected:b.value,"onUpdate:selected":o[0]||(o[0]=a=>b.value=a),title:"\u516C\u544A\u6E05\u55AE",rows:d,columns:U,"row-key":"name",class:"q-mt-lg"},{"body-cell-date":s(a=>[t(r,{props:a},{default:s(()=>[i("div",null,p(new Date(a.row.date).toLocaleDateString()),1)]),_:2},1032,["props"])]),"body-cell-title":s(a=>[t(r,{props:a,class:"text-center"},{default:s(()=>[i("p",X,p(a.row.title),1)]),_:2},1032,["props"])]),"body-cell-images":s(a=>[t(r,{props:a},{default:s(()=>[i("div",G,[i("img",{props:a,src:a.row.images[0]},null,8,H)])]),_:2},1032,["props"])]),"body-cell-description":s(a=>[t(r,{props:a,class:"text-center"},{default:s(()=>[i("p",K,p(a.row.description),1)]),_:2},1032,["props"])]),"body-cell-sell":s(a=>[t(r,{props:a},{default:s(()=>[i("div",R,[t(v,{modelValue:a.row.sell,"onUpdate:modelValue":w=>a.row.sell=w,props:a,label:l.sell,color:"primary"},null,8,["modelValue","onUpdate:modelValue","props","label"])])]),_:2},1032,["props"])]),"body-cell-others":s(a=>[t(r,{props:a},{default:s(()=>[i("div",W,[t(n,{square:"",color:"secondary",icon:"edit",props:a,onClick:w=>y(d.findIndex($=>$._id===a.row._id))},null,8,["props","onClick"])])]),_:2},1032,["props"])]),_:1},8,["selected","rows"]),t(n,{round:"",color:"primary",icon:"add",class:"addBtn q-mt-md",size:"lg",onClick:o[1]||(o[1]=a=>y(-1))})]),t(Y,{modelValue:e.dialog,"onUpdate:modelValue":o[8]||(o[8]=a=>e.dialog=a),persistent:""},{default:s(()=>[t(N,{class:"q-px-md"},{default:s(()=>[t(z,{class:"row items-center q-pb-md"},{default:s(()=>[i("div",Z,p(e._id.length>0?"\u7DE8\u8F2F\u516C\u544A":"\u65B0\u589E\u516C\u544A"),1),t(F),h(t(n,{icon:"close",flat:"",round:"",dense:""},null,512),[[x]])]),_:1}),t(A,{class:"q-gutter-md",style:{width:"500px"},onSubmit:D},{default:s(()=>[t(_,{modelValue:e.date,"onUpdate:modelValue":o[3]||(o[3]=a=>e.date=a),outlined:"",label:"\u8ACB\u9078\u64C7\u516C\u544A\u65E5\u671F"},{append:s(()=>[t(q,{name:"event",class:"cursor-pointer",color:"primary"},{default:s(()=>[t(P,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:s(()=>[t(T,{modelValue:e.date,"onUpdate:modelValue":o[2]||(o[2]=a=>e.date=a),"today-btn":""},{default:s(()=>[i("div",ee,[h(t(n,{label:"\u78BA\u8A8D",color:"primary",flat:""},null,512),[[x]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(_,{modelValue:e.title,"onUpdate:modelValue":o[4]||(o[4]=a=>e.title=a),type:"text",outlined:"",label:"\u8ACB\u8F38\u5165\u516C\u544A\u6A19\u984C *","lazy-rules":"",rules:[f.required]},null,8,["modelValue","rules"]),t(M,{modelValue:e.images,"onUpdate:modelValue":o[5]||(o[5]=a=>e.images=a),label:"\u8ACB\u9078\u64C7\u8981\u4E0A\u50B3\u7684\u5716\u7247",outlined:"",counter:"","max-files":"10",multiple:"",style:{"max-width":"300px"},rules:[f.required]},{prepend:s(()=>[t(q,{name:"add"})]),_:1},8,["modelValue","rules"]),t(_,{modelValue:e.description,"onUpdate:modelValue":o[6]||(o[6]=a=>e.description=a),outlined:"",type:"text",label:"\u8ACB\u8F38\u5165\u516C\u544A\u5167\u5BB9 *","lazy-rules":"",rules:[f.required]},null,8,["modelValue","rules"]),t(v,{modelValue:e.sell,"onUpdate:modelValue":o[7]||(o[7]=a=>e.sell=a),label:"\u662F\u5426\u4E0A\u67B6"},null,8,["modelValue"]),i("div",null,[t(O,{align:"center"},{default:s(()=>[t(n,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:e.loading,size:"md"},null,8,["loading"])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]))}};export{we as default};

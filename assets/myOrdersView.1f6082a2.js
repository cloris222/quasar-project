import{Q as m,a as r}from"./QTable.4c5099a0.js";import{J as p,M as u,b6 as _,O as f,ak as h,U as o,d as s,Q as a,am as l}from"./index.7da11fd8.js";import"./option-sizes.2aead3e2.js";import"./QSelect.1f6b5c9c.js";import"./use-key-composition.d778a8fa.js";import"./QChip.db1c0549.js";import"./QDialog.d373afdc.js";import"./use-prevent-scroll.4c8c5442.js";import"./format.3e32b8d9.js";import"./use-checkbox.e301e87f.js";const b={id:"myOrdersView"},w={class:"container q-mx-auto"},g=o("div",{class:"row q-mx-auto"},[o("div",{class:"col-12 bigTitle"},[o("h4",null,"\u6211\u7684\u9810\u7D04")])],-1),v={class:"row q-mx-auto"},y={class:"col-12"},q={class:"orders_id"},C={__name:"myOrdersView",setup(x){const d=p(),c=[{name:"orders_id",required:!0,label:"\u9810\u7D04\u7DE8\u865F",align:"left",field:t=>t.name,sortable:!0},{name:"date",required:!0,label:"\u9810\u7D04\u65E5\u671F",align:"center",field:t=>t.name,sortable:!0},{name:"time",align:"center",label:"\u9810\u7D04\u6642\u6BB5",field:t=>t.name},{name:"hours",align:"center",label:"\u9810\u7D04\u6642\u6578",field:t=>t.name},{name:"participant",align:"center",label:"\u9810\u7D04\u4EBA\u6578",field:t=>t.name},{name:"others",align:"center",label:"\u5099\u8A3B",field:t=>t.name}],n=u([]);return(async()=>{var t,i;try{const{data:e}=await _.get("/orders");console.log(e),n.push(...e.result)}catch(e){d.notify({position:"top",message:((i=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:i.message)||"\u53D6\u5F97\u9810\u7D04\u5931\u6557",color:"negative"})}})(),(t,i)=>(f(),h("div",b,[o("div",w,[g,o("div",v,[o("div",y,[s(m,{rows:n,columns:c,"row-key":"name",class:"q-mt-lg"},{"body-cell-orders_id":a(e=>[s(r,{props:e},{default:a(()=>[o("div",q,l(e.row._id),1)]),_:2},1032,["props"])]),"body-cell-date":a(e=>[s(r,{props:e},{default:a(()=>[o("div",null,l(new Date(e.row.orderDate).toLocaleDateString()),1)]),_:2},1032,["props"])]),"body-cell-time":a(e=>[s(r,{props:e},{default:a(()=>[o("div",null,l(e.row.time),1)]),_:2},1032,["props"])]),"body-cell-hours":a(e=>[s(r,{props:e},{default:a(()=>[o("div",null,l(e.row.hours),1)]),_:2},1032,["props"])]),"body-cell-participant":a(e=>[s(r,{props:e},{default:a(()=>[o("div",null,l(e.row.participant)+"\u4F4D ",1)]),_:2},1032,["props"])]),"body-cell-others":a(e=>[s(r,{props:e},{default:a(()=>[o("div",null,l(e.row.others),1)]),_:2},1032,["props"])]),_:1},8,["rows"])])])])]))}};export{C as default};
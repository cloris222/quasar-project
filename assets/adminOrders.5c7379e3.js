import{Q as m,a as s}from"./QTable.604acff5.js";import{J as p,M as u,b6 as _,O as f,ak as h,U as r,d as t,Q as a,am as l}from"./index.cb468f67.js";import"./option-sizes.6abd2649.js";import"./QSelect.887b56b8.js";import"./use-key-composition.74319b83.js";import"./QChip.dbaf8b22.js";import"./QDialog.aae5d981.js";import"./use-prevent-scroll.8e0dc33e.js";import"./format.3e32b8d9.js";import"./use-checkbox.ad1674e9.js";const b={id:"adminOrdersView"},w={class:"container q-mx-auto"},g=r("div",{class:"row q-mx-auto"},[r("div",{class:"col-12"},[r("h4",null,"\u6240\u6709\u9810\u7D04")])],-1),v={class:"row q-mx-auto"},y={class:"col-12"},q={class:"orders_id"},x={class:"orders_id"},Q={class:"orders_phone"},J={__name:"adminOrders",setup(k){const n=p(),c=[{name:"orders_id",required:!0,label:"\u9810\u7D04\u7DE8\u865F",align:"left",field:o=>o.name,sortable:!0},{name:"orders_u_id",required:!0,label:"\u9810\u7D04\u4EBA",align:"left",field:o=>o.name,sortable:!0},{name:"orders_phone",required:!0,label:"\u9810\u7D04\u4EBA\u96FB\u8A71",align:"left",field:o=>o.name,sortable:!0},{name:"date",required:!0,label:"\u9810\u7D04\u65E5\u671F",align:"center",field:o=>o.name,sortable:!0},{name:"time",align:"center",label:"\u9810\u7D04\u6642\u6BB5",field:o=>o.name},{name:"hours",align:"center",label:"\u9810\u7D04\u6642\u6578",field:o=>o.name},{name:"participant",align:"center",label:"\u9810\u7D04\u4EBA\u6578",field:o=>o.name},{name:"others",align:"center",label:"\u5099\u8A3B",field:o=>o.name}],d=u([]);return(async()=>{var o,i;try{const{data:e}=await _.get("/orders/all");console.log(e),d.push(...e.result)}catch(e){n.notify({position:"top",message:((i=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:i.message)||"\u53D6\u5F97\u9810\u7D04\u5931\u6557",color:"negative"})}})(),(o,i)=>(f(),h("div",b,[r("div",w,[g,r("div",v,[r("div",y,[t(m,{rows:d,columns:c,"row-key":"name",class:"q-mt-lg"},{"body-cell-orders_id":a(e=>[t(s,{props:e},{default:a(()=>[r("div",q,l(e.row._id),1)]),_:2},1032,["props"])]),"body-cell-orders_u_id":a(e=>[t(s,{props:e},{default:a(()=>[r("div",x,l(e.row.name),1)]),_:2},1032,["props"])]),"body-cell-orders_phone":a(e=>[t(s,{props:e},{default:a(()=>[r("div",Q,l(e.row.phone),1)]),_:2},1032,["props"])]),"body-cell-date":a(e=>[t(s,{props:e},{default:a(()=>[r("div",null,l(new Date(e.row.orderDate).toLocaleDateString()),1)]),_:2},1032,["props"])]),"body-cell-time":a(e=>[t(s,{props:e},{default:a(()=>[r("div",null,l(e.row.time),1)]),_:2},1032,["props"])]),"body-cell-hours":a(e=>[t(s,{props:e},{default:a(()=>[r("div",null,l(e.row.hours),1)]),_:2},1032,["props"])]),"body-cell-participant":a(e=>[t(s,{props:e},{default:a(()=>[r("div",null,l(e.row.participant)+"\u4F4D ",1)]),_:2},1032,["props"])]),"body-cell-others":a(e=>[t(s,{props:e},{default:a(()=>[r("div",null,l(e.row.others),1)]),_:2},1032,["props"])]),_:1},8,["rows"])])])])]))}};export{J as default};
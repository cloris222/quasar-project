import{Q as p,a as s}from"./QTable.b78e974b.js";import{J as m,M as _,b6 as u,O as f,ak as b,U as r,d as t,Q as a,am as l}from"./index.31337442.js";import"./option-sizes.708c499b.js";import"./QSelect.449dc2fb.js";import"./use-key-composition.d648d796.js";import"./QChip.c623dcd2.js";import"./QDialog.2047b9e7.js";import"./use-prevent-scroll.8519556a.js";import"./format.3e32b8d9.js";import"./use-checkbox.b34b0a4a.js";const h={id:"adminOrdersView"},g={class:"container q-mx-auto"},w=r("div",{class:"row"},[r("div",{class:"col-12 bigTitle"}," \u9810\u7D04\u7BA1\u7406 ")],-1),v={class:"row q-mx-auto"},y={class:"col-12"},q={class:"orders_id"},x={class:"orders_id"},Q={class:"orders_phone"},J={__name:"adminOrders",setup(k){const n=m(),c=[{name:"orders_id",required:!0,label:"\u9810\u7D04\u7DE8\u865F",align:"left",field:o=>o.name,sortable:!0},{name:"orders_u_id",required:!0,label:"\u9810\u7D04\u4EBA",align:"left",field:o=>o.name,sortable:!0},{name:"orders_phone",required:!0,label:"\u9810\u7D04\u4EBA\u96FB\u8A71",align:"left",field:o=>o.name,sortable:!0},{name:"date",required:!0,label:"\u9810\u7D04\u65E5\u671F",align:"center",field:o=>o.name,sortable:!0},{name:"time",align:"center",label:"\u9810\u7D04\u6642\u6BB5",field:o=>o.name},{name:"hours",align:"center",label:"\u9810\u7D04\u6642\u6578",field:o=>o.name},{name:"participant",align:"center",label:"\u9810\u7D04\u4EBA\u6578",field:o=>o.name},{name:"others",align:"center",label:"\u5099\u8A3B",field:o=>o.name}],d=_([]);return(async()=>{var o,i;try{const{data:e}=await u.get("/orders/all");console.log(e),d.push(...e.result)}catch(e){n.notify({position:"top",message:((i=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:i.message)||"\u53D6\u5F97\u9810\u7D04\u5931\u6557",color:"negative"})}})(),(o,i)=>(f(),b("div",h,[r("div",g,[w,r("div",v,[r("div",y,[t(p,{rows:d,columns:c,"row-key":"name",class:"q-mt-lg"},{"body-cell-orders_id":a(e=>[t(s,{props:e},{default:a(()=>[r("div",q,l(e.row._id),1)]),_:2},1032,["props"])]),"body-cell-orders_u_id":a(e=>[t(s,{props:e},{default:a(()=>[r("div",x,l(e.row.name),1)]),_:2},1032,["props"])]),"body-cell-orders_phone":a(e=>[t(s,{props:e},{default:a(()=>[r("div",Q,l(e.row.phone),1)]),_:2},1032,["props"])]),"body-cell-date":a(e=>[t(s,{props:e},{default:a(()=>[r("div",null,l(new Date(e.row.orderDate).toLocaleDateString()),1)]),_:2},1032,["props"])]),"body-cell-time":a(e=>[t(s,{props:e},{default:a(()=>[r("div",null,l(e.row.time),1)]),_:2},1032,["props"])]),"body-cell-hours":a(e=>[t(s,{props:e},{default:a(()=>[r("div",null,l(e.row.hours),1)]),_:2},1032,["props"])]),"body-cell-participant":a(e=>[t(s,{props:e},{default:a(()=>[r("div",null,l(e.row.participant)+"\u4F4D ",1)]),_:2},1032,["props"])]),"body-cell-others":a(e=>[t(s,{props:e},{default:a(()=>[r("div",null,l(e.row.others),1)]),_:2},1032,["props"])]),_:1},8,["rows"])])])])]))}};export{J as default};
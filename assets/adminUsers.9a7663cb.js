import{Q as m,a as l}from"./QTable.0d2ed32e.js";import{J as u,M as p,b6 as _,O as f,ak as h,U as s,d as t,Q as o,am as i}from"./index.b57d891b.js";import"./option-sizes.53f54e63.js";import"./QSelect.0e730374.js";import"./use-key-composition.4b113e61.js";import"./QChip.45bd5366.js";import"./QDialog.23d827a0.js";import"./use-prevent-scroll.085b4e7b.js";import"./format.3e32b8d9.js";import"./use-checkbox.0f97cb31.js";const b={id:"adminUsersView"},g={class:"container q-mx-auto"},v=s("div",{class:"row q-mx-auto"},[s("div",{class:"col-12 bigTitle"},[s("h4",null,"\u6703\u54E1\u7BA1\u7406")])],-1),w={class:"row q-mx-auto"},y={class:"col-12"},q={class:"users_id"},x={class:"users_accout"},Q={class:"users_name"},L={__name:"adminUsers",setup(k){const c=u(),d=[{name:"id",required:!0,label:"\u6703\u54E1\u7DE8\u865F",align:"left",field:a=>a.name},{name:"account",required:!0,label:"\u6703\u54E1\u5E33\u865F",align:"left",field:a=>a.name},{name:"name",required:!0,label:"\u6703\u54E1\u59D3\u540D",align:"center",field:a=>a.name,sortable:!0},{name:"email",align:"center",label:"\u6703\u54E1\u4FE1\u7BB1",field:a=>a.name},{name:"phone",align:"center",label:"\u6703\u54E1\u96FB\u8A71",field:a=>a.name}],r=p([]);return(async()=>{var a,n;try{const{data:e}=await _.get("/users/all");console.log(e),r.push(...e.result)}catch(e){c.notify({position:"top",message:((n=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:n.message)||"\u53D6\u5F97\u6703\u54E1\u8CC7\u6599\u5931\u6557",color:"negative"})}})(),(a,n)=>(f(),h("div",b,[s("div",g,[v,s("div",w,[s("div",y,[t(m,{rows:r,columns:d,"row-key":"name",class:"q-mt-lg"},{"body-cell-id":o(e=>[t(l,{props:e},{default:o(()=>[s("div",q,i(e.row._id),1)]),_:2},1032,["props"])]),"body-cell-account":o(e=>[t(l,{props:e},{default:o(()=>[s("div",x,i(e.row.account),1)]),_:2},1032,["props"])]),"body-cell-name":o(e=>[t(l,{props:e},{default:o(()=>[s("div",Q,i(e.row.name),1)]),_:2},1032,["props"])]),"body-cell-email":o(e=>[t(l,{props:e},{default:o(()=>[s("div",null,i(e.row.email),1)]),_:2},1032,["props"])]),"body-cell-phone":o(e=>[t(l,{props:e},{default:o(()=>[s("div",null,i(e.row.phone),1)]),_:2},1032,["props"])]),_:1},8,["rows"])])])])]))}};export{L as default};

import{Q as h,a as i}from"./QTable.fcb2f5bf.js";import{J as f,M as b,b6 as w,O as d,ak as p,U as a,d as l,Q as s,am as r,F as v,an as y}from"./index.bb9d4e92.js";import"./option-sizes.877540f7.js";import"./QSelect.d59e5525.js";import"./use-key-composition.2851cd70.js";import"./QChip.ab670c67.js";import"./QDialog.d56b237b.js";import"./use-prevent-scroll.8db089fc.js";import"./format.3e32b8d9.js";import"./use-checkbox.689179b6.js";const x={id:"adminShoppingsView"},q={class:"container q-mx-auto"},k=a("div",{class:"row q-mx-auto"},[a("div",{class:"col-12"},[a("h4",null,"\u6240\u6709\u8A02\u55AE")])],-1),Q={class:"row q-mx-auto"},S={class:"col-12"},B={class:"cart_shopping_id"},D={class:"cart_price"},V={class:"cart_detail"},U={__name:"adminShoppings",setup(F){const _=f(),g=[{name:"shopping_id",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"left",field:t=>t.name,sortable:!0},{name:"date",required:!0,label:"\u8A02\u55AE\u65E5\u671F",align:"left",field:t=>t.name,sortable:!0},{name:"shoppingsuser",align:"center",label:"\u8A02\u8CFC\u4EBA",field:t=>t.name},{name:"price",align:"center",label:"\u8A02\u55AE\u91D1\u984D",field:t=>t.name},{name:"detail",align:"center",label:"\u5546\u54C1\u7D30\u9805",field:t=>t.name}],m=b([]);return(async()=>{var t,n;try{const{data:e}=await w.get("/shoppings/all");console.log(e),m.push(...e.result.map(o=>(o.totalPrice=o.products.reduce((c,u)=>c+u.price*u.quantity,0),o)))}catch(e){_.notify({position:"top",message:((n=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:n.message)||"\u53D6\u5F97\u8A02\u55AE\u5931\u6557",color:"negative"})}})(),(t,n)=>(d(),p("div",x,[a("div",q,[k,a("div",Q,[a("div",S,[l(h,{rows:m,columns:g,"row-key":"name",class:"q-mt-lg"},{"body-cell-shopping_id":s(e=>[l(i,{props:e},{default:s(()=>[a("div",B,r(e.row._id),1)]),_:2},1032,["props"])]),"body-cell-date":s(e=>[l(i,{props:e,class:"text-center"},{default:s(()=>[a("div",null,r(new Date(e.row.date).toLocaleDateString()),1)]),_:2},1032,["props"])]),"body-cell-shoppingsuser":s(e=>[l(i,{props:e,class:"text-center"},{default:s(()=>[a("div",null,r(e.row.name),1)]),_:2},1032,["props"])]),"body-cell-price":s(e=>[l(i,{props:e,class:"text-center"},{default:s(()=>[a("div",D,r(e.row.totalPrice),1)]),_:2},1032,["props"])]),"body-cell-detail":s(e=>[l(i,{props:e,class:"text-center"},{default:s(()=>[a("div",V,[a("ul",null,[(d(!0),p(v,null,y(e.row.products,(o,c)=>(d(),p("li",{key:c},r(o.p_id.name+" X "+o.quantity),1))),128))])])]),_:2},1032,["props"])]),_:1},8,["rows"])])])])]))}};export{U as default};

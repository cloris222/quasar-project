import{Q as h,a as l}from"./QTable.4c5099a0.js";import{J as f,M as w,b6 as b,O as d,ak as p,U as a,d as i,Q as s,am as r,F as y,an as v}from"./index.7da11fd8.js";import"./option-sizes.2aead3e2.js";import"./QSelect.1f6b5c9c.js";import"./use-key-composition.d778a8fa.js";import"./QChip.db1c0549.js";import"./QDialog.d373afdc.js";import"./use-prevent-scroll.4c8c5442.js";import"./format.3e32b8d9.js";import"./use-checkbox.e301e87f.js";const q={id:"ShoppingsView"},x={class:"container q-mx-auto"},k=a("div",{class:"row q-mx-auto"},[a("div",{class:"col-12 bigTitle"},[a("h4",null,"\u6211\u7684\u8A02\u55AE")])],-1),Q={class:"row q-mx-auto"},S={class:"col-12"},V={class:"cart_shopping_id"},B={class:"cart_price"},D={class:"cart_detail"},U={__name:"myShoppingsView",setup(T){const u=f(),g=[{name:"shopping_id",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"left",field:t=>t.name,sortable:!0},{name:"date",required:!0,label:"\u8A02\u55AE\u65E5\u671F",align:"left",field:t=>t.name,sortable:!0},{name:"price",align:"center",label:"\u8A02\u55AE\u91D1\u984D",field:t=>t.name},{name:"detail",align:"center",label:"\u5546\u54C1\u7D30\u9805",field:t=>t.name}],m=w([]);return(async()=>{var t,n;try{const{data:e}=await b.get("/shoppings");console.log(e),m.push(...e.result.map(o=>(o.totalPrice=o.products.reduce((c,_)=>c+_.price*_.quantity,0),o)))}catch(e){u.notify({position:"top",message:((n=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:n.message)||"\u53D6\u5F97\u8A02\u55AE\u5931\u6557",color:"negative"})}})(),(t,n)=>(d(),p("div",q,[a("div",x,[k,a("div",Q,[a("div",S,[i(h,{rows:m,columns:g,"row-key":"name",class:"q-mt-lg"},{"body-cell-shopping_id":s(e=>[i(l,{props:e},{default:s(()=>[a("div",V,r(e.row._id),1)]),_:2},1032,["props"])]),"body-cell-date":s(e=>[i(l,{props:e,class:"text-center"},{default:s(()=>[a("div",null,r(new Date(e.row.date).toLocaleDateString()),1)]),_:2},1032,["props"])]),"body-cell-price":s(e=>[i(l,{props:e,class:"text-center"},{default:s(()=>[a("div",B,r(e.row.totalPrice),1)]),_:2},1032,["props"])]),"body-cell-detail":s(e=>[i(l,{props:e,class:"text-center"},{default:s(()=>[a("div",D,[a("ul",null,[(d(!0),p(y,null,v(e.row.products,(o,c)=>(d(),p("li",{key:c},r(o.p_id.name+" X "+o.quantity),1))),128))])])]),_:2},1032,["props"])]),_:1},8,["rows"])])])])]))}};export{U as default};

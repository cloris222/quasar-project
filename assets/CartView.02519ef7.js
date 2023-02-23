import{Q as C,a as l}from"./QTable.b78e974b.js";import{N as I,M as Q,J as B,L as V,c as m,b6 as N,O as $,ak as z,U as s,d as i,Q as a,am as n,ao as p,X as c,al as T}from"./index.31337442.js";import"./option-sizes.708c499b.js";import"./QSelect.449dc2fb.js";import"./use-key-composition.d648d796.js";import"./QChip.c623dcd2.js";import"./QDialog.2047b9e7.js";import"./use-prevent-scroll.8519556a.js";import"./format.3e32b8d9.js";import"./use-checkbox.b34b0a4a.js";const M={id:"CartView"},O={class:"container q-mx-auto"},S=s("div",{class:"row q-mx-auto"},[s("div",{class:"col-12"},[s("h4",null,"\u8CFC\u7269\u8ECA")])],-1),U={class:"row q-mx-auto"},j={class:"col-12"},A={class:"cart_shopping_id"},D={class:"cart_img"},E=["props","src"],J={class:"cart_price"},L={class:"cart_quantity"},P={class:"cart_subtotal"},R={class:"productsOthers"},X={class:"row q-mx-auto q-mt-lg"},F={class:"col-12 text-right",style:{"font-size":"2em"}},G={class:"row q-mx-auto q-mt-lg justify-between"},H={class:"col-6"},K={class:"col-6 text-right"},ne={__name:"CartView",setup(W){const h=[{name:"shopping_id",required:!0,label:"\u5546\u54C1\u7DE8\u865F",align:"left",field:t=>t.name,sortable:!0},{name:"images",required:!0,label:"\u5546\u54C1\u5716\u7247",align:"center",field:t=>t.name,sortable:!0},{name:"name",align:"center",label:"\u54C1\u540D",field:t=>t.images},{name:"price",align:"center",label:"\u50F9\u9322",field:t=>t.category,sortable:!0,sort:(t,o)=>parseInt(t,10)-parseInt(o,10)},{name:"quantity",align:"center",label:"\u6578\u91CF",field:t=>t.gamer,sortable:!0,sort:(t,o)=>parseInt(t,10)-parseInt(o,10)},{name:"subtotal",align:"center",label:"\u5C0F\u8A08",field:t=>t.age,sortable:!0,sort:(t,o)=>parseInt(t,10)-parseInt(o,10)},{name:"others",align:"center",label:"\u64CD\u4F5C",field:t=>t.others}],g=I(),{editCart:w,checkout:y}=g,r=Q([]),b=B(),f=V(),v=m(()=>r.reduce((t,o)=>t+o.price*o.quantity,0)),q=m(()=>r.length>0&&!r.some(t=>!t.p_id.sell)),k=async()=>{await y(),f.push("/users/shoppings")},_=async(t,o,e,d)=>{const u=r.findIndex(x=>x._id===t);await w({_id:r[u].p_id._id,quantity:o,price:e,message:d}),r[u].quantity=o,r[u].quantity<=0&&r.splice(u,1)};return(async()=>{var t,o;try{const{data:e}=await N.get("/users/cart");r.push(...e.result)}catch(e){b.notify({position:"top",message:((o=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:o.message)||"\u53D6\u5F97\u8CFC\u7269\u8ECA\u5931\u6557",color:"negative"})}})(),(t,o)=>($(),z("div",M,[s("div",O,[S,s("div",U,[s("div",j,[i(C,{rows:r,columns:h,"row-key":"name",class:"q-mt-lg"},{"body-cell-shopping_id":a(e=>[i(l,{props:e},{default:a(()=>[s("div",A,n(e.row.p_id._id),1)]),_:2},1032,["props"])]),"body-cell-images":a(e=>[i(l,{props:e},{default:a(()=>[s("div",D,[s("img",{props:e,src:e.row.p_id.images[0]},null,8,E)])]),_:2},1032,["props"])]),"body-cell-name":a(e=>[i(l,{props:e,class:"text-center"},{default:a(()=>[s("div",null,n(e.row.p_id.name),1)]),_:2},1032,["props"])]),"body-cell-price":a(e=>[i(l,{props:e,class:"text-center"},{default:a(()=>[s("div",J,n(e.row.price),1)]),_:2},1032,["props"])]),"body-cell-quantity":a(e=>[i(l,{props:e},{default:a(()=>[s("div",L,[i(c,{round:"",size:"sm",icon:"remove",color:"secondary",onClick:d=>_(e.row._id,e.row.quantity-1,e.row.price,"\u4FEE\u6539\u6210\u529F")},null,8,["onClick"]),T(" "+n(e.row.quantity)+" ",1),i(c,{round:"",size:"sm",icon:"add",color:"secondary",onClick:d=>_(e.row._id,e.row.quantity+1,e.row.price,"\u4FEE\u6539\u6210\u529F")},null,8,["onClick"])])]),_:2},1032,["props"])]),"body-cell-subtotal":a(e=>[i(l,{props:e},{default:a(()=>[s("div",P,n(e.row.quantity*e.row.price),1)]),_:2},1032,["props"])]),"body-cell-others":a(e=>[i(l,{props:e},{default:a(()=>[s("div",R,[i(c,{square:"",color:"negative",icon:"delete",props:e,onClick:d=>_(e.row._id,e.row.quantity*-1,e.row.price,"\u5DF2\u5C07\u5546\u54C1\u79FB\u9664")},null,8,["props","onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows"])])]),s("div",X,[s("div",F," \u7E3D\u91D1\u984D:"+n(p(v)),1)]),s("div",G,[s("div",H,[i(c,{square:"",color:"primary",outline:"",icon:"mdi-arrow-left",to:"/shoppingMall",label:"\u518D\u53BB\u901B\u901B"})]),s("div",K,[i(c,{square:"",color:"primary",icon:"mdi-arrow-right",label:"\u53BB\u7D50\u5E33",disabled:!p(q),onClick:k},null,8,["disabled"])])])])]))}};export{ne as default};

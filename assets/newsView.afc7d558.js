import{c as u,O as c,ak as r,U as e,am as i,ao as l,J as p,M as m,Z as f,F as g,an as h,d as v,b2 as w,b3 as y}from"./index.26672a92.js";const S={id:"NewsCard"},$={class:"container"},k={class:"row body"},B={class:"date_area"},D={class:"img_area"},N=["src"],V={class:"info_area"},b={class:"info_title"},x={class:"info_description"},C={__name:"NewsCard",props:{_id:{type:String,default:""},date:{type:String,default:""},title:{type:String,default:""},images:{type:Array,default(){return[]}},description:{type:String,default:""},sell:{type:Boolean,default:!1}},setup(a){const d=a,s=u(()=>new Date(d.date).toLocaleDateString().split("/"));return(n,o)=>(c(),r("div",S,[e("div",$,[e("div",k,[e("div",B,i(l(s)[0])+" "+i(l(s)[1])+" "+i(l(s)[2]),1),e("div",D,[e("img",{src:a.images[0]},null,8,N)]),e("div",V,[e("div",b,i(a.title),1),e("div",x,i(a.description),1)])])])]))}},F={id:"newsView"},L={class:"container"},P={class:"row"},z={__name:"newsView",setup(a){const d=p(),s=m([]);return(async()=>{var n,o;try{const{data:t}=await f.get("/news");s.push(...t.result)}catch(t){d.notify({position:"top",message:((o=(n=t==null?void 0:t.response)==null?void 0:n.data)==null?void 0:o.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}})(),(n,o)=>(c(),r("div",F,[e("div",L,[e("div",P,[(c(!0),r(g,null,h(s,(t,_)=>(c(),r("div",{key:_,in:"",news:""},[v(C,w(y(t)),null,16)]))),128))])])]))}};export{z as default};

import{c as h,O as d,ak as l,U as e,am as i,ao as a,J as v,M as g,Z as f,d as n,Q as p,F as y,an as w,a8 as b,b2 as B,b3 as Q}from"./index.a23c6221.js";import{Q as S,a as u}from"./QBreadcrumbs.8bb0ba96.js";const $={id:"NewsCard"},x={class:"container"},k={class:"row body"},D={class:"date_area"},N={class:"date_month"},V={class:"date_day"},C={class:"date_year"},I={class:"img_area"},q=["src"],z={class:"info_area"},E={class:"info_title"},F={class:"info_description"},L={__name:"NewsCard",props:{_id:{type:String,default:""},date:{type:String,default:""},title:{type:String,default:""},images:{type:Array,default(){return[]}},description:{type:String,default:""},sell:{type:Boolean,default:!1}},setup(o){const _=o,s=h(()=>new Date(_.date).toLocaleDateString().split("/"));return(c,r)=>(d(),l("div",$,[e("div",x,[e("div",k,[e("div",D,[e("div",N,i(parseInt(a(s)[1])>9?a(s)[1]:"0"+a(s)[1])+". ",1),e("div",V,i(parseInt(a(s)[2])>9?a(s)[2]:"0"+a(s)[2])+". ",1),e("div",C,i(a(s)[0]),1)]),e("div",I,[e("img",{src:o.images[0]},null,8,q)]),e("div",z,[e("div",E,i(o.title),1),e("div",F,i(o.description),1)])])])]))}},P={id:"newsView"},A={class:"container"},J={class:"row section"},M={class:"col-12 bg-white"},U={__name:"newsView",setup(o){const _=v(),s=g([]);return(async()=>{var c,r;try{const{data:t}=await f.get("/news");s.push(...t.result)}catch(t){_.notify({position:"top",message:((r=(c=t==null?void 0:t.response)==null?void 0:c.data)==null?void 0:r.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}})(),(c,r)=>(d(),l("div",P,[e("div",A,[e("div",J,[e("div",M,[n(S,{class:"text-primary","active-color":"grey"},{separator:p(()=>[n(b,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:p(()=>[n(u,{label:"\u9996\u9801",icon:"home",to:"/"}),n(u,{label:"\u6700\u65B0\u516C\u544A",icon:"mdi-newspaper-variant-outline"})]),_:1})]),(d(!0),l(y,null,w(s,(t,m)=>(d(),l("div",{key:m,in:"",news:"",class:"col-12 q-my-lg"},[n(L,B(Q(t)),null,16)]))),128))])])]))}};export{U as default};

import{c as h,O as c,ak as d,U as e,am as i,ao as t,J as g,M as f,Z as y,d as n,Q as p,F as w,an as b,a8 as B,b2 as Q,b3 as S}from"./index.1ae148d4.js";import{Q as $,a as u}from"./QBreadcrumbs.05fb8a47.js";const x={id:"NewsCard"},k={class:"container"},D={class:"row body"},I={class:"date_area"},N={class:"date_month"},V={class:"date_day"},q={class:"date_year"},C={class:"img_area"},z=["src"],E={class:"info_area"},F={class:"info_title"},L={class:"info_description"},P={__name:"NewsCard",props:{_id:{type:String,default:""},date:{type:String,default:""},title:{type:String,default:""},images:{type:Array,default(){return[]}},description:{type:String,default:""},sell:{type:Boolean,default:!1}},setup(o){const l=o,s=h(()=>new Date(l.date).toLocaleDateString().split("/"));return(_,r)=>(c(),d("div",x,[e("div",k,[e("div",D,[e("div",I,[e("div",N,i(parseInt(t(s)[1])>9?t(s)[1]:"0"+t(s)[1])+". ",1),e("div",V,i(parseInt(t(s)[2])>9?t(s)[2]:"0"+t(s)[2])+". ",1),e("div",q,i(t(s)[0]),1)]),e("div",C,[e("img",{src:o.images[0]},null,8,z)]),e("div",E,[e("div",F,i(o.title),1),e("div",L,i(o.description),1)])])])]))}},A={id:"newsView"},J={class:"container"},M={class:"row section"},O={class:"col-12 bg-white"},Z={__name:"newsView",setup(o){const l=g(),s=f([]),_=h(()=>[...s].reverse());return console.log(_),(async()=>{var r,m;try{const{data:a}=await y.get("/news");s.push(...a.result)}catch(a){l.notify({position:"top",message:((m=(r=a==null?void 0:a.response)==null?void 0:r.data)==null?void 0:m.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}})(),(r,m)=>(c(),d("div",A,[e("div",J,[e("div",M,[e("div",O,[n($,{class:"text-primary q-mb-lg","active-color":"grey"},{separator:p(()=>[n(B,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:p(()=>[n(u,{label:"\u9996\u9801",icon:"home",to:"/"}),n(u,{label:"\u6700\u65B0\u516C\u544A",icon:"mdi-newspaper-variant-outline"})]),_:1})]),(c(!0),d(w,null,b(t(_),(a,v)=>(c(),d("div",{key:v,class:"col-12 q-my-lg"},[n(P,Q(S(a)),null,16)]))),128))])])]))}};export{Z as default};

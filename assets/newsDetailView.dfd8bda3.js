import{b3 as p,M as u,L as h,O as v,N as g,c as f,_ as w,P as b,al as y,V as e,d as i,R as n,an as c,ap as o,ad as B}from"./index.d11d03a6.js";import{Q as D,a as r}from"./QBreadcrumbs.2fbfc483.js";const V={id:"newsDetailView"},Q={class:"container"},x={class:"row newsBody"},q={class:"col-12 bg-white"},I={class:"col-12 q-my-lg bg-primary"},N={class:"date_area"},R={class:"date_month"},S={class:"date_day"},k={class:"date_year"},E={class:"img_area"},L=["src"],$={class:"info_area"},z={class:"info_title"},C={class:"info_description"},j={__name:"newsDetailView",setup(M){const d=p(),l=u(),_=h(),m=v(),s=g({title:"",date:"",description:"",images:[]}),t=f(()=>new Date(s.date).toLocaleDateString().split("/"));return(async()=>{try{const{data:a}=await w.get("/news/"+d.params.id);s.title=a.result.title,s.date=a.result.date,s.description=a.result.description,s.images=a.result.images}catch(a){console.log(a),_.notify({position:"top",message:"\u8F09\u5165\u516C\u544A\u5931\u6557",color:"negative",avatar:`https://source.boringavatars.com/beam/256/${m.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`}),l.go(-1)}})(),(a,O)=>(b(),y("div",V,[e("div",Q,[e("div",x,[e("div",q,[i(D,{class:"text-primary q-mb-lg","active-color":"grey"},{separator:n(()=>[i(B,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:n(()=>[i(r,{label:"\u9996\u9801",icon:"home",to:"/"}),i(r,{label:"\u6700\u65B0\u516C\u544A",icon:"mdi-newspaper-variant-outline",to:"/newsView"}),i(r,{label:s.title,icon:"mdi-newspaper"},null,8,["label"])]),_:1})]),e("div",I,[e("div",N,[e("div",R,c(parseInt(o(t)[1])>9?o(t)[1]:"0"+o(t)[1])+". ",1),e("div",S,c(parseInt(o(t)[2])>9?o(t)[2]:"0"+o(t)[2])+". ",1),e("div",k,c(o(t)[0]),1)]),e("div",E,[e("img",{src:s.images[0]},null,8,L)]),e("div",$,[e("div",z,c(s.title),1),e("div",C,c(s.description),1)])])])])]))}};export{j as default};

import{b4 as _,L as l,J as u,N as p,M as m,c as h,Z as v,O as g,ak as f,U as s,am as i,ao as o}from"./index.cc7185c5.js";const w={id:"newsDetailView"},y={class:"container"},b={class:"row body bg-primary"},D={class:"date_area"},k={class:"date_month"},B={class:"date_day"},S={class:"date_year"},V={class:"img_area"},x=["src"],I={class:"info_area"},L={class:"info_title"},N={class:"info_description"},q={__name:"newsDetailView",setup(R){const c=_(),r=l(),n=u(),d=p(),t=m({title:"",date:"",description:"",images:[]}),e=h(()=>new Date(t.date).toLocaleDateString().split("/"));return(async()=>{try{const{data:a}=await v.get("/news/"+c.params.id);t.title=a.result.title,t.date=a.result.date,t.description=a.result.description,t.images=a.result.images}catch(a){console.log(a),n.notify({position:"top",message:"\u8F09\u5165\u516C\u544A\u5931\u6557",color:"negative",avatar:`https://source.boringavatars.com/beam/256/${d.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`}),r.go(-1)}})(),(a,U)=>(g(),f("div",w,[s("div",y,[s("div",b,[s("div",D,[s("div",k,i(parseInt(o(e)[1])>9?o(e)[1]:"0"+o(e)[1])+". ",1),s("div",B,i(parseInt(o(e)[2])>9?o(e)[2]:"0"+o(e)[2])+". ",1),s("div",S,i(o(e)[0]),1)]),s("div",V,[s("img",{src:t.images[0]},null,8,x)]),s("div",I,[s("div",L,i(t.title),1),s("div",N,i(t.description),1)])])])]))}};export{q as default};

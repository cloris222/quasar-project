import{b4 as k,L as C,J as S,N as B,r as L,M as D,Z as G,O as n,ak as u,U as l,d as e,Q as s,F as _,an as f,Y as v,a8 as N,b5 as b,V as r,P as U,al as g,am as d,aq as z,X as y,ar as F}from"./index.bb067db4.js";import{Q as I,a as p}from"./QBreadcrumbs.f68a1f1f.js";import{Q as $}from"./QChip.ab5a628b.js";import{Q as E}from"./QSpace.709df5bc.js";import{Q as P,a as R}from"./QForm.98ba3932.js";import{Q as T}from"./QDialog.30d070fe.js";import"./use-key-composition.53c06984.js";import"./use-prevent-scroll.90f02fc8.js";const J={id:"boardGameList_idView"},M={class:"container"},O={class:"row q-mt-lg q-my-lg"},X={class:"col-12"},Y={class:"gameInfo"},Z={class:"row img_area bg-primary"},j={class:"col-8 q-mx-auto q-pt-lg"},A={class:"slideshow"},H=["src"],K={class:"thumbnails"},W=["src","onClick"],x={class:"row info_area"},ee={class:"q-pt-lg"},ae={class:"info_name"},se={class:"info_rules"},le={class:"col-10"},te=l("div",{class:"text-h6"}," \u8CFC\u7269\u8ECA ",-1),ge={__name:"boardGameList_idView",setup(oe){const h=k(),Q=C(),q=S(),w=B(),m=L(0),V=a=>{m.value=a},t=D({name:"",images:[],category:[],gamer:0,age:0,rules:"",sell:!0,loading:!1});return(async()=>{try{console.log(h);const{data:a}=await G.get("/boardGameList/"+h.params.id);t.name=a.result.name,t.images=a.result.images,t.category=a.result.category,t.gamer=a.result.gamer,t.age=a.result.age,t.rules=a.result.rules,t.sell=a.result.sell,document.title="\u684C\u4E0B\u5427 | "+t.name}catch{q.notify({position:"top",message:"\u53D6\u5F97\u5167\u5BB9\u5931\u6557",color:"negative",avatar:`https://source.boringavatars.com/beam/256/${w.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`}),Q.go(-1)}})(),(a,c)=>(n(),u("div",J,[l("div",M,[l("div",O,[l("div",X,[e(I,{class:"text-primary","active-color":"grey"},{separator:s(()=>[e(N,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:s(()=>[e(p,{label:"\u9996\u9801",icon:"home",to:"/"}),e(p,{label:"\u5E97\u5167\u684C\u904A",icon:"mdi-bookshelf",to:"/boardGameList"}),e(p,{label:t.name,icon:"mdi-cards"},null,8,["label"])]),_:1})])]),l("div",Y,[l("div",Z,[l("div",j,[l("div",A,[(n(!0),u(_,null,f(t.images,(o,i)=>(n(),u("div",{key:i,class:b(["slide",{active:m.value===i}])},[l("img",{src:o},null,8,H)],2))),128))]),l("div",K,[(n(!0),u(_,null,f(t.images,(o,i)=>(n(),u("img",{key:i,src:o,class:b({active:m.value===i}),onClick:re=>V(i)},null,10,W))),128))])])]),l("div",x,[e(v,null,{default:s(()=>[e(r,null,{default:s(()=>[l("div",ee,[(n(!0),u(_,null,f(t.category,(o,i)=>(n(),U($,{key:i,color:"primary",class:"text-white"},{default:s(()=>[g(d(o),1)]),_:2},1024))),128))])]),_:1}),e(r,null,{default:s(()=>[e(r,null,{default:s(()=>[l("div",ae,d(t.name),1)]),_:1}),e(r,null,{default:s(()=>[l("div",se,d(t.rules),1)]),_:1})]),_:1})]),_:1}),l("div",le,[e(T,{modelValue:a.cartDialog,"onUpdate:modelValue":c[1]||(c[1]=o=>a.cartDialog=o),persistent:""},{default:s(()=>[e(v,{class:"q-px-md"},{default:s(()=>[e(r,{class:"row items-center q-pb-md"},{default:s(()=>[te,e(E),z(e(y,{icon:"close",flat:"",round:"",dense:""},null,512),[[F]])]),_:1}),e(P,{class:"q-gutter-md",style:{width:"500px"},onSubmit:a.onSubmit},{default:s(()=>[e(r,null,{default:s(()=>[g(" \u54C1\u540D:"+d(a.form.name),1)]),_:1}),e(r,null,{default:s(()=>[g(" \u50F9\u9322:"+d(a.form.price),1)]),_:1}),e(r,null,{default:s(()=>[e(R,{modelValue:a.form.quantity,"onUpdate:modelValue":c[0]||(c[0]=o=>a.form.quantity=o),outlined:"",type:"number",label:"\u8ACB\u9078\u64C7\u5546\u54C1\u6578\u91CF *","lazy-rules":"",rules:[a.rules.required,a.rules.number]},null,8,["modelValue","rules"])]),_:1}),e(r,null,{default:s(()=>[e(y,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:a.form.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])])])])])]))}};export{ge as default};

import{c as y,P as d,al as l,V as s,an as c,ap as a,L as w,N as b,_ as $,d as t,R as p,F as v,ao as B,Y as h,am as r,af as x,b1 as N,b2 as Q}from"./index.61b5a61b.js";import{Q as S,a as g}from"./QBreadcrumbs.8580e8f7.js";const V={id:"NewsCard"},q={class:"container"},C={class:"row body"},k={class:"date_area"},D={class:"date_month"},I={class:"date_day"},E={class:"date_year"},L={class:"img_area"},P=["src"],Y={class:"info_area"},z={class:"info_title"},A={class:"info_description"},F={__name:"NewsCard",props:{_id:{type:String,default:""},date:{type:String,default:""},title:{type:String,default:""},images:{type:Array,default(){return[]}},description:{type:String,default:""},sell:{type:Boolean,default:!1}},setup(i){const _=i,e=y(()=>new Date(_.date).toLocaleDateString().split("/"));return(m,n)=>(d(),l("div",V,[s("div",q,[s("div",C,[s("div",k,[s("div",D,c(parseInt(a(e)[1])>9?a(e)[1]:"0"+a(e)[1])+". ",1),s("div",I,c(parseInt(a(e)[2])>9?a(e)[2]:"0"+a(e)[2])+". ",1),s("div",E,c(a(e)[0]),1)]),s("div",L,[s("img",{src:i.images[0]},null,8,P)]),s("div",Y,[s("div",z,c(i.title),1),s("div",A,c(i.description),1)])])])]))}},R={id:"newsView"},T={class:"container"},j={class:"row section"},G={class:"col-12 bg-white"},H={id:"footer"},J={class:"container"},K=s("div",{class:"row"},[s("div",{class:"col-12"},[s("div",{class:"info_area"},[r(" \u5730\u5740 : \u65B0\u5317\u5E02\u6CF0\u5C71\u5340\u8CB4\u5B50\u91CC\u81F4\u9060\u65B0\u675155\u4E4B1\u865F "),s("br"),r(" \u96FB\u8A71 : 02-23941157 "),s("br"),r(" E-mail : admin@gmail.com "),s("br"),r(" \u71DF\u696D\u6642\u9593 : \u65E9\u4E0A10:00\u81F3\u665A\u4E0A23:00 \u6BCF\u9031\u4E09\u516C\u4F11 ")])])],-1),M={class:"row"},O={class:"col-12"},U={class:"btn_area"},W=s("div",{class:"col-12"},[s("div",{class:"copyright"}," Copyright \xA9 2023 Yung Chien Yang. All rights reserved. ")],-1),ss={__name:"newsView",setup(i){const _=w(),e=b([]),m=y(()=>[...e].reverse());return console.log(m),(async()=>{var n,u;try{const{data:o}=await $.get("/news");e.push(...o.result)}catch(o){_.notify({position:"top",message:((u=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:u.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}})(),(n,u)=>(d(),l(v,null,[s("div",R,[s("div",T,[s("div",j,[s("div",G,[t(S,{class:"text-primary q-mb-lg","active-color":"grey"},{separator:p(()=>[t(x,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:p(()=>[t(g,{label:"\u9996\u9801",icon:"home",to:"/"}),t(g,{label:"\u6700\u65B0\u516C\u544A",icon:"mdi-newspaper-variant-outline"})]),_:1})]),(d(!0),l(v,null,B(a(m),(o,f)=>(d(),l("div",{key:f,class:"col-12 q-my-lg"},[t(F,N(Q(o)),null,16)]))),128))])])]),s("div",H,[s("div",J,[K,s("div",M,[s("div",O,[s("div",U,[t(h,{icon:"mdi-facebook",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),t(h,{icon:"mdi-instagram",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),t(h,{icon:"mdi-twitter",outline:"",rounded:"",color:"secondary"})])]),W])])])],64))}};export{ss as default};

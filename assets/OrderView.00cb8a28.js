import{J as W,N as X,L as J,r as w,M as k,w as O,b6 as U,O as T,ak as $,U as e,d as o,Q as l,Y as V,X as _,F as S,b7 as K,al as d,a8 as p,V as s,aq as E,an as R,P as Z,am as f,b8 as ee,ar as Y}from"./index.31337442.js";import{Q as oe,a as F}from"./QBreadcrumbs.89233b29.js";import{Q as M}from"./QSelect.449dc2fb.js";import{Q as te,a as le}from"./QPopupProxy.f040f18f.js";import{Q as N,a as y}from"./QForm.126bc9ec.js";import{Q as ae}from"./QSpace.7fbb4a0c.js";import{Q as se}from"./QDialog.2047b9e7.js";import{v as P}from"./index.598c9681.js";import"./use-key-composition.d648d796.js";import"./QChip.c623dcd2.js";import"./format.3e32b8d9.js";import"./use-cache.b0833c75.js";import"./use-prevent-scroll.8519556a.js";import"./_commonjsHelpers.b8add541.js";var ie="/quasar-project/assets/undraw_game_day_ucx9.70fc8a14.svg";const re={id:"OrderView"},de={class:"container q-mx-auto q-mt-lg q-mb-lg"},ne={class:"row"},ce={class:"col-12"},ue=K('<div class="col-12 q-mt-xl bigTitle"> \u9810\u7D04\u9808\u77E5 </div><div class="row bigimg q-my-xl"><div class="col-4 order_img"><img src="'+ie+'"></div><div class="col-8"><ul class="ordertoknow"><li> \u5EA7\u4F4D\u4FDD\u755920\u5206\u9418\uFF0C\u82E5\u6703\u665A\u5230\u8D85\u904E20\u5206\u9418\u8ACB\u96FB\u8A71\u544A\u77E5\u3002\u82E5\u4E0D\u4FBF\u524D\u4F86\uFF0C\u8ACB\u53D6\u6D88\u9810\u7D04\u3002 </li><li> \u651C\u5E36\u9152\u985E\u98F2\u54C1\u914C\u6536\u6BCF\u684C$200\u958B\u74F6\u8CBB\u3002\u53E6\u6709\u63D0\u4F9B\u51B0\u6876\u53CA\u676F\u5B50\u3002 </li><li> \u53EF\u651C\u5E36\u5916\u98DF\u6216\u53EB\u5916\u9001\uFF0C\u5916\u98DF\u5783\u573E\u8ACB\u81EA\u884C\u5E36\u8D70\uFF0C\u4E00\u8D77\u7DAD\u8B77\u826F\u597D\u7684\u904A\u73A9\u74B0\u5883\uFF0C\u82E5\u9700\u5354\u52A9\u8655\u7406\u5916\u98DF\u5783\u573E\u914C\u653620$/\u4EBA\u6E05\u6F54\u8CBB\u3002 </li><li> \u56E0\u73FE\u5834\u7A7A\u9593\u5435\u96DC\uFF0C\u4E0D\u5EFA\u8B70\u5E362\u6B72\u4EE5\u4E0B\u5B30\u5E7C\u5152\u53C3\u8207\u805A\u6703\u5594\u3002 </li></ul></div></div>',2),me={class:"row left_area"},_e={class:"row"},pe={class:"col-5 left_participant q-mr-lg"},he=e("div",{class:"title"}," \u9810\u7D04\u4EBA\u6578 ",-1),fe={class:"col-5 left_orderDate"},ve=e("div",{class:"title"}," \u9810\u7D04\u65E5\u671F ",-1),ge={class:"row items-center justify-end"},be={class:"col-12 left_orderTime"},ye=e("div",{class:"orderTimeTitle"},[e("div",{class:"title"}," \u9810\u7D04\u6642\u6BB5 "),e("div",{class:"caption"}," *\u7070\u8272\u8868\u793A\u8A72\u6642\u9593\u5DF2\u5BA2\u6EFF\uFF0C\u53EF\u9EDE\u9078\u6AA2\u8996\u5176\u4ED6\u53EF\u8A02\u4F4D\u65E5\u671F\u3002\u6B32\u9810\u7D04\u975E\u71DF\u696D\u6642\u9593\u53EF\u6D3DFB\u7C89\u5C08\u3002 ")],-1),we={class:"row left_orderHours"},Ve={class:"col-5 q-mr-lg"},xe=e("div",{class:"title"}," \u9810\u7D04\u6642\u6578 ",-1),qe={class:"col-5"},De=e("div",{class:"title"}," \u5099\u8A3B ",-1),Qe={class:"row right_area"},ke=e("div",{class:"col-12 right_title"}," \u78BA\u8A8D\u9810\u7D04\u8CC7\u8A0A ",-1),Te={class:"col-10 right_checkInfo"},Ce={class:"row"},ze={class:"col-5 q-mr-xl"},Be={class:"rightInfo_name"},Ie=e("br",null,null,-1),Oe={class:"rightInfo_phone"},Ue=e("br",null,null,-1),$e={class:"rightInfo_email"},Se=e("br",null,null,-1),Ee={class:"col-5"},Ye={class:"checkOrder_participant"},Fe={class:"checkOrder_orderDate"},Me=e("br",null,null,-1),Ne={class:"checkOrder_orderTime"},Pe={class:"checkOrder_orderHours"},Ae={class:"btn_area"},Ge={class:"edit_btn"},He={class:"order_btn"},Le=e("div",{class:"text-h6"}," \u4FEE\u6539\u9810\u7D04\u8CC7\u6599 ",-1),je={class:"row q-mx-auto"},We=e("div",{class:"col-12 q-my-xl bigTitle"}," \u806F\u7D61\u6211\u5011 ",-1),Xe=e("div",{class:"col-6 info_map"},[e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.702153836036!2d121.41499892414457!3d25.04418003268764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bed3dc9b59%3A0x57e6439a2db0fa2a!2zMjQz5paw5YyX5biC5rOw5bGx5Y2A6LK05a2Q6YeM6Ie06YGg5paw5p2RNTXkuYsx6Jmf5rOw5bGx6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1676725849680!5m2!1szh-TW!2stw",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),Je={class:"col-6"},Ke={class:"info_location"},Re={class:"infoTitle"},Ze=e("div",{class:"infoContent"}," \u65B0\u5317\u5E02\u6CF0\u5C71\u5340\u8CB4\u5B50\u91CC\u81F4\u9060\u65B0\u675155\u4E4B1\u865F ",-1),eo={class:"info_phone"},oo={class:"infoTitle"},to=e("div",{class:"infoContent"}," 02-23941157 ",-1),lo={class:"info_time"},ao={class:"infoTitle"},so=e("div",{class:"infoContent"}," \u65E9\u4E0A10:00\u81F3\u665A\u4E0A23:00 ",-1),io={class:"info_camption"},ro={class:"infoTitle"},no=e("div",{class:"infoContent"}," \u63D0\u4F9B\u542B\u9152\u7CBE\u98F2\u54C1\u53CA\u591A\u7A2E\u8EDF\u6027\u98F2\u6599 \uFF08\u53EF\u651C\u5E36\u5916\u98DF\uFF0C\u81EA\u5099\u9152\u54C1\u914C\u6536$200\u958B\u74F6\u8CBB\uFF09 ",-1),co={id:"footer"},uo={class:"container"},mo=e("div",{class:"row"},[e("div",{class:"col-12"},[e("div",{class:"info_area"},[d(" \u5730\u5740 : \u65B0\u5317\u5E02\u6CF0\u5C71\u5340\u8CB4\u5B50\u91CC\u81F4\u9060\u65B0\u675155\u4E4B1\u865F "),e("br"),d(" \u96FB\u8A71 : 02-23941157 "),e("br"),d(" E-mail : admin@gmail.com "),e("br"),d(" \u71DF\u696D\u6642\u9593 : \u65E9\u4E0A10:00\u81F3\u665A\u4E0A23:00 \u6BCF\u9031\u4E09\u516C\u4F11 ")])])],-1),_o={class:"row"},po={class:"col-12"},ho={class:"btn_area"},fo=e("div",{class:"col-12"},[e("div",{class:"copyright"}," Copyright \xA9 2023 Yung Chien Yang. All rights reserved. ")],-1),Io={__name:"OrderView",setup(vo){const x=W(),q=X(),{name:C,phone:z,email:B}=q,A=J(),G=w(2),D=new Date,H=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];let g=1;const v=w([]),n=k([{time:"10:00",available:!0},{time:"11:00",available:!0},{time:"12:00",available:!0},{time:"13:00",available:!0},{time:"14:00",available:!0},{time:"15:00",available:!0},{time:"16:00",available:!0},{time:"17:00",available:!0},{time:"18:00",available:!0},{time:"19:00",available:!0},{time:"20:00",available:!0},{time:"21:00",available:!0},{time:"22:00",available:!0}]),t=k({u_id:"",name:C,phone:z,email:B,orderDate:"",orderonDate:"",participant:G,time:"",hours:0,others:"",message:"",dialog:!1,loading:!1}),b={email(c){return P.isEmail(c)||"\u683C\u5F0F\u932F\u8AA4"},phone(c){return P.isMobilePhone(c,"zh-TW")||"\u683C\u5F0F\u932F\u8AA4"},required(c){return!!c||"\u6B04\u4F4D\u5FC5\u586B"}},Q=w(null),m=k({name:C,phone:z,email:B}),L=async()=>{Q.value.validate();try{if(!Q.value.validate())return;t.name=m.name,t.phone=m.phone,t.email=m.email,t.dialog=!1,x.notify({position:"top",message:"\u4FEE\u6539\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${q.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}catch(c){console.log(c)}};O(()=>t.orderDate,async(c,i)=>{console.log("form.orderDate \u8B8A\u66F4",c,i);try{if(!t.orderDate){n.forEach(r=>(r.available=!1,console.log(r.available),r));return}n.forEach(r=>(r.available=!0,console.log(r.available),r)),console.log(n),t.time="",t.hours=0;const a=[],{data:u}=await U.post("/orders/getDate",{orderDate:c});u.result.length>0?u.result.forEach(r=>{a.push({time:r.time,hours:r.hours})}):a.push({time:"",hours:0}),console.log(a),a.forEach(r=>{const I=n.findIndex(h=>(console.log(r),h.time===r.time));for(let h=I;h<=Math.min(I+r.hours,n.length-1);h++)if(n[h]&&(n[h].available=!1),n[h]===n[n.length-1])return}),console.log(n)}catch(a){console.log(a)}},{deep:!0});const j=async()=>{var c,i;t.loading=!0;try{console.log(t),await U.post("/orders",{name:t.name,phone:t.phone,email:t.email,orderDate:t.orderDate,orderonDate:t.orderonDate,participant:t.participant,time:t.time,hours:t.hours,others:t.others}),t.message="\u9810\u7D04\u6210\u529F",t.loading=!1,x.notify({position:"top",message:t.message,color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${q.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`}),A.push("/user/orders")}catch(a){x.notify({position:"top",message:((i=(c=a==null?void 0:a.response)==null?void 0:c.data)==null?void 0:i.message)||"\u64CD\u4F5C\u5931\u6557",color:"secondary"})}};return O(()=>t.time,async(c,i)=>{try{v.value=[],g=1;const a=n.findIndex(u=>u.time===t.time);if(a>-1){let u=a;for(;n[u]&&n[u].available;)u++;for(let r=1;r<=u-a;r++)v.value.push(g),g++;return v.value}else{for(let u=1;u<=12;u++)v.value.push(g),g++;return v.value}}catch(a){console.log(a)}}),t.orderDate=w(`${D.getFullYear()}-0${D.getMonth()+1}-${D.getDate()}`),(c,i)=>(T(),$(S,null,[e("div",re,[e("div",de,[e("div",ne,[e("div",ce,[o(oe,{class:"text-primary","active-color":"grey"},{separator:l(()=>[o(p,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:l(()=>[o(F,{label:"\u9996\u9801",icon:"home",to:"/"}),o(F,{label:"\u7ACB\u5373\u9810\u7D04",icon:"event"})]),_:1})])]),ue,o(N,{class:"q-gutter-md",onSubmit:j},{default:l(()=>[o(V,{class:"orderForm q-mx-auto q-mt-lg"},{default:l(()=>[o(s,{horizontal:""},{default:l(()=>[e("div",me,[o(s,null,{default:l(()=>[e("div",_e,[e("div",pe,[he,o(M,{modelValue:t.participant,"onUpdate:modelValue":i[0]||(i[0]=a=>t.participant=a),rounded:"",outlined:"","bottom-slots":"",color:"white",options:H},{prepend:l(()=>[o(p,{name:"supervisor_account",color:"primary"})]),_:1},8,["modelValue"])]),e("div",fe,[ve,o(y,{modelValue:t.orderDate,"onUpdate:modelValue":i[2]||(i[2]=a=>t.orderDate=a),rounded:"",outlined:""},{append:l(()=>[o(p,{name:"event",class:"cursor-pointer",color:"primary"},{default:l(()=>[o(te,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[o(le,{modelValue:t.orderDate,"onUpdate:modelValue":i[1]||(i[1]=a=>t.orderDate=a),"today-btn":""},{default:l(()=>[e("div",ge,[E(o(_,{label:"\u78BA\u8A8D",color:"primary",flat:""},null,512),[[Y]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),_:1}),o(s,null,{default:l(()=>[e("div",be,[ye,o(s,null,{default:l(()=>[e("div",null,[(T(!0),$(S,null,R(n,(a,u)=>(T(),Z(_,{key:u,label:a.time,color:"primary",class:"orderTimeBtn q-mr-lg q-mb-lg",outline:"",size:"lg",disable:!a.available,onClick:r=>t.time=a.time},null,8,["label","disable","onClick"]))),128))])]),_:1})])]),_:1}),o(s,null,{default:l(()=>[e("div",we,[e("div",Ve,[xe,o(M,{modelValue:t.hours,"onUpdate:modelValue":i[3]||(i[3]=a=>t.hours=a),color:"secondary",options:v.value,rounded:"",outlined:"","bottom-slots":""},{prepend:l(()=>[o(p,{name:"schedule",color:"primary"})]),_:1},8,["modelValue","options"])]),e("div",qe,[De,o(y,{modelValue:t.others,"onUpdate:modelValue":i[4]||(i[4]=a=>t.others=a),outlined:"",autogrow:"",type:"textarea"},null,8,["modelValue"])])])]),_:1})]),e("div",Qe,[o(s,null,{default:l(()=>[ke]),_:1}),o(s,null,{default:l(()=>[e("div",Te,[o(V,{flat:"",bordered:"",class:"rightCheckInfoCard"},{default:l(()=>[e("div",Ce,[e("div",ze,[o(s,null,{default:l(()=>[e("div",Be,[d(" \u59D3\u540D\uFF1A "),Ie,d(" "+f(t.name),1)])]),_:1}),o(s,null,{default:l(()=>[e("div",Oe,[d(" \u96FB\u8A71\uFF1A "),Ue,d(" "+f(t.phone),1)])]),_:1}),o(s,null,{default:l(()=>[e("div",$e,[d(" \u4FE1\u7BB1\uFF1A "),Se,d(" "+f(t.email),1)])]),_:1})]),e("div",Ee,[o(s,null,{default:l(()=>[e("div",Ye," \u4EBA\u6578\uFF1A "+f(t.participant),1)]),_:1}),o(s,null,{default:l(()=>[e("div",Fe,[d(" \u65E5\u671F\uFF1A "),Me,d(" "+f(t.orderDate),1)])]),_:1}),o(s,null,{default:l(()=>[e("div",Ne," \u6642\u6BB5\uFF1A "+f(t.time),1)]),_:1}),o(s,null,{default:l(()=>[e("div",Pe," \u6642\u6578 "+f(t.hours),1)]),_:1})])])]),_:1})])]),_:1}),o(s,null,{default:l(()=>[e("div",Ae,[e("div",Ge,[o(_,{icon:"edit",color:"secondary",size:"lg",label:"\u4FEE\u6539\u8CC7\u6599",onClick:i[5]||(i[5]=a=>t.dialog=!0)})]),e("div",He,[o(_,{icon:"today",label:"\u9001\u51FA\u9810\u7D04",type:"submit",color:"secondary",loading:t.loading,size:"lg",class:"checkBtn"},null,8,["loading"])])]),o(se,{modelValue:t.dialog,"onUpdate:modelValue":i[9]||(i[9]=a=>t.dialog=a),persistent:""},{default:l(()=>[o(V,{class:"q-px-md"},{default:l(()=>[o(s,{class:"row items-center q-pb-md"},{default:l(()=>[Le,o(ae),E(o(_,{icon:"close",flat:"",round:"",dense:""},null,512),[[Y]])]),_:1}),o(N,{ref_key:"editForm",ref:Q,class:"q-gutter-md",style:{width:"500px"},onSubmit:ee(L,["prevent"])},{default:l(()=>[o(s,null,{default:l(()=>[o(y,{modelValue:m.name,"onUpdate:modelValue":i[6]||(i[6]=a=>m.name=a),outlined:"",type:"text",label:"\u8ACB\u8F38\u5165\u59D3\u540D *","lazy-rules":"",rules:[b.required]},null,8,["modelValue","rules"])]),_:1}),o(s,null,{default:l(()=>[o(y,{modelValue:m.phone,"onUpdate:modelValue":i[7]||(i[7]=a=>m.phone=a),outlined:"",type:"text",label:"\u8ACB\u8F38\u5165\u96FB\u8A71 *","lazy-rules":"",rules:[b.required,b.phone]},null,8,["modelValue","rules"])]),_:1}),o(s,null,{default:l(()=>[o(y,{modelValue:m.email,"onUpdate:modelValue":i[8]||(i[8]=a=>m.email=a),outlined:"",type:"email",label:"\u8ACB\u8F38\u5165\u4FE1\u7BB1 *","lazy-rules":"",rules:[b.required,b.email]},null,8,["modelValue","rules"])]),_:1}),o(s,null,{default:l(()=>[o(_,{label:"\u78BA\u8A8D",color:"primary",type:"submit"})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),_:1})]),_:1})]),_:1}),e("div",je,[We,Xe,e("div",Je,[o(V,{flat:"",bordered:""},{default:l(()=>[o(s,null,{default:l(()=>[e("div",Ke,[o(s,null,{default:l(()=>[e("div",Re,[o(p,{name:"mdi-map-marker",color:"primary"}),d(" \u5730\u5740 ")]),Ze]),_:1})])]),_:1}),o(s,null,{default:l(()=>[e("div",eo,[o(s,null,{default:l(()=>[e("div",oo,[o(p,{name:"mdi-phone",color:"primary"}),d(" \u96FB\u8A71 ")]),to]),_:1})])]),_:1}),o(s,null,{default:l(()=>[e("div",lo,[o(s,null,{default:l(()=>[e("div",ao,[o(p,{name:"mdi-clock-time-four",color:"primary"}),d(" \u71DF\u696D\u6642\u9593 ")]),so]),_:1})])]),_:1}),o(s,null,{default:l(()=>[e("div",io,[o(s,null,{default:l(()=>[e("div",ro,[o(p,{name:"mdi-information",color:"primary"}),d(" \u5916\u98DF\u898F\u5B9A ")]),no]),_:1})])]),_:1})]),_:1})])])])]),e("div",co,[e("div",uo,[mo,e("div",_o,[e("div",po,[e("div",ho,[o(_,{icon:"mdi-facebook",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),o(_,{icon:"mdi-instagram",outline:"",rounded:"",color:"secondary",class:"q-mr-lg"}),o(_,{icon:"mdi-twitter",outline:"",rounded:"",color:"secondary"})])]),fo])])])],64))}};export{Io as default};

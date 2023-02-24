import{M as Y,J as E,r as g,L as T,w as q,b4 as Q,N as b,ai as C,R as e,d as t,P as l,b5 as M,a5 as m,ao as j,V as w,F as G,al as H,O as L,aj as c,ak as h,am as y,ap as P}from"./index.e57dcb35.js";import{Q as I}from"./QSelect.0e5aa017.js";import{Q as A,a as R}from"./QPopupProxy.6ad00d9f.js";import{Q as J,a as O}from"./QForm.d204c4d3.js";import{a as D,Q as s}from"./QCard.821a7a75.js";import{u as K}from"./use-quasar.f5da597e.js";import"./QChip.4d0e0216.js";import"./QDialog.88e85925.js";import"./use-prevent-scroll.869e15a4.js";import"./format.3e32b8d9.js";import"./use-cache.b0833c75.js";var W="/quasar-project/assets/undraw_game_day_ucx9.70fc8a14.svg";const X={id:"OrderView"},Z={class:"container q-mx-auto q-mt-lg q-mb-lg"},ee=M('<div class="col-12 q-mt-xl bigTitle"> \u9810\u7D04\u9808\u77E5 </div><div class="row bigimg q-my-xl"><div class="col-4 order_img"><img src="'+W+'"></div><div class="col-8"><ul class="ordertoknow"><li> \u5EA7\u4F4D\u4FDD\u755920\u5206\u9418\uFF0C\u82E5\u6703\u665A\u5230\u8D85\u904E20\u5206\u9418\u8ACB\u96FB\u8A71\u544A\u77E5\u3002\u82E5\u4E0D\u4FBF\u524D\u4F86\uFF0C\u8ACB\u53D6\u6D88\u9810\u7D04\u3002 </li><li> \u651C\u5E36\u9152\u985E\u98F2\u54C1\u914C\u6536\u6BCF\u684C$200\u958B\u74F6\u8CBB\u3002\u53E6\u6709\u63D0\u4F9B\u51B0\u6876\u53CA\u676F\u5B50\u3002 </li><li> \u53EF\u651C\u5E36\u5916\u98DF\u6216\u53EB\u5916\u9001\uFF0C\u5916\u98DF\u5783\u573E\u8ACB\u81EA\u884C\u5E36\u8D70\uFF0C\u4E00\u8D77\u7DAD\u8B77\u826F\u597D\u7684\u904A\u73A9\u74B0\u5883\uFF0C\u82E5\u9700\u5354\u52A9\u8655\u7406\u5916\u98DF\u5783\u573E\u914C\u653620$/\u4EBA\u6E05\u6F54\u8CBB\u3002 </li><li> \u56E0\u73FE\u5834\u7A7A\u9593\u5435\u96DC\uFF0C\u4E0D\u5EFA\u8B70\u5E362\u6B72\u4EE5\u4E0B\u5B30\u5E7C\u5152\u53C3\u8207\u805A\u6703\u5594\u3002 </li></ul></div></div>',2),te={class:"row left_area"},oe={class:"row"},le={class:"col-5 left_participant q-mr-lg"},ae=e("div",{class:"title"}," \u9810\u7D04\u4EBA\u6578 ",-1),se={class:"col-5 left_orderDate"},ie=e("div",{class:"title"}," \u9810\u7D04\u65E5\u671F ",-1),re={class:"row items-center justify-end"},de={class:"col-12 left_orderTime"},ne=e("div",{class:"orderTimeTitle"},[e("div",{class:"title"}," \u9810\u7D04\u6642\u6BB5 "),e("div",{class:"caption"}," *\u7070\u8272\u8868\u793A\u8A72\u6642\u9593\u5DF2\u5BA2\u6EFF\uFF0C\u53EF\u9EDE\u9078\u6AA2\u8996\u5176\u4ED6\u53EF\u8A02\u4F4D\u65E5\u671F\u3002\u6B32\u9810\u7D04\u975E\u71DF\u696D\u6642\u9593\u53EF\u6D3DFB\u7C89\u5C08\u3002 ")],-1),ce={class:"row left_orderHours"},ue={class:"col-5 q-mr-lg"},_e=e("div",{class:"title"}," \u9810\u7D04\u6642\u6578 ",-1),me={class:"col-5"},he=e("div",{class:"title"}," \u5099\u8A3B ",-1),fe={class:"row right_area"},pe=e("div",{class:"col-12 right_title"}," \u78BA\u8A8D\u9810\u7D04\u8CC7\u8A0A ",-1),ve={class:"col-10 right_checkInfo"},ge={class:"row"},be={class:"col-5 q-mr-xl"},we={class:"rightInfo_name"},ye=e("br",null,null,-1),De={class:"rightInfo_phone"},xe=e("br",null,null,-1),Ve={class:"rightInfo_email"},ke=e("br",null,null,-1),Te={class:"col-5"},qe={class:"checkOrder_participant"},Qe={class:"checkOrder_orderDate"},Ce=e("br",null,null,-1),Ie={class:"checkOrder_orderTime"},Oe={class:"checkOrder_orderHours"},Be={class:"checkBtn"},$e={class:"row q-mx-auto"},ze=e("div",{class:"col-12 q-my-xl bigTitle"}," \u806F\u7D61\u6211\u5011 ",-1),Se=e("div",{class:"col-6 info_map"},[e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.702153836036!2d121.41499892414457!3d25.04418003268764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bed3dc9b59%3A0x57e6439a2db0fa2a!2zMjQz5paw5YyX5biC5rOw5bGx5Y2A6LK05a2Q6YeM6Ie06YGg5paw5p2RNTXkuYsx6Jmf5rOw5bGx6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1676725849680!5m2!1szh-TW!2stw",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),Fe={class:"col-6"},Ne={class:"info_location"},Ue={class:"infoTitle"},Ye=e("div",{class:"infoContent"}," \u65B0\u5317\u5E02\u6CF0\u5C71\u5340\u8CB4\u5B50\u91CC\u81F4\u9060\u65B0\u675155\u4E4B1\u865F ",-1),Ee={class:"info_phone"},Me={class:"infoTitle"},je=e("div",{class:"infoContent"}," 02-23941157 ",-1),Ge={class:"info_time"},He={class:"infoTitle"},Le=e("div",{class:"infoContent"}," \u65E9\u4E0A10:00\u81F3\u665A\u4E0A23:00 ",-1),Pe={class:"info_camption"},Ae={class:"infoTitle"},Re=e("div",{class:"infoContent"}," \u63D0\u4F9B\u542B\u9152\u7CBE\u98F2\u54C1\u53CA\u591A\u7A2E\u8EDF\u6027\u98F2\u6599 \uFF08\u53EF\u651C\u5E36\u5916\u98DF\uFF0C\u81EA\u5099\u9152\u54C1\u914C\u6536$200\u958B\u74F6\u8CBB\uFF09 ",-1),rt={__name:"OrderView",setup(Je){const x=K(),V=Y(),{name:B,phone:$,email:z}=V,S=E(),F=g(2),v=new Date,N=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];let p=1;const f=g([]),d=T([{time:"10:00",available:!0},{time:"11:00",available:!0},{time:"12:00",available:!0},{time:"13:00",available:!0},{time:"14:00",available:!0},{time:"15:00",available:!0},{time:"16:00",available:!0},{time:"17:00",available:!0},{time:"18:00",available:!0},{time:"19:00",available:!0},{time:"20:00",available:!0},{time:"21:00",available:!0},{time:"22:00",available:!0}]),o=T({u_id:"",name:"",phone:"",orderDate:"",orderonDate:"",participant:F,time:"",hours:0,others:"",message:"",loading:!1});q(()=>o.orderDate,async(u,r)=>{console.log("form.orderDate \u8B8A\u66F4",u,r);try{if(!o.orderDate){d.forEach(i=>(i.available=!1,console.log(i.available),i));return}d.forEach(i=>(i.available=!0,console.log(i.available),i)),console.log(d),o.time="",o.hours=0;const a=[],{data:n}=await Q.post("/orders/getDate",{orderDate:u});n.result.length>0?n.result.forEach(i=>{a.push({time:i.time,hours:i.hours})}):a.push({time:"",hours:0}),console.log(a),a.forEach(i=>{const k=d.findIndex(_=>(console.log(i),_.time===i.time));for(let _=k;_<=Math.min(k+i.hours,d.length-1);_++)if(d[_]&&(d[_].available=!1),d[_]===d[d.length-1])return}),console.log(d)}catch(a){console.log(a)}},{deep:!0});const U=async()=>{var u,r;o.loading=!0;try{console.log(o),await Q.post("/orders",{orderDate:o.orderDate,orderonDate:o.orderonDate,participant:o.participant,time:o.time,hours:o.hours,others:o.others}),o.message="\u9810\u7D04\u6210\u529F",o.loading=!1,x.notify({position:"top",message:o.message,color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${V.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`}),S.push("/user/orders")}catch(a){x.notify({position:"top",message:((r=(u=a==null?void 0:a.response)==null?void 0:u.data)==null?void 0:r.message)||"\u64CD\u4F5C\u5931\u6557",color:"secondary"})}};return q(()=>o.time,async(u,r)=>{try{f.value=[],p=1;const a=d.findIndex(n=>n.time===o.time);if(a>-1){let n=a;for(;d[n]&&d[n].available;)n++;for(let i=1;i<=n-a;i++)f.value.push(p),p++;return f.value}else{for(let n=1;n<=12;n++)f.value.push(p),p++;return f.value}}catch(a){console.log(a)}}),o.orderDate=g(`${v.getFullYear()}-0${v.getMonth()+1}-${v.getDate()}`),(u,r)=>(b(),C("div",X,[e("div",Z,[ee,t(J,{class:"q-gutter-md",onSubmit:U},{default:l(()=>[t(D,{class:"orderForm q-mx-auto q-mt-lg"},{default:l(()=>[t(s,{horizontal:""},{default:l(()=>[e("div",te,[t(s,null,{default:l(()=>[e("div",oe,[e("div",le,[ae,t(I,{modelValue:o.participant,"onUpdate:modelValue":r[0]||(r[0]=a=>o.participant=a),rounded:"",outlined:"","bottom-slots":"",color:"white",options:N},{prepend:l(()=>[t(m,{name:"supervisor_account",color:"primary"})]),_:1},8,["modelValue"])]),e("div",se,[ie,t(O,{modelValue:o.orderDate,"onUpdate:modelValue":r[2]||(r[2]=a=>o.orderDate=a),rounded:"",outlined:""},{append:l(()=>[t(m,{name:"event",class:"cursor-pointer",color:"primary"},{default:l(()=>[t(A,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[t(R,{modelValue:o.orderDate,"onUpdate:modelValue":r[1]||(r[1]=a=>o.orderDate=a),"today-btn":""},{default:l(()=>[e("div",re,[j(t(w,{label:"\u78BA\u8A8D",color:"primary",flat:""},null,512),[[P]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),_:1}),t(s,null,{default:l(()=>[e("div",de,[ne,t(s,null,{default:l(()=>[e("div",null,[(b(!0),C(G,null,H(d,(a,n)=>(b(),L(w,{key:n,label:a.time,color:"primary",class:"orderTimeBtn q-mr-lg q-mb-lg",outline:"",size:"lg",disable:!a.available,onClick:i=>o.time=a.time},null,8,["label","disable","onClick"]))),128))])]),_:1})])]),_:1}),t(s,null,{default:l(()=>[e("div",ce,[e("div",ue,[_e,t(I,{modelValue:o.hours,"onUpdate:modelValue":r[3]||(r[3]=a=>o.hours=a),color:"secondary",options:f.value,rounded:"",outlined:"","bottom-slots":""},{prepend:l(()=>[t(m,{name:"schedule",color:"primary"})]),_:1},8,["modelValue","options"])]),e("div",me,[he,t(O,{modelValue:o.others,"onUpdate:modelValue":r[4]||(r[4]=a=>o.others=a),outlined:"",autogrow:"",type:"textarea"},null,8,["modelValue"])])])]),_:1})]),e("div",fe,[t(s,null,{default:l(()=>[pe]),_:1}),t(s,null,{default:l(()=>[e("div",ve,[t(D,{flat:"",bordered:"",class:"rightCheckInfoCard"},{default:l(()=>[e("div",ge,[e("div",be,[t(s,null,{default:l(()=>[e("div",we,[c(" \u59D3\u540D\uFF1A "),ye,c(" "+h(y(B)),1)])]),_:1}),t(s,null,{default:l(()=>[e("div",De,[c(" \u96FB\u8A71\uFF1A "),xe,c(" "+h(y($)),1)])]),_:1}),t(s,null,{default:l(()=>[e("div",Ve,[c(" \u4FE1\u7BB1\uFF1A "),ke,c(" "+h(y(z)),1)])]),_:1})]),e("div",Te,[t(s,null,{default:l(()=>[e("div",qe," \u4EBA\u6578\uFF1A "+h(o.participant),1)]),_:1}),t(s,null,{default:l(()=>[e("div",Qe,[c(" \u65E5\u671F\uFF1A "),Ce,c(" "+h(o.orderDate),1)])]),_:1}),t(s,null,{default:l(()=>[e("div",Ie," \u6642\u6BB5\uFF1A "+h(o.time),1)]),_:1}),t(s,null,{default:l(()=>[e("div",Oe," \u6642\u6578 "+h(o.hours),1)]),_:1})])])]),_:1})])]),_:1}),t(s,null,{default:l(()=>[e("div",Be,[t(w,{label:"\u9001\u51FA\u9810\u7D04",type:"submit",color:"secondary",loading:o.loading,size:"lg",class:"checkBtn",style:{"margin-left":"35%"}},null,8,["loading"])])]),_:1})])]),_:1})]),_:1})]),_:1}),e("div",$e,[ze,Se,e("div",Fe,[t(D,{flat:"",bordered:""},{default:l(()=>[t(s,null,{default:l(()=>[e("div",Ne,[t(s,null,{default:l(()=>[e("div",Ue,[t(m,{name:"mdi-map-marker",color:"primary"}),c(" \u5730\u5740 ")]),Ye]),_:1})])]),_:1}),t(s,null,{default:l(()=>[e("div",Ee,[t(s,null,{default:l(()=>[e("div",Me,[t(m,{name:"mdi-phone",color:"primary"}),c(" \u96FB\u8A71 ")]),je]),_:1})])]),_:1}),t(s,null,{default:l(()=>[e("div",Ge,[t(s,null,{default:l(()=>[e("div",He,[t(m,{name:"mdi-clock-time-four",color:"primary"}),c(" \u71DF\u696D\u6642\u9593 ")]),Le]),_:1})])]),_:1}),t(s,null,{default:l(()=>[e("div",Pe,[t(s,null,{default:l(()=>[e("div",Ae,[t(m,{name:"mdi-information",color:"primary"}),c(" \u5916\u98DF\u898F\u5B9A ")]),Re]),_:1})])]),_:1})]),_:1})])])])]))}};export{rt as default};
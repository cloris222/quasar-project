import{J as j,N as A,L as W,r as w,M as Q,w as U,b6 as $,O as T,ak as B,U as o,d as e,Q as l,Y as V,b7 as X,V as s,a8 as p,aq as S,X as v,F as J,an as K,P as R,al as u,am as f,b8 as Z,ar as F}from"./index.26672a92.js";import{Q as E}from"./QSelect.fb2b32b3.js";import{Q as ee,a as oe}from"./QPopupProxy.6cfaf768.js";import{Q as M,a as y}from"./QForm.f8b3ef88.js";import{Q as te}from"./QSpace.1ebc02a9.js";import{Q as le}from"./QDialog.6190d081.js";import{v as Y}from"./index.598c9681.js";import"./use-key-composition.b97e84a8.js";import"./QChip.5df36d51.js";import"./format.3e32b8d9.js";import"./use-cache.b0833c75.js";import"./use-prevent-scroll.4d3d5b1f.js";import"./_commonjsHelpers.b8add541.js";var ae="/quasar-project/assets/undraw_game_day_ucx9.70fc8a14.svg";const se={id:"OrderView"},ie={class:"container q-mx-auto q-mt-lg q-mb-lg"},re=X('<div class="col-12 q-mt-xl bigTitle"> \u9810\u7D04\u9808\u77E5 </div><div class="row bigimg q-my-xl"><div class="col-4 order_img"><img src="'+ae+'"></div><div class="col-8"><ul class="ordertoknow"><li> \u5EA7\u4F4D\u4FDD\u755920\u5206\u9418\uFF0C\u82E5\u6703\u665A\u5230\u8D85\u904E20\u5206\u9418\u8ACB\u96FB\u8A71\u544A\u77E5\u3002\u82E5\u4E0D\u4FBF\u524D\u4F86\uFF0C\u8ACB\u53D6\u6D88\u9810\u7D04\u3002 </li><li> \u651C\u5E36\u9152\u985E\u98F2\u54C1\u914C\u6536\u6BCF\u684C$200\u958B\u74F6\u8CBB\u3002\u53E6\u6709\u63D0\u4F9B\u51B0\u6876\u53CA\u676F\u5B50\u3002 </li><li> \u53EF\u651C\u5E36\u5916\u98DF\u6216\u53EB\u5916\u9001\uFF0C\u5916\u98DF\u5783\u573E\u8ACB\u81EA\u884C\u5E36\u8D70\uFF0C\u4E00\u8D77\u7DAD\u8B77\u826F\u597D\u7684\u904A\u73A9\u74B0\u5883\uFF0C\u82E5\u9700\u5354\u52A9\u8655\u7406\u5916\u98DF\u5783\u573E\u914C\u653620$/\u4EBA\u6E05\u6F54\u8CBB\u3002 </li><li> \u56E0\u73FE\u5834\u7A7A\u9593\u5435\u96DC\uFF0C\u4E0D\u5EFA\u8B70\u5E362\u6B72\u4EE5\u4E0B\u5B30\u5E7C\u5152\u53C3\u8207\u805A\u6703\u5594\u3002 </li></ul></div></div>',2),de={class:"row left_area"},ne={class:"row"},ce={class:"col-5 left_participant q-mr-lg"},ue=o("div",{class:"title"}," \u9810\u7D04\u4EBA\u6578 ",-1),me={class:"col-5 left_orderDate"},_e=o("div",{class:"title"}," \u9810\u7D04\u65E5\u671F ",-1),pe={class:"row items-center justify-end"},fe={class:"col-12 left_orderTime"},he=o("div",{class:"orderTimeTitle"},[o("div",{class:"title"}," \u9810\u7D04\u6642\u6BB5 "),o("div",{class:"caption"}," *\u7070\u8272\u8868\u793A\u8A72\u6642\u9593\u5DF2\u5BA2\u6EFF\uFF0C\u53EF\u9EDE\u9078\u6AA2\u8996\u5176\u4ED6\u53EF\u8A02\u4F4D\u65E5\u671F\u3002\u6B32\u9810\u7D04\u975E\u71DF\u696D\u6642\u9593\u53EF\u6D3DFB\u7C89\u5C08\u3002 ")],-1),ve={class:"row left_orderHours"},ge={class:"col-5 q-mr-lg"},be=o("div",{class:"title"}," \u9810\u7D04\u6642\u6578 ",-1),ye={class:"col-5"},we=o("div",{class:"title"}," \u5099\u8A3B ",-1),Ve={class:"row right_area"},xe=o("div",{class:"col-12 right_title"}," \u78BA\u8A8D\u9810\u7D04\u8CC7\u8A0A ",-1),De={class:"col-10 right_checkInfo"},qe={class:"row"},ke={class:"col-5 q-mr-xl"},Qe={class:"rightInfo_name"},Te=o("br",null,null,-1),Ce={class:"rightInfo_phone"},ze=o("br",null,null,-1),Ie={class:"rightInfo_email"},Oe=o("br",null,null,-1),Ue={class:"col-5"},$e={class:"checkOrder_participant"},Be={class:"checkOrder_orderDate"},Se=o("br",null,null,-1),Fe={class:"checkOrder_orderTime"},Ee={class:"checkOrder_orderHours"},Me={class:"btn_area"},Ye={class:"edit_btn"},Ne={class:"order_btn"},Pe=o("div",{class:"text-h6"}," \u4FEE\u6539\u9810\u7D04\u8CC7\u6599 ",-1),Ge={class:"row q-mx-auto"},He=o("div",{class:"col-12 q-my-xl bigTitle"}," \u806F\u7D61\u6211\u5011 ",-1),Le=o("div",{class:"col-6 info_map"},[o("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.702153836036!2d121.41499892414457!3d25.04418003268764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bed3dc9b59%3A0x57e6439a2db0fa2a!2zMjQz5paw5YyX5biC5rOw5bGx5Y2A6LK05a2Q6YeM6Ie06YGg5paw5p2RNTXkuYsx6Jmf5rOw5bGx6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1676725849680!5m2!1szh-TW!2stw",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),je={class:"col-6"},Ae={class:"info_location"},We={class:"infoTitle"},Xe=o("div",{class:"infoContent"}," \u65B0\u5317\u5E02\u6CF0\u5C71\u5340\u8CB4\u5B50\u91CC\u81F4\u9060\u65B0\u675155\u4E4B1\u865F ",-1),Je={class:"info_phone"},Ke={class:"infoTitle"},Re=o("div",{class:"infoContent"}," 02-23941157 ",-1),Ze={class:"info_time"},eo={class:"infoTitle"},oo=o("div",{class:"infoContent"}," \u65E9\u4E0A10:00\u81F3\u665A\u4E0A23:00 ",-1),to={class:"info_camption"},lo={class:"infoTitle"},ao=o("div",{class:"infoContent"}," \u63D0\u4F9B\u542B\u9152\u7CBE\u98F2\u54C1\u53CA\u591A\u7A2E\u8EDF\u6027\u98F2\u6599 \uFF08\u53EF\u651C\u5E36\u5916\u98DF\uFF0C\u81EA\u5099\u9152\u54C1\u914C\u6536$200\u958B\u74F6\u8CBB\uFF09 ",-1),yo={__name:"OrderView",setup(so){const x=j(),D=A(),{name:C,phone:z,email:I}=D,N=W(),P=w(2),q=new Date,G=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];let g=1;const h=w([]),d=Q([{time:"10:00",available:!0},{time:"11:00",available:!0},{time:"12:00",available:!0},{time:"13:00",available:!0},{time:"14:00",available:!0},{time:"15:00",available:!0},{time:"16:00",available:!0},{time:"17:00",available:!0},{time:"18:00",available:!0},{time:"19:00",available:!0},{time:"20:00",available:!0},{time:"21:00",available:!0},{time:"22:00",available:!0}]),t=Q({u_id:"",name:C,phone:z,email:I,orderDate:"",orderonDate:"",participant:P,time:"",hours:0,others:"",message:"",dialog:!1,loading:!1}),b={email(n){return Y.isEmail(n)||"\u683C\u5F0F\u932F\u8AA4"},phone(n){return Y.isMobilePhone(n,"zh-TW")||"\u683C\u5F0F\u932F\u8AA4"},required(n){return!!n||"\u6B04\u4F4D\u5FC5\u586B"}},k=w(null),m=Q({name:C,phone:z,email:I}),H=async()=>{k.value.validate();try{if(!k.value.validate())return;t.name=m.name,t.phone=m.phone,t.email=m.email,t.dialog=!1,x.notify({position:"top",message:"\u4FEE\u6539\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${D.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}catch(n){console.log(n)}};U(()=>t.orderDate,async(n,i)=>{console.log("form.orderDate \u8B8A\u66F4",n,i);try{if(!t.orderDate){d.forEach(r=>(r.available=!1,console.log(r.available),r));return}d.forEach(r=>(r.available=!0,console.log(r.available),r)),console.log(d),t.time="",t.hours=0;const a=[],{data:c}=await $.post("/orders/getDate",{orderDate:n});c.result.length>0?c.result.forEach(r=>{a.push({time:r.time,hours:r.hours})}):a.push({time:"",hours:0}),console.log(a),a.forEach(r=>{const O=d.findIndex(_=>(console.log(r),_.time===r.time));for(let _=O;_<=Math.min(O+r.hours,d.length-1);_++)if(d[_]&&(d[_].available=!1),d[_]===d[d.length-1])return}),console.log(d)}catch(a){console.log(a)}},{deep:!0});const L=async()=>{var n,i;t.loading=!0;try{console.log(t),await $.post("/orders",{name:t.name,phone:t.phone,email:t.email,orderDate:t.orderDate,orderonDate:t.orderonDate,participant:t.participant,time:t.time,hours:t.hours,others:t.others}),t.message="\u9810\u7D04\u6210\u529F",t.loading=!1,x.notify({position:"top",message:t.message,color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${D.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`}),N.push("/user/orders")}catch(a){x.notify({position:"top",message:((i=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:i.message)||"\u64CD\u4F5C\u5931\u6557",color:"secondary"})}};return U(()=>t.time,async(n,i)=>{try{h.value=[],g=1;const a=d.findIndex(c=>c.time===t.time);if(a>-1){let c=a;for(;d[c]&&d[c].available;)c++;for(let r=1;r<=c-a;r++)h.value.push(g),g++;return h.value}else{for(let c=1;c<=12;c++)h.value.push(g),g++;return h.value}}catch(a){console.log(a)}}),t.orderDate=w(`${q.getFullYear()}-0${q.getMonth()+1}-${q.getDate()}`),(n,i)=>(T(),B("div",se,[o("div",ie,[re,e(M,{class:"q-gutter-md",onSubmit:L},{default:l(()=>[e(V,{class:"orderForm q-mx-auto q-mt-lg"},{default:l(()=>[e(s,{horizontal:""},{default:l(()=>[o("div",de,[e(s,null,{default:l(()=>[o("div",ne,[o("div",ce,[ue,e(E,{modelValue:t.participant,"onUpdate:modelValue":i[0]||(i[0]=a=>t.participant=a),rounded:"",outlined:"","bottom-slots":"",color:"white",options:G},{prepend:l(()=>[e(p,{name:"supervisor_account",color:"primary"})]),_:1},8,["modelValue"])]),o("div",me,[_e,e(y,{modelValue:t.orderDate,"onUpdate:modelValue":i[2]||(i[2]=a=>t.orderDate=a),rounded:"",outlined:""},{append:l(()=>[e(p,{name:"event",class:"cursor-pointer",color:"primary"},{default:l(()=>[e(ee,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[e(oe,{modelValue:t.orderDate,"onUpdate:modelValue":i[1]||(i[1]=a=>t.orderDate=a),"today-btn":""},{default:l(()=>[o("div",pe,[S(e(v,{label:"\u78BA\u8A8D",color:"primary",flat:""},null,512),[[F]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),_:1}),e(s,null,{default:l(()=>[o("div",fe,[he,e(s,null,{default:l(()=>[o("div",null,[(T(!0),B(J,null,K(d,(a,c)=>(T(),R(v,{key:c,label:a.time,color:"primary",class:"orderTimeBtn q-mr-lg q-mb-lg",outline:"",size:"lg",disable:!a.available,onClick:r=>t.time=a.time},null,8,["label","disable","onClick"]))),128))])]),_:1})])]),_:1}),e(s,null,{default:l(()=>[o("div",ve,[o("div",ge,[be,e(E,{modelValue:t.hours,"onUpdate:modelValue":i[3]||(i[3]=a=>t.hours=a),color:"secondary",options:h.value,rounded:"",outlined:"","bottom-slots":""},{prepend:l(()=>[e(p,{name:"schedule",color:"primary"})]),_:1},8,["modelValue","options"])]),o("div",ye,[we,e(y,{modelValue:t.others,"onUpdate:modelValue":i[4]||(i[4]=a=>t.others=a),outlined:"",autogrow:"",type:"textarea"},null,8,["modelValue"])])])]),_:1})]),o("div",Ve,[e(s,null,{default:l(()=>[xe]),_:1}),e(s,null,{default:l(()=>[o("div",De,[e(V,{flat:"",bordered:"",class:"rightCheckInfoCard"},{default:l(()=>[o("div",qe,[o("div",ke,[e(s,null,{default:l(()=>[o("div",Qe,[u(" \u59D3\u540D\uFF1A "),Te,u(" "+f(t.name),1)])]),_:1}),e(s,null,{default:l(()=>[o("div",Ce,[u(" \u96FB\u8A71\uFF1A "),ze,u(" "+f(t.phone),1)])]),_:1}),e(s,null,{default:l(()=>[o("div",Ie,[u(" \u4FE1\u7BB1\uFF1A "),Oe,u(" "+f(t.email),1)])]),_:1})]),o("div",Ue,[e(s,null,{default:l(()=>[o("div",$e," \u4EBA\u6578\uFF1A "+f(t.participant),1)]),_:1}),e(s,null,{default:l(()=>[o("div",Be,[u(" \u65E5\u671F\uFF1A "),Se,u(" "+f(t.orderDate),1)])]),_:1}),e(s,null,{default:l(()=>[o("div",Fe," \u6642\u6BB5\uFF1A "+f(t.time),1)]),_:1}),e(s,null,{default:l(()=>[o("div",Ee," \u6642\u6578 "+f(t.hours),1)]),_:1})])])]),_:1})])]),_:1}),e(s,null,{default:l(()=>[o("div",Me,[o("div",Ye,[e(v,{icon:"edit",color:"secondary",size:"lg",label:"\u4FEE\u6539\u8CC7\u6599",onClick:i[5]||(i[5]=a=>t.dialog=!0)})]),o("div",Ne,[e(v,{icon:"today",label:"\u9001\u51FA\u9810\u7D04",type:"submit",color:"secondary",loading:t.loading,size:"lg",class:"checkBtn"},null,8,["loading"])])]),e(le,{modelValue:t.dialog,"onUpdate:modelValue":i[9]||(i[9]=a=>t.dialog=a),persistent:""},{default:l(()=>[e(V,{class:"q-px-md"},{default:l(()=>[e(s,{class:"row items-center q-pb-md"},{default:l(()=>[Pe,e(te),S(e(v,{icon:"close",flat:"",round:"",dense:""},null,512),[[F]])]),_:1}),e(M,{ref_key:"editForm",ref:k,class:"q-gutter-md",style:{width:"500px"},onSubmit:Z(H,["prevent"])},{default:l(()=>[e(s,null,{default:l(()=>[e(y,{modelValue:m.name,"onUpdate:modelValue":i[6]||(i[6]=a=>m.name=a),outlined:"",type:"text",label:"\u8ACB\u8F38\u5165\u59D3\u540D *","lazy-rules":"",rules:[b.required]},null,8,["modelValue","rules"])]),_:1}),e(s,null,{default:l(()=>[e(y,{modelValue:m.phone,"onUpdate:modelValue":i[7]||(i[7]=a=>m.phone=a),outlined:"",type:"text",label:"\u8ACB\u8F38\u5165\u96FB\u8A71 *","lazy-rules":"",rules:[b.required,b.phone]},null,8,["modelValue","rules"])]),_:1}),e(s,null,{default:l(()=>[e(y,{modelValue:m.email,"onUpdate:modelValue":i[8]||(i[8]=a=>m.email=a),outlined:"",type:"email",label:"\u8ACB\u8F38\u5165\u4FE1\u7BB1 *","lazy-rules":"",rules:[b.required,b.email]},null,8,["modelValue","rules"])]),_:1}),e(s,null,{default:l(()=>[e(v,{label:"\u78BA\u8A8D",color:"primary",type:"submit"})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),_:1})]),_:1})]),_:1}),o("div",Ge,[He,Le,o("div",je,[e(V,{flat:"",bordered:""},{default:l(()=>[e(s,null,{default:l(()=>[o("div",Ae,[e(s,null,{default:l(()=>[o("div",We,[e(p,{name:"mdi-map-marker",color:"primary"}),u(" \u5730\u5740 ")]),Xe]),_:1})])]),_:1}),e(s,null,{default:l(()=>[o("div",Je,[e(s,null,{default:l(()=>[o("div",Ke,[e(p,{name:"mdi-phone",color:"primary"}),u(" \u96FB\u8A71 ")]),Re]),_:1})])]),_:1}),e(s,null,{default:l(()=>[o("div",Ze,[e(s,null,{default:l(()=>[o("div",eo,[e(p,{name:"mdi-clock-time-four",color:"primary"}),u(" \u71DF\u696D\u6642\u9593 ")]),oo]),_:1})])]),_:1}),e(s,null,{default:l(()=>[o("div",to,[e(s,null,{default:l(()=>[o("div",lo,[e(p,{name:"mdi-information",color:"primary"}),u(" \u5916\u98DF\u898F\u5B9A ")]),ao]),_:1})])]),_:1})]),_:1})])])])]))}};export{yo as default};

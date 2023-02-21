import{N as v,J as g,M as y,O as V,ak as b,U as o,d as s,Q as n,Y as _,ao as Q,X as c,V as m,am as d,aq as q,b6 as x,ar as U}from"./index.b57d891b.js";import{Q as w}from"./QSpace.cb8c0f6e.js";import{Q as z,a as u}from"./QForm.ec137166.js";import{Q as C}from"./QCardActions.d32ab474.js";import{Q as S}from"./QDialog.23d827a0.js";import{v as f}from"./index.598c9681.js";import"./use-key-composition.4b113e61.js";import"./use-prevent-scroll.085b4e7b.js";import"./_commonjsHelpers.b8add541.js";const k={id:"userHome"},B={class:"container"},D=o("div",{class:"row title_area"},[o("div",{class:"bigTitle"}," \u6703\u54E1\u8CC7\u6599 ")],-1),N={class:"user_info"},$={class:"row info_area"},A={class:"col-12"},E={class:"top_area"},H={class:"user_name"},M={class:"user_account"},P={class:"bottom_area"},T={class:"user_email"},F={class:"user_phone"},I={class:"column avatar_area"},J={class:"user_avatar"},O=["src"],W=o("div",{class:"text-h6"}," \u7DE8\u8F2F\u8CC7\u6599 ",-1),oe={__name:"UserHome",setup(X){const i=v(),p=g(),r={email(t){return f.isEmail(t)||"\u683C\u5F0F\u932F\u8AA4"},phone(t){return f.isMobilePhone(t,"zh-TW")||"\u683C\u5F0F\u932F\u8AA4"},required(t){return!!t||"\u6B04\u4F4D\u5FC5\u586B"},length(t){return t.length>=4&&t.length<=12||"\u9577\u5EA6\u5FC5\u9808\u70BA 4 ~ 12 \u500B\u5B57"}},e=y({name:i.name,account:i.account,email:i.email,phone:i.phone,dialog:!1,loading:!1}),h=async()=>{var t,l;try{e.loading=!0;const{data:a}=await x.patch("/users/"+i._id,e);e.name=a.result.name,e.account=a.result.account,e.email=a.result.email,e.phone=a.result.phone,p.notify({position:"top",message:"\u7DE8\u8F2F\u6210\u529F",color:"secondary",avatar:`https://source.boringavatars.com/beam/256/${i.account.value}?colors=#ffad08,#edd75a,#73b06f,#0c8f8f,#405059`})}catch(a){console.log(a),p.notify({position:"top",message:((l=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}e.dialog=!1,e.loading=!1};return(t,l)=>(V(),b("div",k,[o("div",B,[D,o("div",N,[o("div",$,[o("div",A,[s(_,null,{default:n(()=>[o("div",E,[s(m,null,{default:n(()=>[o("div",H,d(e.name),1),o("div",M,d(e.account),1)]),_:1})]),o("div",P,[s(m,null,{default:n(()=>[o("div",T," \u4FE1\u7BB1\uFF1A"+d(e.email),1),o("div",F," \u96FB\u8A71\uFF1A"+d(e.phone),1)]),_:1})])]),_:1})])]),o("div",I,[o("div",J,[o("img",{src:Q(i).avatar},null,8,O)]),s(c,{icon:"edit",label:"\u7DE8\u8F2F\u8CC7\u6599",color:"secondary",onClick:l[0]||(l[0]=a=>e.dialog=!0)}),s(S,{modelValue:e.dialog,"onUpdate:modelValue":l[5]||(l[5]=a=>e.dialog=a),persistent:""},{default:n(()=>[s(_,{class:"q-px-md"},{default:n(()=>[s(m,{class:"row items-center q-pb-md"},{default:n(()=>[W,s(w),q(s(c,{icon:"close",flat:"",round:"",dense:""},null,512),[[U]])]),_:1}),s(z,{class:"q-gutter-md",style:{width:"500px"},onSubmit:h},{default:n(()=>[s(u,{modelValue:e.name,"onUpdate:modelValue":l[1]||(l[1]=a=>e.name=a),type:"text",outlined:"",label:"\u8ACB\u8F38\u5165\u59D3\u540D","lazy-rules":"",rules:[r.required]},null,8,["modelValue","rules"]),s(u,{modelValue:e.account,"onUpdate:modelValue":l[2]||(l[2]=a=>e.account=a),type:"text",outlined:"",label:"\u8ACB\u8F38\u5165\u5E33\u865F","lazy-rules":"",rules:[r.required,r.length]},null,8,["modelValue","rules"]),s(u,{modelValue:e.email,"onUpdate:modelValue":l[3]||(l[3]=a=>e.email=a),type:"text",outlined:"",label:"\u8ACB\u8F38\u5165\u4FE1\u7BB1","lazy-rules":"",rules:[r.required,r.email]},null,8,["modelValue","rules"]),s(u,{modelValue:e.phone,"onUpdate:modelValue":l[4]||(l[4]=a=>e.phone=a),type:"text",outlined:"",label:"\u8ACB\u8F38\u5165\u96FB\u8A71","lazy-rules":"",rules:[r.required,r.phone]},null,8,["modelValue","rules"]),o("div",null,[s(C,{align:"center"},{default:n(()=>[s(c,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:e.loading,size:"md"},null,8,["loading"])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])])]))}};export{oe as default};

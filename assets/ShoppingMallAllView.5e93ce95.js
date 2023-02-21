import{k as X,r as f,w as Y,c as m,y as Z,h as G,g as H,O as y,ak as x,d as e,Q as i,U as r,X as S,V as _,al as g,am as C,a8 as w,F,an as T,P as O,Y as L,N as W,J as ee,M as z,Z as ae,ao as te,ap as le,aq as oe,ar as ne}from"./index.26672a92.js";import{Q as se,a as A}from"./QBreadcrumbs.28550408.js";import{u as re,a as ie,b as ue,k as ce,_ as j,Q as de,c as E,d as me}from"./lodash.bf1d2dc7.js";import{Q as pe}from"./QSelect.fb2b32b3.js";import{Q as J}from"./QChip.5df36d51.js";import{i as ve}from"./use-key-composition.b97e84a8.js";import{b as K}from"./format.3e32b8d9.js";import{Q as ge}from"./QSpace.1ebc02a9.js";import{Q as fe,a as _e}from"./QForm.f8b3ef88.js";import{Q as ye}from"./QDialog.6190d081.js";import"./option-sizes.5a2ebfdd.js";import"./TouchPan.d6a5c07a.js";import"./touch.70a9dd44.js";import"./_commonjsHelpers.b8add541.js";import"./use-prevent-scroll.4d3d5b1f.js";const be=()=>({});var he=X({name:"QSlider",props:{...re,modelValue:{required:!0,default:null,validator:t=>typeof t=="number"||t===null},labelValue:[String,Number]},emits:ie,setup(t,{emit:k}){const{proxy:{$q:q}}=H(),{state:o,methods:d}=ue({updateValue:$,updatePosition:B,getDragging:D,formAttrs:ve(t)}),p=f(null),b=f(0),u=f(0);function M(){u.value=t.modelValue===null?o.innerMin.value:K(t.modelValue,o.innerMin.value,o.innerMax.value)}Y(()=>`${t.modelValue}|${o.innerMin.value}|${o.innerMax.value}`,M),M();const Q=m(()=>d.convertModelToRatio(u.value)),v=m(()=>o.active.value===!0?b.value:Q.value),c=m(()=>{const l={[o.positionProp.value]:`${100*o.innerMinRatio.value}%`,[o.sizeProp.value]:`${100*(v.value-o.innerMinRatio.value)}%`};return t.selectionImg!==void 0&&(l.backgroundImage=`url(${t.selectionImg}) !important`),l}),I=d.getThumbRenderFn({focusValue:!0,getNodeData:be,ratio:v,label:m(()=>t.labelValue!==void 0?t.labelValue:u.value),thumbColor:m(()=>t.thumbColor||t.color),labelColor:m(()=>t.labelColor),labelTextColor:m(()=>t.labelTextColor)}),P=m(()=>o.editable.value!==!0?{}:q.platform.is.mobile===!0?{onClick:d.onMobileClick}:{onMousedown:d.onActivate,onFocus:N,onBlur:d.onBlur,onKeydown:U,onKeyup:d.onKeyup});function $(l){u.value!==t.modelValue&&k("update:modelValue",u.value),l===!0&&k("change",u.value)}function D(){return p.value.getBoundingClientRect()}function B(l,h=o.dragging.value){const a=d.getDraggingRatio(l,h);u.value=d.convertRatioToModel(a),b.value=t.snap!==!0||t.step===0?a:d.convertModelToRatio(u.value)}function N(){o.focus.value=!0}function U(l){if(!ce.includes(l.keyCode))return;Z(l);const h=([34,33].includes(l.keyCode)?10:1)*o.step.value,a=([34,37,40].includes(l.keyCode)?-1:1)*(o.isReversed.value===!0?-1:1)*(t.vertical===!0?-1:1)*h;u.value=K(parseFloat((u.value+a).toFixed(o.decimals.value)),o.innerMin.value,o.innerMax.value),$()}return()=>{const l=d.getContent(c,o.tabindex,P,h=>{h.push(I())});return G("div",{ref:p,class:o.classes.value+(t.modelValue===null?" q-slider--no-value":""),...o.attributes.value,"aria-valuenow":t.modelValue},l)}}});const Ve={id:"ProductCard"},Ce={class:"cardImage"},ke=["src"],xe={class:"row text-h6"},qe={style:{"font-size":"16px"}},Qe={__name:"ProductCard",props:{_id:{type:String,default:""},name:{type:String,default:""},images:{type:Array,default(){return[]}},category:{type:Array,default(){return[]}},gamer:{type:String,default:""},age:{type:Number,default:0},rules:{type:String,default:""},price:{type:Number,default:0},sell:{type:Boolean,default:!1}},emits:["open-cart-dialog"],setup(t,{emit:k}){const q=f(!0),o=()=>{k("open-cart-dialog",q.value)};return(d,p)=>(y(),x("div",Ve,[e(L,{class:"productCard"},{default:i(()=>[r("div",Ce,[r("img",{src:t.images[0]},null,8,ke),e(S,{"icon-right":"mdi-arrow-right",label:"\u4E86\u89E3\u8A73\u60C5",color:"secondary",class:"detailBtn",to:"/products/"+t._id},null,8,["to"])]),e(_,null,{default:i(()=>[r("div",xe,[g(C(t.name)+" ",1),e(w,{name:"diversity_3",color:"primary",size:"sm",class:"q-mr-sm"}),r("span",qe,C(t.gamer),1)])]),_:1}),e(_,{class:"q-pt-none"},{default:i(()=>[(y(!0),x(F,null,T(t.category,(b,u)=>(y(),O(J,{key:u,color:"primary","text-color":"white"},{default:i(()=>[g(C(b),1)]),_:2},1024))),128))]),_:1}),e(_,{class:"q-pt-none price_area"},{default:i(()=>[g(" $"+C(t.price),1)]),_:1}),e(_,{class:"q-pt-none btn_area flex justify-center no-wrap"},{default:i(()=>[e(S,{icon:"mdi-cart-outline",flat:"",class:"icon_cart",onClick:o})]),_:1})]),_:1})]))}},we={id:"shoppingMall"},Se={class:"container"},Me={class:"row q-mt-lg"},$e={class:"col-3"},Be={class:"toolSection"},Re={class:"row justify-center q-mt-lg q-mx-auto"},Ie={class:"col-1 title_area"},Pe={class:"col-5 q-mb-lg"},De={class:"row justify-center q-mx-auto"},Ne={class:"col-1 title_area"},Ue={class:"col-2 q-mb-lg"},ze={class:"col-3"},Fe={class:"row justify-center q-mx-auto"},Te={class:"col-1 title_area"},Ae={class:"col-12 col-lg-5 q-mb-lg"},je={class:"row q-mx-auto justify-center"},Ee=r("div",{class:"text-h6"}," \u8CFC\u7269\u8ECA ",-1),na={__name:"ShoppingMallAllView",setup(t){const k=W(),{editCart:q}=k,o=ee(),d=z([]),p=f([]),b=f(!0),u=f(!1),M=["\u6D3E\u5C0D\u904A\u6232","\u7B56\u7565\u904A\u6232","\u9663\u71DF\u904A\u6232","\u89AA\u5B50\u904A\u6232","\u7D19\u724C\u904A\u6232","\u5176\u4ED6\u904A\u6232","\u66A2\u92B7\u904A\u6232","\u6700\u65B0\u4E0A\u67B6","\u64BF\u4FBF\u5B9C","\u516B\u6210\u65B0","\u8FD1\u5168\u65B0"],Q=f(1),v=f("less"),c=z({p_id:"",quantity:0,price:0,name:"",loading:!1}),I=a=>{u.value=!0,c.name=a.name,c.p_id=a._id,c.price=a.price,c.quantity=0,console.log(u.value)},P=()=>{p.value=l.category.map(a=>a)},$=a=>{p.value.splice(a,1),l.category.splice(a,1)},D=a=>`$${100*a}`,B={required(a){return!!a||"\u6B04\u4F4D\u5FC5\u586B"},number(a){return a>0||"\u6578\u91CF\u932F\u8AA4"}},N=async()=>{c.loading=!0,await q({_id:c.p_id,quantity:c.quantity,price:c.price,message:"\u52A0\u5165\u8CFC\u7269\u8ECA\u6210\u529F"}),u.value=!1},U=m(()=>Q.value*100),l=z({gamer:{min:1,max:5},category:["\u66A2\u92B7\u904A\u6232"],price:U}),h=m(()=>d.filter(a=>v.value==="less"?a.gamer.split("~").map(Number)[0]>=parseInt(l.gamer.min)&&a.gamer.split("~").map(Number)[1]<=parseInt(l.gamer.max)&&parseInt(j.intersection(a.category,l.category).length)!==0&&a.price<=l.price:a.gamer.split("~").map(Number)[1]>10&&parseInt(j.intersection(a.category,l.category).length)!==0&&a.price<=l.price));return(async()=>{var a,s;try{const{data:n}=await ae.get("/products");d.push(...n.result)}catch(n){o.notify({position:"top",message:((s=(a=n==null?void 0:n.response)==null?void 0:a.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4",color:"negative"})}})(),(a,s)=>(y(),x("div",we,[r("div",Se,[r("div",Me,[r("div",$e,[e(se,{class:"text-primary","active-color":"grey"},{separator:i(()=>[e(w,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:i(()=>[e(A,{label:"\u9996\u9801",icon:"home",to:"/"}),e(A,{label:"\u4E8C\u624B\u5C08\u5340",icon:"mdi-bookshelf"})]),_:1})])]),e(de,{modelValue:b.value,"onUpdate:modelValue":s[6]||(s[6]=n=>b.value=n),icon:"mdi-filter-variant",label:"\u7BE9\u9078\u689D\u4EF6"},{default:i(()=>[r("div",Be,[r("div",Re,[r("div",Ie,[e(w,{name:"diversity_3",size:"sm"}),g(" \u4EBA\u6578 ")]),r("div",Pe,[e(E,{modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=n=>v.value=n),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"less",label:"10\u4EBA\u4EE5\u4E0B"},null,8,["modelValue"]),e(E,{modelValue:v.value,"onUpdate:modelValue":s[1]||(s[1]=n=>v.value=n),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"more",label:"10\u4EBA\u4EE5\u4E0A"},null,8,["modelValue"]),e(me,{modelValue:l.gamer,"onUpdate:modelValue":s[2]||(s[2]=n=>l.gamer=n),disable:v.value==="more",snap:"",markers:"","marker-labels":"",min:1,max:10},null,8,["modelValue","disable"])])]),r("div",De,[r("div",Ne,[e(w,{name:"sell",size:"sm"}),g(" \u6A19\u7C64 ")]),r("div",Ue,[e(pe,{modelValue:l.category,"onUpdate:modelValue":s[3]||(s[3]=n=>l.category=n),filled:"",multiple:"",options:M,label:"\u65B0\u589E\u6A19\u7C64",style:{width:"250px"},"bottom-slots":""},{append:i(()=>[e(S,{round:"",dense:"",flat:"",icon:"add",onClick:P})]),_:1},8,["modelValue"])]),r("div",ze,[(y(!0),x(F,null,T(p.value,(n,R)=>(y(),O(J,{key:R,modelValue:p.value,"onUpdate:modelValue":s[4]||(s[4]=V=>p.value=V),color:"primary","text-color":"white",clickable:"",icon:"mdi-close-circle","icon-color":"white",onClick:V=>$(R)},{default:i(()=>[g(C(n),1)]),_:2},1032,["modelValue","onClick"]))),128))])]),r("div",Fe,[r("div",Te,[e(w,{name:"monetization_on",size:"sm"}),g(" \u50F9\u683C ")]),r("div",Ae,[e(he,{modelValue:Q.value,"onUpdate:modelValue":s[5]||(s[5]=n=>Q.value=n),markers:"","marker-labels":D,min:0,max:10,snap:""},null,8,["modelValue"])])])])]),_:1},8,["modelValue"]),r("div",je,[(y(!0),x(F,null,T(te(h),(n,R)=>(y(),x("div",{key:R,class:"col-6 col-lg-3 q-mb-lg"},[e(Qe,le(n,{onOpenCartDialog:V=>I(n)}),null,16,["onOpenCartDialog"]),e(ye,{modelValue:u.value,"onUpdate:modelValue":s[8]||(s[8]=V=>u.value=V),persistent:""},{default:i(()=>[e(L,{class:"q-px-md"},{default:i(()=>[e(_,{class:"row items-center q-pb-md"},{default:i(()=>[Ee,e(ge),oe(e(S,{icon:"close",flat:"",round:"",dense:""},null,512),[[ne]])]),_:1}),e(fe,{class:"q-gutter-md",style:{width:"500px"},onSubmit:N},{default:i(()=>[e(_,null,{default:i(()=>[g(" \u54C1\u540D:"+C(c.name),1)]),_:1}),e(_,null,{default:i(()=>[g(" \u50F9\u9322:"+C(c.price),1)]),_:1}),e(_,null,{default:i(()=>[e(_e,{modelValue:c.quantity,"onUpdate:modelValue":s[7]||(s[7]=V=>c.quantity=V),outlined:"",type:"number",label:"\u8ACB\u9078\u64C7\u5546\u54C1\u6578\u91CF *","lazy-rules":"",rules:[B.required,B.number]},null,8,["modelValue","rules"])]),_:1}),e(_,null,{default:i(()=>[e(S,{label:"\u78BA\u8A8D",type:"submit",color:"primary",loading:c.loading},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))),128))])])]))}};export{na as default};

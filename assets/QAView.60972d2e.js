import{k as O,r as q,w as I,o as R,a0 as V,h as $,E as C,bd as k,be as N,bf as F,a$ as U,N as M,O as W,ak as j,U as s,d as t,Q as o,a8 as D,bg as G,bh as i,ao as d}from"./index.bb067db4.js";import{Q as J,a as P}from"./QBreadcrumbs.f68a1f1f.js";function B(e){let c=!1,a,_;function r(){_=arguments,c!==!0&&(c=!0,a=requestAnimationFrame(()=>{e.apply(this,_),_=void 0,c=!1}))}return r.cancel=()=>{window.cancelAnimationFrame(a),c=!1},r}const{passive:y}=U;var K=O({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:e=>e>=0&&e<=1},scrollTarget:{default:void 0},onScroll:Function},setup(e,{slots:c,emit:a}){const _=q(0),r=q(null),v=q(null),H=q(null);let u,l,T,g,h,f;I(()=>e.height,()=>{u===!0&&b()}),I(()=>e.scrollTarget,()=>{u===!0&&(E(),Q())});let p=n=>{_.value=n,e.onScroll!==void 0&&a("scroll",n)};function b(){let n,m,x;f===window?(n=0,x=m=window.innerHeight):(n=k(f).top,m=N(f),x=n+m);const A=k(r.value).top,L=A+e.height;if(h!==void 0||L>n&&A<x){const z=(x-A)/(e.height+m);w((T-e.height)*z*e.speed),p(z)}}let w=n=>{l.style.transform=`translate3d(-50%,${Math.round(n)}px,0)`};function S(){T=l.naturalHeight||l.videoHeight||N(l),u===!0&&b()}function Q(){u=!0,f=F(r.value,e.scrollTarget),f.addEventListener("scroll",b,y),window.addEventListener("resize",g,y),b()}function E(){u===!0&&(u=!1,f.removeEventListener("scroll",b,y),window.removeEventListener("resize",g,y),f=void 0,w.cancel(),p.cancel(),g.cancel())}return R(()=>{w=B(w),p=B(p),g=B(S),l=c.media!==void 0?v.value.children[0]:H.value,l.onload=l.onloadstart=l.loadedmetadata=S,S(),l.style.display="initial",window.IntersectionObserver!==void 0?(h=new IntersectionObserver(n=>{(n[0].isIntersecting===!0?Q:E)()}),h.observe(r.value)):Q()}),V(()=>{E(),h!==void 0&&h.disconnect(),l.onload=l.onloadstart=l.loadedmetadata=null}),()=>$("div",{ref:r,class:"q-parallax",style:{height:`${e.height}px`}},[$("div",{ref:v,class:"q-parallax__media absolute-full"},c.media!==void 0?c.media():[$("img",{ref:H,src:e.src})]),$("div",{class:"q-parallax__content absolute-full column flex-center"},c.content!==void 0?c.content({percentScrolled:_.value}):C(c.default))])}}),X="/quasar-project/assets/\u804A\u5929\u7D00\u9304-01.7570c935.svg";const Y={id:"QAView"},Z={class:"container"},ss={class:"row"},es={class:"col-12"},as=s("img",{src:X,class:"parallaxImg"},null,-1),ts={class:"row"},os={class:"col-12"},cs={class:"question"},ls={class:"question_avatar"},ns=["src"],is=s("div",{class:"question_text"}," \u5E97\u5167\u53EF\u4EE5\u79DF\u684C\u904A\u55CE\uFF1F ",-1),ds={class:"col-12"},rs={class:"answer"},_s=s("div",{class:"answer_text"}," \u76EE\u524D\u6C92\u6709\u63D0\u4F9B\u51FA\u79DF\u3002\u75AB\u60C5\u671F\u9593\u5EFA\u8B70\u8CB7\u65B0\u904A\u6232\u56DE\u5BB6\u6BD4\u8F03\u5B89\u5FC3\u5594\u3002 ",-1),fs={class:"answer_avatar"},us=["src"],vs={class:"col-12"},hs={class:"question"},bs={class:"question_avatar"},ms=["src"],gs=s("div",{class:"question_text"}," \u53EF\u4EE5\u5E36\u751F\u65E5\u86CB\u7CD5\u53BB\u6176\u751F\u55CE\uFF1F ",-1),ps={class:"col-12"},ws={class:"answer"},xs=s("div",{class:"answer_text"}," \u53EF\u4EE5\u5E36\u86CB\u7CD5\u5594\uFF0C\u8DDF\u5916\u98DF\u4E00\u6A23\u5783\u573E\u5E6B\u5FD9\u5E36\u8D70\u6216\u914C\u6536$200\u8655\u7406\u8CBB\u3002\u53E6\u5916\u6709\u51B7\u85CF\u51B0\u7BB1\u53EF\u4EE5\u501F\u51B0\u5728\u51B0\u7BB1\u3002 ",-1),qs={class:"answer_avatar"},$s=["src"],ys={class:"col-12"},Ss={class:"question"},Qs={class:"question_avatar"},Es=["src"],As=s("div",{class:"question_text"}," \u7576\u5929\u60F3\u73A9\u4F46\u662F\u6C92\u8FA6\u6CD5\u9810\u7D04\u600E\u9EBC\u8FA6\uFF1F ",-1),Bs={class:"col-12"},Hs={class:"answer"},Ts=s("div",{class:"answer_text"}," \u7DB2\u8DEF\u9810\u7D04\u53EA\u63D0\u4F9B\u9694\u5929\u523060\u5929\u5167\u7684\u9810\u7D04\uFF0C\u7576\u5929\u8981\u4F86\u73A9\u7684\u8A71\u53EF\u4EE5\u76F4\u63A5\u64A5\u5E97\u5167\u96FB\u8A71\u8A62\u554F\u4F4D\u5B50\u5594\u3002 ",-1),zs={class:"answer_avatar"},Is=["src"],ks={class:"col-12"},Ns={class:"question"},Ps={class:"question_avatar"},Ls=["src"],Os=s("div",{class:"question_text"}," \u53EF\u4EE5\u7D14\u53BB\u5E97\u5167\u559D\u98F2\u6599\u6216\u7CBE\u91C0\u5564\u9152\u8DDF\u670B\u53CB\u804A\u5929\u55CE\uFF1F ",-1),Rs={class:"col-12"},Vs={class:"answer"},Cs=s("div",{class:"answer_text"}," \u4E0D\u8AD6\u662F\u8981\u958B\u6703\u3001\u6253SWITCH\u6216\u662F\u559D\u9152\u804A\u5929\u90FD\u5F88\u9069\u5408\u5594\u3002 ",-1),Fs={class:"answer_avatar"},Us=["src"],Ms={class:"col-12"},Ws={class:"question"},js={class:"question_avatar"},Ds=["src"],Gs=s("div",{class:"question_text"}," \u6211\u8A72\u5982\u4F55\u4FEE\u6539\u6216\u53D6\u6D88\u6211\u7684\u9810\u7D04\uFF1F ",-1),Js={class:"col-12"},Ks={class:"answer"},Xs=s("div",{class:"answer_text"}," \u5982\u679C\u6709\u4FEE\u6539\u6216\u53D6\u6D88\u9810\u7D04\u7684\u9700\u6C42\uFF0C\u8ACB\u76F4\u63A5\u64A5\u96FB\u8A71\u81F3\u5E97\u88E1\u8AEE\u8A62\u5594\u3002 \u96FB\u8A71\uFF1A02-23941157 ",-1),Ys={class:"answer_avatar"},Zs=["src"],ae={__name:"QAView",setup(e){const c=M(),{account:a}=c;return(_,r)=>(W(),j("div",Y,[s("div",Z,[s("div",ss,[s("div",es,[t(J,{class:"text-primary q-mb-lg","active-color":"grey"},{separator:o(()=>[t(D,{size:"1.5em",name:"chevron_right",color:"primary"})]),default:o(()=>[t(P,{label:"\u9996\u9801",icon:"home",to:"/"}),t(P,{label:"\u5E38\u898BQ&A",icon:"help_center"})]),_:1})])]),t(K,{height:1300,speed:.5},{media:o(()=>[as]),content:o(v=>[s("div",{class:"absolute column items-center",style:G({opacity:.8+(1-v.percentScrolled)*.55,top:v.percentScrolled*20+"%",left:0,right:0})},[s("div",ts,[s("div",os,[s("div",cs,[s("div",ls,[t(i,null,{default:o(()=>[s("img",{src:`https://source.boringavatars.com/beam/256/${d(a).value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`},null,8,ns)]),_:1})]),is])]),s("div",ds,[s("div",rs,[_s,s("div",fs,[t(i,null,{default:o(()=>[s("img",{src:`https://source.boringavatars.com/beam/256/${d(a).value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`},null,8,us)]),_:1})])])]),s("div",vs,[s("div",hs,[s("div",bs,[t(i,null,{default:o(()=>[s("img",{src:`https://source.boringavatars.com/beam/256/${d(a).value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`},null,8,ms)]),_:1})]),gs])]),s("div",ps,[s("div",ws,[xs,s("div",qs,[t(i,null,{default:o(()=>[s("img",{src:`https://source.boringavatars.com/beam/256/${d(a).value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`},null,8,$s)]),_:1})])])]),s("div",ys,[s("div",Ss,[s("div",Qs,[t(i,null,{default:o(()=>[s("img",{src:`https://source.boringavatars.com/beam/256/${d(a).value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`},null,8,Es)]),_:1})]),As])]),s("div",Bs,[s("div",Hs,[Ts,s("div",zs,[t(i,null,{default:o(()=>[s("img",{src:`https://source.boringavatars.com/beam/256/${d(a).value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`},null,8,Is)]),_:1})])])]),s("div",ks,[s("div",Ns,[s("div",Ps,[t(i,null,{default:o(()=>[s("img",{src:`https://source.boringavatars.com/beam/256/${d(a).value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`},null,8,Ls)]),_:1})]),Os])]),s("div",Rs,[s("div",Vs,[Cs,s("div",Fs,[t(i,null,{default:o(()=>[s("img",{src:`https://source.boringavatars.com/beam/256/${d(a).value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`},null,8,Us)]),_:1})])])]),s("div",Ms,[s("div",Ws,[s("div",js,[t(i,null,{default:o(()=>[s("img",{src:`https://source.boringavatars.com/beam/256/${d(a).value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`},null,8,Ds)]),_:1})]),Gs])]),s("div",Js,[s("div",Ks,[Xs,s("div",Ys,[t(i,null,{default:o(()=>[s("img",{src:`https://source.boringavatars.com/beam/256/${d(a).value}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`},null,8,Zs)]),_:1})])])])])],4)]),_:1},8,["speed"])])]))}};export{ae as default};
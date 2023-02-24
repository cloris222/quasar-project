import{c as D,b6 as Ue,b7 as Ct,k as Ge,G as qt,H as kt,r as F,av as Ot,w as J,B as Qe,h,C as ne,E as It,g as Ke,V as p,b8 as jt,b9 as Tt,_ as Vt,aJ as $t}from"./index.e57dcb35.js";import{u as Ft}from"./use-cache.b0833c75.js";import{b as Et,j as At,i as Nt}from"./use-quasar.f5da597e.js";import{p as Y}from"./format.3e32b8d9.js";import{Q as pt}from"./QDialog.88e85925.js";const R=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Zt(e,r,s){return Object.prototype.toString.call(e)==="[object Date]"&&(s=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),Rt(qe(e,r,s))}function Pe(e,r,s){return tt(Pt(e,r,s))}function Bt(e){return Qt(e)===0}function ve(e,r){return r<=6?31:r<=11||Bt(e)?30:29}function Qt(e){const r=R.length;let s=R[0],u,c,o,y,l;if(e<s||e>=R[r-1])throw new Error("Invalid Jalaali year "+e);for(l=1;l<r&&(u=R[l],c=u-s,!(e<u));l+=1)s=u;return y=e-s,c-y<6&&(y=y-c+_(c+4,33)*33),o=V(V(y+1,33)-1,4),o===-1&&(o=4),o}function et(e,r){const s=R.length,u=e+621;let c=-14,o=R[0],y,l,m,C,v;if(e<o||e>=R[s-1])throw new Error("Invalid Jalaali year "+e);for(v=1;v<s&&(y=R[v],l=y-o,!(e<y));v+=1)c=c+_(l,33)*8+_(V(l,33),4),o=y;C=e-o,c=c+_(C,33)*8+_(V(C,33)+3,4),V(l,33)===4&&l-C===4&&(c+=1);const M=_(u,4)-_((_(u,100)+1)*3,4)-150,E=20+c-M;return r||(l-C<6&&(C=C-l+_(l+4,33)*33),m=V(V(C+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:u,march:E}}function Pt(e,r,s){const u=et(e,!0);return qe(u.gy,3,u.march)+(r-1)*31-_(r,7)*(r-7)+s-1}function Rt(e){const r=tt(e).gy;let s=r-621,u,c,o;const y=et(s,!1),l=qe(r,3,y.march);if(o=e-l,o>=0){if(o<=185)return c=1+_(o,31),u=V(o,31)+1,{jy:s,jm:c,jd:u};o-=186}else s-=1,o+=179,y.leap===1&&(o+=1);return c=7+_(o,30),u=V(o,30)+1,{jy:s,jm:c,jd:u}}function qe(e,r,s){let u=_((e+_(r-8,6)+100100)*1461,4)+_(153*V(r+9,12)+2,5)+s-34840408;return u=u-_(_(e+100100+_(r-8,6),100)*3,4)+752,u}function tt(e){let r=4*e+139361631;r=r+_(_(4*e+183187720,146097)*3,4)*4-3908;const s=_(V(r,1461),4)*5+308,u=_(V(s,153),5)+1,c=V(_(s,153),12)+1;return{gy:_(r,1461)-100100+_(8-c,6),gm:c,gd:u}}function _(e,r){return~~(e/r)}function V(e,r){return e-~~(e/r)*r}const Lt=["gregorian","persian"],zt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Lt.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Xt=["update:modelValue"];function Q(e){return e.year+"/"+Y(e.month)+"/"+Y(e.day)}function Jt(e,r){const s=D(()=>e.disable!==!0&&e.readonly!==!0),u=D(()=>e.editable===!0?0:-1),c=D(()=>{const l=[];return e.color!==void 0&&l.push(`bg-${e.color}`),e.textColor!==void 0&&l.push(`text-${e.textColor}`),l.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function y(l){const m=new Date,C=l===!0?null:0;if(e.calendar==="persian"){const v=Zt(m);return{year:v.jy,month:v.jm,day:v.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:C,minute:C,second:C,millisecond:C}}return{editable:s,tabindex:u,headerClass:c,getLocale:o,getCurrentDate:y}}const at=864e5,Wt=36e5,Ce=6e4,nt="YYYY-MM-DDTHH:mm:ss.SSSZ",Ut=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,Gt=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Se={};function Kt(e,r){const s="("+r.days.join("|")+")",u=e+s;if(Se[u]!==void 0)return Se[u];const c="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",y="("+r.monthsShort.join("|")+")",l={};let m=0;const C=e.replace(Gt,M=>{switch(m++,M){case"YY":return l.YY=m,"(-?\\d{1,2})";case"YYYY":return l.YYYY=m,"(-?\\d{1,4})";case"M":return l.M=m,"(\\d{1,2})";case"MM":return l.M=m,"(\\d{2})";case"MMM":return l.MMM=m,y;case"MMMM":return l.MMMM=m,o;case"D":return l.D=m,"(\\d{1,2})";case"Do":return l.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return l.D=m,"(\\d{2})";case"H":return l.H=m,"(\\d{1,2})";case"HH":return l.H=m,"(\\d{2})";case"h":return l.h=m,"(\\d{1,2})";case"hh":return l.h=m,"(\\d{2})";case"m":return l.m=m,"(\\d{1,2})";case"mm":return l.m=m,"(\\d{2})";case"s":return l.s=m,"(\\d{1,2})";case"ss":return l.s=m,"(\\d{2})";case"S":return l.S=m,"(\\d{1})";case"SS":return l.S=m,"(\\d{2})";case"SSS":return l.S=m,"(\\d{3})";case"A":return l.A=m,"(AM|PM)";case"a":return l.a=m,"(am|pm)";case"aa":return l.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return c;case"dddd":return s;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return l.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return l.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return l.X=m,"(-?\\d+)";case"x":return l.x=m,"(-?\\d{4,})";default:return m--,M[0]==="["&&(M=M.substring(1,M.length-1)),M.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),v={map:l,regex:new RegExp("^"+C)};return Se[u]=v,v}function rt(e,r){return e!==void 0?e:r!==void 0?r.date:Ct.date}function Re(e,r=""){const s=e>0?"-":"+",u=Math.abs(e),c=Math.floor(u/60),o=u%60;return s+Y(c)+r+Y(o)}function ea(e,r,s,u,c){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(c!==void 0&&Object.assign(o,c),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=nt);const y=rt(s,Ue.props),l=y.months,m=y.monthsShort,{regex:C,map:v}=Kt(r,y),M=e.match(C);if(M===null)return o;let E="";if(v.X!==void 0||v.x!==void 0){const I=parseInt(M[v.X!==void 0?v.X:v.x],10);if(isNaN(I)===!0||I<0)return o;const j=new Date(I*(v.X!==void 0?1e3:1));o.year=j.getFullYear(),o.month=j.getMonth()+1,o.day=j.getDate(),o.hour=j.getHours(),o.minute=j.getMinutes(),o.second=j.getSeconds(),o.millisecond=j.getMilliseconds()}else{if(v.YYYY!==void 0)o.year=parseInt(M[v.YYYY],10);else if(v.YY!==void 0){const I=parseInt(M[v.YY],10);o.year=I<0?I:2e3+I}if(v.M!==void 0){if(o.month=parseInt(M[v.M],10),o.month<1||o.month>12)return o}else v.MMM!==void 0?o.month=m.indexOf(M[v.MMM])+1:v.MMMM!==void 0&&(o.month=l.indexOf(M[v.MMMM])+1);if(v.D!==void 0){if(o.day=parseInt(M[v.D],10),o.year===null||o.month===null||o.day<1)return o;const I=u!=="persian"?new Date(o.year,o.month,0).getDate():ve(o.year,o.month);if(o.day>I)return o}v.H!==void 0?o.hour=parseInt(M[v.H],10)%24:v.h!==void 0&&(o.hour=parseInt(M[v.h],10)%12,(v.A&&M[v.A]==="PM"||v.a&&M[v.a]==="pm"||v.aa&&M[v.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),v.m!==void 0&&(o.minute=parseInt(M[v.m],10)%60),v.s!==void 0&&(o.second=parseInt(M[v.s],10)%60),v.S!==void 0&&(o.millisecond=parseInt(M[v.S],10)*10**(3-M[v.S].length)),(v.Z!==void 0||v.ZZ!==void 0)&&(E=v.Z!==void 0?M[v.Z].replace(":",""):M[v.ZZ],o.timezoneOffset=(E[0]==="+"?-1:1)*(60*E.slice(1,3)+1*E.slice(3,5)))}return o.dateHash=Y(o.year,6)+"/"+Y(o.month)+"/"+Y(o.day),o.timeHash=Y(o.hour)+":"+Y(o.minute)+":"+Y(o.second)+E,o}function Le(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const s=new Date(r.getFullYear(),0,4);s.setDate(s.getDate()-(s.getDay()+6)%7+3);const u=r.getTimezoneOffset()-s.getTimezoneOffset();r.setHours(r.getHours()-u);const c=(r-s)/(at*7);return 1+Math.floor(c)}function Z(e,r,s){const u=new Date(e),c=`set${s===!0?"UTC":""}`;switch(r){case"year":case"years":u[`${c}Month`](0);case"month":case"months":u[`${c}Date`](1);case"day":case"days":case"date":u[`${c}Hours`](0);case"hour":case"hours":u[`${c}Minutes`](0);case"minute":case"minutes":u[`${c}Seconds`](0);case"second":case"seconds":u[`${c}Milliseconds`](0)}return u}function de(e,r,s){return(e.getTime()-e.getTimezoneOffset()*Ce-(r.getTime()-r.getTimezoneOffset()*Ce))/s}function ot(e,r,s="days"){const u=new Date(e),c=new Date(r);switch(s){case"years":case"year":return u.getFullYear()-c.getFullYear();case"months":case"month":return(u.getFullYear()-c.getFullYear())*12+u.getMonth()-c.getMonth();case"days":case"day":case"date":return de(Z(u,"day"),Z(c,"day"),at);case"hours":case"hour":return de(Z(u,"hour"),Z(c,"hour"),Wt);case"minutes":case"minute":return de(Z(u,"minute"),Z(c,"minute"),Ce);case"seconds":case"second":return de(Z(u,"second"),Z(c,"second"),1e3)}}function ze(e){return ot(e,Z(e,"year"),"days")+1}function Xe(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const Je={YY(e,r,s){const u=this.YYYY(e,r,s)%100;return u>=0?Y(u):"-"+Y(Math.abs(u))},YYYY(e,r,s){return s!=null?s:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return Y(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return Xe(this.Q(e))},D(e){return e.getDate()},Do(e){return Xe(e.getDate())},DD(e){return Y(e.getDate())},DDD(e){return ze(e)},DDDD(e){return Y(ze(e),3)},d(e){return e.getDay()},dd(e,r){return this.dddd(e,r).slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return Le(e)},ww(e){return Y(Le(e))},H(e){return e.getHours()},HH(e){return Y(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return Y(this.h(e))},m(e){return e.getMinutes()},mm(e){return Y(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return Y(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return Y(Math.floor(e.getMilliseconds()/10))},SSS(e){return Y(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,r,s,u){const c=u==null?e.getTimezoneOffset():u;return Re(c,":")},ZZ(e,r,s,u){const c=u==null?e.getTimezoneOffset():u;return Re(c)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function ta(e,r,s,u,c){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=nt);const y=rt(s,Ue.props);return r.replace(Ut,(l,m)=>l in Je?Je[l](o,y,u,c):m===void 0?l:m.split("\\]").join("]"))}const X=20,aa=["Calendar","Years","Months"],We=e=>aa.includes(e),He=e=>/^-?[\d]+\/[0-1]\d$/.test(e),ee=" \u2014 ";function P(e){return e.year+"/"+Y(e.month)}var ia=Ge({name:"QDate",props:{...zt,...Et,...qt,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:He},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:He},navigationMaxYearMonth:{type:String,validator:He},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:We}},emits:[...Xt,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:s}){const{proxy:u}=Ke(),{$q:c}=u,o=kt(e,c),{getCache:y}=Ft(),{tabindex:l,headerClass:m,getLocale:C,getCurrentDate:v}=Jt(e,c);let M;const E=At(e),I=Nt(E),j=F(null),x=F(Fe()),S=F(C()),lt=D(()=>Fe()),ut=D(()=>C()),N=D(()=>v()),g=F(Ee(x.value,S.value)),T=F(e.defaultView),ke=c.lang.rtl===!0?"right":"left",re=F(ke.value),fe=F(ke.value),me=g.value.year,oe=F(me-me%X-(me<0?X:0)),q=F(null),it=D(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),L=D(()=>e.color||"primary"),W=D(()=>e.textColor||"white"),le=D(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),he=D(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),A=D(()=>he.value.filter(t=>typeof t=="string").map(t=>De(t,x.value,S.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),U=D(()=>{const t=a=>De(a,x.value,S.value);return he.value.filter(a=>Ot(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ue=D(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=Pe(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),ge=D(()=>e.calendar==="persian"?Q:(t,a,n)=>ta(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?x.value:a,n===void 0?S.value:n,t.year,t.timezoneOffset)),te=D(()=>A.value.length+U.value.reduce((t,a)=>t+1+ot(ue.value(a.to),ue.value(a.from)),0)),Oe=D(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length>0)return e.title;if(q.value!==null){const n=q.value.init,d=ue.value(n);return S.value.daysShort[d.getDay()]+", "+S.value.monthsShort[n.month-1]+" "+n.day+ee+"?"}if(te.value===0)return ee;if(te.value>1)return`${te.value} ${S.value.pluralDay}`;const t=A.value[0],a=ue.value(t);return isNaN(a.valueOf())===!0?ee:S.value.headerTitle!==void 0?S.value.headerTitle(a,t):S.value.daysShort[a.getDay()]+", "+S.value.monthsShort[t.month-1]+" "+t.day}),st=D(()=>A.value.concat(U.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),ct=D(()=>A.value.concat(U.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Ie=D(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length>0)return e.subtitle;if(te.value===0)return ee;if(te.value>1){const t=st.value,a=ct.value,n=S.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+ee+n[a.month-1]+" ":t.month!==a.month?ee+n[a.month-1]:"")+" "+a.year}return A.value[0].year}),ie=D(()=>{const t=[c.iconSet.datetime.arrowLeft,c.iconSet.datetime.arrowRight];return c.lang.rtl===!0?t.reverse():t}),je=D(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):S.value.firstDayOfWeek),dt=D(()=>{const t=S.value.daysShort,a=je.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),B=D(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():ve(t.year,t.month)}),vt=D(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),k=D(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),O=D(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),ye=D(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return k.value!==null&&k.value.year>=g.value.year&&(t.year.prev=!1,k.value.year===g.value.year&&k.value.month>=g.value.month&&(t.month.prev=!1)),O.value!==null&&O.value.year<=g.value.year&&(t.year.next=!1,O.value.year===g.value.year&&O.value.month<=g.value.month&&(t.month.next=!1)),t}),se=D(()=>{const t={};return A.value.forEach(a=>{const n=P(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Te=D(()=>{const t={};return U.value.forEach(a=>{const n=P(a.from),d=P(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===d?a.to.day:void 0,range:a}),n<d){let i;const{year:w,month:f}=a.from,b=f<12?{year:w,month:f+1}:{year:w+1,month:1};for(;(i=P(b))<=d;)t[i]===void 0&&(t[i]=[]),t[i].push({from:void 0,to:i===d?a.to.day:void 0,range:a}),b.month++,b.month>12&&(b.year++,b.month=1)}}),t}),ae=D(()=>{if(q.value===null)return;const{init:t,initHash:a,final:n,finalHash:d}=q.value,[i,w]=a<=d?[t,n]:[n,t],f=P(i),b=P(w);if(f!==$.value&&b!==$.value)return;const H={};return f===$.value?(H.from=i.day,H.includeFrom=!0):H.from=1,b===$.value?(H.to=w.day,H.includeTo=!0):H.to=B.value,H}),$=D(()=>P(g.value)),ft=D(()=>{const t={};if(e.options===void 0){for(let n=1;n<=B.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=B.value;n++){const d=$.value+"/"+Y(n);t[n]=a(d)}return t}),mt=D(()=>{const t={};if(e.events===void 0)for(let a=1;a<=B.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=B.value;n++){const d=$.value+"/"+Y(n);t[n]=a(d)===!0&&vt.value(d)}}return t}),ht=D(()=>{let t,a;const{year:n,month:d}=g.value;if(e.calendar!=="persian")t=new Date(n,d-1,1),a=new Date(n,d-1,0).getDate();else{const i=Pe(n,d,1);t=new Date(i.gy,i.gm-1,i.gd);let w=d-1,f=n;w===0&&(w=12,f--),a=ve(f,w)}return{days:t.getDay()-je.value-1,endDay:a}}),Ve=D(()=>{const t=[],{days:a,endDay:n}=ht.value,d=a<0?a+7:a;if(d<6)for(let f=n-d;f<=n;f++)t.push({i:f,fill:!0});const i=t.length;for(let f=1;f<=B.value;f++){const b={i:f,event:mt.value[f],classes:[]};ft.value[f]===!0&&(b.in=!0,b.flat=!0),t.push(b)}if(se.value[$.value]!==void 0&&se.value[$.value].forEach(f=>{const b=i+f-1;Object.assign(t[b],{selected:!0,unelevated:!0,flat:!1,color:L.value,textColor:W.value})}),Te.value[$.value]!==void 0&&Te.value[$.value].forEach(f=>{if(f.from!==void 0){const b=i+f.from-1,H=i+(f.to||B.value)-1;for(let xe=b;xe<=H;xe++)Object.assign(t[xe],{range:f.range,unelevated:!0,color:L.value,textColor:W.value});Object.assign(t[b],{rangeFrom:!0,flat:!1}),f.to!==void 0&&Object.assign(t[H],{rangeTo:!0,flat:!1})}else if(f.to!==void 0){const b=i+f.to-1;for(let H=i;H<=b;H++)Object.assign(t[H],{range:f.range,unelevated:!0,color:L.value,textColor:W.value});Object.assign(t[b],{flat:!1,rangeTo:!0})}else{const b=i+B.value-1;for(let H=i;H<=b;H++)Object.assign(t[H],{range:f.range,unelevated:!0,color:L.value,textColor:W.value})}}),ae.value!==void 0){const f=i+ae.value.from-1,b=i+ae.value.to-1;for(let H=f;H<=b;H++)t[H].color=L.value,t[H].editRange=!0;ae.value.includeFrom===!0&&(t[f].editRangeFrom=!0),ae.value.includeTo===!0&&(t[b].editRangeTo=!0)}g.value.year===N.value.year&&g.value.month===N.value.month&&(t[i+N.value.day-1].today=!0);const w=t.length%7;if(w>0){const f=7-w;for(let b=1;b<=f;b++)t.push({i:b,fill:!0})}return t.forEach(f=>{let b="q-date__calendar-item ";f.fill===!0?b+="q-date__calendar-item--fill":(b+=`q-date__calendar-item--${f.in===!0?"in":"out"}`,f.range!==void 0&&(b+=` q-date__range${f.rangeTo===!0?"-to":f.rangeFrom===!0?"-from":""}`),f.editRange===!0&&(b+=` q-date__edit-range${f.editRangeFrom===!0?"-from":""}${f.editRangeTo===!0?"-to":""}`),(f.range!==void 0||f.editRange===!0)&&(b+=` text-${f.color}`)),f.classes=b}),t}),gt=D(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});J(()=>e.modelValue,t=>{if(M===t)M=0;else{const{year:a,month:n}=Ee(x.value,S.value);G(a,n)}}),J(T,()=>{j.value!==null&&u.$el.contains(document.activeElement)===!0&&j.value.focus()}),J(()=>g.value.year,t=>{s("navigation",{year:t,month:g.value.month})}),J(()=>g.value.month,t=>{s("navigation",{year:g.value.year,month:t})}),J(lt,t=>{Be(t,S.value,"mask"),x.value=t}),J(ut,t=>{Be(x.value,t,"locale"),S.value=t});function $e(){const t=N.value,a=se.value[P(t)];(a===void 0||a.includes(t.day)===!1)&&we(t),Me(t.year,t.month)}function yt(t){We(t)===!0&&(T.value=t)}function Mt(t,a){["month","year"].includes(t)&&(t==="month"?Ne:be)(a===!0?-1:1)}function Me(t,a){T.value="Calendar",G(t,a)}function Dt(t,a){if(e.range===!1||!t){q.value=null;return}const n=Object.assign({...g.value},t),d=a!==void 0?Object.assign({...g.value},a):n;q.value={init:n,initHash:Q(n),final:d,finalHash:Q(d)},Me(n.year,n.month)}function Fe(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function De(t,a,n){return ea(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ee(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Ae();const d=n[n.length-1],i=De(d.from!==void 0?d.from:d,t,a);return i.dateHash===null?Ae():i}function Ae(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=N.value!==void 0?N.value:v();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+Y(a)+"/01"}}function Ne(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),G(a,n),le.value===!0&&ce("month")}function be(t){const a=Number(g.value.year)+t;G(a,g.value.month),le.value===!0&&ce("year")}function bt(t){G(t,g.value.month),T.value=e.defaultView==="Years"?"Months":"Calendar",le.value===!0&&ce("year")}function wt(t){G(g.value.year,t),T.value="Calendar",le.value===!0&&ce("month")}function Yt(t,a){const n=se.value[a];(n!==void 0&&n.includes(t.day)===!0?Ye:we)(t)}function z(t){return{year:t.year,month:t.month,day:t.day}}function G(t,a){k.value!==null&&t<=k.value.year&&(t=k.value.year,a<k.value.month&&(a=k.value.month)),O.value!==null&&t>=O.value.year&&(t=O.value.year,a>O.value.month&&(a=O.value.month));const n=t+"/"+Y(a)+"/01";n!==g.value.dateHash&&(re.value=g.value.dateHash<n==(c.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(fe.value=re.value),Qe(()=>{oe.value=t-t%X-(t<0?X:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:n})}))}function pe(t,a,n){const d=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;M=d;const{reason:i,details:w}=Ze(a,n);s("update:modelValue",d,i,w)}function ce(t){const a=A.value[0]!==void 0&&A.value[0].dateHash!==null?{...A.value[0]}:{...g.value};Qe(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():ve(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const d=K(a);M=d;const{details:i}=Ze("",a);s("update:modelValue",d,t,i)})}function Ze(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...z(a.target),from:z(a.from),to:z(a.to)}}:{reason:`${t}-day`,details:z(a)}}function K(t,a,n){return t.from!==void 0?{from:ge.value(t.from,a,n),to:ge.value(t.to,a,n)}:ge.value(t,a,n)}function we(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=Q(t.from),d=Q(t.to),i=A.value.filter(f=>f.dateHash<n||f.dateHash>d),w=U.value.filter(({from:f,to:b})=>b.dateHash<n||f.dateHash>d);a=i.concat(w).concat(t).map(f=>K(f))}else{const n=he.value.slice();n.push(K(t)),a=n}else a=K(t);pe(a,"add",t)}function Ye(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=K(t);t.from!==void 0?a=e.modelValue.filter(d=>d.from!==void 0?d.from!==n.from&&d.to!==n.to:!0):a=e.modelValue.filter(d=>d!==n),a.length===0&&(a=null)}pe(a,"remove",t)}function Be(t,a,n){const d=A.value.concat(U.value).map(i=>K(i,t,a)).filter(i=>i.from!==void 0?i.from.dateHash!==null&&i.to.dateHash!==null:i.dateHash!==null);s("update:modelValue",(e.multiple===!0?d:d[0])||null,n)}function _t(){if(e.minimal!==!0)return h("div",{class:"q-date__header "+m.value},[h("div",{class:"relative-position"},[h(ne,{name:"q-transition--fade"},()=>h("div",{key:"h-yr-"+Ie.value,class:"q-date__header-subtitle q-date__header-link "+(T.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:l.value,...y("vY",{onClick(){T.value="Years"},onKeyup(t){t.keyCode===13&&(T.value="Years")}})},[Ie.value]))]),h("div",{class:"q-date__header-title relative-position flex no-wrap"},[h("div",{class:"relative-position col"},[h(ne,{name:"q-transition--fade"},()=>h("div",{key:"h-sub"+Oe.value,class:"q-date__header-title-label q-date__header-link "+(T.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:l.value,...y("vC",{onClick(){T.value="Calendar"},onKeyup(t){t.keyCode===13&&(T.value="Calendar")}})},[Oe.value]))]),e.todayBtn===!0?h(p,{class:"q-date__header-today self-start",icon:c.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:l.value,onClick:$e}):null])])}function _e({label:t,type:a,key:n,dir:d,goTo:i,boundaries:w,cls:f}){return[h("div",{class:"row items-center q-date__arrow"},[h(p,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[0],tabindex:l.value,disable:w.prev===!1,...y("go-#"+a,{onClick(){i(-1)}})})]),h("div",{class:"relative-position overflow-hidden flex flex-center"+f},[h(ne,{name:"q-transition--jump-"+d},()=>h("div",{key:n},[h(p,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:l.value,...y("view#"+a,{onClick:()=>{T.value=a}})})]))]),h("div",{class:"row items-center q-date__arrow"},[h(p,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[1],tabindex:l.value,disable:w.next===!1,...y("go+#"+a,{onClick(){i(1)}})})])]}const xt={Calendar:()=>[h("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[h("div",{class:"q-date__navigation row items-center no-wrap"},_e({label:S.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:re.value,goTo:Ne,boundaries:ye.value.month,cls:" col"}).concat(_e({label:g.value.year,type:"Years",key:g.value.year,dir:fe.value,goTo:be,boundaries:ye.value.year,cls:""}))),h("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},dt.value.map(t=>h("div",{class:"q-date__calendar-item"},[h("div",t)]))),h("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[h(ne,{name:"q-transition--slide-"+re.value},()=>h("div",{key:$.value,class:"q-date__calendar-days fit"},Ve.value.map(t=>h("div",{class:t.classes},[t.in===!0?h(p,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:l.value,...y("day#"+t.i,{onClick:()=>{St(t.i)},onMouseover:()=>{Ht(t.i)}})},t.event!==!1?()=>h("div",{class:"q-date__event bg-"+t.event}):null):h("div",""+t.i)]))))])])],Months(){const t=g.value.year===N.value.year,a=d=>k.value!==null&&g.value.year===k.value.year&&k.value.month>d||O.value!==null&&g.value.year===O.value.year&&O.value.month<d,n=S.value.monthsShort.map((d,i)=>{const w=g.value.month===i+1;return h("div",{class:"q-date__months-item flex flex-center"},[h(p,{class:t===!0&&N.value.month===i+1?"q-date__today":null,flat:w!==!0,label:d,unelevated:w,color:w===!0?L.value:null,textColor:w===!0?W.value:null,tabindex:l.value,disable:a(i+1),...y("month#"+i,{onClick:()=>{wt(i+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(h("div",{class:"row no-wrap full-width"},[_e({label:g.value.year,type:"Years",key:g.value.year,dir:fe.value,goTo:be,boundaries:ye.value.year,cls:" col"})])),h("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=oe.value,a=t+X,n=[],d=i=>k.value!==null&&k.value.year>i||O.value!==null&&O.value.year<i;for(let i=t;i<=a;i++){const w=g.value.year===i;n.push(h("div",{class:"q-date__years-item flex flex-center"},[h(p,{key:"yr"+i,class:N.value.year===i?"q-date__today":null,flat:!w,label:i,dense:!0,unelevated:w,color:w===!0?L.value:null,textColor:w===!0?W.value:null,tabindex:l.value,disable:d(i),...y("yr#"+i,{onClick:()=>{bt(i)}})})]))}return h("div",{class:"q-date__view q-date__years flex flex-center"},[h("div",{class:"col-auto"},[h(p,{round:!0,dense:!0,flat:!0,icon:ie.value[0],tabindex:l.value,disable:d(t),...y("y-",{onClick:()=>{oe.value-=X}})})]),h("div",{class:"q-date__years-content col self-stretch row items-center"},n),h("div",{class:"col-auto"},[h(p,{round:!0,dense:!0,flat:!0,icon:ie.value[1],tabindex:l.value,disable:d(a),...y("y+",{onClick:()=>{oe.value+=X}})})])])}};function St(t){const a={...g.value,day:t};if(e.range===!1){Yt(a,$.value);return}if(q.value===null){const n=Ve.value.find(i=>i.fill!==!0&&i.i===t);if(e.noUnset!==!0&&n.range!==void 0){Ye({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){Ye(a);return}const d=Q(a);q.value={init:a,initHash:d,final:a,finalHash:d},s("rangeStart",z(a))}else{const n=q.value.initHash,d=Q(a),i=n<=d?{from:q.value.init,to:a}:{from:a,to:q.value.init};q.value=null,we(n===d?a:{target:a,...i}),s("rangeEnd",{from:z(i.from),to:z(i.to)})}}function Ht(t){if(q.value!==null){const a={...g.value,day:t};Object.assign(q.value,{final:a,finalHash:Q(a)})}}return Object.assign(u,{setToday:$e,setView:yt,offsetCalendar:Mt,setCalendarTo:Me,setEditingRange:Dt}),()=>{const t=[h("div",{class:"q-date__content col relative-position"},[h(ne,{name:"q-transition--fade"},xt[T.value])])],a=It(r.default);return a!==void 0&&t.push(h("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&I(t,"push"),h("div",{class:it.value,...gt.value},[_t(),h("div",{ref:j,class:"q-date__main col column",tabindex:-1},t)])}}}),sa=Ge({name:"QPopupProxy",props:{...jt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:r,emit:s,attrs:u}){const{proxy:c}=Ke(),{$q:o}=c,y=F(!1),l=F(null),m=D(()=>parseInt(e.breakpoint,10)),{canShow:C}=Tt({showing:y});function v(){return o.screen.width<m.value||o.screen.height<m.value?"dialog":"menu"}const M=F(v()),E=D(()=>M.value==="menu"?{maxHeight:"99vh"}:{});J(()=>v(),x=>{y.value!==!0&&(M.value=x)});function I(x){y.value=!0,s("show",x)}function j(x){y.value=!1,M.value=v(),s("hide",x)}return Object.assign(c,{show(x){C(x)===!0&&l.value.show(x)},hide(x){l.value.hide(x)},toggle(x){l.value.toggle(x)}}),Vt(c,"currentComponent",()=>({type:M.value,ref:l.value})),()=>{const x={ref:l,...E.value,...u,onShow:I,onHide:j};let S;return M.value==="dialog"?S=pt:(S=$t,Object.assign(x,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),h(S,x,r.default)}}});export{sa as Q,ia as a};
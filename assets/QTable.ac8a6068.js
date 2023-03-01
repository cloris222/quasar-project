import{k as D,c,h as n,E as z,g as Q,bf as gt,ac as me,G as Se,H as ye,r as A,w as M,bg as mt,aZ as Oe,ay as De,o as Ee,a9 as St,a8 as yt,a4 as je,bh as ht,a0 as Ne,a1 as _t,_ as wt,bi as qt,aW as Fe,aw as ge,bj as $e,ax as Ct,B as Ae,bk as Pt,a5 as H,X as ee}from"./index.60a9a997.js";import{u as kt,a as xt,b as Rt,Q as Tt}from"./use-checkbox.630cc3d1.js";import{u as Bt,a as Ot,c as Qe,Q as Ft}from"./QSelect.2725495d.js";var cl=D({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const r=Q(),d=c(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return n("td",{class:d.value},z(l.default));const o=r.vnode.key,f=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(f===void 0)return;const{row:s}=e.props;return n("td",{class:d.value+f.__tdClass(s),style:f.__tdStyle(s)},z(l.default))}}}),$t=D({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:r}){const d=Q(),{proxy:{$q:o}}=d,f=s=>{r("click",s)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},z(l.default));let s,u;const v=d.vnode.key;if(v){if(s=e.props.colsMap[v],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const a=s.align==="right"?"unshift":"push";u=gt(l.default,[]),u[a](n(me,{class:s.__iconClass,name:o.iconSet.table.arrowUp}))}else u=z(l.default);const S={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:a=>{s.sortable===!0&&e.props.sort(s),f(a)}};return n("th",S,u)}}});const Lt=["horizontal","vertical","cell","none"];var Mt=D({name:"QMarkupTable",props:{...Se,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Lt.includes(e)}},setup(e,{slots:l}){const r=Q(),d=ye(e,r.proxy.$q),o=c(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(d.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:o.value},[n("table",{class:"q-table"},z(l.default))])}});function He(e,l){return n("div",e,[n("table",{class:"q-table"},l)])}const Vt={list:ht,table:Mt},Dt=["list","table","__qtable"];var Et=D({name:"QVirtualScroll",props:{...Bt,type:{type:String,default:"list",validator:e=>Dt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:r}){let d;const o=A(null),f=c(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:u,padVirtualScroll:v,onVirtualScrollEvt:S}=Ot({virtualScrollLength:f,getVirtualScrollTarget:C,getVirtualScrollEl:q}),a=c(()=>{if(f.value===0)return[];const O=(F,x)=>({index:s.value.from+x,item:F});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(O):e.itemsFn(s.value.from,s.value.to-s.value.from).map(O)}),m=c(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=c(()=>e.scrollTarget!==void 0?{}:{tabindex:0});M(f,()=>{u()}),M(()=>e.scrollTarget,()=>{h(),_()});function q(){return o.value.$el||o.value}function C(){return d}function _(){d=mt(q(),e.scrollTarget),d.addEventListener("scroll",S,Oe.passive)}function h(){d!==void 0&&(d.removeEventListener("scroll",S,Oe.passive),d=void 0)}function B(){let O=v(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),Ne(l.after,O)}return De(()=>{u()}),Ee(()=>{_()}),St(()=>{_()}),yt(()=>{h()}),je(()=>{h()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?He({ref:o,class:"q-table__middle "+m.value},B()):n(Vt[e.type],{...r,ref:o,class:[r.class,m.value],...w.value},B)}}});const jt={xs:2,sm:4,md:6,lg:10,xl:14};function Le(e,l,r){return{transform:l===!0?`translateX(${r.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Nt=D({name:"QLinearProgress",props:{...Se,..._t,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:r}=Q(),d=ye(e,r.$q),o=wt(e,jt),f=c(()=>e.indeterminate===!0||e.query===!0),s=c(()=>e.reverse!==e.query),u=c(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),S=c(()=>Le(e.buffer!==void 0?e.buffer:1,s.value,r.$q)),a=c(()=>`with${e.instantFeedback===!0?"out":""}-transition`),m=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${a.value} q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=c(()=>Le(f.value===!0?1:e.value,s.value,r.$q)),q=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${a.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),C=c(()=>({width:`${e.value*100}%`})),_=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${a.value}`);return()=>{const h=[n("div",{class:m.value,style:S.value}),n("div",{class:q.value,style:w.value})];return e.stripe===!0&&f.value===!1&&h.push(n("div",{class:_.value,style:C.value})),n("div",{class:v.value,style:u.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ne(l.default,h))}}});const At=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var be=D({name:"QCheckbox",props:kt,emits:xt,setup(e){function l(r,d){const o=c(()=>(r.value===!0?e.checkedIcon:d.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>o.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(me,{class:"q-checkbox__icon",name:o.value})])]:[At]}return Rt("checkbox",l)}});let p=0;const Qt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ht=["update:fullscreen","fullscreen"];function pt(){const e=Q(),{props:l,emit:r,proxy:d}=e;let o,f,s;const u=A(!1);qt(e)===!0&&M(()=>d.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&a()}),M(()=>l.fullscreen,m=>{u.value!==m&&v()}),M(u,m=>{r("update:fullscreen",m),r("fullscreen",m)});function v(){u.value===!0?a():S()}function S(){u.value!==!0&&(u.value=!0,s=d.$el.parentNode,s.replaceChild(f,d.$el),document.body.appendChild(d.$el),p++,p===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:a},Fe.add(o))}function a(){u.value===!0&&(o!==void 0&&(Fe.remove(o),o=void 0),s.replaceChild(d.$el,f),u.value=!1,p=Math.max(0,p-1),p===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return De(()=>{f=document.createElement("span")}),Ee(()=>{l.fullscreen===!0&&S()}),je(a),Object.assign(d,{toggleFullscreen:v,setFullscreen:S,exitFullscreen:a}),{inFullscreen:u,toggleFullscreen:v}}function zt(e,l){return new Date(e)-new Date(l)}const It={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Ut(e,l,r,d){const o=c(()=>{const{sortBy:u}=l.value;return u&&r.value.find(v=>v.name===u)||null}),f=c(()=>e.sortMethod!==void 0?e.sortMethod:(u,v,S)=>{const a=r.value.find(q=>q.name===v);if(a===void 0||a.field===void 0)return u;const m=S===!0?-1:1,w=typeof a.field=="function"?q=>a.field(q):q=>q[a.field];return u.sort((q,C)=>{let _=w(q),h=w(C);return _==null?-1*m:h==null?1*m:a.sort!==void 0?a.sort(_,h,q,C)*m:ge(_)===!0&&ge(h)===!0?(_-h)*m:$e(_)===!0&&$e(h)===!0?zt(_,h)*m:typeof _=="boolean"&&typeof h=="boolean"?(_-h)*m:([_,h]=[_,h].map(B=>(B+"").toLocaleString().toLowerCase()),_<h?-1*m:_===h?0:m)})});function s(u){let v=e.columnSortOrder;if(Ct(u)===!0)u.sortOrder&&(v=u.sortOrder),u=u.name;else{const m=r.value.find(w=>w.name===u);m!==void 0&&m.sortOrder&&(v=m.sortOrder)}let{sortBy:S,descending:a}=l.value;S!==u?(S=u,a=v==="da"):e.binaryStateSort===!0?a=!a:a===!0?v==="ad"?S=null:a=!1:v==="ad"?a=!0:S=null,d({sortBy:S,descending:a,page:1})}return{columnToSort:o,computedSortMethod:f,sort:s}}const Wt={filter:[String,Object],filterMethod:Function};function Gt(e,l){const r=c(()=>e.filterMethod!==void 0?e.filterMethod:(d,o,f,s)=>{const u=o?o.toLowerCase():"";return d.filter(v=>f.some(S=>{const a=s(S,v)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(u)!==-1}))});return M(()=>e.filter,()=>{Ae(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:r}}function Kt(e,l){for(const r in l)if(l[r]!==e[r])return!1;return!0}function Me(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Xt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Zt(e,l){const{props:r,emit:d}=e,o=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:r.rowsPerPageOptions.length>0?r.rowsPerPageOptions[0]:5},r.pagination)),f=c(()=>{const a=r["onUpdate:pagination"]!==void 0?{...o.value,...r.pagination}:o.value;return Me(a)}),s=c(()=>f.value.rowsNumber!==void 0);function u(a){v({pagination:a,filter:r.filter})}function v(a={}){Ae(()=>{d("request",{pagination:a.pagination||f.value,filter:a.filter||r.filter,getCellValue:l})})}function S(a,m){const w=Me({...f.value,...a});if(Kt(f.value,w)===!0){s.value===!0&&m===!0&&u(w);return}if(s.value===!0){u(w);return}r.pagination!==void 0&&r["onUpdate:pagination"]!==void 0?d("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:f,isServerSide:s,requestServerInteraction:v,setPagination:S}}function Jt(e,l,r,d,o,f){const{props:s,emit:u,proxy:{$q:v}}=e,S=c(()=>d.value===!0?r.value.rowsNumber||0:f.value),a=c(()=>{const{page:x,rowsPerPage:R}=r.value;return(x-1)*R}),m=c(()=>{const{page:x,rowsPerPage:R}=r.value;return x*R}),w=c(()=>r.value.page===1),q=c(()=>r.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/r.value.rowsPerPage))),C=c(()=>m.value===0?!0:r.value.page>=q.value),_=c(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(R=>({label:R===0?v.lang.table.allRows:""+R,value:R})));M(q,(x,R)=>{if(x===R)return;const I=r.value.page;x&&!I?o({page:1}):x<I&&o({page:x})});function h(){o({page:1})}function B(){const{page:x}=r.value;x>1&&o({page:x-1})}function O(){const{page:x,rowsPerPage:R}=r.value;m.value>0&&x*R<S.value&&o({page:x+1})}function F(){o({page:q.value})}return s["onUpdate:pagination"]!==void 0&&u("update:pagination",{...r.value}),{firstRowIndex:a,lastRowIndex:m,isFirstPage:w,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:S,firstPage:h,prevPage:B,nextPage:O,lastPage:F}}const Yt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},el=["update:selected","selection"];function tl(e,l,r,d){const o=c(()=>{const C={};return e.selected.map(d.value).forEach(_=>{C[_]=!0}),C}),f=c(()=>e.selection!=="none"),s=c(()=>e.selection==="single"),u=c(()=>e.selection==="multiple"),v=c(()=>r.value.length>0&&r.value.every(C=>o.value[d.value(C)]===!0)),S=c(()=>v.value!==!0&&r.value.some(C=>o.value[d.value(C)]===!0)),a=c(()=>e.selected.length);function m(C){return o.value[C]===!0}function w(){l("update:selected",[])}function q(C,_,h,B){l("selection",{rows:_,added:h,keys:C,evt:B});const O=s.value===!0?h===!0?_:[]:h===!0?e.selected.concat(_):e.selected.filter(F=>C.includes(d.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:f,singleSelection:s,multipleSelection:u,allRowsSelected:v,someRowsSelected:S,rowsSelectedNumber:a,isRowSelected:m,clearSelection:w,updateSelection:q}}function Ve(e){return Array.isArray(e)?e.slice():[]}const ll={expanded:Array},al=["update:expanded"];function nl(e,l){const r=A(Ve(e.expanded));M(()=>e.expanded,s=>{r.value=Ve(s)});function d(s){return r.value.includes(s)}function o(s){e.expanded!==void 0?l("update:expanded",s):r.value=s}function f(s,u){const v=r.value.slice(),S=v.indexOf(s);u===!0?S===-1&&(v.push(s),o(v)):S!==-1&&(v.splice(S,1),o(v))}return{isRowExpanded:d,setExpanded:o,updateExpanded:f}}const rl={visibleColumns:Array};function ol(e,l,r){const d=c(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(v=>({name:v,label:v.toUpperCase(),field:v,align:ge(u[v])?"right":"left",sortable:!0})):[]}),o=c(()=>{const{sortBy:u,descending:v}=l.value;return(e.visibleColumns!==void 0?d.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):d.value).map(a=>{const m=a.align||"right",w=`text-${m}`;return{...a,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:w+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===u?` sorted ${v===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>w+" "+a.classes:q=>w+" "+a.classes(q):()=>w}})}),f=c(()=>{const u={};return o.value.forEach(v=>{u[v.name]=v}),u}),s=c(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(r.value===!0?1:0));return{colList:d,computedCols:o,computedColsMap:f,computedColspan:s}}const te="q-table__bottom row items-center",pe={};Qe.forEach(e=>{pe[e]={}});var dl=D({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...pe,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Se,...Qt,...rl,...Wt,...Xt,...ll,...Yt,...It},emits:["request","virtualScroll",...Ht,...al,...el],setup(e,{slots:l,emit:r}){const d=Q(),{proxy:{$q:o}}=d,f=ye(e,o),{inFullscreen:s,toggleFullscreen:u}=pt(),v=c(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=A(null),a=A(null),m=c(()=>e.grid!==!0&&e.virtualScroll===!0),w=c(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=c(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),C=c(()=>q.value+(e.loading===!0?" q-table--loading":""));M(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{m.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:_,computedPagination:h,isServerSide:B,requestServerInteraction:O,setPagination:F}=Zt(d,j),{computedFilterMethod:x}=Gt(e,F),{isRowExpanded:R,setExpanded:I,updateExpanded:ze}=nl(e,r),le=c(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:i,descending:b}=h.value;return e.filter&&(t=x.value(t,e.filter,$.value,j)),Ke.value!==null&&(t=Xe.value(e.rows===t?t.slice():t,i,b)),t}),he=c(()=>le.value.length),V=c(()=>{let t=le.value;if(B.value===!0)return t;const{rowsPerPage:i}=h.value;return i!==0&&(W.value===0&&e.rows!==t?t.length>G.value&&(t=t.slice(0,G.value)):t=t.slice(W.value,G.value)),t}),{hasSelectionMode:E,singleSelection:Ie,multipleSelection:_e,allRowsSelected:Ue,someRowsSelected:we,rowsSelectedNumber:ae,isRowSelected:ne,clearSelection:We,updateSelection:U}=tl(e,r,V,v),{colList:Ge,computedCols:$,computedColsMap:qe,computedColspan:Ce}=ol(e,h,E),{columnToSort:Ke,computedSortMethod:Xe,sort:re}=Ut(e,h,Ge,F),{firstRowIndex:W,lastRowIndex:G,isFirstPage:oe,isLastPage:ie,pagesNumber:K,computedRowsPerPageOptions:Ze,computedRowsNumber:X,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de}=Jt(d,_,h,B,F,he),Je=c(()=>V.value.length===0),Ye=c(()=>{const t={};return Qe.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){m.value===!0&&a.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?Te:null;if(m.value===!0){const b=l["top-row"],g=l["bottom-row"],y={default:k=>ke(k.item,l.body,k.index)};if(b!==void 0){const k=n("tbody",b({cols:$.value}));y.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(y.before=t);return g!==void 0&&(y.after=()=>n("tbody",g({cols:$.value}))),n(Et,{ref:a,class:e.tableClass,style:e.tableStyle,...Ye.value,scrollTarget:e.virtualScrollTarget,items:V.value,type:"__qtable",tableColspan:Ce.value,onVirtualScroll:at},y)}const i=[nt()];return t!==null&&i.unshift(t()),He({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function lt(t,i){if(a.value!==null){a.value.scrollTo(t,i);return}t=parseInt(t,10);const b=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(b!==null){const g=S.value.querySelector(".q-table__middle.scroll"),y=b.offsetTop-e.virtualScrollStickySizeStart,k=y<g.scrollTop?"decrease":"increase";g.scrollTop=y,r("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:k})}}function at(t){r("virtualScroll",t)}function Pe(){return[n(Nt,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function ke(t,i,b){const g=v.value(t),y=ne(g);if(i!==void 0)return i(xe({key:g,row:t,pageIndex:b,__trClass:y?"selected":""}));const k=l["body-cell"],P=$.value.map(T=>{const J=l[`body-cell-${T.name}`],Y=J!==void 0?J:k;return Y!==void 0?Y(rt({key:g,row:t,pageIndex:b,col:T})):n("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},j(T,t))});if(E.value===!0){const T=l["body-selection"],J=T!==void 0?T(ot({key:g,row:t,pageIndex:b})):[n(be,{modelValue:y,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(Y,bt)=>{U([g],[t],Y,bt)}})];P.unshift(n("td",{class:"q-table--col-auto-width"},J))}const L={key:g,class:{selected:y}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=T=>{r("RowClick",T,t,b)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=T=>{r("RowDblclick",T,t,b)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=T=>{r("RowContextmenu",T,t,b)}),n("tr",L,P)}function nt(){const t=l.body,i=l["top-row"],b=l["bottom-row"];let g=V.value.map((y,k)=>ke(y,t,k));return i!==void 0&&(g=i({cols:$.value}).concat(g)),b!==void 0&&(g=g.concat(b({cols:$.value}))),n("tbody",g)}function xe(t){return ve(t),t.cols=t.cols.map(i=>H({...i},"value",()=>j(i,t.row))),t}function rt(t){return ve(t),H(t,"value",()=>j(t.col,t.row)),t}function ot(t){return ve(t),t}function ve(t){Object.assign(t,{cols:$.value,colsMap:qe.value,sort:re,rowIndex:W.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),E.value===!0&&H(t,"selected",()=>ne(t.key),(i,b)=>{U([t.key],[t.row],i,b)}),H(t,"expand",()=>R(t.key),i=>{ze(t.key,i)})}function j(t,i){const b=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(b,i):b}const N=c(()=>({pagination:h.value,pagesNumber:K.value,isFirstPage:oe.value,isLastPage:ie.value,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,inFullscreen:s.value,toggleFullscreen:u}));function it(){const t=l.top,i=l["top-left"],b=l["top-right"],g=l["top-selection"],y=E.value===!0&&g!==void 0&&ae.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:k},[t(N.value)]);let P;if(y===!0?P=g(N.value).slice():(P=[],i!==void 0?P.push(n("div",{class:"q-table-control"},[i(N.value)])):e.title&&P.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),b!==void 0&&(P.push(n("div",{class:"q-table__separator col"})),P.push(n("div",{class:"q-table__control"},[b(N.value)]))),P.length!==0)return n("div",{class:k},P)}const Re=c(()=>we.value===!0?null:Ue.value);function Te(){const t=st();return e.loading===!0&&l.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:Ce.value},Pe())])),n("thead",t)}function st(){const t=l.header,i=l["header-cell"];if(t!==void 0)return t(fe({header:!0})).slice();const b=$.value.map(g=>{const y=l[`header-cell-${g.name}`],k=y!==void 0?y:i,P=fe({col:g});return k!==void 0?k(P):n($t,{key:g.name,props:P},()=>g.label)});if(Ie.value===!0&&e.grid!==!0)b.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(_e.value===!0){const g=l["header-selection"],y=g!==void 0?g(fe({})):[n(be,{color:e.color,modelValue:Re.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":Be})];b.unshift(n("th",{class:"q-table--col-auto-width"},y))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},b)]}function fe(t){return Object.assign(t,{cols:$.value,sort:re,colsMap:qe.value,color:e.color,dark:f.value,dense:e.dense}),_e.value===!0&&H(t,"selected",()=>Re.value,Be),t}function Be(t){we.value===!0&&(t=!1),U(V.value.map(v.value),V.value,t)}const Z=c(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ut(){if(e.hideBottom===!0)return;if(Je.value===!0){if(e.hideNoData===!0)return;const b=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,g=l["no-data"],y=g!==void 0?[g({message:b,icon:o.iconSet.table.warning,filter:e.filter})]:[n(me,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),b];return n("div",{class:te+" q-table__bottom--nodata"},y)}const t=l.bottom;if(t!==void 0)return n("div",{class:te},[t(N.value)]);const i=e.hideSelectedBanner!==!0&&E.value===!0&&ae.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:te+" justify-end"},dt(i));if(i.length>0)return n("div",{class:te},i)}function ct(t){F({page:1,rowsPerPage:t.value})}function dt(t){let i;const{rowsPerPage:b}=h.value,g=e.paginationLabel||o.lang.table.pagination,y=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),k===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),n(Ft,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:b,options:Ze.value,displayValue:b===0?o.lang.table.allRows:b,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),y!==void 0)i=y(N.value);else if(i=[n("span",b!==0?{class:"q-table__bottom-item"}:{},[b?g(W.value+1,Math.min(G.value,X.value),X.value):g(1,he.value,X.value)])],b!==0&&K.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),K.value>2&&i.push(n(ee,{key:"pgFirst",...P,icon:Z.value[0],disable:oe.value,onClick:se})),i.push(n(ee,{key:"pgPrev",...P,icon:Z.value[1],disable:oe.value,onClick:ue}),n(ee,{key:"pgNext",...P,icon:Z.value[2],disable:ie.value,onClick:ce})),K.value>2&&i.push(n(ee,{key:"pgLast",...P,icon:Z.value[3],disable:ie.value,onClick:de}))}return t.push(n("div",{class:"q-table__control"},i)),t}function vt(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[Te()])]:e.loading===!0&&l.loading===void 0?Pe():void 0;return n("div",{class:"q-table__middle"},t)}function ft(){const t=l.item!==void 0?l.item:i=>{const b=i.cols.map(y=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[y.label]),n("div",{class:"q-table__grid-item-value"},[y.value])]));if(E.value===!0){const y=l["body-selection"],k=y!==void 0?y(i):[n(be,{modelValue:i.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(P,L)=>{U([i.key],[i.row],P,L)}})];b.unshift(n("div",{class:"q-table__grid-item-row"},k),n(Tt,{dark:f.value}))}const g={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(g.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(g.onClick=y=>{r("RowClick",y,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(g.onDblclick=y=>{r("RowDblclick",y,i.row,i.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[n("div",g,b)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},V.value.map((i,b)=>t(xe({key:v.value(i),row:i,pageIndex:b}))))}return Object.assign(d.proxy,{requestServerInteraction:O,setPagination:F,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,isRowSelected:ne,clearSelection:We,isRowExpanded:R,setExpanded:I,sort:re,resetVirtualScroll:et,scrollTo:lt,getCellValue:j}),Pt(d.proxy,{filteredSortedRows:()=>le.value,computedRows:()=>V.value,computedRowsNumber:()=>X.value}),()=>{const t=[it()],i={ref:S,class:C.value};return e.grid===!0?t.push(vt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(tt(),ut()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),n("div",i,t)}}});export{dl as Q,cl as a};

import{p as J,d as m,s as Q,D as M,a as X,S as Z,b as F,c as I}from"./styles-0784dbeb-cef138db.js";import{G as tt}from"./graph-8e1598a0.js";import{l as E,c as g,h as x,u as et,i as ot,j as w}from"./architecture-b0946882.js";import{r as st}from"./index-01f381cb-7bfda6f7.js";import"./layout-bb5fb7d4.js";import"./jsx-runtime-9074ceb8.js";import"./index-378c7729.js";import"./iframe-420f2fad.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d0b056e5.js";import"./index-d522b528.js";import"./clone-eb312228.js";import"./edges-066a5561-90e26f3b.js";import"./createText-ca0c5216-238cf064.js";import"./line-ccb8e307.js";import"./array-9f3ba611.js";import"./path-53f90ab3.js";const h="rect",C="rectWithTitle",nt="start",it="end",ct="divider",rt="roundedWithTitle",lt="note",at="noteGroup",_="statediagram",dt="state",Et=`${_}-${dt}`,H="transition",St="note",pt="note-edge",Tt=`${H} ${pt}`,_t=`${_}-${St}`,ut="cluster",Dt=`${_}-${ut}`,bt="cluster-alt",ft=`${_}-${bt}`,U="parent",V="note",At="state",N="----",ht=`${N}${V}`,B=`${N}${U}`,Y="fill:none",W="fill: #333",z="c",j="text",q="normal";let y={},d=0;const yt=function(t){const n=Object.keys(t);for(const e of n)t[e]},gt=function(t,n){return n.db.extract(n.db.getRootDocV2()),n.db.getClasses()};function $t(t){return t==null?"":t.classes?t.classes.join(" "):""}function R(t="",n=0,e="",i=N){const c=e!==null&&e.length>0?`${i}${e}`:"";return`${At}-${t}${c}-${n}`}const A=(t,n,e,i,c,r)=>{const o=e.id,u=$t(i[o]);if(o!=="root"){let p=h;e.start===!0&&(p=nt),e.start===!1&&(p=it),e.type!==M&&(p=e.type),y[o]||(y[o]={id:o,shape:p,description:w.sanitizeText(o,g()),classes:`${u} ${Et}`});const s=y[o];e.description&&(Array.isArray(s.description)?(s.shape=C,s.description.push(e.description)):s.description.length>0?(s.shape=C,s.description===o?s.description=[e.description]:s.description=[s.description,e.description]):(s.shape=h,s.description=e.description),s.description=w.sanitizeTextOrArray(s.description,g())),s.description.length===1&&s.shape===C&&(s.shape=h),!s.type&&e.doc&&(E.info("Setting cluster for ",o,G(e)),s.type="group",s.dir=G(e),s.shape=e.type===X?ct:rt,s.classes=s.classes+" "+Dt+" "+(r?ft:""));const T={labelStyle:"",shape:s.shape,labelText:s.description,classes:s.classes,style:"",id:o,dir:s.dir,domId:R(o,d),type:s.type,padding:15};if(T.centerLabel=!0,e.note){const l={labelStyle:"",shape:lt,labelText:e.note.text,classes:_t,style:"",id:o+ht+"-"+d,domId:R(o,d,V),type:s.type,padding:15},a={labelStyle:"",shape:at,labelText:e.note.text,classes:s.classes,style:"",id:o+B,domId:R(o,d,U),type:"group",padding:0};d++;const D=o+B;t.setNode(D,a),t.setNode(l.id,l),t.setNode(o,T),t.setParent(o,D),t.setParent(l.id,D);let S=o,b=l.id;e.note.position==="left of"&&(S=l.id,b=o),t.setEdge(S,b,{arrowhead:"none",arrowType:"",style:Y,labelStyle:"",classes:Tt,arrowheadStyle:W,labelpos:z,labelType:j,thickness:q})}else t.setNode(o,T)}n&&n.id!=="root"&&(E.trace("Setting node ",o," to be child of its parent ",n.id),t.setParent(o,n.id)),e.doc&&(E.trace("Adding nodes children "),xt(t,e,e.doc,i,c,!r))},xt=(t,n,e,i,c,r)=>{E.trace("items",e),e.forEach(o=>{switch(o.stmt){case F:A(t,n,o,i,c,r);break;case M:A(t,n,o,i,c,r);break;case Z:{A(t,n,o.state1,i,c,r),A(t,n,o.state2,i,c,r);const u={id:"edge"+d,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Y,labelStyle:"",label:w.sanitizeText(o.description,g()),arrowheadStyle:W,labelpos:z,labelType:j,thickness:q,classes:H};t.setEdge(o.state1.id,o.state2.id,u,d),d++}break}})},G=(t,n=I)=>{let e=n;if(t.doc)for(let i=0;i<t.doc.length;i++){const c=t.doc[i];c.stmt==="dir"&&(e=c.value)}return e},Ct=async function(t,n,e,i){E.info("Drawing state diagram (v2)",n),y={},i.db.getDirection();const{securityLevel:c,state:r}=g(),o=r.nodeSpacing||50,u=r.rankSpacing||50;E.info(i.db.getRootDocV2()),i.db.extract(i.db.getRootDocV2()),E.info(i.db.getRootDocV2());const p=i.db.getStates(),s=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:G(i.db.getRootDocV2()),nodesep:o,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});A(s,void 0,i.db.getRootDocV2(),p,i.db,!0);let T;c==="sandbox"&&(T=x("#i"+n));const l=c==="sandbox"?x(T.nodes()[0].contentDocument.body):x("body"),a=l.select(`[id="${n}"]`),D=l.select("#"+n+" g");await st(D,s,["barb"],_,n);const S=8;et.insertTitle(a,"statediagramTitleText",r.titleTopMargin,i.db.getDiagramTitle());const b=a.node().getBBox(),L=b.width+S*2,P=b.height+S*2;a.attr("class",_);const O=a.node().getBBox();ot(a,P,L,r.useMaxWidth);const k=`${O.x-S} ${O.y-S} ${L} ${P}`;E.debug(`viewBox ${k}`),a.attr("viewBox",k);const K=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const $ of K){const v=$.getBBox(),f=document.createElementNS("http://www.w3.org/2000/svg",h);f.setAttribute("rx",0),f.setAttribute("ry",0),f.setAttribute("width",v.width),f.setAttribute("height",v.height),$.insertBefore(f,$.firstChild)}},Rt={setConf:yt,getClasses:gt,draw:Ct},Jt={parser:J,db:m,renderer:Rt,styles:Q,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,m.clear()}};export{Jt as diagram};

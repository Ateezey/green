import{p as A,d as S,s as G}from"./styles-b83b31c9-e56a6e21.js";import{c as v,l as y,h as B,i as W,x as $,u as M,X as I}from"./architecture-4859aae8.js";import{G as X}from"./graph-5819b674.js";import{l as O}from"./layout-adbc70c2.js";import{l as P}from"./line-afd634fa.js";import"./jsx-runtime-215145ec.js";import"./index-32a0e601.js";import"./iframe-a6086212.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-38be2128.js";import"./index-db86d9bf.js";import"./array-9f3ba611.js";import"./path-53f90ab3.js";let H=0;const Y=function(i,r,t,o,p){const g=function(e){switch(e){case p.db.relationType.AGGREGATION:return"aggregation";case p.db.relationType.EXTENSION:return"extension";case p.db.relationType.COMPOSITION:return"composition";case p.db.relationType.DEPENDENCY:return"dependency";case p.db.relationType.LOLLIPOP:return"lollipop"}};r.points=r.points.filter(e=>!Number.isNaN(e.y));const s=r.points,c=P().x(function(e){return e.x}).y(function(e){return e.y}).curve($),n=i.append("path").attr("d",c(s)).attr("id","edge"+H).attr("class","relation");let a="";o.arrowMarkerAbsolute&&(a=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,a=a.replace(/\(/g,"\\("),a=a.replace(/\)/g,"\\)")),t.relation.lineType==1&&n.attr("class","relation dashed-line"),t.relation.lineType==10&&n.attr("class","relation dotted-line"),t.relation.type1!=="none"&&n.attr("marker-start","url("+a+"#"+g(t.relation.type1)+"Start)"),t.relation.type2!=="none"&&n.attr("marker-end","url("+a+"#"+g(t.relation.type2)+"End)");let f,h;const x=r.points.length;let b=M.calcLabelPosition(r.points);f=b.x,h=b.y;let u,m,w,k;if(x%2!==0&&x>1){let e=M.calcCardinalityPosition(t.relation.type1!=="none",r.points,r.points[0]),d=M.calcCardinalityPosition(t.relation.type2!=="none",r.points,r.points[x-1]);y.debug("cardinality_1_point "+JSON.stringify(e)),y.debug("cardinality_2_point "+JSON.stringify(d)),u=e.x,m=e.y,w=d.x,k=d.y}if(t.title!==void 0){const e=i.append("g").attr("class","classLabel"),d=e.append("text").attr("class","label").attr("x",f).attr("y",h).attr("fill","red").attr("text-anchor","middle").text(t.title);window.label=d;const l=d.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",l.x-o.padding/2).attr("y",l.y-o.padding/2).attr("width",l.width+o.padding).attr("height",l.height+o.padding)}y.info("Rendering relation "+JSON.stringify(t)),t.relationTitle1!==void 0&&t.relationTitle1!=="none"&&i.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",u).attr("y",m).attr("fill","black").attr("font-size","6").text(t.relationTitle1),t.relationTitle2!==void 0&&t.relationTitle2!=="none"&&i.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",w).attr("y",k).attr("fill","black").attr("font-size","6").text(t.relationTitle2),H++},J=function(i,r,t,o){y.debug("Rendering class ",r,t);const p=r.id,g={id:p,label:r.id,width:0,height:0},s=i.append("g").attr("id",o.db.lookUpDomId(p)).attr("class","classGroup");let c;r.link?c=s.append("svg:a").attr("xlink:href",r.link).attr("target",r.linkTarget).append("text").attr("y",t.textHeight+t.padding).attr("x",0):c=s.append("text").attr("y",t.textHeight+t.padding).attr("x",0);let n=!0;r.annotations.forEach(function(d){const l=c.append("tspan").text("«"+d+"»");n||l.attr("dy",t.textHeight),n=!1});let a=C(r);const f=c.append("tspan").text(a).attr("class","title");n||f.attr("dy",t.textHeight);const h=c.node().getBBox().height;let x,b,u;if(r.members.length>0){x=s.append("line").attr("x1",0).attr("y1",t.padding+h+t.dividerMargin/2).attr("y2",t.padding+h+t.dividerMargin/2);const d=s.append("text").attr("x",t.padding).attr("y",h+t.dividerMargin+t.textHeight).attr("fill","white").attr("class","classText");n=!0,r.members.forEach(function(l){_(d,l,n,t),n=!1}),b=d.node().getBBox()}if(r.methods.length>0){u=s.append("line").attr("x1",0).attr("y1",t.padding+h+t.dividerMargin+b.height).attr("y2",t.padding+h+t.dividerMargin+b.height);const d=s.append("text").attr("x",t.padding).attr("y",h+2*t.dividerMargin+b.height+t.textHeight).attr("fill","white").attr("class","classText");n=!0,r.methods.forEach(function(l){_(d,l,n,t),n=!1})}const m=s.node().getBBox();var w=" ";r.cssClasses.length>0&&(w=w+r.cssClasses.join(" "));const e=s.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",m.width+2*t.padding).attr("height",m.height+t.padding+.5*t.dividerMargin).attr("class",w).node().getBBox().width;return c.node().childNodes.forEach(function(d){d.setAttribute("x",(e-d.getBBox().width)/2)}),r.tooltip&&c.insert("title").text(r.tooltip),x&&x.attr("x2",e),u&&u.attr("x2",e),g.width=e,g.height=m.height+t.padding+.5*t.dividerMargin,g},C=function(i){let r=i.id;return i.type&&(r+="<"+I(i.type)+">"),r},Z=function(i,r,t,o){y.debug("Rendering note ",r,t);const p=r.id,g={id:p,text:r.text,width:0,height:0},s=i.append("g").attr("id",p).attr("class","classGroup");let c=s.append("text").attr("y",t.textHeight+t.padding).attr("x",0);const n=JSON.parse(`"${r.text}"`).split(`
`);n.forEach(function(x){y.debug(`Adding line: ${x}`),c.append("tspan").text(x).attr("class","title").attr("dy",t.textHeight)});const a=s.node().getBBox(),h=s.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",a.width+2*t.padding).attr("height",a.height+n.length*t.textHeight+t.padding+.5*t.dividerMargin).node().getBBox().width;return c.node().childNodes.forEach(function(x){x.setAttribute("x",(h-x.getBBox().width)/2)}),g.width=h,g.height=a.height+n.length*t.textHeight+t.padding+.5*t.dividerMargin,g},_=function(i,r,t,o){const{displayText:p,cssStyle:g}=r.getDisplayDetails(),s=i.append("tspan").attr("x",o.padding).text(p);g!==""&&s.attr("style",r.cssStyle),t||s.attr("dy",o.textHeight)},N={getClassTitleString:C,drawClass:J,drawEdge:Y,drawNote:Z};let T={};const E=20,L=function(i){const r=Object.entries(T).find(t=>t[1].label===i);if(r)return r[0]},R=function(i){i.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),i.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),i.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},F=function(i,r,t,o){const p=v().class;T={},y.info("Rendering diagram "+i);const g=v().securityLevel;let s;g==="sandbox"&&(s=B("#i"+r));const c=g==="sandbox"?B(s.nodes()[0].contentDocument.body):B("body"),n=c.select(`[id='${r}']`);R(n);const a=new X({multigraph:!0});a.setGraph({isMultiGraph:!0}),a.setDefaultEdgeLabel(function(){return{}});const f=o.db.getClasses(),h=Object.keys(f);for(const e of h){const d=f[e],l=N.drawClass(n,d,p,o);T[l.id]=l,a.setNode(l.id,l),y.info("Org height: "+l.height)}o.db.getRelations().forEach(function(e){y.info("tjoho"+L(e.id1)+L(e.id2)+JSON.stringify(e)),a.setEdge(L(e.id1),L(e.id2),{relation:e},e.title||"DEFAULT")}),o.db.getNotes().forEach(function(e){y.debug(`Adding note: ${JSON.stringify(e)}`);const d=N.drawNote(n,e,p,o);T[d.id]=d,a.setNode(d.id,d),e.class&&e.class in f&&a.setEdge(e.id,L(e.class),{relation:{id1:e.id,id2:e.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),O(a),a.nodes().forEach(function(e){e!==void 0&&a.node(e)!==void 0&&(y.debug("Node "+e+": "+JSON.stringify(a.node(e))),c.select("#"+(o.db.lookUpDomId(e)||e)).attr("transform","translate("+(a.node(e).x-a.node(e).width/2)+","+(a.node(e).y-a.node(e).height/2)+" )"))}),a.edges().forEach(function(e){e!==void 0&&a.edge(e)!==void 0&&(y.debug("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(a.edge(e))),N.drawEdge(n,a.edge(e),a.edge(e).relation,p,o))});const u=n.node().getBBox(),m=u.width+E*2,w=u.height+E*2;W(n,w,m,p.useMaxWidth);const k=`${u.x-E} ${u.y-E} ${m} ${w}`;y.debug(`viewBox ${k}`),n.attr("viewBox",k)},U={draw:F},pt={parser:A,db:S,renderer:U,styles:G,init:i=>{i.class||(i.class={}),i.class.arrowMarkerAbsolute=i.arrowMarkerAbsolute,S.clear()}};export{pt as diagram};

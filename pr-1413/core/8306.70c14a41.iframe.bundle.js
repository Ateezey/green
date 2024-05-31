"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[8306],{"./node_modules/mermaid/dist/stateDiagram-5dee940d.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{diagram:()=>diagram});var _styles_0784dbeb_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/mermaid/dist/styles-0784dbeb.js"),d3__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3/src/index.js"),dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/dagre-d3-es/src/dagre/index.js"),dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/dagre-d3-es/src/graphlib/index.js"),_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/mermaid/dist/mermaid-6dc72991.js");__webpack_require__("./node_modules/dayjs/dayjs.min.js"),__webpack_require__("./node_modules/@braintree/sanitize-url/dist/index.js"),__webpack_require__("./node_modules/dompurify/dist/purify.js");const idCache={},idCache$1_set=(key,val)=>{idCache[key]=val},drawDescrState=(g,stateDef)=>{const titleBox=g.append("text").attr("x",2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("y",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.textHeight+1.3*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("font-size",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.fontSize).attr("class","state-title").text(stateDef.descriptions[0]).node().getBBox(),titleHeight=titleBox.height,description=g.append("text").attr("x",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("y",titleHeight+.4*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.dividerMargin+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.textHeight).attr("class","state-description");let isFirst=!0,isSecond=!0;stateDef.descriptions.forEach((function(descr){isFirst||(!function(textEl,txt,isFirst2){const tSpan=textEl.append("tspan").attr("x",2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).text(txt);isFirst2||tSpan.attr("dy",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.textHeight)}(description,descr,isSecond),isSecond=!1),isFirst=!1}));const descrLine=g.append("line").attr("x1",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("y1",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding+titleHeight+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.dividerMargin/2).attr("y2",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding+titleHeight+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.dividerMargin/2).attr("class","descr-divider"),descrBox=description.node().getBBox(),width=Math.max(descrBox.width,titleBox.width);return descrLine.attr("x2",width+3*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding),g.insert("rect",":first-child").attr("x",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("y",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("width",width+2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("height",descrBox.height+titleHeight+2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("rx",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.radius),g},addTitleAndBox=(g,stateDef,altBkg)=>{const pad=(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding,dblPad=2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding,orgBox=g.node().getBBox(),orgWidth=orgBox.width,orgX=orgBox.x,title=g.append("text").attr("x",0).attr("y",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.titleShift).attr("font-size",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.fontSize).attr("class","state-title").text(stateDef.id),titleWidth=title.node().getBBox().width+dblPad;let startX,width=Math.max(titleWidth,orgWidth);width===orgWidth&&(width+=dblPad);const graphBox=g.node().getBBox();stateDef.doc,startX=orgX-pad,titleWidth>orgWidth&&(startX=(orgWidth-width)/2+pad),Math.abs(orgX-graphBox.x)<pad&&titleWidth>orgWidth&&(startX=orgX-(titleWidth-orgWidth)/2);const lineY=1-(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.textHeight;return g.insert("rect",":first-child").attr("x",startX).attr("y",lineY).attr("class",altBkg?"alt-composit":"composit").attr("width",width).attr("height",graphBox.height+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.textHeight+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.titleShift+1).attr("rx","0"),title.attr("x",startX+pad),titleWidth<=orgWidth&&title.attr("x",orgX+(width-dblPad)/2-titleWidth/2+pad),g.insert("rect",":first-child").attr("x",startX).attr("y",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.titleShift-(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.textHeight-(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("width",width).attr("height",3*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.textHeight).attr("rx",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.radius),g.insert("rect",":first-child").attr("x",startX).attr("y",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.titleShift-(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.textHeight-(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("width",width).attr("height",graphBox.height+3+2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.textHeight).attr("rx",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.radius),g},drawNote=(text,g)=>{g.attr("class","state-note");const note=g.append("rect").attr("x",0).attr("y",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding),rectElem=g.append("g"),{textWidth,textHeight}=((_text,x,y,g)=>{let textHeight=0;const textElem=g.append("text");textElem.style("text-anchor","start"),textElem.attr("class","noteText");let text=_text.replace(/\r\n/g,"<br/>");text=text.replace(/\n/g,"<br/>");const lines=text.split(_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.e.lineBreakRegex);let tHeight=1.25*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.noteMargin;for(const line2 of lines){const txt=line2.trim();if(txt.length>0){const span=textElem.append("tspan");span.text(txt),0===tHeight&&(tHeight+=span.node().getBBox().height),textHeight+=tHeight,span.attr("x",x+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.noteMargin),span.attr("y",y+textHeight+1.25*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.noteMargin)}}return{textWidth:textElem.node().getBBox().width,textHeight}})(text,0,0,rectElem);return note.attr("height",textHeight+2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.noteMargin),note.attr("width",textWidth+2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.noteMargin),note},drawState=function(elem,stateDef){const id=stateDef.id,stateInfo={id,label:stateDef.id,width:0,height:0},g=elem.append("g").attr("id",id).attr("class","stateGroup");"start"===stateDef.type&&(g=>{g.append("circle").attr("class","start-state").attr("r",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.sizeUnit).attr("cx",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.sizeUnit).attr("cy",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.sizeUnit)})(g),"end"===stateDef.type&&(g=>{g.append("circle").attr("class","end-state-outer").attr("r",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.sizeUnit+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.miniPadding).attr("cx",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.sizeUnit+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.miniPadding).attr("cy",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.sizeUnit+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.miniPadding),g.append("circle").attr("class","end-state-inner").attr("r",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.sizeUnit).attr("cx",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.sizeUnit+2).attr("cy",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.sizeUnit+2)})(g),"fork"!==stateDef.type&&"join"!==stateDef.type||((g,stateDef)=>{let width=(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.forkWidth,height=(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.forkHeight;if(stateDef.parentId){let tmp=width;width=height,height=tmp}g.append("rect").style("stroke","black").style("fill","black").attr("width",width).attr("height",height).attr("x",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("y",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding)})(g,stateDef),"note"===stateDef.type&&drawNote(stateDef.note.text,g),"divider"===stateDef.type&&(g=>{g.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.textHeight).attr("class","divider").attr("x2",2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.textHeight).attr("y1",0).attr("y2",0)})(g),"default"===stateDef.type&&0===stateDef.descriptions.length&&((g,stateDef)=>{const state=g.append("text").attr("x",2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("y",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.textHeight+2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("font-size",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.fontSize).attr("class","state-title").text(stateDef.id),classBox=state.node().getBBox();g.insert("rect",":first-child").attr("x",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("y",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("width",classBox.width+2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("height",classBox.height+2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("rx",(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.radius)})(g,stateDef),"default"===stateDef.type&&stateDef.descriptions.length>0&&drawDescrState(g,stateDef);const stateBox=g.node().getBBox();return stateInfo.width=stateBox.width+2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding,stateInfo.height=stateBox.height+2*(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding,idCache$1_set(id,stateInfo),stateInfo};let edgeCount=0;let conf;const transformationLog={},renderDoc=(doc,diagram2,parentId,altBkg,root,domDocument,diagObj)=>{const graph=new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_2__.T({compound:!0,multigraph:!0});let i,edgeFreeDoc=!0;for(i=0;i<doc.length;i++)if("relation"===doc[i].stmt){edgeFreeDoc=!1;break}parentId?graph.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:edgeFreeDoc?1:conf.edgeLengthFactor,nodeSep:edgeFreeDoc?1:50,isMultiGraph:!0}):graph.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:edgeFreeDoc?1:conf.edgeLengthFactor,nodeSep:edgeFreeDoc?1:50,ranker:"tight-tree",isMultiGraph:!0}),graph.setDefaultEdgeLabel((function(){return{}})),diagObj.db.extract(doc);const states=diagObj.db.getStates(),relations=diagObj.db.getRelations(),keys2=Object.keys(states);for(const key of keys2){const stateDef=states[key];let node;if(parentId&&(stateDef.parentId=parentId),stateDef.doc){let sub=diagram2.append("g").attr("id",stateDef.id).attr("class","stateGroup");node=renderDoc(stateDef.doc,sub,stateDef.id,!altBkg,root,domDocument,diagObj);{sub=addTitleAndBox(sub,stateDef,altBkg);let boxBounds=sub.node().getBBox();node.width=boxBounds.width,node.height=boxBounds.height+conf.padding/2,transformationLog[stateDef.id]={y:conf.compositTitleSize}}}else node=drawState(diagram2,stateDef);if(stateDef.note){const noteDef={descriptions:[],id:stateDef.id+"-note",note:stateDef.note,type:"note"},note=drawState(diagram2,noteDef);"left of"===stateDef.note.position?(graph.setNode(node.id+"-note",note),graph.setNode(node.id,node)):(graph.setNode(node.id,node),graph.setNode(node.id+"-note",note)),graph.setParent(node.id,node.id+"-group"),graph.setParent(node.id+"-note",node.id+"-group")}else graph.setNode(node.id,node)}_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("Count=",graph.nodeCount(),graph);let cnt=0;relations.forEach((function(relation){var text;cnt++,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("Setting edge",relation),graph.setEdge(relation.id1,relation.id2,{relation,width:(text=relation.title,text?text.length*conf.fontSizeFactor:1),height:conf.labelHeight*_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.e.getRows(relation.title).length,labelpos:"c"},"id"+cnt)})),(0,dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_1__.Zp)(graph),_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("Graph after layout",graph.nodes());const svgElem=diagram2.node();graph.nodes().forEach((function(v){if(void 0!==v&&void 0!==graph.node(v)){_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.l.warn("Node "+v+": "+JSON.stringify(graph.node(v))),root.select("#"+svgElem.id+" #"+v).attr("transform","translate("+(graph.node(v).x-graph.node(v).width/2)+","+(graph.node(v).y+(transformationLog[v]?transformationLog[v].y:0)-graph.node(v).height/2)+" )"),root.select("#"+svgElem.id+" #"+v).attr("data-x-shift",graph.node(v).x-graph.node(v).width/2);domDocument.querySelectorAll("#"+svgElem.id+" #"+v+" .divider").forEach((divider=>{const parent=divider.parentElement;let pWidth=0,pShift=0;parent&&(parent.parentElement&&(pWidth=parent.parentElement.getBBox().width),pShift=parseInt(parent.getAttribute("data-x-shift"),10),Number.isNaN(pShift)&&(pShift=0)),divider.setAttribute("x1",0-pShift+8),divider.setAttribute("x2",pWidth-pShift-8)}))}else _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("No Node "+v+": "+JSON.stringify(graph.node(v)))}));let stateBox=svgElem.getBBox();graph.edges().forEach((function(e){void 0!==e&&void 0!==graph.edge(e)&&(_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(graph.edge(e))),function(elem,path,relation){path.points=path.points.filter((p=>!Number.isNaN(p.y)));const lineData=path.points,lineFunction=(0,d3__WEBPACK_IMPORTED_MODULE_0__.n8j)().x((function(d){return d.x})).y((function(d){return d.y})).curve(d3__WEBPACK_IMPORTED_MODULE_0__.qrM),svgPath=elem.append("path").attr("d",lineFunction(lineData)).attr("id","edge"+edgeCount).attr("class","transition");let url="";if((0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.arrowMarkerAbsolute&&(url=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,url=url.replace(/\(/g,"\\("),url=url.replace(/\)/g,"\\)")),svgPath.attr("marker-end","url("+url+"#"+function(type){switch(type){case _styles_0784dbeb_js__WEBPACK_IMPORTED_MODULE_7__.d.relationType.AGGREGATION:return"aggregation";case _styles_0784dbeb_js__WEBPACK_IMPORTED_MODULE_7__.d.relationType.EXTENSION:return"extension";case _styles_0784dbeb_js__WEBPACK_IMPORTED_MODULE_7__.d.relationType.COMPOSITION:return"composition";case _styles_0784dbeb_js__WEBPACK_IMPORTED_MODULE_7__.d.relationType.DEPENDENCY:return"dependency"}}(_styles_0784dbeb_js__WEBPACK_IMPORTED_MODULE_7__.d.relationType.DEPENDENCY)+"End)"),void 0!==relation.title){const label=elem.append("g").attr("class","stateLabel"),{x,y}=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.u.calcLabelPosition(path.points),rows=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.e.getRows(relation.title);let titleHeight=0;const titleRows=[];let maxWidth=0,minX=0;for(let i=0;i<=rows.length;i++){const title=label.append("text").attr("text-anchor","middle").text(rows[i]).attr("x",x).attr("y",y+titleHeight),boundsTmp=title.node().getBBox();if(maxWidth=Math.max(maxWidth,boundsTmp.width),minX=Math.min(minX,boundsTmp.x),_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.l.info(boundsTmp.x,x,y+titleHeight),0===titleHeight){const titleBox=title.node().getBBox();titleHeight=titleBox.height,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.l.info("Title height",titleHeight,y)}titleRows.push(title)}let boxHeight=titleHeight*rows.length;if(rows.length>1){const heightAdj=(rows.length-1)*titleHeight*.5;titleRows.forEach(((title,i)=>title.attr("y",y+i*titleHeight-heightAdj))),boxHeight=titleHeight*rows.length}const bounds=label.node().getBBox();label.insert("rect",":first-child").attr("class","box").attr("x",x-maxWidth/2-(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding/2).attr("y",y-boxHeight/2-(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding/2-3.5).attr("width",maxWidth+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding).attr("height",boxHeight+(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state.padding),_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.l.info(bounds)}edgeCount++}(diagram2,graph.edge(e),graph.edge(e).relation))})),stateBox=svgElem.getBBox();const stateInfo={id:parentId||"root",label:parentId||"root",width:0,height:0};return stateInfo.width=stateBox.width+2*conf.padding,stateInfo.height=stateBox.height+2*conf.padding,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("Doc rendered",stateInfo,graph),stateInfo},renderer={setConf:function(){},draw:function(text,id,_version,diagObj){conf=(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().state;const securityLevel=(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.c)().securityLevel;let sandboxElement;"sandbox"===securityLevel&&(sandboxElement=(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ltv)("#i"+id));const root="sandbox"===securityLevel?(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ltv)(sandboxElement.nodes()[0].contentDocument.body):(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ltv)("body"),doc="sandbox"===securityLevel?sandboxElement.nodes()[0].contentDocument:document;_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.l.debug("Rendering diagram "+text);const diagram2=root.select(`[id='${id}']`);diagram2.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z");const rootDoc=diagObj.db.getRootDoc();renderDoc(rootDoc,diagram2,void 0,!1,root,doc,diagObj);const padding=conf.padding,bounds=diagram2.node().getBBox(),width=bounds.width+2*padding,height=bounds.height+2*padding,svgWidth=1.75*width;(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_6__.i)(diagram2,height,svgWidth,conf.useMaxWidth),diagram2.attr("viewBox",`${bounds.x-conf.padding}  ${bounds.y-conf.padding} `+width+" "+height)}},diagram={parser:_styles_0784dbeb_js__WEBPACK_IMPORTED_MODULE_7__.p,db:_styles_0784dbeb_js__WEBPACK_IMPORTED_MODULE_7__.d,renderer,styles:_styles_0784dbeb_js__WEBPACK_IMPORTED_MODULE_7__.s,init:cnf=>{cnf.state||(cnf.state={}),cnf.state.arrowMarkerAbsolute=cnf.arrowMarkerAbsolute,_styles_0784dbeb_js__WEBPACK_IMPORTED_MODULE_7__.d.clear()}}}}]);
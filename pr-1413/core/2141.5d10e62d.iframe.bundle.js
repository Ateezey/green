"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[2141],{"./node_modules/mermaid/dist/quadrantDiagram-c759a472.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{diagram:()=>diagram});var _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/mermaid/dist/mermaid-6dc72991.js"),d3__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3/src/index.js"),parser=(__webpack_require__("./node_modules/dayjs/dayjs.min.js"),__webpack_require__("./node_modules/@braintree/sanitize-url/dist/index.js"),__webpack_require__("./node_modules/dompurify/dist/purify.js"),function(){var o=function(k,v,o2,l){for(o2=o2||{},l=k.length;l--;o2[k[l]]=v);return o2},$V0=[1,3],$V1=[1,4],$V2=[1,5],$V3=[1,6],$V4=[1,7],$V5=[1,5,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],$V6=[1,5,6,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],$V7=[32,33,34],$V8=[2,7],$V9=[1,13],$Va=[1,17],$Vb=[1,18],$Vc=[1,19],$Vd=[1,20],$Ve=[1,21],$Vf=[1,22],$Vg=[1,23],$Vh=[1,24],$Vi=[1,25],$Vj=[1,26],$Vk=[1,27],$Vl=[1,30],$Vm=[1,31],$Vn=[1,32],$Vo=[1,33],$Vp=[1,34],$Vq=[1,35],$Vr=[1,36],$Vs=[1,37],$Vt=[1,38],$Vu=[1,39],$Vv=[1,40],$Vw=[1,41],$Vx=[1,42],$Vy=[1,57],$Vz=[1,58],$VA=[5,22,26,32,33,34,40,41,42,43,44,45,46,47,48,49,50,51],parser2={trace:function trace(){},yy:{},symbols_:{error:2,start:3,eol:4,SPACE:5,QUADRANT:6,document:7,line:8,statement:9,axisDetails:10,quadrantDetails:11,points:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,text:21,point_start:22,point_x:23,point_y:24,"X-AXIS":25,"AXIS-TEXT-DELIMITER":26,"Y-AXIS":27,QUADRANT_1:28,QUADRANT_2:29,QUADRANT_3:30,QUADRANT_4:31,NEWLINE:32,SEMI:33,EOF:34,alphaNumToken:35,textNoTagsToken:36,STR:37,MD_STR:38,alphaNum:39,PUNCTUATION:40,AMP:41,NUM:42,ALPHA:43,COMMA:44,PLUS:45,EQUALS:46,MULT:47,DOT:48,BRKT:49,UNDERSCORE:50,MINUS:51,$accept:0,$end:1},terminals_:{2:"error",5:"SPACE",6:"QUADRANT",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",22:"point_start",23:"point_x",24:"point_y",25:"X-AXIS",26:"AXIS-TEXT-DELIMITER",27:"Y-AXIS",28:"QUADRANT_1",29:"QUADRANT_2",30:"QUADRANT_3",31:"QUADRANT_4",32:"NEWLINE",33:"SEMI",34:"EOF",37:"STR",38:"MD_STR",40:"PUNCTUATION",41:"AMP",42:"NUM",43:"ALPHA",44:"COMMA",45:"PLUS",46:"EQUALS",47:"MULT",48:"DOT",49:"BRKT",50:"UNDERSCORE",51:"MINUS"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[9,0],[9,2],[9,1],[9,1],[9,1],[9,2],[9,2],[9,2],[9,1],[9,1],[12,4],[10,4],[10,3],[10,2],[10,4],[10,3],[10,2],[11,2],[11,2],[11,2],[11,2],[4,1],[4,1],[4,1],[21,1],[21,2],[21,1],[21,1],[39,1],[39,2],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[36,1],[36,1],[36,1]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;switch(yystate){case 12:this.$=$$[$0].trim(),yy.setDiagramTitle(this.$);break;case 13:this.$=$$[$0].trim(),yy.setAccTitle(this.$);break;case 14:case 15:this.$=$$[$0].trim(),yy.setAccDescription(this.$);break;case 16:yy.addSection($$[$0].substr(8)),this.$=$$[$0].substr(8);break;case 17:yy.addPoint($$[$0-3],$$[$0-1],$$[$0]);break;case 18:yy.setXAxisLeftText($$[$0-2]),yy.setXAxisRightText($$[$0]);break;case 19:$$[$0-1].text+=" ⟶ ",yy.setXAxisLeftText($$[$0-1]);break;case 20:yy.setXAxisLeftText($$[$0]);break;case 21:yy.setYAxisBottomText($$[$0-2]),yy.setYAxisTopText($$[$0]);break;case 22:$$[$0-1].text+=" ⟶ ",yy.setYAxisBottomText($$[$0-1]);break;case 23:yy.setYAxisBottomText($$[$0]);break;case 24:yy.setQuadrant1Text($$[$0]);break;case 25:yy.setQuadrant2Text($$[$0]);break;case 26:yy.setQuadrant3Text($$[$0]);break;case 27:yy.setQuadrant4Text($$[$0]);break;case 31:case 33:this.$={text:$$[$0],type:"text"};break;case 32:this.$={text:$$[$0-1].text+""+$$[$0],type:$$[$0-1].type};break;case 34:this.$={text:$$[$0],type:"markdown"};break;case 35:this.$=$$[$0];break;case 36:this.$=$$[$0-1]+""+$$[$0]}},table:[{3:1,4:2,5:$V0,6:$V1,32:$V2,33:$V3,34:$V4},{1:[3]},{3:8,4:2,5:$V0,6:$V1,32:$V2,33:$V3,34:$V4},{3:9,4:2,5:$V0,6:$V1,32:$V2,33:$V3,34:$V4},o($V5,[2,4],{7:10}),o($V6,[2,28]),o($V6,[2,29]),o($V6,[2,30]),{1:[2,1]},{1:[2,2]},o($V7,$V8,{8:11,9:12,10:14,11:15,12:16,21:28,35:29,1:[2,3],5:$V9,13:$Va,15:$Vb,17:$Vc,19:$Vd,20:$Ve,25:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,37:$Vl,38:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx}),o($V5,[2,5]),{4:43,32:$V2,33:$V3,34:$V4},o($V7,$V8,{10:14,11:15,12:16,21:28,35:29,9:44,5:$V9,13:$Va,15:$Vb,17:$Vc,19:$Vd,20:$Ve,25:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,37:$Vl,38:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx}),o($V7,[2,9]),o($V7,[2,10]),o($V7,[2,11]),{14:[1,45]},{16:[1,46]},{18:[1,47]},o($V7,[2,15]),o($V7,[2,16]),{21:48,35:29,37:$Vl,38:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx},{21:49,35:29,37:$Vl,38:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx},{21:50,35:29,37:$Vl,38:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx},{21:51,35:29,37:$Vl,38:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx},{21:52,35:29,37:$Vl,38:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx},{21:53,35:29,37:$Vl,38:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx},{5:$Vy,22:[1,54],35:56,36:55,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vz},o($VA,[2,31]),o($VA,[2,33]),o($VA,[2,34]),o($VA,[2,37]),o($VA,[2,38]),o($VA,[2,39]),o($VA,[2,40]),o($VA,[2,41]),o($VA,[2,42]),o($VA,[2,43]),o($VA,[2,44]),o($VA,[2,45]),o($VA,[2,46]),o($VA,[2,47]),o($V5,[2,6]),o($V7,[2,8]),o($V7,[2,12]),o($V7,[2,13]),o($V7,[2,14]),o($V7,[2,20],{36:55,35:56,5:$Vy,26:[1,59],40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vz}),o($V7,[2,23],{36:55,35:56,5:$Vy,26:[1,60],40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vz}),o($V7,[2,24],{36:55,35:56,5:$Vy,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vz}),o($V7,[2,25],{36:55,35:56,5:$Vy,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vz}),o($V7,[2,26],{36:55,35:56,5:$Vy,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vz}),o($V7,[2,27],{36:55,35:56,5:$Vy,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vz}),{23:[1,61]},o($VA,[2,32]),o($VA,[2,48]),o($VA,[2,49]),o($VA,[2,50]),o($V7,[2,19],{35:29,21:62,37:$Vl,38:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx}),o($V7,[2,22],{35:29,21:63,37:$Vl,38:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx}),{24:[1,64]},o($V7,[2,18],{36:55,35:56,5:$Vy,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vz}),o($V7,[2,21],{36:55,35:56,5:$Vy,40:$Vn,41:$Vo,42:$Vp,43:$Vq,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vz}),o($V7,[2,17])],defaultActions:{8:[2,1],9:[2,2]},parseError:function parseError(str,hash){if(!hash.recoverable){var error=new Error(str);throw error.hash=hash,error}this.trace(str)},parse:function parse(input){var self=this,stack=[0],tstack=[],vstack=[null],lstack=[],table=this.table,yytext="",yylineno=0,yyleng=0,args=lstack.slice.call(arguments,1),lexer2=Object.create(this.lexer),sharedState={yy:{}};for(var k in this.yy)Object.prototype.hasOwnProperty.call(this.yy,k)&&(sharedState.yy[k]=this.yy[k]);lexer2.setInput(input,sharedState.yy),sharedState.yy.lexer=lexer2,sharedState.yy.parser=this,void 0===lexer2.yylloc&&(lexer2.yylloc={});var yyloc=lexer2.yylloc;lstack.push(yyloc);var ranges=lexer2.options&&lexer2.options.ranges;"function"==typeof sharedState.yy.parseError?this.parseError=sharedState.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var symbol,state,action,r,p,len,newState,expected,token,yyval={};;){if(state=stack[stack.length-1],this.defaultActions[state]?action=this.defaultActions[state]:(null==symbol&&(token=void 0,"number"!=typeof(token=tstack.pop()||lexer2.lex()||1)&&(token instanceof Array&&(token=(tstack=token).pop()),token=self.symbols_[token]||token),symbol=token),action=table[state]&&table[state][symbol]),void 0===action||!action.length||!action[0]){var errStr="";for(p in expected=[],table[state])this.terminals_[p]&&p>2&&expected.push("'"+this.terminals_[p]+"'");errStr=lexer2.showPosition?"Parse error on line "+(yylineno+1)+":\n"+lexer2.showPosition()+"\nExpecting "+expected.join(", ")+", got '"+(this.terminals_[symbol]||symbol)+"'":"Parse error on line "+(yylineno+1)+": Unexpected "+(1==symbol?"end of input":"'"+(this.terminals_[symbol]||symbol)+"'"),this.parseError(errStr,{text:lexer2.match,token:this.terminals_[symbol]||symbol,line:lexer2.yylineno,loc:yyloc,expected})}if(action[0]instanceof Array&&action.length>1)throw new Error("Parse Error: multiple actions possible at state: "+state+", token: "+symbol);switch(action[0]){case 1:stack.push(symbol),vstack.push(lexer2.yytext),lstack.push(lexer2.yylloc),stack.push(action[1]),symbol=null,yyleng=lexer2.yyleng,yytext=lexer2.yytext,yylineno=lexer2.yylineno,yyloc=lexer2.yylloc;break;case 2:if(len=this.productions_[action[1]][1],yyval.$=vstack[vstack.length-len],yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column},ranges&&(yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]]),void 0!==(r=this.performAction.apply(yyval,[yytext,yyleng,yylineno,sharedState.yy,action[1],vstack,lstack].concat(args))))return r;len&&(stack=stack.slice(0,-1*len*2),vstack=vstack.slice(0,-1*len),lstack=lstack.slice(0,-1*len)),stack.push(this.productions_[action[1]][0]),vstack.push(yyval.$),lstack.push(yyval._$),newState=table[stack[stack.length-2]][stack[stack.length-1]],stack.push(newState);break;case 3:return!0}}return!0}},lexer={EOF:1,parseError:function parseError(str,hash){if(!this.yy.parser)throw new Error(str);this.yy.parser.parseError(str,hash)},setInput:function(input,yy){return this.yy=yy||this.yy||{},this._input=input,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var ch=this._input[0];return this.yytext+=ch,this.yyleng++,this.offset++,this.match+=ch,this.matched+=ch,ch.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),ch},unput:function(ch){var len=ch.length,lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-len),this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),lines.length-1&&(this.yylineno-=lines.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-len]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var next=this.match;return next.length<20&&(next+=this._input.substr(0,20-next.length)),(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var pre=this.pastInput(),c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},test_match:function(match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer&&(backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(backup.yylloc.range=this.yylloc.range.slice(0))),(lines=match[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=lines.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length},this.yytext+=match[0],this.match+=match[0],this.matches=match,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(match[0].length),this.matched+=match[0],token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),token)return token;if(this._backtrack){for(var k in backup)this[k]=backup[k];return!1}return!1},next:function(){if(this.done)return this.EOF;var token,match,tempMatch,index;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var rules=this._currentRules(),i=0;i<rules.length;i++)if((tempMatch=this._input.match(this.rules[rules[i]]))&&(!match||tempMatch[0].length>match[0].length)){if(match=tempMatch,index=i,this.options.backtrack_lexer){if(!1!==(token=this.test_match(tempMatch,rules[i])))return token;if(this._backtrack){match=!1;continue}return!1}if(!this.options.flex)break}return match?!1!==(token=this.test_match(match,rules[index]))&&token:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function lex(){var r=this.next();return r||this.lex()},begin:function begin(condition){this.conditionStack.push(condition)},popState:function popState(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function _currentRules(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function topState(n){return(n=this.conditionStack.length-1-Math.abs(n||0))>=0?this.conditionStack[n]:"INITIAL"},pushState:function pushState(condition){this.begin(condition)},stateStackSize:function stateStackSize(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){switch($avoiding_name_collisions){case 0:case 1:case 3:break;case 2:return 32;case 4:return this.begin("title"),13;case 5:return this.popState(),"title_value";case 6:return this.begin("acc_title"),15;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),17;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:case 22:case 24:case 28:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 25;case 14:return 27;case 15:return 26;case 16:return 28;case 17:return 29;case 18:return 30;case 19:return 31;case 20:this.begin("md_string");break;case 21:return"MD_STR";case 23:this.begin("string");break;case 25:return"STR";case 26:return this.begin("point_start"),22;case 27:return this.begin("point_x"),23;case 29:this.popState(),this.begin("point_y");break;case 30:return this.popState(),24;case 31:return 6;case 32:return 43;case 33:return"COLON";case 34:return 45;case 35:return 44;case 36:case 37:return 46;case 38:return 47;case 39:return 49;case 40:return 50;case 41:return 48;case 42:return 41;case 43:return 51;case 44:return 42;case 45:return 5;case 46:return 33;case 47:return 40;case 48:return 34}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{point_y:{rules:[30],inclusive:!1},point_x:{rules:[29],inclusive:!1},point_start:{rules:[27,28],inclusive:!1},acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},title:{rules:[5],inclusive:!1},md_string:{rules:[21,22],inclusive:!1},string:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,6,8,10,13,14,15,16,17,18,19,20,23,26,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};function Parser(){this.yy={}}return parser2.lexer=lexer,Parser.prototype=parser2,parser2.Parser=Parser,new Parser}());parser.parser=parser;const parser$1=parser,defaultThemeVariables=(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.E)();const config=(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.c)();function textSanitizer(text){return(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.d)(text.trim(),config)}const quadrantBuilder=new class QuadrantBuilder{constructor(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}getDefaultData(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}getDefaultConfig(){var _a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n,_o,_p,_q,_r;return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:(null==(_a=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_a.chartWidth)||500,chartWidth:(null==(_b=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_b.chartHeight)||500,titlePadding:(null==(_c=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_c.titlePadding)||10,titleFontSize:(null==(_d=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_d.titleFontSize)||20,quadrantPadding:(null==(_e=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_e.quadrantPadding)||5,xAxisLabelPadding:(null==(_f=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_f.xAxisLabelPadding)||5,yAxisLabelPadding:(null==(_g=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_g.yAxisLabelPadding)||5,xAxisLabelFontSize:(null==(_h=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_h.xAxisLabelFontSize)||16,yAxisLabelFontSize:(null==(_i=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_i.yAxisLabelFontSize)||16,quadrantLabelFontSize:(null==(_j=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_j.quadrantLabelFontSize)||16,quadrantTextTopPadding:(null==(_k=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_k.quadrantTextTopPadding)||5,pointTextPadding:(null==(_l=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_l.pointTextPadding)||5,pointLabelFontSize:(null==(_m=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_m.pointLabelFontSize)||12,pointRadius:(null==(_n=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_n.pointRadius)||5,xAxisPosition:(null==(_o=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_o.xAxisPosition)||"top",yAxisPosition:(null==(_p=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_p.yAxisPosition)||"left",quadrantInternalBorderStrokeWidth:(null==(_q=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_q.quadrantInternalBorderStrokeWidth)||1,quadrantExternalBorderStrokeWidth:(null==(_r=_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.B.quadrantChart)?void 0:_r.quadrantExternalBorderStrokeWidth)||2}}getDefaultThemeConfig(){return{quadrant1Fill:defaultThemeVariables.quadrant1Fill,quadrant2Fill:defaultThemeVariables.quadrant2Fill,quadrant3Fill:defaultThemeVariables.quadrant3Fill,quadrant4Fill:defaultThemeVariables.quadrant4Fill,quadrant1TextFill:defaultThemeVariables.quadrant1TextFill,quadrant2TextFill:defaultThemeVariables.quadrant2TextFill,quadrant3TextFill:defaultThemeVariables.quadrant3TextFill,quadrant4TextFill:defaultThemeVariables.quadrant4TextFill,quadrantPointFill:defaultThemeVariables.quadrantPointFill,quadrantPointTextFill:defaultThemeVariables.quadrantPointTextFill,quadrantXAxisTextFill:defaultThemeVariables.quadrantXAxisTextFill,quadrantYAxisTextFill:defaultThemeVariables.quadrantYAxisTextFill,quadrantTitleFill:defaultThemeVariables.quadrantTitleFill,quadrantInternalBorderStrokeFill:defaultThemeVariables.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:defaultThemeVariables.quadrantExternalBorderStrokeFill}}clear(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.l.info("clear called")}setData(data){this.data={...this.data,...data}}addPoints(points){this.data.points=[...points,...this.data.points]}setConfig(config2){_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("setConfig called with: ",config2),this.config={...this.config,...config2}}setThemeConfig(themeConfig){_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.l.trace("setThemeConfig called with: ",themeConfig),this.themeConfig={...this.themeConfig,...themeConfig}}calculateSpace(xAxisPosition,showXAxis,showYAxis,showTitle){const xAxisSpaceCalculation=2*this.config.xAxisLabelPadding+this.config.xAxisLabelFontSize,xAxisSpace={top:"top"===xAxisPosition&&showXAxis?xAxisSpaceCalculation:0,bottom:"bottom"===xAxisPosition&&showXAxis?xAxisSpaceCalculation:0},yAxisSpaceCalculation=2*this.config.yAxisLabelPadding+this.config.yAxisLabelFontSize,yAxisSpace={left:"left"===this.config.yAxisPosition&&showYAxis?yAxisSpaceCalculation:0,right:"right"===this.config.yAxisPosition&&showYAxis?yAxisSpaceCalculation:0},titleSpaceCalculation=this.config.titleFontSize+2*this.config.titlePadding,titleSpace={top:showTitle?titleSpaceCalculation:0},quadrantLeft=this.config.quadrantPadding+yAxisSpace.left,quadrantTop=this.config.quadrantPadding+xAxisSpace.top+titleSpace.top,quadrantWidth=this.config.chartWidth-2*this.config.quadrantPadding-yAxisSpace.left-yAxisSpace.right,quadrantHeight=this.config.chartHeight-2*this.config.quadrantPadding-xAxisSpace.top-xAxisSpace.bottom-titleSpace.top;return{xAxisSpace,yAxisSpace,titleSpace,quadrantSpace:{quadrantLeft,quadrantTop,quadrantWidth,quadrantHalfWidth:quadrantWidth/2,quadrantHeight,quadrantHalfHeight:quadrantHeight/2}}}getAxisLabels(xAxisPosition,showXAxis,showYAxis,spaceData){const{quadrantSpace,titleSpace}=spaceData,{quadrantHalfHeight,quadrantHeight,quadrantLeft,quadrantHalfWidth,quadrantTop,quadrantWidth}=quadrantSpace,drawXAxisLabelsInMiddle=Boolean(this.data.xAxisRightText),drawYAxisLabelsInMiddle=Boolean(this.data.yAxisTopText),axisLabels=[];return this.data.xAxisLeftText&&showXAxis&&axisLabels.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:quadrantLeft+(drawXAxisLabelsInMiddle?quadrantHalfWidth/2:0),y:"top"===xAxisPosition?this.config.xAxisLabelPadding+titleSpace.top:this.config.xAxisLabelPadding+quadrantTop+quadrantHeight+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:drawXAxisLabelsInMiddle?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&showXAxis&&axisLabels.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:quadrantLeft+quadrantHalfWidth+(drawXAxisLabelsInMiddle?quadrantHalfWidth/2:0),y:"top"===xAxisPosition?this.config.xAxisLabelPadding+titleSpace.top:this.config.xAxisLabelPadding+quadrantTop+quadrantHeight+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:drawXAxisLabelsInMiddle?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&showYAxis&&axisLabels.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+quadrantLeft+quadrantWidth+this.config.quadrantPadding,y:quadrantTop+quadrantHeight-(drawYAxisLabelsInMiddle?quadrantHalfHeight/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:drawYAxisLabelsInMiddle?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&showYAxis&&axisLabels.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+quadrantLeft+quadrantWidth+this.config.quadrantPadding,y:quadrantTop+quadrantHalfHeight-(drawYAxisLabelsInMiddle?quadrantHalfHeight/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:drawYAxisLabelsInMiddle?"center":"left",horizontalPos:"top",rotation:-90}),axisLabels}getQuadrants(spaceData){const{quadrantSpace}=spaceData,{quadrantHalfHeight,quadrantLeft,quadrantHalfWidth,quadrantTop}=quadrantSpace,quadrants=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:quadrantLeft+quadrantHalfWidth,y:quadrantTop,width:quadrantHalfWidth,height:quadrantHalfHeight,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:quadrantLeft,y:quadrantTop,width:quadrantHalfWidth,height:quadrantHalfHeight,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:quadrantLeft,y:quadrantTop+quadrantHalfHeight,width:quadrantHalfWidth,height:quadrantHalfHeight,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:quadrantLeft+quadrantHalfWidth,y:quadrantTop+quadrantHalfHeight,width:quadrantHalfWidth,height:quadrantHalfHeight,fill:this.themeConfig.quadrant4Fill}];for(const quadrant of quadrants)quadrant.text.x=quadrant.x+quadrant.width/2,0===this.data.points.length?(quadrant.text.y=quadrant.y+quadrant.height/2,quadrant.text.horizontalPos="middle"):(quadrant.text.y=quadrant.y+this.config.quadrantTextTopPadding,quadrant.text.horizontalPos="top");return quadrants}getQuadrantPoints(spaceData){const{quadrantSpace}=spaceData,{quadrantHeight,quadrantLeft,quadrantTop,quadrantWidth}=quadrantSpace,xAxis=(0,d3__WEBPACK_IMPORTED_MODULE_0__.m4Y)().domain([0,1]).range([quadrantLeft,quadrantWidth+quadrantLeft]),yAxis=(0,d3__WEBPACK_IMPORTED_MODULE_0__.m4Y)().domain([0,1]).range([quadrantHeight+quadrantTop,quadrantTop]);return this.data.points.map((point=>({x:xAxis(point.x),y:yAxis(point.y),fill:this.themeConfig.quadrantPointFill,radius:this.config.pointRadius,text:{text:point.text,fill:this.themeConfig.quadrantPointTextFill,x:xAxis(point.x),y:yAxis(point.y)+this.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:this.config.pointLabelFontSize,rotation:0}})))}getBorders(spaceData){const halfExternalBorderWidth=this.config.quadrantExternalBorderStrokeWidth/2,{quadrantSpace}=spaceData,{quadrantHalfHeight,quadrantHeight,quadrantLeft,quadrantHalfWidth,quadrantTop,quadrantWidth}=quadrantSpace;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:quadrantLeft-halfExternalBorderWidth,y1:quadrantTop,x2:quadrantLeft+quadrantWidth+halfExternalBorderWidth,y2:quadrantTop},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:quadrantLeft+quadrantWidth,y1:quadrantTop+halfExternalBorderWidth,x2:quadrantLeft+quadrantWidth,y2:quadrantTop+quadrantHeight-halfExternalBorderWidth},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:quadrantLeft-halfExternalBorderWidth,y1:quadrantTop+quadrantHeight,x2:quadrantLeft+quadrantWidth+halfExternalBorderWidth,y2:quadrantTop+quadrantHeight},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:quadrantLeft,y1:quadrantTop+halfExternalBorderWidth,x2:quadrantLeft,y2:quadrantTop+quadrantHeight-halfExternalBorderWidth},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:quadrantLeft+quadrantHalfWidth,y1:quadrantTop+halfExternalBorderWidth,x2:quadrantLeft+quadrantHalfWidth,y2:quadrantTop+quadrantHeight-halfExternalBorderWidth},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:quadrantLeft+halfExternalBorderWidth,y1:quadrantTop+quadrantHalfHeight,x2:quadrantLeft+quadrantWidth-halfExternalBorderWidth,y2:quadrantTop+quadrantHalfHeight}]}getTitle(showTitle){if(showTitle)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}build(){const showXAxis=this.config.showXAxis&&!(!this.data.xAxisLeftText&&!this.data.xAxisRightText),showYAxis=this.config.showYAxis&&!(!this.data.yAxisTopText&&!this.data.yAxisBottomText),showTitle=this.config.showTitle&&!!this.data.titleText,xAxisPosition=this.data.points.length>0?"bottom":this.config.xAxisPosition,calculatedSpace=this.calculateSpace(xAxisPosition,showXAxis,showYAxis,showTitle);return{points:this.getQuadrantPoints(calculatedSpace),quadrants:this.getQuadrants(calculatedSpace),axisLabels:this.getAxisLabels(xAxisPosition,showXAxis,showYAxis,calculatedSpace),borderLines:this.getBorders(calculatedSpace),title:this.getTitle(showTitle)}}};const diagram={parser:parser$1,db:{setWidth:function setWidth(width){quadrantBuilder.setConfig({chartWidth:width})},setHeight:function setHeight(height){quadrantBuilder.setConfig({chartHeight:height})},setQuadrant1Text:function setQuadrant1Text(textObj){quadrantBuilder.setData({quadrant1Text:textSanitizer(textObj.text)})},setQuadrant2Text:function setQuadrant2Text(textObj){quadrantBuilder.setData({quadrant2Text:textSanitizer(textObj.text)})},setQuadrant3Text:function setQuadrant3Text(textObj){quadrantBuilder.setData({quadrant3Text:textSanitizer(textObj.text)})},setQuadrant4Text:function setQuadrant4Text(textObj){quadrantBuilder.setData({quadrant4Text:textSanitizer(textObj.text)})},setXAxisLeftText:function setXAxisLeftText(textObj){quadrantBuilder.setData({xAxisLeftText:textSanitizer(textObj.text)})},setXAxisRightText:function setXAxisRightText(textObj){quadrantBuilder.setData({xAxisRightText:textSanitizer(textObj.text)})},setYAxisTopText:function setYAxisTopText(textObj){quadrantBuilder.setData({yAxisTopText:textSanitizer(textObj.text)})},setYAxisBottomText:function setYAxisBottomText(textObj){quadrantBuilder.setData({yAxisBottomText:textSanitizer(textObj.text)})},addPoint:function addPoint(textObj,x,y){quadrantBuilder.addPoints([{x,y,text:textSanitizer(textObj.text)}])},getQuadrantData:function getQuadrantData(){const config2=(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.c)(),{themeVariables,quadrantChart:quadrantChartConfig}=config2;return quadrantChartConfig&&quadrantBuilder.setConfig(quadrantChartConfig),quadrantBuilder.setThemeConfig({quadrant1Fill:themeVariables.quadrant1Fill,quadrant2Fill:themeVariables.quadrant2Fill,quadrant3Fill:themeVariables.quadrant3Fill,quadrant4Fill:themeVariables.quadrant4Fill,quadrant1TextFill:themeVariables.quadrant1TextFill,quadrant2TextFill:themeVariables.quadrant2TextFill,quadrant3TextFill:themeVariables.quadrant3TextFill,quadrant4TextFill:themeVariables.quadrant4TextFill,quadrantPointFill:themeVariables.quadrantPointFill,quadrantPointTextFill:themeVariables.quadrantPointTextFill,quadrantXAxisTextFill:themeVariables.quadrantXAxisTextFill,quadrantYAxisTextFill:themeVariables.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:themeVariables.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:themeVariables.quadrantInternalBorderStrokeFill,quadrantTitleFill:themeVariables.quadrantTitleFill}),quadrantBuilder.setData({titleText:(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.t)()}),quadrantBuilder.build()},clear:function(){quadrantBuilder.clear(),(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.v)()},setAccTitle:_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.s,getAccTitle:_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.g,setDiagramTitle:_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.q,getDiagramTitle:_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.t,getAccDescription:_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.a,setAccDescription:_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.b},renderer:{draw:(txt,id,_version,diagObj)=>{var _a,_b,_c;function getDominantBaseLine(horizontalPos){return"top"===horizontalPos?"hanging":"middle"}function getTextAnchor(verticalPos){return"left"===verticalPos?"start":"middle"}function getTransformation(data){return`translate(${data.x}, ${data.y}) rotate(${data.rotation||0})`}const conf=(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.c)();_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.l.debug("Rendering quadrant chart\n"+txt);const securityLevel=conf.securityLevel;let sandboxElement;"sandbox"===securityLevel&&(sandboxElement=(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ltv)("#i"+id));const svg=("sandbox"===securityLevel?(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ltv)(sandboxElement.nodes()[0].contentDocument.body):(0,d3__WEBPACK_IMPORTED_MODULE_0__.Ltv)("body")).select(`[id="${id}"]`),group=svg.append("g").attr("class","main"),width=(null==(_a=conf.quadrantChart)?void 0:_a.chartWidth)||500,height=(null==(_b=conf.quadrantChart)?void 0:_b.chartHeight)||500;(0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_4__.i)(svg,height,width,(null==(_c=conf.quadrantChart)?void 0:_c.useMaxWidth)||!0),svg.attr("viewBox","0 0 "+width+" "+height),diagObj.db.setHeight(height),diagObj.db.setWidth(width);const quadrantData=diagObj.db.getQuadrantData(),quadrantsGroup=group.append("g").attr("class","quadrants"),borderGroup=group.append("g").attr("class","border"),dataPointGroup=group.append("g").attr("class","data-points"),labelGroup=group.append("g").attr("class","labels"),titleGroup=group.append("g").attr("class","title");quadrantData.title&&titleGroup.append("text").attr("x",0).attr("y",0).attr("fill",quadrantData.title.fill).attr("font-size",quadrantData.title.fontSize).attr("dominant-baseline",getDominantBaseLine(quadrantData.title.horizontalPos)).attr("text-anchor",getTextAnchor(quadrantData.title.verticalPos)).attr("transform",getTransformation(quadrantData.title)).text(quadrantData.title.text),quadrantData.borderLines&&borderGroup.selectAll("line").data(quadrantData.borderLines).enter().append("line").attr("x1",(data=>data.x1)).attr("y1",(data=>data.y1)).attr("x2",(data=>data.x2)).attr("y2",(data=>data.y2)).style("stroke",(data=>data.strokeFill)).style("stroke-width",(data=>data.strokeWidth));const quadrants=quadrantsGroup.selectAll("g.quadrant").data(quadrantData.quadrants).enter().append("g").attr("class","quadrant");quadrants.append("rect").attr("x",(data=>data.x)).attr("y",(data=>data.y)).attr("width",(data=>data.width)).attr("height",(data=>data.height)).attr("fill",(data=>data.fill)),quadrants.append("text").attr("x",0).attr("y",0).attr("fill",(data=>data.text.fill)).attr("font-size",(data=>data.text.fontSize)).attr("dominant-baseline",(data=>getDominantBaseLine(data.text.horizontalPos))).attr("text-anchor",(data=>getTextAnchor(data.text.verticalPos))).attr("transform",(data=>getTransformation(data.text))).text((data=>data.text.text));labelGroup.selectAll("g.label").data(quadrantData.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text((data=>data.text)).attr("fill",(data=>data.fill)).attr("font-size",(data=>data.fontSize)).attr("dominant-baseline",(data=>getDominantBaseLine(data.horizontalPos))).attr("text-anchor",(data=>getTextAnchor(data.verticalPos))).attr("transform",(data=>getTransformation(data)));const dataPoints=dataPointGroup.selectAll("g.data-point").data(quadrantData.points).enter().append("g").attr("class","data-point");dataPoints.append("circle").attr("cx",(data=>data.x)).attr("cy",(data=>data.y)).attr("r",(data=>data.radius)).attr("fill",(data=>data.fill)),dataPoints.append("text").attr("x",0).attr("y",0).text((data=>data.text.text)).attr("fill",(data=>data.text.fill)).attr("font-size",(data=>data.text.fontSize)).attr("dominant-baseline",(data=>getDominantBaseLine(data.text.horizontalPos))).attr("text-anchor",(data=>getTextAnchor(data.text.verticalPos))).attr("transform",(data=>getTransformation(data.text)))}},styles:()=>""}}}]);
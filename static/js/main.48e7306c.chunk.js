(this["webpackJsonpbro-test4"]=this["webpackJsonpbro-test4"]||[]).push([[0],{251:function(e,t,a){},437:function(e,t,a){},438:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(1),c=a(20),s=a.n(c),i=(a(251),a(35)),o=a(55),u=a(36),l=a(209),j=a(14),b="IS_LOADING_TIMER",d="GET_TIMER",m="GET_TIMER_SUCCESS",O="GET_TIMER_ERROR",p="START_TIMER",f="START_TIMER_SUCCESS",x="START_TIMER_ERROR",h="STOP_TIMER",k="STOP_TIMER_SUCCESS",g="STOP_TIMER_ERROR",v={isLoading:!1,timeStart:0,taskName:void 0,error:""},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case m:case f:return Object(j.a)(Object(j.a)({},e),{},{error:"",isLoading:!1,timeStart:n.timeStart,taskName:n.taskName});case k:return Object(j.a)(Object(j.a)({},e),{},{error:"",isLoading:!1,timeStart:0,taskName:void 0});case b:return Object(j.a)(Object(j.a)({},e),{},{isLoading:n});case O:case x:case g:return Object(j.a)(Object(j.a)({},e),{},{error:n.error,isLoading:!1});default:return e}},y=a(58),T="IS_LOADING",N="GET_TASKS",w="GET_TASKS_SUCCESS",E="DELETE_TASK",C="GENERATE_TASKS",_={tasks:[],error:"",isLoading:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case w:return Object(j.a)(Object(j.a)({},e),{},{error:"",isLoading:!1,tasks:Object(y.a)(n)});case T:return Object(j.a)(Object(j.a)({},e),{},{isLoading:n,error:""});default:return e}},L="IS_LOADING",I="GET_TASK",A="GET_TASK_SUCCESS",D="GET_TASK_ERROR",M={task:{},error:"",isLoading:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case A:return Object(j.a)(Object(j.a)({},e),{},{error:"",task:Object(j.a)({},n),isLoading:!1});case D:return Object(j.a)(Object(j.a)({},e),{},{error:n.error,isLoading:!1});case L:return Object(j.a)(Object(j.a)({},e),{},{isLoading:n,error:""});default:return e}},G="SET_IS_MODAL",F="SET_IS_MODAL_SUCCESS",W={title:"",msg:"",isModal:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case F:return Object(j.a)(Object(j.a)({},e),{},{title:n.title,msg:n.msg,isModal:n.isModal});default:return e}},P=Object(u.c)({timer:S,tasks:R,task:H,modal:K}),J=a(10),U=a.n(J),B=a(11),X=a(111),z=function(){var e=Object(X.a)(U.a.mark((function e(t,a){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.setItem(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),V=function(){var e=Object(X.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem(t);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=null;case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(X.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){return{type:b,payload:e}},Q=U.a.mark(re),Z=U.a.mark(ce),$=U.a.mark(se),ee=U.a.mark(ie),te=U.a.mark(oe),ae=U.a.mark(ue),ne=U.a.mark(le);function re(){var e,t;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(B.c)(q(!0));case 3:return a.next=5,Object(B.b)(V,"timeStart");case 5:return e=a.sent,a.next=8,Object(B.b)(V,"taskName");case 8:return t=a.sent,a.next=11,Object(B.c)({type:m,payload:{timeStart:e||0,taskName:t||""}});case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(0),a.next=17,Object(B.c)({type:O,error:a.t0});case 17:case"end":return a.stop()}}),Q,null,[[0,13]])}function ce(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(d,re);case 2:case"end":return e.stop()}}),Z)}function se(e){var t;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(B.c)(q(!0));case 4:return a.next=6,Object(B.b)(z,"timeStart",t.timeStart);case 6:return a.next=8,Object(B.b)(z,"taskName",t.taskName);case 8:return a.next=10,Object(B.c)({type:f,payload:t});case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(1),a.next=16,Object(B.c)({type:x,error:a.t0});case 16:case"end":return a.stop()}}),$,null,[[1,12]])}function ie(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(p,se);case 2:case"end":return e.stop()}}),ee)}function oe(e){var t,a,n;return U.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(B.b)(Y,"timeStart");case 4:return r.next=6,Object(B.b)(Y,"taskName");case 6:return r.next=8,Object(B.b)(V,"timersData");case 8:return a=r.sent,n=JSON.parse(a)||[],r.next=12,Object(B.b)(z,"timersData",JSON.stringify([].concat(Object(y.a)(n),[Object(j.a)({},t)])));case 12:return r.next=14,Object(B.c)({type:k});case 14:return r.next=16,Object(B.c)({type:d});case 16:return r.next=18,Object(B.c)({type:N});case 18:r.next=24;break;case 20:return r.prev=20,r.t0=r.catch(1),r.next=24,Object(B.c)({type:g,error:r.t0});case 24:case"end":return r.stop()}}),te,null,[[1,20]])}function ue(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(h,oe);case 2:case"end":return e.stop()}}),ae)}function le(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([ce(),ie(),ue()]);case 2:case"end":return e.stop()}}),ne)}var je=[{taskName:"task1",time:6e5,timeStart:1607400891167,timeEnd:1607401491167},{taskName:"task2",time:12e5,timeStart:16074015e5,timeEnd:16074027e5},{taskName:"task3",time:4e6,timeStart:16074027e5,timeEnd:16074067e5},{taskName:"task4",time:3e6,timeStart:16074067e5,timeEnd:16074097e5},{taskName:"task5",time:1e6,timeStart:16074097e5,timeEnd:16074107e5},{taskName:"task6",time:2e6,timeStart:16074177e5,timeEnd:16074197e5},{taskName:"task7",time:5e6,timeStart:16074217e5,timeEnd:16074267e5},{taskName:"task8",time:7e5,timeStart:16074297e5,timeEnd:16074304e5},{taskName:"task9",time:1e6,timeStart:16074304e5,timeEnd:16074314e5},{taskName:"task10",time:28e5,timeStart:16074314e5,timeEnd:16074342e5}],be=U.a.mark(he),de=U.a.mark(ke),me=U.a.mark(ge),Oe=U.a.mark(ve),pe=U.a.mark(Se),fe=U.a.mark(ye),xe=U.a.mark(Te);function he(){var e,t;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(B.c)({type:T,payload:!0});case 3:return a.next=5,Object(B.b)(V,"timersData");case 5:return e=a.sent,t=JSON.parse(e)||[],a.next=9,Object(B.c)({type:w,payload:Object(y.a)(t)});case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(B.c)({type:"GET_TASKS_ERROR",error:a.t0});case 15:case"end":return a.stop()}}),be,null,[[0,11]])}function ke(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(N,he);case 2:case"end":return e.stop()}}),de)}function ge(e){var t;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.data,a.prev=1,a.next=4,Object(B.c)({type:T,payload:!0});case 4:return a.next=6,Object(B.b)(z,"timersData",JSON.stringify(Object(y.a)(t)));case 6:return a.next=8,Object(B.c)({type:N});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(1),a.next=14,Object(B.c)({type:"DELETE_TASK_ERROR",error:a.t0});case 14:case"end":return a.stop()}}),me,null,[[1,10]])}function ve(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(E,ge);case 2:case"end":return e.stop()}}),Oe)}function Se(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(B.b)(Y,"timersData");case 3:return e.next=5,Object(B.b)(z,"timersData",JSON.stringify(je));case 5:return e.next=7,Object(B.c)({type:N});case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),pe,null,[[0,9]])}function ye(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(C,Se);case 2:case"end":return e.stop()}}),fe)}function Te(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([ke(),ve(),ye()]);case 2:case"end":return e.stop()}}),xe)}var Ne=U.a.mark(Ce),we=U.a.mark(_e),Ee=U.a.mark(Re);function Ce(e){var t,a,n,r;return U.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.id,c.prev=1,c.next=4,Object(B.c)({type:L,payload:!0});case 4:return c.next=6,Object(B.b)(V,"timersData");case 6:if(a=c.sent,!(n=JSON.parse(a).filter((function(e,a){return a===+t}))[0])){c.next=13;break}return c.next=11,Object(B.c)({type:A,payload:Object(j.a)({},n)});case 11:c.next=16;break;case 13:return r={error:404},c.next=16,Object(B.c)({type:D,payload:Object(j.a)({},r)});case 16:c.next=22;break;case 18:return c.prev=18,c.t0=c.catch(1),c.next=22,Object(B.c)({type:D,error:c.t0});case 22:case"end":return c.stop()}}),Ne,null,[[1,18]])}function _e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(I,Ce);case 2:case"end":return e.stop()}}),we)}function Re(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([_e()]);case 2:case"end":return e.stop()}}),Ee)}var Le=U.a.mark(De),Ie=U.a.mark(Me),Ae=U.a.mark(He);function De(e){var t;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(B.c)({type:F,payload:t});case 4:a.next=8;break;case 6:a.prev=6,a.t0=a.catch(1);case 8:case"end":return a.stop()}}),Le,null,[[1,6]])}function Me(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(G,De);case 2:case"end":return e.stop()}}),Ie)}function He(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([Me()]);case 2:case"end":return e.stop()}}),Ae)}var Ge=U.a.mark(Fe);function Fe(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([le(),Te(),Re(),He()]);case 2:case"end":return e.stop()}}),Ge)}var We=Object(l.a)(),Ke=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):u.d)(Object(u.a)(We)),Pe=Object(u.e)(P,Ke);We.run(Fe);var Je=Pe,Ue=a(24),Be=a(59),Xe=a(29),ze=a.n(Xe),Ve=a(487),Ye=a(469),qe=Object(Ye.a)((function(){return{container:{display:"flex",flexDirection:"column",margin:"20px auto",width:"500px",alignItems:"center"},input:{width:"300px",color:"#3248c9"},timer:{width:"200px",height:"200px",textAlign:"center",lineHeight:"200px",border:"2px solid #f5f5f5",borderRadius:"50%",boxShadow:"0px 3px 4px 1px #bbb",margin:"20px 0",fontSize:"20px",color:"#3248c9",fontWeight:"bold"},button:{maxWidth:"100px",color:"#3248c9"}}})),Qe=function(e){var t=e.changeTimerStatus,a=e.time,r=e.taskName,c=e.onChangeName,s=qe();return Object(n.jsxs)("div",{className:s.container,children:[Object(n.jsx)(Ve.a,{id:"taskName",placeholder:"Name of your task",value:r||"",className:s.input,inputProps:{style:{textAlign:"center",color:"#3248c9"}},onChange:c}),Object(n.jsx)("div",{className:s.timer,children:ze.a.utc(a).format("HH:mm:ss")}),Object(n.jsx)(lt,{onClick:t,children:a?"STOP":"START"})]})},Ze=a(473),$e=a(474),et=a(475),tt=a(476),at=a(477),nt=a(478),rt=Object(Ye.a)((function(){return{headCell:{color:"#a49e9e"},bodyCell:{color:"#3248c9",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:"170px"},bodyRow:{backgroundColor:"#eaf6ff",fontWeight:"bold"}}})),ct=function(e){var t=e.tasks,a=e.removeTask,r=e.goToTask,c=e.value,s=e.index,i=rt();return Object(n.jsx)(Ze.a,{children:c===s&&Object(n.jsxs)($e.a,{children:[Object(n.jsx)(et.a,{children:Object(n.jsxs)(tt.a,{children:[Object(n.jsx)(at.a,{className:i.headCell,children:"\u2116"}),Object(n.jsx)(at.a,{className:i.headCell,children:"Task"}),Object(n.jsx)(at.a,{className:i.headCell,children:"Time start"}),Object(n.jsx)(at.a,{className:i.headCell,children:"Time end"}),Object(n.jsx)(at.a,{className:i.headCell,children:"Time spend"}),Object(n.jsx)(at.a,{className:i.headCell,children:"Info"}),Object(n.jsx)(at.a,{className:i.headCell,children:"Delete"})]})}),Object(n.jsx)(nt.a,{children:t.map((function(e,t){return Object(n.jsxs)(tt.a,{className:i.bodyRow,children:[Object(n.jsx)(at.a,{className:i.bodyCell,children:t+1}),Object(n.jsx)(at.a,{className:i.bodyCell,children:e.taskName}),Object(n.jsx)(at.a,{className:i.bodyCell,children:ze()(e.timeStart).format("HH:mm:ss")}),Object(n.jsx)(at.a,{className:i.bodyCell,children:ze()(e.timeEnd).format("HH:mm:ss")}),Object(n.jsx)(at.a,{className:i.bodyCell,children:ze.a.utc(e.timeEnd-e.timeStart).format("HH:mm:ss")}),Object(n.jsx)(at.a,{className:i.bodyCell,children:Object(n.jsx)(lt,{onClick:r(t),children:"Info"})}),Object(n.jsx)(at.a,{className:i.bodyCell,children:Object(n.jsx)(lt,{onClick:a(t),children:"Delete"})})]},t)}))})]})})},st=Object(Ye.a)((function(){return{container:{maxWidth:"500px",margin:"0 auto"},title:{textAlign:"center",color:"#3248c9"},p:{fontWeight:"bold"},time:{fontWeight:"normal",fontStyle:"italic"}}})),it=function(e){var t=e.task,a=e.goHome,r=st(),c=t.taskName,s=t.timeStart,i=t.timeEnd;return Object(n.jsxs)("div",{className:r.container,children:[Object(n.jsx)("h2",{className:r.title,children:c}),Object(n.jsxs)("p",{className:r.p,children:["Time start:"," ",Object(n.jsx)("span",{className:r.time,children:ze()(s).format("HH:mm:ss")})]}),Object(n.jsxs)("p",{className:r.p,children:["Time end:"," ",Object(n.jsx)("span",{className:r.time,children:ze()(i).format("HH:mm:ss")})]}),Object(n.jsxs)("p",{className:r.p,children:["Time spend:"," ",Object(n.jsxs)("span",{className:r.time,children:[ze.a.utc(i-s).format("HH:mm:ss")," minutes"]})]}),Object(n.jsx)(lt,{onClick:a,children:"Go home"})]})},ot=a(479),ut=Object(Ye.a)((function(){return{button:{color:"#3248c9",backgroundColor:"#FFF"}}})),lt=function(e){var t=e.children,a=e.onClick,r=ut();return Object(n.jsx)(ot.a,{variant:"contained",className:r.button,onClick:a,children:t})},jt=a(490),bt=a(480),dt=a(481),mt=a(482),Ot=a(483),pt=Object(Ye.a)((function(){return{title:{color:"#bf2b5c",fontWeight:"bold"},text:{color:"#666666"},btn:{color:"#1ac0d7",textTransform:"upper-case"}}})),ft=function(e){var t=e.isOpen,a=e.handleClose,r=e.title,c=e.msg,s=pt();return Object(n.jsxs)(jt.a,{open:t,onClose:a,maxWidth:"md",fullWidth:!0,children:[Object(n.jsx)(bt.a,{className:s.title,children:r}),Object(n.jsx)(dt.a,{children:Object(n.jsx)(mt.a,{className:s.text,children:c})}),Object(n.jsx)(Ot.a,{children:Object(n.jsx)(ot.a,{onClick:a,color:"primary",className:s.btn,children:"Close"})})]})},xt=a(41),ht=Object(Ye.a)((function(){return{chartContainer:{marginTop:"20px"},generateBtnContainer:{textAlign:"right",paddingRight:"40px"}}})),kt=function(e){var t=e.value,a=e.index,c=e.tasks,s=e.generateTasks,i=ht(),o=Object(r.useState)([]),u=Object(Be.a)(o,2),l=u[0],j=u[1];return Object(r.useEffect)((function(){j(function(e){var t=[],a=[];e.map((function(e){var a=+ze()(e.timeStart).format("H"),n=+ze()(e.timeEnd).format("H");if(n===a)t.push({name:a,minutes:+ze()(e.time).format("m")});else{var r=n-a;if(t.push({name:a,minutes:60-+ze()(e.timeStart).format("m")}),r>1)for(var c=a+1;c<n;c++)t.push({name:c,minutes:60});t.push({name:n,minutes:+ze()(e.timeEnd).format("m")})}}));for(var n=function(e){var n=t.filter((function(t){return t.name===e}));0===n.length?a.push({name:e,minutes:0}):1===n.length?a.push(n[0]):a.push({name:e,minutes:n.reduce((function(e,t){return e+ +t.minutes}),0)})},r=0;r<=23;r++)n(r);return a}(c))}),[c]),Object(n.jsx)(n.Fragment,{children:t===a&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(xt.e,{className:i.chartContainer,width:"99%",height:350,children:Object(n.jsxs)(xt.b,{data:l,children:[Object(n.jsx)(xt.c,{strokeDasharray:"3 3"}),Object(n.jsx)(xt.g,{dataKey:"name"}),Object(n.jsx)(xt.h,{}),Object(n.jsx)(xt.f,{}),Object(n.jsx)(xt.d,{}),Object(n.jsx)(xt.a,{dataKey:"minutes",name:"Minutes in this hours",fill:"#3248c7"})]})}),Object(n.jsx)("div",{className:i.generateBtnContainer,children:Object(n.jsx)(lt,{onClick:s,children:"Generate"})})]})})},gt=Object(Ye.a)((function(){return{notFound:{color:"#3248c9",width:"100%",height:"100vh"},title:{textAlign:"center",lineHeight:"100vh",margin:"0",fontSize:"30px"},link:{textDecoration:"none",color:"#1ac0d7"}}})),vt=function(){var e=gt();return Object(n.jsx)("div",{className:e.notFound,children:Object(n.jsxs)("h2",{className:e.title,children:["=( Page not found -"," ",Object(n.jsx)(o.b,{className:e.link,to:"/",children:"go home"})]})})},St=a(484),yt=Object(Ye.a)((function(){return{container:{textAlign:"center",height:"50px"}}})),Tt=function(){var e=yt();return Object(n.jsx)("div",{className:e.container,children:Object(n.jsx)(St.a,{})})},Nt={start:function(e){return{type:p,payload:e}},stop:function(e){return{type:h,payload:e}},getTimer:function(){return{type:d}},openModal:function(e){return{type:G,payload:e}}},wt=Object(i.b)((function(e){var t=e.timer;return{error:t.error,timeStart:t.timeStart,taskName:t.taskName,isLoading:t.isLoading}}),Nt)((function(e){var t=e.start,a=e.getTimer,c=e.error,s=e.timeStart,i=e.taskName,o=e.isLoading,u=e.stop,l=e.openModal,j=Object(r.useState)(0),b=Object(Be.a)(j,2),d=b[0],m=b[1],O=Object(r.useState)(i),p=Object(Be.a)(O,2),f=p[0],x=p[1];Object(r.useEffect)((function(){var e;return s?(m((new Date).getTime()-s),x(i),e=setInterval((function(){m((function(e){return e+1e3}))}),1e3)):m(s),function(){return clearInterval(e)}}),[s]),Object(r.useEffect)((function(){a()}),[a]);return Object(n.jsxs)(n.Fragment,{children:[o&&Object(n.jsx)(Tt,{}),!o&&Object(n.jsx)(Qe,{changeTimerStatus:function(){if(s)if(f)u({taskName:f,time:+d,timeStart:+s,timeEnd:+(new Date).getTime()}),x("");else{l({title:"Empty task name",msg:"You are trying close your task without name, enter the title and try again!",isModal:!0})}else t({timeStart:+(new Date).getTime(),taskName:f})},error:c,time:d,taskName:f,isLoading:o,onChangeName:function(e){var t=e.target.value;x(t)}})]})})),Et=a(485),Ct=a(488),_t=a(486),Rt={getTasks:function(){return{type:N}},deleteTask:function(e){return{type:E,data:e}},generateTasks:function(){return{type:C}}},Lt=Object(i.b)((function(e){var t=e.tasks;return{error:t.error,isLoading:t.isLoading,tasks:t.tasks}}),Rt)((function(e){var t=e.tasks,a=e.getTasks,c=e.deleteTask,s=e.isLoading,i=e.generateTasks,o=Object(r.useState)(0),u=Object(Be.a)(o,2),l=u[0],j=u[1],b=Object(Ue.g)(),d=b.location.pathname;Object(r.useEffect)((function(){"/charts"===d&&1!==l?j(1):"/logs"===d&&0!==l&&j(0)}),[d,l]),Object(r.useEffect)((function(){a()}),[a]);return Object(n.jsxs)("div",{children:[Object(n.jsx)(Et.a,{position:"static",children:Object(n.jsxs)(Ct.a,{value:l,onChange:function(e,t){0===t?b.push("/logs"):b.push("/charts")},centered:!0,style:{backgroundColor:"#01bcd5"},children:[Object(n.jsx)(_t.a,{label:"Tasks Log",fullWidth:!0,style:{minWidth:"50%"}}),Object(n.jsx)(_t.a,{label:"Tasks Chart",fullWidth:!0,style:{minWidth:"50%"}})]})}),s&&Object(n.jsx)(Tt,{}),!s&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ct,{tasks:t,goToTask:function(e){return function(){b.push("/task/".concat(e))}},removeTask:function(e){return function(){var a=t.filter((function(t,a){return a!==e}));c(a)}},index:0,value:l,children:"TASKS LOG"}),Object(n.jsx)(kt,{value:l,index:1,tasks:t,generateTasks:i,children:"TASKS CHART"})]})]})})),It=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(wt,Object(j.a)({},e)),Object(n.jsx)(Lt,Object(j.a)({},e))]})},At={getTask:function(e){return{type:I,id:e}}},Dt=Object(i.b)((function(e){var t=e.task;return{isLoading:t.isLoading,task:t.task,error:t.error}}),At)((function(e){var t=e.getTask,a=e.match,c=e.task,s=e.isLoading,i=e.error,o=a.params.id,u=Object(Ue.g)();return Object(r.useEffect)((function(){t(o)}),[o,t]),Object(n.jsxs)(n.Fragment,{children:[s&&Object(n.jsx)(Tt,{}),!s&&Object(n.jsx)(it,{task:c,goHome:function(){u.push("/")}}),404===i&&Object(n.jsx)(Ue.a,{to:"/not-found"})]})})),Mt={closeModal:function(){return{type:G,payload:{msg:"",title:"",isModal:!1}}}},Ht=Object(i.b)((function(e){var t=e.modal;return{title:t.title,msg:t.msg,isModal:t.isModal}}),Mt)((function(e){var t=e.title,a=e.msg,r=e.isModal,c=e.closeModal;return Object(n.jsx)(ft,{title:t,msg:a,handleClose:c,isOpen:r})})),Gt=function(e){return Object(n.jsx)(It,Object(j.a)({},e))},Ft=function(e){return Object(n.jsx)(Dt,Object(j.a)({},e))},Wt=function(){return Object(n.jsx)(vt,{})},Kt=function(){return Object(n.jsxs)(Ue.d,{children:[Object(n.jsx)(Ue.b,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(Gt,Object(j.a)({},e))}}),Object(n.jsx)(Ue.b,{exact:!0,path:"/logs",render:function(e){return Object(n.jsx)(Gt,Object(j.a)({},e))}}),Object(n.jsx)(Ue.b,{exact:!0,path:"/charts",render:function(e){return Object(n.jsx)(Gt,Object(j.a)({},e))}}),Object(n.jsx)(Ue.b,{exact:!0,path:"/task/:id",render:function(e){return Object(n.jsx)(Ft,Object(j.a)({},e))}}),Object(n.jsx)(Wt,{})]})},Pt=(a(437),function(){return Object(n.jsx)(i.a,{store:Je,children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(Kt,{}),Object(n.jsx)(Ht,{})]})})}),Jt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,492)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(n.jsx)(Pt,{}),document.getElementById("root")),Jt()}},[[438,1,2]]]);
//# sourceMappingURL=main.48e7306c.chunk.js.map
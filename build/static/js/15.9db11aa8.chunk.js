(this.webpackJsonpintercoin=this.webpackJsonpintercoin||[]).push([[15],{1177:function(e,t,a){"use strict";var n=a(2),o=a(10),s=a(0),r=(a(8),a(9)),i=a(13),c=a(67),l=s.forwardRef((function(e,t){var a=e.classes,i=e.className,l=Object(o.a)(e,["classes","className"]),d=s.useContext(c.a);return s.createElement("div",Object(n.a)({className:Object(r.a)(a.root,i,"flex-start"===d.alignItems&&a.alignItemsFlexStart),ref:t},l))}));t.a=Object(i.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(l)},1178:function(e,t,a){"use strict";var n=a(2),o=a(10),s=a(0),r=(a(8),a(9)),i=a(13),c=s.forwardRef((function(e,t){var a=e.classes,i=e.className,c=Object(o.a)(e,["classes","className"]);return s.createElement("div",Object(n.a)({className:Object(r.a)(a.root,i),ref:t},c))}));c.muiName="ListItemSecondaryAction",t.a=Object(i.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(c)},1198:function(e,t,a){"use strict";a.r(t);var n=a(23),o=a(7),s=a(0),r=a.n(s),i=a(104),c=a(30),l=a(454),d=a(152),p=a(399),m=a(400),u=a(1177),g=a(1178),h=a(461),b=a(700),j=a(854),v=a.n(j),f=a(855),x=a.n(f),O=a(193),C=a.n(O),y=a(471),w=a(475),k=a(106),S=a(19),N=a(5),B=a.n(N),D=a(127),L=a(155),A=a(1),F=Object(i.a)((function(e){return{actionButton:{backgroundColor:e.custom.palette.darkRed,minWidth:e.spacing(12),border:"none"},rangeContainer:{display:"flex",justifyContent:"space-between"},dialogActions:{display:"flex",justifyContent:"flex-end",marginTop:e.spacing(3),marginRight:-e.spacing(2/8)},titleLine:{marginBottom:e.spacing(2.5)},fileDropZone:{height:96,minHeight:"unset"}}})),T=function(e){var t=e.open,a=e.onClose,r=e.headerTitle,i=F(),c=Object(L.b)(),p=Object(s.useState)({}),m=Object(n.a)(p,2),u=m[0],g=m[1],h=function(){var e=Object(D.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=Object(s.useCallback)((function(e){var t=e.target,a=t.name,n=t.value;g((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(o.a)({},a,n))}))}),[]);return Object(A.jsx)(L.a,{open:t,onClose:a,smallWidth:!0,children:Object(A.jsx)("form",{onSubmit:h,children:Object(A.jsxs)("div",{className:c.root,children:[Object(A.jsx)(d.a,{variant:"h6",className:i.titleLine,children:r}),Object(A.jsxs)(l.a,{container:!0,spacing:2,children:[Object(A.jsx)(l.a,{md:12,xs:12,item:!0,children:Object(A.jsx)(w.a,{placeholder:"Enter Question"})}),Object(A.jsxs)(l.a,{style:{display:"flex",flexDirection:"row",alignItems:"center"},md:12,xs:12,item:!0,children:[Object(A.jsx)(l.a,{md:4,xs:7,item:!0,children:Object(A.jsx)(d.a,{component:"div",variant:"body1",children:"Values :"})}),Object(A.jsx)(l.a,{md:4,xs:12,item:!0,children:Object(A.jsx)(w.a,{name:"from",prefix:"from:",type:"number",placeholder:"From",value:u.from||0,onChange:b})}),Object(A.jsx)("div",{style:{width:"8px"}}),Object(A.jsx)(l.a,{md:4,xs:12,item:!0,children:Object(A.jsx)(w.a,{name:"to",prefix:"to:",type:"number",placeholder:"to",value:u.to||0,onChange:b})})]}),Object(A.jsx)(l.a,{md:12,xs:12,item:!0,children:Object(A.jsx)(w.a,{placeholder:"Internal Name"})})]}),Object(A.jsx)("div",{className:i.dialogActions,children:Object(A.jsx)(k.a,{className:i.actionButton,type:"submit",children:"Create Option"})})]})})})},P=a(18),_=a(472),I=Object(i.a)((function(e){return{root:{display:"flex",height:"100%",flexDirection:"column",justifyContent:"space-between",alignItems:"center",marginTop:e.spacing(1)},GridContainer:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},listContainer:{width:"100%",backgroundColor:e.palette.background.main},listItem:{"&:hover":{transform:"translateX(-2px)",transition:"ease-out 0.4s ",opacity:"100%"},transition:"ease-out 0.4s"},header:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:e.spacing(4)},saveButton:{marginTop:e.spacing(4),display:"flex",justifyContent:"flex-end"},twoInputs:{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:100},radioGroupContainer:{display:"flex",width:"100%"},titleContainer:{display:"flex",alignItems:"center",margin:e.spacing(2,0,2,0),"&:hover":Object(o.a)({cursor:"pointer",transform:"translateY(-2px)",opacity:"100%",color:e.palette.text.secondary},"transform","translateY(-1px)"),transition:"ease-out 0.3s"},closeIcon:{color:"#555e6c","&:hover":{cursor:"pointer",opacity:"100%",color:e.custom.palette.darkRed},transition:"ease-out 0.3s"}}}));t.default=Object(c.h)((function(e){var t,a=e.history,o=e.location,i=e.match,c=I(),j=r.a.useState("1"),f=Object(n.a)(j,2),O=(f[0],f[1],Object(s.useState)()),S=Object(n.a)(O,2),N=S[0],B=S[1],D="new"===i.params._id;return Object(A.jsxs)(y.a,{center:!0,title:D?"Create New Poll":"Edit Poll",children:[Object(A.jsxs)("div",{className:c.root,children:[Object(A.jsx)(l.a,{container:!0,className:c.GridContainer,spacing:3,children:Object(A.jsxs)(l.a,{md:8,xs:12,item:!0,children:[Object(A.jsx)(w.a,{value:D?"":_.e[i.params._id].title,placeholder:"Enther title of poll"}),Object(A.jsxs)(d.a,{onClick:function(){B(!0)},className:c.titleContainer,component:"div",variant:"h6",children:[Object(A.jsx)(v.a,{style:{marginRight:4}}),"Add Option"]}),Object(A.jsx)(p.a,{className:c.listContainer,children:_.d.map((function(e,t){return Object(A.jsxs)(m.a,{className:c.listItem,dense:!0,button:!0,onClick:function(){},children:[Object(A.jsx)(u.a,{children:Object(A.jsx)(x.a,{style:{color:"#16ACE2"}})}),Object(A.jsx)(h.a,{primary:"".concat(e.content)}),Object(A.jsx)(g.a,{children:Object(A.jsx)(b.a,{edge:"end","aria-label":"close",children:Object(A.jsx)(C.a,{className:c.closeIcon,fontSize:"small"})})})]},t)}))})]})}),Object(A.jsxs)("div",{className:c.saveButton,children:[Object(A.jsx)(k.a,{variant:"outlined",disabled:"",onClick:function(){a.push({pathname:P.a.POLLS.url,state:{currentPage:(o.state||{}).currentPage}})},children:"BACK"}),Object(A.jsx)(k.a,{disabled:"",style:{backgroundColor:"#4caf50"},onClick:function(){},children:"CREATE POLL"})]})]}),N&&Object(A.jsx)(T,{headerTitle:"Please enter your question!",open:!0,onClose:(t=!1,function(){B(t)})})]})}))},471:function(e,t,a){"use strict";var n=a(7),o=(a(0),a(104)),s=a(30),r=a(394),i=a(152),c=a(40),l=a(18),d=a(106),p=a(1),m=Object(o.a)((function(e){var t;return{root:function(t){var a;return a={},Object(n.a)(a,e.breakpoints.down("sm"),{padding:t.noPaddingTop?e.spacing(0):e.spacing(2,0,0,0)}),Object(n.a)(a,"display","flex"),Object(n.a)(a,"marginBottom",e.spacing(2)),Object(n.a)(a,"justifyContent",t.center?"center":"space-between"),Object(n.a)(a,"alignItems","center"),a},bold:(t={},Object(n.a)(t,e.breakpoints.down("sm"),{display:"none"}),Object(n.a)(t,"fontWeight","400"),t)}})),u=function(e){var t=e.title,a=e.buttonName,n=e.center,o=e.noPaddingTop,u=m({center:n,noPaddingTop:o}),g=Object(s.f)(),h=Object(c.a)(),b=Object(r.a)(h.breakpoints.down("sm"),{defaultMatches:!0});return Object(p.jsxs)("div",{className:u.root,children:[Object(p.jsx)(i.a,{className:u.bold,variant:"h5",children:t}),a&&!b&&Object(p.jsx)(d.a,{style:{backgroundColor:h.custom.palette.green},onClick:function(){g.push("".concat(l.a.POLLS.url,"/new"))},children:a})]})},g=Object(o.a)((function(e){return{root:function(t){var a;return a={},Object(n.a)(a,e.breakpoints.down("sm"),{padding:e.spacing(0,1.5,0,1.5)}),Object(n.a)(a,"height","100%"),Object(n.a)(a,"width","100%"),Object(n.a)(a,"display","flex"),Object(n.a)(a,"flexDirection",t.flexDirection?"row":"column"),Object(n.a)(a,"justifyContent","space-between"),Object(n.a)(a,"padding",e.spacing(2,4,0,4)),a},headerContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:e.spacing(0),marginBottom:e.spacing(0)}}}));t.a=function(e){var t=e.children,a=e.title,n=e.buttonName,o=e.center,s=e.flexDirection,r=e.noPaddingTop,i=g({flexDirection:s,noPaddingTop:r});return Object(p.jsxs)("div",{className:i.root,children:[Object(p.jsx)(u,{center:o,title:a,buttonName:n,noPaddingTop:r}),t]})}},472:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"g",(function(){return r})),a.d(t,"i",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"h",(function(){return l})),a.d(t,"f",(function(){return d})),a.d(t,"a",(function(){return p}));var n=[{checkStatus:!0,title:"We should build the entire project with the right approach and best practices",votingCount:16,context:"Project done needs to be more productive ",from:1,to:5},{checkStatus:!0,title:"We should use the Jira ticketing management system",votingCount:456,context:"Project  done needs to be more productive ",from:1,to:100},{checkStatus:!0,title:"We should build the entire project with the right approach and best practices",votingCount:56,context:"Project  done needs to be more productive ",from:0,to:10},{checkStatus:!0,title:"We should use the Jira ticketing management system",votingCount:26,context:"Project  done needs to be more productive ",from:1,to:5},{checkStatus:!0,title:"We should build the entire project with the right approach and best practices",votingCount:346,context:"Project  done needs to be more productive ",from:1,to:10},{checkStatus:!0,title:"We should use the Jira ticketing management system",votingCount:56,context:"Project  done needs to be more productive ",from:1,to:5},{checkStatus:!0,title:"We should build the entire project with the right approach and best practices",votingCount:5623,context:"Project  done needs to be more productive ",from:0,to:1},{checkStatus:!0,title:"We should use the Jira ticketing management system",votingCount:56,context:"Project  done needs to be more productive ",from:1,to:5}],o=[{id:0,content:"Should we follow the best practices to build any web application?",from:0,to:5},{id:1,content:"Or should we speed up the development without doing care of the quality?",from:0,to:10},{id:2,content:"Should we focus on both the quality and speed?",from:0,to:1},{id:3,content:"Should we follow the best practices to build any web application?",from:0,to:5},{id:4,content:"Or should we speed up the development without doing care of the quality?",from:0,to:10},{id:5,content:"Should we focus on both the quality and speed?",from:0,to:5}],s=[{logo:"assets/images/logos/value-exchange_200w.png",name:"Decentralized_Finance"},{logo:"assets/images/logos/team-of-electronic-servants_200w.png",name:"Identity_Management"},{logo:"assets/images/logos/evidencer_200w.png",name:"Software_as_a_Service_SaaS"},{logo:"assets/images/logos/victim-services_200w.png",name:"Medical_Services_and_Devices"},{logo:"assets/images/logos/world-computer_200w.png",name:"Insurance_Management_Services"},{logo:"assets/images/logos/web3evm-p02-300sq.png",name:"Legaltech_Services"}],r={items:["Fast response","National resource","5-Star reviews","Intuitive features"],team:[{authorPhoto:{src:"assets/images/photos/people/mimc.jpg",srcSet:"assets/images/photos/people/mimc@2x.jpg 2x"},authorName:"Anne McAllister"},{authorPhoto:{src:"assets/images/photos/people/role.jpg",srcSet:"assets/images/photos/people/role@2x.jpg 2x"},authorName:"Robert Leonhard"},{authorPhoto:{src:"assets/images/photos/people/scst.jpg",srcSet:"assets/images/photos/people/scst@2x.jpg 2x"},authorName:"Scott Stevenson"}]},i=[{type:1,sender:"kevin",receiver:"James",avatarUrl:"/assets/images/photos/people/ss-400x-js@2x.png"},{type:1,sender:"kevin jin",receiver:"Romeo juliet",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:1,sender:"kevin jin",receiver:"James Bond",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:1,sender:"kevin jin",receiver:"Romeo juliet",avatarUrl:"/assets/images/photos/people/expert-cover.png"},{type:1,sender:"kevin",receiver:"James",avatarUrl:"/assets/images/photos/people/ss-400x-js@2x.png"},{type:1,sender:"kevin jin",receiver:"Romeo juliet",avatarUrl:"/assets/images/photos/people/expert-cover.png"},{type:1,sender:"kevin jin",receiver:"James Bond",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:1,sender:"kevin jin",receiver:"Romeo juliet",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:1,sender:"kevin jin",receiver:"Romeo juliet",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:1,sender:"kevin",receiver:"James",avatarUrl:"/assets/images/photos/people/ss-400x-js@2x.png"},{type:1,sender:"kevin jin",receiver:"James Bond",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:1,sender:"kevin jin",receiver:"Romeo juliet",avatarUrl:"/assets/images/photos/people/expert-cover.png"},{type:2,companyTitle:"Intercoin : Welcome",subTitle:"Intercoin - Building the world wide web ",imageUrl:"/assets/images/Intercoin.png",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:2,companyTitle:"Scoot Santens - Social Network",subTitle:"The Disproportionate Efficent",imageUrl:"/assets/images/logos/evidencer_200w.png",avatarUrl:"/assets/images/photos/people/expert-cover.png"}],c=[{name:"John Smith",role:"Member, admin",account:"0x48631372F83B65387F84018F68B1ADf536Be17AD"},{name:"Bob Moo",role:"Member, engineer",avatar:"/assets/images/logos/web3evm-p02-300sq.png",account:"0x48631372F83B65387F84018F68B1ADf536Be17AD"},{name:"0X23436544...324",avatar:"/assets/images/logos/web3evm-p02-300sq.png",account:"0xe9D045cF6D3a2418eab537d3AC7a905a1dDcF048"},{name:"0X23456434...628",account:"0x48631372F83B65387F84018F68B1ADf536Be17AD"},{name:"0X27456434...384",avatar:"/assets/images/logos/web3evm-p02-300sq.png",account:"0x48631372F83B65387F84018F68B1ADf536Be17AD"},{name:"0X23654434...322",account:"0xe9D045cF6D3a2418eab537d3AC7a905a1dDcF048"},{name:"0X26453734...321",avatar:"/assets/images/logos/web3evm-p02-300sq.png",account:"0x48631372F83B65387F84018F68B1ADf536Be17AD"},{name:"0X23445634...726",account:"0x2Ca51ED4e4Bb914cbFC58A17d6D8b705c9407614"}],l=[{valeu:0,title:"Clothing",image:"/assets/images/logos/value-exchange_200w.png"},{value:1,title:"Books",image:"/assets/images/logos/victim-services_200w.png"},{value:2,title:"Venues",image:"/assets/images/logos/value-exchange_200w.png"},{value:3,title:"Tutoring",image:"/assets/images/logos/web3evm-p02-300sq.png"}],d=[{valeu:0,title:"All Roles",image:"/assets/images/logos/web3evm-p02-300sq.png"},{value:1,title:"Owners",image:"/assets/images/logos/value-exchange_200w.png"},{value:2,title:"Managers",image:"/assets/images/logos/victim-services_200w.png"},{value:3,title:"Vendors",image:"/assets/images/logos/value-exchange_200w.png"},{value:4,title:"Members",image:"/assets/images/logos/value-exchange_200w.png"}],p={title:"Voluntary",content:"Next week issue more BY coins to all students to cover the average close of food by."}},475:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(19),o=a(23),s=a(35),r=a(0),i=a(9),c=a(1201),l=a(822),d=a(700),p=a(104),m=a(121),u=a(1),g=Object(p.a)((function(e){return{root:{width:17,height:12}}})),h=function(e){var t=e.className,a=e.viewBox,o=e.color,r=Object(s.a)(e,["className","viewBox","color"]),c=g();return Object(u.jsx)(m.a,Object(n.a)(Object(n.a)({viewBox:a||"0 0 17 12"},r),{},{className:Object(i.a)(c.root,t),children:Object(u.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(u.jsx)("g",{transform:"translate(-944.000000, -432.000000)",fill:o||"#FFFFFF",fillRule:"nonzero",children:Object(u.jsx)("g",{transform:"translate(425.000000, 227.000000)",children:Object(u.jsx)("g",{transform:"translate(30.000000, 186.000000)",children:Object(u.jsx)("path",{d:"M489.069636,25.2790055 C488.976788,25.1043175 488.976788,24.8956825 489.069636,24.7209945 C489.169405,24.5332847 489.357436,24.2188214 489.631657,23.81939 C490.085625,23.158138 490.621217,22.4973586 491.237469,21.8789869 C493.023442,20.0868724 495.117527,19 497.5,19 C499.882473,19 501.976558,20.0868724 503.762531,21.8789869 C504.378783,22.4973586 504.914375,23.158138 505.368343,23.81939 C505.642564,24.2188214 505.830595,24.5332847 505.930364,24.7209945 C506.023212,24.8956825 506.023212,25.1043175 505.930364,25.2790055 C505.830595,25.4667153 505.642564,25.7811786 505.368343,26.18061 C504.914375,26.841862 504.378783,27.5026414 503.762531,28.1210131 C501.976558,29.9131276 499.882473,31 497.5,31 C495.117527,31 493.023442,29.9131276 491.237469,28.1210131 C490.621217,27.5026414 490.085625,26.841862 489.631657,26.18061 C489.357436,25.7811786 489.169405,25.4667153 489.069636,25.2790055 Z M490.636505,25.50689 C491.051424,26.111263 491.541679,26.7161086 492.102628,27.2789869 C493.680089,28.8618724 495.487586,29.8 497.5,29.8 C499.512414,29.8 501.319911,28.8618724 502.897372,27.2789869 C503.458321,26.7161086 503.948576,26.111263 504.363495,25.50689 C504.498149,25.3107524 504.60846,25.139492 504.693857,25 C504.60846,24.860508 504.498149,24.6892476 504.363495,24.49311 C503.948576,23.888737 503.458321,23.2838914 502.897372,22.7210131 C501.319911,21.1381276 499.512414,20.2 497.5,20.2 C495.487586,20.2 493.680089,21.1381276 492.102628,22.7210131 C491.541679,23.2838914 491.051424,23.888737 490.636505,24.49311 C490.501851,24.6892476 490.39154,24.860508 490.306143,25 C490.39154,25.139492 490.501851,25.3107524 490.636505,25.50689 Z M497.5,27.625 C495.982346,27.625 494.74026,26.4565398 494.74026,25 C494.74026,23.5434602 495.982346,22.375 497.5,22.375 C499.017654,22.375 500.25974,23.5434602 500.25974,25 C500.25974,26.4565398 499.017654,27.625 497.5,27.625 Z M497.5,26.425 C498.360039,26.425 499.045455,25.7802135 499.045455,25 C499.045455,24.2197865 498.360039,23.575 497.5,23.575 C496.639961,23.575 495.954545,24.2197865 495.954545,25 C495.954545,25.7802135 496.639961,26.425 497.5,26.425 Z"})})})})})}))},b=Object(p.a)((function(e){return{root:{width:17,height:17}}})),j=function(e){var t=e.className,a=e.viewBox,o=e.color,r=Object(s.a)(e,["className","viewBox","color"]),c=b();return Object(u.jsx)(m.a,Object(n.a)(Object(n.a)({viewBox:a||"0 0 17 17"},r),{},{className:Object(i.a)(c.root,t),children:Object(u.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(u.jsx)("g",{transform:"translate(-944.000000, -430.000000)",fill:o||"#6B76A1",fillRule:"nonzero",children:Object(u.jsx)("g",{transform:"translate(425.000000, 227.000000)",children:Object(u.jsx)("g",{transform:"translate(30.000000, 186.000000)",children:Object(u.jsx)("path",{d:"M500.596412,29.5981462 L498.951957,27.9536914 C498.303632,28.3600726 497.507537,28.492738 496.745911,28.298232 C495.742029,28.0418582 494.958142,27.2579708 494.701768,26.2540892 C494.507262,25.4924629 494.639927,24.6963676 495.046309,24.0480432 L493.240861,22.2425954 C492.152299,23.1634767 491.230778,24.2662102 490.517644,25.5022577 C490.606501,25.6557951 490.708552,25.8230763 490.823544,26.0011278 C491.230674,26.6315236 491.711676,27.2623459 492.261547,27.848875 C493.799803,29.4896811 495.555485,30.4583333 497.488421,30.458428 C498.585158,30.4404969 499.65429,30.1422449 500.596412,29.5981462 Z M502.200059,29.1983245 C502.205243,29.2033518 502.210363,29.2084715 502.215418,29.2136832 L505.792534,32.7907994 C506.069155,33.0674207 506.069155,33.5159126 505.792534,33.792534 C505.515913,34.0691553 505.067421,34.0691553 504.790799,33.792534 L501.626801,30.6285359 C500.401327,31.4171039 498.975283,31.8509627 497.5,31.875 C495.105973,31.875 493.010093,30.7186523 491.228036,28.8177916 C490.615798,28.1647374 490.084105,27.4674347 489.633488,26.7697055 C489.361227,26.3481402 489.17435,26.0159144 489.074781,25.8167763 C488.971852,25.6109182 488.975357,25.367885 489.084181,25.1650814 C489.885668,23.6714367 490.954784,22.340595 492.236004,21.2377386 L489.207466,18.2092006 C488.930845,17.9325793 488.930845,17.4840874 489.207466,17.207466 C489.484087,16.9308447 489.932579,16.9308447 490.209201,17.207466 L493.785094,20.7833592 C493.790254,20.7883642 493.795351,20.7934605 493.800383,20.7986481 L496.49641,23.4946755 C496.498065,23.4963139 496.499713,23.497962 496.501355,23.4996199 L499.50038,26.4986455 C499.502038,26.5002873 499.503686,26.5019355 499.505325,26.5035899 L502.200059,29.1983243 Z M496.103089,25.1048232 C496.018545,25.3583735 496.005859,25.6352385 496.074381,25.903548 C496.202567,26.4054888 496.594511,26.7974325 497.096452,26.9256194 C497.364761,26.9941409 497.641626,26.9814555 497.895177,26.8969114 L496.103089,25.1048232 Z M504.176456,24.9988685 C503.769325,24.3684707 503.288323,23.7376463 502.738452,23.1511152 C501.200196,21.510304 499.444514,20.5416488 497.498361,20.5416469 C497.052491,20.540615 496.608033,20.5914142 496.173939,20.6930244 C495.793033,20.7821844 495.411969,20.5456777 495.322809,20.1647719 C495.233649,19.783866 495.470156,19.4028023 495.851061,19.3136423 C496.392067,19.1870072 496.945978,19.1236981 497.5,19.1249444 C499.894027,19.1249444 501.989908,20.2813336 503.771965,22.1822003 C504.384203,22.8352565 504.915896,23.5325612 505.366513,24.2302926 C505.638774,24.6518591 505.825651,24.9840858 505.92522,25.1832245 C506.027969,25.3887236 506.024664,25.6312932 505.916355,25.833917 C505.46314,26.681786 504.922643,27.4800206 504.303652,28.21564 C504.051779,28.5149704 503.60494,28.5534421 503.30561,28.301569 C503.00628,28.0496959 502.967808,27.6028571 503.219681,27.3035267 C503.693605,26.7403076 504.116257,26.1361883 504.482739,25.4984026 C504.393792,25.3446835 504.291613,25.1771767 504.176456,24.9988685 Z"})})})})})}))},v=Object(p.a)((function(e){return{textField:function(t){return{border:t.readOnly?"1px solid ".concat(e.palette.secondary.contrastText,"80"):"1px solid ".concat(e.palette.secondary.contrastText),borderRadius:e.spacing(.5),background:"transparent",width:"100%","& input":{height:e.spacing(4.25),color:e.palette.secondary.contrastText,"-webkit-text-fill-color":t.readOnly?"".concat(e.palette.secondary.contrastText,"80"):e.palette.secondary.contrastText,"-webkit-box-shadow":"0 0 0px 1000px transparent inset",border:"none",padding:"8px 14px","&:-webkit-autofill":{transition:"background-color 5000s ease-in-out 0s"},"&:focus":{color:e.palette.primary.contrastText,"-webkit-text-fill-color":e.palette.primary.contrastText}},"& textarea":{color:e.palette.secondary.contrastText,"&:focus":{color:e.palette.primary.contrastText},"&::placeholder":{color:e.palette.secondary.contrastText}},"& fieldset":{border:"none"},"&:hover":{border:t.readOnly?"1px solid ".concat(e.palette.secondary.contrastText,"80"):"1px solid ".concat(e.custom.palette.grey)}}},error:function(t){return{border:"1px solid ".concat(e.palette.secondary.main),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main)}}},textLength:{fontSize:14,transform:"scale(0.8)"},inputAdornment:{position:"absolute",right:e.spacing(2)}}})),f=function(e){var t=e.className,a=e.value,p=e.placeholder,m=e.showLength,g=e.prefix,b=e.limit,f=void 0===b?50:b,x=e.type,O=e.error,C=e.readOnly,y=e.endAdornment,w=Object(s.a)(e,["className","value","placeholder","showLength","prefix","limit","type","error","readOnly","endAdornment"]),k=v({readOnly:C}),S=Object(r.useState)(!1),N=Object(o.a)(S,2),B=N[0],D=N[1];return Object(u.jsx)(c.a,Object(n.a)({variant:"outlined",placeholder:p||"",type:B?"text":x,value:a,className:Object(i.a)(t,"form-control form-control-lg",k.textField,O&&k.error),startAdornment:g||null,endAdornment:y||(m?Object(u.jsx)(l.a,{position:"end",classes:{root:k.textLength},children:"".concat(a?a.length:0,"/").concat(f)}):"password"===x?Object(u.jsx)(l.a,{className:k.inputAdornment,position:"end",children:Object(u.jsx)(d.a,{size:"small",onClick:function(){D(!B)},onMouseDown:function(e){e.preventDefault()},children:B?Object(u.jsx)(h,{color:"white"}):Object(u.jsx)(j,{})})}):null),readOnly:C},w))},x=Object(r.memo)((function(e){return Object(u.jsx)(f,Object(n.a)({},e))}))},822:function(e,t,a){"use strict";var n=a(2),o=a(10),s=a(0),r=(a(8),a(9)),i=a(152),c=a(13),l=a(489),d=s.forwardRef((function(e,t){var a=e.children,c=e.classes,d=e.className,p=e.component,m=void 0===p?"div":p,u=e.disablePointerEvents,g=void 0!==u&&u,h=e.disableTypography,b=void 0!==h&&h,j=e.position,v=e.variant,f=Object(o.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),x=Object(l.b)()||{},O=v;return v&&x.variant,x&&!O&&(O=x.variant),s.createElement(l.a.Provider,{value:null},s.createElement(m,Object(n.a)({className:Object(r.a)(c.root,d,g&&c.disablePointerEvents,x.hiddenLabel&&c.hiddenLabel,"filled"===O&&c.filled,{start:c.positionStart,end:c.positionEnd}[j],"dense"===x.margin&&c.marginDense),ref:t},f),"string"!==typeof a||b?a:s.createElement(i.a,{color:"textSecondary"},a)))}));t.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(d)},854:function(e,t,a){"use strict";var n=a(82),o=a(83);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(a(0)),r=(0,n(a(84)).default)(s.createElement("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");t.default=r},855:function(e,t,a){"use strict";var n=a(82),o=a(83);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(a(0)),r=(0,n(a(84)).default)(s.createElement("path",{d:"M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");t.default=r}}]);
//# sourceMappingURL=15.9db11aa8.chunk.js.map
(this.webpackJsonpintercoin=this.webpackJsonpintercoin||[]).push([[18],{1192:function(e,t,n){"use strict";n.r(t);var a=n(23),o=n(7),i=n(0),s=n(104),c=n(45),r=n(30),l=n(454),d=n(455),u=n(1180),p=n(152),g=n(700),b=n(19),j=n(121),h=n(1),m=function(e){return Object(h.jsx)(j.a,Object(b.a)(Object(b.a)({},e),{},{children:Object(h.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})}))},x=n(1163),f=n(416),v=n(1179),O=n(471),w=n(40),y=n(468),C=n(856),k=n.n(C),S=n(857),D=n.n(S),B=n(394),N=n(65),T=n(189),I=Object(s.a)((function(e){var t,n;return{root:{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"space-between",padding:e.spacing(1)},avatarContainer:{display:"flex",flexDirection:"row"},large:{width:e.spacing(9),height:e.spacing(9)},nameContainer:(t={},Object(o.a)(t,e.breakpoints.down("sm"),{display:"none"}),Object(o.a)(t,"display","flex"),Object(o.a)(t,"flexDirection","column"),Object(o.a)(t,"alignItems","center"),Object(o.a)(t,"justifyContent","center"),Object(o.a)(t,"marginLeft",e.spacing(1)),t),contactContainer:{display:"flex",flexDirection:"column","& .MuiIconButton-root":{padding:e.spacing(.5,2,.5,2)}},iconColor:{backgroundColor:e.palette.background.default,color:e.palette.text.secondary,"&:hover":{backgroundColor:"".concat(e.palette.text.secondary,"60"),transform:"translateY(-1px)"}},accountName:(n={},Object(o.a)(n,e.breakpoints.down("sm"),{flexDirection:"column"}),Object(o.a)(n,"display","flex"),Object(o.a)(n,"justifyContent","center"),Object(o.a)(n,"alignItems","center"),n)}})),F=Object(r.h)((function(e){e.history,e.chainId;var t=e.account,n=e.setIsWalletDialog,a=e.ethBalance,o=I(),i=Object(w.a)(),s=Object(B.a)(i.breakpoints.down("330"));return Object(h.jsxs)("div",{className:o.root,children:[Object(h.jsxs)("div",{className:o.avatarContainer,children:[Object(h.jsx)(y.a,{src:"/assets/images/photos/people/rl-400x.png",className:o.large}),Object(h.jsxs)("div",{className:o.nameContainer,children:[Object(h.jsx)(p.a,{children:"Kevin "}),Object(h.jsx)(p.a,{children:"Jin"})]})]}),Object(h.jsxs)("div",{className:o.accountName,children:[Object(h.jsx)(p.a,{component:"div",variant:s?"body1":"h6",color:"textSecondary",style:{paddingRight:4},children:"Kevin Jin's Main Wallet"}),Object(h.jsx)(T.a,{onClick:function(){n(!0)},variant:"outlined",children:Object(h.jsx)(p.a,{children:(null===t||void 0===t?void 0:t.slice(0,9))+"..."+(null===t||void 0===t?void 0:t.slice((null===t||void 0===t?void 0:t.length)-6,null===t||void 0===t?void 0:t.length))})}),Object(h.jsxs)(p.a,{variant:"body1",noWrap:!0,children:[a," (ETH)"]})]}),Object(h.jsxs)("div",{className:o.contactContainer,children:[Object(h.jsx)(N.a,{icon:Object(h.jsx)(k.a,{}),className:o.iconColor}),Object(h.jsx)(N.a,{icon:Object(h.jsx)(D.a,{}),className:o.iconColor})]})]})})),W=n(655),M=n(456),_=n(858),U=n.n(_),P=n(9),A=n(32),R=Object(s.a)((function(e){return{root:{},card:{backgroundColor:e.palette.background.default,display:"flex",width:"100%",flexDirection:"column",justifyContent:"space-between",cursor:"pointer",borderRadius:20,borderColor:"red",boxShadow:"0 1px 6px 0 ".concat(e.palette.text.notification),"&:hover":{transform:"translateY(-5px)",transition:"ease-out 0.4s ",opacity:"100%"},transition:"ease-out 0.4s"},cardContent:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"50%",paddingBottom:"16px !important"},cardMedia:{width:60,height:36},selected:{backgroundColor:e.palette.background.main}}})),z=function(e){var t=e.transactionData,n=e.setContactBoard,a=e.contactBoard,o=R({});return Object(h.jsx)(h.Fragment,{children:t.map((function(e,t){return Object(h.jsx)(l.a,{item:!0,xs:12,sm:(Object(A.a)(a),12),md:Object(A.a)(a)?4:6,lg:Object(A.a)(a)?3:4,children:Object(h.jsx)(d.a,{className:o.card,onClick:function(){n(t)},children:1===e.type?Object(h.jsxs)(M.a,{className:Object(P.a)(o.cardContent,a===t&&o.selected),children:[Object(h.jsx)(U.a,{variant:"outline",fontSize:"large"}),Object(h.jsxs)(p.a,{variant:"body1",style:{padding:8},noWrap:!0,children:[null===e||void 0===e?void 0:e.sender," \u21d4 ",null===e||void 0===e?void 0:e.receiver]}),Object(h.jsx)(y.a,{round:"true",src:null===e||void 0===e?void 0:e.avatarUrl})]}):Object(h.jsxs)(M.a,{className:o.cardContent,children:[Object(h.jsx)(y.a,{variant:"square",src:null===e||void 0===e?void 0:e.imageUrl}),Object(h.jsxs)(p.a,{component:"div",variant:"body1",style:{paddingRight:8,paddingLeft:8},noWrap:!0,children:[null===e||void 0===e?void 0:e.companyTitle,Object(h.jsx)(p.a,{variant:"subtitle2",noWrap:!0,children:null===e||void 0===e?void 0:e.subTitle})]}),Object(h.jsx)(y.a,{round:"true",src:null===e||void 0===e?void 0:e.avatarUrl})]})})},t)}))})},J=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}})),q=function(){var e=J();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(p.a,{children:"Coming Soon!"})})},L=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}})),H=function(){var e=L();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(p.a,{children:"Coming Soon!"})})},V=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}})),X=function(){var e=V();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(p.a,{children:"Coming Soon!"})})},E=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}})),G=function(){var e=E();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(p.a,{children:"Coming Soon!"})})},Y=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}})),K=function(){var e=Y();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(p.a,{children:"Coming Soon!"})})},Q=n(472),Z=n(595),$=Object(s.a)((function(e){var t,n,a,i;return{root:{height:"100%"},container:(t={},Object(o.a)(t,e.breakpoints.down("sm"),{padding:0}),Object(o.a)(t,"display","flex"),Object(o.a)(t,"margin",-8),Object(o.a)(t,"flexGrow",1),t),large:{width:e.spacing(7),height:e.spacing(7)},additionalGrid:(n={width:360-e.spacing(2)},Object(o.a)(n,e.breakpoints.down("sm"),{display:"none"}),Object(o.a)(n,e.breakpoints.down("md"),{margin:e.spacing(0,2.5,0,4)}),Object(o.a)(n,"margin",e.spacing(0,7.5,0,4)),n),card:{backgroundColor:e.palette.background.default,display:"flex",width:"100%",marginRight:e.spacing(3),minHeight:"calc(100vh - ".concat(e.custom.layout.topAppBarHeight+e.custom.layout.footerHeight+e.custom.layout.topAppBarHeight,"px)"),flexDirection:"column",justifyContent:"space-between",cursor:"pointer",borderRadius:20,borderColor:"red",boxShadow:"0 1px 6px 0 ".concat(e.palette.text.notification),padding:e.spacing(1.5)},input:{width:"calc(100% - 45px)",borderRadius:e.spacing(.3),"& .MuiOutlinedInput-multiline":{padding:e.spacing(1),color:e.palette.text.primary}},send:{cursor:"pointer",fontSize:14,fontWeight:"bold",marginLeft:e.spacing(1),color:e.palette.text.hoverText},chatActionContainer:{display:"flex",justifyContent:"center",alignItems:"center"},cardHeader:{borderBottom:"0.5px solid #fff"},drawer:(a={},Object(o.a)(a,e.breakpoints.down("sm"),{display:"none"}),Object(o.a)(a,"width","100%"),Object(o.a)(a,"flexShrink",0),a),drawerPaper:(i={},Object(o.a)(i,e.breakpoints.down("sm"),{display:"none"}),Object(o.a)(i,"border","none"),Object(o.a)(i,"height","100%"),Object(o.a)(i,"display","flex"),Object(o.a)(i,"justifyContent","center"),Object(o.a)(i,"alignItems","center"),Object(o.a)(i,"backgroundColor","transparent"),i),contentShift:Object(o.a)({},e.breakpoints.up("sm"),{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:360})}}));t.default=Object(r.h)((function(e){e.history;var t=$(),n=Object(i.useContext)(c.a),o=n.account,s=n.chainId,r=(n.setLoadingInfo,n.setIsWalletDialog),b=n.balance,j=Object(i.useState)(0),w=Object(a.a)(j,2),y=w[0],C=w[1],k=Object(i.useState)(),S=Object(a.a)(k,2),D=S[0],B=S[1],N=b&&Object(f.a)(b);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:t.root,children:[Object(h.jsx)(O.a,{children:Object(h.jsx)("div",{className:D&&t.contentShift,children:Object(h.jsxs)(l.a,{container:!0,spacing:2,className:t.container,children:[Object(h.jsx)(F,{ethBalance:N,account:o,chainId:s,setIsWalletDialog:r}),Object(h.jsx)(W.a,{setFilterValue:C,TabList:Z.b}),function(e){switch(e){case 0:return Object(h.jsx)(z,{contactBoard:D,setContactBoard:B,transactionData:Q.i});case 1:return Object(h.jsx)(q,{});case 2:return Object(h.jsx)(H,{});case 3:return Object(h.jsx)(X,{});case 4:return Object(h.jsx)(G,{});case 5:return Object(h.jsx)(K,{})}}(y)]})})}),Object(h.jsx)(v.a,{className:t.drawer,variant:"persistent",anchor:"right",open:!Object(A.a)(D),classes:{paper:t.drawerPaper},children:!Object(A.a)(D)&&Object(h.jsx)(l.a,{className:t.additionalGrid,children:Object(h.jsxs)(d.a,{className:t.card,children:[Object(h.jsx)(u.a,{className:t.cardHeader,title:"".concat(Q.i[D].sender," \u21d4 ").concat(Q.i[D].receiver," "),action:Object(h.jsx)(g.a,{"aria-label":"settings",children:Object(h.jsx)(m,{onClick:function(){B()},style:{color:"#fff"}})})}),Object(h.jsxs)("div",{className:t.chatActionContainer,children:[Object(h.jsx)(x.a,{className:t.input,multiline:!0,rows:"2",variant:"outlined",style:{border:"0.5px solid #8D9BD4"}}),Object(h.jsx)(p.a,{className:t.send,color:"textSecondary",children:"SEND"})]})]})})})]})})}))},471:function(e,t,n){"use strict";var a=n(7),o=(n(0),n(104)),i=n(30),s=n(394),c=n(152),r=n(40),l=n(18),d=n(106),u=n(1),p=Object(o.a)((function(e){var t;return{root:function(t){var n;return n={},Object(a.a)(n,e.breakpoints.down("sm"),{padding:t.noPaddingTop?e.spacing(0):e.spacing(2,0,0,0)}),Object(a.a)(n,"display","flex"),Object(a.a)(n,"marginBottom",e.spacing(2)),Object(a.a)(n,"justifyContent",t.center?"center":"space-between"),Object(a.a)(n,"alignItems","center"),n},bold:(t={},Object(a.a)(t,e.breakpoints.down("sm"),{display:"none"}),Object(a.a)(t,"fontWeight","400"),t)}})),g=function(e){var t=e.title,n=e.buttonName,a=e.center,o=e.noPaddingTop,g=p({center:a,noPaddingTop:o}),b=Object(i.f)(),j=Object(r.a)(),h=Object(s.a)(j.breakpoints.down("sm"),{defaultMatches:!0});return Object(u.jsxs)("div",{className:g.root,children:[Object(u.jsx)(c.a,{className:g.bold,variant:"h5",children:t}),n&&!h&&Object(u.jsx)(d.a,{style:{backgroundColor:j.custom.palette.green},onClick:function(){b.push("".concat(l.a.POLLS.url,"/new"))},children:n})]})},b=Object(o.a)((function(e){return{root:function(t){var n;return n={},Object(a.a)(n,e.breakpoints.down("sm"),{padding:e.spacing(0,1.5,0,1.5)}),Object(a.a)(n,"height","100%"),Object(a.a)(n,"width","100%"),Object(a.a)(n,"display","flex"),Object(a.a)(n,"flexDirection",t.flexDirection?"row":"column"),Object(a.a)(n,"justifyContent","space-between"),Object(a.a)(n,"padding",e.spacing(2,4,0,4)),n},headerContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:e.spacing(0),marginBottom:e.spacing(0)}}}));t.a=function(e){var t=e.children,n=e.title,a=e.buttonName,o=e.center,i=e.flexDirection,s=e.noPaddingTop,c=b({flexDirection:i,noPaddingTop:s});return Object(u.jsxs)("div",{className:c.root,children:[Object(u.jsx)(g,{center:o,title:n,buttonName:a,noPaddingTop:s}),t]})}},472:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"i",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"a",(function(){return u}));var a=[{checkStatus:!0,title:"We should build the entire project with the right approach and best practices",votingCount:16,context:"Project done needs to be more productive ",from:1,to:5},{checkStatus:!0,title:"We should use the Jira ticketing management system",votingCount:456,context:"Project  done needs to be more productive ",from:1,to:100},{checkStatus:!0,title:"We should build the entire project with the right approach and best practices",votingCount:56,context:"Project  done needs to be more productive ",from:0,to:10},{checkStatus:!0,title:"We should use the Jira ticketing management system",votingCount:26,context:"Project  done needs to be more productive ",from:1,to:5},{checkStatus:!0,title:"We should build the entire project with the right approach and best practices",votingCount:346,context:"Project  done needs to be more productive ",from:1,to:10},{checkStatus:!0,title:"We should use the Jira ticketing management system",votingCount:56,context:"Project  done needs to be more productive ",from:1,to:5},{checkStatus:!0,title:"We should build the entire project with the right approach and best practices",votingCount:5623,context:"Project  done needs to be more productive ",from:0,to:1},{checkStatus:!0,title:"We should use the Jira ticketing management system",votingCount:56,context:"Project  done needs to be more productive ",from:1,to:5}],o=[{id:0,content:"Should we follow the best practices to build any web application?",from:0,to:5},{id:1,content:"Or should we speed up the development without doing care of the quality?",from:0,to:10},{id:2,content:"Should we focus on both the quality and speed?",from:0,to:1},{id:3,content:"Should we follow the best practices to build any web application?",from:0,to:5},{id:4,content:"Or should we speed up the development without doing care of the quality?",from:0,to:10},{id:5,content:"Should we focus on both the quality and speed?",from:0,to:5}],i=[{logo:"assets/images/logos/value-exchange_200w.png",name:"Decentralized_Finance"},{logo:"assets/images/logos/team-of-electronic-servants_200w.png",name:"Identity_Management"},{logo:"assets/images/logos/evidencer_200w.png",name:"Software_as_a_Service_SaaS"},{logo:"assets/images/logos/victim-services_200w.png",name:"Medical_Services_and_Devices"},{logo:"assets/images/logos/world-computer_200w.png",name:"Insurance_Management_Services"},{logo:"assets/images/logos/web3evm-p02-300sq.png",name:"Legaltech_Services"}],s={items:["Fast response","National resource","5-Star reviews","Intuitive features"],team:[{authorPhoto:{src:"assets/images/photos/people/mimc.jpg",srcSet:"assets/images/photos/people/mimc@2x.jpg 2x"},authorName:"Anne McAllister"},{authorPhoto:{src:"assets/images/photos/people/role.jpg",srcSet:"assets/images/photos/people/role@2x.jpg 2x"},authorName:"Robert Leonhard"},{authorPhoto:{src:"assets/images/photos/people/scst.jpg",srcSet:"assets/images/photos/people/scst@2x.jpg 2x"},authorName:"Scott Stevenson"}]},c=[{type:1,sender:"kevin",receiver:"James",avatarUrl:"/assets/images/photos/people/ss-400x-js@2x.png"},{type:1,sender:"kevin jin",receiver:"Romeo juliet",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:1,sender:"kevin jin",receiver:"James Bond",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:1,sender:"kevin jin",receiver:"Romeo juliet",avatarUrl:"/assets/images/photos/people/expert-cover.png"},{type:1,sender:"kevin",receiver:"James",avatarUrl:"/assets/images/photos/people/ss-400x-js@2x.png"},{type:1,sender:"kevin jin",receiver:"Romeo juliet",avatarUrl:"/assets/images/photos/people/expert-cover.png"},{type:1,sender:"kevin jin",receiver:"James Bond",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:1,sender:"kevin jin",receiver:"Romeo juliet",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:1,sender:"kevin jin",receiver:"Romeo juliet",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:1,sender:"kevin",receiver:"James",avatarUrl:"/assets/images/photos/people/ss-400x-js@2x.png"},{type:1,sender:"kevin jin",receiver:"James Bond",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:1,sender:"kevin jin",receiver:"Romeo juliet",avatarUrl:"/assets/images/photos/people/expert-cover.png"},{type:2,companyTitle:"Intercoin : Welcome",subTitle:"Intercoin - Building the world wide web ",imageUrl:"/assets/images/Intercoin.png",avatarUrl:"/assets/images/photos/people/rl-400x.png"},{type:2,companyTitle:"Scoot Santens - Social Network",subTitle:"The Disproportionate Efficent",imageUrl:"/assets/images/logos/evidencer_200w.png",avatarUrl:"/assets/images/photos/people/expert-cover.png"}],r=[{name:"John Smith",role:"Member, admin",account:"0x48631372F83B65387F84018F68B1ADf536Be17AD"},{name:"Bob Moo",role:"Member, engineer",avatar:"/assets/images/logos/web3evm-p02-300sq.png",account:"0x48631372F83B65387F84018F68B1ADf536Be17AD"},{name:"0X23436544...324",avatar:"/assets/images/logos/web3evm-p02-300sq.png",account:"0xe9D045cF6D3a2418eab537d3AC7a905a1dDcF048"},{name:"0X23456434...628",account:"0x48631372F83B65387F84018F68B1ADf536Be17AD"},{name:"0X27456434...384",avatar:"/assets/images/logos/web3evm-p02-300sq.png",account:"0x48631372F83B65387F84018F68B1ADf536Be17AD"},{name:"0X23654434...322",account:"0xe9D045cF6D3a2418eab537d3AC7a905a1dDcF048"},{name:"0X26453734...321",avatar:"/assets/images/logos/web3evm-p02-300sq.png",account:"0x48631372F83B65387F84018F68B1ADf536Be17AD"},{name:"0X23445634...726",account:"0x2Ca51ED4e4Bb914cbFC58A17d6D8b705c9407614"}],l=[{valeu:0,title:"Clothing",image:"/assets/images/logos/value-exchange_200w.png"},{value:1,title:"Books",image:"/assets/images/logos/victim-services_200w.png"},{value:2,title:"Venues",image:"/assets/images/logos/value-exchange_200w.png"},{value:3,title:"Tutoring",image:"/assets/images/logos/web3evm-p02-300sq.png"}],d=[{valeu:0,title:"All Roles",image:"/assets/images/logos/web3evm-p02-300sq.png"},{value:1,title:"Owners",image:"/assets/images/logos/value-exchange_200w.png"},{value:2,title:"Managers",image:"/assets/images/logos/victim-services_200w.png"},{value:3,title:"Vendors",image:"/assets/images/logos/value-exchange_200w.png"},{value:4,title:"Members",image:"/assets/images/logos/value-exchange_200w.png"}],u={title:"Voluntary",content:"Next week issue more BY coins to all students to cover the average close of food by."}},595:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return y}));var a=n(596),o=n.n(a),i=n(597),s=n.n(i),c=n(598),r=n.n(c),l=n(599),d=n.n(l),u=n(600),p=n.n(u),g=n(601),b=n.n(g),j=n(602),h=n.n(j),m=n(283),x=n(603),f=n.n(x),v=n(168),O=n(1),w=[{icon:Object(O.jsx)(o.a,{fontSize:"large"})},{icon:Object(O.jsx)(s.a,{fontSize:"large"})},{icon:Object(O.jsx)(r.a,{fontSize:"large"})},{icon:Object(O.jsx)(d.a,{fontSize:"large"})},{icon:Object(O.jsx)(p.a,{fontSize:"large"})},{icon:Object(O.jsx)(b.a,{fontSize:"large"})}],y=[{icon:Object(O.jsx)(h.a,{fontSize:"large"}),title:"People"},{icon:Object(O.jsx)(m.a,{fontSize:"large"}),title:"Currency"},{icon:Object(O.jsx)(f.a,{style:{height:31},fontSize:"large"}),title:"Governance"},{icon:Object(O.jsx)(v.a,{fontSize:"large"}),title:"Voting"}]},655:function(e,t,n){"use strict";var a=n(23),o=n(7),i=n(0),s=n(104),c=n(40),r=n(1153),l=n(827),d=n(1),u=Object(s.a)((function(e){return{root:function(t){var n;return n={},Object(o.a)(n,e.breakpoints.down("sm"),{width:t.isTabFullWidth?"100%":null}),Object(o.a)(n,"display","flex"),Object(o.a)(n,"justifyContent","space-between"),Object(o.a)(n,"minHeight","auto"),Object(o.a)(n,"& .MuiTab-wrapper",{display:"contents",justifyContent:"space-between",textTransform:"capitalize",marginRight:e.spacing(2)}),Object(o.a)(n,"& .MuiTabs-scroller",{height:t.height?t.height:"none"}),Object(o.a)(n,"& .MuiTabs-flexContainer",{justifyContent:"space-between",alignItems:"baseline"}),n},tab:function(t){return{display:"flex",flexDirection:"column",minWidth:0,marginRight:e.spacing(0),borderBottom:"solid 0.5px ".concat(e.palette.background.default),"&.MuiTab-labelIcon .MuiTab-wrapper > *:first-child":{marginBottom:0},minHeight:t.height?t.height:"none",height:t.height?t.height:e.spacing(4),width:t.width?t.width:"none",backgroundColor:t.backgroundColor?t.backgroundColor:"none"}},unSelectedTab:function(t){return{display:"flex",flexDirection:"column",minWidth:0,marginRight:e.spacing(0),borderBottom:"0.5px solid".concat(t.borderColor?t.borderColor:e.palette.background.default),"&.MuiTab-labelIcon .MuiTab-wrapper > *:first-child":{marginBottom:0},minHeight:t.height?t.height:"none",height:t.height?t.height:e.spacing(4),width:t.width?t.width:"none",backgroundColor:t.UnselectedTabBackgroundColor?t.UnselectedTabBackgroundColor:"none",opacity:t.opacity?t.opacity:"none"}}}})),p=function(e){var t=e.value,n=e.tabs,a=e.onChange,o=e.backgroundColor,i=e.indicatorColor,s=e.width,p=e.height,g=e.UnselectedTabBackgroundColor,b=e.opacity,j=e.borderColor,h=e.isTabFullWidth,m=u({backgroundColor:o,width:s,height:p,UnselectedTabBackgroundColor:g,opacity:b,borderColor:j,isTabFullWidth:h}),x=Object(c.a)();return Object(d.jsx)(r.a,{textColor:"inherit",scrollButtons:"auto",variant:"scrollable","aria-label":"ant example",TabIndicatorProps:{style:{backgroundColor:i||"".concat(x.palette.text.primary)}},value:t,className:m.root,onChange:a,children:n.map((function(e,n){return Object(d.jsx)(l.a,{icon:e.icon,label:e.label,className:n===t?m.tab:m.unSelectedTab},e.id)}))})},g=Object(i.memo)(p),b=n(32),j=Object(s.a)((function(e){var t;return{root:(t={display:"flex",justifyContent:"center",alignItems:"center",width:"100%",fontSize:15,padding:e.spacing(0,7,0,7)},Object(o.a)(t,e.breakpoints.down("sm"),{padding:0,"& .MuiTab-root":{}}),Object(o.a)(t,"marginBottom",e.spacing(1)),Object(o.a)(t,"& .MuiTab-root",{minWidth:"7.5%",height:"max-content",fontSize:16,fontWeight:300}),Object(o.a)(t,"& .MuiTabs-scrollButtonsDesktop",{display:"none"}),t)}}));t.a=function(e){var t=e.setFilterValue,n=e.initialSelectTab,o=e.TabList,s=e.isTabFullWidth,c=[];!Object(b.a)(o)&&o.map((function(e,t){c.push({id:t,label:e&&e.title,icon:e.icon})}));var r=j(),l=Object(i.useState)(0),u=Object(a.a)(l,2),p=u[0],h=u[1];Object(i.useEffect)((function(){h(n||0)}),[n]);return Object(d.jsx)("div",{className:r.root,children:Object(d.jsx)(g,{value:p,isTabFullWidth:s,tabs:c,onChange:function(e,n){h(n),t(c[n].id)}})})}}}]);
//# sourceMappingURL=18.39875cd9.chunk.js.map
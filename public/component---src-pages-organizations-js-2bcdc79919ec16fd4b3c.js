(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"12Qz":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("R/WZ"),o=a("iuhU"),s=a("30+C"),c=a("k1TG"),l=a("aXB2"),d=(a("17x9"),a("H2TA")),u=a("ofer"),p=r.a.forwardRef((function(e,t){var a=e.action,n=e.avatar,i=e.classes,s=e.className,d=e.component,p=void 0===d?"div":d,m=e.disableTypography,h=void 0!==m&&m,g=e.subheader,f=e.subheaderTypographyProps,b=e.title,v=e.titleTypographyProps,E=Object(l.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),x=b;null==x||x.type===u.a||h||(x=r.a.createElement(u.a,Object(c.a)({variant:n?"body2":"h5",className:i.title,component:"span",display:"block"},v),x));var y=g;return null==y||y.type===u.a||h||(y=r.a.createElement(u.a,Object(c.a)({variant:n?"body2":"body1",className:i.subheader,color:"textSecondary",component:"span",display:"block"},f),y)),r.a.createElement(p,Object(c.a)({className:Object(o.a)(i.root,s),ref:t},E),n&&r.a.createElement("div",{className:i.avatar},n),r.a.createElement("div",{className:i.content},x,y),a&&r.a.createElement("div",{className:i.action},a))})),m=Object(d.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(p),h=a("Ie8z"),g=a("oa/T"),f=a("o4QW"),b=a("8o2o"),v=a("9Hrx"),E=a("i8i4"),x=a.n(E),y=!1,w=a("0PSK"),O="unmounted",T="exited",j="entering",k="entered",N=function(e){function t(t,a){var n;n=e.call(this,t,a)||this;var r,i=a&&!a.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?i?(r=T,n.appearStatus=j):r=k:r=t.unmountOnExit||t.mountOnEnter?O:T,n.state={status:r},n.nextCallback=null,n}Object(v.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===O?{status:T}:null};var a=t.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var a=this.state.status;this.props.in?a!==j&&a!==k&&(t=j):a!==j&&a!==k||(t="exiting")}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,a,n=this.props.timeout;return e=t=a=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,a=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:a}},a.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var a=x.a.findDOMNode(this);t===j?this.performEnter(a,e):this.performExit(a)}else this.props.unmountOnExit&&this.state.status===T&&this.setState({status:O})},a.performEnter=function(e,t){var a=this,n=this.props.enter,r=this.context?this.context.isMounting:t,i=this.getTimeouts(),o=r?i.appear:i.enter;!t&&!n||y?this.safeSetState({status:k},(function(){a.props.onEntered(e)})):(this.props.onEnter(e,r),this.safeSetState({status:j},(function(){a.props.onEntering(e,r),a.onTransitionEnd(e,o,(function(){a.safeSetState({status:k},(function(){a.props.onEntered(e,r)}))}))})))},a.performExit=function(e){var t=this,a=this.props.exit,n=this.getTimeouts();a&&!y?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,n.exit,(function(){t.safeSetState({status:T},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:T},(function(){t.props.onExited(e)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,a=!0;return this.nextCallback=function(n){a&&(a=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},a.onTransitionEnd=function(e,t,a){this.setNextCallback(a);var n=null==t&&!this.props.addEndListener;e&&!n?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if(e===O)return null;var t=this.props,a=t.children,n=Object(b.a)(t,["children"]);if(delete n.in,delete n.mountOnEnter,delete n.unmountOnExit,delete n.appear,delete n.enter,delete n.exit,delete n.timeout,delete n.addEndListener,delete n.onEnter,delete n.onEntering,delete n.onEntered,delete n.onExit,delete n.onExiting,delete n.onExited,"function"==typeof a)return r.a.createElement(w.a.Provider,{value:null},a(e,n));var i=r.a.Children.only(a);return r.a.createElement(w.a.Provider,{value:null},r.a.cloneElement(i,n))},t}(r.a.Component);function C(){}N.contextType=w.a,N.propTypes={},N.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C},N.UNMOUNTED=0,N.EXITED=1,N.ENTERING=2,N.ENTERED=3,N.EXITING=4;var S=N,I=a("wpWl");function D(e,t){var a=e.timeout,n=e.style,r=void 0===n?{}:n;return{duration:r.transitionDuration||"number"==typeof a?a:a[t.mode]||0,delay:r.transitionDelay}}var R=a("aXM8"),H=a("cNwE");var z=r.a.forwardRef((function(e,t){var a=e.children,n=e.classes,i=e.className,s=e.collapsedHeight,d=void 0===s?"0px":s,u=e.component,p=void 0===u?"div":u,m=e.in,h=e.onEnter,g=e.onEntered,f=e.onEntering,b=e.onExit,v=e.onExiting,E=e.style,x=e.timeout,y=void 0===x?I.b.standard:x,w=Object(l.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),O=Object(R.a)()||H.a,T=r.a.useRef(),j=r.a.useRef(null),k=r.a.useRef(),N="number"==typeof d?"".concat(d,"px"):d;r.a.useEffect((function(){return function(){clearTimeout(T.current)}}),[]);return r.a.createElement(S,Object(c.a)({in:m,onEnter:function(e,t){e.style.height=N,h&&h(e,t)},onEntered:function(e,t){e.style.height="auto",g&&g(e,t)},onEntering:function(e,t){var a=j.current?j.current.clientHeight:0,n=D({style:E,timeout:y},{mode:"enter"}).duration;if("auto"===y){var r=O.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(r,"ms"),k.current=r}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),f&&f(e,t)},onExit:function(e){var t=j.current?j.current.clientHeight:0;e.style.height="".concat(t,"px"),b&&b(e)},onExiting:function(e){var t=j.current?j.current.clientHeight:0,a=D({style:E,timeout:y},{mode:"exit"}).duration;if("auto"===y){var n=O.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),k.current=n}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height=N,v&&v(e)},addEndListener:function(e,t){"auto"===y&&(T.current=setTimeout(t,k.current||0))},timeout:"auto"===y?null:y},w),(function(e,s){return r.a.createElement(p,Object(c.a)({className:Object(o.a)(n.container,i,{entered:n.entered,exited:!m&&"0px"===N&&n.hidden}[e]),style:Object(c.a)({minHeight:N},E),ref:t},s),r.a.createElement("div",{className:n.wrapper,ref:j},r.a.createElement("div",{className:n.wrapperInner},a)))}))}));z.muiSupportAuto=!0;var M=Object(d.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(z),F=(a("dZ+Y"),a("ye/S")),L=a("VD++"),B=a("NqtD"),P=r.a.forwardRef((function(e,t){var a=e.edge,n=void 0!==a&&a,i=e.children,s=e.classes,d=e.className,u=e.color,p=void 0===u?"default":u,m=e.disabled,h=void 0!==m&&m,g=e.disableFocusRipple,f=void 0!==g&&g,b=e.size,v=void 0===b?"medium":b,E=Object(l.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return r.a.createElement(L.a,Object(c.a)({className:Object(o.a)(s.root,d,"default"!==p&&s["color".concat(Object(B.a)(p))],h&&s.disabled,{small:s["size".concat(Object(B.a)(v))]}[v],{start:s.edgeStart,end:s.edgeEnd}[n]),centerRipple:!0,focusRipple:!f,disabled:h,ref:t},E),r.a.createElement("span",{className:s.label},i))})),A=Object(d.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(F.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(F.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(F.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(P),q=a("dl/7"),G=a("Lnxd"),U=function(e){return Object(G.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}}]})(e)};U.displayName="MdExpandMore";a.d(t,"a",(function(){return X}));var W=Object(i.a)((function(e){return{card:{minWidth:300},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:q.a[500]}}}));function X(e){var t,a=e.children,n=e.title,i=e.subHeader,c=e.description,l=e.image,d=e.imageTitle,p=W(),b=r.a.useState(!1),v=b[0],E=b[1];return r.a.createElement(s.a,{variant:"outlined",className:p.card},r.a.createElement(m,{action:r.a.createElement(A,{"aria-label":"settings"}),title:n,subheader:i}),r.a.createElement(h.a,{className:p.media,image:l,title:d}),r.a.createElement(g.a,null,r.a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"p"},c)),r.a.createElement(f.a,{disableSpacing:!0},r.a.createElement(A,{className:Object(o.a)(p.expand,(t={},t[p.expandOpen]=v,t)),onClick:function(){E(!v)},"aria-expanded":v,"aria-label":"show more"},r.a.createElement(U,null))),r.a.createElement(M,{in:v,timeout:"auto",unmountOnExit:!0},r.a.createElement(g.a,null,r.a.createElement(u.a,{paragraph:!0},a))))}},"30+C":function(e,t,a){"use strict";var n=a("k1TG"),r=a("aXB2"),i=a("q1tI"),o=a.n(i),s=(a("17x9"),a("iuhU")),c=(a("8+KV"),a("H2TA")),l=o.a.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.component,l=void 0===c?"div":c,d=e.square,u=void 0!==d&&d,p=e.elevation,m=void 0===p?1:p,h=Object(r.a)(e,["classes","className","component","square","elevation"]);return o.a.createElement(l,Object(n.a)({className:Object(s.a)(a.root,a["elevation".concat(m)],i,!u&&a.rounded),ref:t},h))})),d=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(n.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius}},t)}),{name:"MuiPaper"})(l),u=o.a.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.raised,l=void 0!==c&&c,u=Object(r.a)(e,["classes","className","raised"]);return o.a.createElement(d,Object(n.a)({className:Object(s.a)(a.root,i),elevation:l?8:1,ref:t},u))}));t.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)},Ie8z:function(e,t,a){"use strict";a("V+eJ");var n=a("k1TG"),r=a("aXB2"),i=a("q1tI"),o=a.n(i),s=(a("17x9"),a("iuhU")),c=a("H2TA"),l=["video","audio","picture","iframe","img"],d=o.a.forwardRef((function(e,t){var a=e.children,i=e.classes,c=e.className,d=e.component,u=void 0===d?"div":d,p=e.image,m=e.src,h=e.style,g=Object(r.a)(e,["children","classes","className","component","image","src","style"]),f=-1!==l.indexOf(u),b=!f&&p?Object(n.a)({backgroundImage:'url("'.concat(p,'")')},h):h;return o.a.createElement(u,Object(n.a)({className:Object(s.a)(i.root,c,f&&i.media,-1!=="picture img".indexOf(u)&&i.img),ref:t,style:b,src:f?p||m:void 0},g),a)}));t.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(d)},ZjE7:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("Ji2X"),o=a("tRbT"),s=a("Bl7J"),c=(a("tUrg"),a("R/WZ")),l=a("30+C"),d=a("Ie8z"),u=a("oa/T"),p=a("o4QW"),m=a("ofer"),h=a("Z3vd"),g=Object(c.a)((function(e){return{card:{},media:{width:"100%",height:"500px"},actions:{display:"flex"},expand:{marginLeft:"auto"}}}));function f(e){var t=e.title,a=e.subHeader,n=e.description,i=e.imageFile,o=e.imageTitle,s=e.link,c=g();return r.a.createElement(l.a,{className:c.card},r.a.createElement(d.a,{className:c.media,image:i,title:o}),r.a.createElement(u.a,null,r.a.createElement(m.a,{variant:"h3"},t),r.a.createElement(m.a,{gutterBottom:!0,variant:"h6"},a),r.a.createElement(m.a,{variant:"body1",color:"textSecondary",component:"p"},n)),r.a.createElement(p.a,{className:c.actions,disableActionSpacing:!0},r.a.createElement(h.a,{href:s,className:c.expand,size:"small",color:"primary"},"Learn More")))}var b=a("vrFN");a("12Qz"),t.default=function(){return r.a.createElement(s.a,{pageTitle:"Organizations"},r.a.createElement(b.a,{title:"Organizations"}),r.a.createElement(i.a,{maxWidth:"lg",className:"mainPageContent"},r.a.createElement(o.a,{container:!0,spacing:6},r.a.createElement(o.a,{item:!0,md:12,lg:6},r.a.createElement(f,{title:"Design Bloc",subHeader:"Innovation and Design Collaborative",imageFile:"/static/images/organizations/designBloc.jpg",description:"The Design Bloc Staff manage and run the Innovation\r and Design Collaborative. The collaboration that happens here is\r focused around five tenets of design thinking: creative craft;\r empathy; entrepreneurial spirit; rapid iteration; and contextual\r awareness. Learning these design behaviors allows students of any\r major to understand the customer's problem before designing a\r solution. We teach classes, run workshops, and provide space with\r equipment for furthering design principles in engineering. I have\r been a staff member for 3 years and contributed to classes,\r workshops, and renovating our space.",link:"http://www.designcollaborative.gatech.edu/"})),r.a.createElement(o.a,{item:!0,md:12,lg:6},r.a.createElement(f,{title:"The Hive",subHeader:"Interdisciplinary Design Commons (IDC)",imageFile:"/static/images/organizations/theHiveInside.jpg",description:"The Interdisciplinary Design Commons is a\r 15,000-square-foot, state-of-the-art makerspace that is located in the\r rotunda of the Van Leer Building, right in the heart of Georgia Tech's\r campus. Catering specifically to electronics and computer engineering\r design and innovation, it represents the largest makerspace of its\r kind in the nation. The IDC offers students of all majors a hands-on\r learning environment where they can work together to solve technology\r design challenges. The space features a woodshop, 3D printers, laser\r cutters, a plasma cutter, function generators, power supplies,\r soldering irons, computers, and embedded systems equipment. The Hive\r is the organization that runs and manages the building. I'm a Peer\r Instructor at the Hive and Director of Strategy.",link:"https://hive.ece.gatech.edu/"})),r.a.createElement(o.a,{item:!0,md:12,lg:6},r.a.createElement(f,{title:"Delta Chi (ΔΧ)",subHeader:"The Brotherhood of a Lifetime",imageFile:"/static/images/organizations/deltaChi.jpg",description:"Georgia Tech's Delta Chi was founded as an\r alternative Greek experience than what was offered at the time.\r In our short history, we have won 20 President’s Cups, were the\r first fraternity chapter to be awarded two NIC Awards of\r Distinction, and have won numerous Georgia Tech IFC awards for\r Scholarship, Homecoming, Philanthropy, Leadership, Involvement,\r and Dean Dull awards for overall performance. I have been a\r brother since Spring of 2018.",link:"http://www.gtdeltachi.com/the-chapter.html"})),r.a.createElement(o.a,{item:!0,md:12,lg:6},r.a.createElement(f,{title:"University Innovation Fellows",subHeader:'"We believe students can change the world."',imageFile:"/static/images/organizations/uif.jpg",description:"The University Innovation Fellows program empowers\r students to become agents of change at their schools. The Fellows\r are a global community leading a movement to ensure that all\r students gain the attitudes, skills and knowledge required to\r navigate a complex world. These student leaders from schools\r around the world create opportunities to help their peers build\r the creative confidence, agency, and entrepreneurial mindset\r needed to address global challenges and to build a better future.\r Fellows create student innovation spaces, start entrepreneurship\r organizations, facilitate experiential workshops, work with\r faculty and administrators to develop new courses, and much more.\r They serve as advocates for lasting institutional change with\r academic leaders, lending the much-needed student voice to the\r conversations about the future of higher education. I have been a\r fellow since Fall of 2017.",link:"https://universityinnovationfellows.org/"})),r.a.createElement(o.a,{item:!0,md:12,lg:6},r.a.createElement(f,{title:"Open Ideo Atlanta/Georgia Tech",subHeader:"Fall 2019",description:"As a organization run by members of Design Bloc",image:"/static/images/organizations/open_ideo.jpg",imageTitle:"An OpenIDEO meeting"})))))}},o4QW:function(e,t,a){"use strict";var n=a("k1TG"),r=a("aXB2"),i=a("q1tI"),o=a.n(i),s=(a("17x9"),a("iuhU")),c=a("H2TA"),l=o.a.forwardRef((function(e,t){var a=e.disableSpacing,i=void 0!==a&&a,c=e.classes,l=e.className,d=Object(r.a)(e,["disableSpacing","classes","className"]);return o.a.createElement("div",Object(n.a)({className:Object(s.a)(c.root,l,!i&&c.spacing),ref:t},d))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(l)},"oa/T":function(e,t,a){"use strict";var n=a("k1TG"),r=a("aXB2"),i=a("q1tI"),o=a.n(i),s=(a("17x9"),a("iuhU")),c=a("H2TA"),l=o.a.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.component,l=void 0===c?"div":c,d=Object(r.a)(e,["classes","className","component"]);return o.a.createElement(l,Object(n.a)({className:Object(s.a)(a.root,i),ref:t},d))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)}}]);
//# sourceMappingURL=component---src-pages-organizations-js-2bcdc79919ec16fd4b3c.js.map
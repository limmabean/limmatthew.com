(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var a=r("5NKs");t.__esModule=!0,t.default=void 0;var n,i=a(r("v06X")),o=a(r("XEEL")),s=a(r("uDP2")),l=a(r("j8BX")),c=a(r("q1tI")),d=a(r("17x9")),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return m(t||r).src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},A=Object.create({}),g=function(e){var t=u(e),r=p(t);return A[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function w(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function j(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function x(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),v.set(e,t)),function(){r.unobserve(e),v.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+c+o+s+r+a+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,n=e.spreadProps,i=c.default.createElement(R,(0,l.default)({src:t},n));return r.length>1?c.default.createElement("picture",null,a(r),i):i},R=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:r,srcSet:a,src:n},p,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var I=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!h&&b&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(h||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=p(t),A[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,A=e.fluid,g=e.fixed,h=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,v=e.itemProp,S=e.loading,x=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:O?1:0,transition:I?"opacity "+y+"ms":"none"},s),T="boolean"==typeof h?"lightgray":h,P={transitionDelay:y+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&P,{},s,{},f),C={title:t,alt:this.state.isVisible?"":r,style:k,className:p,itemProp:v};if(A){var G=A,Y=m(A);return c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(Y.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/Y.aspectRatio+"%"}}),T&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&P)}),Y.base64&&c.default.createElement(N,{src:Y.base64,spreadProps:C,imageVariants:G,generateSources:j}),Y.tracedSVG&&c.default.createElement(N,{src:Y.tracedSVG,spreadProps:C,imageVariants:G,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,E(G),c.default.createElement(R,{alt:r,title:t,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:r,title:t,loading:S},Y,{imageVariants:G}))}}))}if(g){var Q=g,z=m(g),V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete V.display,c.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},T&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:T,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},I&&P)}),z.base64&&c.default.createElement(N,{src:z.base64,spreadProps:C,imageVariants:Q,generateSources:j}),z.tracedSVG&&c.default.createElement(N,{src:z.tracedSVG,spreadProps:C,imageVariants:Q,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,E(Q),c.default.createElement(R,{alt:r,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:r,title:t,loading:S},z,{imageVariants:Q}))}}))}return null},t}(c.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});I.propTypes={resolutions:L,sizes:T,fixed:d.default.oneOfType([L,d.default.arrayOf(L)]),fluid:d.default.oneOfType([T,d.default.arrayOf(T)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=I;t.default=P},INYr:function(e,t,r){"use strict";var a=r("XKFU"),n=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a(a.P+a.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},RXBc:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),i=r("Bl7J"),o=(r("tBDR"),r("tUrg"),r("NrVZ")),s=r("Z3vd"),l=r("ofer"),c=r("R/WZ"),d=(r("B7fq"),Object(c.a)((function(e){return{root:{flexGrow:1,position:"fixed",marginTop:"120px",height:"100%"},link:{color:"rgba(39, 39, 39)",textDecoration:"none"},linkButton:{paddingLeft:0,paddingRight:0}}})));function u(){var e=d();return n.a.createElement("div",{className:e.root},n.a.createElement(o.a,{orientation:"vertical",variant:"text"},n.a.createElement("a",{href:"#computing",className:e.link},n.a.createElement(s.a,null,n.a.createElement(l.a,{className:"mySideText",variant:"body1"},"computing"))),n.a.createElement("a",{href:"#sustainability",className:e.link},n.a.createElement(s.a,null,n.a.createElement(l.a,{className:"mySideText",variant:"body1"},"sustainability"))),n.a.createElement("a",{href:"#design",className:e.link},n.a.createElement(s.a,null,n.a.createElement(l.a,{className:"mySideText",variant:"body1"},"design"))),n.a.createElement("a",{href:"#makerspaces",className:e.link},n.a.createElement(s.a,null,n.a.createElement(l.a,{className:"mySideText",variant:"body1"},"makerspaces")))))}var f=r("tRbT"),p=r("Ji2X"),m=(r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("t8Zj")),A=r("k1TG"),g=(r("17x9"),r("2+6g"));var h=function(e,t){return t?Object(g.a)(e,t,{clone:!1}):e};var y=function(e){var t=function(t){var r=e(t);return t.css?Object(A.a)({},h(r,e(Object(A.a)({theme:t.theme},t.css))),{},function(e,t){var r={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(r[a]=e[a])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(m.a)(e.filterProps)),t};r("DNiP");var b=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=function(e){return t.reduce((function(t,r){var a=r(e);return a?h(t,a):t}),{})};return a.propTypes={},a.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),a},v=(r("LK8F"),r("KKXr"),r("FqMR")),E=r("0QZy"),S={xs:0,sm:600,md:960,lg:1280,xl:1920},w={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(S[e],"px)")}};function j(e,t,r){if(Array.isArray(t)){var a=e.theme.breakpoints||w;return t.reduce((function(e,n,i){return e[a.up(a.keys[i])]=r(t[i]),e}),{})}if("object"===Object(E.a)(t)){var n=e.theme.breakpoints||w;return Object.keys(t).reduce((function(e,a){return e[n.up(a)]=r(t[a]),e}),{})}return r(t)}function x(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var O=function(e){var t=e.prop,r=e.cssProperty,a=void 0===r?e.prop:r,n=e.themeKey,i=e.transform,o=function(e){if(null==e[t])return null;var r=e[t],o=x(e.theme,n)||{};return j(e,r,(function(e){var t;return"function"==typeof o?t=o(e):Array.isArray(o)?t=o[e]||e:(t=x(o,e)||e,i&&(t=i(t))),!1===a?t:Object(v.a)({},a,t)}))};return o.propTypes={},o.filterProps=[t],o};function B(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var N=b(O({prop:"border",themeKey:"borders",transform:B}),O({prop:"borderTop",themeKey:"borders",transform:B}),O({prop:"borderRight",themeKey:"borders",transform:B}),O({prop:"borderBottom",themeKey:"borders",transform:B}),O({prop:"borderLeft",themeKey:"borders",transform:B}),O({prop:"borderColor",themeKey:"palette"}),O({prop:"borderRadius",themeKey:"shape"})),R=b(O({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),O({prop:"display"}),O({prop:"overflow"}),O({prop:"textOverflow"}),O({prop:"visibility"}),O({prop:"whiteSpace"})),I=b(O({prop:"flexBasis"}),O({prop:"flexDirection"}),O({prop:"flexWrap"}),O({prop:"justifyContent"}),O({prop:"alignItems"}),O({prop:"alignContent"}),O({prop:"order"}),O({prop:"flex"}),O({prop:"flexGrow"}),O({prop:"flexShrink"}),O({prop:"alignSelf"}),O({prop:"justifyItems"}),O({prop:"justifySelf"})),L=b(O({prop:"position"}),O({prop:"zIndex",themeKey:"zIndex"}),O({prop:"top"}),O({prop:"right"}),O({prop:"bottom"}),O({prop:"left"})),T=b(O({prop:"color",themeKey:"palette"}),O({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),P=O({prop:"boxShadow",themeKey:"shadows"});function k(e){return e<=1?"".concat(100*e,"%"):e}var C=O({prop:"width",transform:k}),G=O({prop:"maxWidth",transform:k}),Y=O({prop:"minWidth",transform:k}),Q=O({prop:"height",transform:k}),z=O({prop:"maxHeight",transform:k}),V=O({prop:"minHeight",transform:k}),M=(O({prop:"size",cssProperty:"width",transform:k}),O({prop:"size",cssProperty:"height",transform:k}),b(C,G,Y,Q,z,V)),K=(r("bWfx"),r("YjCJ"));var D=r("SCGU");function W(e,t){return Object(K.a)(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],a=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(l){n=!0,i=l}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}}(e,t)||Object(D.a)()}var F,X,q={m:"margin",p:"padding"},H={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},U={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},J=(F=function(e){if(e.length>2){if(!U[e])return[e];e=U[e]}var t=W(e.split(""),2),r=t[0],a=t[1],n=q[r],i=H[a]||"";return Array.isArray(i)?i.map((function(e){return n+e})):[n+i]},X={},function(e){return void 0===X[e]&&(X[e]=F(e)),X[e]}),Z=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function _(e,t){return function(r){return e.reduce((function(e,a){return e[a]=function(e,t){if("string"==typeof t)return t;var r=e(Math.abs(t));return t>=0?r:"number"==typeof r?-r:"-".concat(r)}(t,r),e}),{})}}function $(e){var t=function(e){var t=e.spacing||8;return"number"==typeof t?function(e){return t*e}:Array.isArray(t)?function(e){return t[e]}:"function"==typeof t?t:function(){}}(e.theme);return Object.keys(e).map((function(r){if(-1===Z.indexOf(r))return null;var a=_(J(r),t),n=e[r];return j(e,n,a)})).reduce(h,{})}$.propTypes={},$.filterProps=Z;var ee=$,te=b(O({prop:"fontFamily",themeKey:"typography"}),O({prop:"fontSize",themeKey:"typography"}),O({prop:"fontStyle",themeKey:"typography"}),O({prop:"fontWeight",themeKey:"typography"}),O({prop:"letterSpacing"}),O({prop:"lineHeight"}),O({prop:"textAlign"})),re=(r("f3/d"),r("aXB2")),ae=r("iuhU"),ne=r("2mql"),ie=r.n(ne),oe=r("RD7I");function se(e,t){var r={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(r[a]=e[a])})),r}var le=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.name,i=Object(re.a)(r,["name"]);var o,s=a,l="function"==typeof t?function(e){return{root:function(r){return t(Object(A.a)({theme:e},r))}}}:{root:t},c=Object(oe.a)(l,Object(A.a)({Component:e,name:a||e.displayName,classNamePrefix:s},i));t.filterProps&&(o=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var d=n.a.forwardRef((function(t,r){var a=t.children,i=t.className,s=t.clone,l=t.component,d=Object(re.a)(t,["children","className","clone","component"]),u=c(t),f=Object(ae.a)(u.root,i),p=d;if(o&&(p=se(p,o)),s)return n.a.cloneElement(a,Object(A.a)({className:Object(ae.a)(a.props.className,f)},p));if("function"==typeof a)return a(Object(A.a)({className:f},p));var m=l||e;return n.a.createElement(m,Object(A.a)({ref:r,className:f},p),a)}));return ie()(d,e),d}},ce=r("cNwE"),de=function(e){var t=le(e);return function(e,r){return t(e,Object(A.a)({defaultTheme:ce.a},r))}},ue=y(b(N,R,I,L,T,P,M,ee,te)),fe=de("div")(ue,{name:"MuiBox"}),pe=r("vrFN"),me=Object(c.a)((function(e){return{main:{margin:"0 0",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}}}));t.default=function(){var e=me();return n.a.createElement(i.a,null,n.a.createElement(pe.a,{title:"Matthew Lim"}),n.a.createElement(f.a,{container:!0,spacing:0},n.a.createElement(f.a,{item:!0,xs:1},n.a.createElement("nav",{id:"sidebar"},n.a.createElement(u,null))),n.a.createElement(f.a,{item:!0,xs:11},n.a.createElement(p.a,{maxWidth:"sm",className:e.main},n.a.createElement("main",null,n.a.createElement(l.a,{variant:"h5"},"My name is Matthew Lim."),n.a.createElement(l.a,{variant:"body1"},"I am a Computer Engineering student at Georgia Tech."),n.a.createElement(l.a,{variant:"h3"},"This website is ",n.a.createElement("b",null,"still under construction.")),n.a.createElement(l.a,{variant:"h5"},"Feel free to look around but know some portions of the website are incomplete."),n.a.createElement(fe,{id:"computing"}),n.a.createElement(fe,{id:"sustainability"}),n.a.createElement(fe,{id:"design"}),n.a.createElement(fe,{id:"makerspaces"}))))))}},SCGU:function(e,t,r){"use strict";function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}r.d(t,"a",(function(){return a}))},YjCJ:function(e,t,r){"use strict";function a(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return a}))},qG75:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB2SksRoKg/8QAGxAAAgMAAwAAAAAAAAAAAAAAAAECAyEREhP/2gAIAQEAAQUCV1bh6QZ3icYsNP/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwFkf//EABYRAQEBAAAAAAAAAAAAAAAAAAASAf/aAAgBAgEBPwGl6//EABoQAAICAwAAAAAAAAAAAAAAAAABAhEgMTL/2gAIAQEABj8CtyR1htn/xAAcEAEBAQABBQAAAAAAAAAAAAABEQAhMUFRYeH/2gAIAQEAAT8hMlYdAX3mnXRwLDI7G+cv1b//2gAMAwEAAgADAAAAELAf/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EMGP/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERcf/aAAgBAgEBPxC0MX//xAAfEAACAgIBBQAAAAAAAAAAAAABEQAxIWFBcYGhwdH/2gAIAQEAAT8QNMEGMt9LlGQ0BGO8eX2o4TDQyD6gpaAEBeIUuHT5P//Z","aspectRatio":1.4987510407993339,"src":"/static/ac84d46ffc7499105955f077a81aaaa1/69c39/theHiveOutside.jpg","srcSet":"/static/ac84d46ffc7499105955f077a81aaaa1/00260/theHiveOutside.jpg 270w,\\n/static/ac84d46ffc7499105955f077a81aaaa1/60345/theHiveOutside.jpg 540w,\\n/static/ac84d46ffc7499105955f077a81aaaa1/69c39/theHiveOutside.jpg 1080w,\\n/static/ac84d46ffc7499105955f077a81aaaa1/827e9/theHiveOutside.jpg 1620w,\\n/static/ac84d46ffc7499105955f077a81aaaa1/9882a/theHiveOutside.jpg 1800w","sizes":"(max-width: 1080px) 100vw, 1080px"}}}}}')},tBDR:function(e,t,r){"use strict";var a=r("qG75"),n=r("q1tI"),i=r.n(n),o=r("9eSz"),s=r.n(o);t.a=function(){var e=a.data;return i.a.createElement(s.a,{fluid:e.placeholderImage.childImageSharp.fluid})}}}]);
//# sourceMappingURL=component---src-pages-index-js-bf1dce053877f6060446.js.map
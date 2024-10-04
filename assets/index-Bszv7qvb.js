import{r as u,g as q,a as J,s as M,P as Bt,c as v,_ as d,u as U,b as N,j as r,d as $,e as W,f as kt,h as Tt,i as ft,o as At,T as qt,k as Jt,l as Kt,m as jt,M as Qt,n as Nt,p as to,B as Mt,q as Y,L as X,t as wt,v as oo,w as $t,x as eo,y as Ot,z as E,A as ro,S as no,C as Dt,D as rt,E as ao,F as so,G as xt,H as io,I as Et,J as z,K as at,N as et,Q as lo,R as zt,U as ht,V as co,W as St,X as pt}from"./index-BH0Fy5sJ.js";import{L as po,I as uo,a as go}from"./LogoHeader-CKl6RgUe.js";import{L as lt}from"./Link-Bd77FGUn.js";const _t=t=>{const o=u.useRef({});return u.useEffect(()=>{o.current=t}),o.current};function mo(t){return q("MuiAppBar",t)}J("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const fo=["className","color","enableColorOnDark","position"],xo=t=>{const{color:o,position:e,classes:n}=t,a={root:["root",`color${v(o)}`,`position${v(e)}`]};return W(a,mo,n)},st=(t,o)=>t?`${t==null?void 0:t.replace(")","")}, ${o})`:o,ho=M(Bt,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,o[`position${v(e.position)}`],o[`color${v(e.color)}`]]}})(({theme:t,ownerState:o})=>{const e=t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[900];return d({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},o.position==="fixed"&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},o.position==="absolute"&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},o.position==="sticky"&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},o.position==="static"&&{position:"static"},o.position==="relative"&&{position:"relative"},!t.vars&&d({},o.color==="default"&&{backgroundColor:e,color:t.palette.getContrastText(e)},o.color&&o.color!=="default"&&o.color!=="inherit"&&o.color!=="transparent"&&{backgroundColor:t.palette[o.color].main,color:t.palette[o.color].contrastText},o.color==="inherit"&&{color:"inherit"},t.palette.mode==="dark"&&!o.enableColorOnDark&&{backgroundColor:null,color:null},o.color==="transparent"&&d({backgroundColor:"transparent",color:"inherit"},t.palette.mode==="dark"&&{backgroundImage:"none"})),t.vars&&d({},o.color==="default"&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette.AppBar.defaultBg:st(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?t.vars.palette.text.primary:st(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette[o.color].main:st(t.vars.palette.AppBar.darkBg,t.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?t.vars.palette[o.color].contrastText:st(t.vars.palette.AppBar.darkColor,t.vars.palette[o.color].contrastText)},!["inherit","transparent"].includes(o.color)&&{backgroundColor:"var(--AppBar-background)"},{color:o.color==="inherit"?"inherit":"var(--AppBar-color)"},o.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),vo=u.forwardRef(function(o,e){const n=U({props:o,name:"MuiAppBar"}),{className:a,color:l="primary",enableColorOnDark:s=!1,position:c="fixed"}=n,p=N(n,fo),i=d({},n,{color:l,position:c,enableColorOnDark:s}),m=xo(i);return r.jsx(ho,d({square:!0,component:"header",ownerState:i,elevation:4,className:$(m.root,a,c==="fixed"&&"mui-fixed"),ref:e},p))});function bo(t){const{badgeContent:o,invisible:e=!1,max:n=99,showZero:a=!1}=t,l=_t({badgeContent:o,max:n});let s=e;e===!1&&o===0&&!a&&(s=!0);const{badgeContent:c,max:p=n}=s?l:t,i=c&&Number(c)>p?`${p}+`:c;return{badgeContent:c,invisible:s,max:p,displayValue:i}}function yo(t){return q("MuiBadge",t)}const H=J("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),Co=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],ut=10,gt=4,Io=t=>{const{color:o,anchorOrigin:e,invisible:n,overlap:a,variant:l,classes:s={}}=t,c={root:["root"],badge:["badge",l,n&&"invisible",`anchorOrigin${v(e.vertical)}${v(e.horizontal)}`,`anchorOrigin${v(e.vertical)}${v(e.horizontal)}${v(a)}`,`overlap${v(a)}`,o!=="default"&&`color${v(o)}`]};return W(c,yo,s)},ko=M("span",{name:"MuiBadge",slot:"Root",overridesResolver:(t,o)=>o.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),jo=M("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.badge,o[e.variant],o[`anchorOrigin${v(e.anchorOrigin.vertical)}${v(e.anchorOrigin.horizontal)}${v(e.overlap)}`],e.color!=="default"&&o[`color${v(e.color)}`],e.invisible&&o.invisible]}})(({theme:t})=>{var o;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:ut*2,lineHeight:1,padding:"0 6px",height:ut*2,borderRadius:ut,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen}),variants:[...Object.keys(((o=t.vars)!=null?o:t).palette).filter(e=>{var n,a;return((n=t.vars)!=null?n:t).palette[e].main&&((a=t.vars)!=null?a:t).palette[e].contrastText}).map(e=>({props:{color:e},style:{backgroundColor:(t.vars||t).palette[e].main,color:(t.vars||t).palette[e].contrastText}})),{props:{variant:"dot"},style:{borderRadius:gt,height:gt*2,minWidth:gt*2,padding:0}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${H.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${H.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${H.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${H.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${H.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${H.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${H.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:e})=>e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${H.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})}}]}}),$o=u.forwardRef(function(o,e){var n,a,l,s,c,p;const i=U({props:o,name:"MuiBadge"}),{anchorOrigin:m={vertical:"top",horizontal:"right"},className:k,component:C,components:R={},componentsProps:x={},children:h,overlap:b="rectangular",color:I="default",invisible:S=!1,max:P=99,badgeContent:j,slots:_,slotProps:L,showZero:y=!1,variant:F="standard"}=i,w=N(i,Co),{badgeContent:B,invisible:O,max:G,displayValue:T}=bo({max:P,invisible:S,badgeContent:j,showZero:y}),K=_t({anchorOrigin:m,color:I,overlap:b,variant:F,badgeContent:j}),V=O||B==null&&F!=="dot",{color:Q=I,overlap:Z=b,anchorOrigin:g=m,variant:f=F}=V?K:i,A=f!=="dot"?T:void 0,D=d({},i,{badgeContent:B,invisible:V,max:G,displayValue:A,showZero:y,anchorOrigin:g,color:Q,overlap:Z,variant:f}),yt=Io(D),Ct=(n=(a=_==null?void 0:_.root)!=null?a:R.Root)!=null?n:ko,It=(l=(s=_==null?void 0:_.badge)!=null?s:R.Badge)!=null?l:jo,ct=(c=L==null?void 0:L.root)!=null?c:x.root,dt=(p=L==null?void 0:L.badge)!=null?p:x.badge,Xt=kt({elementType:Ct,externalSlotProps:ct,externalForwardedProps:w,additionalProps:{ref:e,as:C},ownerState:D,className:$(ct==null?void 0:ct.className,yt.root,k)}),Zt=kt({elementType:It,externalSlotProps:dt,ownerState:D,className:$(yt.badge,dt==null?void 0:dt.className)});return r.jsxs(Ct,d({},Xt,{children:[h,r.jsx(It,d({},Zt,{children:A}))]}))}),Oo=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ro(t,o,e){const n=o.getBoundingClientRect(),a=e&&e.getBoundingClientRect(),l=At(o);let s;if(o.fakeTransform)s=o.fakeTransform;else{const i=l.getComputedStyle(o);s=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}let c=0,p=0;if(s&&s!=="none"&&typeof s=="string"){const i=s.split("(")[1].split(")")[0].split(",");c=parseInt(i[4],10),p=parseInt(i[5],10)}return t==="left"?a?`translateX(${a.right+c-n.left}px)`:`translateX(${l.innerWidth+c-n.left}px)`:t==="right"?a?`translateX(-${n.right-a.left-c}px)`:`translateX(-${n.left+n.width-c}px)`:t==="up"?a?`translateY(${a.bottom+p-n.top}px)`:`translateY(${l.innerHeight+p-n.top}px)`:a?`translateY(-${n.top-a.top+n.height-p}px)`:`translateY(-${n.top+n.height-p}px)`}function Po(t){return typeof t=="function"?t():t}function it(t,o,e){const n=Po(e),a=Ro(t,o,n);a&&(o.style.webkitTransform=a,o.style.transform=a)}const Lo=u.forwardRef(function(o,e){const n=Tt(),a={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},l={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:s,appear:c=!0,children:p,container:i,direction:m="down",easing:k=a,in:C,onEnter:R,onEntered:x,onEntering:h,onExit:b,onExited:I,onExiting:S,style:P,timeout:j=l,TransitionComponent:_=qt}=o,L=N(o,Oo),y=u.useRef(null),F=ft(p.ref,y,e),w=g=>f=>{g&&(f===void 0?g(y.current):g(y.current,f))},B=w((g,f)=>{it(m,g,i),Kt(g),R&&R(g,f)}),O=w((g,f)=>{const A=jt({timeout:j,style:P,easing:k},{mode:"enter"});g.style.webkitTransition=n.transitions.create("-webkit-transform",d({},A)),g.style.transition=n.transitions.create("transform",d({},A)),g.style.webkitTransform="none",g.style.transform="none",h&&h(g,f)}),G=w(x),T=w(S),K=w(g=>{const f=jt({timeout:j,style:P,easing:k},{mode:"exit"});g.style.webkitTransition=n.transitions.create("-webkit-transform",f),g.style.transition=n.transitions.create("transform",f),it(m,g,i),b&&b(g)}),V=w(g=>{g.style.webkitTransition="",g.style.transition="",I&&I(g)}),Q=g=>{s&&s(y.current,g)},Z=u.useCallback(()=>{y.current&&it(m,y.current,i)},[m,i]);return u.useEffect(()=>{if(C||m==="down"||m==="right")return;const g=Jt(()=>{y.current&&it(m,y.current,i)}),f=At(y.current);return f.addEventListener("resize",g),()=>{g.clear(),f.removeEventListener("resize",g)}},[m,C,i]),u.useEffect(()=>{C||Z()},[C,Z]),r.jsx(_,d({nodeRef:y,onEnter:B,onEntered:G,onEntering:O,onExit:K,onExited:V,onExiting:T,addEndListener:Q,appear:c,in:C,timeout:j},L,{children:(g,f)=>u.cloneElement(p,d({ref:F,style:d({visibility:g==="exited"&&!C?"hidden":void 0},P,p.props.style)},f))}))});function Bo(t){return q("MuiDrawer",t)}J("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const To=["BackdropProps"],Ao=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Gt=(t,o)=>{const{ownerState:e}=t;return[o.root,(e.variant==="permanent"||e.variant==="persistent")&&o.docked,o.modal]},No=t=>{const{classes:o,anchor:e,variant:n}=t,a={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${v(e)}`,n!=="temporary"&&`paperAnchorDocked${v(e)}`]};return W(a,Bo,o)},Mo=M(Qt,{name:"MuiDrawer",slot:"Root",overridesResolver:Gt})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),Rt=M("div",{shouldForwardProp:Nt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Gt})({flex:"0 0 auto"}),wo=M(Bt,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.paper,o[`paperAnchor${v(e.anchor)}`],e.variant!=="temporary"&&o[`paperAnchorDocked${v(e.anchor)}`]]}})(({theme:t,ownerState:o})=>d({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},o.anchor==="left"&&{left:0},o.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="right"&&{right:0},o.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="left"&&o.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="top"&&o.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="right"&&o.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="bottom"&&o.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),Ft={left:"right",right:"left",top:"down",bottom:"up"};function Do(t){return["left","right"].indexOf(t)!==-1}function Eo({direction:t},o){return t==="rtl"&&Do(o)?Ft[o]:o}const Pt=u.forwardRef(function(o,e){const n=U({props:o,name:"MuiDrawer"}),a=Tt(),l=to(),s={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:c="left",BackdropProps:p,children:i,className:m,elevation:k=16,hideBackdrop:C=!1,ModalProps:{BackdropProps:R}={},onClose:x,open:h=!1,PaperProps:b={},SlideProps:I,TransitionComponent:S=Lo,transitionDuration:P=s,variant:j="temporary"}=n,_=N(n.ModalProps,To),L=N(n,Ao),y=u.useRef(!1);u.useEffect(()=>{y.current=!0},[]);const F=Eo({direction:l?"rtl":"ltr"},c),B=d({},n,{anchor:c,elevation:k,open:h,variant:j},L),O=No(B),G=r.jsx(wo,d({elevation:j==="temporary"?k:0,square:!0},b,{className:$(O.paper,b.className),ownerState:B,children:i}));if(j==="permanent")return r.jsx(Rt,d({className:$(O.root,O.docked,m),ownerState:B,ref:e},L,{children:G}));const T=r.jsx(S,d({in:h,direction:Ft[F],timeout:P,appear:y.current},I,{children:G}));return j==="persistent"?r.jsx(Rt,d({className:$(O.root,O.docked,m),ownerState:B,ref:e},L,{children:T})):r.jsx(Mo,d({BackdropProps:d({},p,R,{transitionDuration:P}),className:$(O.root,O.modal,m),open:h,ownerState:B,onClose:x,hideBackdrop:C,ref:e},L,_,{children:T}))});function zo(t){return q("MuiListItem",t)}const tt=J("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function So(t){return q("MuiListItemButton",t)}const ot=J("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),_o=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Go=(t,o)=>{const{ownerState:e}=t;return[o.root,e.dense&&o.dense,e.alignItems==="flex-start"&&o.alignItemsFlexStart,e.divider&&o.divider,!e.disableGutters&&o.gutters]},Fo=t=>{const{alignItems:o,classes:e,dense:n,disabled:a,disableGutters:l,divider:s,selected:c}=t,i=W({root:["root",n&&"dense",!l&&"gutters",s&&"divider",a&&"disabled",o==="flex-start"&&"alignItemsFlexStart",c&&"selected"]},So,e);return d({},e,i)},Vo=M(Mt,{shouldForwardProp:t=>Nt(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Go})(({theme:t,ownerState:o})=>d({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ot.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Y(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${ot.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:Y(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${ot.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:Y(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Y(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${ot.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${ot.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},o.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},o.alignItems==="flex-start"&&{alignItems:"flex-start"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.dense&&{paddingTop:4,paddingBottom:4})),Vt=u.forwardRef(function(o,e){const n=U({props:o,name:"MuiListItemButton"}),{alignItems:a="center",autoFocus:l=!1,component:s="div",children:c,dense:p=!1,disableGutters:i=!1,divider:m=!1,focusVisibleClassName:k,selected:C=!1,className:R}=n,x=N(n,_o),h=u.useContext(X),b=u.useMemo(()=>({dense:p||h.dense||!1,alignItems:a,disableGutters:i}),[a,h.dense,p,i]),I=u.useRef(null);wt(()=>{l&&I.current&&I.current.focus()},[l]);const S=d({},n,{alignItems:a,dense:b.dense,disableGutters:i,divider:m,selected:C}),P=Fo(S),j=ft(I,e);return r.jsx(X.Provider,{value:b,children:r.jsx(Vo,d({ref:j,href:x.href||x.to,component:(x.href||x.to)&&s==="div"?"button":s,focusVisibleClassName:$(P.focusVisible,k),ownerState:S,className:$(P.root,R)},x,{classes:P,children:c}))})});function Uo(t){return q("MuiListItemSecondaryAction",t)}J("MuiListItemSecondaryAction",["root","disableGutters"]);const Wo=["className"],Ho=t=>{const{disableGutters:o,classes:e}=t;return W({root:["root",o&&"disableGutters"]},Uo,e)},Yo=M("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.disableGutters&&o.disableGutters]}})(({ownerState:t})=>d({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),Ut=u.forwardRef(function(o,e){const n=U({props:o,name:"MuiListItemSecondaryAction"}),{className:a}=n,l=N(n,Wo),s=u.useContext(X),c=d({},n,{disableGutters:s.disableGutters}),p=Ho(c);return r.jsx(Yo,d({className:$(p.root,a),ownerState:c,ref:e},l))});Ut.muiName="ListItemSecondaryAction";const Xo=["className"],Zo=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],qo=(t,o)=>{const{ownerState:e}=t;return[o.root,e.dense&&o.dense,e.alignItems==="flex-start"&&o.alignItemsFlexStart,e.divider&&o.divider,!e.disableGutters&&o.gutters,!e.disablePadding&&o.padding,e.button&&o.button,e.hasSecondaryAction&&o.secondaryAction]},Jo=t=>{const{alignItems:o,button:e,classes:n,dense:a,disabled:l,disableGutters:s,disablePadding:c,divider:p,hasSecondaryAction:i,selected:m}=t;return W({root:["root",a&&"dense",!s&&"gutters",!c&&"padding",p&&"divider",l&&"disabled",e&&"button",o==="flex-start"&&"alignItemsFlexStart",i&&"secondaryAction",m&&"selected"],container:["container"]},zo,n)},Ko=M("div",{name:"MuiListItem",slot:"Root",overridesResolver:qo})(({theme:t,ownerState:o})=>d({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!o.disablePadding&&d({paddingTop:8,paddingBottom:8},o.dense&&{paddingTop:4,paddingBottom:4},!o.disableGutters&&{paddingLeft:16,paddingRight:16},!!o.secondaryAction&&{paddingRight:48}),!!o.secondaryAction&&{[`& > .${ot.root}`]:{paddingRight:48}},{[`&.${tt.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${tt.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Y(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${tt.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:Y(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${tt.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},o.alignItems==="flex-start"&&{alignItems:"flex-start"},o.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},o.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${tt.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:Y(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Y(t.palette.primary.main,t.palette.action.selectedOpacity)}}},o.hasSecondaryAction&&{paddingRight:48})),Qo=M("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,o)=>o.container})({position:"relative"}),Wt=u.forwardRef(function(o,e){const n=U({props:o,name:"MuiListItem"}),{alignItems:a="center",autoFocus:l=!1,button:s=!1,children:c,className:p,component:i,components:m={},componentsProps:k={},ContainerComponent:C="li",ContainerProps:{className:R}={},dense:x=!1,disabled:h=!1,disableGutters:b=!1,disablePadding:I=!1,divider:S=!1,focusVisibleClassName:P,secondaryAction:j,selected:_=!1,slotProps:L={},slots:y={}}=n,F=N(n.ContainerProps,Xo),w=N(n,Zo),B=u.useContext(X),O=u.useMemo(()=>({dense:x||B.dense||!1,alignItems:a,disableGutters:b}),[a,B.dense,x,b]),G=u.useRef(null);wt(()=>{l&&G.current&&G.current.focus()},[l]);const T=u.Children.toArray(c),K=T.length&&oo(T[T.length-1],["ListItemSecondaryAction"]),V=d({},n,{alignItems:a,autoFocus:l,button:s,dense:O.dense,disabled:h,disableGutters:b,disablePadding:I,divider:S,hasSecondaryAction:K,selected:_}),Q=Jo(V),Z=ft(G,e),g=y.root||m.Root||Ko,f=L.root||k.root||{},A=d({className:$(Q.root,f.className,p),disabled:h},w);let D=i||"li";return s&&(A.component=i||"div",A.focusVisibleClassName=$(tt.focusVisible,P),D=Mt),K?(D=!A.component&&!i?"div":D,C==="li"&&(D==="li"?D="div":A.component==="li"&&(A.component="div")),r.jsx(X.Provider,{value:O,children:r.jsxs(Qo,d({as:C,className:$(Q.container,R),ref:Z,ownerState:V},F,{children:[r.jsx(g,d({},f,!$t(g)&&{as:D,ownerState:d({},V,f.ownerState)},A,{children:T})),T.pop()]}))})):r.jsx(X.Provider,{value:O,children:r.jsxs(g,d({},f,{as:D,ref:Z},!$t(g)&&{ownerState:d({},V,f.ownerState)},A,{children:[T,j&&r.jsx(Ut,{children:j})]}))})}),te=["className"],oe=t=>{const{alignItems:o,classes:e}=t;return W({root:["root",o==="flex-start"&&"alignItemsFlexStart"]},eo,e)},ee=M("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.alignItems==="flex-start"&&o.alignItemsFlexStart]}})(({theme:t,ownerState:o})=>d({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},o.alignItems==="flex-start"&&{marginTop:8})),vt=u.forwardRef(function(o,e){const n=U({props:o,name:"MuiListItemIcon"}),{className:a}=n,l=N(n,te),s=u.useContext(X),c=d({},n,{alignItems:s.alignItems}),p=oe(c);return r.jsx(ee,d({className:$(p.root,a),ownerState:c,ref:e},l))}),re=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ne=t=>{const{classes:o,inset:e,primary:n,secondary:a,dense:l}=t;return W({root:["root",e&&"inset",l&&"dense",n&&a&&"multiline"],primary:["primary"],secondary:["secondary"]},ro,o)},ae=M("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[{[`& .${Ot.primary}`]:o.primary},{[`& .${Ot.secondary}`]:o.secondary},o.root,e.inset&&o.inset,e.primary&&e.secondary&&o.multiline,e.dense&&o.dense]}})(({ownerState:t})=>d({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),Ht=u.forwardRef(function(o,e){const n=U({props:o,name:"MuiListItemText"}),{children:a,className:l,disableTypography:s=!1,inset:c=!1,primary:p,primaryTypographyProps:i,secondary:m,secondaryTypographyProps:k}=n,C=N(n,re),{dense:R}=u.useContext(X);let x=p??a,h=m;const b=d({},n,{disableTypography:s,inset:c,primary:!!x,secondary:!!h,dense:R}),I=ne(b);return x!=null&&x.type!==E&&!s&&(x=r.jsx(E,d({variant:R?"body2":"body1",className:I.primary,component:i!=null&&i.variant?void 0:"span",display:"block"},i,{children:x}))),h!=null&&h.type!==E&&!s&&(h=r.jsx(E,d({variant:"body2",className:I.secondary,color:"text.secondary",display:"block"},k,{children:h}))),r.jsxs(ae,d({className:$(I.root,l),ownerState:b,ref:e},C,{children:[x,h]}))});function se(t){return q("MuiToolbar",t)}J("MuiToolbar",["root","gutters","regular","dense"]);const ie=["className","component","disableGutters","variant"],le=t=>{const{classes:o,disableGutters:e,variant:n}=t;return W({root:["root",!e&&"gutters",n]},se,o)},ce=M("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,!e.disableGutters&&o.gutters,o[e.variant]]}})(({theme:t,ownerState:o})=>d({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},o.variant==="dense"&&{minHeight:48}),({theme:t,ownerState:o})=>o.variant==="regular"&&t.mixins.toolbar),bt=u.forwardRef(function(o,e){const n=U({props:o,name:"MuiToolbar"}),{className:a,component:l="div",disableGutters:s=!1,variant:c="regular"}=n,p=N(n,ie),i=d({},n,{component:l,disableGutters:s,variant:c}),m=le(i);return r.jsx(ce,d({as:l,className:$(m.root,a),ref:e,ownerState:i},p))}),de=["getTrigger","target"];function pe(t,o){const{disableHysteresis:e=!1,threshold:n=100,target:a}=o,l=t.current;return a&&(t.current=a.pageYOffset!==void 0?a.pageYOffset:a.scrollTop),!e&&l!==void 0&&t.current<l?!1:t.current>n}const ue=typeof window<"u"?window:null;function ge(t={}){const{getTrigger:o=pe,target:e=ue}=t,n=N(t,de),a=u.useRef(),[l,s]=u.useState(()=>o(a,n));return u.useEffect(()=>{const c=()=>{s(o(a,d({target:e},n)))};return c(),e.addEventListener("scroll",c,{passive:!0}),()=>{e.removeEventListener("scroll",c,{passive:!0})}},[e,o,JSON.stringify(n)]),l}const me=t=>r.jsxs(no,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",...t,children:[r.jsx("mask",{id:"mask0_8121_67",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"32",height:"32",children:r.jsx("rect",{width:"32",height:"32",fill:"white"})}),r.jsxs("g",{mask:"url(#mask0_8121_67)",children:[r.jsx("path",{d:"M13.6704 7.84579L14.0416 13.3657L14.2258 16.1401C14.2278 16.4255 14.2725 16.7089 14.3588 16.9813C14.5813 17.5101 15.1168 17.8461 15.6993 17.8227L24.5756 17.242C24.96 17.2357 25.3312 17.3795 25.6074 17.6417C25.8377 17.8603 25.9864 18.1461 26.0333 18.4536L26.049 18.6403C25.6817 23.7265 21.9461 27.9689 16.8704 29.064C11.7946 30.1591 6.58965 27.8457 4.08145 23.3799C3.35836 22.0824 2.90671 20.6564 2.75301 19.1853C2.68881 18.7499 2.66055 18.31 2.66848 17.87C2.66055 12.417 6.5438 7.70262 11.9796 6.5661C12.6339 6.46422 13.2752 6.81057 13.5376 7.40738C13.6054 7.54559 13.6502 7.69362 13.6704 7.84579Z",fill:"currentColor"}),r.jsx("path",{opacity:"0.4",d:"M29.3335 13.083L29.3242 13.1264L29.2973 13.1896L29.301 13.3631C29.2871 13.5929 29.1983 13.8139 29.0455 13.9926C28.8862 14.1786 28.6686 14.3053 28.429 14.3545L28.2829 14.3745L18.0418 15.0381C17.7011 15.0717 17.3619 14.9618 17.1087 14.7359C16.8975 14.5475 16.7626 14.2934 16.7245 14.0195L16.0371 3.79334C16.0251 3.75877 16.0251 3.72129 16.0371 3.6867C16.0465 3.40482 16.1706 3.13838 16.3817 2.9469C16.5926 2.75542 16.8731 2.65486 17.1602 2.66769C23.2401 2.82237 28.3499 7.19431 29.3335 13.083Z",fill:"currentColor"})]})]}),Yt=[{id:1,name:"Dashboard",path:Dt.root,pathName:"dashboard",svgIcon:me,active:!0},{id:9,name:"Authentication",pathName:"authentication",icon:"material-symbols:security-rounded",active:!0,items:[{id:10,name:"Sign in",path:rt.signin,pathName:"sign-in",active:!0},{id:11,name:"Sign up",path:rt.signup,pathName:"sign-up",active:!0}]},{id:2,name:"Leaderboard",path:rt.leaderboard,pathName:"leaderboard",icon:"ri:bar-chart-line"},{id:13,name:"Feedback",path:rt.feedback,pathName:"feedback",icon:"mdi:shopping-outline"},{id:14,name:"Project Dashboard",path:rt.projectdashboard,pathName:"projectdashboard",icon:"mdi:shopping-outline"},{id:3,name:"Order",path:"#!",pathName:"order",icon:"ph:shopping-cart-light"},{id:5,name:"Sales Report",path:"#!",pathName:"sales-report",icon:"ph:chart-line"},{id:6,name:"Messages",path:"#!",pathName:"messages",icon:"mdi:message-processing-outline"},{id:7,name:"Settings",path:"#!",pathName:"settings",icon:"fluent:settings-24-regular",active:!0},{id:8,name:"Sign Out",path:"#!",pathName:"sign-out",icon:"humbleicons:logout",active:!0}],fe="/mfaso/assets/knustlogo-CSH6uxNz.png",xe=()=>r.jsx(ao,{sx:{background:`url(${fe}) no-repeat`,width:238},children:r.jsx(so,{sx:{p:3}})}),he=({items:t,open:o})=>{const e=xt();return r.jsx(io,{in:o,timeout:"auto",unmountOnExit:!0,children:r.jsx(Et,{component:"ul",children:t==null?void 0:t.map(n=>r.jsx(Wt,{sx:{py:0,pl:7,pr:0},children:r.jsx(Vt,{selected:e.pathname===n.path,component:n.path?lt:"div",href:n.path,sx:{opacity:n.active?1:.5,pl:3,mt:.5},children:r.jsx(Ht,{primary:n.name})})},n.id))})})},ve=({item:t})=>{const o=xt(),[e,n]=u.useState(!1),a=()=>{n(!e)},{name:l,path:s,icon:c,svgIcon:p,active:i,items:m}=t,k=c?r.jsx(z,{icon:c,fontSize:32}):p?r.jsx(p,{sx:{fontSize:32}}):null;return r.jsxs(Wt,{sx:{flexDirection:"column",alignItems:"stretch",p:0,opacity:i?1:.5},children:[r.jsxs(Vt,{selected:o.pathname===s,component:s?lt:"div",onClick:a,href:s,sx:[o.pathname===s&&{".MuiListItemIcon-root":{color:"common.white"}},{"&:hover .MuiListItemIcon-root":{color:"common.white"}},{pl:3,py:2}],children:[r.jsx(vt,{sx:{mr:3,color:"primary.light",transition:"color 0.3s"},children:k}),r.jsx(Ht,{primary:l,sx:[o.pathname===s&&{fontWeight:600}]}),m&&r.jsx(z,{icon:e?"ph:caret-up-bold":"ph:caret-down-bold"})]}),m&&r.jsx(he,{items:m,open:e})]})},be=()=>r.jsx(Et,{sx:{display:"inline-flex",flexDirection:"column",gap:3},children:Yt.map(t=>r.jsx(ve,{item:t},t.id))}),Lt=()=>r.jsxs(r.Fragment,{children:[r.jsx(bt,{disableGutters:!0,children:r.jsx(po,{})}),r.jsx(at,{sx:t=>({px:5,height:`calc(100vh - ${t.mixins.toolbar.minHeight}px)`,overflowY:"auto"}),children:r.jsxs(et,{gap:17,py:4,children:[r.jsx(be,{}),r.jsx(xe,{})]})})]}),ye=({drawerWidth:t,mobileOpen:o,onTransitionEnd:e,onHandleDrawerClose:n})=>r.jsxs(at,{component:"nav",sx:{width:{lg:t},flexShrink:{sm:0}},"aria-label":"drawer",children:[r.jsx(Pt,{variant:"temporary",open:o,onTransitionEnd:e,onClose:n,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",lg:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:t}},children:r.jsx(Lt,{})}),r.jsx(Pt,{variant:"permanent",sx:{display:{xs:"none",lg:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:t}},open:!0,children:r.jsx(Lt,{})})]}),Ce=t=>r.jsx(lo,{id:"input-with-searchIcon-textfield",InputProps:{startAdornment:r.jsx(uo,{position:"start",children:r.jsx(z,{icon:"gravity-ui:magnifier",sx:{color:"primary.main",fontSize:32,mr:1}})})},type:"text",variant:"filled",placeholder:"Search here...",hiddenLabel:!0,fullWidth:!0,...t}),Ie=({children:t})=>{const o=ge({disableHysteresis:!0,threshold:0});return u.cloneElement(t,{elevation:o?3:0})},ke="/mfaso/assets/Profile-8zlvs7-X.webp",je=[{id:0,label:"Profile",icon:"material-symbols:person"},{id:1,label:"My Account",icon:"material-symbols:account-box-sharp"},{id:2,label:"Logout",icon:"uiw:logout"}],$e=()=>{const[t,o]=u.useState(null),e=!!t,n=s=>{o(s.currentTarget)},a=()=>{o(null)},l=je.map(s=>r.jsxs(zt,{onClick:a,sx:{"&:hover .account-menu-icon":{color:"common.white"}},children:[r.jsx(vt,{children:r.jsx(z,{icon:s.icon,sx:{color:"primary.main"},className:"account-menu-icon"})}),r.jsx(E,{variant:"body1",children:s.label})]},s.id));return r.jsxs(r.Fragment,{children:[r.jsxs(ht,{onClick:n,"aria-controls":e?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":e?"true":void 0,sx:{px:{xs:1,sm:2},minWidth:"auto"},children:[r.jsx(co,{sx:{width:{xs:48,sm:60},height:{xs:48,sm:60},borderRadius:4,mr:{xs:0,xl:2.5}},alt:"User Profile",src:ke}),r.jsxs(at,{sx:{display:{xs:"none",xl:"block"}},children:[r.jsxs(et,{direction:"row",alignItems:"center",columnGap:6,children:[r.jsx(E,{variant:"h6",component:"p",color:"primary.darker",gutterBottom:!0,children:"Lubabalo"}),r.jsx(z,{icon:"ph:caret-down-bold",fontSize:16,color:"primary.darker"})]}),r.jsx(E,{variant:"subtitle2",textAlign:"left",color:"primary.lighter",children:"Admin"})]})]}),r.jsx(St,{anchorEl:t,id:"account-menu",open:e,onClose:a,onClick:a,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:l})]})},nt=[{id:0,code:"Afrikaans",lang:"Afrikaans",flag:"circle-flags:sa"},{id:1,code:"eng",lang:"English",flag:"circle-flags:gb-eng"},{id:2,code:"ban",lang:"বাংলা",flag:"circle-flags:bd"},{id:3,code:"zh",lang:"中文",flag:"circle-flags:cn"},{id:4,code:"tr",lang:"Türkçe",flag:"circle-flags:tr"}],Oe=()=>{const[t,o]=u.useState(null),[e,n]=u.useState(0),a=!!t,l=i=>{o(i.currentTarget)},s=i=>{n(i),o(null)},c=()=>{o(null)},p=nt==null?void 0:nt.map(i=>r.jsxs(zt,{selected:i.id===e,onClick:()=>s(i.id),children:[r.jsx(vt,{children:r.jsx(z,{icon:i.flag})}),r.jsx(E,{variant:"body1",children:i.lang})]},i.id));return r.jsxs("div",{children:[r.jsxs(ht,{onClick:l,"aria-controls":a?"language-dropdown":void 0,"aria-haspopup":"true","aria-expanded":a?"true":void 0,sx:{py:{sm:2.25},px:{xs:1,sm:2.25},minWidth:{xs:"auto"}},children:[r.jsx(z,{icon:nt[e].flag,fontSize:24}),r.jsxs(et,{direction:"row",alignItems:"center",sx:{display:{xs:"none",xl:"flex"}},children:[r.jsx(E,{variant:"h5",color:"grey.600",width:80,mx:2,children:nt[e].lang}),r.jsx(z,{icon:"ph:caret-down-bold",fontSize:20,color:"grey.400"})]})]}),r.jsx(St,{id:"language-dropdown",anchorEl:t,open:a,onClose:c,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:p})]})},Re=()=>r.jsx(ht,{"aria-label":"notifications",sx:{bgcolor:"warning.light",p:{xs:1,sm:1.5},minWidth:"auto"},children:r.jsx($o,{badgeContent:" ",variant:"dot",children:r.jsx(z,{icon:"clarity:notification-line",sx:{fontSize:24,color:"warning.main"}})})}),Pe=({drawerWidth:t,onHandleDrawerToggle:o})=>{const e=xt(),n=u.useMemo(()=>Yt.find(l=>e.pathname===l.path).name,[e]);return r.jsx(Ie,{children:r.jsx(vo,{position:"fixed",sx:{width:{lg:`calc(100% - ${t}px)`},ml:{sm:`${t}px`}},children:r.jsxs(bt,{sx:{justifyContent:"space-between",gap:{xs:1,sm:5}},children:[r.jsxs(et,{direction:"row",alignItems:"center",columnGap:{xs:1,sm:2},sx:{display:{lg:"none"}},children:[r.jsx(lt,{href:Dt.root,children:r.jsx(pt,{color:"inherit","aria-label":"logo",children:r.jsx(go,{sx:{fontSize:56}})})}),r.jsx(pt,{color:"inherit","aria-label":"open drawer",onClick:o,children:r.jsx(z,{icon:"mdi:hamburger-menu",sx:{fontSize:{xs:24,sm:32}}})}),r.jsx(pt,{"aria-label":"search-icon",sx:{display:{md:"none"}},children:r.jsx(z,{icon:"gravity-ui:magnifier",sx:{color:"primary.main",fontSize:{xs:24,sm:32}}})})]}),r.jsx(E,{variant:"h1",color:"primary.darker",sx:{display:{xs:"none",lg:"block"}},children:n}),r.jsxs(et,{direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:{xs:1,sm:2,xl:5.25},width:1,children:[r.jsx(Ce,{sx:{display:{xs:"none",md:"block"},minWidth:300,maxWidth:550}}),r.jsx(Oe,{}),r.jsx(Re,{}),r.jsx($e,{})]})]})})})},Le=()=>r.jsxs(E,{variant:"h6",component:"footer",sx:{pt:3.75,textAlign:{xs:"center",md:"right"}},children:["Made with"," ",r.jsx(at,{component:"span",sx:{color:"error.main",verticalAlign:"middle"},children:"❤"})," ","by"," ",r.jsx(lt,{href:"https://themewagon.com/",target:"_blank",rel:"noopener","aria-label":"Explore ThemeWagon Website",sx:{color:"text.primary","&:hover":{color:"primary.main"}},children:"Mfaso"})]}),mt=345,Ne=({children:t})=>{const[o,e]=u.useState(!1),[n,a]=u.useState(!1),l=()=>{a(!0),e(!1)},s=()=>{a(!1)},c=()=>{n||e(!o)};return r.jsxs(et,{direction:"row",children:[r.jsx(Pe,{drawerWidth:mt,onHandleDrawerToggle:c}),r.jsx(ye,{drawerWidth:mt,mobileOpen:o,onTransitionEnd:s,onHandleDrawerClose:l}),r.jsxs(at,{component:"main",sx:p=>({flexGrow:1,p:{xs:p.spacing(4,2),sm:p.spacing(4,5),lg:p.spacing(4)},minHeight:"100vh",width:{xs:1,sm:`calc(100% - ${mt}px)`},bgcolor:"neutral.lighter"}),children:[r.jsx(bt,{}),t,r.jsx(Le,{})]})]})};export{Ne as default};

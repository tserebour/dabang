import{a as $,g as j,o as y,i as M,s as _,c as h,_ as a,r as x,u as N,b as P,j as U,d as z,e as W}from"./index-B5X692Aa.js";import{T as E,a as H,u as I}from"./Typography-DoTEOEGa.js";function O(o){return j("MuiLink",o)}const q=$("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=o=>g[o]||o,G=({theme:o,ownerState:e})=>{const n=w(e.color),r=y(o,`palette.${n}`,!1)||e.color,s=y(o,`palette.${n}Channel`);return"vars"in o&&s?`rgba(${s} / 0.4)`:M(r,.4)},J=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],K=o=>{const{classes:e,component:n,focusVisible:r,underline:s}=o,t={root:["root",`underline${h(s)}`,n==="button"&&"button",r&&"focusVisible"]};return W(t,O,e)},Q=_(E,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${h(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:G({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${q.focusVisible}`]:{outline:"auto"}})),Y=x.forwardRef(function(e,n){const r=N({props:e,name:"MuiLink"}),{className:s,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:C,underline:k="always",variant:p="inherit",sx:l}=r,V=P(r,J),{isFocusVisibleRef:f,onBlur:F,onFocus:L,ref:R}=H(),[v,m]=x.useState(!1),D=I(n,R),T=i=>{F(i),f.current===!1&&m(!1),u&&u(i)},A=i=>{L(i),f.current===!0&&m(!0),d&&d(i)},b=a({},r,{color:t,component:c,focusVisible:v,underline:k,variant:p}),B=K(b);return U.jsx(Q,a({color:t,className:z(B.root,s),classes:C,component:c,onBlur:T,onFocus:A,ref:D,ownerState:b,variant:p,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},V))});export{Y as L};

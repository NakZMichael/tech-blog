(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{1293:function(e,t,r){"use strict";var n=r(2122),o=r(1253),i=r(6156),a=r(7294),c=r(5505),l=r(4621),s=r(1664),u=a.forwardRef((function(e,t){var r=e.classes,i=e.className,l=e.component,u=void 0===l?"div":l,d=e.disableGutters,p=void 0!==d&&d,f=e.fixed,m=void 0!==f&&f,h=e.maxWidth,y=void 0===h?"lg":h,g=(0,o.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return a.createElement(u,(0,n.Z)({className:(0,c.Z)(r.root,i,m&&r.fixed,p&&r.disableGutters,!1!==y&&r["maxWidth".concat((0,s.Z)(String(y)))]),ref:t},g))}));t.Z=(0,l.Z)((function(e){return{root:(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,r){var n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:n}),t}),{}),maxWidthXs:(0,i.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,i.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,i.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,i.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,i.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},9995:function(e,t,r){"use strict";var n=r(1253),o=r(2122),i=r(7294),a=r(5505),c=r(4621),l=r(9130),s=r(1664),u=i.forwardRef((function(e,t){var r=e.children,c=e.classes,u=e.className,d=e.color,p=void 0===d?"default":d,f=e.component,m=void 0===f?"button":f,h=e.disabled,y=void 0!==h&&h,g=e.disableFocusRipple,v=void 0!==g&&g,b=e.focusVisibleClassName,w=e.size,T=void 0===w?"large":w,S=e.variant,x=void 0===S?"round":S,C=(0,n.Z)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return i.createElement(l.Z,(0,o.Z)({className:(0,a.Z)(c.root,u,"round"!==x&&c.extended,"large"!==T&&c["size".concat((0,s.Z)(T))],y&&c.disabled,{primary:c.primary,secondary:c.secondary,inherit:c.colorInherit}[p]),component:m,disabled:y,focusRipple:!v,focusVisibleClassName:(0,a.Z)(c.focusVisible,b),ref:t},C),i.createElement("span",{className:c.label},r))}));t.Z=(0,c.Z)((function(e){return{root:(0,o.Z)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(u)},8063:function(e,t,r){"use strict";var n=r(1253),o=r(2122),i=r(7294),a=r(5505),c=r(4621),l=i.forwardRef((function(e,t){var r=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,u=e.square,d=void 0!==u&&u,p=e.elevation,f=void 0===p?1:p,m=e.variant,h=void 0===m?"elevation":m,y=(0,n.Z)(e,["classes","className","component","square","elevation","variant"]);return i.createElement(s,(0,o.Z)({className:(0,a.Z)(r.root,c,"outlined"===h?r.outlined:r["elevation".concat(f)],!d&&r.rounded),ref:t},y))}));t.Z=(0,c.Z)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),(0,o.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(l)},453:function(e,t,r){"use strict";var n=r(2122),o=r(1253),i=r(7294),a=r(5505),c=r(4621),l=r(1664),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=i.forwardRef((function(e,t){var r=e.align,c=void 0===r?"inherit":r,u=e.classes,d=e.className,p=e.color,f=void 0===p?"initial":p,m=e.component,h=e.display,y=void 0===h?"initial":h,g=e.gutterBottom,v=void 0!==g&&g,b=e.noWrap,w=void 0!==b&&b,T=e.paragraph,S=void 0!==T&&T,x=e.variant,C=void 0===x?"body1":x,E=e.variantMapping,k=void 0===E?s:E,Z=(0,o.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),A=m||(S?"p":k[C]||s[C])||"span";return i.createElement(A,(0,n.Z)({className:(0,a.Z)(u.root,d,"inherit"!==C&&u[C],"initial"!==f&&u["color".concat((0,l.Z)(f))],w&&u.noWrap,v&&u.gutterBottom,S&&u.paragraph,"inherit"!==c&&u["align".concat((0,l.Z)(c))],"initial"!==y&&u["display".concat((0,l.Z)(y))]),ref:t},Z))}));t.Z=(0,c.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},920:function(e,t,r){"use strict";var n=r(2122),o=r(7627),i=r(4982);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.Z)(e,(0,n.Z)({defaultTheme:i.Z},t))}},9123:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(2122),o=r(7294),i=r(1253),a=r(5505),c=r(4621),l=r(1664),s=o.forwardRef((function(e,t){var r=e.children,c=e.classes,s=e.className,u=e.color,d=void 0===u?"inherit":u,p=e.component,f=void 0===p?"svg":p,m=e.fontSize,h=void 0===m?"default":m,y=e.htmlColor,g=e.titleAccess,v=e.viewBox,b=void 0===v?"0 0 24 24":v,w=(0,i.Z)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.createElement(f,(0,n.Z)({className:(0,a.Z)(c.root,s,"inherit"!==d&&c["color".concat((0,l.Z)(d))],"default"!==h&&c["fontSize".concat((0,l.Z)(h))]),focusable:"false",viewBox:b,color:y,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t},w),r,g?o.createElement("title",null,g):null)}));s.muiName="SvgIcon";var u=(0,c.Z)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s);function d(e,t){var r=function(t,r){return o.createElement(u,(0,n.Z)({ref:r},t),e)};return r.muiName=u.muiName,o.memo(o.forwardRef(r))}},8905:function(e,t,r){"use strict";r.r(t),r.d(t,{capitalize:function(){return n.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return a},deprecatedPropType:function(){return c},isMuiElement:function(){return s},ownerDocument:function(){return u},ownerWindow:function(){return d},requirePropFactory:function(){return p},setRef:function(){return f.Z},unstable_useId:function(){return v},unsupportedProp:function(){return m},useControlled:function(){return h},useEventCallback:function(){return y.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return b.Z}});var n=r(1664);function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return null==t?e:function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];e.apply(this,n),t.apply(this,n)}}),(function(){}))}var i=r(9123);function a(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function n(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];var a=this,c=function(){e.apply(a,o)};clearTimeout(t),t=setTimeout(c,r)}return n.clear=function(){clearTimeout(t)},n}function c(e,t){return function(){return null}}var l=r(7294);function s(e,t){return l.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}function u(e){return e&&e.ownerDocument||document}function d(e){return u(e).defaultView||window}function p(e){return function(){return null}}var f=r(1474);function m(e,t,r,n,o){return null}function h(e){var t=e.controlled,r=e.default,n=(e.name,e.state,l.useRef(void 0!==t).current),o=l.useState(r),i=o[0],a=o[1];return[n?t:i,l.useCallback((function(e){n||a(e)}),[])]}var y=r(7544),g=r(1291);function v(e){var t=l.useState(e),r=t[0],n=t[1],o=e||r;return l.useEffect((function(){null==r&&n("mui-".concat(Math.round(1e5*Math.random())))}),[r]),o}var b=r(4095)},9159:function(e,t,r){"use strict";var n=r(5318),o=r(862);t.Z=void 0;var i=o(r(7294)),a=(0,n(r(8786)).default)(i.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.Z=a},9488:function(e,t,r){"use strict";var n=r(7294),o=r(9123);t.Z=(0,o.Z)(n.createElement("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter")},8786:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(8905)},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],a[s[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),d.canUseDOM?t(l):r&&(l=r(l))}var d=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(d,"canUseDOM",c),d}}},6198:function(e,t,r){"use strict";r.d(t,{I:function(){return q}});var n=r(2122),o=r(2192),i=r(6156);function a(e){return String(parseFloat(e)).length===String(e).length}function c(e){return parseFloat(e)}function l(e){return function(t,r){var n=String(t).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(n===r)return t;var o=c(t);if("px"!==n)if("em"===n)o=c(t)*c(e);else if("rem"===n)return o=c(t)*c(e),t;var i=o;if("px"!==r)if("em"===r)i=o/c(e);else{if("rem"!==r)return t;i=o/c(e)}return parseFloat(i.toFixed(5))+r}}function s(e){var t=e.size,r=e.grid,n=t-t%r,o=n+r;return t-n<o-t?n:o}function u(e){var t=e.lineHeight;return e.pixels/(t*e.htmlFontSize)}function d(e){var t=e.cssProperty,r=e.min,n=e.max,o=e.unit,a=void 0===o?"rem":o,c=e.breakpoints,l=void 0===c?[600,960,1280]:c,s=e.transform,u=void 0===s?null:s,d=(0,i.Z)({},t,"".concat(r).concat(a)),p=(n-r)/l[l.length-1];return l.forEach((function(e){var n=r+p*e;null!==u&&(n=u(n)),d["@media (min-width:".concat(e,"px)")]=(0,i.Z)({},t,"".concat(Math.round(1e4*n)/1e4).concat(a))})),d}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.breakpoints,i=void 0===r?["sm","md","lg"]:r,c=t.disableAlign,p=void 0!==c&&c,f=t.factor,m=void 0===f?2:f,h=t.variants,y=void 0===h?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:h,g=(0,n.Z)({},e);g.typography=(0,n.Z)({},g.typography);var v=g.typography,b=l(v.htmlFontSize),w=i.map((function(e){return g.breakpoints.values[e]}));return y.forEach((function(e){var t=v[e],r=parseFloat(b(t.fontSize,"rem"));if(!(r<=1)){var i=r,c=1+(i-1)/m,l=t.lineHeight;if(!a(l)&&!p)throw new Error((0,o.Z)(6));a(l)||(l=parseFloat(b(l,"rem"))/parseFloat(r));var f=null;p||(f=function(e){return s({size:e,grid:u({pixels:4,lineHeight:l,htmlFontSize:v.htmlFontSize})})}),v[e]=(0,n.Z)({},t,d({cssProperty:"fontSize",min:c,max:i,unit:"rem",breakpoints:w,transform:f}))}})),g}var f=r(4677),m=r(920),h=r(686),y=r(534),g=r(7761),v=r(7294),b=r(1253),w=r(5505),T=r(4621),S=v.forwardRef((function(e,t){var r=e.classes,o=e.className,i=e.component,a=void 0===i?"div":i,c=e.disableGutters,l=void 0!==c&&c,s=e.variant,u=void 0===s?"regular":s,d=(0,b.Z)(e,["classes","className","component","disableGutters","variant"]);return v.createElement(a,(0,n.Z)({className:(0,w.Z)(r.root,r[u],o,!l&&r.gutters),ref:t},d))})),x=(0,T.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,i.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(S),C=r(453),E=r(9995),k=r(9488),Z=(0,m.Z)((function(e){return{root:{backgroundColor:"#222",color:"#fff",width:"100%",margin:0,padding:0,paddingTop:20,paddingBottom:20,position:"absolute",bottom:0}}})),A=function(){var e=Z();return v.createElement(x,{className:e.root},v.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginRight:"auto",marginLeft:"auto"}},v.createElement(C.Z,{variant:"h6",component:"h2"},"Twitterはこちら"),v.createElement("a",{href:"https://twitter.com/tottemoganbaru"},v.createElement(E.Z,{size:"medium"},v.createElement(k.Z,{style:{color:"#222"}})))))},O=r(1664),N=r(8063),R=v.forwardRef((function(e,t){var r=e.classes,o=e.className,i=e.color,a=void 0===i?"primary":i,c=e.position,l=void 0===c?"fixed":c,s=(0,b.Z)(e,["classes","className","color","position"]);return v.createElement(N.Z,(0,n.Z)({square:!0,component:"header",elevation:4,className:(0,w.Z)(r.root,r["position".concat((0,O.Z)(l))],r["color".concat((0,O.Z)(a))],o,"fixed"===l&&"mui-fixed"),ref:t},s))})),j=(0,T.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(R),I=r(3332),P=r(7595),M=r(9130),z=v.forwardRef((function(e,t){var r=e.edge,o=void 0!==r&&r,i=e.children,a=e.classes,c=e.className,l=e.color,s=void 0===l?"default":l,u=e.disabled,d=void 0!==u&&u,p=e.disableFocusRipple,f=void 0!==p&&p,m=e.size,h=void 0===m?"medium":m,y=(0,b.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return v.createElement(M.Z,(0,n.Z)({className:(0,w.Z)(a.root,c,"default"!==s&&a["color".concat((0,O.Z)(s))],d&&a.disabled,"small"===h&&a["size".concat((0,O.Z)(h))],{start:a.edgeStart,end:a.edgeEnd}[o]),centerRipple:!0,focusRipple:!f,disabled:d,ref:t},y),v.createElement("span",{className:a.label},i))})),L=(0,T.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,P.U1)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,P.U1)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,P.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(z),F=r(9159),B=r(5444),H=(0,m.Z)((function(e){var t;return{root:{width:"100%"},offset:e.mixins.toolbar,toolbar:{display:"flex",margin:0,padding:0},headerNavigation:{flex:"1",display:"flex",justifyContent:"flex-end"},iconButton:{marginRight:e.spacing(2)},blogTitle:(t={},t[e.breakpoints.down("sm")]={fontSize:1},t)}})),W=function(){var e=H();return v.createElement(v.Fragment,null,v.createElement(j,{className:e.root},v.createElement(x,{className:e.toolbar},v.createElement(B.Link,{to:"/",style:{textDecoration:"none"}},v.createElement(I.Z,null,v.createElement(C.Z,{color:"secondary",variant:"h4",component:"h1"},"nakazato",v.createElement("span",{style:{fontWeight:"bold"}},"overflow")))),v.createElement("div",{className:e.headerNavigation},v.createElement(B.Link,{to:"/"},v.createElement(L,{component:"span",className:e.iconButton},v.createElement(F.Z,{color:"secondary",fontSize:"large"})))))),v.createElement("div",{className:e.offset}))},_=(0,f.Z)({palette:{primary:{main:h.Z[700]},secondary:{main:y.Z[500]}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"',"Hiragino Kaku Gothic ProN","Hiragino Sans","Meiryo","sans-serif"].join(",")}});_=p(_);var D=(0,f.Z)({palette:{primary:{main:h.Z[700]},secondary:{main:"#fff"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"',"Hiragino Kaku Gothic ProN","Hiragino Sans","Meiryo","sans-serif"].join(",")}});D=p(D);var U=(0,m.Z)({root:{minHeight:"calc( 100vh - 200px )",position:"relative",paddingBottom:"200px",width:"100%"}}),q=function(e){var t=e.children,r=U();return v.createElement("div",{className:r.root},v.createElement(g.Z,{theme:_},v.createElement(g.Z,{theme:D},v.createElement(W,null)),t,v.createElement(A,null)))}},3751:function(e,t,r){"use strict";r.d(t,{Z:function(){return ve}});var n,o,i,a,c=r(7294),l=r(5697),s=r.n(l),u=r(4839),d=r.n(u),p=r(2993),f=r.n(p),m=r(6494),h=r.n(m),y="bodyAttributes",g="htmlAttributes",v="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",S="href",x="http-equiv",C="innerHTML",E="itemprop",k="name",Z="property",A="rel",O="src",N="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",I="defer",P="encodeSpecialCharacters",M="onChangeClientState",z="titleTemplate",L=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),F=[b.NOSCRIPT,b.SCRIPT,b.STYLE],B="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=J(e,b.TITLE),r=J(e,z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,j);return t||n||void 0},$=function(e){return J(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||r===A&&"canonical"===e[r].toLowerCase()||l===A&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==C&&c!==T&&c!==E||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=h()({},n[c],o[c]);n[c]=l}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:r.g.requestAnimationFrame||Q,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;le(b.BODY,n),le(b.HTML,o),ce(d,p);var f={baseTag:se(b.BASE,r),linkTags:se(b.LINK,i),metaTags:se(b.META,a),noscriptTags:se(b.NOSCRIPT,c),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,u)},m={},h={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=f[e].oldTags)})),t&&t(),l(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(b.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(B),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);o.length===i.length?r.removeAttribute(B):r.getAttribute(B)!==a.join(",")&&r.setAttribute(B,a.join(","))}},se=function(e,t){var r=document.head||document.querySelector(b.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(B,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[B]=!0,o=de(r,n),[c.createElement(b.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ue(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+V(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case g:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[B]=!0,n);return Object.keys(t).forEach((function(e){var r=R[e]||e;if(r===C||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+V(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:pe(b.BASE,t,n),bodyAttributes:pe(y,r,n),htmlAttributes:pe(g,o,n),link:pe(b.LINK,i,n),meta:pe(b.META,a,n),noscript:pe(b.NOSCRIPT,c,n),script:pe(b.SCRIPT,l,n),style:pe(b.STYLE,s,n),title:pe(b.TITLE,{title:d,titleAttributes:p},n)}},me=d()((function(e){return{baseTag:K([S,N],e),bodyAttributes:G(y,e),defer:J(e,I),encode:J(e,P),htmlAttributes:G(g,e),linkTags:X(b.LINK,[A,S],e),metaTags:X(b.META,[k,w,x,Z,E],e),noscriptTags:X(b.NOSCRIPT,[C],e),onChangeClientState:$(e),scriptTags:X(b.SCRIPT,[O,C],e),styleTags:X(b.STYLE,[T],e),title:Y(e),titleAttributes:G(v,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),fe)((function(){return null})),he=(o=me,a=i=function(e){function t(){return W(this,t),q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return D({},n,((t={})[r.type]=[].concat(n[r.type]||[],[D({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case b.TITLE:return D({},o,((t={})[n.type]=a,t.titleAttributes=D({},i),t));case b.BODY:return D({},o,{bodyAttributes:D({},i)});case b.HTML:return D({},o,{htmlAttributes:D({},i)})}return D({},o,((r={})[n.type]=D({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=D({},t);return Object.keys(e).forEach((function(t){var n;r=D({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)}(U(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=D({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},_(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ye=r(5444);function ge(e){var t=e.description,r=e.lang,n=e.meta,o=e.title,i=(0,ye.useStaticQuery)("63159454").site,a=t||i.siteMetadata.description;return c.createElement(he,{htmlAttributes:{lang:r},title:o||siteTitle,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:o},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:a}].concat(n)})}ge.defaultProps={lang:"en",meta:[],description:""};var ve=ge}}]);
//# sourceMappingURL=commons-62b58b9f4a1434385378.js.map
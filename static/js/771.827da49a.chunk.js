(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[771],{3771:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return z}});var r=t(9434),o=function(n){return n.contacts.contacts.entities},i=function(n){return n.contacts.contacts.isLoading},a=function(n){return n.contacts.contacts.error},u=function(n){return n.contacts.filter},c=t(1975),l="ContactForm_labelName__3dKMP",s="ContactForm_spanName__OibhL",f="ContactForm_imputName__XQvsX",d="ContactForm_labelNumber__ifMHw",m="ContactForm_spanNumber__-FZxR",v="ContactForm_buttonSubmit__8QQ3D",p=t(184);function h(){var n=(0,r.I0)(),e=(0,r.v9)(o).map((function(n){return n.name}));return(0,p.jsx)("form",{onSubmit:function(t){t.preventDefault();var r=t.target,o=r.name,i=r.number;e.includes(o.value)?alert("".concat(o.value," is already in your contact")):(console.log({name:o.value,number:i.value}),n((0,c.uK)({name:o.value,number:i.value})),t.target.reset())},children:(0,p.jsxs)("label",{className:l,children:[(0,p.jsx)("span",{className:s,children:"Name"}),(0,p.jsx)("input",{className:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,p.jsxs)("label",{className:d,children:[(0,p.jsx)("span",{className:m,children:"Number"}),(0,p.jsx)("input",{className:f,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,p.jsx)("button",{type:"submit",className:v,children:"Add contact"})]})})}var Z="ContactList_list__csErn",x="ContactList_item__EZYHO",b=t(2791),_=t(6151),g=t(7247),S=function(){var n=(0,r.v9)(o),e=(0,r.v9)(i),t=(0,r.v9)(u),l=(0,r.v9)(a),s=n.filter((function(n){return n.name.toLowerCase().includes(t)})),f=(0,r.I0)();return(0,b.useEffect)((function(){f((0,c.yF)())}),[f]),(0,p.jsxs)(p.Fragment,{children:[e&&(0,p.jsx)("p",{children:"Loading contacts..."}),l&&(0,p.jsx)("p",{children:l}),n.length>0&&(0,p.jsx)("ul",{className:Z,children:s.map((function(n){return(0,p.jsxs)("li",{className:x,children:[(0,p.jsxs)("span",{children:[n.name," : ",n.number]}),(0,p.jsx)(_.Z,{variant:"outlined",startIcon:(0,p.jsx)(g.Z,{}),onClick:function(){return f((0,c.GK)(n.id))},disabled:e,children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},n.id)}))})]})},y=t(5679),w="Filter_imputName__aft7c",N="Filter_label__vEd1E",j=function(){var n=(0,r.I0)();return(0,p.jsxs)("label",{className:N,children:["Find contacts by name",(0,p.jsx)("input",{className:w,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){n((0,y.qM)(e.currentTarget.value))}})]})};function z(){return(0,p.jsxs)("div",{children:[(0,p.jsx)(h,{}),(0,p.jsx)(j,{}),(0,p.jsx)(S,{})]})}},7247:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=a},5649:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},9201:function(n,e,t){"use strict";t.d(e,{Z:function(){return b}});var r=t(7462),o=t(2791),i=t(3366),a=t(8182),u=t(4419),c=t(4036),l=t(1402),s=t(6934),f=t(5878),d=t(1217);function m(n){return(0,d.Z)("MuiSvgIcon",n)}(0,f.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=t(184),p=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,"inherit"!==t.color&&e["color".concat((0,c.Z)(t.color))],e["fontSize".concat((0,c.Z)(t.fontSize))]]}})((function(n){var e,t,r,o,i,a,u,c,l,s,f,d,m,v,p,h,Z,x=n.theme,b=n.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(e=x.transitions)||null==(t=e.create)?void 0:t.call(e,"fill",{duration:null==(r=x.transitions)||null==(o=r.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=x.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(u=x.typography)||null==(c=u.pxToRem)?void 0:c.call(u,24))||"1.5rem",large:(null==(l=x.typography)||null==(s=l.pxToRem)?void 0:s.call(l,35))||"2.1875rem"}[b.fontSize],color:null!=(f=null==(d=(x.vars||x).palette)||null==(m=d[b.color])?void 0:m.main)?f:{action:null==(v=(x.vars||x).palette)||null==(p=v.action)?void 0:p.active,disabled:null==(h=(x.vars||x).palette)||null==(Z=h.action)?void 0:Z.disabled,inherit:void 0}[b.color]}})),Z=o.forwardRef((function(n,e){var t=(0,l.Z)({props:n,name:"MuiSvgIcon"}),o=t.children,s=t.className,f=t.color,d=void 0===f?"inherit":f,Z=t.component,x=void 0===Z?"svg":Z,b=t.fontSize,_=void 0===b?"medium":b,g=t.htmlColor,S=t.inheritViewBox,y=void 0!==S&&S,w=t.titleAccess,N=t.viewBox,j=void 0===N?"0 0 24 24":N,z=(0,i.Z)(t,p),C=(0,r.Z)({},t,{color:d,component:x,fontSize:_,instanceFontSize:n.fontSize,inheritViewBox:y,viewBox:j}),F={};y||(F.viewBox=j);var A=function(n){var e=n.color,t=n.fontSize,r=n.classes,o={root:["root","inherit"!==e&&"color".concat((0,c.Z)(e)),"fontSize".concat((0,c.Z)(t))]};return(0,u.Z)(o,m,r)}(C);return(0,v.jsxs)(h,(0,r.Z)({as:x,className:(0,a.Z)(A.root,s),focusable:"false",color:g,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:e},F,z,{ownerState:C,children:[o,w?(0,v.jsx)("title",{children:w}):null]}))}));Z.muiName="SvgIcon";var x=Z;function b(n,e){function t(t,o){return(0,v.jsx)(x,(0,r.Z)({"data-testid":"".concat(e,"Icon"),ref:o},t,{children:n}))}return t.muiName=x.muiName,o.memo(o.forwardRef(t))}},3199:function(n,e,t){"use strict";var r=t(3981);e.Z=r.Z},4454:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return l.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return d},setRef:function(){return m},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return p},unsupportedProp:function(){return h},useControlled:function(){return Z.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return _.Z}});var r=t(5902),o=t(4036),i=t(8949).Z,a=t(9201),u=t(3199);var c=function(n,e){return function(){return null}},l=t(9103),s=t(8301),f=t(7602);t(7462);var d=function(n,e){return function(){return null}},m=t(2971).Z,v=t(162),p=t(6248).Z;var h=function(n,e,t,r,o){return null},Z=t(8744),x=t(9683),b=t(2071),_=t(3031),g={configure:function(n){r.Z.configure(n)}}},9103:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(2791);var o=function(n,e){return r.isValidElement(n)&&-1!==e.indexOf(n.type.muiName)}},8301:function(n,e,t){"use strict";var r=t(9723);e.Z=r.Z},7602:function(n,e,t){"use strict";var r=t(7979);e.Z=r.Z},8744:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(9439),o=t(2791);var i=function(n){var e=n.controlled,t=n.default,i=(n.name,n.state,o.useRef(void 0!==e).current),a=o.useState(t),u=(0,r.Z)(a,2),c=u[0],l=u[1];return[i?e:c,o.useCallback((function(n){i||l(n)}),[])]}},162:function(n,e,t){"use strict";var r=t(5721);e.Z=r.Z},8949:function(n,e,t){"use strict";function r(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.reduce((function(n,e){return null==e?n:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];n.apply(this,r),e.apply(this,r)}}),(function(){}))}t.d(e,{Z:function(){return r}})},3981:function(n,e,t){"use strict";function r(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var u=function(){n.apply(r,i)};clearTimeout(e),e=setTimeout(u,t)}return r.clear=function(){clearTimeout(e)},r}t.d(e,{Z:function(){return r}})},9723:function(n,e,t){"use strict";function r(n){return n&&n.ownerDocument||document}t.d(e,{Z:function(){return r}})},7979:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(9723);function o(n){return(0,r.Z)(n).defaultView||window}},6248:function(n,e,t){"use strict";var r;t.d(e,{Z:function(){return c}});var o=t(9439),i=t(2791),a=0;var u=(r||(r=t.t(i,2))).useId;function c(n){if(void 0!==u){var e=u();return null!=n?n:e}return function(n){var e=i.useState(n),t=(0,o.Z)(e,2),r=t[0],u=t[1],c=n||r;return i.useEffect((function(){null==r&&u("mui-".concat(a+=1))}),[r]),c}(n)}},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=771.827da49a.chunk.js.map
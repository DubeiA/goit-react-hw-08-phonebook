"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[771],{3771:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var n=a(9434),r=function(e){return e.contacts.contacts.entities},s=function(e){return e.contacts.contacts.isLoading},c=function(e){return e.contacts.contacts.error},i=function(e){return e.contacts.filter},l=a(1975),o="ContactForm_labelName__3dKMP",u="ContactForm_spanName__OibhL",m="ContactForm_imputName__XQvsX",d="ContactForm_labelNumber__ifMHw",_="ContactForm_spanNumber__-FZxR",p="ContactForm_buttonSubmit__8QQ3D",h=a(184);function b(){var e=(0,n.I0)(),t=(0,n.v9)(r).map((function(e){return e.name}));return(0,h.jsx)("form",{onSubmit:function(a){a.preventDefault();var n=a.target,r=n.name,s=n.number;t.includes(r.value)?alert("".concat(r.value," is already in your contact")):(console.log({name:r.value,number:s.value}),e((0,l.uK)({name:r.value,number:s.value})),a.target.reset())},children:(0,h.jsxs)("label",{className:o,children:[(0,h.jsx)("span",{className:u,children:"Name"}),(0,h.jsx)("input",{className:m,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,h.jsxs)("label",{className:d,children:[(0,h.jsx)("span",{className:_,children:"Number"}),(0,h.jsx)("input",{className:m,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{type:"submit",className:p,children:"Add contact"})]})})}var f="ContactList_list__csErn",x="ContactList_item__EZYHO",v="ContactList_item__button__8BPA5",N=a(2791),j=function(){var e=(0,n.v9)(r),t=(0,n.v9)(s),a=(0,n.v9)(i),o=(0,n.v9)(c),u=e.filter((function(e){return e.name.toLowerCase().includes(a)})),m=(0,n.I0)();return(0,N.useEffect)((function(){m((0,l.yF)())}),[m]),(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsx)("p",{children:"Loading contacts..."}),o&&(0,h.jsx)("p",{children:o}),e.length>0&&(0,h.jsx)("ul",{className:f,children:u.map((function(e){return(0,h.jsxs)("li",{className:x,children:[e.name," : ",e.number,(0,h.jsx)("button",{className:v,onClick:function(){return m((0,l.GK)(e.id))},disabled:t,children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},e.id)}))})]})},C=a(5679),F="Filter_imputName__aft7c",g="Filter_label__vEd1E",y=function(){var e=(0,n.I0)();return(0,h.jsxs)("label",{className:g,children:["Find contacts by name",(0,h.jsx)("input",{className:F,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){e((0,C.qM)(t.currentTarget.value))}})]})};function A(){return(0,h.jsxs)("div",{children:[(0,h.jsx)(b,{}),(0,h.jsx)(y,{}),(0,h.jsx)(j,{})]})}}}]);
//# sourceMappingURL=771.b2d4122d.chunk.js.map
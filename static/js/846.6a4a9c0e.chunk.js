"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[846],{7846:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,a,i,o,s,c,u,d,p,l,x=t(2791),f=t(9434),h=t(1650),m=function(n){return n.contacts.isLoading},b=function(n){var e=n.contacts,t=n.filter;if(!t)return e.items;var r=t.toLowerCase().trim();return e.items.filter((function(n){return n.name.toLowerCase().includes(r)}))},g=t(9439),Z=t(168),j=t(6444),v=j.ZP.form(r||(r=(0,Z.Z)(["\n  width: 468px;\n  border: 1px solid black;\n  padding: 15px;\n"]))),w=j.ZP.label(a||(a=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 18px;\n  font-weight: 500;\n"]))),y=j.ZP.input(i||(i=(0,Z.Z)(["\n  width: 320px;\n  padding: 4px 12px;\n  height: 20px;\n  border-radius: 5px;\n  font-size: 16px;\n"]))),k=j.ZP.button(o||(o=(0,Z.Z)(["\n  padding: 4px 12px;\n  margin-top: 10px;\n  cursor: pointer;\n  border-radius: 5px;\n  font-size: 16px;\n  font-weight: 500;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: green;\n  }\n"]))),P=t(184),z=function(){var n=(0,x.useState)(""),e=(0,g.Z)(n,2),t=e[0],r=e[1],a=(0,x.useState)(""),i=(0,g.Z)(a,2),o=i[0],s=i[1],c=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":s(a)}},u=(0,f.I0)();(0,x.useEffect)((function(){u((0,h.yF)())}),[u]);var d=function(){r(""),s("")};return(0,P.jsxs)(v,{onSubmit:function(n){n.preventDefault(),u((0,h.uK)({name:t,number:o})),d()},children:[(0,P.jsxs)(w,{children:["Name",(0,P.jsx)(y,{type:"text",name:"name",value:t,onChange:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,P.jsxs)(w,{children:["Number",(0,P.jsx)(y,{type:"tel",name:"number",value:o,onChange:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,P.jsx)(k,{type:"submit",children:"Add contact"})]})},C=j.ZP.li(s||(s=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),F=j.ZP.p(c||(c=(0,Z.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),A=j.ZP.button(u||(u=(0,Z.Z)(["\n  padding: 2px 8px;\n  font-size: 16px;\n  border: 1px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: red;\n    color: white;\n  }\n"]))),I=function(n){var e=n.contact,t=e.id,r=e.name,a=e.number,i=(0,f.I0)();return(0,P.jsxs)(C,{children:[(0,P.jsxs)(F,{children:[r,": ",a]}),(0,P.jsx)(A,{onClick:function(){return i((0,h.GK)(t))},type:"button",children:"Delete"})]})},_=j.ZP.ul(d||(d=(0,Z.Z)(["\n  width: 320px;\n  padding: 15px;\n"]))),L=function(){var n=(0,f.v9)(b);return(0,P.jsx)(_,{children:n.map((function(n){return(0,P.jsx)(I,{contact:n},n.id)}))})},N=function(n){return n.filter},S=t(5653),q=t(5984),D=j.ZP.label(p||(p=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 18px;\n  font-weight: 500;\n"]))),E=j.ZP.input(l||(l=(0,Z.Z)(["\n  width: 320px;\n  padding: 4px 12px;\n  height: 20px;\n  border-radius: 5px;\n  font-size: 16px;\n"]))),K=function(){var n=(0,f.v9)(N),e=(0,f.I0)(),t=(0,q.x0)();return(0,P.jsxs)(D,{htmlFor:t,children:["Find contacts by name",(0,P.jsx)(E,{id:t,type:"text",value:n,onChange:function(n){var t=n.target;e((0,S.T)(t.value))}})]})},B=t(8402),G=function(){return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(B.Y8,{})})},J=function(){var n=(0,f.v9)(m),e=(0,f.I0)();return(0,x.useEffect)((function(){e((0,h.yF)())}),[e]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h1",{children:"Phonebook"}),(0,P.jsx)(z,{}),(0,P.jsx)("h2",{children:"Contacts"}),(0,P.jsx)(K,{}),n&&(0,P.jsx)(G,{}),(0,P.jsx)(L,{})]})}}}]);
//# sourceMappingURL=846.6a4a9c0e.chunk.js.map
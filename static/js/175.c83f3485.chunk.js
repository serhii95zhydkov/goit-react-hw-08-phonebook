"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[175],{2940:function(e,n,r){r.d(n,{Z:function(){return l}});var t,a=r(168),i=r(6444).ZP.button(t||(t=(0,a.Z)(["\n  background-color: #fff;\n  border: 1px solid;\n  border-radius: 5px;\n  padding: 10px 15px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #000;\n    color: #fff;\n  }\n"]))),o=r(184),l=function(e){var n=e.children,r=e.type,t=void 0===r?"submit":r;return(0,o.jsx)(i,{type:t,children:n})}},2091:function(e,n,r){r.d(n,{Z:function(){return h}});var t=r(1413);function a(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i,o,l=r(2791),u=r(5984),s=r(168),d=r(6444),c=d.ZP.div(i||(i=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n"]))),p=d.ZP.input(o||(o=(0,s.Z)(["\n  padding: 10px;\n  border: 1px solid;\n  border-radius: 5px;\n"]))),m=r(184),f=["label","handleChange"],h=function(e){var n=e.label,r=e.handleChange,i=a(e,f),o=(0,l.useMemo)((function(){return(0,u.x0)()}),[]);return(0,m.jsxs)(c,{children:[(0,m.jsx)("label",{htmlFor:o,children:n}),(0,m.jsx)(p,(0,t.Z)({id:o,onChange:r},i))]})}},3943:function(e,n,r){var t=r(4942),a=r(1413),i=r(9439),o=r(2791);n.Z=function(e){var n=e.initialState,r=e.onSubmit,l=(0,o.useState)((0,a.Z)({},n)),u=(0,i.Z)(l,2),s=u[0],d=u[1],c=(0,o.useCallback)((function(e){var n=e.target,r=n.name,i=n.value;d((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,t.Z)({},r,i))}))}),[d]);return{state:s,setState:d,handleChange:c,handleSubmit:function(e){e.preventDefault(),r((0,a.Z)({},s)),d((0,a.Z)({},n))}}}},3175:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var t,a=r(9434),i=r(7689),o=r(8724),l=r(9869),u=r(1413),s=r(3943),d={name:"",email:"",password:""},c=r(2091),p={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},m=r(2940),f=r(168),h=r(6444).ZP.form(t||(t=(0,f.Z)(["\n  width: 400px;\n  padding: 20px;\n"]))),b=r(184),g=function(e){var n=e.onSubmit,r=(0,s.Z)({initialState:d,onSubmit:n}),t=r.state,a=r.handleChange,i=r.handleSubmit,o=t.name,l=t.email,f=t.password;return(0,b.jsxs)(h,{onSubmit:i,children:[(0,b.jsx)(c.Z,(0,u.Z)({value:o,handleChange:a},p.name)),(0,b.jsx)(c.Z,(0,u.Z)({value:l,handleChange:a},p.email)),(0,b.jsx)(c.Z,(0,u.Z)({value:f,handleChange:a},p.password)),(0,b.jsx)(m.Z,{children:"Register"})]})},x=function(){var e=(0,a.v9)(l.y),n=(0,a.I0)();return e?(0,b.jsx)(i.Fg,{to:"/contacts"}):(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{children:"Register page"}),(0,b.jsx)(g,{onSubmit:function(e){n((0,o.I)(e))}})]})}},5984:function(e,n,r){r.d(n,{x0:function(){return t}});var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=175.c83f3485.chunk.js.map
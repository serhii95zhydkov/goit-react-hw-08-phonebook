"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[175],{2940:function(e,n,r){r.d(n,{Z:function(){return l}});var t,a=r(168),i=r(6444).ZP.button(t||(t=(0,a.Z)(["\n  background-color: #fff;\n  border: 1px solid;\n  border-radius: 5px;\n  padding: 10px 15px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #000;\n    color: #fff;\n  }\n"]))),o=r(3329),l=function(e){var n=e.children,r=e.type,t=void 0===r?"submit":r;return(0,o.jsx)(i,{type:t,children:n})}},2091:function(e,n,r){r.d(n,{Z:function(){return h}});var t=r(1413);function a(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i,o,l=r(2791),u=r(5984),d=r(168),s=r(6444),c=s.ZP.div(i||(i=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n"]))),p=s.ZP.input(o||(o=(0,d.Z)(["\n  padding: 10px;\n  border: 1px solid;\n  border-radius: 5px;\n"]))),m=r(3329),f=["label","handleChange"],h=function(e){var n=e.label,r=e.handleChange,i=a(e,f),o=(0,l.useMemo)((function(){return(0,u.x0)()}),[]);return(0,m.jsxs)(c,{children:[(0,m.jsx)("label",{htmlFor:o,children:n}),(0,m.jsx)(p,(0,t.Z)({id:o,onChange:r},i))]})}},3943:function(e,n,r){var t=r(4942),a=r(1413),i=r(9439),o=r(2791);n.Z=function(e){var n=e.initialState,r=e.onSubmit,l=(0,o.useState)((0,a.Z)({},n)),u=(0,i.Z)(l,2),d=u[0],s=u[1],c=(0,o.useCallback)((function(e){var n=e.target,r=n.name,i=n.value;s((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,t.Z)({},r,i))}))}),[s]);return{state:d,setState:s,handleChange:c,handleSubmit:function(e){e.preventDefault(),r((0,a.Z)({},d)),s((0,a.Z)({},n))}}}},3175:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var t,a=r(9434),i=r(8724),o=r(1413),l=r(3943),u={name:"",email:"",password:""},d=r(2091),s={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},c=r(2940),p=r(168),m=r(6444).ZP.form(t||(t=(0,p.Z)(["\n  width: 400px;\n  padding: 20px;\n"]))),f=r(3329),h=function(e){var n=e.onSubmit,r=(0,l.Z)({initialState:u,onSubmit:n}),t=r.state,a=r.handleChange,i=r.handleSubmit,p=t.name,h=t.email,b=t.password;return(0,f.jsxs)(m,{onSubmit:i,children:[(0,f.jsx)(d.Z,(0,o.Z)({value:p,handleChange:a},s.name)),(0,f.jsx)(d.Z,(0,o.Z)({value:h,handleChange:a},s.email)),(0,f.jsx)(d.Z,(0,o.Z)({value:b,handleChange:a},s.password)),(0,f.jsx)(c.Z,{children:"Register"})]})},b=function(){var e=(0,a.I0)();return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Register page"}),(0,f.jsx)(h,{onSubmit:function(n){e((0,i.IU)(n))}})]})}},5984:function(e,n,r){r.d(n,{x0:function(){return t}});var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=175.b8147554.chunk.js.map
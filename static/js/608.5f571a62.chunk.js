"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[608],{3900:function(n,e,t){t.d(e,{Z:function(){return g}});var r=t(1413),a=t(3366);var i,l,o,u=t(2791),s=t(5984),d=t(168),p=t(7691),c=p.ZP.div(i||(i=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n"]))),m=p.ZP.label(l||(l=(0,d.Z)(["\n  font-weight: 700;\n"]))),f=p.ZP.input(o||(o=(0,d.Z)(["\n  padding: 10px;\n  border: 1px solid;\n  border-radius: 4px;\n"]))),h=t(3329),x=["label","handleChange"],g=function(n){var e=n.label,t=n.handleChange,i=function(n,e){if(null==n)return{};var t,r,i=(0,a.Z)(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}(n,x),l=(0,u.useMemo)((function(){return(0,s.x0)()}),[]);return(0,h.jsxs)(c,{children:[(0,h.jsx)(m,{htmlFor:l,children:e}),(0,h.jsx)(f,(0,r.Z)({id:l,onChange:t},i))]})}},3943:function(n,e,t){var r=t(4942),a=t(1413),i=t(9439),l=t(2791);e.Z=function(n){var e=n.initialState,t=n.onSubmit,o=(0,l.useState)((0,a.Z)({},e)),u=(0,i.Z)(o,2),s=u[0],d=u[1],p=(0,l.useCallback)((function(n){var e=n.target,t=e.name,i=e.value;d((function(n){return(0,a.Z)((0,a.Z)({},n),{},(0,r.Z)({},t,i))}))}),[d]);return{state:s,setState:d,handleChange:p,handleSubmit:function(n){n.preventDefault(),t((0,a.Z)({},s)),d((0,a.Z)({},e))}}}},1608:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,i,l=t(9434),o=t(8724),u=t(1413),s=t(3900),d=t(3943),p={email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"Enter your email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"Enter your password"}},c={email:"",password:""},m=t(168),f=t(7691),h=f.ZP.form(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 20px;\n"]))),x=t(6915),g=t(3329),Z=function(n){var e=n.onSubmit,t=(0,d.Z)({initialState:c,onSubmit:e}),r=t.state,a=t.handleChange,i=t.handleSubmit,l=r.email,o=r.password;return(0,g.jsxs)(h,{onSubmit:i,children:[(0,g.jsx)(s.Z,(0,u.Z)({value:l,handleChange:a},p.email)),(0,g.jsx)(s.Z,(0,u.Z)({value:o,handleChange:a},p.password)),(0,g.jsx)(x.Z,{type:"submit",variant:"contained",size:"small",children:"Login"})]})},b=f.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 70px;\n"]))),v=f.ZP.h1(i||(i=(0,m.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  color: #131313;\n  letter-spacing: 0.15em;\n  text-shadow: 2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15);\n"]))),w=function(){var n=(0,l.I0)();return(0,g.jsxs)(b,{children:[(0,g.jsx)(v,{children:"LOGIN"}),(0,g.jsx)(Z,{onSubmit:function(e){n((0,o.x4)(e))}})]})}},5984:function(n,e,t){t.d(e,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=608.5f571a62.chunk.js.map
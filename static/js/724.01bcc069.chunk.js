"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[724],{2940:function(n,e,r){r.d(e,{Z:function(){return u}});var t,a=r(168),o=r(6444).ZP.button(t||(t=(0,a.Z)(["\n  background-color: #fff;\n  border: 1px solid;\n  border-radius: 5px;\n  padding: 10px 15px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #000;\n    color: #fff;\n  }\n"]))),i=r(184),u=function(n){var e=n.children,r=n.type,t=void 0===r?"submit":r;return(0,i.jsx)(o,{type:t,children:e})}},2091:function(n,e,r){r.d(e,{Z:function(){return m}});var t=r(1413);function a(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var o,i,u=r(2791),l=r(5984),s=r(168),d=r(6444),c=d.ZP.div(o||(o=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n"]))),p=d.ZP.input(i||(i=(0,s.Z)(["\n  padding: 10px;\n  border: 1px solid;\n  border-radius: 5px;\n"]))),f=r(184),h=["label","handleChange"],m=function(n){var e=n.label,r=n.handleChange,o=a(n,h),i=(0,u.useMemo)((function(){return(0,l.x0)()}),[]);return(0,f.jsxs)(c,{children:[(0,f.jsx)("label",{htmlFor:i,children:e}),(0,f.jsx)(p,(0,t.Z)({id:i,onChange:r},o))]})}},3943:function(n,e,r){var t=r(4942),a=r(1413),o=r(9439),i=r(2791);e.Z=function(n){var e=n.initialState,r=n.onSubmit,u=(0,i.useState)((0,a.Z)({},e)),l=(0,o.Z)(u,2),s=l[0],d=l[1],c=(0,i.useCallback)((function(n){var e=n.target,r=e.name,o=e.value;d((function(n){return(0,a.Z)((0,a.Z)({},n),{},(0,t.Z)({},r,o))}))}),[d]);return{state:s,setState:d,handleChange:c,handleSubmit:function(n){n.preventDefault(),r((0,a.Z)({},s)),d((0,a.Z)({},e))}}}},4724:function(n,e,r){r.r(e),r.d(e,{default:function(){return m}});var t=r(9434),a=r(7689),o=r(3856),i=r(9869),u=r(1413),l=r(2091),s=r(2940),d=r(3943),c={email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},p={email:"",password:""},f=r(184),h=function(n){var e=n.onSubmit,r=(0,d.Z)({initialState:p,onSubmit:e}),t=r.state,a=r.handleChange,o=r.handleSubmit,i=t.email,h=t.password;return(0,f.jsxs)("form",{onSubmit:o,children:[(0,f.jsx)(l.Z,(0,u.Z)({value:i,handleChange:a},c.email)),(0,f.jsx)(l.Z,(0,u.Z)({value:h,handleChange:a},c.password)),(0,f.jsx)(s.Z,{children:"Login"})]})},m=function(){var n=(0,t.v9)(i.y),e=(0,t.I0)();return n?(0,f.jsx)(a.Fg,{to:"/contacts"}):(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Login page"}),(0,f.jsx)(h,{onSubmit:function(n){e((0,o.x)(n))}})]})}},5984:function(n,e,r){r.d(e,{x0:function(){return t}});var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=724.01bcc069.chunk.js.map
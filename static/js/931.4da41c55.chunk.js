"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[931],{931:function(e,i,r){r.r(i),r.d(i,{default:function(){return m}});var l=r(9434),n=r(7863),a=r(1107),s=r(4087),t=r(2392),d=r(8208),o=r(9140),u=r(4224),c=r(184),v=function(){var e=(0,l.v9)(n.zh),i=(0,l.I0)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.xu,{display:"flex",justifyContent:"center",children:(0,c.jsxs)(t.NI,{as:"form",width:"400px",onSubmit:function(e){e.preventDefault();var r=e.currentTarget;i((0,a.Ib)({email:r.elements.email.value,password:r.elements.password.value})),r.reset()},autoComplete:"off",isRequired:!0,children:[(0,c.jsxs)(d.l,{requiredIndicator:!0,children:["Email",(0,c.jsx)(o.I,{variant:"filled",size:"md",type:"email",name:"email"})]}),(0,c.jsxs)(d.l,{requiredIndicator:!0,children:["Password",(0,c.jsx)(o.I,{variant:"filled",size:"md",type:"password",name:"password"})]}),e&&(0,c.jsx)("h1",{children:"Email or password is wrong!"}),(0,c.jsx)(u.z,{display:"flex",marginLeft:"auto",marginRight:"auto",size:"lg",colorScheme:"purple",variant:"solid",type:"submit",children:"Log In"})]})})})},m=function(){return(0,c.jsx)(v,{})}},2392:function(e,i,r){r.d(i,{NI:function(){return k},NJ:function(){return R},e:function(){return I}});var l=r(1413),n=r(4925),a=r(9439),s=r(9886),t=r(4591),d=r(7872),o=r(9219),u=r(2996),c=r(5822),v=r(6992),m=r(2791),p=r(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],b=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(b,2),Z=x[0],I=x[1],g=(0,s.k)({strict:!1,name:"FormControlContext"}),y=(0,a.Z)(g,2),q=y[0],R=y[1];var k=(0,d.G)((function(e,i){var r=(0,o.jC)("Form",e),s=function(e){var i=e.id,r=e.isRequired,s=e.isInvalid,d=e.isDisabled,o=e.isReadOnly,u=(0,n.Z)(e,f),c=(0,m.useId)(),p=i||"field-".concat(c),h="".concat(p,"-label"),b="".concat(p,"-feedback"),x="".concat(p,"-helptext"),Z=(0,m.useState)(!1),I=(0,a.Z)(Z,2),g=I[0],y=I[1],q=(0,m.useState)(!1),R=(0,a.Z)(q,2),k=R[0],N=R[1],j=(0,m.useState)(!1),F=(0,a.Z)(j,2),_=F[0],C=F[1],P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({id:x},e),{},{ref:(0,t.lq)(i,(function(e){e&&N(!0)}))})}),[x]),w=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({},e),{},{ref:i,"data-focus":(0,v.PB)(_),"data-disabled":(0,v.PB)(d),"data-invalid":(0,v.PB)(s),"data-readonly":(0,v.PB)(o),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:p})}),[p,d,_,s,o,h]),T=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({id:b},e),{},{ref:(0,t.lq)(i,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[b]),O=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)((0,l.Z)({},e),u),{},{ref:i,role:"group"})}),[u]),D=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({},e),{},{ref:i,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!s,isReadOnly:!!o,isDisabled:!!d,isFocused:!!_,onFocus:function(){return C(!0)},onBlur:function(){return C(!1)},hasFeedbackText:g,setHasFeedbackText:y,hasHelpText:k,setHasHelpText:N,id:p,labelId:h,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:T,getRootProps:O,getLabelProps:w,getRequiredIndicatorProps:D}}((0,u.Lr)(e)),d=s.getRootProps,b=(s.htmlProps,(0,n.Z)(s,h)),x=(0,v.cx)("chakra-form-control",e.className);return(0,p.jsx)(q,{value:b,children:(0,p.jsx)(Z,{value:r,children:(0,p.jsx)(c.m.div,(0,l.Z)((0,l.Z)({},d({},i)),{},{className:x,__css:r.container}))})})}));k.displayName="FormControl",(0,d.G)((function(e,i){var r=R(),n=I(),a=(0,v.cx)("chakra-form__helper-text",e.className);return(0,p.jsx)(c.m.div,(0,l.Z)((0,l.Z)({},null==r?void 0:r.getHelpTextProps(e,i)),{},{__css:n.helperText,className:a}))})).displayName="FormHelperText"},8208:function(e,i,r){r.d(i,{l:function(){return m}});var l=r(1413),n=r(4925),a=r(2392),s=r(7872),t=r(9219),d=r(2996),o=r(5822),u=r(6992),c=r(184),v=["className","children","requiredIndicator","optionalIndicator"],m=(0,s.G)((function(e,i){var r,s=(0,t.mq)("FormLabel",e),m=(0,d.Lr)(e),f=(m.className,m.children),h=m.requiredIndicator,b=void 0===h?(0,c.jsx)(p,{}):h,x=m.optionalIndicator,Z=void 0===x?null:x,I=(0,n.Z)(m,v),g=(0,a.NJ)(),y=null!=(r=null==g?void 0:g.getLabelProps(I,i))?r:(0,l.Z)({ref:i},I);return(0,c.jsxs)(o.m.label,(0,l.Z)((0,l.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",m.className),__css:(0,l.Z)({display:"block",textAlign:"start"},s),children:[f,(null==g?void 0:g.isRequired)?b:Z]}))}));m.displayName="FormLabel";var p=(0,s.G)((function(e,i){var r=(0,a.NJ)(),n=(0,a.e)();if(!(null==r?void 0:r.isRequired))return null;var s=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(o.m.span,(0,l.Z)((0,l.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,i)),{},{__css:n.requiredIndicator,className:s}))}));p.displayName="RequiredIndicator"},9140:function(e,i,r){r.d(i,{I:function(){return h}});var l=r(1413),n=r(4925),a=r(2392),s=r(6992),t=["isDisabled","isInvalid","isReadOnly","isRequired"],d=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function o(e){var i=function(e){var i,r,t,o=(0,a.NJ)(),u=e.id,c=e.disabled,v=e.readOnly,m=e.required,p=e.isRequired,f=e.isInvalid,h=e.isReadOnly,b=e.isDisabled,x=e.onFocus,Z=e.onBlur,I=(0,n.Z)(e,d),g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==o?void 0:o.hasFeedbackText)&&(null==o?void 0:o.isInvalid)&&g.push(o.feedbackId);(null==o?void 0:o.hasHelpText)&&g.push(o.helpTextId);return(0,l.Z)((0,l.Z)({},I),{},{"aria-describedby":g.join(" ")||void 0,id:null!=u?u:null==o?void 0:o.id,isDisabled:null!=(i=null!=c?c:b)?i:null==o?void 0:o.isDisabled,isReadOnly:null!=(r=null!=v?v:h)?r:null==o?void 0:o.isReadOnly,isRequired:null!=(t=null!=m?m:p)?t:null==o?void 0:o.isRequired,isInvalid:null!=f?f:null==o?void 0:o.isInvalid,onFocus:(0,s.v0)(null==o?void 0:o.onFocus,x),onBlur:(0,s.v0)(null==o?void 0:o.onBlur,Z)})}(e),r=i.isDisabled,o=i.isInvalid,u=i.isReadOnly,c=i.isRequired,v=(0,n.Z)(i,t);return(0,l.Z)((0,l.Z)({},v),{},{disabled:r,readOnly:u,required:c,"aria-invalid":(0,s.Qm)(o),"aria-required":(0,s.Qm)(c),"aria-readonly":(0,s.Qm)(u)})}var u=r(7872),c=r(9219),v=r(2996),m=r(5822),p=r(184),f=["htmlSize"],h=(0,u.G)((function(e,i){var r=e.htmlSize,a=(0,n.Z)(e,f),t=(0,c.jC)("Input",a),d=o((0,v.Lr)(a)),u=(0,s.cx)("chakra-input",e.className);return(0,p.jsx)(m.m.input,(0,l.Z)((0,l.Z)({size:r},d),{},{__css:t.field,ref:i,className:u}))}));h.displayName="Input",h.id="Input"}}]);
//# sourceMappingURL=931.4da41c55.chunk.js.map
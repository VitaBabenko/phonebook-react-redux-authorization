"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[46],{1046:function(e,n,r){r.r(n),r.d(n,{default:function(){return L}});var t=r(9439),a=r(2791),o=r(9434),i=r(6052),s=r(1413),c=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},d=r(5218),p=r(8007),m=r(5946),x=r(4087),h=r(2392),f=r(8208),g=r(9140),j=r(4125),v=r(4224),y=r(5705),C=r(184),b=p.Ry().shape({name:p.Z_().required("Required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces!"),phone:p.Z_().required("Required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +!")}),z=function(){var e=(0,o.v9)(c),n=(0,o.I0)(),r=function(e){var n;return""===e&&(n="Required"),n};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m.X,{as:"h2",fontSize:"3xl",color:"purple",align:"center",marginBottom:"15px",children:"Phonebook"}),(0,C.jsx)(y.J9,{initialValues:{name:"",phone:""},validationSchema:b,onSubmit:function(r,t){e.filter((function(e){return e.name.toLowerCase()===r.name.toLowerCase()})).length?d.ZP.error("".concat(r.name," is already in contacts!")):n((0,i.uK)(r)),console.log(e),t.resetForm()},children:(0,C.jsx)(x.xu,{width:"400px",border:"1px",borderRadius:"10px",borderColor:"purple",padding:"18px",marginLeft:"auto",marginRight:"auto",children:(0,C.jsxs)(y.l0,{children:[(0,C.jsx)(y.gN,{name:"name",validate:r,children:function(e){var n=e.field,r=e.form;return(0,C.jsx)(h.NI,{isInvalid:r.errors.name&&r.touched.name,children:(0,C.jsxs)(f.l,{color:"purple",children:["Name",(0,C.jsx)(g.I,(0,s.Z)((0,s.Z)({},n),{},{variant:"filled",name:"name",type:"text"})),(0,C.jsx)(j.J1,{children:r.errors.name})]})})}}),(0,C.jsx)(y.gN,{name:"phone",validate:r,children:function(e){var n=e.field,r=e.form;return(0,C.jsx)(h.NI,{isInvalid:r.errors.name&&r.touched.name,children:(0,C.jsxs)(f.l,{color:"purple",children:["Number",(0,C.jsx)(g.I,(0,s.Z)((0,s.Z)({},n),{},{variant:"filled",name:"phone",type:"tel"})),(0,C.jsx)(j.J1,{children:r.errors.name})]})})}}),(0,C.jsx)(v.z,{display:"flex",marginLeft:"auto",marginRight:"auto",type:"submit",size:"md",colorScheme:"purple",variant:"solid",children:"Add contact"})]})})}),(0,C.jsx)(d.x7,{toastOptions:{duration:3e3}})]})},w=r(3204),I=function(e){var n=e.value,r=e.onChange;return(0,C.jsxs)(f.l,{margin:"0",display:"flex",justifyContent:"center",gap:"15px",color:"tomato",children:["Search contacts",(0,C.jsx)(g.I,{color:"tomato",borderRadius:"10px",border:"1px",width:"200px",variant:"outline",size:"sm",type:"text",value:n,onChange:r})]})},S=r(2347),Z=function(e){var n=e.contact,r=n._id,t=n.name,a=n.phone,s=(0,o.I0)();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(S.x,{fontSize:"lg",children:[t," :"]}),(0,C.jsx)(S.x,{fontSize:"lg",children:a}),(0,C.jsx)(v.z,{size:"md",colorScheme:"purple",variant:"solid",type:"button",onClick:function(){return s((0,i.GK)(r))},children:"Delete"})]})},R=r(3541),k=function(e){var n=e.contacts;return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(R.GS,{display:"flex",flexDirection:"column",gap:"15px",marginTop:"30px",color:"purple",width:"400px",marginLeft:"auto",marginRight:"auto",padding:"15px",children:n.map((function(e){return(0,C.jsx)(R.HC,{display:"flex",justifyContent:"center",alignItems:"center",gap:"45px",children:(0,C.jsx)(Z,{contact:e})},e._id)}))})})},L=function(){var e=(0,a.useState)(""),n=(0,t.Z)(e,2),r=n[0],s=n[1],d=(0,o.I0)(),p=(0,o.v9)(c);console.log(p);var x=(0,o.v9)(l),h=(0,o.v9)(u);(0,a.useEffect)((function(){d((0,i.yF)())}),[d]);var f=p.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(z,{}),x&&!h&&(0,C.jsx)(w.$,{display:"flex",marginLeft:"auto",marginRight:"auto",marginTop:"80px",color:"tomato",size:"xl",thickness:"4px",speed:"0.65s",emptyColor:"gray.200"}),p.length>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m.X,{as:"h2",fontSize:"3xl",color:"purple",align:"center",marginTop:"40px",marginBottom:"35px",children:"Contacts"}),(0,C.jsx)(I,{value:r,onChange:function(e){s(e.currentTarget.value)}}),(0,C.jsx)(k,{contacts:f})]})]})}}}]);
//# sourceMappingURL=46.22669199.chunk.js.map
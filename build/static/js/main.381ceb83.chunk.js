(this.webpackJsonpcal=this.webpackJsonpcal||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(4),r=a.n(c),i=(a(14),a(5)),l=a(6),b=a(7),d=a(2),h=a(9),j=a(8),u=a(0),m=function(){return Object(u.jsx)("nav",{className:"navbar navbar-light bg-primary",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("span",{className:"navbar-brand mb-0 h1 text-white",children:"Basic Calculator"})})})})},o=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){var t=e.target.name,a=e.target.value;s.setState(Object(i.a)({},t,a))},s.state={firstNumber:"",secondNumber:"",add:"",sub:"",mul:"",div:""},s.handleChange=s.handleChange.bind(Object(d.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s}return Object(b.a)(a,[{key:"handleSubmit",value:function(e){var t=parseFloat(this.state.firstNumber),a=parseFloat(this.state.secondNumber),s=t+a,n=t-a;if(a<1){this.setState({add:s,sub:n,mul:"Kindly Enter more then zero"})}else{var c=t*a,r=t/a;this.setState({add:s,sub:n,mul:c,div:r}),e.preventDefault()}}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("h1",{className:"mt-5 text-center text-info",children:"Welcome to The Basic Calculator"}),Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("h4",{children:"Enter your value"}),Object(u.jsx)("label",{htmlFor:"inputNumber",className:"form-label",children:"Enter First Number:"}),Object(u.jsx)("input",{type:"number",onChange:this.handleChange,className:"form-control",name:"firstNumber",id:"firstNumber",placeholder:"Enter your number"}),Object(u.jsx)("label",{htmlFor:"inputNumber",className:"form-label",children:"Enter Second Number:"}),Object(u.jsx)("input",{type:"number",onChange:this.handleChange,className:"form-control",name:"secondNumber",id:"secondNumber",placeholder:"Enter your number"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary"})]})}),Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("h4",{className:"mb-4",children:"Result"}),Object(u.jsxs)("p",{children:["Addition : ",Object(u.jsx)("span",{children:this.state.add})]}),Object(u.jsxs)("p",{children:["Subtraction : ",Object(u.jsx)("span",{children:this.state.sub})]}),Object(u.jsxs)("p",{children:["Multiply : ",Object(u.jsx)("span",{children:this.state.mul})]}),Object(u.jsxs)("p",{children:["Division : ",Object(u.jsx)("span",{children:this.state.div})]})]})]})}),Object(u.jsxs)("p",{className:"text-center font-weight-bold",children:["Create by"," ",Object(u.jsx)("a",{href:"https://www.facebook.com/supermanshuvo/",children:"Rezaul Karim"})]})]})}}]),a}(n.a.Component);var O=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(o,{})})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.381ceb83.chunk.js.map
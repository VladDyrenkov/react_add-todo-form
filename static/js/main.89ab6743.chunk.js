(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a.n(n),o=a(2),s=a(4),c=a(5),l=a(7),r=a(8),m=a(11),d=a(10),h=a(1),u=a.n(h),j=(a(16),a(17),a(0)),b=function(e){var t=e.todo;return Object(j.jsxs)("div",{className:"todo",children:[Object(j.jsx)("p",{className:"todo__title",children:"To Do: ".concat(t.id)}),Object(j.jsx)("h2",{children:t.title}),Object(j.jsxs)("div",{className:"todo__info",children:[Object(j.jsx)("p",{children:"User: ".concat(t.name)}),Object(j.jsx)("p",{children:t.completed?"Completed":"Not completed"})]})]})},p=(a(19),function(e){var t=e.todos;return Object(j.jsx)("ul",{className:"list",children:t.map((function(e){return Object(j.jsx)("li",{className:"list__item",children:Object(j.jsx)(b,{todo:e})},e.id)}))})}),f=[{id:1,name:"Roman Apostol",username:"Roman",email:"Roman@gmail.com"},{id:2,name:"Anna Apostol",username:"Anna",email:"Anna@gmail.com"},{id:3,name:"Max Lysak",username:"Max",email:"Max@gmail.com"},{id:4,name:"Artem Topolskyi",username:"Artem",email:"Artem@gmail.com"},{id:5,name:"Yurii Holiuk",username:"Yurii",email:"Yurii@gmail.com"},{id:6,name:"Illia Vovchenko",username:"Illia",email:"Illia@gmail.com"},{id:7,name:"Ihor Nahnybida",username:"Ihor",email:"Ihor@gmail.com"},{id:8,name:"Alina Matuschak",username:"Alina",email:"Alina@gmail.com"},{id:9,name:"Pelahiia Khalishkhova",username:"Pelahiia",email:"Pelahiia@gmail.com"},{id:10,name:"Nadiia Martynets",username:"Nadiia",email:"Nadiia@gmail.com"}],O=[{userId:1,name:"Roman Apostol",id:1,title:"delectus aut autem",completed:!1},{userId:4,name:"Artem Topolskyi",id:2,title:"quis ut nam facilis et officia qui",completed:!1}],x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={name:"",isCompleted:!1,todos:Object(c.a)(O),title:"",select:0,choosenTitle:!0,choosenPerson:!0},e.clear=function(){e.setState({title:"",select:0,choosenTitle:!0,choosenPerson:!0})},e.catchErrors=function(){e.setState((function(e){var t=e.title,a=e.select;return{choosenTitle:Boolean(t),choosenPerson:Boolean(a)}}))},e.addTodo=function(t){t.preventDefault(),e.catchErrors(),e.state.title&&e.state.select&&(e.setState((function(e){return{todos:[].concat(Object(c.a)(e.todos),[{userId:e.select,name:e.name,id:e.todos.length+1,title:e.title,completed:e.isCompleted}])}})),e.clear())},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value,c=a.children,l="title"===n?"choosenTitle":"choosenPerson",r=c.length?c[+i].innerHTML:"";e.setState((function(e){var t;return Object(s.a)(Object(s.a)({},e),{},(t={},Object(o.a)(t,n,i),Object(o.a)(t,l,!0),Object(o.a)(t,"name",r),t))}))},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"App__header",children:"Add todo form"}),Object(j.jsxs)("form",{className:"form",onSubmit:this.addTodo,children:[Object(j.jsxs)("div",{className:"form__title",children:[Object(j.jsx)("input",{className:"form__field",type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.handleChange}),!this.state.choosenTitle&&Object(j.jsx)("p",{className:"form__error",children:"Input title"})]}),Object(j.jsxs)("div",{className:"form__user",children:[Object(j.jsxs)("select",{className:"form__field",name:"select",value:this.state.select,onChange:this.handleChange,children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"User"}),f.map((function(e){var t=e.id,a=e.name;return Object(j.jsx)("option",{value:t,children:a},t)}))]}),!this.state.choosenPerson&&Object(j.jsx)("p",{className:"form__error",children:"Choose a user"})]}),Object(j.jsx)("button",{className:"form__add",type:"submit",children:"ADD"})]}),Object(j.jsx)("span",{className:"form__users",children:"Users: "}),Object(j.jsx)(p,{todos:this.state.todos})]})}}]),a}(u.a.Component),_=x;i.a.render(Object(j.jsx)(_,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.89ab6743.chunk.js.map
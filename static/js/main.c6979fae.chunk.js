(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c.n(n),s=c(8),r=c(17),i=c(6),l=c(15),o=c(16),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4),h=function(e){return{type:"status/SET",payload:e}},O=function(e){return{type:"query/SET",payload:e}},m=function(){return{type:"query/REMOVE"}},f={query:"",status:"all"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"status/SET":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});case"query/SET":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"query/REMOVE":return Object(b.a)(Object(b.a)({},e),{},{query:""});default:return e}},v=c(9),p=function(e){return{type:"todos/ADD",payload:e}},y=[],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?[].concat(Object(v.a)(e),Object(v.a)(t.payload)):e},g=Object(i.combineReducers)({currentTodo:j,filter:x,todos:N}),T=Object(i.createStore)(g,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(o.a))),E=c(3),k=c(0),S=(c(25),c(26),s.b),w=s.c,q=c(11),C=c.n(q),D=c(1),M=function(e){var t=e.item,c=w((function(e){return e.currentTodo})),n=S();return Object(D.jsxs)("tr",{"data-cy":"todo",className:C()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===t.id}),children:[Object(D.jsx)("td",{className:"is-vcentered",children:t.id}),t.completed?Object(D.jsx)("td",{className:"is-vcentered",children:Object(D.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(D.jsx)("i",{className:"fas fa-check"})})}):Object(D.jsx)("td",{className:"is-vcentered"}),Object(D.jsx)("td",{className:"is-vcentered"}),Object(D.jsx)("td",{className:"is-vcentered is-expanded",children:Object(D.jsx)("p",{className:C()({"has-text-danger":!t.completed,"has-text-success":t.completed}),children:t.title})}),Object(D.jsx)("td",{className:"has-text-right is-vcentered",children:Object(D.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e=t,void((null===c||void 0===c?void 0:c.id)!==e.id?n(d(e)):n(u()));var e},children:Object(D.jsx)("span",{className:"icon",children:Object(D.jsx)("i",{className:C()("far",{"fa-eye":(null===c||void 0===c?void 0:c.id)!==t.id,"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===t.id})})})})})]})},R=function(){var e=w((function(e){return e.todos})),t=w((function(e){return e.filter})),c=t.status,n=t.query,a=function(){var t=[];switch(c){case"all":default:t=Object(v.a)(e);break;case"active":t=e.filter((function(e){return!e.completed}));break;case"completed":t=e.filter((function(e){return e.completed}))}return n?t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})):t}();return Object(D.jsx)(D.Fragment,{children:0===a.length?Object(D.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}):Object(D.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{children:"#"}),Object(D.jsx)("th",{children:Object(D.jsx)("span",{className:"icon",children:Object(D.jsx)("i",{className:"fas fa-check"})})}),Object(D.jsx)("th",{children:"Title"}),Object(D.jsx)("th",{children:" "})]})}),Object(D.jsx)("tbody",{children:a.map((function(e){return Object(D.jsx)(M,{item:e},e.id)}))})]})})},_=function(){var e=S(),t=w((function(e){return e.filter})).query;return Object(D.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(D.jsx)("p",{className:"control",children:Object(D.jsx)("span",{className:"select",children:Object(D.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){return e(h(t.target.value))},children:[Object(D.jsx)("option",{value:"all",children:"All"}),Object(D.jsx)("option",{value:"active",children:"Active"}),Object(D.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(D.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(D.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(t){return e(O(t.target.value))}}),Object(D.jsx)("span",{className:"icon is-left",children:Object(D.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.length>0&&Object(D.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(D.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return e(m())}})})]})]})},A=(c(28),function(){return Object(D.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(D.jsx)("div",{className:"Loader__content"})})});function L(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var V=function(){var e=w((function(e){return e.currentTodo})),t=S(),c=Object(k.useState)(),n=Object(E.a)(c,2),a=n[0],s=n[1],r=Object(k.useState)(!1),i=Object(E.a)(r,2),l=i[0],o=i[1];return Object(k.useEffect)((function(){var t;o(!0),e&&(t=e.userId,L("/users/".concat(t))).then(s).finally((function(){return o(!1)}))}),[]),Object(D.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(D.jsx)("div",{className:"modal-background"}),l?Object(D.jsx)(A,{}):Object(D.jsxs)("div",{className:"modal-card",children:[Object(D.jsxs)("header",{className:"modal-card-head",children:[Object(D.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===e||void 0===e?void 0:e.id)}),Object(D.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return t(u())}})]}),Object(D.jsxs)("div",{className:"modal-card-body",children:[Object(D.jsx)("p",{className:"block","data-cy":"modal-title",children:null===e||void 0===e?void 0:e.title}),Object(D.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==e&&void 0!==e&&e.completed?Object(D.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(D.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(D.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===a||void 0===a?void 0:a.name})]})]})]})]})},B=function(){var e=Object(k.useState)(!1),t=Object(E.a)(e,2),c=t[0],n=t[1],a=S(),s=w((function(e){return e.currentTodo}));return Object(k.useEffect)((function(){n(!0),L("/todos").then((function(e){return a(p(e))})).finally((function(){return n(!1)}))}),[]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{className:"section",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"box",children:[Object(D.jsx)("h1",{className:"title",children:"Todos:"}),Object(D.jsx)("div",{className:"block",children:!c&&Object(D.jsx)(_,{})}),Object(D.jsxs)("div",{className:"block",children:[c&&Object(D.jsx)(A,{}),!c&&Object(D.jsx)(R,{})]})]})})}),s&&Object(D.jsx)(V,{})]})},I=function(){return Object(D.jsx)(s.a,{store:T,children:Object(D.jsx)(r.a,{children:Object(D.jsx)(B,{})})})};a.a.render(Object(D.jsx)(I,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.c6979fae.chunk.js.map
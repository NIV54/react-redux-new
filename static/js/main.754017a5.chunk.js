(this["webpackJsonpreact-redux-new"]=this["webpackJsonpreact-redux-new"]||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},23:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(3),c=n.n(a),u=n(8),i=n(4),l=n(25),d=Object(i.b)({name:"todos",initialState:[],reducers:{addTodo:function(e,t){return e.concat(Object(u.a)(Object(u.a)({},t.payload),{},{id:Object(l.a)()}))},removeTodo:function(e,t){return e.filter((function(e){var n=e.id;return t.payload!==n}))},clearTodos:function(){return[]}}}),s=d.reducer,m=d.actions,f=m.addTodo,b=m.clearTodos,p=m.removeTodo,v=n(2),E=n(11),h=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.todos})),n=function(e){var t=Object(o.useState)(""),n=Object(E.a)(t,2),r=n[0],a=n[1];return{value:r,inputProps:{onChange:function(e){return a(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&(e(r),a(""))},value:r,type:"text"}}}((function(t){return e(f({content:t}))})).inputProps;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",n),r.a.createElement("button",{onClick:function(){return e(b())}},"\ud83d\uddd1\ufe0f"),r.a.createElement("ul",null,t.map((function(t){return r.a.createElement("li",{key:t.id},t.content,r.a.createElement("button",{onClick:function(){return e(p(t.id))}},"\u2714"))}))))},w=n(1),j=Object(w.c)({todos:s}),O=Object(i.a)({reducer:j}),g=function(){return r.a.createElement(v.a,{store:O},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.754017a5.chunk.js.map
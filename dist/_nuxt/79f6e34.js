(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{288:function(t,e,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("3a910c9c",content,!0,{sourceMap:!1})},312:function(t,e,r){"use strict";r(288)},313:function(t,e,r){var o=r(113)(!1);o.push([t.i,"table tr[data-v-2d24a062]{padding-top:20px!important;padding-bottom:20px!important}td button.btn[data-v-2d24a062]{border-radius:20px;font-size:12px!important;letter-spacing:1px!important;background-color:#0d6efd!important;color:#fff!important;border:none!important;padding:5px;text-transform:capitalize}[data-v-2d24a062] button.close{padding:5px 10px;border-radius:50%}.users-title[data-v-2d24a062]{padding:20px 10px;color:#000;border:1px solid #aaa;border-top-right-radius:10px;border-top-left-radius:10px}table thead[data-v-2d24a062]{background-color:#366e85;color:#fff}",""]),t.exports=o},328:function(t,e,r){"use strict";r.r(e);var o=r(25),n=(r(73),{data:function(){return{users:[],id:"",role:""}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users");case 3:r=e.sent,t.users=r.data,console.log(r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},methods:{getId:function(t){this.id=t,console.log(t)},updateRole:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.role||!t.id){e.next=12;break}return data={role:t.role,id:t.id},e.next=4,t.$axios.post("/auth/authorize",data);case 4:return r=e.sent,console.log(r),t.role="",t.id="",e.next=10,t.$axios.get("/users");case 10:o=e.sent,t.users=o.data;case 12:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.role="",this.id=""}}}),l=(r(312),r(60)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("table",{staticClass:"table table table-striped table-hover"},[t._m(1),t._v(" "),r("tbody",t._l(t.users,(function(e){return r("tr",{key:e.id},[r("td",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),t._v(" "),r("td",[t._v(t._s(e.firstName)+" "+t._s(e.lastName))]),t._v(" "),r("td",[t._v(t._s(e.email))]),t._v(" "),r("td",[t._v(t._s(e.role))]),t._v(" "),r("td",{on:{click:function(r){return t.getId(e.id)}}},[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn btn-primary"},[t._v("update Role")])],1)])})),0)]),t._v(" "),r("b-modal",{attrs:{id:"modal-1",title:"Update Role"},on:{ok:function(e){return t.updateRole()},close:t.closeModal,cancel:t.closeModal,hidden:t.closeModal}},[r("h3",[t._v("Please, choose the role you would like this user to have")]),t._v(" "),r("pre",[t._v("choosen role = "+t._s(t.role))]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.role,expression:"role"}],staticClass:"form-select",attrs:{"aria-label":"Default select example"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.role=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"ADMIN"}},[t._v("ADMIN")]),t._v(" "),r("option",{attrs:{value:"TEACHER"}},[t._v("TEACHER")]),t._v(" "),r("option",{attrs:{value:"STUDENT"}},[t._v("STUDENT")])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"users-title"},[r("h1",[t._v("Users")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("Id")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Email")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Role")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Actions")])])])}],!1,null,"2d24a062",null);e.default=component.exports}}]);
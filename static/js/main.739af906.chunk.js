(this.webpackJsonpprojfrontend=this.webpackJsonpprojfrontend||[]).push([[0],{49:function(e,t,a){e.exports=a(85)},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),o=a.n(r),l=a(5),s=a(10),i=a(4),m="http://localhost:3001/api",u=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},d=function(e,t){return e.location.pathname===t?{color:"#2ECC72"}:{color:"#FFFFFF"}};var p=Object(s.g)((function(e){var t=e.history;return c.a.createElement("div",null,c.a.createElement("ul",{className:"nav nav-tabs bg-dark"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{style:d(t,"/"),className:"nav-link",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{style:d(t,"/cart"),className:"nav-link",to:"/cart"},"Cart")),u()&&0===u().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{style:d(t,"/user/dashboard"),className:"nav-link",to:"/user/dashboard"},"Dashboard")),u()&&1===u().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{style:d(t,"/admin/dashboard"),className:"nav-link",to:"/admin/dashboard"},"Admin Dashboard")),!u()&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{style:d(t,"/register"),className:"nav-link",to:"/register"},"Register")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{style:d(t,"/login"),className:"nav-link",to:"/login"},"Login"))),u()&&c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link text-warning",onClick:function(){!function(e){if("undefined"!==typeof window)localStorage.removeItem("jwt"),e(),fetch("".concat(m,"/logout"),{method:"GET"}).then((function(e){return console.log("logout success: ",e)})).catch((function(e){return console.log(e)}))}((function(){t.push("/")}))}},"Logout"))))}));var f=function(e){var t=e.title,a=void 0===t?"My Title":t,n=e.description,r=void 0===n?"My Description":n,o=e.className,l=void 0===o?"bg-dark text-white p-4":o,s=e.children;return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"jumbotron bg-dark text-white text-center"},c.a.createElement("h2",{className:"display-4"},a),c.a.createElement("p",{className:"lead"},r)),c.a.createElement("div",{className:l,style:{"min-height":"100vh"}},s)),c.a.createElement("footer",{className:"footer bg-dark mt-auto py-3"},c.a.createElement("div",{className:"container-fluid bg-success text-white text-center py-3"},c.a.createElement("h4",null,"If you got any questions, feel free to reach out!"),c.a.createElement("button",{className:"btn btn-warning btn-lg"},"Contact Us")),c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"text-muted"},"An amazing ",c.a.createElement("span",{className:"text-white"},"MERN")," Portfolio Project!"))))};var E=function(e){var t=e.product,a=t?"".concat(m,"/product/photo/").concat(t._id):void 0;return c.a.createElement("div",{className:"rounded border border-success p-2"},c.a.createElement("img",{src:a,alt:"photo",style:{height:"100%",width:"100%"},className:"mb-3 rounded"}))},b=a(2),h=function(e,t){var a=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.push(Object(b.a)(Object(b.a)({},e),{},{count:1})),localStorage.setItem("cart",JSON.stringify(a)),t())},g=function(e){var t=[];return"undefined"!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(a,n){a._id===e&&t.splice(n,1)})),localStorage.setItem("cart",JSON.stringify(t))),t},v=function(){return fetch("".concat(m,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},N=a(87),j=a(90),y=a(89),O=a(88);a(58);var k=function(e){var t=e.buttonLabel,a=e.setButtonLabel,r=Object(n.useState)(!1),o=Object(i.a)(r,2),l=o[0],s=o[1];return c.a.createElement("div",{className:"card text-white bg-dark border border-info"},c.a.createElement("div",{className:"card-header lead"},"Filter your results"),c.a.createElement("div",{className:"card-body"},c.a.createElement(N.a,{isOpen:l,toggle:function(){return s((function(e){return!e}))}},c.a.createElement(j.a,{className:"btn btn-success",caret:!0},t),c.a.createElement(y.a,null,c.a.createElement(O.a,{header:!0},"Select Price Range"),c.a.createElement(O.a,{onClick:function(){a("Below $10")}},"Below $10"),c.a.createElement(O.a,{divider:!0}),c.a.createElement(O.a,{onClick:function(){a("$10 - $30")}},"$10 - $30"),c.a.createElement(O.a,{onClick:function(){a("Above $30")}},"Above $30"),c.a.createElement(O.a,{onClick:function(){a("No filters selected")}},"Remove all filters")))))};var w=function(e){var t=e.product,a=e.addToCart,r=void 0===a||a,o=e.removeFromCart,l=void 0!==o&&o,s=e.reload,m=e.setReload,u=Object(n.useState)(!1),d=Object(i.a)(u,2),p=(d[0],d[1]),f=Object(n.useState)(t?t.count:0),b=Object(i.a)(f,2),v=(b[0],b[1],t?t.name:void 0),N=t?t.description:void 0,j=t?t.price:void 0,y=function(){h(t,(function(){p(!0)}))};return c.a.createElement("div",{className:"card-container-parent"},c.a.createElement("div",{className:"card-container"},c.a.createElement("div",{className:"card-container__image-column"},c.a.createElement(E,{product:t||void 0}),c.a.createElement("div",{className:"card-container__product-name"},v)),c.a.createElement("p",{className:"card-container__product-description"},N),c.a.createElement("p",{className:"card-container__product-price"},"$ ",j),c.a.createElement("div",{className:"card-container__add-or-remove-item"},c.a.createElement("div",{className:"col-12"},function(e){return e&&c.a.createElement("button",{onClick:y,className:"btn btn-block btn-outline-success mt-2 mb-2"},"Add to Cart")}(r)),c.a.createElement("div",{className:"col-12"},function(e){return e&&c.a.createElement("button",{onClick:function(){g(t._id),m(!s)},className:"btn btn-block btn-outline-danger mt-2 mb-2"},"Remove from cart")}(l)))),c.a.createElement("hr",null))};var C=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(void 0),s=Object(i.a)(l,2),m=(s[0],s[1]),u=Object(n.useState)("Default"),d=Object(i.a)(u,2),p=d[0],E=d[1];return Object(n.useEffect)((function(){v().then((function(e){e&&(e.error?m(e.error):o(e.foundProducts))}))}),[p]),c.a.createElement(f,{title:"Home Page",description:"Welcome to the E-Commerce Store"},c.a.createElement("div",{className:"home-container"},c.a.createElement("div",{className:"sidebar"},c.a.createElement("h3",{style:{"text-align":"center"}},"Filter results"),c.a.createElement(k,{buttonLabel:p,setButtonLabel:E})),c.a.createElement("div",{className:"home-content"},c.a.createElement("hr",null),r.map((function(e,t){switch(p){case"Below $10":return c.a.createElement("div",{className:"mb-4",key:t},e.price<10?c.a.createElement(w,{product:e.price<10?e:void 0}):void 0);case"$10 - $30":return c.a.createElement("div",{className:"mb-4",key:t},e.price>=10&&e.price<30?c.a.createElement(w,{product:e.price>=10&&e.price<30?e:void 0}):void 0);case"Above $30":return c.a.createElement("div",{className:"mb-4",key:t},e.price>30?c.a.createElement(w,{product:e.price>30?e:void 0}):void 0);default:return c.a.createElement("div",{className:"mb-4",key:t},c.a.createElement(w,{product:e}))}})))))},x=a(15);var S=function(e){var t=Object(n.useState)({fName:"",lName:"",email:"",password:"",error:"",success:!1}),a=Object(i.a)(t,2),r=a[0],o=a[1],s=r.fName,u=r.lName,d=r.email,p=r.password,E=r.error,h=r.success,g=function(e){return function(t){o(Object(b.a)(Object(b.a)({},r),{},Object(x.a)({error:""},e,t.target.value)))}},v=function(e){var t;e.preventDefault(),o(Object(b.a)(Object(b.a)({},r),{},{error:""})),(t={fName:s,lName:u,email:d,password:p},fetch("".concat(m,"/register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))).then((function(e){e.error?o(Object(b.a)(Object(b.a)({},r),{},{error:e.error,success:!1})):o(Object(b.a)(Object(b.a)({},r),{},{fName:"",lName:"",email:"",password:"",error:"",success:!0}))})).catch((function(e){console.log("Error in registration",e)}))};return c.a.createElement(f,{title:"Registration Page",description:"A page for user to register!"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-success",style:{display:h?"":"none"}},"Registration Successful. Please ",c.a.createElement(l.b,{to:"/login"},"Login Here")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",style:{display:E?"":"none"}},E))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"First Name"),c.a.createElement("input",{className:"form-control",type:"text",onChange:g("fName"),value:s})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Last Name"),c.a.createElement("input",{className:"form-control",type:"text",onChange:g("lName"),value:u})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Email"),c.a.createElement("input",{className:"form-control",type:"email",onChange:g("email"),value:d})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Password"),c.a.createElement("input",{className:"form-control",type:"password",onChange:g("password"),value:p})),c.a.createElement("button",{onClick:v,className:"btn btn-success btn-block"},"Register")))),c.a.createElement("p",{className:"text-white text-center"},JSON.stringify(r)))};var A=function(e){var t=Object(n.useState)({email:"admin@nikhil.com",password:"123456",error:"",loading:!1,didRedirect:!1}),a=Object(i.a)(t,2),r=a[0],o=a[1],l=r.email,d=r.password,p=r.error,E=r.loading,h=r.didRedirect,g=u().user,v=function(e){return function(t){o(Object(b.a)(Object(b.a)({},r),{},Object(x.a)({error:""},e,t.target.value)))}},N=function(e){e.preventDefault(),o(Object(b.a)(Object(b.a)({},r),{},{error:"",loading:!0})),function(e){return fetch("".concat(m,"/login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}({email:l,password:d}).then((function(e){e.error?o(Object(b.a)(Object(b.a)({},r),{},{error:e.error,loading:!1})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){o(Object(b.a)(Object(b.a)({},r),{},{email:"",password:"",didRedirect:!0}))}))})).catch((function(e){console.log("Failed to login",e)}))};return c.a.createElement(f,{title:"Login Page",description:"A page for user to login!"},E&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"Loading...")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",style:{display:p?"":"none"}},p))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Email"),c.a.createElement("input",{className:"form-control",type:"email",onChange:v("email"),value:l})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Password"),c.a.createElement("input",{className:"form-control",type:"password",onChange:v("password"),value:d})),c.a.createElement("button",{className:"btn btn-success btn-block",onClick:N},"Login")))),function(){if(h)return g&&1===g.role?c.a.createElement(s.a,{to:"/admin/dashboard"}):c.a.createElement(s.a,{to:"/user/dashboard"})}(),c.a.createElement("p",{className:"text-white text-center"},JSON.stringify(r)))},P=a(24),T=function(e){var t=e.component,a=Object(P.a)(e,["component"]);return c.a.createElement(s.b,Object.assign({},a,{render:function(e){return u()&&1===u().user.role?c.a.createElement(t,e):c.a.createElement(s.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},D=function(e){var t=e.component,a=Object(P.a)(e,["component"]);return c.a.createElement(s.b,Object.assign({},a,{render:function(e){return u()?c.a.createElement(t,e):c.a.createElement(s.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var I=function(e){return c.a.createElement(f,{title:"User Dashboard",description:"User Dashboard description"},"This is User dashboard")};var _=function(e){var t=u().user,a=t.fName,n=t.lName,r=t.email;return t.role,c.a.createElement(f,{className:"container bg-success p-4",title:"Welcome to Admin Area",description:"Manage all of your products here."},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"card-header bg-dark text-white"},"Admin Navigation"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement(l.b,{to:"/admin/create/category",className:"nav-link text-success"},"Create Categories")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(l.b,{to:"/admin/categories",className:"nav-link text-success"},"Manage Categories")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(l.b,{to:"/admin/create/product",className:"nav-link text-success"},"Create Products")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(l.b,{to:"/admin/products",className:"nav-link text-success"},"Manage Products")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(l.b,{to:"/admin/orders",className:"nav-link text-success"},"Manage Orders"))))),c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"card mb-4"},c.a.createElement("h4",{className:"card-header"},"Admin Information"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-success mr-2"},"Name:"),"".concat(a," ").concat(n)),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-success mr-2"},"Email:"),"".concat(r)),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-danger mr-2"},"Admin Privileges:"),"Granted"))))))},R=function(){return fetch("".concat(m,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))};var F=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(""),d=Object(i.a)(s,2),p=d[0],E=d[1],b=Object(n.useState)(!1),h=Object(i.a)(b,2),g=h[0],v=h[1],N=u(),j=N.user._id,y=N.token,O=function(e){E(""),o(e.target.value)},k=function(e){e.preventDefault(),E(""),v(!1),function(e,t,a){return fetch("".concat(m,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}(j,y,{name:r}).then((function(e){e.error?E(e.error):(E(""),v(!0),o(""))}))};return c.a.createElement(f,{title:"Create a category here",description:"Add a new T-shirt category",className:"container bg-info p-4"},c.a.createElement("div",{className:"row bg-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},function(){if(g)return c.a.createElement("h4",{className:"text-success"},"Category created successfully")}(),function(){if(p)return c.a.createElement("h4",{className:"text-warning"},"Failed to create category: ".concat(p))}(),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"},"Enter a name for your category."),c.a.createElement("input",{type:"text",className:"form-control my-3",onChange:O,value:r,autoFocus:!0,required:!0,placeholder:"For e.g. Summer"}),c.a.createElement("button",{className:"btn btn-outline-info",onClick:k},"Create Category"))),c.a.createElement("div",{className:"mt-5"},c.a.createElement(l.b,{to:"/admin/dashboard",className:"btn btn-sm btn-success mb-3"},"Admin Home")))))};var J=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],s=u(),d=s.user._id,p=s.token,E=function(){R().then((function(e){e.error?console.log(e.error):(console.log(e),o(e.foundCategories))}))};Object(n.useEffect)((function(){E()}),[]);var b=function(e){(function(e,t,a){return fetch("".concat(m,"/category/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))})(e,d,p).then((function(e){e.error?console.log("deleteOneCategory",e.error):E()})).catch()};return c.a.createElement(f,{title:"Welcome admin",description:"Manage categories here"},c.a.createElement("h2",{className:"mb-4"},"All products:"),c.a.createElement(l.b,{className:"btn btn-info",to:"/admin/dashboard"},c.a.createElement("span",{className:""},"Admin Home")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",{className:"text-center text-white my-3"},"Total 3 products"),r.map((function(e,t){return c.a.createElement("div",{key:t,className:"row text-center mb-2 "},c.a.createElement("div",{className:"col-4"},c.a.createElement("h3",{className:"text-white text-left"},e.name)),c.a.createElement("div",{className:"col-4"},c.a.createElement(l.b,{className:"btn btn-success",to:"/admin/category/update/".concat(e._id)},c.a.createElement("span",{className:""},"Update"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{onClick:function(){b(e._id)},className:"btn btn-danger"},"Delete")))})))))};var B=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],s=u(),d=s.user._id,p=s.token,E=function(){fetch("".concat(m,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)})).then((function(e){e.error?console.log(e.error):(console.log(e),o(e.foundProducts))}))};Object(n.useEffect)((function(){E()}),[]);var b=function(e){(function(e,t,a){return fetch("".concat(m,"/product/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))})(e,d,p).then((function(e){e.error?console.log(e.error):E()})).catch()};return c.a.createElement(f,{title:"Welcome admin",description:"Manage products here"},c.a.createElement("h2",{className:"mb-4"},"All products:"),c.a.createElement(l.b,{className:"btn btn-info",to:"/admin/dashboard"},c.a.createElement("span",{className:""},"Admin Home")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",{className:"text-center text-white my-3"},"Total ",r.length," products"),r.map((function(e,t){return c.a.createElement("div",{key:t,className:"row text-center mb-2 "},c.a.createElement("div",{className:"col-4"},c.a.createElement("h3",{className:"text-white text-left"},e.name)),c.a.createElement("div",{className:"col-4"},c.a.createElement(l.b,{className:"btn btn-success",to:"/admin/product/update/".concat(e._id)},c.a.createElement("span",{className:""},"Update"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{onClick:function(){b(e._id)},className:"btn btn-danger"},"Delete")))})))))};var L=function(e){var t=u(),a=t.user._id,r=t.token,o=Object(n.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:void 0,createdProduct:void 0,didRedirect:!1,formData:void 0}),s=Object(i.a)(o,2),d=s[0],p=s[1],E=d.name,h=d.description,g=d.price,v=d.stock,N=(d.photo,d.categories),j=(d.category,d.loading,d.error),y=d.createdProduct,O=(d.didRedirect,d.formData);Object(n.useEffect)((function(){R().then((function(e){e.error?p(Object(b.a)(Object(b.a)({},d),{},{error:e.error})):p(Object(b.a)(Object(b.a)({},d),{},{categories:e.foundCategories,formData:new FormData}))}))}),[]);var k=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;O.set(e,a),p(Object(b.a)(Object(b.a)({},d),{},Object(x.a)({},e,a)))}},w=function(e){e.preventDefault(),p(Object(b.a)(Object(b.a)({},d),{},{error:"",loading:!0})),function(e,t,a){return fetch("".concat(m,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}(a,r,O).then((function(e){console.log(e),e.error?p(Object(b.a)(Object(b.a)({},d),{},{createdProduct:void 0,error:e.error})):p(Object(b.a)(Object(b.a)({},d),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,error:void 0,createdProduct:e.product.name,didRedirect:!1}))})).catch((function(e){console.log(e)}))};return c.a.createElement(f,{title:"Add a product here!",description:"This is the product creation section",className:"container bg-info p-4"},c.a.createElement(l.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home"),c.a.createElement("div",{className:"row bg-dark text-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},c.a.createElement("div",{className:"alert alert-success mt-3",style:{display:y?"":"none"}},c.a.createElement("h4",null,y," created successfully")),c.a.createElement("div",{className:"alert alert-warning mt-3",style:{display:j?"":"none"}},c.a.createElement("h4",null,"Couldn't create product: ",j)),c.a.createElement("form",null,c.a.createElement("span",null,"Post photo"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"btn btn-block btn-success"},c.a.createElement("input",{onChange:k("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:k("name"),name:"photo",className:"form-control",placeholder:"Name",value:E})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:k("description"),name:"photo",className:"form-control",placeholder:"Description",value:h})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:k("price"),type:"number",className:"form-control",placeholder:"Price",value:g})),c.a.createElement("div",{className:"form-group"},c.a.createElement("select",{onChange:k("category"),className:"form-control",placeholder:"Category"},c.a.createElement("option",null,"Select"),N&&N.map((function(e,t){return c.a.createElement("option",{key:t,value:e._id},e.name)})))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:k("stock"),type:"number",className:"form-control",placeholder:"Quantity",value:v})),c.a.createElement("button",{type:"submit",onClick:w,className:"btn btn-outline-success mb-3"},"Create Product")))))};var M=function(e){var t=e.match,a=u(),r=a.user._id,o=a.token,s=Object(n.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:void 0,createdProduct:void 0,didRedirect:!1,formData:void 0}),d=Object(i.a)(s,2),p=d[0],E=d[1],h=p.name,g=p.description,v=p.price,N=p.stock,j=(p.photo,p.categories),y=(p.category,p.loading,p.error),O=p.createdProduct,k=(p.didRedirect,p.formData),w=function(e){(function(e){return fetch("".concat(m,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))})(e).then((function(e){e.error?E(Object(b.a)(Object(b.a)({},p),{},{error:e.error})):(C(),E(Object(b.a)(Object(b.a)({},p),{},{name:e.name,description:e.description,price:e.price,category:e.category._id,stock:e.stock,formData:new FormData})))}))},C=function(){R().then((function(e){e.error?E(Object(b.a)(Object(b.a)({},p),{},{error:e.error})):E({categories:e.foundCategories,formData:new FormData})}))};Object(n.useEffect)((function(){w(t.params.productId)}),[]);var S=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;k.set(e,a),E(Object(b.a)(Object(b.a)({},p),{},Object(x.a)({},e,a)))}},A=function(e){e.preventDefault(),E(Object(b.a)(Object(b.a)({},p),{},{error:"",loading:!0})),function(e,t,a,n){return fetch("".concat(m,"/product/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:n}).then((function(e){return console.log("Admin API call",e),e.json()})).catch((function(e){console.log("Admin API call",e)}))}(t.params.productId,r,o,k).then((function(e){console.log("Data",e),e.updatedProduct?E(Object(b.a)(Object(b.a)({},p),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,error:void 0,createdProduct:e.updatedProduct.name,didRedirect:!1})):E(Object(b.a)(Object(b.a)({},p),{},{createdProduct:void 0,error:"couldn't update"}))})).catch((function(e){console.log(e)}))};return c.a.createElement(f,{title:"Add a product here!",description:"This is the product creation section",className:"container bg-info p-4"},c.a.createElement(l.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home"),c.a.createElement("div",{className:"row bg-dark text-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},c.a.createElement("div",{className:"alert alert-success mt-3",style:{display:O?"":"none"}},c.a.createElement("h4",null,O," updated successfully")),c.a.createElement("div",{className:"alert alert-warning mt-3",style:{display:y?"":"none"}},c.a.createElement("h4",null,"Couldn't update product")),c.a.createElement("form",null,c.a.createElement("span",null,"Post photo"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"btn btn-block btn-success"},c.a.createElement("input",{onChange:S("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:S("name"),name:"photo",className:"form-control",placeholder:"Name",value:h})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:S("description"),name:"photo",className:"form-control",placeholder:"Description",value:g})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:S("price"),type:"number",className:"form-control",placeholder:"Price",value:v})),c.a.createElement("div",{className:"form-group"},c.a.createElement("select",{onChange:S("category"),className:"form-control",placeholder:"Category"},c.a.createElement("option",null,"Select"),j&&j.map((function(e,t){return c.a.createElement("option",{key:t,value:e._id},e.name)})))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:S("stock"),type:"number",className:"form-control",placeholder:"Quantity",value:N})),c.a.createElement("button",{type:"submit",onClick:A,className:"btn btn-outline-success mb-3"},"Update Product")))))};var U=function(e){var t=e.match,a=Object(n.useState)(""),r=Object(i.a)(a,2),o=r[0],s=r[1],d=Object(n.useState)(""),p=Object(i.a)(d,2),E=p[0],b=p[1],h=Object(n.useState)(!1),g=Object(i.a)(h,2),v=g[0],N=g[1],j=u(),y=j.user._id,O=j.token,k=function(e){(function(e){return fetch("".concat(m,"/category/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))})(e).then((function(e){s(e.name)}))};Object(n.useEffect)((function(){k(t.params.categoryId)}),[]);var w=function(e){b(""),s(e.target.value)},C=function(e){e.preventDefault(),b(""),N(!1),function(e,t,a,n){return fetch("".concat(m,"/category/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(n)}).then((function(e){return console.log("Admin API call",e),e.json()})).catch((function(e){console.log("Admin API call",e)}))}(t.params.categoryId,y,O,{name:o}).then((function(e){e.error?b(e.error):(b(""),N(!0),s(""))}))};return c.a.createElement(f,{title:"Update a category here",description:"Update an existing T-shirt category",className:"container bg-info p-4"},c.a.createElement("div",{className:"row bg-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},function(){if(v)return c.a.createElement("h4",{className:"text-success"},"Category updated successfully")}(),function(){if(E)return c.a.createElement("h4",{className:"text-warning"},"Failed to update category: ".concat(E))}(),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"},"Enter a name for your category."),c.a.createElement("input",{type:"text",className:"form-control my-3",onChange:w,value:o,autoFocus:!0,required:!0,placeholder:"For e.g. Summer"}),c.a.createElement("button",{className:"btn btn-outline-info",onClick:C},"Update Category"))),c.a.createElement("div",{className:"mt-5"},c.a.createElement(l.b,{to:"/admin/dashboard",className:"btn btn-sm btn-success mb-3"},"Admin Home")))))};a(47);var $=a(48),z=a.n($);var H=function(e){var t=e.products,a=e.setReload,r=e.reload,o=Object(n.useState)({loading:!1,success:!1,clientToken:null,error:void 0,instance:{}}),l=Object(i.a)(o,2),s=l[0],d=l[1],p=u()&&u().user._id,f=u()&&u().token,E=function(e,t){(function(e,t){return fetch("".concat(m,"/payment/gettoken/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))})(e,t).then((function(e){if(e)if(e.error)d(Object(b.a)(Object(b.a)({},e),{},{error:e.error}));else{var t=e.clientToken;d(Object(b.a)(Object(b.a)({},e),{},{clientToken:t}))}}))};Object(n.useEffect)((function(){E(p,f)}),[]);var h=function(){d(Object(b.a)(Object(b.a)({},s),{},{loading:!0}));s.instance.requestPaymentMethod().then((function(e){var n={paymentMethodNonce:e.nonce,amount:g()};(function(e,t,a){return fetch("".concat(m,"/payment/braintree/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))})(p,f,n).then((function(e){d(Object(b.a)(Object(b.a)({},s),{},{success:e.success,loading:!1})),console.log("PAYMENT SUCCESS");var n={products:t,transaction_id:e.transaction.id,amount:e.transaction.amount};(function(e,t,a){return fetch("".concat(m,"/order/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({order:a})}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))})(p,f,n).then((function(e){console.log("CREATE ORDER: ",e)})).catch((function(e){console.log(e)})),function(e){if("undefined"!==typeof window){localStorage.removeItem("cart");localStorage.setItem("cart",JSON.stringify([])),e()}}((function(){console.log("Did we get a crash?")})),a(!r)})).catch((function(e){d(Object(b.a)(Object(b.a)({},s),{},{loading:!1,success:!1,error:e})),console.log("PAYMENT FAILURE")}))}))},g=function(){var e=0;return t?(t.map((function(t){e+=t.price})),e):"0"};return c.a.createElement("div",null,c.a.createElement("h3",null,"Your bill amount is: $",g()),c.a.createElement("div",null,null!=s.clientToken&&t&&t.length>0?c.a.createElement("div",null,c.a.createElement(z.a,{options:{authorization:s.clientToken},onInstance:function(e){return s.instance=e}}),c.a.createElement("button",{className:"btn btn-success btn-block",onClick:function(){h()}},"Make Payment")):c.a.createElement("h3",null,t&&t.length<1?"Please Add something to the cart":"",p?"":"Please login first before you make a purchase")))};var G=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(!1),s=Object(i.a)(l,2),m=s[0],u=s[1];return Object(n.useEffect)((function(){o(function(){if("undefined"!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[m]),c.a.createElement(f,{title:"Cart Page",description:"Ready to checkout"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-6"},r&&r.length>0?c.a.createElement("div",null,c.a.createElement("h2",null,"This section is to load products"),c.a.createElement("hr",null),r.map((function(e,t){return c.a.createElement(w,{key:t,product:e,addToCart:!1,removeFromCart:!0,reload:m,setReload:u})}))):c.a.createElement("h3",null,"No Products in your cart")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h2",null,c.a.createElement(H,{products:r,reload:m,setReload:u})))))};var q=function(e){return c.a.createElement(l.a,null,c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",exact:!0,component:C}),c.a.createElement(s.b,{path:"/register",exact:!0,component:S}),c.a.createElement(s.b,{path:"/login",exact:!0,component:A}),c.a.createElement(s.b,{path:"/cart",exact:!0,component:G}),c.a.createElement(D,{path:"/user/dashboard",exact:!0,component:I}),c.a.createElement(T,{path:"/admin/dashboard",exact:!0,component:_}),c.a.createElement(T,{path:"/admin/create/category",exact:!0,component:F}),c.a.createElement(T,{path:"/admin/categories",exact:!0,component:J}),c.a.createElement(T,{path:"/admin/create/category",exact:!0,component:F}),c.a.createElement(T,{path:"/admin/create/product",exact:!0,component:L}),c.a.createElement(T,{path:"/admin/products",exact:!0,component:B}),c.a.createElement(T,{path:"/admin/product/update/:productId",exact:!0,component:M}),c.a.createElement(T,{path:"/admin/category/update/:categoryId",exact:!0,component:U})))};a(84);o.a.render(c.a.createElement(q,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.739af906.chunk.js.map
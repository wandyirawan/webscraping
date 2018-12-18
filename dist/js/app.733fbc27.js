(function(t){function e(e){for(var i,a,s=e[0],l=e[1],u=e[2],p=0,f=[];p<s.length;p++)a=s[p],r[a]&&f.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"1d25":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Link Submission")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/listlink"}},[t._v("List Link")])],1),n("router-view")],1)},o=[],a=(n("034f"),n("2877")),s={},l=Object(a["a"])(s,r,o,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,c=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("LinkSubmission")],1)},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",staticClass:"form-link",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-alert",{attrs:{value:t.isError,type:"error"}},[t._v(" Server Error ")]),n("v-text-field",{attrs:{label:"Link Url",rules:t.linkRules,required:""},model:{value:t.link,callback:function(e){t.link=e},expression:"link"}}),n("v-btn",{class:{red:!t.valid,green:t.valid},on:{click:t.submit}},[t._v("\n    submit\n  ")])],1)},v=[],m=(n("b54a"),"http://localhost:8081"),h={name:"LinkSubmission",data:function(){return{valid:!0,isError:!1,link:"",linkRules:[function(t){return!!t||"Link Required"},function(t){return/https:\/\/fabelio.com/.test(t)||"Link must from fabelio only"}]}},methods:{submit:function(){var t=this;this.$refs.form.validate()&&this.axios.post("".concat(m,"/LinkSubmission"),{url:this.link}).then(function(e){e||(t.isError=!0);var n=e.data.product._id;t.$router.push({name:"detail",params:{id:n}})})}}},b=h,_=(n("cc5b"),Object(a["a"])(b,d,v,!1,null,null,null));_.options.__file="LinkSubmission.vue";var k=_.exports,x={name:"home",components:{LinkSubmission:k}},L=x,y=Object(a["a"])(L,p,f,!1,null,null,null);y.options.__file="Home.vue";var S=y.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("LinkDetail")],1)},O=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-wrapper"},[n("h1",[t._v(t._s(t.product.title))]),n("h3",[t._v(t._s(t.product.subtitle))]),n("h5",[t._v(t._s(t.product.price))]),n("span",{domProps:{innerHTML:t._s(t.product.description)}})])},w=[],E="http://localhost:8081",$={name:"LinkDetail",data:function(){return{product:{title:"",subtitle:"",description:"",price:""}}},mounted:function(){var t=this,e=this.$route.params.id;this.axios.get("".concat(E,"/linksubmission/").concat(e)).then(function(e){console.log(e),t.product=e.data.product})}},P=$,C=(n("c361"),Object(a["a"])(P,j,w,!1,null,null,null));C.options.__file="LinkDetail.vue";var D=C.exports,M={name:"detail",components:{LinkDetail:D}},T=M,R=Object(a["a"])(T,g,O,!1,null,null,null);R.options.__file="Detail.vue";var q=R.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ListSubmission")},J=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.products},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[n("router-link",{attrs:{to:{name:"detail",params:{id:e.item._id}}}},[t._v("\n        "+t._s(e.item.title)+"\n      ")])],1),n("td",[t._v(t._s(e.item.price))])]}}])})},A=[],N="http://localhost:8081",U={name:"ListSubmission",data:function(){return{headers:[{text:"Product Name",value:"title"},{text:"Price",value:"price"}],products:[]}},mounted:function(){var t=this;this.axios.get("".concat(N,"/linksubmission")).then(function(e){console.log(e),t.products=e.data.product})}},B=U,F=Object(a["a"])(B,z,A,!1,null,null,null);F.options.__file="ListSubmission.vue";var G=F.exports,I={name:"list",components:{ListSubmission:G}},K=I,Q=Object(a["a"])(K,H,J,!1,null,null,null);Q.options.__file="List.vue";var V=Q.exports;i["default"].use(c["a"]);var W=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:S},{path:"/linkdetails/:id",name:"detail",component:q},{path:"/listlink",name:"detail",component:V}]}),X=n("2f62");i["default"].use(X["a"]);var Y=new X["a"].Store({state:{},mutations:{},actions:{}}),Z=n("ce5b"),tt=n.n(Z),et=(n("bf40"),n("d1e7"),n("bc3a")),nt=n.n(et),it=n("a7fe"),rt=n.n(it);i["default"].config.productionTip=!1,i["default"].use(tt.a),i["default"].use(rt.a,nt.a),new i["default"]({router:W,store:Y,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,n){},a9a5:function(t,e,n){},c361:function(t,e,n){"use strict";var i=n("1d25"),r=n.n(i);r.a},cc5b:function(t,e,n){"use strict";var i=n("a9a5"),r=n.n(i);r.a}});
//# sourceMappingURL=app.733fbc27.js.map
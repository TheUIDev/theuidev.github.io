(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{376:function(t,n,e){"use strict";e(186);var r=e(132);n.a=Object(r.a)("flex")},377:function(t,n,e){"use strict";e(186);var r=e(132);n.a=Object(r.a)("layout")},378:function(t,n,e){var r=e(27);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},381:function(t,n,e){var content=e(392);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("2b451d3a",content,!0,{sourceMap:!1})},382:function(t,n,e){"use strict";var strong=e(383),r=e(378);t.exports=e(384)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var n=strong.getEntry(r(this,"Map"),t);return n&&n.v},set:function(t,n){return strong.def(r(this,"Map"),0===t?0:t,n)}},strong,!0)},383:function(t,n,e){"use strict";var r=e(32).f,o=e(109),c=e(189),l=e(50),d=e(187),f=e(188),v=e(134),m=e(190),w=e(135),h=e(24),k=e(133).fastKey,_=e(378),y=h?"_s":"size",x=function(t,n){var e,r=k(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,v){var m=t(function(t,r){d(t,m,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[y]=0,null!=r&&f(r,e,t[v],t)});return c(m.prototype,{clear:function(){for(var t=_(this,n),data=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete data[e.i];t._f=t._l=void 0,t[y]=0},delete:function(t){var e=_(this,n),r=x(e,t);if(r){var o=r.n,c=r.p;delete e._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),e._f==r&&(e._f=o),e._l==r&&(e._l=c),e[y]--}return!!r},forEach:function(t){_(this,n);for(var e,r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!x(_(this,n),t)}}),h&&r(m.prototype,"size",{get:function(){return _(this,n)[y]}}),m},def:function(t,n,e){var r,o,c=x(t,n);return c?c.v=e:(t._l=c={i:o=k(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[y]++,"F"!==o&&(t._i[o]=c)),t},getEntry:x,setStrong:function(t,n,e){v(t,n,function(t,e){this._t=_(t,n),this._k=e,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?m(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,m(1))},e?"entries":"values",!e,!0),w(n)}}},384:function(t,n,e){"use strict";var r=e(19),o=e(17),c=e(37),l=e(189),meta=e(133),d=e(188),f=e(187),v=e(27),m=e(28),w=e(136),h=e(84),k=e(137);t.exports=function(t,n,e,_,y,x){var C=r[t],j=C,O=y?"set":"add",z=j&&j.prototype,S={},E=function(t){var n=z[t];c(z,t,"delete"==t?function(a){return!(x&&!v(a))&&n.call(this,0===a?0:a)}:"has"==t?function(a){return!(x&&!v(a))&&n.call(this,0===a?0:a)}:"get"==t?function(a){return x&&!v(a)?void 0:n.call(this,0===a?0:a)}:"add"==t?function(a){return n.call(this,0===a?0:a),this}:function(a,b){return n.call(this,0===a?0:a,b),this})};if("function"==typeof j&&(x||z.forEach&&!m(function(){(new j).entries().next()}))){var P=new j,D=P[O](x?{}:-0,1)!=P,F=m(function(){P.has(1)}),M=w(function(t){new j(t)}),V=!x&&m(function(){for(var t=new j,n=5;n--;)t[O](n,n);return!t.has(-0)});M||((j=n(function(n,e){f(n,j,t);var r=k(new C,n,j);return null!=e&&d(e,y,r[O],r),r})).prototype=z,z.constructor=j),(F||V)&&(E("delete"),E("has"),y&&E("get")),(V||D)&&E(O),x&&z.clear&&delete z.clear}else j=_.getConstructor(n,t,y,O),l(j.prototype,e),meta.NEED=!0;return h(j,t),S[t]=j,o(o.G+o.W+o.F*(j!=C),S),x||_.setStrong(j,t,y),j}},391:function(t,n,e){"use strict";var r=e(381);e.n(r).a},392:function(t,n,e){(t.exports=e(12)(!1)).push([t.i,".img-row{margin:1rem 0}.blogContent img{display:block;margin:1rem auto}.blogContent>p>img{display:block;max-width:100%;height:auto}.social-share{margin:1rem 0;font-size:1.2em}.social-icons-size{font-size:40px}",""])},393:function(t,n,e){"use strict";e(11),e(8);var r=e(2),o=(e(83),e(382),e(49),e(5),e(4),e(7),e(40),e(41),e(191),e(1)),c=e(138),l=e(0);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),n.push.apply(n,e)}return n}var f=["sm","md","lg","xl"],v=["start","end","center"];function m(t,n){return f.reduce(function(e,r){return e[t+Object(l.q)(r)]=n(),e},{})}var w=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},h=m("align",function(){return{type:String,default:null,validator:w}}),k=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},_=m("justify",function(){return{type:String,default:null,validator:k}}),y=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},x=m("alignContent",function(){return{type:String,default:null,validator:y}}),C={align:Object.keys(h),justify:Object.keys(_),alignContent:Object.keys(x)},j={align:"align",justify:"justify",alignContent:"align-content"};function O(t,n,e){var r=j[t];if(null!=e){if(n){var o=n.replace(t,"");r+="-".concat(o)}return(r+="-".concat(e)).toLowerCase()}}var z=new Map;n.a=o.default.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach(function(n){Object(r.a)(t,n,source[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(source).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))})}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:w}},h,{justify:{type:String,default:null,validator:k}},_,{alignContent:{type:String,default:null,validator:y}},x),render:function(t,n){var e=n.props,data=n.data,o=n.children,l="";for(var d in e)l+=String(e[d]);var f=z.get(l);return f||function(){var t,n;for(n in f=[],C)C[n].forEach(function(t){var r=e[t],o=O(n,t,r);o&&f.push(o)});f.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),z.set(l,f)}(),t(e.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},403:function(t,n,e){"use strict";e.r(n);e(49),e(58);var r,o=e(18),c={data:function(){return{url:window.location.href,media_url:window.location.host}},asyncData:(r=Object(o.a)(regeneratorRuntime.mark(function t(n){var e,r,o,c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.app,r=n.params,o="".concat(r.year,"-").concat(r.month,"-").concat(r.day,"-").concat(r.slug),t.next=4,e.$axios.$get("/blogposts.json");case 4:return c=t.sent,(l=c[o]).content=l.content.replace("\x3c!--more--\x3e",""),t.abrupt("return",{blog:l});case 8:case"end":return t.stop()}},t)})),function(t){return r.apply(this,arguments)})},l=(e(391),e(57)),d=e(82),f=e.n(d),v=e(185),m=e(370),w=e(376),h=e(106),k=e(377),_=e(393),component=Object(l.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{fluid:"fluid","grid-list-xl":"grid-list-xl"}},[e("v-layout",{attrs:{row:"row",wrap:"wrap"}},[e("v-flex",{attrs:{xs12:"xs12",sm12:"sm12",md12:"md12",lg12:"lg12"}},[e("v-row",{staticClass:"img-row",attrs:{align:"center",justify:"center"}},[e("h1",[t._v(t._s(t.blog.title))])]),t._v(" "),e("v-row",{staticClass:"img-row",attrs:{align:"center",justify:"center"}},[e("v-img",{attrs:{src:t.blog.photo_url,"aspect-ratio":"1","max-width":"500","max-height":"300"}})],1),t._v(" "),e("v-row",{attrs:{align:"center",justify:"center"}},[e("social-sharing",{attrs:{url:t.url,title:"❤️ this post - "+t.blog.title+" ",quote:t.blog.title,hashtags:t.blog.tags,media:t.media_url+t.blog.photo_url,"twitter-user":"shreerangp"},inlineTemplate:{render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-row",{attrs:{align:"center",justify:"center"}},[e("div",{staticClass:"social-share"},[e("v-btn",{staticClass:"mx-2 mdi mdi-share-variant",attrs:{dark:"",icon:""}}),t._v("\n              Show some ❤️\n            ")],1),t._v(" "),e("network",{attrs:{network:"facebook"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-facebook-box social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"linkedin"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-linkedin-box social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"twitter"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-twitter-box social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"reddit"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-reddit social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"whatsapp"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-whatsapp social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"pinterest"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-pinterest-box social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"skype"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-skype social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"sms"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-message-text-outline social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"email"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-email-outline social-icons-size",attrs:{dark:"",icon:""}})],1)],1)},staticRenderFns:[]}})],1),t._v(" "),e("div",{staticClass:"blogContent",domProps:{innerHTML:t._s(t.$md.render(t.blog.content))}}),t._v(" "),e("v-row",{attrs:{align:"center",justify:"center"}},[e("social-sharing",{attrs:{url:t.url,title:"❤️ this post - "+t.blog.title+" ",quote:t.blog.title,hashtags:t.blog.tags,media:t.media_url+t.blog.photo_url,"twitter-user":"shreerangp"},inlineTemplate:{render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-row",{attrs:{align:"center",justify:"center"}},[e("div",{staticClass:"social-share"},[e("v-btn",{staticClass:"mx-2 mdi mdi-share-variant",attrs:{dark:"",icon:""}}),t._v("\n              Show some ❤️\n            ")],1),t._v(" "),e("network",{attrs:{network:"facebook"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-facebook-box social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"linkedin"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-linkedin-box social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"twitter"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-twitter-box social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"reddit"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-reddit social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"whatsapp"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-whatsapp social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"pinterest"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-pinterest-box social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"skype"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-skype social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"sms"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-message-text-outline social-icons-size",attrs:{dark:"",icon:""}})],1),t._v(" "),e("network",{attrs:{network:"email"}},[e("v-btn",{staticClass:"mx-2 mdi mdi-email-outline social-icons-size",attrs:{dark:"",icon:""}})],1)],1)},staticRenderFns:[]}})],1)],1)],1)],1)},[],!1,null,null,null);n.default=component.exports;f()(component,{VBtn:v.a,VContainer:m.a,VFlex:w.a,VImg:h.a,VLayout:k.a,VRow:_.a})}}]);
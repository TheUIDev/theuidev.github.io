(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{329:function(t,e,n){var r=n(333);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(6).default)("389d12a4",r,!0,{})},332:function(t,e,n){"use strict";var r=n(329);n.n(r).a},333:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".contentCard[data-v-0f7b3d2f]{min-height:84px}",""])},339:function(t,e,n){"use strict";n.r(e);n(28),n(34),n(20),n(49),n(60);var r=n(17),a=n.n(r),o=n(331),s={layout:"page",components:{InfiniteLoading:n.n(o).a},methods:{goTo:function(t){this.$router.push(t)},getRndInteger:function(t,e){return Math.floor(Math.random()*(e-t))+t},onInfinite:function(t){var e=this,n=this.getRndInteger(900,1e3);setTimeout(function(){e.offset=e.offset+e.limit;var n=e.blogposts.slice(e.offset,e.offset+e.limit);n.length>0?(e.active=e.active.concat(n),t.loaded()):t.complete()},n)}},data:function(){return{months:["January","February","March","April","May","June","July","August","September","October","November","December"]}},asyncData:function(){var t=a()(regeneratorRuntime.mark(function t(e){var n,r,a,o,s,i,c,l,u,p,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,e.store,t.next=3,n.$axios.$get("/blogposts.json");case 3:for(r=t.sent,a=[],o=Object.keys(r),s=0;s<o.length;s++)i=o[s],c=r[i],l=i.split("-"),u=l.slice(0,3),p=l.slice(3),f=(f="/blog/".concat(u[0],"/").concat(u[1],"/").concat(u[2],"/").concat(p.join("-"))).replace(".md",".html"),c.href=f,a.push(c);return a=a.reverse(),t.abrupt("return",{blogposts:a,active:a.slice(0,7),offset:0,limit:8});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},i=(n(332),n(41)),c=n(119),l=n.n(c),u=n(113),p=n(112),f=n(328),d=n(103),m=n(338),v=n(104),g=n(110),h=n(163),b=n(111),x=n(323),y=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.active,function(e,r){return[n("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[n("v-card",{key:r,attrs:{hover:!0}},[n("v-img",{attrs:{src:e.photo_url,"aspect-ratio":4/3,srcset:e.photoSrcSet,sizes:"(max-width:412px) 400px,  (max-width:768px) 768px, 1040px"}}),n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"contentCard"},[n("h2",{staticClass:"mb-0"},[t._v(t._s(e.title))]),n("div",[t._v(t._s(t.months[new Date(e.date).getMonth()])+" "+t._s(new Date(e.date).getDate())+", "+t._s(new Date(e.date).getFullYear()))]),t._l(e.tags,function(e,r){return[n("v-chip",{key:r,attrs:{outline:"",color:"primary"}},[t._v(t._s(e))])]})],2)]),n("v-card-actions",[n("v-btn",{attrs:{raised:"",color:"primary"},on:{click:function(n){t.goTo(e.href)}}},[t._v("Read more")])],1)],1),n("v-spacer",{key:"space-"+r})],1)]}),n("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[n("InfiniteLoading",{ref:"infiniteLoading",on:{infinite:t.onInfinite}},[n("p",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("No more blogposts.")]),n("p",{attrs:{slot:"no-results"},slot:"no-results"},[t._v("No more blogposts.")])])],1)],2)],1)},[],!1,null,"0f7b3d2f",null);e.default=y.exports;l()(y,{VBtn:u.a,VCard:p.a,VCardActions:f.a,VCardTitle:d.a,VChip:m.a,VContainer:v.a,VFlex:g.a,VImg:h.a,VLayout:b.a,VSpacer:x.a})}}]);
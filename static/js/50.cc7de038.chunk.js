"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{6160:function(n,t,r){r.d(t,{_r:function(){return l},bI:function(){return p},jC:function(){return f},np:function(){return h},wr:function(){return s},yA:function(){return o}});var e=r(5861),a=r(4687),i=r.n(a),c=r(2388);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="941391c38298a3626ffc21c5189f1c8b",o="https://image.tmdb.org/t/p/w500",s=function(){var n=(0,e.Z)(i().mark((function n(){var t,r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="trending/movie/day?api_key=".concat(u),n.next=3,c.Z.get(t);case 3:return r=n.sent,e=r.data,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),n.next=3,c.Z.get(r);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(t,"?api_key=").concat(u),n.next=3,c.Z.get(r);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(t,"/credits?api_key=").concat(u),n.next=3,c.Z.get(r);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"),n.next=3,c.Z.get(r);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6050:function(n,t,r){r.r(t),r.d(t,{default:function(){return y}});var e,a,i,c,u=r(5861),o=r(9439),s=r(4687),p=r.n(s),f=r(2791),l=r(7689),h=r(6160),d=function(n){return n.map((function(n){return{id:n.id,character:n.character,name:n.name,profile_path:n.profile_path}}))},v=r(2881),m=r(168),x=r(7402),g=x.Z.section(e||(e=(0,m.Z)(["\n  padding: 20px 0;\n"]))),w=x.Z.li(a||(a=(0,m.Z)(["\n  margin-bottom: 15px;\n"]))),Z=x.Z.img(i||(i=(0,m.Z)(["\n  width: 150px;\n  height: auto;\n"]))),b=x.Z.p(c||(c=(0,m.Z)(["\n  margin-top: 10px;\n"]))),k=r(184),y=function(){var n=(0,l.UO)().movieId,t=(0,f.useState)([]),r=(0,o.Z)(t,2),e=r[0],a=r[1],i=(0,f.useState)(null),c=(0,o.Z)(i,2),s=c[0],m=c[1],x=(0,f.useState)(!1),y=(0,o.Z)(x,2),j=y[0],_=y[1];return(0,f.useEffect)((function(){function t(){return(t=(0,u.Z)(p().mark((function t(){var r,e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,_(!0),t.next=4,h._r(n);case 4:r=t.sent,e=d(r.cast),a(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),m({error:t.t0});case 12:return t.prev=12,_(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),(0,k.jsxs)(g,{children:[s&&(0,k.jsxs)("p",{children:["Whoops, something went wrong: ",s.message]}),j&&(0,k.jsx)(v.a,{}),e.length>0?(0,k.jsx)("ul",{children:e.map((function(n){var t=n.id,r=n.character,e=n.name,a=n.profile_path;return(0,k.jsxs)(w,{children:[(0,k.jsx)(Z,{src:a?h.yA+a:"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",alt:e}),(0,k.jsxs)(b,{children:[(0,k.jsx)("b",{children:"Character: "}),r]}),(0,k.jsxs)(b,{children:[(0,k.jsx)("b",{children:"Actor name: "})," ",e]})]},t)}))}):(0,k.jsx)(b,{children:"No cast information available"})]})}},9245:function(n,t,r){r.d(t,{a:function(){return f}});var e,a,i=r(8966),c=r(168),u=r(7402),o=u.Z.div(e||(e=(0,c.Z)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(255, 102, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: opacity 250ms linear, visibility 250ms linear;\n"]))),s=u.Z.div(a||(a=(0,c.Z)(["\n  margin: 0 auto;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  translate: -50% -50%;\n"]))),p=r(184),f=function(){return(0,p.jsx)(o,{children:(0,p.jsx)(s,{children:(0,p.jsx)(i.RL,{height:"200",width:"200",radius:"48",color:"#FF6600",ariaLabel:"watch-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})})}},2881:function(n,t,r){r.d(t,{a:function(){return e.a}});var e=r(9245)}}]);
//# sourceMappingURL=50.cc7de038.chunk.js.map
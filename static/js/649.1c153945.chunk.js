"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[649],{6160:function(n,e,t){t.d(e,{_r:function(){return d},bI:function(){return l},jC:function(){return p},np:function(){return f},wr:function(){return u},yA:function(){return s}});var r=t(5861),a=t(4687),i=t.n(a),o=t(2388);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="941391c38298a3626ffc21c5189f1c8b",s="https://image.tmdb.org/t/p/w500",u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="trending/movie/day?api_key=".concat(c),n.next=3,o.Z.get(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),n.next=3,o.Z.get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"?api_key=").concat(c),n.next=3,o.Z.get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/credits?api_key=").concat(c),n.next=3,o.Z.get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"),n.next=3,o.Z.get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9245:function(n,e,t){t.d(e,{a:function(){return p}});var r,a,i=t(8966),o=t(168),c=t(7402),s=c.Z.div(r||(r=(0,o.Z)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(255, 102, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: opacity 250ms linear, visibility 250ms linear;\n"]))),u=c.Z.div(a||(a=(0,o.Z)(["\n  margin: 0 auto;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  translate: -50% -50%;\n"]))),l=t(184),p=function(){return(0,l.jsx)(s,{children:(0,l.jsx)(u,{children:(0,l.jsx)(i.RL,{height:"200",width:"200",radius:"48",color:"#FF6600",ariaLabel:"watch-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})})}},2881:function(n,e,t){t.d(e,{a:function(){return r.a}});var r=t(9245)},1649:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,i,o,c,s,u,l,p,d,f=t(5861),h=t(9439),v=t(4687),x=t.n(v),g=t(2791),m=t(7689),b=t(3853),w=t(6160),Z=function(n){return{poster_path:n.poster_path,title:n.title,release_date:n.release_date,overview:n.overview,genres:n.genres,vote_average:n.vote_average}},j=t(2881),k=t(168),y=t(7402),_=t(1087),S=y.Z.section(r||(r=(0,k.Z)(["\n  display: flex;\n  border-bottom: 2px solid black;\n  padding: 20px 0;\n"]))),F=y.Z.img(a||(a=(0,k.Z)(["\n  width: 250px;\n  height: 380px;\n"]))),U=y.Z.div(i||(i=(0,k.Z)(["\n  padding: 20px;\n"]))),C=y.Z.h2(o||(o=(0,k.Z)(["\n  margin-bottom: 20px;\n"]))),L=y.Z.p(c||(c=(0,k.Z)(["\n  margin-bottom: 10px;\n"]))),A=y.Z.section(s||(s=(0,k.Z)(["\n  border-bottom: 2px solid black;\n  padding: 20px 0;\n"]))),O=y.Z.ul(u||(u=(0,k.Z)(["\n  display: flex;\n"]))),R=y.Z.li(l||(l=(0,k.Z)(["\n  margin-left: 25px;\n"]))),E=(0,y.Z)(_.OL)(p||(p=(0,k.Z)(["\n  width: 100px;\n  height: 10px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: 1px solid orange;\n  color: black;\n  font-weight: 500;\n  transition: color 250ms linear, background-color 250ms linear;\n\n  &.active {\n    background-color: orange;\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: orange;\n  }\n"]))),G=(0,y.Z)(_.rU)(d||(d=(0,k.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orange;\n  }\n"]))),I=t(184),T=function(){var n,e,t=(0,m.TH)(),r=(0,m.UO)().movieId,a=(0,g.useState)(null),i=(0,h.Z)(a,2),o=i[0],c=i[1],s=(0,g.useState)(!1),u=(0,h.Z)(s,2),l=u[0],p=u[1],d=(0,g.useState)(null),v=(0,h.Z)(d,2),k=v[0],y=v[1];(0,g.useEffect)((function(){function n(){return(n=(0,f.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,w.jC(r);case 4:e=n.sent,c(Z(e)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),y({error:n.t0});case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[r]);var _,T=null!==(n=null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,I.jsxs)(I.Fragment,{children:[k&&(0,I.jsxs)("p",{children:["Whoops, something went wrong: ",k.message]}),l&&(0,I.jsx)(j.a,{}),o&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(G,{to:T,children:[(0,I.jsx)(b.YFh,{size:"24"}),"Go back"]}),(0,I.jsxs)(S,{children:[(0,I.jsx)(F,{src:o.poster_path?w.yA+o.poster_path:"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",alt:o.title,width:"250"}),(0,I.jsxs)(U,{children:[(0,I.jsxs)(C,{children:[o.title,"(",new Date(o.release_date).getFullYear(),")"]}),(0,I.jsxs)(L,{children:[(0,I.jsx)("b",{children:"User Score: "}),o.vote_average.toFixed(1)]}),(0,I.jsxs)(L,{children:[(0,I.jsx)("b",{children:"Overview: "}),o.overview]}),(0,I.jsxs)(L,{children:[(0,I.jsx)("b",{children:" Ganres: "}),(_=o.genres,_.map((function(n){return n.name})).join(", "))]})]})]}),(0,I.jsxs)(A,{children:[(0,I.jsx)(C,{children:"Additional information"}),(0,I.jsxs)(O,{children:[(0,I.jsx)(R,{children:(0,I.jsx)(E,{to:"reviews",children:"Reviews"})}),(0,I.jsx)(R,{children:(0,I.jsx)(E,{to:"cast",children:"Cast"})})]})]}),(0,I.jsx)(g.Suspense,{fallback:null,children:(0,I.jsx)(m.j3,{})})]})]})}}}]);
//# sourceMappingURL=649.1c153945.chunk.js.map
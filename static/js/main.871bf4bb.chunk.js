(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(2),i=s.n(a),r=s(13),c=s.n(r),o=s(4),m=s.n(o),l=s(14),d=s(15),j=s(16),u=s(19),v=s(18),h=s(17),b=s.n(h),p=(s(44),function(e){var t=e.year,s=e.title,a=e.summary,i=e.poster,r=e.genres;return Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:i,title:s,alt:s}),Object(n.jsxs)("div",{className:"movie__data",children:[Object(n.jsx)("h3",{className:"movie__title",children:s}),Object(n.jsx)("h5",{className:"movie__year",children:t}),Object(n.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(n.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(n.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})}),O=(s(45),function(e){Object(u.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovie=Object(l.a)(m.a.mark((function t(){var s,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts.mx/api/v2/list_movies.json");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e.renderMovies=function(e){return e.map((function(e){return Object(n.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader_text",children:"Loading.. "})}):Object(n.jsx)("div",{className:"movies",children:this.renderMovies(s)})})}}]),s}(i.a.Component));c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.871bf4bb.chunk.js.map
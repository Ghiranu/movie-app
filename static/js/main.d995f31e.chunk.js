(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),i=a.n(c),s=a(9),r=a.n(s),o=(a(78),a(36)),l=a(54),d=a(55),j=a(64),u=a(62),h=(a(79),a(126)),v=a(130),b=a(131),O=a(132),m=a(60),x=a.n(m),f=function(){return Object(n.jsx)(h.a,{position:"static",children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(n.jsx)(x.a,{})}),Object(n.jsx)(O.a,{variant:"h6",children:"Movie\ud83c\udfa5List"})]})})},p=a(16),g=a(133),_=a(134),S=a(135),M=a(136),N=a(137),y=a(33),A=a.n(y),I=function(e){var t="https://api.themoviedb.org/3/search/movie?api_key=".concat("1799c91dd9edfec9563ae3c879d8fc43","&query=").concat(e,"&language=en-US");return A.a.get(t)},B=a(34),k=a.n(B),w=a(11),C=a.n(w),D=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("ol",{className:C.a.cards,children:e.movies.map((function(t){return null!=t.poster_path?Object(n.jsx)(g.a,{item:!0,xs:3,children:Object(n.jsx)(_.a,{variant:"outlined",className:C.a.root,children:Object(n.jsx)(S.a,{className:C.a.content,children:Object(n.jsxs)("li",{className:C.a.listItem,children:[Object(n.jsx)("img",{src:"http://image.tmdb.org/t/p/w154/".concat(t.poster_path),alt:"logo"}),Object(n.jsx)(O.a,{variant:"h5",children:Object(n.jsx)("b",{children:t.title})}),Object(n.jsxs)(O.a,{variant:"h6",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Release: "}),t.release_date]}),Object(n.jsx)("b",{children:"Rating:"}),t.vote_average]}),Object(n.jsxs)(M.a,{className:C.a.addMovie,color:"secondary",onClick:function(a){a.preventDefault(),e.onMovieAdd(t)},children:[Object(n.jsx)(k.a,{}),"Add Movie"]})]},t.id)})})}):null}))})})},L=function(e){var t=Object(c.useState)(""),a=Object(p.a)(t,2),i=a[0],s=a[1],r=Object(c.useState)([]),o=Object(p.a)(r,2),l=o[0],d=o[1];return Object(n.jsxs)("div",{className:C.a.main,children:[Object(n.jsx)(N.a,{size:"small",label:"Search for a movie",variant:"outlined",color:"primary",value:i,onChange:function(e){s(e.target.value)},onKeyDown:function(e){return"Enter"===e.key?I(i).then((function(e){return d(e.data.results)})):null}}),Object(n.jsxs)("div",{className:C.a.box,children:[Object(n.jsx)(M.a,{size:"medium",variant:"contained",color:"primary",onClick:function(){return I(i).then((function(e){return d(e.data.results)}))},children:"Search"}),Object(n.jsx)(D,{movies:l,onMovieAdd:function(t){d([]),e.onMovieAdd(t)}})]})]})},J=a(61),R=a.n(J),E=a(63),z=function(e){var t=function(e){var t=Object(c.useState)(localStorage.getItem(e)||null),a=Object(p.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){localStorage.setItem(e,n)}),[n,e]),[n,i]}(e.movie.id),a=Object(p.a)(t,2),i=a[0],s=a[1],r=Object(c.useState)(null),l=Object(p.a)(r,2),d=l[0],j=l[1],u=function(e){return s(e.target.value)};return Object(n.jsx)("div",{className:"App",children:Object(o.a)(Array(5)).map((function(e,t){var a=t+1;return Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"radio",name:"rating",value:a,onClick:u}),Object(n.jsx)(E.a,{className:C.a.star,color:a<=(d||i)?"#ffc107":"#e4e5e9",size:20,onMouseEnter:function(){return j(a)},onMouseLeave:function(){return j(null)}})]})}))})},F=function(e){var t=e.movie;return Object(n.jsx)(g.a,{item:!0,xs:3,children:Object(n.jsx)(_.a,{variant:"outlined",children:Object(n.jsx)(S.a,{className:C.a.content,children:Object(n.jsxs)("li",{className:C.a.listItem,children:[Object(n.jsx)("img",{src:"http://image.tmdb.org/t/p/w185/".concat(t.poster_path),alt:"logo"}),Object(n.jsx)(O.a,{variant:"h5",children:Object(n.jsx)("div",{children:Object(n.jsx)("b",{children:t.title})})}),Object(n.jsxs)(O.a,{variant:"h6",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Release: "}),t.release_date]}),Object(n.jsx)("b",{children:"Rating:"}),t.vote_average]}),Object(n.jsx)(M.a,{onClick:function(){return e.onMovieDelete(t.id)},children:Object(n.jsx)(R.a,{className:C.a.delete})}),Object(n.jsx)(z,{movie:t})]},t.id)})})})},P=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:C.a.title,children:"Saved movies"}),e.savedMovies&&e.savedMovies.length>0?Object(n.jsx)("ul",{className:C.a.cards,children:e.savedMovies.map((function(t){return Object(n.jsx)(F,{movie:t,onMovieDelete:e.onMovieDelete},t.id)}))}):"No saved movies"]})},U="https://api.themoviedb.org/3/movie/popular?api_key=".concat("1799c91dd9edfec9563ae3c879d8fc43","&language=en-US&page=1");var T=function(e){var t=Object(c.useState)([]),a=Object(p.a)(t,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){A.a.get(U).then((function(e){s(e.data.results)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:C.a.title,children:"Popular movies of the day"}),Object(n.jsx)("ol",{className:C.a.cards,children:i.map((function(t){return Object(n.jsx)(g.a,{item:!0,xs:3,children:Object(n.jsx)(_.a,{variant:"outlined",className:C.a.root,children:Object(n.jsx)(S.a,{className:C.a.content,children:Object(n.jsxs)("li",{className:C.a.listItem,children:[Object(n.jsx)("img",{src:"http://image.tmdb.org/t/p/w154/".concat(t.poster_path),alt:"logo"}),Object(n.jsx)(O.a,{variant:"h5",children:Object(n.jsx)("b",{children:t.title})}),Object(n.jsxs)(O.a,{variant:"h6",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Release: "}),t.release_date]}),Object(n.jsx)("b",{children:"Rating:"}),t.vote_average]}),Object(n.jsxs)(M.a,{className:C.a.addMovie,color:"secondary",onClick:function(a){a.preventDefault(),e.onMovieAdd(t)},children:[Object(n.jsx)(k.a,{}),"Add Movie"]})]},t.id)})})})}))})]})},V=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).handleAddMovie=function(e){var t=n.state.movies;n.setState({movies:[].concat(Object(o.a)(t),[e])},(function(){window.localStorage.setItem("saved-movies",JSON.stringify(n.state.movies))}))},n.handleDeleteMovie=function(e){n.state.movies.findIndex((function(t){return t.id===e}));n.setState({movies:n.state.movies.filter((function(t){return t.id!==e}))},(function(){window.localStorage.setItem("saved-movies",JSON.stringify(n.state.movies))}))};var c=JSON.parse(window.localStorage.getItem("saved-movies"));return c&&Array.isArray(c)?n.state={movies:c}:n.state={movies:[]},n}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(f,{}),Object(n.jsx)(L,{onMovieAdd:this.handleAddMovie}),Object(n.jsx)(T,{onMovieAdd:this.handleAddMovie}),Object(n.jsx)(P,{savedMovies:this.state.movies,onMovieDelete:this.handleDeleteMovie})]})}}]),a}(i.a.Component),q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,139)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};a.p;r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(V,{onLoad:fetch("https://api.themoviedb.org/3/movie/popular?api_key=1799c91dd9edfec9563ae3c879d8fc43&language=en-US&page=1").then((function(e){return e.json()})).then((function(e){return console.log(e.results)}))})}),document.getElementById("root")),q()},11:function(e,t,a){e.exports={main:"SearchBox_main__1WQIi",cards:"SearchBox_cards__2jss-",content:"SearchBox_content__1LVS4",box:"SearchBox_box__1N-VJ",listItem:"SearchBox_listItem__Dydyh",addMovie:"SearchBox_addMovie__2G5vH",root:"SearchBox_root__BsbsL",title:"SearchBox_title__3amhC",delete:"SearchBox_delete__1c2MC",star:"SearchBox_star__2sz06"}},78:function(e,t,a){},79:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.d995f31e.chunk.js.map
(this["webpackJsonpmovie-search-app"]=this["webpackJsonpmovie-search-app"]||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/spinner.235b9b3e.gif"},44:function(e,t,a){e.exports=a(79)},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),l=a.n(c),i=a(23),o=a(13),s=a.n(o),u=a(16),m=a(9),d=a(17),E=a.n(d),f=a(12),v=function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"navbar"},r.a.createElement("li",null,r.a.createElement(f.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/favourites"},"Favourites")))),r.a.createElement("header",{className:"center"},r.a.createElement("h1",null,"Movie Search")))},p=a(39),b=a.n(p),g=a(38),h=a.n(g),O=function(e){var t=e.item,a=e.addOrRemoveFavourite,n=e.isFavourite;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.Poster,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement(f.b,{to:"/".concat(t.imdbID)},r.a.createElement("h1",null,t.Title)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Type:")," ",t.Type),r.a.createElement("li",null,r.a.createElement("strong",null,"Year:")," ",t.Year),r.a.createElement("li",null,r.a.createElement("strong",null,"imdbID:")," ",t.imdbID),r.a.createElement("span",{className:"fav-icon",onClick:function(){return a(t,n)}},n?r.a.createElement(h.a,null):r.a.createElement(b.a,null))))))},j=a(40),w=a.n(j),N=function(){return r.a.createElement("img",{src:w.a,className:"spinner",alt:"Loading"})},S=a(19),y=a.n(S),F=function(e){var t=e.items,a=e.isLoading,c=e.addOrRemoveFavourite,l=e.favourites,i=function(e){return!!l.find((function(t){return y.a.isEqual(t,e)}))};return a?r.a.createElement(N,null):r.a.createElement(n.Fragment,null,t&&!!t.length&&r.a.createElement("section",{className:"cards"},t.map((function(e){return e&&r.a.createElement(O,{key:e.imdbID,item:e,addOrRemoveFavourite:c,isFavourite:i(e)})}))))},k=function(e){var t=e.getQuery,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)(""),s=Object(m.a)(o,2),u=s[0],d=s[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search...",value:l,onChange:function(e){return i(e.target.value)},autoFocus:!0}),r.a.createElement("select",{className:"search-dropdown",name:"genres",id:"genres",onChange:function(e){return d(e.target.value)}},r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:"movie"},"Movie"),r.a.createElement("option",{value:"series"},"Series"),r.a.createElement("option",{value:"episode"},"Episode")),r.a.createElement("button",{className:"search-button",type:"submit",onClick:function(e){e.preventDefault(),u.length&&l.length?t("".concat(l,"&type=").concat(u)):t(l)}},"Search")))},x=a(2);var R=function(){return r.a.createElement("div",{className:"not-found"},"Page not found")},I=a(41),D=a(42),P=a.n(D),T=new function e(){Object(I.a)(this,e),this.webStorage=new P.a(window.localStorage||window.sessionStorage)};var C=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(x.f)().id;return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("http://www.omdbapi.com/?apikey=5ffea7a1&i=".concat(l));case 2:t=e.sent,a=(t||{}).data,n=(a=void 0===a?{}:a).Error,"False"===a.Response?alert(n+"Try Again!!"):c(null===t||void 0===t?void 0:t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement("div",{className:"details-container"},r.a.createElement("img",{src:a.Poster,alt:a.Title}),r.a.createElement("div",{className:"details"},Object.keys(a).map((function(e){return!["Ratings","Poster"].includes(e)&&r.a.createElement("p",{key:e,className:"detail"},r.a.createElement("span",{className:"detail-key"},e)," : \xa0",r.a.createElement("span",{className:"detail-text"},a[e]))}))))},J=(a(77),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(m.a)(l,2),d=o[0],f=o[1],p=Object(n.useState)(""),b=Object(m.a)(p,2),g=b[0],h=b[1],O=Object(n.useState)([]),j=Object(m.a)(O,2),w=j[0],N=j[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(!0),l=null,!g.length){e.next=6;break}return e.next=5,E()("http://www.omdbapi.com/?apikey=5ffea7a1&s=".concat(g,"&page=1"));case 5:l=e.sent;case 6:"False"===(null===(t=l)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.Response)&&alert((null===(n=l)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.Error)+" Please try again with diffrent input!"),l&&c(l.data.Search),f(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g]),Object(n.useEffect)((function(){N(JSON.parse(T.webStorage.getItem("Favourites")||"[]"))}),[]),Object(n.useEffect)((function(){T.webStorage.setItem("Favourites",JSON.stringify(w))}),[w]);var S=function(e,t){if(t){var a=Object(i.a)(w);a.forEach((function(t,n){y.a.isEqual(e,t)&&a.splice(n,1)})),N(a)}else N([].concat(Object(i.a)(w),[e]))};return r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/favourites"},r.a.createElement(F,{isLoading:d,items:w,addOrRemoveFavourite:S,favourites:w})),r.a.createElement(x.a,{path:"/",exact:!0},r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{getQuery:function(e){return h(e)}}),r.a.createElement(F,{isLoading:d,items:a,addOrRemoveFavourite:S,favourites:w}))),r.a.createElement(x.a,{path:"/:id"},r.a.createElement(C,null)),r.a.createElement(x.a,{path:"*"},r.a.createElement(R,null))))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,null,r.a.createElement(J,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a89abc40.chunk.js.map
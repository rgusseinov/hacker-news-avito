(this["webpackJsonphacker-news-avito"]=this["webpackJsonphacker-news-avito"]||[]).push([[0],{42:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},74:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(19),s=n.n(r),a=n(2),i=n(12),o=(n(42),n.p+"static/media/logo.601fa4f1.png"),l=n(1),u=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row header-row",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsxs)(i.b,{to:"/hacker-news-avito/",className:"logo-link",children:[Object(l.jsx)("img",{src:o,alt:"Logo",className:"logo-img"}),Object(l.jsx)("span",{className:"logo-text",children:" Hacker News "})]})}),Object(l.jsx)("nav",{className:"menu"})]})})})};function j(e){var t=Date.now()/1e3-Number(e);return t<3600?d(~~(t/60)," minute"):t<86400?d(~~(t/3600)," hour"):d(~~(t/86400)," day")}function d(e,t){return 1===e?e+t:e+t+"s"}n(52),n(53);var m=function(e){var t=e.item,n=j(t.time);return Object(l.jsxs)("div",{className:"news-item",children:[Object(l.jsxs)("div",{className:"news-item__box-rating",children:[Object(l.jsx)("div",{className:"rating up",children:t.score}),Object(l.jsx)("span",{children:"Points"})]}),Object(l.jsxs)("div",{className:"news-item__box-content",children:[Object(l.jsx)("a",{href:"".concat(t.url),target:"_blank",rel:"noreferrer",children:Object(l.jsxs)("h2",{children:[" ",t.title," "]})}),Object(l.jsx)("div",{className:"news-item__box-footer",children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"icon icon-user"}),Object(l.jsxs)("span",{children:[" ",t.by," "]})]}),Object(l.jsx)("li",{children:Object(l.jsxs)(i.b,{to:"/item/".concat(t.id),children:[Object(l.jsx)("i",{className:"icon icon-comment"}),Object(l.jsxs)("span",{children:[" ",t.descendants?"".concat(t.descendants," Comments"):"No comments yet"," "]})]})}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"icon icon-time"}),Object(l.jsxs)("span",{children:[" ",n," ago"]})]})]})})]}),Object(l.jsx)("div",{className:"news-item__box-action",children:Object(l.jsx)("a",{href:"".concat(t.url),target:"_blank",rel:"noreferrer",children:"Open link"})})]})},b=(n(54),function(){return Object(l.jsx)("div",{className:"error",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("h1",{className:"error-title",children:[Object(l.jsx)("span",{children:"404"})," ",Object(l.jsx)("br",{})," Ooops! Page not found"]}),Object(l.jsx)("p",{className:"error-text",children:"This page does not exist or it is not unavailable"}),Object(l.jsx)(i.b,{to:"/",className:"error-link",children:"Go back to main page"})]})})}),O=n(11),h=n(21),f=Object(h.a)([function(e){return e.newsReducer}],(function(e){return e}));function x(e,t){return e.time>t.time?-1:e.time<t.time?1:0}var p=function(){var e=Object(O.c)(f),t=e.news,n=e.loading,c=e.isFail;return{sortedItems:Object.values(t).slice().sort(x),loading:n,isFail:c}},v=n(36),N=n.n(v),w=function(){return Object(l.jsx)("div",{className:"content-loader",children:Object(l.jsx)(N.a,{type:"Oval",color:"#ed702d",height:40,width:40})})},g=function(){var e=p(),t=e.sortedItems,n=e.loading,c=e.isFail;return Object(l.jsx)("div",{className:"item-list",children:n?Object(l.jsx)(w,{}):c?Object(l.jsx)(b,{}):t.map((function(e){return Object(l.jsx)(m,{item:e},e.id)}))})},y=(n(74),function(e){var t=e.title,n=e.handleRefreshNews;return Object(l.jsxs)("div",{className:"filter",children:[Object(l.jsx)("div",{className:"filter-label",children:Object(l.jsx)("h4",{children:t})}),Object(l.jsx)("div",{className:"filter-button",children:Object(l.jsx)("button",{className:"button",onClick:n,children:"Refresh"})})]})}),_=n(3),k=n.n(_),C=n(6),F=n(13),S="LOAD_NEWS_START",E="LOAD_NEWS_SUCCESS",I="LOAD_NEWS_FAILURE",T="LOAD_NEWS_ITEM_SUCCESS",L="LOAD_NEWS_ITEM_FAILURE",R="LOAD_COMMENTS_SUCCESS",A="LOAD_COMMENTS_FAILURE",D=function(e){return{type:R,payload:e}},M=function(){return{type:A}},P="https://hacker-news.firebaseio.com/v0",U=6e4,W=n(20),B=n.n(W),H=function(){var e=Object(C.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("".concat(P,"/item/").concat(t,".json"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function e(t,n){var c;return{id:t.id.toString(),text:t.text,by:t.by,time:t.time,children:null===(c=t.kids)||void 0===c?void 0:c.map((function(t){return e(n[t],n)}))}},X=function(){var e=Object(C.a)(k.a.mark((function e(t){var n,c,r,s,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return H(e)})),e.next=3,Promise.all(n);case 3:return c=e.sent,e.next=6,Promise.all(c.map((function(e){return e})));case 6:if(r=e.sent,e.prev=7,s=[],r.forEach((function(e){s=s.concat((null===e||void 0===e?void 0:e.kids)||[])})),s.length){e.next=12;break}return e.abrupt("return",r);case 12:return e.next=14,X(s);case 14:return a=e.sent,e.abrupt("return",a.concat(r));case 18:e.prev=18,e.t0=e.catch(7),console.error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ",e.t0);case 21:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(a.f)().id,t=Object(O.b)(),n=Object(c.useRef)(),r=Object(c.useState)(!1),s=Object(F.a)(r,2),i=s[0],o=s[1],l=Object(O.c)((function(e){return e.newsItemReducer})),u=l.comments,j=l.isCommentsFailed,d=u[e],m=d||[];function b(){return h.apply(this,arguments)}function h(){return(h=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:n.current=setTimeout((function(){b()}),U);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){if(!d)return b(),function(){return clearTimeout(n)}}),[d]);var f=function(){var n=Object(C.a)(k.a.mark((function n(){var c,r;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,H(e);case 4:if((c=n.sent).kids){n.next=7;break}return n.abrupt("return",[]);case 7:return n.prev=7,n.next=10,X(c.kids);case 10:r=n.sent,t(D({id:e,item:r})),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(7),t(M());case 18:n.next=23;break;case 20:n.prev=20,n.t1=n.catch(0),t(M());case 23:return n.prev=23,o(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[0,20,23,26],[7,15]])})));return function(){return n.apply(this,arguments)}}(),x=function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return clearTimeout(n.current),e.next=3,b();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=null===m||void 0===m?void 0:m.length;return{commentList:function(e,t){var n={};return e.forEach((function(e){n[e.id]=e})),e.filter((function(e){var n;return(null===e||void 0===e||null===(n=e.parent)||void 0===n?void 0:n.toString())===t})).map((function(e){return J(e,n)}))}(m,e),loading:i,isCommentsFailed:j,commentsCount:p,handleRefreshComments:x}},V=function(e){var t,n,r=e.comment,s=j(r.time),a=Object(c.useState)(!1),i=Object(F.a)(a,2),o=i[0],u=i[1];return Object(l.jsxs)("div",{className:"comment",children:[Object(l.jsxs)("div",{className:"comment-author",children:[Object(l.jsx)("span",{className:"name",children:r.by}),Object(l.jsxs)("span",{className:"time",children:[s," ago"]})]}),Object(l.jsx)("div",{className:"comment-text",dangerouslySetInnerHTML:{__html:r.text}}),(null===(t=r.children)||void 0===t?void 0:t.length)>0&&Object(l.jsx)("span",{onClick:function(){u(!o)},className:o?"comment-toggle open":"comment-toggle close",children:o?"[-]":"".concat(null===(n=r.children)||void 0===n?void 0:n.length," replies collapsed")}),r.children&&o&&Object(l.jsx)(q,{commentList:r.children})]})};var q=function(e){var t=e.commentList;return Object(l.jsx)("div",{className:"comments-wrap",children:t.map((function(e){return Object(l.jsx)(V,{comment:e},e.id)}))})},z=(n(94),function(){var e=G(),t=e.commentList,n=e.loading,c=e.isCommentsFailed,r=e.commentsCount,s=e.handleRefreshComments;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"comments-header",children:[Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("div",{className:"title",children:r?"".concat(r," Comments"):"No comments yet"}),n&&Object(l.jsx)(w,{})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"button",onClick:s,children:"Refresh"})})]}),c?Object(l.jsx)(b,{}):Object(l.jsx)(q,{commentList:t})]})}),K=function(e){return{type:T,payload:e}},Q=Object(h.a)([function(e){return e.newsItemReducer}],(function(e){return e})),Y=(n(95),function(){var e=function(){var e=Object(a.f)().id,t=Object(O.b)(),n=Object(c.useState)(!0),r=Object(F.a)(n,2),s=r[0],i=r[1],o=Object(O.c)(Q),l=o.newsItems,u=o.isItemsFailed,d=l[e],m=(d||{}).item;Object(c.useEffect)((function(){d||b()}),[d]);var b=function(){var n=Object(C.a)(k.a.mark((function n(){var c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,H(e);case 3:c=n.sent,t(K(c)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),t({type:L});case 10:return n.prev=10,i(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();return{item:m,postTime:j(null===m||void 0===m?void 0:m.time),loading:s,isItemsFailed:u}}(),t=e.item,n=e.postTime,r=e.loading,s=e.isItemsFailed;return Object(l.jsx)("div",{children:r?Object(l.jsx)(w,{}):s?Object(l.jsx)(b,{}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"single-news",children:[Object(l.jsxs)("div",{className:"single-news__header",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("a",{href:null===t||void 0===t?void 0:t.url,children:Object(l.jsx)("h1",{className:"title",children:null===t||void 0===t?void 0:t.title})})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"news-item__box-footer",children:Object(l.jsxs)("ul",{className:"news-meta",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"icon icon-rating"}),Object(l.jsxs)("span",{children:[null===t||void 0===t?void 0:t.score," points "]})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"icon icon-user"}),Object(l.jsx)("span",{children:null===t||void 0===t?void 0:t.by})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"icon icon-time"}),Object(l.jsxs)("span",{children:[n," ago"]})]})]})})})]}),Object(l.jsx)("div",{className:"single-news__comments",children:Object(l.jsx)(z,{})})]})})})}),Z=function(){var e=Object(C.a)(k.a.mark((function e(t){var n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("".concat(P,"/topstories.json"));case 2:return n=e.sent,c=n.data.slice(0,t)||[],e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(O.b)(),t=Object(c.useRef)();function n(){return r.apply(this,arguments)}function r(){return(r=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t.current=setTimeout((function(){n()}),U);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){return n(),function(){return clearTimeout(t.current)}}),[]);var s=function(){var t=Object(C.a)(k.a.mark((function t(){var n,c,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:S}),t.next=4,Z(100);case 4:return n=t.sent,c=n.map((function(e){return H(e)})),t.next=8,Promise.all(c);case 8:r=t.sent,e({type:E,payload:r}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),e({type:I});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return clearTimeout(t.current),e.next=3,n();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},ee=(n(96),function(){var e=$();return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(a.c,{children:[Object(l.jsxs)(a.a,{path:"/hacker-news-avito/",exact:!0,children:[Object(l.jsx)(y,{title:"Top News",handleRefreshNews:e}),Object(l.jsx)(g,{})]}),Object(l.jsx)(a.a,{path:"/item/:id",component:Y}),Object(l.jsx)(b,{})]})})]})}),te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))},ne=n(14),ce=n(37),re=n(5),se={news:{},loading:!1,isFail:!1},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(re.a)(Object(re.a)({},e),{},{loading:!0,isFail:!1});case E:for(var n={},c=0;c<t.payload.length;c++)n[t.payload[c].id.toString()]=t.payload[c];return{loading:!1,isFail:!1,news:Object(re.a)({},n)};case I:return Object(re.a)(Object(re.a)({},e),{},{loading:!1,isFail:!0});default:return e}},ie=n(16),oe={newsItems:{},comments:{},isItemsFailed:!1,isCommentsFailed:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(re.a)(Object(re.a)({},e),{},{isItemsFailed:!1,isCommentsFailed:!1,newsItems:Object(re.a)(Object(re.a)({},e.newsItems),{},Object(ie.a)({},t.payload.id,{item:t.payload}))});case L:return Object(re.a)(Object(re.a)({},e),{},{isItemsFailed:!0});case R:return Object(re.a)(Object(re.a)({},e),{},{isCommentsFailed:!1,comments:Object(re.a)(Object(re.a)({},e.comments),{},Object(ie.a)({},t.payload.id,t.payload.item))});case A:return Object(re.a)(Object(re.a)({},e),{},{isCommentsFailed:!0});default:return e}},ue=Object(ne.b)({newsReducer:ae,newsItemReducer:le}),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.c,de=Object(ne.d)(ue,je(Object(ne.a)(ce.a)));s.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(O.a,{store:de,children:Object(l.jsx)(ee,{})})}),document.getElementById("root")),te()}},[[97,1,2]]]);
//# sourceMappingURL=main.64afdea3.chunk.js.map
(this["webpackJsonpcasino-app-react"]=this["webpackJsonpcasino-app-react"]||[]).push([[0],{31:function(e,t,n){e.exports=n(71)},36:function(e,t,n){},37:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),l=n.n(c),o=(n(36),n(4)),i=n(3),s=(n(37),n(7)),u=n.n(s),m=n(23),f=n(8),v=n.n(f),p=function(e){return v.a.get("".concat("","/").concat(e,"/").concat("gga.php")).then((function(e){if("undefined"!==typeof e.data.games||null!=e.data.games){var t,n=e.data.games,a=n.filter((function(e){return 0!==parseInt(e.oid)})),r=n.filter((function(e){return 0!==parseInt(e.offerid)})).sort((function(e,t){return e.offerid>t.offerid?1:t.offerid>e.offerid?-1:0})),c=n.filter((function(e){return 0!==parseInt(e.viporderid)})).sort((function(e,t){return e.viporderid>t.viporderid?1:t.viporderid>e.viporderid?-1:0})),l=n.filter((function(e){return 0!==parseInt(e.pkgrank)})).sort((function(e,t){return e.pkgrank>t.pkgrank?1:t.pkgrank>e.pkgrank?-1:0})),o=e.data.playslots,i=n.filter((function(e){return 0!==parseInt(e.top10)})).sort((function(e,t){return e.top10-t.top10})),s=e.data.casinosSlides,u=null!==(t=e.data.lang)&&void 0!==t?t:"en",m=e.data.rtl?e.data.rtl:0;return Promise.resolve({games:n,casino:a,offers:r,vip:c,packages:l,playSlots:o,topTen:i,casinoSlides:s,lang:u,rtl:m})}return{}}))},d=function e(t){var n=t.rootPath,a=t.lang;return v.a.get("".concat("","/").concat(n,"/").concat("resources","/").concat(a,".json")).then((function(e){var t=e.data;return Promise.resolve({resources:t})})).catch((function(){return e({rootPath:n,lang:"en"})}))},b=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p(t),a=n.then((function(e){e.rtl&&(document.body.style.direction="rtl");var n={rootPath:t,lang:e.lang};return e.rtl,d(n)})),e.abrupt("return",Promise.all([n,a]).then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1],r={games:n.games,casino:n.casino,offers:n.offers,vip:n.vip,packages:n.packages,playSlots:n.playSlots,topTen:n.topTen,casinoSlides:n.casinoSlides,resources:a.resources};return Object(o.a)({},r)})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(24),g=n(25),k=n(29),N=n(26),h=n(30),_=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).state={activeTab:n.props.children[0].props.name},n.changeTab=function(e){n.setState({activeTab:e})},n}return Object(h.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t="",n=[];return r.a.createElement("div",{className:"casino-app"},r.a.Children.map(this.props.children,(function(a){var r=[{tab:a.props.name,name:a.props.label,className:a.props.className}];n.push(r),a.props.name===e.state.activeTab&&(t=a.props.children)})),r.a.createElement(j,{activeTab:this.state.activeTab,buttons:n,changeTab:this.changeTab,mainClassName:this.props.className}),r.a.createElement("div",{className:"tab-content"},t))}}]),t}(r.a.Component),j=function(e){var t=e.buttons,n=e.changeTab,a=e.activeTab,c="app-tabs "+e.mainClassName;return r.a.createElement("div",{className:c},t.map((function(e){var t=e[0].tab===a?"tab-link-active "+e[0].className:e[0].className;return r.a.createElement("button",{key:e[0].name,className:t,onClick:function(){return n(e[0].tab)}},e[0].name)})))},O=function(e){return r.a.createElement(r.a.Fragment,null,e.children)},S=n(1),y=function(e){var t=e.favicon,n=Object(S.useContextSelector)(oe,(function(e){return e.rootPath}));return r.a.createElement("div",{className:"content_fav"},r.a.createElement("img",{alt:"#",src:"".concat("","/").concat(n,"/").concat(t)}))},C=function(e){var t=e.favicon,n=Object(S.useContextSelector)(oe,(function(e){return e.rootPath}));return r.a.createElement("div",{className:"content_round_fav"},r.a.createElement("img",{alt:"#",src:"".concat("","/").concat(n,"/").concat(t)}))},w=function(e){var t=e.link,n=e.favbanner,a=Object(S.useContextSelector)(oe,(function(e){return e.rootPath}));return r.a.createElement("div",{className:"fav_banner",onClick:function(){return window.open(t)}},r.a.createElement("img",{alt:"#",src:"".concat("","/").concat(a,"/").concat(n)}))},x=function(e){var t=e.label;return r.a.createElement("span",{className:"brand_label"},t," ")},T=function(e){var t=e.rating;return r.a.createElement("span",{className:"rating_star"},2*t," ")},P=function(e){var t=e.offer;return r.a.createElement("span",{className:"bonus_offer_text"},t)},I=function(e){var t=e.bonusoffertext;return r.a.createElement("span",{className:"bonus_offer_text"},t)},D=function(e){var t=e.link,n=Object(S.useContextSelector)(oe,(function(e){return e.translation}));return r.a.createElement("div",{className:"button_div",onClick:function(){return window.open(t)}},n.buttons.play)},L=function(e){var t=e.link,n=Object(S.useContextSelector)(oe,(function(e){return e.translation}));return r.a.createElement("div",{className:"yellow_play",onClick:function(){return window.open(t)}},n.buttons.play)},B=function(e){var t=e.bonustype;return r.a.createElement("span",{className:"bonus_type",dangerouslySetInnerHTML:{__html:t}})},A=function(e){var t=e.vipmindeposit,n=Object(S.useContextSelector)(oe,(function(e){return e.translation}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"minvip_deposit"}," ",n.vip.minVipDeposit," :"," "),r.a.createElement("span",{className:"minvip_deposit"},t," "))},F=function(e){var t=e.comp;return r.a.createElement("span",null,t)},H=function(e){var t=e.brand;return r.a.createElement("div",{className:"content_brand"},t)},J=function(e){var t=e.item,n=Object(S.useContextSelector)(oe,(function(e){return e.openDetails})),a=Object(S.useContextSelector)(oe,(function(e){return e.translation}));return r.a.createElement("div",{className:"preview_button",onClick:function(){return n(t)}},a.review.review)},M=function(e){var t=e.link,n=Object(S.useContextSelector)(oe,(function(e){return e.translation}));return r.a.createElement("div",{className:"claim_bonus_div",onClick:function(){return window.open(t)}},n.review.claimBonus)},R=function(){var e=Object(S.useContextSelector)(oe,(function(e){return e.offers}));return e?e.map((function(e){return r.a.createElement("div",{className:"content_div",key:e.id},r.a.createElement(y,{favicon:e.favicon}),r.a.createElement("div",{className:"content_info"},r.a.createElement(x,{label:e.label}),r.a.createElement(T,{rating:e.rating})),r.a.createElement("div",{className:"content_right"},r.a.createElement(B,{bonustype:e.bonustype}),r.a.createElement(D,{link:e.link}),r.a.createElement(I,{bonusoffertext:e.bonusoffertext})))})):null},V=function(){var e=Object(S.useContextSelector)(oe,(function(e){return e.vip}));return e?e.map((function(e){return r.a.createElement("div",{className:"content_div",key:e.id},r.a.createElement(y,{favicon:e.favicon}),r.a.createElement("div",{className:"content_info"},r.a.createElement(P,{offer:e.offer}),r.a.createElement(T,{rating:e.rating}),r.a.createElement(x,{label:e.label})),r.a.createElement("div",{className:"content_right"},r.a.createElement(L,{link:e.link}),r.a.createElement(A,{vipmindeposit:e.vipmindeposit})))})):null},W=function(){var e=Object(S.useContextSelector)(oe,(function(e){return e.packages}));return e?e.map((function(e){return r.a.createElement("div",{className:"package_content",key:e.id},r.a.createElement("div",{className:"content_div"},r.a.createElement(C,{favicon:e.favicon}),r.a.createElement("div",{className:"content_info"},r.a.createElement(x,{label:e.label})),r.a.createElement("div",{className:"content_right"},r.a.createElement(T,{rating:e.rating}))),r.a.createElement(w,{link:e.link,favbanner:e.favbanner}),r.a.createElement("div",{className:"row_reverse"},r.a.createElement(D,{link:e.link})))})):null},G=function(){var e=Object(S.useContextSelector)(oe,(function(e){return e.playSlots}));return e?e.map((function(e){return r.a.createElement("div",{className:"content_div",key:e.id},r.a.createElement(y,{favicon:e.favicon}),r.a.createElement("div",{className:"content_info"},r.a.createElement(x,{label:e.label}),r.a.createElement(F,{comp:e.comp})),r.a.createElement("div",{className:"content_right"},r.a.createElement(D,{link:e.link}),r.a.createElement(H,{brand:e.brand})))})):null},$=n(27),q=n.n($),z=r.a.memo((function(){var e=Object(S.useContextSelector)(oe,(function(e){return e.rootPath})),t=Object(S.useContextSelector)(oe,(function(e){return e.casinoSlides}));return t?r.a.createElement(q.a,null,t.map((function(t){return r.a.createElement("div",{key:t.img.match(/id=(.*)&name/).pop(),style:{backgroundImage:"url("+e+"/"+t.img+")"},onClick:function(){return window.open(t.link)}})}))):null})),K=function(e){var t=e.casino;return t?r.a.createElement(Q,{casino:t}):null},Q=function(e){return e.casino.map((function(e){return r.a.createElement("div",{className:"content_div",key:e.id},r.a.createElement(y,{favicon:e.favicon}),r.a.createElement("div",{className:"content_info"},r.a.createElement(x,{label:e.label}),r.a.createElement(T,{rating:e.rating}),r.a.createElement(P,{offer:e.offer})),r.a.createElement("div",{className:"content_right"},r.a.createElement(B,{bonustype:e.bonustype}),r.a.createElement(D,{link:e.link}),r.a.createElement(J,{item:e})))}))},U=r.a.memo((function(){var e=Object(S.useContextSelector)(oe,(function(e){return e.translation})),t=Object(S.useContextSelector)(oe,(function(e){return e.casino})),n=Object(S.useContextSelector)(oe,(function(e){return e.topTen}));return r.a.createElement(_,null,r.a.createElement(O,{label:e.subTabs.best,name:"Best",className:"sub_title"},r.a.createElement(K,{casino:t})),r.a.createElement(O,{label:e.subTabs.topTen,name:"TopTen",className:"top_ten"},r.a.createElement(K,{casino:n})))})),X=r.a.memo((function(){var e=Object(S.useContextSelector)(oe,(function(e){return e.translation}));return r.a.createElement(_,{className:"tab_main"},r.a.createElement(O,{label:e.mainTabs.casino,name:"Casino",className:"tab-link casino-tab"},r.a.createElement(z,null),r.a.createElement(U,null)),r.a.createElement(O,{label:e.mainTabs.offers,name:"Offers",className:"tab-link offers-tab"},r.a.createElement(z,null),r.a.createElement(R,null)),r.a.createElement(O,{label:e.mainTabs.vip,name:"Vip",className:"tab-link vip-tab"},r.a.createElement(z,null),r.a.createElement(V,null)),r.a.createElement(O,{label:e.mainTabs.packages,name:"Packages",className:"tab-link pack-tab"},r.a.createElement(W,null)),r.a.createElement(O,{label:e.mainTabs.playSlots,name:"PlaySlots",className:"tab-link play-tab"},r.a.createElement(z,null),r.a.createElement(G,null)))})),Y=function(e){var t=e.brandReview,n=Object(S.useContextSelector)(oe,(function(e){return e.closeDetails})),a=t.item;return r.a.createElement("div",{className:"casino-app"},r.a.createElement("div",{className:"details_header"},r.a.createElement("div",{className:"back_arrow",onClick:n}),r.a.createElement("div",{className:"details_label"},r.a.createElement("span",null,a.label))),r.a.createElement("div",{className:"content_div"},r.a.createElement(y,{favicon:a.favicon}),r.a.createElement("div",{className:"content_info"},r.a.createElement(x,{label:a.label}),r.a.createElement(T,{rating:a.rating})),r.a.createElement("div",{className:"content_right"},r.a.createElement(D,{link:a.link}))),r.a.createElement(Z,{mindeposit:a.mindeposit}),r.a.createElement(te,{offer:a.offer,link:a.link}),r.a.createElement(w,{link:a.link,favbanner:a.favbanner}),r.a.createElement(ne,{longtext:a.longtext}),r.a.createElement(M,{link:a.link}))},Z=function(e){var t=e.mindeposit,n=Object(S.useContextSelector)(oe,(function(e){return e.translation})),a=n.ratings;return r.a.createElement("div",{className:"content_div"},r.a.createElement("div",{className:"ratings_info"},r.a.createElement("div",{className:"ratings_div"},r.a.createElement("label",null,a.ratings)),r.a.createElement(ee,{ratings:a.elements})),r.a.createElement("div",{className:"deposits_div"},r.a.createElement("span",{className:"min_deposit_title"}," ",n.review.minDeposit),r.a.createElement("span",{className:"min_deposit_review"}," ",t," "),r.a.createElement("div",null,r.a.createElement("p",null," ",n.review.platforms)),r.a.createElement("div",{className:"devices_div"}," ")))},ee=function(e){var t=e.ratings;return Object.keys(t).map((function(e){return r.a.createElement("div",{className:"rating_element",key:e},r.a.createElement("div",{className:"rating_3star"}),r.a.createElement("div",{className:"rating_item"},r.a.createElement("span",null," ",t[e]," ")))}))},te=function(e){var t=e.offer,n=e.link,a=Object(S.useContextSelector)(oe,(function(e){return e.translation}));return r.a.createElement("div",{className:"review_div"},r.a.createElement(P,{offer:t}),r.a.createElement("p",null," * ",a.review.newAccountOnly),r.a.createElement(M,{link:n}))},ne=function(e){var t=e.longtext;return r.a.createElement("div",{className:"long_text"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:t}}))},ae=n(28),re=n.n(ae),ce=function(e){var t=e.rootPath;return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading..")},r.a.createElement(le,{rootPath:t}))},le=function(e){var t=e.rootPath,n=t,a=re()("".concat("","/").concat(n,"/").concat("resources","/en.json"),{method:"GET"});return r.a.createElement(ie,{rootPath:t,defaultLanguage:a})},oe=Object(S.createContext)({rootPath:"",translation:"",games:null,casino:null,offers:null,vip:null,packages:null,playSlots:null,topTen:null,casinoSlides:null,openDetails:function(){},closeDetails:function(){}}),ie=r.a.memo((function(e){var t=e.rootPath,n=e.defaultLanguage,c=Object(a.useState)({}),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(a.useState)(n),f=Object(i.a)(m,2),v=f[0],p=f[1],d=Object(a.useState)(null),E=Object(i.a)(d,2),g=E[0],k=E[1];Object(a.useEffect)((function(){b(t).then((function(e){u(e),p(e.resources)}))}),[t]);var N=Object(a.useCallback)((function(e){k({item:e})}),[]),h=Object(a.useCallback)((function(){k(null)}),[]);return r.a.createElement(oe.Provider,{value:Object(o.a)({openDetails:N,closeDetails:h},s,{rootPath:t,translation:v})},g?r.a.createElement(Y,{brandReview:g}):r.a.createElement(X,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=document.getElementById("root");l.a.render(r.a.createElement(ce,{rootPath:se.dataset.root}),se),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.101f33be.chunk.js.map
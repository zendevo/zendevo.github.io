(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,a,t){},48:function(e,a,t){e.exports=t(80)},53:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),o=(t(53),t(7)),s=t(8),i=t(10),m=t(9),u=t(81),d=t(82),p=(t(25),t(35),t(18)),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(d.a,{xs:12,className:"menu-strip"},l.a.createElement(u.a,null,l.a.createElement(d.a,{xs:12,lg:4,sm:4,md:4},l.a.createElement("div",{className:"header clr-white font-bold"},l.a.createElement("a",null,"Unsplash"))),l.a.createElement(d.a,{xs:12,lg:4,sm:4,md:4}),l.a.createElement(d.a,{lg:4,sm:4,md:4,xs:12},l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement(p.b,{to:"/"},l.a.createElement("li",null,"Home")),l.a.createElement(p.b,{to:"/Cart"},l.a.createElement("li",null,"My Cart")))))))))}}]),t}(n.PureComponent),f=t(29),E=t.n(f),h=(t(74),t(77),t(16)),g=(t(79),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a="",t="";console.log("userData",this.props.userData),this.props.userData&&(a=this.props.userData.fav,console.log("in render fav",a),t=this.props.userData.collect,console.log("in render collect",t));var n=l.a.createElement("div",null,l.a.createElement("span",null,"No any favourites"));return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{style:{padding:"10px"}},l.a.createElement(d.a,{xs:12,lg:6},l.a.createElement("div",{className:"cartHeader"},l.a.createElement("span",null,"Favourites")),l.a.createElement("div",{className:"pad20"},l.a.createElement(u.a,null,a.length?a.map(function(a){return l.a.createElement(d.a,{xs:12,sm:6,key:a.image.id},l.a.createElement("div",{className:"pos-relative"},l.a.createElement("div",{className:"fav-strip pad5"},l.a.createElement("span",{className:"pad-5_10 border-rad10 pad10",onClick:function(){return e.props.onRemoveFav(a.image.id)}},l.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"}))),l.a.createElement("div",{className:"pad5"},l.a.createElement("img",{style:{width:"100%"},src:a.image.urls.small}))))}):n))),l.a.createElement(d.a,{xs:12,lg:6},l.a.createElement("div",{className:"cartHeader"},l.a.createElement("span",null,"Collection")),l.a.createElement("div",{className:"pad20"},l.a.createElement(u.a,null,t.length?t.map(function(a){return l.a.createElement(d.a,{xs:12,sm:6,key:a.image.id},l.a.createElement("div",{className:"pos-relative"},l.a.createElement("div",{className:"fav-strip pad5"},l.a.createElement("span",{className:"pad-5_10 border-rad10 pad10",onClick:function(){return e.props.onRemoveCollect(a.image.id)}},l.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"}))),l.a.createElement("div",{className:"pad5"},l.a.createElement("img",{style:{width:"100%"},src:a.image.urls.small}))))}):l.a.createElement("div",null,l.a.createElement("span",null,"No any collection")))))))}}]),t}(n.PureComponent)),b=Object(h.b)(function(e){return console.log("in cart state map",e),{userData:e}},function(e){return{onRemoveFav:function(a){return e({type:"removeFav",val:a})},onRemoveCollect:function(a){return e({type:"removeCollect",val:a})}}})(g),j=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={imageData:[],client_id:"2bfdbdd271002544c92860b908a727aa28957fd064ab3e7573c15de13d410e19"},n}return Object(s.a)(t,[{key:"getDataFromUnsplash",value:function(){var e=this,a=this.state.client_id;E.a.get("https://api.unsplash.com/photos",{headers:{Authorization:"Client-ID ".concat(a)}}).then(function(a){console.log(a),e.setState({imageData:a.data},function(){console.log(e.state.imageData)})}).catch(function(e){return console.log(e)})}},{key:"AddFavCollectHandler",value:function(e,a){console.log("action AddFavCollectHandler",e,a)}},{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.getDataFromUnsplash()}},{key:"downloadImg",value:function(e){console.log("url to download image data",e);var a=this.state.client_id,t=document.createElement("a");document.body.appendChild(t);var n=e.links.download_location;console.log("file",n),E.a.get(n,{headers:{Authorization:"Client-ID ".concat(a)}}).then(function(e){t.href=n,t.click()})}},{key:"render",value:function(){var e=this,a=this.state.imageData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"display-flex-start"},a.map(function(a){return l.a.createElement("div",{className:"pos-relative",key:a.id},l.a.createElement("div",{className:"fav-strip pad5"},l.a.createElement("span",{className:"pad-5_10 border-rad10 pad10",onClick:function(){return e.props.addFav(a)}},l.a.createElement("i",{className:"fa fa-heart","aria-hidden":"true"})),l.a.createElement("span",{className:"pad-5_10 marg-left20 border-rad10 pad10",onClick:function(){return e.props.addCollect(a)}},l.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))),l.a.createElement("div",{className:"fav-dw-strip pad5"},l.a.createElement("span",{className:"pad-5_10 border-rad10 pad10 marg-left20",onClick:function(){return e.downloadImg(a)},download:!0},l.a.createElement("i",{className:"fa fa-arrow-down","aria-hidden":"true"}))),l.a.createElement("img",{src:a.urls.small}))})))}}]),t}(n.PureComponent),O=Object(h.b)(function(e){return{}},function(e){return{addCollect:function(a){return e({type:"add_Collect",val:a})},addFav:function(a){return e({type:"add_Fav",val:a})},resData:function(a){return e({type:"resData",val:a})}}})(j),y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,"contact us")}}]),t}(n.PureComponent),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,"about us")}}]),t}(n.PureComponent),C=t(14),k=t(17),D=t(32),w=t(13),F=t(26),_={fav:[],collect:[]},x=Object(k.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(console.log("data",e,"action",a.val),a.type){case"add_Fav":return Object(w.a)(Object(w.a)({},e),{},{fav:[].concat(Object(D.a)(e.fav),[{image:a.val}])});case"add_Collect":return Object(w.a)(Object(w.a)({},e),{},{collect:[].concat(Object(D.a)(e.collect),[{image:a.val}])});case"removeFav":var t=e.fav.filter(function(e){return e.image.id!=a.val});return Object(w.a)(Object(w.a)({},e),{},{fav:t});case"removeCollect":return t=e.collect.filter(function(e){return e.image.id!=a.val}),Object(w.a)(Object(w.a)({},e),{},{collect:t})}},Object(F.composeWithDevTools)());function A(){return l.a.createElement("div",{className:"App"},l.a.createElement(p.a,null,l.a.createElement(v,null),l.a.createElement(C.a,{exact:!0,path:"/",component:O}),l.a.createElement(C.a,{path:"/ContactUs",component:y}),l.a.createElement(C.a,{path:"/AboutUs",component:N}),l.a.createElement(C.a,{path:"/Cart",component:b})))}var H=document.getElementById("root");c.a.render(l.a.createElement(h.a,{store:x},l.a.createElement(A,null)),H)}},[[48,1,2]]]);
//# sourceMappingURL=main.663bafc9.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){},46:function(e,a,t){e.exports=t(78)},51:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),o=(t(51),t(7)),s=t(8),i=t(10),m=t(9),u=t(79),d=t(80),p=(t(24),t(31),t(16)),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(d.a,{xs:12},r.a.createElement(u.a,null,r.a.createElement(d.a,{xs:12,lg:4,sm:4,md:4},r.a.createElement("div",{className:"header"},r.a.createElement("a",null,"World of Photos"))),r.a.createElement(d.a,{xs:12,lg:4,sm:4,md:4}),r.a.createElement(d.a,{lg:4,sm:4,md:4,xs:12},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement(p.b,{to:"/"},r.a.createElement("li",null,"Home")),r.a.createElement(p.b,{to:"/Cart"},r.a.createElement("li",null,"My Cart")))))))))}}]),t}(n.PureComponent),f=t(43),E=t.n(f),h=(t(72),t(75),t(15)),b=(t(77),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a="";console.log("userData",this.props.userData),this.props&&(a=this.props.userData,console.log("in render fav",a));var t=r.a.createElement("div",null,r.a.createElement("span",null,"No any favourites"));return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{style:{padding:"10px"}},r.a.createElement(d.a,{xs:12,lg:6},r.a.createElement("div",{className:"cartHeader"},r.a.createElement("span",null,"Favourites")),r.a.createElement("div",{className:"pad20"},r.a.createElement(u.a,null,a?a.map(function(a){return r.a.createElement(d.a,{xs:12,sm:6,key:a.image.id},r.a.createElement("div",{className:"pos-relative"},r.a.createElement("div",{className:"fav-strip pad5"},r.a.createElement("span",{className:"pad-5_10 border-rad10 pad10",onClick:function(){return e.props.onRemove(a.image.id)}},r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"}))),r.a.createElement("div",{className:"pad5"},r.a.createElement("img",{src:a.image.urls.small}))))}):t))),r.a.createElement(d.a,{xs:12,lg:6},r.a.createElement("div",{className:"cartHeader"},r.a.createElement("span",null,"Collection")))))}}]),t}(n.PureComponent)),g=Object(h.b)(function(e){return console.log("in cart state map",e),{userData:e}},function(e){return{onRemove:function(a){return e({type:"removeFav",val:a})}}})(b),j=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={imageData:[],client_id:"2bfdbdd271002544c92860b908a727aa28957fd064ab3e7573c15de13d410e19"},n}return Object(s.a)(t,[{key:"getDataFromUnsplash",value:function(){var e=this,a=this.state.client_id;E.a.get("https://api.unsplash.com/photos",{headers:{Authorization:"Client-ID ".concat(a)}}).then(function(a){console.log(a),e.setState({imageData:a.data},function(){console.log(e.state.imageData)})}).catch(function(e){return console.log(e)})}},{key:"AddFavCollectHandler",value:function(e,a){console.log("action AddFavCollectHandler",e,a)}},{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.getDataFromUnsplash()}},{key:"render",value:function(){var e=this,a=this.state.imageData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"display-flex-start"},a.map(function(a){return r.a.createElement("div",{className:"pos-relative",key:a.id},r.a.createElement("div",{className:"fav-strip pad5"},r.a.createElement("span",{className:"pad-5_10 border-rad10 pad10",onClick:function(){return e.props.addFav(a)}},r.a.createElement("i",{className:"fa fa-heart","aria-hidden":"true"})),r.a.createElement("span",{className:"pad-5_10 marg-left20 border-rad10 pad10"},r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))),r.a.createElement("div",{className:"fav-dw-strip pad5"},r.a.createElement("span",{className:"pad-5_10 border-rad10 pad10 marg-left20"},r.a.createElement("i",{className:"fa fa-arrow-down","aria-hidden":"true"}))),r.a.createElement("img",{src:a.urls.small}))})))}}]),t}(n.PureComponent),O=Object(h.b)(function(e){return{}},function(e){return{addCollect:function(a){return e({type:"add_Collect",val:a})},addFav:function(a){return e({type:"add_Fav",val:a})},resData:function(a){return e({type:"resData",val:a})}}})(j),y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"contact us")}}]),t}(n.PureComponent),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"about us")}}]),t}(n.PureComponent),C=t(13),F=t(22),k=t(45),D=Object(F.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(console.log("data",e,"action",a.val),a.type){case"add_Fav":return[].concat(Object(k.a)(e),[{image:a.val}]);case"add_Collect":break;case"removeFav":return console.log("state to remove",e),e.filter(function(e){return e.image.id!=a.val})}});function x(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(v,null),r.a.createElement(C.a,{exact:!0,path:"/",component:O}),r.a.createElement(C.a,{path:"/ContactUs",component:y}),r.a.createElement(C.a,{path:"/AboutUs",component:N}),r.a.createElement(C.a,{path:"/Cart",component:g})))}var w=document.getElementById("root");c.a.render(r.a.createElement(h.a,{store:D},r.a.createElement(x,null)),w)}},[[46,1,2]]]);
//# sourceMappingURL=main.77b277f2.chunk.js.map
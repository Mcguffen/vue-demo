(function(n){function t(t){for(var l,c,o=t[0],u=t[1],s=t[2],f=0,p=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(n[l]=u[l]);a&&a(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],l=!0,o=1;o<e.length;o++){var u=e[o];0!==r[u]&&(l=!1)}l&&(i.splice(t--,1),n=c(c.s=e[0]))}return n}var l={},r={app:0},i=[];function c(t){if(l[t])return l[t].exports;var e=l[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=l,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,t){if(1&t&&(n=c(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var l in n)c.d(e,l,function(t){return n[t]}.bind(null,l));return e},c.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var a=u;i.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";e("85ec")},"07e1":function(n,t,e){"use strict";e("2acc")},"2acc":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var l=e("2b0e"),r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"wrapper"},[e("div",[n._v("第"+n._s(n.n+1)+"手")]),e("div",{staticClass:"chess"},[e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(0,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(1,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(2,t)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(3,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(4,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(5,t)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(6,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(7,t)}}}),e("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(8,t)}}})],1)]),e("div",[n._v(" 战局："+n._s(null==n.result?"激战正酣":"胜利方为"+n.result)+" ")]),n.finished?e("div",{staticClass:"gameOver"},[n._v("游戏结束")]):n._e()])])},i=[],c=(e("99af"),e("d81d"),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"cell",on:{click:n.onClickSelf}},[n.a?[n._v(" "+n._s(n.text)+" ")]:void 0],2)])}),o=[],u={props:["n"],computed:{},data:function(){return{a:!1,text:""}},methods:{onClickSelf:function(){""==this.text&&(this.a=!0,this.text=this.n%2==0?"X":"O",this.$emit("click",this.text))}}},s=u,a=(e("07e1"),e("2877")),f=Object(a["a"])(s,c,o,!1,null,null,null),p=f.exports,d={components:{Cell:p},data:function(){return{n:0,map:[[null,null,null],[null,null,null],[null,null,null]],result:null,finished:!1}},methods:{onClickCell:function(n,t){console.log("第".concat(n,"个cell被click,内容是").concat(t)),this.map[Math.floor(n/3)][n%3]=t,this.n+=1,this.tell()},tell:function(n){for(var t=this.map,e=0;e<3;e++)if(null!=t[e][0]&&t[e][0]==t[e][1]&&t[e][1]==t[e][2]){this.result=t[e][0],this.finished=!0;break}for(var l=0;l<3;l++)if(null!=t[0][l]&&t[0][l]==t[1][l]&&t[1][l]==t[2][l]){this.result=t[0][l],this.finished=!0;break}null!=t[0][0]&&t[0][0]==t[1][1]&&t[1][1]==t[2][2]&&(this.result=t[0][0],this.finished=!0),null!=t[0][2]&&t[0][2]==t[1][1]&&t[1][1]==t[2][0]&&(this.result=t[0][2],this.finished=!0)}}},h=d,C=(e("034f"),Object(a["a"])(h,r,i,!1,null,null,null)),v=C.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(n){return n(v)}}).$mount("#app")},"85ec":function(n,t,e){}});
//# sourceMappingURL=app.9358cf90.js.map
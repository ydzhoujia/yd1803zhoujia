webpackJsonp([4],{"0IpB":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("Dd8w"),s=i.n(e),a=i("Sgn/"),r=i("T452"),o=i("0aAL"),l=i("qwAB"),c=i("y/jF"),A=i("3Q4o"),d={components:{Scroll:l.a,Loading:c.a},props:{data:{type:Array,default:[]}},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[],this.probeType=3},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var n=this.listHeight;if(t>0)this.currentIndex=0;else{for(var i=0;i<n.length-1;i++){var e=n[i],s=n[i+1];if(-t>=e&&-t<s)return this.currentIndex=i,void(this.diff=s+t)}this.currentIndex=n.length-2}},diff:function(t){var n=t>0&&t<30?t-30:0;this.fixedTop!==n&&(this.fixedTop=n,this.$refs.fixed.style.transform="translate3d(0,"+n+"px,0)")}},methods:{selectItem:function(t){this.$emit("select",t)},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight-2&&(t=this.listHeight-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t],0))},onShortcutTouchMove:function(t){var n=t.touches[0];this.touch.y2=n.pageY;var i=(this.touch.y2-this.touch.y1)/18|0,e=parseInt(this.touch.anchorIndex)+i;this._scrollTo(e)},onShortcutTouchStart:function(t){var n=Object(A.b)(t.target,"index"),i=t.touches[0];this.touch.y1=i.pageY,this.touch.anchorIndex=n,this._scrollTo(n)},refresh:function(){this.$refs.listview.refresh()},scroll:function(t){this.scrollY=t.y},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,n=0;this.listHeight.push(n);for(var i=0;i<t.length;i++){n+=t[i].clientHeight,this.listHeight.push(n)}}}},u={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[i("ul",t._l(t.data,function(n){return i("li",{ref:"listGroup",refInFor:!0,staticClass:"list-group"},[i("h2",{staticClass:"list-group-title"},[t._v(t._s(n.title))]),t._v(" "),i("ul",t._l(n.items,function(n){return i("li",{staticClass:"list-group-item",on:{click:function(i){t.selectItem(n)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.avatar,expression:"item.avatar"}],staticClass:"avatar",attrs:{alt:""}}),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(n.name))])])}))])})),t._v(" "),i("div",{staticClass:"list-shortcut",on:{touchstart:t.onShortcutTouchStart,touchmove:function(n){n.stopPropagation(),n.preventDefault(),t.onShortcutTouchMove(n)}}},[i("ul",t._l(t.shortcutList,function(n,e){return i("li",{staticClass:"item",class:{current:t.currentIndex===e},attrs:{"data-index":e}},[t._v("\n        "+t._s(n)+"\n      ")])}))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[i("h1",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[i("loading")],1)])},staticRenderFns:[]},h=i("VU/8")(d,u,!1,function(t){i("r/m5")},"data-v-de55acc4",null).exports,p=i("NYxO"),g={mixins:[i("F4+m").b],components:{ListView:h},data:function(){return{singers:[]}},created:function(){this._getSingerList()},methods:s()({handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.singer.style.bottom=n,this.$refs.list.refresh()}},Object(p.d)({setSinger:"SET_SINGER"}),{selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;Object(a.b)().then(function(n){n.code===r.a&&(t.singers=t._normalizeSinger(n.data.list))})},_normalizeSinger:function(t){var n={hot:{title:"热门",items:[]}};t.forEach(function(t,i){i<10&&n.hot.items.push(new o.a({id:t.Fsinger_mid,name:t.Fsinger_name}));var e=t.Findex;n[e]||(n[e]={title:e,items:[]}),n[e].items.push(new o.a({id:t.Fsinger_mid,name:t.Fsinger_name}))});var i=[],e=[];for(var s in n){var a=n[s];a.title.match(/[a-zA-Z]/)?e.push(a):"热门"===a.title&&i.push(a)}return e.sort(function(t,n){return t.title.charCodeAt(0)-n.title.charCodeAt(0)}),i.concat(e)}})},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{ref:"singer",staticClass:"singer"},[n("list-view",{ref:"list",attrs:{data:this.singers},on:{select:this.selectSinger}}),this._v(" "),n("router-view")],1)},staticRenderFns:[]},v=i("VU/8")(g,f,!1,function(t){i("0bgW")},"data-v-1f9d4436",null);n.default=v.exports},"0bgW":function(t,n,i){var e=i("xqjM");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("b9ebd9b6",e,!0)},"Sgn/":function(t,n,i){"use strict";n.b=function(){var t=s()({},r.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,r.c)},n.a=function(t){var n=s()({},r.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:100,songstatus:1,g_tk:5381,singermid:t});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",n,r.c)};var e=i("woOf"),s=i.n(e),a=i("Gak4"),r=i("T452")},"r/m5":function(t,n,i){var e=i("zEd5");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("56120d22",e,!0)},xqjM:function(t,n,i){(t.exports=i("FZ+f")(!0)).push([t.i,"\n.singer[data-v-1f9d4436] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}","",{version:3,sources:["C:/肖冬平/vue-music-master/mymusicplayer/src/components/singer/singer.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,UAAU;EACV,UAAU;EACV,YAAY;CACb",file:"singer.vue",sourcesContent:["\n.singer[data-v-1f9d4436] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}"],sourceRoot:""}])},zEd5:function(t,n,i){(t.exports=i("FZ+f")(!0)).push([t.i,"\n.listview[data-v-de55acc4] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #a98175;\n}\n.listview .list-group[data-v-de55acc4] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-de55acc4] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-de55acc4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-de55acc4] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-de55acc4] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-de55acc4] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-de55acc4] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-de55acc4] {\n  color: #ffcd32;\n}\n.listview .list-fixed[data-v-de55acc4] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-de55acc4] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container[data-v-de55acc4] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}","",{version:3,sources:["C:/肖冬平/vue-music-master/mymusicplayer/src/base/listview/listview.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,6BAA6B;EAC7B,iBAAiB;CAClB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,SAAS;EACT,oCAAoC;UAC5B,4BAA4B;EACpC,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,4BAA4B;EAC5B,uBAAuB;CACxB;AACD;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,gBAAgB;CACjB;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;CACb;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,6BAA6B;EAC7B,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,oCAAoC;UAC5B,4BAA4B;CACrC",file:"listview.vue",sourcesContent:["\n.listview[data-v-de55acc4] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #a98175;\n}\n.listview .list-group[data-v-de55acc4] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-de55acc4] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-de55acc4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-de55acc4] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-de55acc4] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-de55acc4] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-de55acc4] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-de55acc4] {\n  color: #ffcd32;\n}\n.listview .list-fixed[data-v-de55acc4] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-de55acc4] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container[data-v-de55acc4] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])}});
//# sourceMappingURL=4.c7f1dd861274b6923a25.js.map
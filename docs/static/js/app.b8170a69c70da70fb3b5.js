webpackJsonp([0],{"9M+g":function(t,s){},"ARW/":function(t,s){},B36V:function(t,s){},Jmt5:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),e=(a("uMhA"),{watch:{$route:function(t,s){t.hash.match(/^#/)&&document.getElementById(t.hash.replace(/^#/,"")).scrollIntoView(),console.log("new, old",[t.hash,s.hash])}},mounted:function(){this.$route.hash.match(/^#/)&&document.getElementById(this.$route.hash.replace(/^#/,"")).scrollIntoView()}}),l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark header-nav"},[s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"text-black px-3",attrs:{to:"/#home"}},[this._v("Home")])],1),this._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"text-black px-3",attrs:{to:"/#profile"}},[this._v("Profile")])],1),this._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"text-black px-3",attrs:{to:"/#skill"}},[this._v("Skills")])],1),this._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"text-black px-3",attrs:{to:"/#work"}},[this._v("Works")])],1)])])])])},staticRenderFns:[]};var r=a("VU/8")(e,l,!1,function(t){a("ciAY")},"data-v-393d5eb2",null).exports,c=a("w2KH"),o=a.n(c),n={data:function(){return{assetsImage:o.a,text:"Welcome to Taiga's Portfolio Site",title:"Hello I'm Taiga"}}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"home"}},[a("div",{staticClass:"image",style:{"background-image":"url("+t.assetsImage+")"}},[a("div",{staticClass:"logo"},[a("h1",{staticClass:"title"},t._l(t.title,function(s,i){return a("span",{key:i,staticClass:"item",style:{animationDelay:100*i+"ms"},domProps:{textContent:t._s(s)}})}),0),t._v(" "),a("p",{staticClass:"subtitle"},t._l(t.text,function(s,i){return a("span",{key:i,style:{animationDelay:100*i+600+"ms"},domProps:{textContent:t._s(s)}})}),0)])])])},staticRenderFns:[]};var d=a("VU/8")(n,v,!1,function(t){a("ARW/")},"data-v-5fa89da8",null).exports,u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"profile"}},[a("div",{staticClass:"title"},[t._v("Profile")]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"front side"},[a("h1",{staticClass:"logo"},[t._v("ABOUT ME"),a("br"),a("span",[t._v("Please touch")]),a("br")])]),t._v(" "),a("div",{staticClass:"back side"},[a("h3",{staticClass:"name"},[t._v("Hello I'm Taiga")]),t._v(" "),a("div",{staticClass:"subtext"},[t._v("My Profile")]),t._v(" "),a("div",{staticClass:"profile"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:"static/profile.jpeg",alt:"Taiga logo"}})]),t._v(" "),a("p",{staticClass:"text"},[t._v("名前：TAIGA FURUI\n        "),a("br"),t._v("年齢：22歳\n        "),a("br"),t._v("フリーター生活を送っていましたが、エンジニアの凄さを知ってから憧れるようになり、プログラミングスクール TECH CAMPに入学。\n        "),a("br"),t._v("2020年5月に卒業し、現在は学習を継続しながら就職活動中。\n        "),a("br"),t._v("サーバーサイドに興味があります。\n        ")])]),t._v(" "),a("div",{staticClass:"info"},[a("p",[a("span",{staticClass:"property"},[t._v("Email: ")]),t._v("taiga_hand4@icloud.com")]),t._v(" "),a("p",[a("span",{staticClass:"property"},[t._v("Twitter: ")]),t._v("@techcamp_taiga")]),t._v(" "),a("p",[a("span",{staticClass:"property"},[t._v("GitHub: ")]),a("a",{attrs:{href:"https://github.com/taiga424"}},[t._v("https://github.com/taiga424")])])])])])])}]};var _=a("VU/8")(null,u,!1,function(t){a("gI9E")},"data-v-7c9c049e",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"clearfix",attrs:{id:"work"}},[a("div",{staticClass:"title"},[t._v("Works")]),t._v(" "),a("ul",{staticClass:"work"},[a("li",{staticClass:"work-item"},[a("a",{attrs:{href:"http://13.115.54.84:3000/"}},[a("img",{attrs:{src:"static/Chatspace.png"}})]),t._v(" "),a("div",{staticClass:"item-title"},[t._v("ChatSpace")]),t._v(" "),a("p",{staticClass:"item-info"},[t._v("Ruby/Ruby on Rails/MySQL/Github/AWS"),a("br"),t._v("スクールのカリキュラムで作成しました。"),a("br"),t._v("簡単なメッセージアプリです。")])]),t._v(" "),a("li",{staticClass:"work-item"},[a("a",{attrs:{href:"http://13.115.54.84/"}},[a("img",{attrs:{src:"static/BookLife.png"}})]),t._v(" "),a("div",{staticClass:"item-title"},[t._v("BookLife")]),t._v(" "),a("p",{staticClass:"item-info"},[t._v("Ruby/Ruby on Rails/MySQL/Github/AWS"),a("br"),t._v("初めてゼロから自分で作成しました。"),a("br"),t._v("本のレビュー＆検索アプリです。")])]),t._v(" "),a("li",{staticClass:"work-item"},[a("a",{attrs:{href:"http://18.178.222.209"}},[a("img",{attrs:{src:"static/FrimaApp.png"}})]),t._v(" "),a("div",{staticClass:"item-title"},[t._v("（チーム開発）FrimaApp")]),t._v(" "),a("p",{staticClass:"item-info"},[t._v("Ruby/Ruby on Rails/MySQL/JavaScript/Github/AWS"),a("br"),t._v("「ID:team-d,Password:2222」でアクセスできます。")])]),t._v(" "),a("li",{staticClass:"work-item"},[a("a",{attrs:{href:"https://taiga424.github.io/Portfolio/"}},[a("img",{attrs:{src:"static/Portfolio.png"}})]),t._v(" "),a("div",{staticClass:"item-title"},[t._v("Portfolio")]),t._v(" "),a("p",{staticClass:"item-info"},[t._v("Vue.js/Github"),a("br"),t._v("Vue.jsの勉強を兼ねて作成しました。")])])])])}]};var m=a("VU/8")(null,p,!1,function(t){a("Op/a")},"data-v-3eb3d04e",null).exports,h={methods:{frontScroll:function(t,s){console.log(window.scrollY),window.scrollY>1200&&s.setAttribute("style","opacity: 1; transform: translateY(-20px)")},backScroll:function(t,s){console.log(window.scrollY),window.scrollY>1500&&s.setAttribute("style","opacity: 1; transform: translateY(-20px)")},otherScroll:function(t,s){console.log(window.scrollY),window.scrollY>1800&&s.setAttribute("style","opacity: 1; transform: translateY(-20px)")}}},f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"skill"}},[a("div",{staticClass:"title"},[t._v("Skills")]),t._v(" "),a("div",{staticClass:"container"},[a("h2",{staticClass:"title-skill"},[t._v("フロントエンド")]),t._v(" "),a("ul",{staticClass:"cards"},[a("li",{directives:[{name:"scroll",rawName:"v-scroll",value:t.frontScroll,expression:"frontScroll"}],attrs:{crass:"card",id:"html"}},[a("h3",{staticClass:"card-title"},[t._v("HTML&CSS")]),t._v(" "),a("p",{staticClass:"card-info"},[t._v("基本的なことは一通りできます。")])]),t._v(" "),a("li",{directives:[{name:"scroll",rawName:"v-scroll",value:t.frontScroll,expression:"frontScroll"}],attrs:{crass:"card",id:"javascrpt"}},[a("h3",{staticClass:"card-title"},[t._v("javascript")]),t._v(" "),a("p",{staticClass:"card-info"},[t._v("簡単な実装はできます。")])]),t._v(" "),a("li",{directives:[{name:"scroll",rawName:"v-scroll",value:t.frontScroll,expression:"frontScroll"}],attrs:{crass:"card",id:"vue"}},[a("h3",{staticClass:"card-title"},[t._v("Vue.js")]),t._v(" "),a("p",{staticClass:"card-info"},[t._v("このポートフォリオサイトはVue.jsで作成しました。")])]),t._v(" "),a("li",{directives:[{name:"scroll",rawName:"v-scroll",value:t.frontScroll,expression:"frontScroll"}],attrs:{crass:"card",id:"jquery"}},[a("h3",{staticClass:"card-title"},[t._v("jQuery")]),t._v(" "),a("p",{staticClass:"card-info"},[t._v("アコーディオンやハンバーガーメニューなどの実装はできます。")])])]),t._v(" "),a("h2",{staticClass:"title-skill"},[t._v("バックエンド")]),t._v(" "),a("ul",{staticClass:"cards"},[a("li",{directives:[{name:"scroll",rawName:"v-scroll",value:t.backScroll,expression:"backScroll"}],attrs:{crass:"card",id:"ruby"}},[a("h3",{staticClass:"card-title"},[t._v("Ruby on Rails")]),t._v(" "),a("p",{staticClass:"card-info"},[t._v("一番最初に触れたバックエンドの言語です。スクールで主に扱っていました。")])]),t._v(" "),a("li",{directives:[{name:"scroll",rawName:"v-scroll",value:t.backScroll,expression:"backScroll"}],attrs:{crass:"card",id:"mysql"}},[a("h3",{staticClass:"card-title"},[t._v("MySQL")]),t._v(" "),a("p",{staticClass:"card-info"},[t._v("MySQLを使ったアプリは何度か作成しました。")])]),t._v(" "),a("li",{directives:[{name:"scroll",rawName:"v-scroll",value:t.backScroll,expression:"backScroll"}],attrs:{crass:"card",id:"java"}},[a("h3",{staticClass:"card-title"},[t._v("java")]),t._v(" "),a("p",{staticClass:"card-info"},[t._v("Java silverの資格は持っています。")])])]),t._v(" "),a("h2",{staticClass:"title-skill"},[t._v("そのた")]),t._v(" "),a("ul",{staticClass:"cards"},[a("li",{directives:[{name:"scroll",rawName:"v-scroll",value:t.otherScroll,expression:"otherScroll"}],attrs:{crass:"card",id:"git"}},[a("h3",{staticClass:"card-title"},[t._v("GitHub")]),t._v(" "),a("p",{staticClass:"card-info"},[t._v("基本的な使い方は分かります。")])]),t._v(" "),a("li",{directives:[{name:"scroll",rawName:"v-scroll",value:t.otherScroll,expression:"otherScroll"}],attrs:{crass:"card",id:"aws"}},[a("h3",{staticClass:"card-title"},[t._v("AWS")]),t._v(" "),a("p",{staticClass:"card-info"},[t._v("何度かAWSでデプロイしました。")])])])])])},staticRenderFns:[]};var C=a("VU/8")(h,f,!1,function(t){a("B36V")},"data-v-a2880a20",null).exports,b={name:"App",components:{myheader:r,home:d,profile:_,work:m,skill:C}},g={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("myheader"),this._v(" "),s("home"),this._v(" "),s("profile"),this._v(" "),s("skill"),this._v(" "),s("work")],1)},staticRenderFns:[]};var w=a("VU/8")(b,g,!1,function(t){a("yqgt")},null,null).exports,k=a("Tqaz"),y=a("/ocq");a("Jmt5"),a("9M+g");i.default.use(y.a),i.default.use(k.a);var S=new y.a({routes:[{path:"/home",component:d},{path:"/profile",component:_},{path:"/work",component:m},{path:"/skill",component:C}]}),x=a("295d"),A=a.n(x);i.default.use(A.a),i.default.config.productionTip=!1,i.default.directive("scroll",{inserted:function(t,s){window.addEventListener("scroll",function a(i){s.value(i,t)&&window.removeEventListener("scroll",a)})}}),new i.default({el:"#app",router:S,components:{App:w},template:"<App/>"})},"Op/a":function(t,s){},ciAY:function(t,s){},gI9E:function(t,s){},uMhA:function(t,s){},w2KH:function(t,s,a){t.exports=a.p+"static/img/photo1.e537c69.jpeg"},yqgt:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.b8170a69c70da70fb3b5.js.map
(function(t){function e(e){for(var a,n,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);h&&h(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,s=1;s<i.length;s++){var l=i[s];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=i[0]))}return t}var a={},o={app:0},r=[];function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=a,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/eku-pd-certified-by-gs1-demo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var h=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("85ec"),o=i.n(a);o.a},"0bb0":function(t,e,i){t.exports=i.p+"img/pump.dc7a79bf.png"},"10a5":function(t,e,i){t.exports=i.p+"img/short-chain.fb95498e.png"},"150f":function(t,e,i){t.exports=i.p+"img/GS1-Germany-Logo.32cb59df.png"},"1b04":function(t,e,i){t.exports=i.p+"img/GS1_Symbol_Info_Sign_RGB_2015-04-16.11eb86a6.png"},"2a70":function(t,e,i){t.exports=i.p+"img/Generator2.a78b48d2.png"},"37a1":function(t,e,i){t.exports=i.p+"img/chain.9a4e8cf8.png"},4299:function(t,e,i){"use strict";var a=i("9f75"),o=i.n(a);o.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),o=function(){var t=this,e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"fullsize",attrs:{id:"app"}},[e.showHello?o("div",{staticStyle:{width:"100vw",height:"100vh",top:"0",left:"0",position:"absolute","z-index":"9",background:"white"}}):e._e(),e.showHello?o("TextBox",{staticStyle:{"z-index":"10"},attrs:{left:"5vw",top:"10vh",width:"90vw"}},[o("div",{staticStyle:{padding:"1vw",width:"100%"}},[o("p",[e._v(" This is an interactive presentation of the usage of data and IDs "),o("a",{attrs:{href:"https://github.com/gs1-germany-innolab/CertifiedByGS1-Konzepte",target:"_blank"}},[e._v("Certified by GS1")]),e._v(" in a real life use case developed by "),o("a",{attrs:{href:"https://www.ekupd.com/",target:"_blank"}},[e._v("EKU Power Drives")]),e._v(". ")]),o("b",{staticStyle:{"margin-top":"2vw","margin-bottom":"2vw"}},[e._v(" Interested in the Ideas? Develop them with us! Contact "),o("a",{attrs:{href:"mailto:certified@gs1.de"}},[e._v("the Certified by GS1 Team")]),e._v("! ")])]),o("progress-bar-to-button",{staticStyle:{margin:"5vw"},attrs:{counter:100,color:e.lighningBlue},on:{click:function(t){e.showHello=!1}}},[e._v("Start the Demo")])],1):e._e(),e._l(e.pumps,(function(t,a){return o("div",{key:t.gs1id,style:"top:33vw;left:"+(18+25*a)+"vw;position:absolute;z-index:1;width:13vw;"},[o("img",{staticStyle:{width:"100%"},attrs:{src:i("0bb0"),alt:"Pump"}}),o("ShowHideDigitalTypeLabel",{staticStyle:{"z-index":"2"},attrs:{color:e.hacked?e.lightningRed:e.lightningGreen,type:e.pumps[a],top:"0",left:"2vw",certified:e.certified,show:e.triggerTypelabel}})],1)})),e.dynamic?e._e():o("TextBox",{staticStyle:{"z-index":"1","font-weight":"bold"},attrs:{right:"1vw",top:"1vh",width:"35vw",color:e.powerBalance<0?e.lightningRed:e.lightningGreen}},[e._v("Total Capacity "+e._s(e.powerBalance)+" kW")]),e.dynamic?o("TextBox",{staticStyle:{"z-index":"1","font-weight":"bold"},attrs:{right:"1vw",top:"1vh",width:"35vw",color:0===e.totalLoad?e.lightningGreen:e.lightningRed}},[e._v(" Power Balance: "+e._s(Math.round(e.totalLoad))+" kW "),o("br")]):e._e(),e.powerBalance<0&&!e.showNoCertText?o("button",{staticClass:"btn btn-info btn-lg",style:"width:35vw; right:1vw; top:7vw;z-index:2; position:absolute;background-color:"+this.lighningBlue+"; border-style: none; border-radius: 0;",attrs:{type:"button"},on:{click:function(){t.showStore=!0}}},[e._v(" Rent Generators ")]):e._e(),o("div",{staticStyle:{position:"absolute",left:"40vw",top:"15vw","z-index":"1"}},[o("img",{staticClass:"mr-3",staticStyle:{width:"calc(5px + 10vw)"},attrs:{src:e.powerBalance<0||0!=this.totalLoad?i("68c1"):i("fa52"),alt:"Red Lightning"}})]),e.showInitText?o("TextBox",{staticStyle:{"z-index":"1"},attrs:{left:"1vw",top:"1vw",width:"35vw",show:"true"}},[e._v("You are mining resources in a remote area without electricity. You need to setup a micro grid to power your machines.")]):e._e(),e.showStore?o("div",{staticClass:"jumbotron",staticStyle:{"background-color":"white",position:"absolute","z-index":"10",width:"96vw",height:"96vh",top:"2vh",left:"2vw",overflow:"auto"}},[o("h2",{staticClass:"display-4"},[e._v("Distributor Eve")]),o("p",{staticClass:"lead"},[e._v(" Rent generators to produce the electric energy needed in the field. ")]),o("hr",{staticClass:"my-4"}),e._l(e.generators,(function(t,i){return o("div",{key:t.pic,staticStyle:{display:"inline-block"}},[o("img",{staticClass:"mr-3",attrs:{src:t.pic,alt:"Generator",width:"200"}}),o("DigitalTypeLabel",{style:"z-index:"+(20-i)+"; position:relative;",attrs:{type:t,color:e.lightningBlue,width:"190px",height:"210px",certified:e.certified}}),o("div",{staticClass:"form-check-inline mr-5 ml-5"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.active,expression:"generator.active"}],staticClass:"form-check-input position-static mr-5 ml-5",attrs:{type:"checkbox",id:"blankCheckbox",value:"option1","aria-label":"..."},domProps:{checked:Array.isArray(t.active)?e._i(t.active,"option1")>-1:t.active},on:{change:function(i){var a=t.active,o=i.target,r=!!o.checked;if(Array.isArray(a)){var n="option1",s=e._i(a,n);o.checked?s<0&&e.$set(t,"active",a.concat([n])):s>-1&&e.$set(t,"active",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(t,"active",r)}}})])],1)})),o("hr",{staticClass:"my-4"}),o("h2",{staticStyle:{color:"#454545"}},[e._v(" Energy demand: "),e.powerBalance<0?o("span",[e._v(e._s(-e.powerBalance)+"kW")]):e._e(),e.powerBalance>=0?o("span",[e._v("satisfied")]):e._e()]),o("button",{staticClass:"btn btn-info btn-lg",style:"background-color:"+this.lighningBlue+";border-style: none; border-radius: 0;",attrs:{type:"button"},on:{click:e.rent}},[e._v(" Rent Generators ")]),o("button",{staticClass:"close",staticStyle:{position:"absolute",right:"1vw",top:"0.5vw","border-style":"none","border-radius":"0"},attrs:{type:"button","aria-label":"Close"},on:{click:e.rent}},[o("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]),e.certified?o("TextBox",{staticStyle:{"z-index":"21"},attrs:{left:"1vw",top:"1vw",width:"35vw",show:"true"}},[e._v("Authenticity of the digital type label is guaranteed by a signature of the manufacturer. The manufactruer's identity is authenticated by GS1.")]):e._e()],2):e._e(),e._l(e.generators,(function(t,a){return o("div",{key:t.pic,style:"z-index:2;display:inline-block;position:absolute;top:41vw;left: "+(25*a+5)+"vw;"},[t.active?o("div",[o("img",{staticClass:"mr-3",staticStyle:{width:"calc(10vw + 50px)",position:"absolute",left:"0",top:"0"},attrs:{src:t.pic,alt:"Generator"}}),t.smoking?o("img",{staticClass:"mr-3",staticStyle:{width:"calc(8vw + 10px)",position:"absolute",top:"-3vw",left:"-3vw"},attrs:{src:i("8571"),alt:"Smoke"}}):e._e(),o("ShowHideDigitalTypeLabel",{staticStyle:{position:"relative",top:"0",left:"2vw"},attrs:{type:t,color:t.smoking?e.lightningRed:e.lightningGreen,width:"190px",height:"210px",show:t.smoking||e.triggerTypelabel,certified:e.certified}})],1):e._e()])})),e.showNoCertText&&!e.overheated?o("TextBox",{staticStyle:{"z-index":"1"},attrs:{left:"1vw",top:"1vw",width:"35vw",show:"true"}},[e._v("You have rented a few generators according to the digital type label provided by the retailer. Everything seems to be running smoothly. ")]):e._e(),e.showNoCertText&&!e.overheated?o("progress-bar-to-button",{staticStyle:{width:"35vw",right:"1vw",top:"7vw","z-index":"2",position:"absolute"},attrs:{counter:100-10*e.timer,color:e.lightningRed},on:{click:e.overheat}},[e._v("Are the generators working as expected?")]):e._e(),e.showNoCertText&&e.overheated?o("TextBox",{staticStyle:{"z-index":"1"},attrs:{left:"1vw",top:"1vw",width:"35vw",color:e.lightningRed,show:"true"}},[e._v(" The Digital Type Label was tuned! "),o("br"),e._v("The Generator has been operated outside specifications! "),o("br"),e._v("Overheating leads to a power outage. ")]):e._e(),e.showNoCertText&&e.overheated?o("progress-bar-to-button",{staticStyle:{width:"35vw",right:"1vw",top:"7vw","z-index":"2",position:"absolute"},attrs:{counter:100-10*e.timer,color:e.lighningBlue},on:{click:e.endNoCert}},[e._v(" What if the digital type label had been "),o("br"),e._v("Certified By GS1 ? ")]):e._e(),e.showExplainCertified&&e.powerBalance<0?o("TextBox",{staticStyle:{"z-index":"2"},attrs:{left:"1vw",top:"1vw",width:"35vw",color:e.lightningGreen}},[e._v(" Problem: How can the user know that data is authentic? "),o("br"),e._v("Solution: A trustworthy digital signature by the manufacturer can be verified automatically. "),o("br"),o("img",{staticClass:"mr-3",staticStyle:{width:"30vw"},attrs:{src:i("10a5"),alt:"Certificate Chain"}})]):e._e(),e.showExplainCertified&&e.powerBalance>=0?o("TextBox",{staticStyle:{"z-index":"1"},attrs:{left:"1vw",top:"1vw",width:"35vw",show:"true"}},[e._v(" A complete chain of trust authentificates the identity of the device manufacturer and the correctness of the type labels. "),o("br"),e._v("Congratulations! You have setup a stable micro grid! ")]):e._e(),e.showExplainCertified&&e.powerBalance>=0?o("progress-bar-to-button",{staticStyle:{width:"35vw",right:"1vw",top:"7vw","z-index":"2",position:"absolute"},attrs:{counter:100-10*e.timer,color:e.lighningBlue},on:{click:e.endTypeLabelStory}},[e._v("Start Operations")]):e._e(),!e.dynamic||e.hacked||e.certified?e._e():o("TextBox",{staticStyle:{"z-index":"1"},attrs:{left:"1vw",top:"1vw",width:"35vw"}},[e._v("Dynamic data is used to regulate the grid, concretely to optimize the generator efficiency and hence minimise fuel consumption.")]),!e.dynamic||e.hacked||e.certified?e._e():o("progress-bar-to-button",{staticStyle:{width:"35vw",right:"1vw",top:"7vw","z-index":"2",position:"absolute"},attrs:{counter:100-10*e.timer,color:"black"},on:{click:e.hackData}},[e._v("Hack Data!")]),e.hacked?o("TextBox",{staticStyle:{"z-index":"1"},attrs:{left:"1vw",top:"1vw",width:"35vw",color:e.lightningRed}},[e._v(" The status information received from the pumps has been hacked to show 0 load. All generators have been switched off and your operations grind to a hold. ")]):e._e(),e.dynamic&&e.hacked&&!e.certified?o("progress-bar-to-button",{staticStyle:{width:"35vw",right:"1vw",top:"7vw","z-index":"2",position:"absolute"},attrs:{counter:100-10*e.timer,color:"lighningBlue"},on:{click:e.dynamicCert}},[e._v(" What if the dynamic data had been "),o("br"),e._v("Certified By GS1 ? ")]):e._e(),e.dynamic&&e.certified&&!e.showPPU?o("TextBox",{staticStyle:{"z-index":"1"},attrs:{left:"1vw",top:"1vw",width:"35vw",color:e.lightningGreen}},[e._v(' Problem: Is the machine "who" it claims to be? Is the data from the machine authentic? '),o("br"),e._v("Solution: Again, a trustworthy digital signature can remedy the situation. Here the machine authenticates its own data by a digital signature. The machine is authenticated by the manufacturer who in turn gets an authentic Id from GS1. "),o("br"),o("img",{staticClass:"mr-3",staticStyle:{width:"30vw"},attrs:{src:i("37a1"),alt:"Certificate Chain"}})]):e._e(),e.dynamic&&e.certified&&!e.showPPU?o("progress-bar-to-button",{staticStyle:{width:"35vw",right:"1vw",top:"7vw","z-index":"2",position:"absolute"},attrs:{counter:100-10*e.timer,color:e.lighningBlue},on:{click:function(t){e.showPPU=!0,e.timer=10}}},[e._v("Pay Per Use")]):e._e(),e.showPPU?o("TextBox",{staticStyle:{"z-index":"1"},attrs:{left:"1vw",top:"1vw",width:"35vw"}},[e._v(" Certified usage data is signed by a trusted device and can not be tampered with by you, the rental company, or anyone. Such trustworthy data is needed as a basis for pay per use models to bill the used kWhs instead of just renting the generator for a fixed time period. "),o("br"),o("img",{staticClass:"mr-3",staticStyle:{width:"30vw"},attrs:{src:i("37a1"),alt:"Certificate Chain"}})]):e._e(),e.showPPU?o("progress-bar-to-button",{staticStyle:{width:"35vw",right:"1vw",top:"7vw","z-index":"2",position:"absolute"},attrs:{counter:100-10*e.timer,color:e.lighningBlue},on:{click:function(t){e.showCredits=!0,e.timer=10}}},[e._v("Credits")]):e._e(),e.showCredits?o("TextBox",{staticStyle:{"z-index":"10"},attrs:{left:"1vw",top:"1vw",width:"98vw"}},[o("a",{staticClass:"github-corner",attrs:{href:"https://github.com/gs1-germany-innolab/eku-pd-certified-by-gs1-demo","aria-label":"View source on GitHub"}},[o("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[o("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),o("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),o("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),o("div",{staticStyle:{"font-size":"1vw","text-align":"left",padding:"1vw",width:"100%"}},[o("h1",[e._v("Credits")]),o("p",[e._v(" This presentation hihglights how the ideas developed within the Certified by GS1 project by "),o("a",{attrs:{href:"https://www.gs1-germany.de/",target:"_blank"}},[e._v("GS1 Germany")]),e._v(" can be applied in a real life use case developed by "),o("a",{attrs:{href:"https://www.ekupd.com/",target:"_blank"}},[e._v("EKU Power Drives")]),e._v(". The initial Design and implementation of this presentation was done by Kevin Ochudlo and Dr. Sebastian Schmittner of "),o("a",{attrs:{href:"https://www.eecc.de/",target:"_blank"}},[e._v("EECC")]),e._v(". The designed was improved in version 2 to meet the GS1 corporate design criteria with the help of Gina Hinrichs, GS1. Many thanks to all contributors! ")]),o("ul",{staticStyle:{display:"flex","justify-content":"space-between",margin:"3vw"}},[o("li",{staticStyle:{display:"inline-block"}},[o("a",{attrs:{href:"https://github.com/gs1-germany-innolab/CertifiedByGS1-Konzepte",target:"_blank"}},[o("img",{staticClass:"logo",attrs:{src:i("958b"),alt:"Certified by GS1",title:"Certified by GS1"}})])]),o("li",{staticStyle:{display:"inline-block"}},[o("a",{attrs:{href:"https://www.gs1-germany.de/",target:"_blank"}},[o("img",{staticClass:"logo",attrs:{src:i("150f"),alt:"GS1 Germany",title:"GS1 Germany"}})])]),o("li",{staticStyle:{display:"inline-block"}},[o("a",{attrs:{href:"https://www.ekupd.com/",target:"_blank"}},[o("img",{staticClass:"logo",attrs:{src:i("f999"),alt:"EKU Power Drives",title:"EKU Power Drives"}})])]),o("li",{staticStyle:{display:"inline-block"}},[o("a",{attrs:{href:"https://www.eecc.de/",target:"_blank"}},[o("img",{staticClass:"logo",attrs:{src:i("7b18"),alt:"EECC",title:"EECC"}})])])]),o("br"),o("h1",{staticStyle:{"margin-top":"2vw","margin-bottom":"2vw"}},[e._v(" Interested in the Ideas? Develop them with us! Contact "),o("a",{attrs:{href:"mailto:certified@gs1.de"}},[e._v("the Certified by GS1 Team")]),e._v("! ")]),o("br"),o("p",[e._v(" This interactive presentation was build with "),o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Vue.js")])]),o("li",[o("a",{attrs:{href:"https://getbootstrap.com/",target:"_blank"}},[e._v("Bootstrap")])])]),o("a",{attrs:{href:"https://github.com/gs1-germany-innolab/eku-pd-certified-by-gs1-demo"}},[e._v("It is open source on Github.")])])]),e.showPPU?o("progress-bar-to-button",{attrs:{counter:100-10*e.timer,color:e.lighningBlue},on:{click:e.restart}},[e._v("Restart")]):e._e()],1):e._e()],2)},r=[],n=(i("d81d"),i("13d5"),i("b85c")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("TextBox",{staticStyle:{"margin-left":"2px","margin-right":"2px"},attrs:{width:"calc(60px + 12vw)",height:"calc(60px + 10vw)",color:t.color}},[a("div",{staticStyle:{"margin-bottom":"0.7vw",position:"relative","padding-bottom":"1vw"}},[a("div",{staticClass:"dtlCaption"},[t._v(t._s(t.type.caption))]),a("div",{staticClass:"dtlRow"},[t._v(t._s(t.type.asset))]),a("div",{staticClass:"dtlRow"},[t._v(t._s(t.type.gs1id))]),a("div",{staticClass:"dtlRow"},[t._v(t._s(t.type.label3))]),a("div",{staticClass:"dtlRow"},[t._v(t._s(t.type.label4))]),t.certified?a("img",{staticClass:"cert",attrs:{src:i("bc98"),alt:"Certified"}}):t._e()])])},l=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"textBox textBoxBorder",style:t.computedStyle},[t._t("default")],2)},h=[],d={name:"TextBox",components:{},props:["width","color","top","left","right"],computed:{computedStyle:function(){return{width:this.width,top:this.top,left:this.left,right:this.right,color:this.color}}}},p=d,u=(i("4299"),i("2877")),g=Object(u["a"])(p,c,h,!1,null,null,null),f=g.exports,v={name:"DigitalTypeLabel",components:{TextBox:f},props:["type","color","certified"],data:function(){return{}},mounted:function(){console.log(this.type)}},w=v,b=(i("c049"),Object(u["a"])(w,s,l,!1,null,null,null)),m=b.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ShowHideBox",{attrs:{top:t.top,left:t.left,width:"290px",height:"230px",show:t.show}},[i("DigitalTypeLabel",{attrs:{certified:t.certified,color:t.color,type:t.type}})],1)},_=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{position:"absolute",left:t.left,right:t.right,top:t.top,width:t.width,height:t.height}},[t.showing?a("div",{on:{click:t.toggle}},[t._t("default")],2):t._e(),t.showing?t._e():a("div",{on:{click:t.toggle}},[a("img",{staticStyle:{width:"calc(8px + 5vw)",position:"absolute",top:"0",left:"0"},attrs:{src:i("1b04"),alt:"Info"}})])])},C=[],S={name:"ShowHideBox",components:{},props:["top","left","right","width","height","show"],watch:{show:function(t,e){console.log("show changed from "+e+" to "+t),this.showing=e!=t?t:this.showing}},data:function(){return{showing:!1}},mounted:function(){this.showing=this.show},methods:{toggle:function(){this.showing=!this.showing}}},k=S,T=Object(u["a"])(k,x,C,!1,null,null,null),B=T.exports,G={name:"ShowHideDigitalTypeLabel",components:{ShowHideBox:B,DigitalTypeLabel:m},props:["color","top","left","type","show","certified"]},P=G,L=Object(u["a"])(P,y,_,!1,null,null,null),z=L.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"text-align":"right",position:"relative"}},[i("div",{staticClass:"progress",style:"width:100%;position:absolute;left:0;height:100%;top:0;z-index:15; border-style: none; border-radius: 0;"},[i("div",{staticClass:"progress-bar",style:"height:100%; width: "+Math.min(this.counter,100)+"%; background-color:"+this.color+"; position:absolute; left:0; border-style: none; border-radius: 0;",attrs:{role:"progressbar"}})]),i("button",{staticClass:"btn btn-primary btn-lg",style:"font-size: calc(5px + 1vw); font-weight: bold; background-color:"+this.color+";border-color:"+this.color+";z-index:100;position:relative;width:100%;height:100%;border-style: none; border-radius: 0;",attrs:{disabled:t.counter<100,type:"button"},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)])},M=[],I={name:"ProgressBarToButton",components:{},props:["color","counter"]},O=I,j=Object(u["a"])(O,D,M,!1,null,null,null),E=j.exports,R={name:"App",components:{DigitalTypeLabel:m,TextBox:f,ShowHideDigitalTypeLabel:z,ProgressBarToButton:E},data:function(){return{showHello:!0,showInitText:!0,showStore:!1,showNoCertText:!1,overheated:!1,timer:null,timerInterval:null,randomDataInterval:null,certified:!1,showExplainCertified:!1,hacked:!1,dynamic:!1,totalLoad:0,triggerTypelabel:!1,showPPU:!1,showCredits:!1,lightningRed:"#F26334",lightningGreen:"#00b74f",lighningBlue:"#002c6c",pumps:[{caption:"",capacity:-100,asset:"Pump 1",gs1id:"8004 40471112342",label3:"Manufacturer 001",label4:"",health:99,load:-70},{caption:"",capacity:-80,asset:"Pump 2",gs1id:"8004 061414112345401",label3:"Manufacturer 002",label4:"",health:99,load:-50},{caption:"",capacity:-30,asset:"Pump 3",gs1id:"8004 40471112322",label3:"Manufacturer 003",label4:"",health:99,load:-20}],generators:[{caption:"",label4:"",capacity:100,asset:"Generator 1",gs1id:"8004 404711165434",label3:"Manufacturer A",active:!1,pic:i("5783"),smoking:!1,health:99,load:50},{caption:"",label4:"",capacity:80,asset:"Generator 2",gs1id:"8004 40471116542",label3:"Manufacturer A",active:!1,pic:i("2a70"),smoking:!1,health:99,load:20},{caption:"",label4:"",capacity:50,asset:"Generator 3",gs1id:"8004 404712123",label3:"Manufacturer B",active:!1,pic:i("9d4c"),smoking:!1,health:99,load:20},{caption:"",label4:"",capacity:30,asset:"Generator 4",gs1id:"8004 40994712321",label3:"Manufacturer C",active:!1,pic:i("7ba6"),smoking:!1,health:99,load:20}]}},mounted:function(){this.resetPumpsAndGenerators(),this.timerInterval=setInterval(this.tick,250),this.randomDataInterval=setInterval(this.randomData,500)},beforeDestroy:function(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this.randomDataInterval&&(clearInterval(this.randomDataInterval),this.randomDataInterval=null)},methods:{restart:function(){location.reload()},tick:function(){this.timer-=.25},overheat:function(){this.overheated=!0,console.log("BOOM! ;)"),console.log(this.generators);var t,e=Object(n["a"])(this.generators);try{for(e.s();!(t=e.n()).done;){var i=t.value;if(i.active&&(console.log("smoking:"),console.log(i),console.log("power balance:",this.powerBalance),i.smoking=!0,i.label4="Load Capacity: ??? kW",this.powerBalance<0))break}}catch(a){e.e(a)}finally{e.f()}this.timer=10},rent:function(){console.log("Renting"),this.showStore=!1,this.powerBalance<0||(this.showInitText=!1,this.timer=10,this.certified||(this.showNoCertText=!0))},resetPumpsAndGenerators:function(){var t,e=Object(n["a"])(this.generators);try{for(e.s();!(t=e.n()).done;){var i=t.value;i.caption="Digital Type Label",i.active=!1,i.smoking=!1,i.label4="Load Capacity: "+i.capacity+" kW"}}catch(s){e.e(s)}finally{e.f()}var a,o=Object(n["a"])(this.pumps);try{for(o.s();!(a=o.n()).done;){var r=a.value;r.label4="Max. Load: "+-r.capacity+" kW",r.caption="Digital Type Label"}}catch(s){o.e(s)}finally{o.f()}},endNoCert:function(){this.certified=!0,this.showExplainCertified=!0,this.showNoCertText=!1,this.resetPumpsAndGenerators()},endTypeLabelStory:function(){this.certified=!1,this.showExplainCertified=!1,this.dynamic=!0,this.timer=10,this.triggerTypelabel=!1,this.triggerTypelabel=!0},randomData:function(){if(this.dynamic){this.totalLoad=0;var t,e=0,i=Object(n["a"])(this.pumps);try{for(i.s();!(t=i.n()).done;){var a=t.value;a.caption="Status",a.health+=1-2*Math.random(),a.health=Math.min(Math.max(10,a.health),100),a.label3="Health: "+Math.round(a.health)+" %",a.load+=2-4*Math.random(),a.load=Math.min(Math.max(a.capacity,a.load),0),this.totalLoad+=a.load,this.hacked||(e+=a.load),a.label4="Current Load: "+(this.hacked?"0":Math.round(-a.load))+" kW"}}catch(l){i.e(l)}finally{i.f()}var o,r=Object(n["a"])(this.generators);try{for(r.s();!(o=r.n()).done;){var s=o.value;s.caption="Status",s.load=Math.min(s.capacity,-e),this.totalLoad+=s.load,e+=s.load,s.health+=2-4*Math.random(),s.health=Math.min(Math.max(10,s.health),100),s.label3="Health: "+Math.round(s.health)+" %",0===s.load&&(s.health=100,s.label3="Shut Down."),s.label4="Current Load: "+Math.round(s.load)+" kW"}}catch(l){r.e(l)}finally{r.f()}}},hackData:function(){this.hacked=!0,this.timer=10},dynamicCert:function(){this.hacked=!1,this.certified=!0,this.triggerTypelabel=!1,this.triggerTypelabel=!0,this.timer=10}},computed:{powerBalance:function(){return this.pumps.map((function(t){return t.capacity})).reduce((function(t,e){return t+e}),0)+this.generators.map((function(t){return t.active&&!t.smoking?t.capacity:0})).reduce((function(t,e){return t+e}),0)}}},H=R,A=(i("034f"),Object(u["a"])(H,o,r,!1,null,null,null)),U=A.exports;i("4989"),i("ab8b");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(U)}}).$mount("#app")},5783:function(t,e,i){t.exports=i.p+"img/Generator1.b076a0e3.png"},"670f":function(t,e,i){},"68c1":function(t,e,i){t.exports=i.p+"img/redLightning.1238fa17.png"},"7b18":function(t,e,i){t.exports=i.p+"img/eecc_logo.fd55f1cd.png"},"7ba6":function(t,e,i){t.exports=i.p+"img/Generator4.290fc2c1.png"},8571:function(t,e,i){t.exports=i.p+"img/smoke.e317fe3b.png"},"85ec":function(t,e,i){},"958b":function(t,e,i){t.exports=i.p+"img/Certified_by_GS1_Logo.b13b58b7.png"},"9d4c":function(t,e,i){t.exports=i.p+"img/Generator3.b42f2d13.png"},"9f75":function(t,e,i){},bc98:function(t,e,i){t.exports=i.p+"img/cert.cbc3906f.png"},c049:function(t,e,i){"use strict";var a=i("670f"),o=i.n(a);o.a},f999:function(t,e,i){t.exports=i.p+"img/EKUlogoh.2c431497.png"},fa52:function(t,e,i){t.exports=i.p+"img/greenLightning.cb51d6ff.png"}});
//# sourceMappingURL=app.e0cae550.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{194:function(t,e,r){var content=r(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("648671b6",content,!0,{sourceMap:!1})},207:function(t,e,r){"use strict";var n=r(194);r.n(n).a},208:function(t,e,r){(e=r(48)(!1)).push([t.i,".top-vis svg[data-v-0761c676],.vis[data-v-0761c676]{color:#fff}.vis[data-v-0761c676]{background-color:#fff;margin:20px;box-shadow:5px 10px 20px #1e1e1e;overflow:hidden;background-color:#282828}.top-vis[data-v-0761c676],.vis[data-v-0761c676]{border-radius:25px}.top-vis[data-v-0761c676]{background-image:linear-gradient(to bottom right,#f2709c,#ff9472);padding:20px}.vis-body[data-v-0761c676]{margin:20px}.axis-label[data-v-0761c676]{font-size:10}h1[data-v-0761c676]{padding:10px 0 0}path[data-v-0761c676]{transition:all .5s ease}.label[data-v-0761c676]{text-transform:uppercase;font-size:10px}.end-label[data-v-0761c676]{font-size:8px;transform:translate(2px,2px)}",""]),t.exports=e},211:function(t,e,r){"use strict";r(149),r(226),r(75),r(227);var n=r(201),c={name:"Symbol-graph",components:{},props:{ticks:{type:Object},average:{type:Object},symbol:{type:String},eventX:{type:Number,default:0},selectInterval:{type:Number},vsMarket:{type:Boolean}},data:function(){return{margin:{top:40,left:40,bottom:30,right:50},candleStroke:"#ffc864",averageStroke:"#3A8997",svgHeight:250,svgWidth:400}},created:function(){},watch:{},mounted:function(){},computed:{tickKeys:function(){return Object.keys(this.ticks)},averageKeys:function(){return Object.keys(this.average)},lastTick:function(){return this.ticks[this.tickKeys[this.tickKeys.length-1]]},lastAverage:function(){return this.average[this.averageKeys[this.averageKeys.length-1]]},tickVals:function(){return Object.values(this.ticks)},averageVals:function(){return Object.values(this.average)},innerWidth:function(){return this.svgWidth-this.margin.left-this.margin.right},innerHeight:function(){return this.svgHeight-this.margin.top-this.margin.bottom},hoverTime:function(){return this.timeScale.invert(this.rectWidth)},hoverIndex:function(){return Math.floor((this.tickKeys.length-1)*(this.rectWidth/this.innerWidth))},currentIndex:function(){return 0==this.hoverIndex||this.hoverIndex>this.tickKeys.length-1?this.tickKeys[this.tickKeys.length-1]:this.tickKeys[this.hoverIndex]},priceColor:function(){return this.sma-this.ticks[this.currentIndex].c>0?"#4AF2A1":"#FF595E"},priceDiff:function(){return this.lastTick.c-this.ticks[this.currentIndex].c},priceDiffPercent:function(){return 100*(this.lastTick.c/this.ticks[this.currentIndex].c-1)},marketDiffPercent:function(){return this.lastAverage.tracker-this.average[this.currentIndex].tracker},difference:function(){var t={};for(var i in this.ticks)t[this.ticks[i].t]={t:this.ticks[i].t,tracker:this.ticks[i].tracker-this.average[i].tracker};return t},rectWidth:function(){return this.eventX-this.margin.left>0?this.eventX-this.margin.left:0},start:function(){return n.min(this.tickKeys)},end:function(){return n.max(this.tickKeys)},width:function(){return this.svgWidth-this.margin.left-this.margin.right},height:function(){return this.svgHeight-this.margin.top-this.margin.bottom},candlePath:function(){var t=this;return n.line().x((function(e){return t.timeScale(e.t)})).y((function(e){return t.priceScale(t.vsMarket?e.tracker:e.c)})).curve(n.curveCardinal)(this.vsMarket?Object.values(this.difference):Object.values(this.ticks))},timeScale:function(){var t=n.scaleTime().range([0,this.width]);return t.domain([this.start,this.end]),t},priceScale:function(){var t=n.scaleLinear().range([this.height,0]),e=n.extent(Object.values(this.difference),(function(t){return t.tracker})),r=Math.max(Math.abs(e[0]),e[1]);return this.vsMarket?t.domain([-Math.abs(r),r]):t.domain(n.extent(this.tickVals,(function(t){return t.c}))),t},diffScale:function(){var t=n.scaleLinear().range([this.height,0]),e=n.extent(Object.values(this.difference),(function(t){return t.tracker})),r=Math.max(Math.abs(e[0]),e[1]);return t.domain([-Math.abs(r),r]),t},averagePath:function(){var t=this;return n.line().x((function(e){return t.timeScale(e.t)})).y((function(e){return t.vsMarket?t.priceScale(0):t.averageScale(e.tracker)})).curve(n.curveCardinal)(this.averageVals)},averageScale:function(){var t=n.scaleLinear().range([this.height,0]);return t.domain(n.extent(this.averageVals,(function(t){return t.tracker}))),t}},methods:{},directives:{axis:function(t,e){var r=e.arg,c={x:"axisBottom",y:"axisLeft",z:"axisRight"}[r],o=e.value;n.select(t).transition().call(n[c](o).ticks(5))},gridlines:function(t,e,r){var c=e.arg,o=e.value;"x"==c&&n.select(t).call((function(g){return g.attr("class","grid-lines").selectAll("line").data(o.ticks()).join("line").attr("stroke","white").attr("stroke-opacity","0.2").attr("x1",(function(t){return o(t)})).attr("x2",(function(t){return o(t)})).attr("y1",0).attr("y2",r.context.svgHeight-r.context.margin.bottom-r.context.margin.top)})),"y"==c&&n.select(t).call((function(g){return g.attr("class","grid-lines").selectAll("line").data(o.ticks()).join("line").attr("stroke","white").attr("stroke-opacity","0.2").attr("x1",0).attr("x2",r.context.svgWidth-r.context.margin.right-r.context.margin.left).attr("y1",(function(t){return o(t)})).attr("y2",(function(t){return o(t)}))}))}}},o=(r(207),r(30)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vis"},[r("div",{staticClass:"top-vis"},[r("svg",{attrs:{width:t.svgWidth,height:t.svgHeight}},[r("g",{attrs:{transform:"translate("+t.margin.left+","+t.margin.top+")"},on:{mouseover:function(e){return t.$emit("mouse-event",e)}}},[r("g",[r("g",{directives:[{name:"gridlines",rawName:"v-gridlines:y",value:t.priceScale,expression:"priceScale",arg:"y"}]}),t._v(" "),r("g",{directives:[{name:"gridlines",rawName:"v-gridlines:x",value:t.timeScale,expression:"timeScale",arg:"x"}]}),t._v(" "),r("line",{attrs:{x1:t.rectWidth,y1:"0",x2:t.rectWidth,y2:t.innerHeight,stroke:"white","stroke-opacity":"0.2","stroke-width":"9"}}),t._v(" "),r("path",{attrs:{d:t.averagePath,stroke:t.averageStroke,"stroke-width":"2px",fill:"none","stroke-dasharray":"4,4"}}),t._v(" "),r("path",{attrs:{d:t.candlePath,stroke:"white","stroke-width":"8px",fill:"none","stroke-linecap":"round"}}),t._v(" "),r("path",{attrs:{d:t.candlePath,stroke:t.candleStroke,"stroke-width":"3px",fill:"none","stroke-linecap":"round"}}),t._v(" "),r("line",{attrs:{x1:t.rectWidth,y1:"0",x2:t.rectWidth,y2:t.innerHeight,stroke:"rgb(175, 175, 175)","stroke-width":"1","stroke-dasharray":"2,2"}}),t._v(" "),r("text",{staticClass:"end-label",attrs:{x:t.innerWidth,y:t.vsMarket?t.priceScale(Object.values(t.difference)[Object.values(t.difference).length-1].tracker):t.priceScale(t.lastTick.c),fill:"#000"}},[t._v(t._s(t.symbol))]),t._v(" "),r("text",{staticClass:"end-label",attrs:{x:t.innerWidth,y:t.vsMarket?t.priceScale(0):t.averageScale(t.lastAverage.tracker),fill:"#000"}},[t._v("market")])]),t._v(" "),r("g",{directives:[{name:"axis",rawName:"v-axis:x",value:t.timeScale,expression:"timeScale",arg:"x"}],attrs:{transform:"translate(0, "+t.height+")"}}),t._v(" "),r("g",{directives:[{name:"axis",rawName:"v-axis:y",value:t.priceScale,expression:"priceScale",arg:"y"}]})])]),t._v(" "),r("p",{staticClass:"label"},[t._v(t._s(new Date(t.lastTick.t)))]),t._v(" "),r("p",{staticClass:"label"},[t._v(t._s(new Date(t.ticks[t.currentIndex].t)))]),t._v(" "),r("p",{staticClass:"label"},[t._v("Current Price:")]),r("h1",[t._v("$"+t._s(t.lastTick.c.toLocaleString()))]),t._v(" "),r("p",{staticClass:"label"},[t._v("Selected Price $"+t._s(t.ticks[t.currentIndex].c.toLocaleString()))]),t._v(" "),r("p",{staticClass:"label"},[t._v("Price Change $"+t._s(t.priceDiff.toLocaleString()))]),t._v(" "),r("p",{staticClass:"label"},[t._v("Price Change "+t._s(t.priceDiffPercent.toLocaleString())+"%")]),t._v(" "),r("p",{staticClass:"label"},[t._v("Market Change "+t._s(t.marketDiffPercent.toLocaleString())+"%")])]),t._v(" "),r("div",{staticClass:"vis-body"},[r("h1",[t._v(t._s(t.symbol))])])])}),[],!1,null,"0761c676",null);e.a=component.exports},221:function(t,e){},259:function(t,e,r){"use strict";r.r(e);r(33),r(50),r(51),r(103),r(52),r(34),r(53),r(148),r(35),r(54),r(26),r(75),r(14),r(36),r(55),r(37),r(56),r(38);var n=r(6),c=(r(212),r(211)),o=r(201);function l(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){l=!0,c=t},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw c}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}Date.prototype.addHours=function(t){return this.setTime(this.getTime()+60*t*60*1e3),this},Date.prototype.addMinutes=function(t){return this.setTime(this.getTime()+60*t*1e3),this},e.default={components:{"Symbol-graph":c.a},data:function(){return{intervals:["1m","3m","5m","15m","30m","1h","2h","4h","6h","8h","12h","1d","3d","1w"],selectedIntervals:["1h"],symbols:[],selectedSymbols:[],tickers:{},history:{},eventX:0,minuteDiff:{},hourDiff:{},volume:{},mrktDiff:{},vsMarket:!1,limit:"60"}},mounted:function(){var t=this;o.json("https://api.binance.com/api/v3/exchangeInfo").then((function(data){t.symbols=data.symbols.filter((function(t){return"USDT"==t.quoteAsset&&"TRADING"==t.status})).map((function(t){return t.symbol})),t.selectedSymbols=t.symbols.filter((function(t,i){return i<50}));var e=new WebSocket("wss://stream.binance.com:9443/ws"),r=t;e.onopen=function(t){var n,c=l(r.selectedIntervals);try{var h=function(){var t,c=n.value,h=l(r.selectedSymbols);try{var f=function(){var symbol=t.value;o.json("https://api.binance.com/api/v3/klines?symbol=".concat(symbol,"&interval=").concat(c,"&limit=").concat(r.limit)).then((function(t){(t=t.map((function(t){return{s:symbol,i:c,t:t[0],o:parseFloat(t[1]),h:parseFloat(t[2]),l:parseFloat(t[3]),c:parseFloat(t[4]),v:parseFloat(t[5]),T:t[6],n:parseFloat(t[7]),V:t[8],Q:parseFloat(t[9])}}))).sort((function(a,b){return a.t>b.t?1:-1})),t.forEach((function(t){r.tickers.hasOwnProperty(symbol)||r.$set(r.tickers,symbol,{}),t=r.processTick(t),r.$set(r.tickers[symbol],t.t,t)})),e.send(JSON.stringify({method:"SUBSCRIBE",params:["".concat(symbol.toLowerCase(),"@kline_").concat(c)],id:1}))}))};for(h.s();!(t=h.n()).done;)f()}catch(t){h.e(t)}finally{h.f()}};for(c.s();!(n=c.n()).done;)h()}catch(t){c.e(t)}finally{c.f()}e.onmessage=function(t){var data=JSON.parse(t.data);"k"in data?1==data.k.x&&(delete(data=data.k).B,delete data.f,delete data.L,delete data.q,delete data.x,console.log(data),r.tickers.hasOwnProperty(data.s)||r.$set(r.tickers,data.s,{}),data=r.processTick(data),r.$set(r.tickers[data.s],data.t,data)):console.log(data)}}}))},created:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},watch:{},computed:{kline_request_list:function(){var t=this;return this.selectedIntervals.map((function(e){return t.selectedSymbols.map((function(t){return"".concat(t.symbol.toLowerCase(),"@kline_").concat(e)}))}))},average:function(){var map={};for(var symbol in this.tickers)for(var t in this.tickers[symbol])map.hasOwnProperty(t)||(map[t]={percentageChange:[],tracker:[]}),map[t].tracker.push(this.tickers[symbol][t].tracker),map[t].percentageChange.push(this.tickers[symbol][t].percentageChange);for(var e in map)map[e]={percentageChange:o.mean(map[e].percentageChange),t:e,tracker:o.mean(map[e].tracker)};return map},minuteDiffRank:function(){var t=this,e=Object.keys(this.minuteDiff).map((function(e){return[e,t.minuteDiff[e]]}));return e.sort((function(a,b){return o.descending(a[1],b[1])})),e.map((function(t){return t[0]}))},hourDiffRank:function(){var t=this,e=Object.keys(this.hourDiff).map((function(e){return[e,t.hourDiff[e]]}));return e.sort((function(a,b){return o.descending(a[1],b[1])})),e.map((function(t){return t[0]}))},volumeRank:function(){var t=this,e=Object.keys(this.volume).map((function(e){return[e,t.volume[e]]}));return e.sort((function(a,b){return o.descending(a[1],b[1])})),e.map((function(t){return t[0]}))},mrktDiffRank:function(){var t=this,e=Object.keys(this.mrktDiff).map((function(e){return[e,t.mrktDiff[e]]}));return e.sort((function(a,b){return o.descending(a[1],b[1])})),e.map((function(t){return t[0]}))},rankColor:function(){return o.scaleSequential(o.interpolateRdYlGn).domain([this.minuteDiffRank.length-1,0])},overallRank:function(){for(var t={},e=0,r=Object.keys(this.tickers);e<r.length;e++){var symbol=r[e];t[symbol]=o.mean([this.minuteDiffRank.indexOf(symbol)+1,this.mrktDiffRank.indexOf(symbol)+1])}var n=Object.keys(t).map((function(e){return[e,t[e]]}));return n.sort((function(a,b){return o.ascending(a[1],b[1])})),n.map((function(t){return t[0]}))}},methods:{previousTickTime:function(t){var e=t.i.slice(t.i.length-1),r=t.i.substr(0,t.i.length-1);return t.t-r*{m:6e4,h:36e5,d:864e5,w:6048e5}[e]},mouseEvent:function(t){this.eventX=t.offsetX},symbolInfo:function(t){this.$set(this.mrktDiff,t.symbol,t.mrktDiff),this.$set(this.minuteDiff,t.symbol,t.minuteDiff),this.history.hasOwnProperty(t.symbol)||this.$set(this.history,t.symbol,{}),this.$set(this.history[t.symbol],t.time,this.overallRank.indexOf(t.symbol))},processTick:function(t){var e=this.previousTickTime(t);return this.tickers[t.s][e]?(t.change=t.c-this.tickers[t.s][e].c,t.percentageChange=t.c/this.tickers[t.s][e].c-1,t.tracker=this.tickers[t.s][e].tracker+t.percentageChange):(t.change=0,t.percentageChange=0,t.tracker=0),t}}}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{276:function(e,t,r){"use strict";r.r(t);r(34),r(50),r(51),r(103),r(56),r(37),r(52),r(149),r(33),r(53),r(26),r(14),r(35),r(54),r(38),r(55),r(39);var n=r(6),o=(r(212),r(227)),c=r(228),l=r(229),h=r(230),f=r(196);function m(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this},Date.prototype.addMinutes=function(e){return this.setTime(this.getTime()+60*e*1e3),this},t.default={components:{"Symbol-graph":o.a,"Rank-graph":c.a,"Comparison-graph":l.a,"Symbol-table":h.a},data:function(){return{intervals:["1m","3m","5m","15m","30m","1h","2h","4h","6h","8h","12h","1d","3d","1w"],selectedIntervals:["1m","15m","30m"],selectedInterval:"1m",symbols:[],selectedSymbols:[],tickers:{},history:{},eventX:0,minuteDiff:{},hourDiff:{},volume:{},mrktDiff:{},vsMarket:!1,limit:"60",hoverTime:0}},mounted:function(){var e=this;f.json("https://api.binance.com/api/v3/exchangeInfo").then((function(data){e.symbols=data.symbols.filter((function(e){return"USDT"==e.quoteAsset&&"TRADING"==e.status})).map((function(e){return e.symbol})),e.selectedSymbols=e.symbols.filter((function(e,i){return i<10}));var t=new WebSocket("wss://stream.binance.com:9443/ws"),r=e,n=[];t.onopen=function(e){var o,c=m(r.selectedIntervals);try{var l=function(){var e,t=o.value,c=m(r.selectedSymbols);try{var l=function(){var symbol=e.value;f.json("https://api.binance.com/api/v3/klines?symbol=".concat(symbol,"&interval=").concat(t,"&limit=").concat(r.limit)).then((function(e){(e=e.map((function(e){return{s:symbol,i:t,t:e[0],o:parseFloat(e[1]),h:parseFloat(e[2]),l:parseFloat(e[3]),c:parseFloat(e[4]),v:parseFloat(e[5]),T:e[6],q:parseFloat(e[7]),n:parseFloat(e[8]),V:parseFloat(e[9]),Q:parseFloat(e[10])}}))).sort((function(a,b){return a.t>b.t?1:-1})),e.forEach((function(e){r.tickers.hasOwnProperty(symbol)||r.$set(r.tickers,symbol,{}),r.tickers[symbol].hasOwnProperty(t)||r.$set(r.tickers[symbol],t,{}),e=r.processTick(e),r.$set(r.tickers[symbol][t],e.t,e)}))})),n.push("".concat(symbol.toLowerCase(),"@kline_").concat(t))};for(c.s();!(e=c.n()).done;)l()}catch(e){c.e(e)}finally{c.f()}};for(c.s();!(o=c.n()).done;)l()}catch(e){c.e(e)}finally{c.f()}t.onmessage=function(e){var data=JSON.parse(e.data);"k"in data?1==data.k.x&&(delete(data=data.k).B,delete data.f,delete data.L,delete data.x,console.log(data),r.tickers.hasOwnProperty(data.s)||r.$set(r.tickers,data.s,{}),r.tickers[data.s].hasOwnProperty(data.i)||r.$set(r.tickers[data.s],data.i,{}),data=r.processTick(data),r.$set(r.tickers[data.s][data.i],data.t,data)):console.log(data)}}}))},created:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},watch:{},computed:{average:function(){var map={};for(var symbol in this.tickers)for(var e in this.tickers[symbol])for(var t in map.hasOwnProperty(e)||(map[e]={}),this.tickers[symbol][e])map[e].hasOwnProperty(t)||(map[e][t]={percentageChange:[],tracker:[]}),"BTCUSDT"!=symbol&&(map[e][t].tracker.push(this.tickers[symbol][e][t].tracker),map[e][t].percentageChange.push(this.tickers[symbol][e][t].percentageChange));for(var r in map)for(var n in map[r])map[r][n]={percentageChange:f.mean(map[r][n].percentageChange),t:n,tracker:f.mean(map[r][n].tracker)};return map}},methods:{updateHoverTime:function(time){this.hoverTime=time},previousTickTime:function(e){var t=e.i.slice(e.i.length-1),r=e.i.substr(0,e.i.length-1);return e.t-r*{m:6e4,h:36e5,d:864e5,w:6048e5}[t]},mouseEvent:function(e){this.eventX=e.offsetX},symbolInfo:function(e){this.$set(this.mrktDiff,e.symbol,e.mrktDiff),this.$set(this.minuteDiff,e.symbol,e.minuteDiff),this.history.hasOwnProperty(e.symbol)||this.$set(this.history,e.symbol,{}),this.$set(this.history[e.symbol],e.time,this.overallRank.indexOf(e.symbol))},processTick:function(e){var t=this.previousTickTime(e);return this.tickers[e.s][e.i][t]?(e.change=e.c-this.tickers[e.s][e.i][t].c,e.percentageChange=e.c/this.tickers[e.s][e.i][t].c-1,e.tracker=this.tickers[e.s][e.i][t].tracker+e.percentageChange):(e.change=0,e.percentageChange=0,e.tracker=0),e}}}}}]);
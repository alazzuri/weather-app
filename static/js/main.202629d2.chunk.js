(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(7),o=a.n(i),l=a(11),u=(a(85),a(86),a(25)),s=a(174),m=a(40),d=a(175),h=a(68),f=a(4),E=a(176),p=a(177),v=a(14),b=a.n(v),g=a(21),w=function(){var e=Object(g.a)(b.a.mark((function e(t,a,n,r){var c,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(t,"?q=").concat(n,"&appid=").concat(a),e.next=3,fetch(c,{signal:r});case 3:return i=e.sent,e.next=6,i.json();case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),y="be17545c076e7632e2dd8be50b4ed740",N=a(63),O=a.n(N),S=function(e){var t=e.main,a=t.humidity,n=t.temp,r=e.wind.speed,c=function(e){var t=e.id;return t<300?"thunder":t<400?"drizzle":t<600?"rain":t<700?"snow":800===t?"sun":"cloud"}(e.weather[0]);return{data:{humidity:a,temperature:function(e){return Number(O()(e).from("K").to("C").toFixed(0))}(n),weatherState:c,wind:"".concat(r," m/s")}}},C=a(23),D=a.n(C),j=(a(126),function(e){return e.list.filter((function(e){return 6===D.a.unix(e.dt).utc().hour()||12===D.a.unix(e.dt).utc().hour()||18===D.a.unix(e.dt).utc().hour()})).map((function(e){return{weekDay:D.a.unix(e.dt).format("ddd"),hour:D.a.unix(e.dt).utc().hour(),data:S(e)}}))}),x=function(e){return{type:"SET_CITY",value:e}},T=function(e){return{type:"SET_FORECASTDATA",value:e}},_=function(e){return{type:"SET_WEATHER_DATA",value:e}},A=function(e){return{type:"SET_FETCHING_STATUS",value:e}},k=function(e,t){return function(a){return function(){var n=Object(g.a)(b.a.mark((function n(){var r,c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w("https://api.openweathermap.org/data/2.5/weather",y,e,t);case 3:return r=n.sent,n.next=6,S(r);case 6:c=n.sent,a(_({city:e,weatherData:c})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),a(_({city:e,weatherData:null}));case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}()()}},I=Object(f.a)((function(){return{container:{display:"flex",width:"60%",margin:"0px auto",marginTop:20,marginBottom:20},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"rgb(0, 162,183) !important"}},cssFocused:{},cssLabel:{color:"rgb(0, 162,183) !important"},notchedOutline:{borderWidth:"1px"},btnContainer:{color:"rgb(0, 162,183) !important",display:"flex",alignItems:"center",marginLeft:10},searchBtn:{backgroundColor:"rgb(0, 162,183) !important",color:"white","&:focus":{outline:"none"}},btnFocused:{}}}))((function(e){var t=e.classes,a=Object(r.useState)(""),n=Object(h.a)(a,2),i=n[0],o=n[1],u=Object(l.c)((function(e){return e.savedCities})),s=Object(l.b)();return Object(r.useEffect)((function(){function e(e){!e.target.closest("form")&&o("")}return document.addEventListener("click",e),function(){document.removeEventListener("mousedown",e)}}),[]),c.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){return function(e,t){s({type:"SET_SAVED_CITY",value:t.toUpperCase()}),s(x(null)),t&&t.length>2&&(s(k(t.toUpperCase())),localStorage.setItem("wheaterApp_savedCities",JSON.stringify(u))),o(""),e.preventDefault()}(e,i)}},c.a.createElement(E.a,{id:"outlined-search",label:"Busca tu ciudad",type:"search",variant:"outlined",value:i,fullWidth:!0,onChange:function(e){return o(e.target.value)},InputLabelProps:{classes:{focused:t.cssLabel}},InputProps:{classes:{root:t.cssOutlinedInput,focused:t.cssFocused,notchedOutline:t.notchedOutline}}}),c.a.createElement("div",{className:t.btnContainer},i?c.a.createElement(p.a,{variant:"contained",type:"submit",className:t.searchBtn},"Search"):c.a.createElement(p.a,{variant:"contained",disabled:!0},"Search")))})),z=a(171),F=a(169),L=a(69),R=(a(127),function(e){var t=e.humidity,a=e.wind;return c.a.createElement("div",{className:"info-container"},c.a.createElement("span",null,"Humedad: ".concat(t,"% - ")),c.a.createElement("span",null,"Viento: ".concat(a)))}),W=a(13),H=a(47),U=a.n(H),B=(a(128),n={},Object(W.a)(n,"cloud","cloud"),Object(W.a)(n,"sun","day-sunny"),Object(W.a)(n,"rain","rain"),Object(W.a)(n,"snow","snow"),Object(W.a)(n,"thunder","day-thunderstorm"),Object(W.a)(n,"drizzle","day-showers"),n),P=function(e){var t=e.temperature,a=e.weatherState;return c.a.createElement("div",{className:"temp-container"},function(e){var t=B[e];return t?c.a.createElement(U.a,{className:"".concat("day-sunny"===t?"icon-yellow":"icon-green"),name:t,size:"4x"}):c.a.createElement(U.a,{className:"text-green",name:"cloud",size:"4x"})}(a),c.a.createElement("span",{className:"temperature"},"".concat(t," C\xb0")))},M=function(e){var t=e.data,a=t.temperature,n=t.weatherState,r=t.humidity,i=t.wind;return c.a.createElement("div",{className:"card-body"},c.a.createElement(P,{temperature:a,weatherState:n}),c.a.createElement(R,{humidity:r,wind:i}))},V=(a(129),function(e){var t=e.weekDay,a=e.hour,n=e.data;return c.a.createElement("div",{className:"forecast-container"},c.a.createElement("h2",{className:"forecast-day"},t.toUpperCase()," - ",a," hs."),c.a.createElement(M,{data:n}),c.a.createElement(F.a,null))}),J=a(170),Y=(a(60),function(){return c.a.createElement("div",{className:"forecast"},c.a.createElement(J.a,{variant:"rect",height:"100%"},c.a.createElement(J.a,{variant:"rect",className:"pb10",height:210},c.a.createElement(J.a,{className:"content-loader centered",width:120,height:50}),c.a.createElement(J.a,{variant:"circle",width:60,height:60,className:"centered mb5"}),c.a.createElement(J.a,{variant:"rect",width:60,height:40,className:"centered"}),c.a.createElement(J.a,{variant:"text",height:20,className:"centered content-loader"})),c.a.createElement(F.a,null),c.a.createElement(J.a,{variant:"rect",className:"pb10",height:210},c.a.createElement(J.a,{className:"content-loader centered",width:120,height:50}),c.a.createElement(J.a,{variant:"circle",width:60,height:60,className:"centered mb5"}),c.a.createElement(J.a,{variant:"rect",width:60,height:40,className:"centered"}),c.a.createElement(J.a,{variant:"text",height:20,className:"centered content-loader"})),c.a.createElement(F.a,null)," "))}),G=(a(130),function(e){var t,a=e.city,n=e.forecastData,r=e.isFetching;return c.a.createElement(L.a,{elevation:4,className:"forecast-main-container"},c.a.createElement(z.a,null,c.a.createElement("div",{className:"forecast"},c.a.createElement("h2",{className:"title"},"Pronostico Extendido"),c.a.createElement("h3",{className:"subtitle"},a),c.a.createElement(F.a,null),r?c.a.createElement(Y,null):c.a.createElement("div",{className:"scroll"},(t=n)?t.map((function(e){var t=e.weekDay,a=e.hour,n=e.data.data;return c.a.createElement(V,{key:"".concat(t).concat(a),weekDay:t,hour:a,data:n})})):null))))}),$=function(){var e=Object(l.c)((function(e){return e.selectedCity})),t=Object(l.c)((function(e){return e.weatherData})),a=Object(l.c)((function(e){return e.fetchingStatus})),n=Object(l.b)();return Object(r.useEffect)((function(){var t=new AbortController;if(e){var a=t.signal;n(A(!0)),n(function(e,t){return function(a,n){var r=n(),c=r.weatherData[e]&&r.weatherData[e].forecastDataDate,i=new Date;return c&&i-c<6e4?a(A(!1)):function(){var n=Object(g.a)(b.a.mark((function n(){var r,c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w("https://api.openweathermap.org/data/2.5/forecast",y,e,t);case 3:return r=n.sent,n.next=6,j(r);case 6:c=n.sent,a(T({city:e,forecastData:c})),a(A(!1)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),!t.aborted&&console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}()()}}(e,a))}return function(){t.abort()}}),[e]),e?c.a.createElement(G,{city:e,forecastData:t[e].forecastData,isFetching:a}):c.a.createElement(L.a,{elevation:4},c.a.createElement(z.a,null,c.a.createElement("div",{className:"forecast"},c.a.createElement("h2",{className:"title"},"Pronostico Extendido"),c.a.createElement("h3",null,"SELECCIONE CIUDAD"),c.a.createElement(F.a,null))))},X=function(){return c.a.createElement("div",null,c.a.createElement(J.a,{variant:"rect",height:70},c.a.createElement(J.a,{className:"content-loader centered card-title",height:50})),c.a.createElement(F.a,null),c.a.createElement(J.a,{variant:"rect",className:"centered pt10",height:180},c.a.createElement(J.a,{variant:"circle",width:60,height:60,className:"centered mb5"}),c.a.createElement(J.a,{variant:"rect",width:60,height:60,className:"centered mb5"}),c.a.createElement(J.a,{variant:"text",height:20,className:"content-loader centered mb5"})))},q=a(173),K=a(172),Q=Object(K.a)({container:{backgroundColor:"rgb(220,220,220)",border:0,borderRadius:3,height:70,padding:"0 30px"},title:{height:"auto",fontSize:"1.6rem",fontWeight:700,justifyContent:"center"}}),Z=function(e){var t=e.city,a=Q();return c.a.createElement(q.a,{className:a.container,title:c.a.createElement(m.a,{className:a.title},t)})},ee=(a(131),function(e){var t=e.city,a=e.eventHandler,n=e.data;return c.a.createElement(z.a,{className:"location-container",elevation:4,onClick:function(){return a()}},n?c.a.createElement(c.a.Fragment,null,c.a.createElement(Z,{city:t}),c.a.createElement(M,{data:n})):c.a.createElement(X,null))}),te=(a(132),function(e){var t=e.cities,a=e.onSelectedLocation;return c.a.createElement("div",{className:"list-container"},t.map((function(e){return c.a.createElement(ee,{city:e.name,data:e.data,key:e.key,eventHandler:function(){return function(e){return a(e)}(e.name)}})})))}),ae=function(){var e=Object(l.c)((function(e){return e.savedCities})),t=Object(l.c)((function(e){return e.weatherData})),a=Object(l.b)();Object(r.useEffect)((function(){return e.forEach(function(){var e=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(k(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(){}}),[e]);return c.a.createElement(te,{cities:function(e,t){var a=[];return t.forEach((function(t){for(var n in e)if(e.hasOwnProperty(n)&&n===t){var r=e[n].weatherData;a.push({key:n,name:n,data:r?r.data:r})}})),a}(t,e),onSelectedLocation:function(e){a(x(e))}})},ne=a(61),re=a.n(ne);var ce=function(){return c.a.createElement("div",{className:"app-container"},c.a.createElement(s.a,{position:"sticky",className:"main-header "},c.a.createElement(d.a,null,c.a.createElement("img",{src:re.a,alt:"Logo",className:"main-logo"}),c.a.createElement(m.a,{variant:"h4",color:"inherit",className:"h1"},"The Weather App"))),c.a.createElement(u.Grid,{className:"App container-fluid"},c.a.createElement(u.Row,{className:"mb-3"}),c.a.createElement(u.Row,null,c.a.createElement(I,null)),c.a.createElement(u.Row,null,c.a.createElement(u.Col,{xs:12,md:6,className:"mb-4"},c.a.createElement(ae,null)),c.a.createElement(u.Col,{xs:12,md:6,className:"mb-4"},c.a.createElement($,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(18),oe=a(67),le=a(33),ue=Object(ie.c)({savedCities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SAVED_CITY":var a=function(e){return e.unshift(t.value),e.length=2,e};return a(e);default:return e}},weatherData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FORECASTDATA":var a=t.value,n=a.city,r=a.forecastData;return Object(le.a)({},e,Object(W.a)({},n,Object(le.a)({},e[n],{forecastData:r,forecastDataDate:new Date})));case"SET_WEATHER_DATA":var c=t.value,i=c.city,o=c.weatherData;return Object(le.a)({},e,Object(W.a)({},i,Object(le.a)({},{weatherData:o})));default:return e}},selectedCity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CITY":return t.value;default:return e}},fetchingStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FETCHING_STATUS":return t.value;default:return e}}}),se={savedCities:localStorage.getItem("wheaterApp_savedCities")?JSON.parse(localStorage.getItem("wheaterApp_savedCities")):["MADRID","MIAMI"],selectedCity:null},me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,de=Object(ie.e)(ue,se,me(Object(ie.a)(oe.a))),he=(a(133),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer-container"},c.a.createElement("p",null,"Codeado con ",c.a.createElement("i",{className:"fas fa-heart"})," por Alexis Lazzuri"),c.a.createElement("a",{href:"https://github.com/alazzuri",target:"_blank",rel:"noopener noreferrer",className:"github"},c.a.createElement("i",{className:"fab fa-github-alt fa-lg"})," github.com/alazzuri")))});o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:de},c.a.createElement(ce,null),c.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){},61:function(e,t,a){e.exports=a.p+"static/media/logo.b618e8cb.png"},76:function(e,t,a){e.exports=a(134)},85:function(e,t,a){},86:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.202629d2.chunk.js.map
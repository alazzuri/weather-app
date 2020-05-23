(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(7),o=a.n(i),l=a(11),u=(a(84),a(85),a(25)),s=a(171),m=a(40),d=a(172),h=a(66),f=a(4),E=a(173),v=a(174),p=a(14),b=a.n(p),w=a(21),g=function(){var e=Object(w.a)(b.a.mark((function e(t,a,n,r){var c,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(t,"?q=").concat(n,"&appid=").concat(a),e.next=3,fetch(c,{signal:r});case 3:return i=e.sent,e.next=6,i.json();case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),N="be17545c076e7632e2dd8be50b4ed740",y=a(61),x=a.n(y),O=function(e){var t=e.main,a=t.humidity,n=t.temp,r=e.wind.speed,c=function(e){var t=e.id;return t<300?"thunder":t<400?"drizzle":t<600?"rain":t<700?"snow":800===t?"sun":"cloud"}(e.weather[0]);return{data:{humidity:a,temperature:function(e){return Number(x()(e).from("K").to("C").toFixed(0))}(n),weatherState:c,wind:"".concat(r," m/s")}}},S=a(23),j=a.n(S),D=(a(125),function(e){return e.list.filter((function(e){return 6===j.a.unix(e.dt).utc().hour()||12===j.a.unix(e.dt).utc().hour()||18===j.a.unix(e.dt).utc().hour()})).map((function(e){return{weekDay:j.a.unix(e.dt).format("ddd"),hour:j.a.unix(e.dt).utc().hour(),data:O(e)}}))}),C=function(e){return{type:"SET_FORECASTDATA",value:e}},T=function(e){return{type:"SET_WEATHER_DATA",value:e}},_=function(e){return{type:"SET_FETCHING_STATUS",value:e}},A=function(e,t){return function(a){return function(){var n=Object(w.a)(b.a.mark((function n(){var r,c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g("https://api.openweathermap.org/data/2.5/weather",N,e,t);case 3:return r=n.sent,n.next=6,O(r);case 6:c=n.sent,a(T({city:e,weatherData:c})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),a(T({city:e,weatherData:null}));case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}()()}},k=Object(f.a)((function(){return{container:{display:"flex",width:"80%",margin:"0px auto",marginBottom:20},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"rgb(0, 162,183) !important"}},cssFocused:{},cssLabel:{color:"rgb(0, 162,183) !important"},notchedOutline:{borderWidth:"1px"},btnContainer:{color:"rgb(0, 162,183) !important",display:"flex",alignItems:"center",marginLeft:10},searchBtn:{backgroundColor:"rgb(0, 162,183) !important",color:"white","&:focus":{outline:"none"}},btnFocused:{}}}))((function(e){var t=e.classes,a=Object(r.useState)(""),n=Object(h.a)(a,2),i=n[0],o=n[1],u=(Object(l.c)((function(e){return e.weatherData})),Object(l.c)((function(e){return e.savedCities}))),s=Object(l.b)();return Object(r.useEffect)((function(){function e(e){!e.target.closest("form")&&o("")}return document.addEventListener("click",e),function(){document.removeEventListener("mousedown",e)}}),[]),c.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){return function(e,t){s({type:"SET_SAVED_CITY",value:t.toUpperCase()}),t&&t.length>2&&(s(A(t.toUpperCase())),localStorage.setItem("wheaterApp_savedCities",JSON.stringify(u))),o(""),e.preventDefault()}(e,i)}},c.a.createElement(E.a,{id:"outlined-search",label:"Busca tu ciudad",type:"search",variant:"outlined",value:i,fullWidth:!0,onChange:function(e){return o(e.target.value)},InputLabelProps:{classes:{focused:t.cssLabel}},InputProps:{classes:{root:t.cssOutlinedInput,focused:t.cssFocused,notchedOutline:t.notchedOutline}}}),c.a.createElement("div",{className:t.btnContainer},i?c.a.createElement(v.a,{variant:"contained",type:"submit",className:t.searchBtn},"Search"):c.a.createElement(v.a,{variant:"contained",disabled:!0},"Search")))})),I=function(e){var t=e.humidity,a=e.wind;return c.a.createElement("div",{className:"card-text font-italic"},c.a.createElement("span",null,"Humedad: ".concat(t,"% - ")),c.a.createElement("span",null,"Viento: ".concat(a)))},z=a(13),F=a(47),L=a.n(F),R=(a(126),n={},Object(z.a)(n,"cloud","cloud"),Object(z.a)(n,"sun","day-sunny"),Object(z.a)(n,"rain","rain"),Object(z.a)(n,"snow","snow"),Object(z.a)(n,"thunder","day-thunderstorm"),Object(z.a)(n,"drizzle","day-showers"),n),W=function(e){var t=e.temperature,a=e.weatherState;return c.a.createElement("div",{className:"card-title column"},function(e){var t=R[e];return t?c.a.createElement(L.a,{className:"".concat("day-sunny"===t?"text-warning":"text-info"),name:t,size:"4x"}):c.a.createElement(L.a,{className:"text-warning",name:"day-sunny",size:"4x"})}(a),c.a.createElement("span",{className:"font-weight-bold h4 mt-2"},"".concat(t," C\xb0")))},H=function(e){var t=e.data,a=t.temperature,n=t.weatherState,r=t.humidity,i=t.wind;return c.a.createElement("div",{className:"card-body"},c.a.createElement(W,{temperature:a,weatherState:n}),c.a.createElement(I,{humidity:r,wind:i}))},B=a(166),P=function(e){var t=e.weekDay,a=e.hour,n=e.data;return c.a.createElement("div",{className:"pt-4"},c.a.createElement("h2",null,t.toUpperCase()," - ",a," hs."),c.a.createElement(H,{data:n,className:"mb-4"}),c.a.createElement(B.a,null))},U=a(167),M=function(){return c.a.createElement("div",{className:"forecast"},c.a.createElement(U.a,{variant:"rect",className:"card-body",height:"100%"},c.a.createElement(U.a,{variant:"rect",className:"mb-2",height:210},c.a.createElement(U.a,{className:"w-50 mx-auto",height:30}),c.a.createElement(U.a,{variant:"circle",width:60,height:60,className:"mx-auto mb-2"}),c.a.createElement(U.a,{variant:"rect",width:60,height:60,className:"mx-auto"}),c.a.createElement(U.a,{variant:"text",height:30,className:"mx-auto w-75"})),c.a.createElement(B.a,null),c.a.createElement(U.a,{variant:"rect",className:"mb-2",height:210},c.a.createElement(U.a,{className:"w-50 mx-auto",height:30}),c.a.createElement(U.a,{variant:"circle",width:60,height:60,className:"mx-auto mb-2"}),c.a.createElement(U.a,{variant:"rect",width:60,height:60,className:"mx-auto"}),c.a.createElement(U.a,{variant:"text",height:30,className:"mx-auto w-75"})),c.a.createElement(B.a,null)," "))},V=a(168),J=a(67),Y=(a(127),function(e){var t,a=e.city,n=e.forecastData,r=e.isFetching;return c.a.createElement(J.a,{elevation:4},c.a.createElement(V.a,{className:"card"},c.a.createElement("div",{className:"forecast"},c.a.createElement("h2",{className:"card-header mb-2"},"Pronostico Extendido"),c.a.createElement("h3",null,a),c.a.createElement(B.a,null),r?c.a.createElement(M,null):c.a.createElement("div",{className:"scroll"},(t=n)?t.map((function(e){var t=e.weekDay,a=e.hour,n=e.data.data;return c.a.createElement(P,{key:"".concat(t).concat(a),weekDay:t,hour:a,data:n})})):null))))}),G=function(){var e=Object(l.c)((function(e){return e.selectedCity})),t=Object(l.c)((function(e){return e.weatherData})),a=Object(l.c)((function(e){return e.fetchingStatus})),n=Object(l.b)();return Object(r.useEffect)((function(){var t=new AbortController;if(e){var a=t.signal;n(_(!0)),n(function(e,t){return function(a,n){var r=n(),c=r.weatherData[e]&&r.weatherData[e].forecastDataDate,i=new Date;return c&&i-c<6e4?a(_(!1)):function(){var n=Object(w.a)(b.a.mark((function n(){var r,c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g("https://api.openweathermap.org/data/2.5/forecast",N,e,t);case 3:return r=n.sent,n.next=6,D(r);case 6:c=n.sent,a(C({city:e,forecastData:c})),a(_(!1)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),!t.aborted&&console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}()()}}(e,a))}return function(){t.abort()}}),[e]),e?c.a.createElement(Y,{className:"w-100",city:e,forecastData:t[e].forecastData,isFetching:a}):c.a.createElement(J.a,{elevation:4},c.a.createElement(V.a,{className:"card"},c.a.createElement("div",{className:"forecast"},c.a.createElement("h2",{className:"card-header mb-2"},"Pronostico Extendido"),c.a.createElement("h3",null,"Seleccione ciudad"),c.a.createElement(B.a,null))))},$=function(){return c.a.createElement("div",null,c.a.createElement(U.a,{variant:"rect",className:"card-header",height:80},c.a.createElement(U.a,{className:"w-50 mx-auto",height:50})),c.a.createElement(U.a,{variant:"rect",className:"card-body",height:180},c.a.createElement(U.a,{variant:"circle",width:60,height:60,className:"mx-auto mb-1"}),c.a.createElement(U.a,{variant:"rect",width:60,height:60,className:"mx-auto mb-1"}),c.a.createElement(U.a,{variant:"text",height:30,className:"mx-auto w-75"})))},X=a(170),q=a(169),K=Object(q.a)({container:{backgroundColor:"rgb(220,220,220)",border:0,borderRadius:3,height:70,padding:"0 30px"},title:{height:"auto",fontSize:"1.5rem",fontWeight:700,justifyContent:"center"}}),Q=function(e){var t=e.city,a=K();return c.a.createElement(X.a,{className:a.container,title:c.a.createElement(m.a,{className:a.title},t)})},Z=function(e){var t=e.city,a=e.eventHandler,n=e.data;return c.a.createElement(V.a,{className:"bg-light mb-4",elevation:4,onClick:function(){return a()}},n?c.a.createElement(c.a.Fragment,null,c.a.createElement(Q,{city:t}),c.a.createElement(H,{data:n})):c.a.createElement($,{className:"mx-auto"}))},ee=(a(128),function(e){var t=e.cities,a=e.onSelectedLocation;return c.a.createElement("div",{className:"list-container"},t.map((function(e){return c.a.createElement(Z,{className:"location-card",city:e.name,data:e.data,key:e.key,eventHandler:function(){return function(e){return a(e)}(e.name)}})})))}),te=function(){var e=Object(l.c)((function(e){return e.savedCities})),t=Object(l.c)((function(e){return e.weatherData})),a=Object(l.b)();Object(r.useEffect)((function(){return e.forEach(function(){var e=Object(w.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(A(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(){}}),[e]);return c.a.createElement(ee,{cities:function(e,t){var a=[];return t.forEach((function(t){for(var n in e)if(e.hasOwnProperty(n)&&n===t){var r=e[n].weatherData;a.push({key:n,name:n,data:r?r.data:r})}})),a}(t,e),onSelectedLocation:function(e){a({type:"SET_CITY",value:e})}})},ae=a(59),ne=a.n(ae),re=(a(129),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container-fluid container info-container"},c.a.createElement("p",null,"Codeado con ",c.a.createElement("i",{className:"fas fa-heart"})," por Alexis Lazzuri"),c.a.createElement("a",{href:"https://github.com/alazzuri",target:"_blank",rel:"noopener noreferrer",className:"github"},c.a.createElement("i",{className:"fab fa-github-alt fa-lg"})," github.com/alazzuri")))});var ce=function(){return c.a.createElement("div",null,c.a.createElement(s.a,{position:"sticky",className:"main-header "},c.a.createElement(d.a,null,c.a.createElement("img",{src:ne.a,alt:"Logo",className:"main-logo"}),c.a.createElement(m.a,{variant:"h4",color:"inherit",className:"h1"},"The Weather App"))),c.a.createElement(u.Grid,{className:"App container-fluid"},c.a.createElement(u.Row,{className:"mb-3"}),c.a.createElement(u.Row,null,c.a.createElement(k,null)),c.a.createElement(u.Row,null,c.a.createElement(u.Col,{xs:12,md:6,className:"mb-4"},c.a.createElement(te,null)),c.a.createElement(u.Col,{xs:12,md:6,className:"mb-4"},c.a.createElement(G,null)))),c.a.createElement(re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(130);var ie=a(18),oe=a(65),le=a(33),ue=Object(ie.c)({savedCities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SAVED_CITY":var a=function(e){return e.unshift(t.value),e.length=2,e};return a(e);default:return e}},weatherData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FORECASTDATA":var a=t.value,n=a.city,r=a.forecastData;return Object(le.a)({},e,Object(z.a)({},n,Object(le.a)({},e[n],{forecastData:r,forecastDataDate:new Date})));case"SET_WEATHER_DATA":var c=t.value,i=c.city,o=c.weatherData;return Object(le.a)({},e,Object(z.a)({},i,Object(le.a)({},{weatherData:o})));default:return e}},selectedCity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CITY":return t.value;default:return e}},fetchingStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FETCHING_STATUS":return t.value;default:return e}}}),se={savedCities:localStorage.getItem("wheaterApp_savedCities")?JSON.parse(localStorage.getItem("wheaterApp_savedCities")):["MADRID","MIAMI"],selectedCity:null},me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,de=Object(ie.e)(ue,se,me(Object(ie.a)(oe.a)));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:de},c.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){e.exports=a.p+"static/media/logo.b618e8cb.png"},75:function(e,t,a){e.exports=a(131)},84:function(e,t,a){},85:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.556d9f1d.chunk.js.map
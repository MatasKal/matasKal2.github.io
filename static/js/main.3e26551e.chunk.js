(this["webpackJsonpflow-forma-task2"]=this["webpackJsonpflow-forma-task2"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),o=(a(15),a(6)),l=a.n(o),c=a(9),d=a(1),u=a(2),h=a(3),m=a(5),f=a(4);function g(e,t){return"ascending"===t?{sortedField:e,sortedFieldDir:"descending",headerActivity:"arrow-down"}:"descending"===t?{sortedField:e,sortedFieldDir:"normal",headerActivity:""}:{sortedField:e,sortedFieldDir:"ascending",headerActivity:"arrow-up"}}var p=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"loading-front",className:this.props.visible}),r.a.createElement("div",{id:"loading-back",className:this.props.visible}))}}]),a}(r.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getDataFromApi=n.getDataFromApi.bind(Object(h.a)(n)),n.state={names:[],technologies:[],urls:[],dates:[],ages:[],sortedField:null,sortedFieldDir:"ascending",headerActivity:"",loadedNames:"false",loadedTech:"false",loadedDates:"false",loaderVisible:""},n}return Object(u.a)(a,[{key:"getDataFromApi",value:function(){var e=this;this.state.loadedNames,this.setState({loadedNames:"loading",loaderVisible:"show"}),fetch("http://78.63.13.74:3006/FlowFormaAPI/names").then((function(e){return e.json()})).then((function(t){e.setState({names:t,loadedNames:"loaded"},(function(){e.calculateAge()}))})),this.state.loadedTech,this.setState({loadedTech:"loading",loaderVisible:"show"}),fetch("http://78.63.13.74:3006/FlowFormaAPI/tech").then((function(e){return e.json()})).then((function(t){e.setState({technologies:t,loadedTech:"loaded"})}))}},{key:"calculateAge",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,n,r,i,s,o=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.urls,a=[],n=new Date,r=n.getFullYear(),i=n.getMonth()+1,s=n.getDate(),this.state.loadedDates,this.setState({loadedDates:"loading"}),t=this.state.names.map((function(e){return"http://78.63.13.74:3006/FlowFormaAPI/getdate/"+e.toString()})),e.next=9,Promise.all(t.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(e){return o.setState({dates:e,loadedDates:"loaded",loaderVisible:""})}));case 9:a=this.state.dates.map((function(e){var t,a,n,o=e,l=o.Birth.split("-"),c=parseInt(l[0]),d=parseInt(l[1]),u=parseInt(l[2]);if(null!==o.Death){var h=o.Death.split("-");t=parseInt(h[0]),a=parseInt(h[1]),n=parseInt(h[2])}else t=r,a=i,n=s;return t>=c?t===c?0:a<d||a===d&&n<u?t-c-1:t-c:"Invalid Dates. Please check!"})),this.setState({ages:a});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.names,a=this.state.technologies,n=this.state.loadedNames,i=this.state.loadedTech,s=this.state.loadedDates,o=this.state.ages,l=this.state.sortedField,c=this.state.sortedFieldDir,d=this.state.headerActivity,u=this.state.loaderVisible,h=function(e,t,a){var n=e;return null!==a&&n.sort((function(e,n){return e[a]<n[a]?"ascending"===t?-1:"descending"===t?1:0:e[a]>n[a]?"ascending"===t?1:"descending"===t?-1:0:0})),n}(t.map((function(e,r){return["loading"===n?"Loading...":t[r],"loading"===i?"Loading...":a[r],"loading"===s?"Loading...":o[r]]})),c,l);return r.a.createElement("div",null,r.a.createElement(p,{visible:u}),r.a.createElement("button",{id:"populate-button",onClick:function(){e.getDataFromApi(),e.setState({sortedField:null,sortedFieldDir:"normal"})}},"Populate table"),r.a.createElement("table",{id:"people-list"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{key:"nameHeader",className:0===l?d:"",onClick:function(){return e.setState(g(0,c))}},"Name"),r.a.createElement("th",{key:"techHeader",className:1===l?d:"",onClick:function(){return e.setState(g(1,c))}},"Tech"),r.a.createElement("th",{key:"ageHeader",className:2===l?d:"",onClick:function(){return e.setState(g(2,c))}},"Age"))),r.a.createElement("tbody",null,h.map((function(e,a){return r.a.createElement("tr",{key:t[a]},r.a.createElement("td",{key:t[a].toString()+" name"},e[0]),r.a.createElement("td",{key:t[a].toString()+" tech"},e[1]),r.a.createElement("td",{key:t[a].toString()+" age"},e[2]))})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.3e26551e.chunk.js.map
(window.webpackJsonpmonsters=window.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),s=n.n(o),c=(n(14),n(4)),i=n(5),l=n(8),h=n(6),u=n(1),m=n(7),d=(n(15),n(16),n(17),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),r.a.createElement("h1",null," ",e.monster.name),r.a.createElement("p",null," ",e.monster.email))}),f=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return r.a.createElement(d,{key:e.id,monster:e})}))},p=(n(18),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n})}),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).state={monsters:[],searchField:""},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t})})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"Monsters Roldex"),r.a.createElement(p,{placeholder:"search monster",handleChange:this.handleChange}),r.a.createElement(f,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.d3ba6f36.chunk.js.map
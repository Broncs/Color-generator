(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),o=(a(10),a(1));var s=function(e){var t=e.rgb,a=e.weight,r=(e.index,e.hexColor),l=(e.selectedOption,e.brightness),s=Object(n.useState)(!1),u=Object(o.a)(s,2),i=u[0],m=u[1],p=t.join(","),b="#".concat(r);return Object(n.useEffect)((function(){var e=setTimeout((function(){m(!1)}),3e3);return function(){return clearTimeout(e)}}),[i]),c.a.createElement("article",{onClick:function(){m(!0),navigator.clipboard.writeText(b)},className:"color ".concat(l<50?"color-light":null),style:{backgroundColor:"rgb(".concat(p,")")}},c.a.createElement("p",{className:"percent-value"},a,"%"),c.a.createElement("p",{className:"color-value"},b),i&&c.a.createElement("p",{className:"alert"},"copied to clipboard"))},u=a(2),i=a.n(u);var m=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),u=Object(o.a)(l,2),m=u[0],p=u[1],b=Object(n.useState)(10),f=Object(o.a)(b,2),h=f[0],E=f[1],d=Object(n.useState)(new i.a("#f15025").all(parseInt(10))),g=Object(o.a)(d,2),v=g[0],N=g[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"container"},c.a.createElement("h3",null,"color generator"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();try{var t=new i.a(a).all(h);N(t)}catch(m){p(!0),console.log(m)}}},c.a.createElement("div",{className:"percentage"},c.a.createElement("div",{className:"form-check"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"react-tips",value:5,checked:5===h,className:"form-check-input",onChange:function(e){E(parseInt(e.target.value))}}),"5%")),c.a.createElement("div",{className:"form-check"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"react-tips",value:10,checked:10===h,className:"form-check-input",onChange:function(e){return E(parseInt(e.target.value))}}),"10%")),c.a.createElement("div",{className:"form-check"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"react-tips",value:20,checked:20===h,className:"form-check-input",onChange:function(e){return E(parseInt(e.target.value))}}),"20%"))),c.a.createElement("input",{type:"text",value:a,placeholder:"#f15025",onChange:function(e){return r(e.target.value)},className:"".concat(m?"error":null)}),c.a.createElement("button",{className:"btn",type:"submit"},"submit"))),c.a.createElement("section",{className:"colors"},v.map((function(e,t){var a=e.getBrightness(e.rgb);return c.a.createElement(s,Object.assign({brightness:a,key:t},e,{index:t,hexColor:e.hex,selectedOption:h}))}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.50275200.chunk.js.map
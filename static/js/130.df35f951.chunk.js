"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[130],{363:function(n,e,t){t.d(e,{Z:function(){return u}});var r,i=t(168),o=(t(791),t(978)),a=t.p+"static/media/img.2361b3a732328fb65a35.png",c=t(184),s=o.ZP.section(r||(r=(0,i.Z)(["\n    width: 1524px;\n    height: 560px;\n    padding-top: 40px;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: right bottom;\n    background-size: auto 400px;\n    margin: 0 auto;\n"])),a),u=function(n){var e=n.children;return(0,c.jsx)(s,{children:e})}},969:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,i,o=t(861),a=t(439),c=t(757),s=t.n(c),u=t(130),l=t(690),p=t(168),f=t(791),h=["title","titleId"];function d(){return d=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},d.apply(this,arguments)}function x(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function g(n,e){var t=n.title,o=n.titleId,a=x(n,h);return f.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"#3f51b5",strokeLinejoin:"#3f51b5",className:"feather feather-search",ref:e,"aria-labelledby":o},a),t?f.createElement("title",{id:o},t):null,r||(r=f.createElement("circle",{cx:11,cy:11,r:8})),i||(i=f.createElement("line",{x1:21,y1:21,x2:16.65,y2:16.65})))}var b,m=f.forwardRef(g),v=(t.p,t(87)),y=t(978),w=t(184),j=y.ZP.form(b||(b=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 40px;\n\n  input {\n    display: inline-block;\n    width: 400px;\n    font-family: inherit;\n    font-size: 20px;\n    border: 1px solid rgba(218, 142, 2, 0.863);\n    outline: none;\n    border-radius: 4px;\n    padding: 8px 4px;\n  }\n\n  button {\n    display: inline-flex;\n    align-items: center;\n    gap: 4px;\n    min-width: 48px;\n    min-height: 48px;\n    border: 2px solid rgba(218, 142, 2, 0.863);\n    border-radius: 8px;\n    opacity: 1;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n    background-color: rgb(34, 15, 15);\n    color: rgba(218, 142, 2, 0.863);\n    font-size: 20px;\n    line-height: 24px;\n    font-weight: 500;\n    text-align: center;\n\n    &:hover,\n    &focus {\n      opacity: 0.6;\n      border: 1px solid white;\n    }\n  }\n"]))),k=function(){var n=(0,f.useState)(""),e=(0,a.Z)(n,2),t=e[0],r=e[1],i=(0,v.lr)(),o=(0,a.Z)(i,2),c=o[0],s=o[1];return(0,f.useEffect)((function(){!t&&r(c.get("search"))}),[c,t]),(0,w.jsxs)(j,{onSubmit:function(n){n.preventDefault(),s({search:t})},children:[(0,w.jsx)("input",{name:"search",type:"text",value:t,autoComplete:"off",onChange:function(n){var e=n.target.value;r(e)},autoFocus:!0,placeholder:"Search movies..."}),(0,w.jsxs)("button",{type:"submit",children:["Search",(0,w.jsx)(m,{width:"28",height:"28",stroke:"rgba(218, 142, 2, 0.863)"})]})]})},Z=t(363),O=t(799),S=t(367),E=function(){var n=(0,v.lr)(),e=(0,a.Z)(n,1)[0],t=(0,f.useState)([]),r=(0,a.Z)(t,2),i=r[0],c=r[1],p=(0,f.useState)(1),h=(0,a.Z)(p,2),d=h[0],x=h[1],g=(0,f.useState)(!1),b=(0,a.Z)(g,2),m=b[0],y=b[1],j=(0,f.useState)(!1),E=(0,a.Z)(j,2),C=E[0],L=E[1],P=(0,f.useState)(!0),z=(0,a.Z)(P,2),_=z[0],I=z[1],B=e.get("search"),F=function(){var n=(0,o.Z)(s().mark((function n(e,t){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,y(!1),L(!1),n.next=5,(0,u.gH)(e,t);case 5:r=n.sent,c(r.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("error :>> ",n.t0);case 12:return n.prev=12,L(!1),I(!1),n.finish(12);case 16:case"end":return n.stop()}}),n,null,[[0,9,12,16]])})));return function(e,t){return n.apply(this,arguments)}}();return(0,f.useEffect)((function(){B&&(!B&&x(1),F(B,d))}),[B,d]),(0,w.jsxs)(w.Fragment,{children:[_&&(0,w.jsx)(Z.Z,{children:(0,w.jsx)(l.Z,{children:(0,w.jsx)(k,{})})}),C&&(0,w.jsx)("h1",{children:"Loading..."}),!_&&(0,w.jsx)(S.Z,{children:(0,w.jsxs)(l.Z,{children:[(0,w.jsx)(k,{}),i.length>0&&(0,w.jsx)(O.O,{movies:i,isShowBtn:m,handlerLoadMore1:function(){x((function(n){return n-1}))},handlerLoadMore:function(){x((function(n){return n+1}))}})]})})]})}}}]);
//# sourceMappingURL=130.df35f951.chunk.js.map
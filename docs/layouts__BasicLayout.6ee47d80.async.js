(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{bsDN:function(E,f,r){E.exports={menu:"menu___3fMWW",right:"right___2CMz5",action:"action___3ut1O",search:"search___3FPts",account:"account___1r_Ku",avatar:"avatar___1Rx79",dark:"dark___1zu9O"}},maEh:function(E,f,r){"use strict";r.r(f);var T=r("wx14"),x=r("KQm4"),b=r("VTBJ"),ve=r("J+/v"),O=r("MoRW"),Re=r("+L6B"),z=r("2/Rp"),S=r("9W6o"),X=r("Hx5s"),R=r("q1tI"),a=r.n(R),g=r("uYtH"),p=r("9kvl"),v="NULL",I=function(e){return function(t){return t?(typeof t=="function"&&(v=t()),(Object.prototype.toString.call(t)==="[object String]"||Array.isArray(t))&&(v=t)):v="NULL",e}},k=function(o){return I(o)},ge=r("T2oS"),H=r("W9HT"),B=r("Ff2n"),F=r("1OyB"),G=r("vuIU"),J=r("Ji7U"),W=r("LK+K"),Y=r("Y+p1"),K=r.n(Y),V=function(){return 403},C=function o(e){if(!e)return!1;var t=Object.getPrototypeOf(e);return t===a.a.Component||t===Function.prototype?!0:o(t)},$=function(e){if(C(e)){var t=e;return function(n){return a.a.createElement(t,n)}}return a.a.isValidElement(e)?function(n){return a.a.cloneElement(e,n)}:function(){return e}},Q=function(e,t){var n=!1;if(t&&(n=function(){return t}),!e)throw new Error("authority is required");return function(i){var u=A(e,i,n||V);return $(u)}},Z=Q,_=function(o){Object(J.a)(t,o);var e=Object(W.a)(t);function t(){var n;Object(F.a)(this,t);for(var s=arguments.length,i=new Array(s),u=0;u<s;u++)i[u]=arguments[u];return n=e.call.apply(e,[this].concat(i)),n.state={component:function(){return null}},n.shouldComponentUpdate=function(l,h){var c=n.state.component;return K()(l,n.props)||n.setRenderComponent(l),h.component!==c},n.checkIsInstantiation=function(l){if(C(l)){var h=l;return function(c){return a.a.createElement(h,c)}}return a.a.isValidElement(l)?function(c){return a.a.cloneElement(l,c)}:function(){return l}},n}return Object(G.a)(t,[{key:"componentDidMount",value:function(){this.setRenderComponent(this.props)}},{key:"setRenderComponent",value:function(s){var i=this,u=this.checkIsInstantiation(s.ok),l=this.checkIsInstantiation(s.error);s.promise.then(function(){return i.setState({component:u}),!0}).catch(function(){i.setState({component:l})})}},{key:"render",value:function(){var s=this.state.component,i=this.props,u=i.ok,l=i.error,h=i.promise,c=Object(B.a)(i,["ok","error","promise"]);return s?a.a.createElement(s,c):a.a.createElement("div",{style:{width:"100%",height:"100%",margin:"auto",paddingTop:50,textAlign:"center"}},a.a.createElement(H.a,{size:"large"}))}}]),t}(a.a.Component),w=function(e,t,n,s){if(!e)return n;if(Array.isArray(e)){if(Array.isArray(t)){if(t.some(function(u){return e.includes(u)}))return n}else if(e.includes(t))return n;return s}if(typeof e=="string"){if(Array.isArray(t)){if(t.some(function(u){return e===u}))return n}else if(e===t)return n;return s}if(e instanceof Promise)return a.a.createElement(_,{ok:n,error:s,promise:e});if(typeof e=="function"){var i=e(t);return i instanceof Promise?a.a.createElement(_,{ok:n,error:s,promise:i}):i?n:s}throw new Error("unsupported parameters")};function q(o,e,t){return w(o,v,e,t)}var A=q,ee=function(e){var t=e.children,n=e.authority,s=e.noMatch,i=s===void 0?a.a.createElement(O.a,{status:"403",title:"403",subTitle:"Sorry, you are not authorized to access this page."}):s,u=typeof t=="undefined"?null:t,l=A(n,u,i);return a.a.createElement(a.a.Fragment,null,l)},y=ee;y.Secured=Z,y.check=A;var te=k(y),D=te;function j(o){var e=typeof o=="undefined"&&localStorage?localStorage.getItem("antd-pro-authority"):o,t;try{e&&(t=JSON.parse(e))}catch(n){t=e}return typeof t=="string"?[t]:!t&&!1?["admin"]:t}function Ae(o){var e=typeof o=="string"?[o]:o;localStorage.setItem("antd-pro-authority",JSON.stringify(e)),N()}var M=D(j()),N=function(){M=D(j())};window.reloadAuthorized=N;var P=M,ne=r("bsDN"),L=r.n(ne),re=function(e){var t=e.theme,n=e.layout,s=L.a.right;return t==="dark"&&n==="top"&&(s="".concat(L.a.right,"  ").concat(L.a.dark)),a.a.createElement("div",{className:s})},oe=Object(p.a)(function(o){var e=o.settings;return{theme:e.navTheme,layout:e.layout}})(re),ae=r("GOef"),se=r("zwU1"),ie=r.n(se),ue=a.a.createElement(O.a,{status:403,title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:a.a.createElement(z.a,{type:"primary"},a.a.createElement(g.a,{to:"/user/login"},"Go Login"))}),le=function o(e){return e.map(function(t){var n=Object(b.a)(Object(b.a)({},t),{},{children:t.children?o(t.children):void 0});return P.check(t.authority,n,null)})},de=a.a.createElement("div",null)||a.a.createElement(S.a,{copyright:"".concat(new Date().getFullYear()),links:[{key:"Ant Design Pro",title:"Ant Design Pro",href:"https://pro.ant.design",blankTarget:!0}]}),ce=function(e){var t=e.dispatch,n=e.children,s=e.settings,i=e.location,u=i===void 0?{pathname:"/"}:i,l=Object(R.useRef)([]),h=function(d){t&&t({type:"global/changeLayoutCollapsed",payload:d})},c=Object(R.useMemo)(function(){return Object(ae.b)(u.pathname||"/",l.current).pop()||{authority:void 0}},[u.pathname]),me=Object(p.d)(),he=me.formatMessage;return a.a.createElement(X.a,Object(T.a)({logo:ie.a,formatMessage:he},e,s,{onCollapse:h,onMenuHeaderClick:function(){return p.b.push("/")},menuItemRender:function(d,U){return d.isUrl||!d.path?U:a.a.createElement(g.a,{to:d.path},U)},breadcrumbRender:function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return Object(x.a)(d)},itemRender:function(d,U,Ee,fe){var pe=Ee.indexOf(d)===0;return pe?a.a.createElement(g.a,{to:fe.join("/")},d.breadcrumbName):a.a.createElement("span",null,d.breadcrumbName)},footerRender:function(){return de},menuDataRender:le,rightContentRender:function(){return a.a.createElement(oe,null)},postMenuData:function(d){return l.current=d||[],d||[]}}),a.a.createElement(P,{authority:c.authority,noMatch:ue},n))},ye=f.default=Object(p.a)(function(o){var e=o.global,t=o.settings;return{collapsed:e.collapsed,settings:t}})(ce)},zwU1:function(E,f,r){E.exports=r.p+"static/logo.505b5fef.png"}}]);

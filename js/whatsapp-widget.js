var app=function(){"use strict";function t(){}function e(t){return t()}function o(){return Object.create(null)}function a(t){t.forEach(e)}function n(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e}function i(t,e){t.appendChild(e)}function s(t,e,o){t.insertBefore(e,o||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function u(t,e,o,a){return t.addEventListener(e,o,a),()=>t.removeEventListener(e,o,a)}function g(t,e,o){null==o?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e,o){t.classList[o?"add":"remove"](e)}function x(t){const e={};for(const o of t)e[o.name]=o.value;return e}let f;function m(t){f=t}const v=[],w=[],j=[],k=[],y=Promise.resolve();let $=!1;function C(t){j.push(t)}let E=!1;const z=new Set;function L(){if(!E){E=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];m(e),M(e.$$)}for(m(null),v.length=0;w.length;)w.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];z.has(e)||(z.add(e),e())}j.length=0}while(v.length);for(;k.length;)k.pop()();$=!1,E=!1,z.clear()}}function M(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const A=new Set;function B(t,e){-1===t.$$.dirty[0]&&(v.push(t),$||($=!0,y.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(r,i,s,l,h,d,p=[-1]){const u=f;m(r);const g=r.$$={fragment:null,ctx:null,props:d,update:t,not_equal:h,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:p,skip_bound:!1};let b=!1;if(g.ctx=s?s(r,i.props||{},((t,e,...o)=>{const a=o.length?o[0]:e;return g.ctx&&h(g.ctx[t],g.ctx[t]=a)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](a),b&&B(r,t)),e})):[],g.update(),b=!0,a(g.before_update),g.fragment=!!l&&l(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(c)}else g.fragment&&g.fragment.c();i.intro&&((_=r.$$.fragment)&&_.i&&(A.delete(_),_.i(x))),function(t,o,r){const{fragment:i,on_mount:s,on_destroy:c,after_update:l}=t.$$;i&&i.m(o,r),C((()=>{const o=s.map(e).filter(n);c?c.push(...o):a(o),t.$$.on_mount=[]})),l.forEach(C)}(r,i.target,i.anchor),L()}var _,x;m(u)}let S;function Y(e){let o,n,r,x,f,m,v,w,j,k,y,$,C,E,z,L,M,A,B,O,S,Y,N,H,T,P,R,I,U,q,F;return{c(){o=l("div"),n=l("div"),r=l("div"),x=p(),f=l("div"),f.textContent="Abrir chat",m=p(),v=h("svg"),w=h("path"),j=h("path"),k=p(),y=l("div"),y.textContent="1",$=p(),C=l("div"),E=l("div"),z=l("a"),L=l("b"),M=d(e[1]),A=p(),B=l("div"),O=p(),S=l("div"),Y=l("div"),N=l("div"),H=d(e[0]),T=p(),P=h("svg"),R=h("defs"),I=h("clipPath"),U=h("path"),this.c=t,g(r,"class","joinchat__button__open"),g(f,"class","joinchat__button__sendtext"),g(w,"class","joinchat_svg__plain"),g(w,"d","M168.83 200.504H79.218L33.04 44.284a1 1 0 0 1 1.386-1.188L365.083 199.04a1 1 0 0 1 .003 1.808L34.432 357.903a1 1 0 0 1-1.388-1.187l29.42-99.427"),g(j,"class","joinchat_svg__chat"),g(j,"d","M318.087 318.087c-52.982 52.982-132.708 62.922-195.725 29.82l-80.449 10.18 10.358-80.112C18.956 214.905 28.836 134.99 81.913 81.913c65.218-65.217 170.956-65.217 236.174 0 42.661 42.661 57.416 102.661 44.265 157.316"),g(v,"class","joinchat__button__send"),g(v,"viewBox","0 0 400 400"),g(v,"stroke-linecap","round"),g(v,"stroke-width","33"),g(y,"class","joinchat__badge"),g(n,"class","joinchat__button"),g(z,"class","joinchat__powered"),g(z,"href",e[2]),g(z,"rel","nofollow noopener"),g(z,"target","_blank"),g(B,"class","joinchat__close"),g(B,"aria-label","Close"),g(E,"class","joinchat__header"),g(N,"class","joinchat__message"),g(Y,"class","joinchat__box__content"),g(S,"class","joinchat__box__scroll"),g(C,"class","joinchat__box"),g(U,"d","M17 25V0C17 12.877 6.082 14.9 1.031 15.91c-1.559.31-1.179 2.272.004 2.272C9.609 18.182 17 18.088 17 25z"),g(I,"id","joinchat__message__peak"),g(P,"height","0"),g(P,"width","0"),g(o,"class","joinchat joinchat--right joinchat--show "),_(o,"joinchat--chatbox",e[3])},m(t,a){s(t,o,a),i(o,n),i(n,r),i(n,x),i(n,f),i(n,m),i(n,v),i(v,w),i(v,j),i(n,k),i(n,y),i(o,$),i(o,C),i(C,E),i(E,z),i(z,L),i(L,M),i(E,A),i(E,B),i(C,O),i(C,S),i(S,Y),i(Y,N),i(N,H),i(o,T),i(o,P),i(P,R),i(R,I),i(I,U),q||(F=[u(r,"click",e[5]),u(f,"click",e[4]),u(v,"click",e[4]),u(B,"click",e[5])],q=!0)},p(t,[e]){2&e&&b(M,t[1]),4&e&&g(z,"href",t[2]),1&e&&b(H,t[0]),8&e&&_(o,"joinchat--chatbox",t[3])},i:t,o:t,d(t){t&&c(o),q=!1,a(F)}}}function N(t,e,o){let{tel:a="+5531973493022"}=e,{msg:n="Olá! Bem vindo ao nosso Whatsapp! Escreva aqui como podemos te ajudar."}=e,{chat:r="Olá! Como Podemos te ajudar?"}=e,{title:i="Nuzap.com.br"}=e,{url:s="https://nuzap.com.br"}=e,c=navigator.userAgent.match(/Android|iPhone|BlackBerry|IEMobile|Opera Mini/i)?"api":"web";let l=!1;return t.$$set=t=>{"tel"in t&&o(6,a=t.tel),"msg"in t&&o(7,n=t.msg),"chat"in t&&o(0,r=t.chat),"title"in t&&o(1,i=t.title),"url"in t&&o(2,s=t.url)},[r,i,s,l,function(){window.open("https://"+c+".whatsapp.com/send?phone="+a+"&text="+encodeURIComponent(n),null,"noopener")},function(){o(3,l=!l)},a,n]}"function"==typeof HTMLElement&&(S=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,o){this[t]=o}$destroy(){!function(t,e){const o=t.$$;null!==o.fragment&&(a(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class H extends S{constructor(t){super(),this.shadowRoot.innerHTML="<style>.joinchat{--bottom:20px;--sep:20px;--header:70px;--btn:60px;--vh:100vh;--red:37;--green:211;--blue:102;--rgb:var(--red), var(--green), var(--blue);--color:rgb(var(--rgb));--dark:rgb(calc(var(--red) - 75), calc(var(--green) - 75), calc(var(--blue) - 75));--hover:rgb(calc(var(--red) + 50), calc(var(--green) + 50), calc(var(--blue) + 50));--bg:rgba(var(--rgb), 0.04);--tolerance:210;--bw:calc((var(--red)*0.2126 + var(--green)*0.7152 + var(--blue)*0.0722 - var(--tolerance))*-100000);--text:rgba(var(--bw), var(--bw), var(--bw), min(1, max(0.7, var(--bw))));--msg:var(--color);position:fixed;z-index:1000;right:var(--sep);bottom:var(--bottom);color:var(--text);font:normal normal normal 16px/1.625em -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;letter-spacing:0;transform:scale3d(0, 0, 0);transition:transform 0.3s ease-in-out;-webkit-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased}.joinchat *,.joinchat *::before,.joinchat *::after{box-sizing:border-box}.joinchat:not(.joinchat--show)>div{display:none}.joinchat--show{transform:scale3d(1, 1, 1);transition:transform 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)}@media(max-width: 480px), (orientation: landscape) and (max-width: 767px){.joinchat{--bottom:6px;--sep:6px;--header:55px}}@media(color-index: 48){}@media(prefers-color-scheme: dark){}.joinchat__button{display:flex;flex-direction:row;position:absolute;z-index:2;bottom:8px;right:8px;height:var(--btn);min-width:var(--btn);max-width:95vw;background:#25d366;color:inherit;border-radius:calc(var(--btn)/2);box-shadow:1px 6px 24px 0 rgba(7, 94, 84, 0.24);cursor:pointer;transition:background 0.2s linear;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:background-color, width}.joinchat__button:hover{background:#128c7e;transition:background 1.5s linear}.joinchat__button:active{background:#128c7e;transition:none}.joinchat--chatbox .joinchat__button{background:var(--color);transition:background 0.2s linear;box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.3)}.joinchat--chatbox .joinchat__button:hover,.joinchat--chatbox .joinchat__button:active{background:var(--hover)}.joinchat__button__open{width:var(--btn);height:var(--btn);background:rgba(0, 0, 0, 0) url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M3.516 3.516c4.686-4.686 12.284-4.686 16.97 0 4.686 4.686 4.686 12.283 0 16.97a12.004 12.004 0 01-13.754 2.299l-5.814.735a.392.392 0 01-.438-.44l.748-5.788A12.002 12.002 0 013.517 3.517zm3.61 17.043l.3.158a9.846 9.846 0 0011.534-1.758c3.843-3.843 3.843-10.074 0-13.918-3.843-3.843-10.075-3.843-13.918 0a9.846 9.846 0 00-1.747 11.554l.16.303-.51 3.942a.196.196 0 00.219.22l3.961-.501zm6.534-7.003l-.933 1.164a9.843 9.843 0 01-3.497-3.495l1.166-.933a.792.792 0 00.23-.94L9.561 6.96a.793.793 0 00-.924-.445 1291.6 1291.6 0 00-2.023.524.797.797 0 00-.588.88 11.754 11.754 0 0010.005 10.005.797.797 0 00.88-.587l.525-2.023a.793.793 0 00-.445-.923L14.6 13.327a.792.792 0 00-.94.23z'/%3E%3C/svg%3E\") center no-repeat;background-size:60%}.joinchat--chatbox .joinchat__button__open{display:none}.joinchat__button__send{display:none;width:var(--btn);height:var(--btn);max-width:var(--btn);padding:12px 11px 12px 13px;margin:0;flex-shrink:0}.joinchat--chatbox .joinchat__button__send{display:block}.joinchat__button__send path{fill:none !important;stroke:var(--text) !important}.joinchat__button__send .joinchat_svg__plain{stroke-dasharray:1097;stroke-dashoffset:1097;animation:joinchat_plain 6s 0.2s ease-in-out infinite}.joinchat__button__send .joinchat_svg__chat{stroke-dasharray:1020;stroke-dashoffset:1020;animation:joinchat_chat 6s 3.2s ease-in-out infinite}.joinchat__button__sendtext{padding:0;max-width:0;font-weight:600;line-height:var(--btn);white-space:nowrap;opacity:0;overflow:hidden;transition:none}.joinchat--chatbox .joinchat__button__sendtext{padding:0 4px 0 24px;max-width:200px;opacity:1;transition:max-width 0.2s linear, opacity 0.4s ease-out 0.2s}.joinchat__badge{position:absolute;top:-4px;right:-4px;width:20px;height:20px;border:none;border-radius:50%;background:#e82c0c;color:#fff;font-size:12px;font-weight:600;line-height:20px;text-align:center;box-shadow:none;opacity:0;pointer-events:none}@media(hover: hover){}.joinchat__box{display:flex;flex-direction:column;position:absolute;bottom:0;right:0;z-index:1;width:calc(100vw - var(--sep)*2);max-width:400px;min-height:170px;max-height:calc(var(--vh) - var(--bottom) - var(--sep));border-radius:32px;background:transparent;box-shadow:0 2px 6px 0 rgba(0, 0, 0, 0.5);text-align:left;overflow:hidden;transform:scale3d(0, 0, 0);opacity:0;transition:max-height 0.2s ease-out, opacity 0.4s ease-out, transform 0s linear 0.3s}.joinchat--chatbox .joinchat__box{opacity:1;transform:scale3d(1, 1, 1);transition:max-height 0.2s ease-out, opacity 0.2s ease-out, transform 0s linear}.joinchat__header{display:flex;flex-flow:row;align-items:center;position:relative;flex-shrink:0;height:var(--header);padding:0 70px 0 26px;margin:0;background:var(--color);text-align:left}.joinchat__powered{font-size:11px;line-height:18px;color:inherit !important;text-decoration:none !important;fill:currentColor;opacity:0.8}.joinchat__powered:hover,.joinchat__powered:active{color:inherit !important;text-decoration:none !important;opacity:0.9}.joinchat__close{position:absolute;top:50%;right:24px;width:34px;height:34px;margin-top:-16px;border-radius:50%;background:rgba(0, 0, 0, 0.4) url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M24 2.4L21.6 0 12 9.6 2.4 0 0 2.4 9.6 12 0 21.6 2.4 24l9.6-9.6 9.6 9.6 2.4-2.4-9.6-9.6L24 2.4z'/%3E%3C/svg%3E\") center no-repeat;background-size:12px;cursor:pointer;transition:background-color 0.3s ease-out;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.joinchat__close:hover{background-color:rgba(0, 0, 0, 0.6)}.joinchat__box__scroll{padding:20px 0 70px 0;padding-bottom:calc(var(--btn) + 10px);background:#fff linear-gradient(0deg, var(--bg), var(--bg));overflow-x:hidden;overflow-y:auto;will-change:scroll-position}.joinchat__box__scroll::-webkit-scrollbar{width:5px;background:rgba(0, 0, 0, 0)}.joinchat__box__scroll::-webkit-scrollbar-thumb{border-radius:3px;background:rgba(0, 0, 0, 0)}.joinchat__box__scroll:hover::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, 0.2)}@supports (-webkit-overflow-scrolling: touch){.joinchat__box__scroll{overflow-y:scroll;-webkit-overflow-scrolling:touch}}@media(max-width: 480px), (orientation: landscape) and (max-width: 767px){.joinchat__close{margin-top:-14px;width:28px;height:28px}.joinchat__box__scroll{padding-top:15px}}@media(color-index: 48){}@media(prefers-color-scheme: dark){}.joinchat__message{position:relative;min-height:60px;padding:17px 20px;margin:0 26px 26px;border-radius:32px;background:#fff;color:#4a4a4a;filter:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));transform:translateZ(0)}.joinchat__message::before{content:'';display:block;position:absolute;bottom:20px;left:-15px;width:17px;height:25px;background:inherit;-webkit-clip-path:url(#joinchat__message__peak);clip-path:url(#joinchat__message__peak)}@media(color-index: 48){}@media(prefers-color-scheme: dark){}@media(max-width: 480px), (orientation: landscape) and (max-width: 767px){.joinchat__message{padding:18px 16px;line-height:24px;margin:0 20px 20px}}@keyframes joinchat_badge_in{from{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}@keyframes joinchat_badge_out{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-20px)}}@keyframes joinchat_plain{0%,50%,100%{stroke-dashoffset:1097}5%,45%{stroke-dashoffset:0}}@keyframes joinchat_chat{0%,50%,100%{stroke-dashoffset:1020}5%,45%{stroke-dashoffset:0}}@keyframes joinchat_image_loop{0%{opacity:0}3%,20%{opacity:1}25%,100%{opacity:0}}@keyframes joinchat_tootlip{0%{opacity:0;transform:scaleY(0)}1%,20%{opacity:1;transform:scaleY(1)}25%,100%{opacity:0;transform:scaleY(1)}}</style>",O(this,{target:this.shadowRoot,props:x(this.attributes)},N,Y,r,{tel:6,msg:7,chat:0,title:1,url:2}),t&&(t.target&&s(t.target,this,t.anchor),t.props&&(this.$set(t.props),L()))}static get observedAttributes(){return["tel","msg","chat","title","url"]}get tel(){return this.$$.ctx[6]}set tel(t){this.$set({tel:t}),L()}get msg(){return this.$$.ctx[7]}set msg(t){this.$set({msg:t}),L()}get chat(){return this.$$.ctx[0]}set chat(t){this.$set({chat:t}),L()}get title(){return this.$$.ctx[1]}set title(t){this.$set({title:t}),L()}get url(){return this.$$.ctx[2]}set url(t){this.$set({url:t}),L()}}customElements.define("whatsapp-widget",H);return new H({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map

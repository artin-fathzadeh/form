function x(){}const G=t=>t;function bt(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function nt(){return Object.create(null)}function C(t){t.forEach(st)}function L(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function $t(t){return Object.keys(t).length===0}function rt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t){let e;return rt(t,n=>e=n)(),e}function It(t,e,n){t.$$.on_destroy.push(rt(e,n))}function Jt(t,e,n,s){if(t){const i=ot(t,e,n,s);return t[0](i)}}function ot(t,e,n,s){return t[1]&&s?bt(n.ctx.slice(),t[1](s(e))):n.ctx}function Kt(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const c=[],r=Math.max(e.dirty.length,i.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|i[o];return c}return e.dirty|i}return e.dirty}function Qt(t,e,n,s,i,c){if(i){const r=ot(e,n,s,c);t.p(r,i)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Vt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Xt(t){const e={};for(const n in t)e[n]=!0;return e}function Yt(t){return t??""}function Zt(t,e,n){return t.set(n),e}const ct=typeof window<"u";let I=ct?()=>window.performance.now():()=>Date.now(),X=ct?t=>requestAnimationFrame(t):x;const M=new Set;function lt(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&X(lt)}function J(t){let e;return M.size===0&&X(lt),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}let K=!1;function xt(){K=!0}function wt(){K=!1}function vt(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=a?i+1:vt(1,i,h=>e[n[h]].claim_order,a))-1;s[l]=n[f]+1;const _=f+1;n[_]=l,i=Math.max(_,i)}const c=[],r=[];let o=e.length-1;for(let l=n[i]+1;l!=0;l=s[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;t.insertBefore(r[l],f)}}function Et(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=ft("style");return Ct(at(t),e),e.sheet}function Ct(t,e){return Et(t.head||t,e),e.sheet}function St(t,e){if(K){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function te(t,e,n){K&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode&&t.parentNode.removeChild(t)}function ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ft(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t){return document.createTextNode(t)}function ne(){return Y(" ")}function ie(){return Y("")}function se(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function re(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function oe(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t){return Array.from(t.childNodes)}function Tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function _t(t,e,n,s,i=!1){Tt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,i||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return s()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function dt(t,e,n,s){return _t(t,i=>i.nodeName===e,i=>{const c=[];for(let r=0;r<i.attributes.length;r++){const o=i.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>i.removeAttribute(r))},()=>s(e))}function ce(t,e,n){return dt(t,e,n,ft)}function le(t,e,n){return dt(t,e,n,At)}function jt(t,e){return _t(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>Y(e),!0)}function ae(t){return jt(t," ")}function ue(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function fe(t,e){t.value=e??""}function _e(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function de(t,e,n){t.classList[n?"add":"remove"](e)}function ht(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function he(t,e){const n=[];let s=0;for(const i of e.childNodes)if(i.nodeType===8){const c=i.textContent.trim();c===`HEAD_${t}_END`?(s-=1,n.push(i)):c===`HEAD_${t}_START`&&(s+=1,n.push(i))}else s>0&&n.push(i);return n}function me(t,e){return new t(e)}const F=new Map;let W=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:Nt(e),rules:{}};return F.set(t,n),n}function P(t,e,n,s,i,c,r,o=0){const l=16.666/s;let a=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*c(m);a+=m*100+`%{${r(g,1-g)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Dt(f)}_${o}`,h=at(t),{stylesheet:u,rules:d}=F.get(h)||Rt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${s}ms linear ${i}ms 1 both`,W+=1,_}function B(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),W-=i,W||Pt())}function Pt(){X(()=>{W||(F.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ut(e)}),F.clear())})}function pe(t,e,n,s){if(!e)return x;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return x;const{delay:c=0,duration:r=300,easing:o=G,start:l=I()+c,end:a=l+r,tick:f=x,css:_}=n(t,{from:e,to:i},s);let h=!0,u=!1,d;function p(){_&&(d=P(t,0,1,r,c,o,_)),c||(u=!0)}function m(){_&&B(t,d),h=!1}return J(g=>{if(!u&&g>=l&&(u=!0),u&&g>=a&&(f(1,0),m()),!h)return!1;if(u){const $=g-l,b=0+1*o($/r);f(b,1-b)}return!0}),p(),f(0,1),m}function ge(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,Bt(t,i)}}function Bt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const s=getComputedStyle(t),i=s.transform==="none"?"":s.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let O;function R(t){O=t}function Z(){if(!O)throw new Error("Function called outside component initialization");return O}function ye(t){Z().$$.on_mount.push(t)}function be(t){Z().$$.after_update.push(t)}function $e(){const t=Z();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const c=ht(e,n,{cancelable:s});return i.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function xe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const A=[],it=[],H=[],U=[],mt=Promise.resolve();let V=!1;function pt(){V||(V=!0,mt.then(gt))}function we(){return pt(),mt}function T(t){H.push(t)}function ve(t){U.push(t)}const Q=new Set;let S=0;function gt(){if(S!==0)return;const t=O;do{try{for(;S<A.length;){const e=A[S];S++,R(e),Ot(e.$$)}}catch(e){throw A.length=0,S=0,e}for(R(null),A.length=0,S=0;it.length;)it.pop()();for(let e=0;e<H.length;e+=1){const n=H[e];Q.has(n)||(Q.add(n),n())}H.length=0}while(A.length);for(;U.length;)U.pop()();V=!1,Q.clear(),R(t)}function Ot(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let D;function tt(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function N(t,e,n){t.dispatchEvent(ht(`${e?"intro":"outro"}${n}`))}const q=new Set;let E;function ke(){E={r:0,c:[],p:E}}function Ee(){E.r||C(E.c),E=E.p}function yt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Lt(t,e,n,s){if(t&&t.o){if(q.has(t))return;q.add(t),E.c.push(()=>{q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const et={duration:0};function Ne(t,e,n){const s={direction:"in"};let i=e(t,n,s),c=!1,r,o,l=0;function a(){r&&B(t,r)}function f(){const{delay:h=0,duration:u=300,easing:d=G,tick:p=x,css:m}=i||et;m&&(r=P(t,0,1,u,h,d,m,l++)),p(0,1);const g=I()+h,$=g+u;o&&o.abort(),c=!0,T(()=>N(t,!0,"start")),o=J(b=>{if(c){if(b>=$)return p(1,0),N(t,!0,"end"),a(),c=!1;if(b>=g){const w=d((b-g)/u);p(w,1-w)}}return c})}let _=!1;return{start(){_||(_=!0,B(t),L(i)?(i=i(s),tt().then(f)):f())},invalidate(){_=!1},end(){c&&(a(),c=!1)}}}function Ce(t,e,n){const s={direction:"out"};let i=e(t,n,s),c=!0,r;const o=E;o.r+=1;function l(){const{delay:a=0,duration:f=300,easing:_=G,tick:h=x,css:u}=i||et;u&&(r=P(t,1,0,f,a,_,u));const d=I()+a,p=d+f;T(()=>N(t,!1,"start")),J(m=>{if(c){if(m>=p)return h(0,1),N(t,!1,"end"),--o.r||C(o.c),!1;if(m>=d){const g=_((m-d)/f);h(1-g,g)}}return c})}return L(i)?tt().then(()=>{i=i(s),l()}):l(),{end(a){a&&i.tick&&i.tick(1,0),c&&(r&&B(t,r),c=!1)}}}function Se(t,e,n,s){const i={direction:"both"};let c=e(t,n,i),r=s?0:1,o=null,l=null,a=null;function f(){a&&B(t,a)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=G,tick:g=x,css:$}=c||et,b={start:I()+d,b:u};u||(b.group=E,E.r+=1),o||l?l=b:($&&(f(),a=P(t,r,u,p,d,m,$)),u&&g(0,1),o=_(b,p),T(()=>N(t,u,"start")),J(w=>{if(l&&w>l.start&&(o=_(l,p),l=null,N(t,o.b,"start"),$&&(f(),a=P(t,r,o.b,o.duration,0,m,c.css))),o){if(w>=o.end)g(r=o.b,1-r),N(t,o.b,"end"),l||(o.b?f():--o.group.r||C(o.group.c)),o=null;else if(w>=o.start){const j=w-o.start;r=o.a+o.d*m(j/o.duration),g(r,1-r)}}return!!(o||l)}))}return{run(u){L(c)?tt().then(()=>{c=c(i),h(u)}):h(u)},end(){f(),o=l=null}}}const Ae=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function zt(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function Me(t,e){t.f(),zt(t,e)}function Te(t,e,n,s,i,c,r,o,l,a,f,_){let h=t.length,u=c.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],g=new Map,$=new Map;for(d=u;d--;){const y=_(i,c,d),v=n(y);let k=r.get(v);k?s&&k.p(y,e):(k=a(v,y),k.c()),g.set(v,m[d]=k),v in p&&$.set(v,Math.abs(d-p[v]))}const b=new Set,w=new Set;function j(y){yt(y,1),y.m(o,f),r.set(y.key,y),f=y.first,u--}for(;h&&u;){const y=m[u-1],v=t[h-1],k=y.key,z=v.key;y===v?(f=y.first,h--,u--):g.has(z)?!r.has(k)||b.has(k)?j(y):w.has(z)?h--:$.get(k)>$.get(z)?(w.add(k),j(y)):(b.add(z),h--):(l(v,r),h--)}for(;h--;){const y=t[h];g.has(y.key)||l(y,r)}for(;u;)j(m[u-1]);return m}function je(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function De(t){t&&t.c()}function Re(t,e){t&&t.l(e)}function Ht(t,e,n,s){const{fragment:i,after_update:c}=t.$$;i&&i.m(e,n),s||T(()=>{const r=t.$$.on_mount.map(st).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...r):C(r),t.$$.on_mount=[]}),c.forEach(T)}function qt(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(A.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Pe(t,e,n,s,i,c,r,o=[-1]){const l=O;R(t);const a=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:i,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:nt(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&i(a.ctx[_],a.ctx[_]=d)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](d),f&&Ft(t,_)),h}):[],a.update(),f=!0,C(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){xt();const _=Mt(e.target);a.fragment&&a.fragment.l(_),_.forEach(ut)}else a.fragment&&a.fragment.c();e.intro&&yt(t.$$.fragment),Ht(t,e.target,e.anchor,e.customElement),wt(),gt()}R(l)}class Be{$destroy(){qt(this,1),this.$destroy=x}$on(e,n){if(!L(n))return x;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{At as $,we as A,x as B,rt as C,C as D,L as E,Jt as F,Qt as G,Ut as H,Kt as I,St as J,It as K,Yt as L,bt as M,Vt as N,it as O,je as P,ve as Q,he as R,Be as S,Ae as T,T as U,Ne as V,de as W,se as X,xe as Y,G as Z,Se as _,ne as a,le as a0,$e as a1,Te as a2,zt as a3,ee as a4,Zt as a5,Gt as a6,Ce as a7,Me as a8,ge as a9,pe as aa,re as ab,Xt as ac,fe as ad,te as b,ae as c,Ee as d,ie as e,yt as f,ke as g,ut as h,Pe as i,be as j,ft as k,ce as l,Mt as m,oe as n,ye as o,_e as p,Y as q,jt as r,Wt as s,Lt as t,ue as u,me as v,De as w,Re as x,Ht as y,qt as z};

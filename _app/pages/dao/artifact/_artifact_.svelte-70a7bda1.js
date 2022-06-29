import{S as qe,i as Re,s as ve,e as T,c as $,a as w,d as a,g as u,E as re,v as Le,F as Ie,t as d,h as v,l as L,j as I,k as ee,m as le,b as q,I as A,X as ce,q as x,w as me,x as be,y as ke,o as te,B as Ee,p as Ae,n as ge}from"../../../chunks/index-a02da30e.js";import{T as He,g as j,d as Ge,G as kl}from"../../../chunks/lib-cf80d2a1.js";import{B as El}from"../../../chunks/BlockTree-492566e1.js";import{A as Nl}from"../../../chunks/Alert-12c40fb9.js";import{r as Te}from"../../../chunks/mermaid.esm.min-51ac21d2.js";import{m as Pe}from"../../../chunks/config-6e32f34b.js";import{T as Dl}from"../../../chunks/Title-1d23c88f.js";import{L as Al}from"../../../chunks/Lookup-DAO-c3e352bc.js";import"../../../chunks/marked.esm-8ab30116.js";/* empty css                                                          */import"../../../chunks/navigation-0e6511d1.js";import"../../../chunks/singletons-d1fb5791.js";/* empty css                                                                       */function je(r,t,f){const e=r.slice();return e[9]=t[f],e}function gl(r){let t;return{c(){t=d("No related offensive techniques in this release.")},l(f){t=v(f,"No related offensive techniques in this release.")},m(f,e){u(f,t,e)},p:re,d(f){f&&a(t)}}}function Il(r){let t,f,e,l,i,s=r[0].results.bindings,o=[];for(let n=0;n<s.length;n+=1)o[n]=Fe(je(r,s,n));return{c(){t=T("div"),f=T("div"),e=d(`graph LR;

        `);for(let n=0;n<o.length;n+=1)o[n].c();l=ee(),i=T("div"),this.h()},l(n){t=$(n,"DIV",{});var c=w(t);f=$(c,"DIV",{class:!0});var h=w(f);e=v(h,`graph LR;

        `);for(let k=0;k<o.length;k+=1)o[k].l(h);h.forEach(a),c.forEach(a),l=le(n),i=$(n,"DIV",{id:!0}),w(i).forEach(a),this.h()},h(){q(f,"class","hidden"),q(i,"id","graph_ot")},m(n,c){u(n,t,c),A(t,f),A(f,e);for(let h=0;h<o.length;h+=1)o[h].m(f,null);r[4](t),u(n,l,c),u(n,i,c),r[5](i)},p(n,c){if(c&9){s=n[0].results.bindings;let h;for(h=0;h<s.length;h+=1){const k=je(n,s,h);o[h]?o[h].p(k,c):(o[h]=Fe(k),o[h].c(),o[h].m(f,null))}for(;h<o.length;h+=1)o[h].d(1);o.length=s.length}},d(n){n&&a(t),ce(o,n),r[4](null),n&&a(l),n&&a(i),r[5](null)}}}function Be(r){let t=r[9].off_tech_id.value.replace(/ |\./g,"")+"",f,e,l=r[9].off_tech_label.value+"",i,s,o="-->",n,c,h=r[9].off_artifact_rel_label.value.replace(/ /g,"")+"",k,b,N=j(r[9].off_artifact.value)+"",g,B,F=r[9].off_artifact_label.value+"",H,X,z=r[9].off_tech_id.value.replace(/ |\./g,"")+"",U,J,V=j(r[9].off_artifact.value)+"",M,Z,O=r[9].off_tech_id.value.replace(/ |\./g,"")+"",W,Q,C=Ge(r[9].off_tech_id.value)+"",S,Y,R=j(r[9].off_artifact.value)+"",K,m,D=j(r[9].off_artifact.value)+"",y,fe;return{c(){f=d(t),e=d('["'),i=d(l),s=d('"] '),n=d(o),c=d(" |"),k=d(h),b=d("| "),g=d(N),B=d('["'),H=d(F),X=d('"]; class '),U=d(z),J=d(` OffensiveTechniqueNode;
            class `),M=d(V),Z=d(" ArtifactNode; click "),W=d(O),Q=d(' href "'),S=d(C),Y=d('"; click '),K=d(R),m=d(' href "/dao/artifact/d3f:'),y=d(D),fe=d('";')},l(_){f=v(_,t),e=v(_,'["'),i=v(_,l),s=v(_,'"] '),n=v(_,o),c=v(_," |"),k=v(_,h),b=v(_,"| "),g=v(_,N),B=v(_,'["'),H=v(_,F),X=v(_,'"]; class '),U=v(_,z),J=v(_,` OffensiveTechniqueNode;
            class `),M=v(_,V),Z=v(_," ArtifactNode; click "),W=v(_,O),Q=v(_,' href "'),S=v(_,C),Y=v(_,'"; click '),K=v(_,R),m=v(_,' href "/dao/artifact/d3f:'),y=v(_,D),fe=v(_,'";')},m(_,p){u(_,f,p),u(_,e,p),u(_,i,p),u(_,s,p),u(_,n,p),u(_,c,p),u(_,k,p),u(_,b,p),u(_,g,p),u(_,B,p),u(_,H,p),u(_,X,p),u(_,U,p),u(_,J,p),u(_,M,p),u(_,Z,p),u(_,W,p),u(_,Q,p),u(_,S,p),u(_,Y,p),u(_,K,p),u(_,m,p),u(_,y,p),u(_,fe,p)},p(_,p){p&1&&t!==(t=_[9].off_tech_id.value.replace(/ |\./g,"")+"")&&I(f,t),p&1&&l!==(l=_[9].off_tech_label.value+"")&&I(i,l),p&1&&h!==(h=_[9].off_artifact_rel_label.value.replace(/ /g,"")+"")&&I(k,h),p&1&&N!==(N=j(_[9].off_artifact.value)+"")&&I(g,N),p&1&&F!==(F=_[9].off_artifact_label.value+"")&&I(H,F),p&1&&z!==(z=_[9].off_tech_id.value.replace(/ |\./g,"")+"")&&I(U,z),p&1&&V!==(V=j(_[9].off_artifact.value)+"")&&I(M,V),p&1&&O!==(O=_[9].off_tech_id.value.replace(/ |\./g,"")+"")&&I(W,O),p&1&&C!==(C=Ge(_[9].off_tech_id.value)+"")&&I(S,C),p&1&&R!==(R=j(_[9].off_artifact.value)+"")&&I(K,R),p&1&&D!==(D=j(_[9].off_artifact.value)+"")&&I(y,D)},d(_){_&&a(f),_&&a(e),_&&a(i),_&&a(s),_&&a(n),_&&a(c),_&&a(k),_&&a(b),_&&a(g),_&&a(B),_&&a(H),_&&a(X),_&&a(U),_&&a(J),_&&a(M),_&&a(Z),_&&a(W),_&&a(Q),_&&a(S),_&&a(Y),_&&a(K),_&&a(m),_&&a(y),_&&a(fe)}}}function Fe(r){let t=r[3].edge_is_unique(r[9].off_tech_label.value,r[9].off_artifact_rel_label.value,r[9].off_artifact_label.value),f,e=t&&Be(r);return{c(){e&&e.c(),f=L()},l(l){e&&e.l(l),f=L()},m(l,i){e&&e.m(l,i),u(l,f,i)},p(l,i){i&1&&(t=l[3].edge_is_unique(l[9].off_tech_label.value,l[9].off_artifact_rel_label.value,l[9].off_artifact_label.value)),t?e?e.p(l,i):(e=Be(l),e.c(),e.m(f.parentNode,f)):e&&(e.d(1),e=null)},d(l){e&&e.d(l),l&&a(f)}}}function Tl(r){let t;function f(i,s){return i[0].results.bindings.length>0?Il:gl}let e=f(r),l=e(r);return{c(){t=T("div"),l.c()},l(i){t=$(i,"DIV",{});var s=w(t);l.l(s),s.forEach(a)},m(i,s){u(i,t,s),l.m(t,null)},p(i,[s]){e===(e=f(i))&&l?l.p(i,s):(l.d(1),l=e(i),l&&(l.c(),l.m(t,null)))},i:re,o:re,d(i){i&&a(t),l.d()}}}function $l(r,t,f){let{da_to_off:e}=t,l=new He,i=Pe,s;function o(b,N){s.innerHTML=b}let n,c;Le(async()=>{if(e.results.bindings.length>0){Te.initialize(i);let b=n.children[0].textContent;s=c,Te.mermaidAPI.render("m-graph_ot",b,o)}});function h(b){Ie[b?"unshift":"push"](()=>{n=b,f(1,n)})}function k(b){Ie[b?"unshift":"push"](()=>{c=b,f(2,c)})}return r.$$set=b=>{"da_to_off"in b&&f(0,e=b.da_to_off)},[e,n,c,l,h,k]}class wl extends qe{constructor(t){super(),Re(this,t,$l,Tl,ve,{da_to_off:0})}}function Me(r,t,f){const e=r.slice();return e[12]=t[f],e}function ze(r,t,f){const e=r.slice();return e[15]=t[f],e}function Ue(r,t,f){const e=r.slice();return e[18]=t[f],e}function We(r,t,f){const e=r.slice();return e[12]=t[f],e}function Xe(r,t,f){const e=r.slice();return e[15]=t[f],e}function ql(r){let t,f=j(r[0])+"",e,l;return{c(){t=T("code"),e=d(f),l=d(" has no direct neighbors in this release.")},l(i){t=$(i,"CODE",{});var s=w(t);e=v(s,f),s.forEach(a),l=v(i," has no direct neighbors in this release.")},m(i,s){u(i,t,s),A(t,e),u(i,l,s)},p(i,s){s&1&&f!==(f=j(i[0])+"")&&I(e,f)},d(i){i&&a(t),i&&a(l)}}}function Rl(r){let t,f,e,l,i=r[3].i(r[0])["d3f:outbound"],s,o,n=r[3].graph.filter(r[5]),c=[];for(let k=0;k<n.length;k+=1)c[k]=Ye(Ue(r,n,k));let h=i&&Ze(r);return{c(){t=T("div"),f=T("div"),e=d(`graph LR;

        `);for(let k=0;k<c.length;k+=1)c[k].c();l=ee(),h&&h.c(),s=ee(),o=T("div"),this.h()},l(k){t=$(k,"DIV",{});var b=w(t);f=$(b,"DIV",{class:!0});var N=w(f);e=v(N,`graph LR;

        `);for(let g=0;g<c.length;g+=1)c[g].l(N);l=le(N),h&&h.l(N),N.forEach(a),b.forEach(a),s=le(k),o=$(k,"DIV",{id:!0}),w(o).forEach(a),this.h()},h(){q(f,"class","hidden"),q(o,"id","graph_neighbors")},m(k,b){u(k,t,b),A(t,f),A(f,e);for(let N=0;N<c.length;N+=1)c[N].m(f,null);A(f,l),h&&h.m(f,null),r[6](t),u(k,s,b),u(k,o,b),r[7](o)},p(k,b){if(b&9){n=k[3].graph.filter(k[5]);let N;for(N=0;N<n.length;N+=1){const g=Ue(k,n,N);c[N]?c[N].p(g,b):(c[N]=Ye(g),c[N].c(),c[N].m(f,l))}for(;N<c.length;N+=1)c[N].d(1);c.length=n.length}b&1&&(i=k[3].i(k[0])["d3f:outbound"]),i?h?h.p(k,b):(h=Ze(k),h.c(),h.m(f,null)):h&&(h.d(1),h=null)},d(k){k&&a(t),ce(c,k),h&&h.d(),r[6](null),k&&a(s),k&&a(o),r[7](null)}}}function Je(r){let t,f=r[18]["d3f:outbound"],e=[];for(let l=0;l<f.length;l+=1)e[l]=Qe(We(r,f,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=L()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=L()},m(l,i){for(let s=0;s<e.length;s+=1)e[s].m(l,i);u(l,t,i)},p(l,i){if(i&9){f=l[18]["d3f:outbound"];let s;for(s=0;s<f.length;s+=1){const o=We(l,f,s);e[s]?e[s].p(o,i):(e[s]=Qe(o),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=f.length}},d(l){ce(e,l),l&&a(t)}}}function Ke(r){let t=r[18]["@id"]+"",f,e,l=r[18]["rdfs:label"][0]+"",i,s,o="-->",n,c,h=j(r[12]["@id"])+"",k,b,N=r[15]["@id"]+"",g,B,F=r[3].i(r[15]["@id"])["rdfs:label"][0]+"",H,X,z=r[18]["@id"]+"",U,J,V=r[15]["@id"]+"",M,Z,O=r[18]["@id"]+"",W,Q,C=r[18]["@id"]+"",S,Y,R=r[15]["@id"]+"",K,m,D=r[15]["@id"]+"",y,fe;return{c(){f=d(t),e=d('["'),i=d(l),s=d('"] '),n=d(o),c=d(" | "),k=d(h),b=d(" | "),g=d(N),B=d('["'),H=d(F),X=d(`"];
                class `),U=d(z),J=d(" ArtifactNode; class "),M=d(V),Z=d(` RootArtifactNode;
                click `),W=d(O),Q=d(' href "/dao/artifact/'),S=d(C),Y=d('"; click '),K=d(R),m=d(' href "/dao/artifact/'),y=d(D),fe=d('";')},l(_){f=v(_,t),e=v(_,'["'),i=v(_,l),s=v(_,'"] '),n=v(_,o),c=v(_," | "),k=v(_,h),b=v(_," | "),g=v(_,N),B=v(_,'["'),H=v(_,F),X=v(_,`"];
                class `),U=v(_,z),J=v(_," ArtifactNode; class "),M=v(_,V),Z=v(_,` RootArtifactNode;
                click `),W=v(_,O),Q=v(_,' href "/dao/artifact/'),S=v(_,C),Y=v(_,'"; click '),K=v(_,R),m=v(_,' href "/dao/artifact/'),y=v(_,D),fe=v(_,'";')},m(_,p){u(_,f,p),u(_,e,p),u(_,i,p),u(_,s,p),u(_,n,p),u(_,c,p),u(_,k,p),u(_,b,p),u(_,g,p),u(_,B,p),u(_,H,p),u(_,X,p),u(_,U,p),u(_,J,p),u(_,M,p),u(_,Z,p),u(_,W,p),u(_,Q,p),u(_,S,p),u(_,Y,p),u(_,K,p),u(_,m,p),u(_,y,p),u(_,fe,p)},p(_,p){p&1&&t!==(t=_[18]["@id"]+"")&&I(f,t),p&1&&l!==(l=_[18]["rdfs:label"][0]+"")&&I(i,l),p&1&&h!==(h=j(_[12]["@id"])+"")&&I(k,h),p&1&&N!==(N=_[15]["@id"]+"")&&I(g,N),p&1&&F!==(F=_[3].i(_[15]["@id"])["rdfs:label"][0]+"")&&I(H,F),p&1&&z!==(z=_[18]["@id"]+"")&&I(U,z),p&1&&V!==(V=_[15]["@id"]+"")&&I(M,V),p&1&&O!==(O=_[18]["@id"]+"")&&I(W,O),p&1&&C!==(C=_[18]["@id"]+"")&&I(S,C),p&1&&R!==(R=_[15]["@id"]+"")&&I(K,R),p&1&&D!==(D=_[15]["@id"]+"")&&I(y,D)},d(_){_&&a(f),_&&a(e),_&&a(i),_&&a(s),_&&a(n),_&&a(c),_&&a(k),_&&a(b),_&&a(g),_&&a(B),_&&a(H),_&&a(X),_&&a(U),_&&a(J),_&&a(M),_&&a(Z),_&&a(W),_&&a(Q),_&&a(S),_&&a(Y),_&&a(K),_&&a(m),_&&a(y),_&&a(fe)}}}function Qe(r){let t,f=r[18][r[12]["@id"]],e=[];for(let l=0;l<f.length;l+=1)e[l]=Ke(Xe(r,f,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=L()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=L()},m(l,i){for(let s=0;s<e.length;s+=1)e[s].m(l,i);u(l,t,i)},p(l,i){if(i&9){f=l[18][l[12]["@id"]];let s;for(s=0;s<f.length;s+=1){const o=Xe(l,f,s);e[s]?e[s].p(o,i):(e[s]=Ke(o),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=f.length}},d(l){ce(e,l),l&&a(t)}}}function Ye(r){let t,f=r[18]["d3f:outbound"]&&Je(r);return{c(){f&&f.c(),t=L()},l(e){f&&f.l(e),t=L()},m(e,l){f&&f.m(e,l),u(e,t,l)},p(e,l){e[18]["d3f:outbound"]?f?f.p(e,l):(f=Je(e),f.c(),f.m(t.parentNode,t)):f&&(f.d(1),f=null)},d(e){f&&f.d(e),e&&a(t)}}}function Ze(r){let t,f=r[3].i(r[0])["d3f:outbound"],e=[];for(let l=0;l<f.length;l+=1)e[l]=xe(Me(r,f,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=L()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=L()},m(l,i){for(let s=0;s<e.length;s+=1)e[s].m(l,i);u(l,t,i)},p(l,i){if(i&9){f=l[3].i(l[0])["d3f:outbound"];let s;for(s=0;s<f.length;s+=1){const o=Me(l,f,s);e[s]?e[s].p(o,i):(e[s]=xe(o),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=f.length}},d(l){ce(e,l),l&&a(t)}}}function ye(r){let t,f,e=r[3].i(r[0])["rdfs:label"][0]+"",l,i,s="-->",o,n,c=j(r[12]["@id"])+"",h,k,b=r[15]["@id"]+"",N,g,B=r[3].graph[r[3].index[r[15]["@id"]]]["rdfs:label"][0]+"",F,H,X,z,U=r[15]["@id"]+"",J,V,M,Z,O,W,Q=r[15]["@id"]+"",C,S,Y=r[15]["@id"]+"",R,K;return{c(){t=d(r[0]),f=d('["'),l=d(e),i=d('"] '),o=d(s),n=d(" | "),h=d(c),k=d(" | "),N=d(b),g=d('["'),F=d(B),H=d('"]; class '),X=d(r[0]),z=d(" RootArtifactNode; class "),J=d(U),V=d(` ArtifactNode;
              click `),M=d(r[0]),Z=d(' href "/dao/artifact/'),O=d(r[0]),W=d('"; click '),C=d(Q),S=d(' href "/dao/artifact/'),R=d(Y),K=d('";')},l(m){t=v(m,r[0]),f=v(m,'["'),l=v(m,e),i=v(m,'"] '),o=v(m,s),n=v(m," | "),h=v(m,c),k=v(m," | "),N=v(m,b),g=v(m,'["'),F=v(m,B),H=v(m,'"]; class '),X=v(m,r[0]),z=v(m," RootArtifactNode; class "),J=v(m,U),V=v(m,` ArtifactNode;
              click `),M=v(m,r[0]),Z=v(m,' href "/dao/artifact/'),O=v(m,r[0]),W=v(m,'"; click '),C=v(m,Q),S=v(m,' href "/dao/artifact/'),R=v(m,Y),K=v(m,'";')},m(m,D){u(m,t,D),u(m,f,D),u(m,l,D),u(m,i,D),u(m,o,D),u(m,n,D),u(m,h,D),u(m,k,D),u(m,N,D),u(m,g,D),u(m,F,D),u(m,H,D),u(m,X,D),u(m,z,D),u(m,J,D),u(m,V,D),u(m,M,D),u(m,Z,D),u(m,O,D),u(m,W,D),u(m,C,D),u(m,S,D),u(m,R,D),u(m,K,D)},p(m,D){D&1&&I(t,m[0]),D&1&&e!==(e=m[3].i(m[0])["rdfs:label"][0]+"")&&I(l,e),D&1&&c!==(c=j(m[12]["@id"])+"")&&I(h,c),D&1&&b!==(b=m[15]["@id"]+"")&&I(N,b),D&1&&B!==(B=m[3].graph[m[3].index[m[15]["@id"]]]["rdfs:label"][0]+"")&&I(F,B),D&1&&I(X,m[0]),D&1&&U!==(U=m[15]["@id"]+"")&&I(J,U),D&1&&I(M,m[0]),D&1&&I(O,m[0]),D&1&&Q!==(Q=m[15]["@id"]+"")&&I(C,Q),D&1&&Y!==(Y=m[15]["@id"]+"")&&I(R,Y)},d(m){m&&a(t),m&&a(f),m&&a(l),m&&a(i),m&&a(o),m&&a(n),m&&a(h),m&&a(k),m&&a(N),m&&a(g),m&&a(F),m&&a(H),m&&a(X),m&&a(z),m&&a(J),m&&a(V),m&&a(M),m&&a(Z),m&&a(O),m&&a(W),m&&a(C),m&&a(S),m&&a(R),m&&a(K)}}}function xe(r){let t,f=r[3].i(r[0])[r[12]["@id"]],e=[];for(let l=0;l<f.length;l+=1)e[l]=ye(ze(r,f,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=L()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=L()},m(l,i){for(let s=0;s<e.length;s+=1)e[s].m(l,i);u(l,t,i)},p(l,i){if(i&9){f=l[3].i(l[0])[l[12]["@id"]];let s;for(s=0;s<f.length;s+=1){const o=ze(l,f,s);e[s]?e[s].p(o,i):(e[s]=ye(o),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=f.length}},d(l){ce(e,l),l&&a(t)}}}function Vl(r){let t;function f(i,s){return i[3].graph.length>0?Rl:ql}let l=f(r)(r);return{c(){t=T("div"),l.c()},l(i){t=$(i,"DIV",{});var s=w(t);l.l(s),s.forEach(a)},m(i,s){u(i,t,s),l.m(t,null)},p(i,[s]){l.p(i,s)},i:re,o:re,d(i){i&&a(t),l.d()}}}function Ll(r,t,f){let{neighbors:e}=t,{root_node:l}=t,i=new kl(e,{index:!0});new He;let s=Pe,o;function n(g,B){o.innerHTML=g}let c,h;Le(async()=>{if(i.graph.length>0){Te.initialize(s);let g=c.children[0].textContent;o=h,Te.mermaidAPI.render("m-graph_neighbors",g,n)}});const k=g=>g["@id"]!=l;function b(g){Ie[g?"unshift":"push"](()=>{c=g,f(1,c)})}function N(g){Ie[g?"unshift":"push"](()=>{h=g,f(2,h)})}return r.$$set=g=>{"neighbors"in g&&f(4,e=g.neighbors),"root_node"in g&&f(0,l=g.root_node)},[l,c,h,i,e,k,b,N]}class Hl extends qe{constructor(t){super(),Re(this,t,Ll,Vl,ve,{neighbors:4,root_node:0})}}function el(r,t,f){const e=r.slice();return e[9]=t[f],e}function Pl(r){let t;return{c(){t=d("No related countermeasure techniques in this release.")},l(f){t=v(f,"No related countermeasure techniques in this release.")},m(f,e){u(f,t,e)},p:re,d(f){f&&a(t)}}}function Sl(r){let t,f,e,l,i,s=r[0].results.bindings,o=[];for(let n=0;n<s.length;n+=1)o[n]=tl(el(r,s,n));return{c(){t=T("div"),f=T("div"),e=d(`graph LR;

        

        `);for(let n=0;n<o.length;n+=1)o[n].c();l=ee(),i=T("div"),this.h()},l(n){t=$(n,"DIV",{});var c=w(t);f=$(c,"DIV",{class:!0});var h=w(f);e=v(h,`graph LR;

        

        `);for(let k=0;k<o.length;k+=1)o[k].l(h);h.forEach(a),c.forEach(a),l=le(n),i=$(n,"DIV",{id:!0}),w(i).forEach(a),this.h()},h(){q(f,"class","hidden"),q(i,"id","graph_cm")},m(n,c){u(n,t,c),A(t,f),A(f,e);for(let h=0;h<o.length;h+=1)o[h].m(f,null);r[4](t),u(n,l,c),u(n,i,c),r[5](i)},p(n,c){if(c&9){s=n[0].results.bindings;let h;for(h=0;h<s.length;h+=1){const k=el(n,s,h);o[h]?o[h].p(k,c):(o[h]=tl(k),o[h].c(),o[h].m(f,null))}for(;h<o.length;h+=1)o[h].d(1);o.length=s.length}},d(n){n&&a(t),ce(o,n),r[4](null),n&&a(l),n&&a(i),r[5](null)}}}function ll(r){let t=j(r[9].def_tech.value)+"",f,e,l=r[9].def_tech_label.value+"",i,s,o="-->",n,c,h=r[9].def_artifact_rel_label.value.replace(/ /g,"")+"",k,b,N=j(r[9].def_artifact.value)+"",g,B,F=r[9].def_artifact_label.value+"",H,X,z=j(r[9].def_tech.value)+"",U,J,V=j(r[9].def_artifact.value)+"",M,Z,O=j(r[9].def_tech.value)+"",W,Q,C=j(r[9].def_tech.value)+"",S,Y,R=j(r[9].def_artifact.value)+"",K,m,D=j(r[9].def_artifact.value)+"",y,fe;return{c(){f=d(t),e=d('["'),i=d(l),s=d('"] '),n=d(o),c=d(`
            | `),k=d(h),b=d(" | "),g=d(N),B=d('["'),H=d(F),X=d('"]; class '),U=d(z),J=d(" DefensiveTechniqueNode; class "),M=d(V),Z=d(" ArtifactNode; click "),W=d(O),Q=d(' href "/technique/d3f:'),S=d(C),Y=d('"; click '),K=d(R),m=d(' href "/dao/artifact/d3f:'),y=d(D),fe=d('";')},l(_){f=v(_,t),e=v(_,'["'),i=v(_,l),s=v(_,'"] '),n=v(_,o),c=v(_,`
            | `),k=v(_,h),b=v(_," | "),g=v(_,N),B=v(_,'["'),H=v(_,F),X=v(_,'"]; class '),U=v(_,z),J=v(_," DefensiveTechniqueNode; class "),M=v(_,V),Z=v(_," ArtifactNode; click "),W=v(_,O),Q=v(_,' href "/technique/d3f:'),S=v(_,C),Y=v(_,'"; click '),K=v(_,R),m=v(_,' href "/dao/artifact/d3f:'),y=v(_,D),fe=v(_,'";')},m(_,p){u(_,f,p),u(_,e,p),u(_,i,p),u(_,s,p),u(_,n,p),u(_,c,p),u(_,k,p),u(_,b,p),u(_,g,p),u(_,B,p),u(_,H,p),u(_,X,p),u(_,U,p),u(_,J,p),u(_,M,p),u(_,Z,p),u(_,W,p),u(_,Q,p),u(_,S,p),u(_,Y,p),u(_,K,p),u(_,m,p),u(_,y,p),u(_,fe,p)},p(_,p){p&1&&t!==(t=j(_[9].def_tech.value)+"")&&I(f,t),p&1&&l!==(l=_[9].def_tech_label.value+"")&&I(i,l),p&1&&h!==(h=_[9].def_artifact_rel_label.value.replace(/ /g,"")+"")&&I(k,h),p&1&&N!==(N=j(_[9].def_artifact.value)+"")&&I(g,N),p&1&&F!==(F=_[9].def_artifact_label.value+"")&&I(H,F),p&1&&z!==(z=j(_[9].def_tech.value)+"")&&I(U,z),p&1&&V!==(V=j(_[9].def_artifact.value)+"")&&I(M,V),p&1&&O!==(O=j(_[9].def_tech.value)+"")&&I(W,O),p&1&&C!==(C=j(_[9].def_tech.value)+"")&&I(S,C),p&1&&R!==(R=j(_[9].def_artifact.value)+"")&&I(K,R),p&1&&D!==(D=j(_[9].def_artifact.value)+"")&&I(y,D)},d(_){_&&a(f),_&&a(e),_&&a(i),_&&a(s),_&&a(n),_&&a(c),_&&a(k),_&&a(b),_&&a(g),_&&a(B),_&&a(H),_&&a(X),_&&a(U),_&&a(J),_&&a(M),_&&a(Z),_&&a(W),_&&a(Q),_&&a(S),_&&a(Y),_&&a(K),_&&a(m),_&&a(y),_&&a(fe)}}}function tl(r){let t=r[3].edge_is_unique(r[9].def_tech_label.value,r[9].def_artifact_rel_label.value,r[9].def_artifact_label.value),f,e=t&&ll(r);return{c(){e&&e.c(),f=L()},l(l){e&&e.l(l),f=L()},m(l,i){e&&e.m(l,i),u(l,f,i)},p(l,i){i&1&&(t=l[3].edge_is_unique(l[9].def_tech_label.value,l[9].def_artifact_rel_label.value,l[9].def_artifact_label.value)),t?e?e.p(l,i):(e=ll(l),e.c(),e.m(f.parentNode,f)):e&&(e.d(1),e=null)},d(l){e&&e.d(l),l&&a(f)}}}function Ol(r){let t;function f(i,s){return i[0].results.bindings.length>0?Sl:Pl}let e=f(r),l=e(r);return{c(){t=T("div"),l.c()},l(i){t=$(i,"DIV",{});var s=w(t);l.l(s),s.forEach(a)},m(i,s){u(i,t,s),l.m(t,null)},p(i,[s]){e===(e=f(i))&&l?l.p(i,s):(l.d(1),l=e(i),l&&(l.c(),l.m(t,null)))},i:re,o:re,d(i){i&&a(t),l.d()}}}function Cl(r,t,f){let{da_to_def:e}=t,l=new He,i=Pe,s;function o(b,N){s.innerHTML=b}let n,c;Le(async()=>{if(e.results.bindings.length>0){Te.initialize(i);let b=n.children[0].textContent;s=c,Te.mermaidAPI.render("m-graph_cm",b,o)}});function h(b){Ie[b?"unshift":"push"](()=>{n=b,f(1,n)})}function k(b){Ie[b?"unshift":"push"](()=>{c=b,f(2,c)})}return r.$$set=b=>{"da_to_def"in b&&f(0,e=b.da_to_def)},[e,n,c,l,h,k]}class Gl extends qe{constructor(t){super(),Re(this,t,Cl,Ol,ve,{da_to_def:0})}}function fl(r,t,f){const e=r.slice();return e[9]=t[f][0],e[10]=t[f][1],e}function il(r,t,f){const e=r.slice();return e[13]=t[f],e}function _l(r,t,f){const e=r.slice();return e[9]=t[f][0],e[10]=t[f][1],e}function sl(r,t,f){const e=r.slice();return e[13]=t[f],e}function rl(r){let t,f=[].concat(r[4][r[10]]),e=[];for(let l=0;l<f.length;l+=1)e[l]=al(sl(r,f,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=L()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=L()},m(l,i){for(let s=0;s<e.length;s+=1)e[s].m(l,i);u(l,t,i)},p(l,i){if(i&80){f=[].concat(l[4][l[10]]);let s;for(s=0;s<f.length;s+=1){const o=sl(l,f,s);e[s]?e[s].p(o,i):(e[s]=al(o),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=f.length}},d(l){ce(e,l),l&&a(t)}}}function jl(r){let t,f=r[9]+"",e,l,i=r[13]["@id"]+"",s;return{c(){t=T("dt"),e=d(f),l=T("dd"),s=d(i),this.h()},l(o){t=$(o,"DT",{class:!0});var n=w(t);e=v(n,f),n.forEach(a),l=$(o,"DD",{class:!0});var c=w(l);s=v(c,i),c.forEach(a),this.h()},h(){q(t,"class","svelte-3hh43c"),q(l,"class","svelte-3hh43c")},m(o,n){u(o,t,n),A(t,e),u(o,l,n),A(l,s)},p(o,n){n&16&&i!==(i=o[13]["@id"]+"")&&I(s,i)},d(o){o&&a(t),o&&a(l)}}}function Bl(r){let t,f=r[9]+"",e,l,i=r[13]+"",s;return{c(){t=T("dt"),e=d(f),l=T("dd"),s=d(i),this.h()},l(o){t=$(o,"DT",{class:!0});var n=w(t);e=v(n,f),n.forEach(a),l=$(o,"DD",{class:!0});var c=w(l);s=v(c,i),c.forEach(a),this.h()},h(){q(t,"class","svelte-3hh43c"),q(l,"class","svelte-3hh43c")},m(o,n){u(o,t,n),A(t,e),u(o,l,n),A(l,s)},p(o,n){n&16&&i!==(i=o[13]+"")&&I(s,i)},d(o){o&&a(t),o&&a(l)}}}function al(r){let t;function f(i,s){return typeof i[13]=="string"?Bl:jl}let e=f(r),l=e(r);return{c(){l.c(),t=L()},l(i){l.l(i),t=L()},m(i,s){l.m(i,s),u(i,t,s)},p(i,s){e===(e=f(i))&&l?l.p(i,s):(l.d(1),l=e(i),l&&(l.c(),l.m(t.parentNode,t)))},d(i){l.d(i),i&&a(t)}}}function ol(r){let t,f=r[4][r[10]]&&rl(r);return{c(){f&&f.c(),t=L()},l(e){f&&f.l(e),t=L()},m(e,l){f&&f.m(e,l),u(e,t,l)},p(e,l){e[4][e[10]]?f?f.p(e,l):(f=rl(e),f.c(),f.m(t.parentNode,t)):f&&(f.d(1),f=null)},d(e){f&&f.d(e),e&&a(t)}}}function nl(r){let t,f=[].concat(r[4][r[10]]),e=[];for(let l=0;l<f.length;l+=1)e[l]=ul(il(r,f,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=L()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=L()},m(l,i){for(let s=0;s<e.length;s+=1)e[s].m(l,i);u(l,t,i)},p(l,i){if(i&144){f=[].concat(l[4][l[10]]);let s;for(s=0;s<f.length;s+=1){const o=il(l,f,s);e[s]?e[s].p(o,i):(e[s]=ul(o),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=f.length}},d(l){ce(e,l),l&&a(t)}}}function Fl(r){let t,f=r[9]+"",e,l,i;function s(c,h){return h&16&&(l=null),l==null&&(l=!!c[13]["@id"].startsWith("d3f:")),l?Ul:zl}let o=s(r,-1),n=o(r);return{c(){t=T("dt"),e=d(f),n.c(),i=L(),this.h()},l(c){t=$(c,"DT",{class:!0});var h=w(t);e=v(h,f),h.forEach(a),n.l(c),i=L(),this.h()},h(){q(t,"class","svelte-3hh43c")},m(c,h){u(c,t,h),A(t,e),n.m(c,h),u(c,i,h)},p(c,h){o===(o=s(c,h))&&n?n.p(c,h):(n.d(1),n=o(c),n&&(n.c(),n.m(i.parentNode,i)))},d(c){c&&a(t),n.d(c),c&&a(i)}}}function Ml(r){let t,f=r[9]+"",e,l,i,s=r[13]+"",o,n;return{c(){t=T("dt"),e=d(f),l=T("dd"),i=T("a"),o=d(s),this.h()},l(c){t=$(c,"DT",{class:!0});var h=w(t);e=v(h,f),h.forEach(a),l=$(c,"DD",{class:!0});var k=w(l);i=$(k,"A",{href:!0});var b=w(i);o=v(b,s),b.forEach(a),k.forEach(a),this.h()},h(){q(t,"class","svelte-3hh43c"),q(i,"href",n=r[13]["@id"]),q(l,"class","svelte-3hh43c")},m(c,h){u(c,t,h),A(t,e),u(c,l,h),A(l,i),A(i,o)},p(c,h){h&16&&s!==(s=c[13]+"")&&I(o,s),h&16&&n!==(n=c[13]["@id"])&&q(i,"href",n)},d(c){c&&a(t),c&&a(l)}}}function zl(r){let t,f,e=r[13]["@id"]+"",l,i;return{c(){t=T("dd"),f=T("a"),l=d(e),this.h()},l(s){t=$(s,"DD",{class:!0});var o=w(t);f=$(o,"A",{href:!0});var n=w(f);l=v(n,e),n.forEach(a),o.forEach(a),this.h()},h(){q(f,"href",i=r[13]["@id"]),q(t,"class","svelte-3hh43c")},m(s,o){u(s,t,o),A(t,f),A(f,l)},p(s,o){o&16&&e!==(e=s[13]["@id"]+"")&&I(l,e),o&16&&i!==(i=s[13]["@id"])&&q(f,"href",i)},d(s){s&&a(t)}}}function Ul(r){let t,f,e=r[13]["@id"]+"",l,i;return{c(){t=T("dd"),f=T("a"),l=d(e),this.h()},l(s){t=$(s,"DD",{class:!0});var o=w(t);f=$(o,"A",{href:!0});var n=w(f);l=v(n,e),n.forEach(a),o.forEach(a),this.h()},h(){q(f,"href",i="/dao/artifact/"+r[13]["@id"]),q(t,"class","svelte-3hh43c")},m(s,o){u(s,t,o),A(t,f),A(f,l)},p(s,o){o&16&&e!==(e=s[13]["@id"]+"")&&I(l,e),o&16&&i!==(i="/dao/artifact/"+s[13]["@id"])&&q(f,"href",i)},d(s){s&&a(t)}}}function ul(r){let t;function f(i,s){return typeof i[13]=="string"?Ml:Fl}let e=f(r),l=e(r);return{c(){l.c(),t=L()},l(i){l.l(i),t=L()},m(i,s){l.m(i,s),u(i,t,s)},p(i,s){e===(e=f(i))&&l?l.p(i,s):(l.d(1),l=e(i),l&&(l.c(),l.m(t.parentNode,t)))},d(i){l.d(i),i&&a(t)}}}function cl(r){let t,f=r[4][r[10]]&&nl(r);return{c(){f&&f.c(),t=L()},l(e){f&&f.l(e),t=L()},m(e,l){f&&f.m(e,l),u(e,t,l)},p(e,l){e[4][e[10]]?f?f.p(e,l):(f=nl(e),f.c(),f.m(t.parentNode,t)):f&&(f.d(1),f=null)},d(e){f&&f.d(e),e&&a(t)}}}function hl(r){let t,f,e,l,i,s;return i=new Hl({props:{neighbors:r[3],root_node:r[4]["@id"]}}),{c(){t=T("span"),f=T("h2"),e=d("Neighbors"),l=ee(),me(i.$$.fragment),this.h()},l(o){t=$(o,"SPAN",{class:!0});var n=w(t);f=$(n,"H2",{class:!0});var c=w(f);e=v(c,"Neighbors"),c.forEach(a),l=le(n),be(i.$$.fragment,n),n.forEach(a),this.h()},h(){q(f,"class","svelte-3hh43c"),q(t,"class","flex-column flex-column-max-content card")},m(o,n){u(o,t,n),A(t,f),A(f,e),A(t,l),ke(i,t,null),s=!0},p(o,n){const c={};n&8&&(c.neighbors=o[3]),n&16&&(c.root_node=o[4]["@id"]),i.$set(c)},i(o){s||(x(i.$$.fragment,o),s=!0)},o(o){te(i.$$.fragment,o),s=!1},d(o){o&&a(t),Ee(i)}}}function dl(r){let t,f,e=r[3]&&hl(r);return{c(){e&&e.c(),t=L()},l(l){e&&e.l(l),t=L()},m(l,i){e&&e.m(l,i),u(l,t,i),f=!0},p(l,i){l[3]?e?(e.p(l,i),i&8&&x(e,1)):(e=hl(l),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(ge(),te(e,1,1,()=>{e=null}),Ae())},i(l){f||(x(e),f=!0)},o(l){te(e),f=!1},d(l){e&&e.d(l),l&&a(t)}}}function Wl(r){let t,f;return{c(){t=T("small"),f=d(`This page is experimental and may change significantly in future
        releases.`)},l(e){t=$(e,"SMALL",{});var l=w(t);f=v(l,`This page is experimental and may change significantly in future
        releases.`),l.forEach(a)},m(e,l){u(e,t,l),A(t,f)},p:re,d(e){e&&a(t)}}}function vl(r){let t,f,e,l,i,s,o,n,c,h;return c=new El({props:{highlight_nodes:[r[4]["@id"]],root_node:"d3f:DigitalArtifact",root_node_key:"@id",graph:r[5],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;"}}),{c(){t=T("span"),f=T("h2"),e=d("Hierarchy"),l=ee(),i=T("p"),s=T("i"),o=d("(filtered)"),n=ee(),me(c.$$.fragment),this.h()},l(k){t=$(k,"SPAN",{class:!0});var b=w(t);f=$(b,"H2",{class:!0});var N=w(f);e=v(N,"Hierarchy"),N.forEach(a),l=le(b),i=$(b,"P",{class:!0,title:!0});var g=w(i);s=$(g,"I",{});var B=w(s);o=v(B,"(filtered)"),B.forEach(a),g.forEach(a),n=le(b),be(c.$$.fragment,b),b.forEach(a),this.h()},h(){q(f,"class","svelte-3hh43c"),q(i,"class","text-center"),q(i,"title","Filtered from the whole ontology to only things related to offense or defense"),q(t,"class","flex-column flex-column-max-content card")},m(k,b){u(k,t,b),A(t,f),A(f,e),A(t,l),A(t,i),A(i,s),A(s,o),A(t,n),ke(c,t,null),h=!0},p(k,b){const N={};b&16&&(N.highlight_nodes=[k[4]["@id"]]),b&32&&(N.graph=k[5]),c.$set(N)},i(k){h||(x(c.$$.fragment,k),h=!0)},o(k){te(c.$$.fragment,k),h=!1},d(k){k&&a(t),Ee(c)}}}function pl(r){let t,f,e=r[5].graph.length>0&&vl(r);return{c(){e&&e.c(),t=L()},l(l){e&&e.l(l),t=L()},m(l,i){e&&e.m(l,i),u(l,t,i),f=!0},p(l,i){l[5].graph.length>0?e?(e.p(l,i),i&32&&x(e,1)):(e=vl(l),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(ge(),te(e,1,1,()=>{e=null}),Ae())},i(l){f||(x(e),f=!0)},o(l){te(e),f=!1},d(l){e&&e.d(l),l&&a(t)}}}function ml(r){let t,f,e,l,i,s;return i=new Gl({props:{da_to_def:r[1]}}),{c(){t=T("span"),f=T("h2"),e=d("Related Countermeasure Techniques"),l=ee(),me(i.$$.fragment),this.h()},l(o){t=$(o,"SPAN",{class:!0});var n=w(t);f=$(n,"H2",{class:!0});var c=w(f);e=v(c,"Related Countermeasure Techniques"),c.forEach(a),l=le(n),be(i.$$.fragment,n),n.forEach(a),this.h()},h(){q(f,"class","svelte-3hh43c"),q(t,"class","flex-column flex-column-max-content flex-column card")},m(o,n){u(o,t,n),A(t,f),A(f,e),A(t,l),ke(i,t,null),s=!0},p(o,n){const c={};n&2&&(c.da_to_def=o[1]),i.$set(c)},i(o){s||(x(i.$$.fragment,o),s=!0)},o(o){te(i.$$.fragment,o),s=!1},d(o){o&&a(t),Ee(i)}}}function bl(r){let t,f,e,l,i,s;return i=new wl({props:{da_to_off:r[0]}}),{c(){t=T("span"),f=T("h2"),e=d("Related Offensive Techniques"),l=ee(),me(i.$$.fragment),this.h()},l(o){t=$(o,"SPAN",{class:!0});var n=w(t);f=$(n,"H2",{class:!0});var c=w(f);e=v(c,"Related Offensive Techniques"),c.forEach(a),l=le(n),be(i.$$.fragment,n),n.forEach(a),this.h()},h(){q(f,"class","svelte-3hh43c"),q(t,"class","flex-column flex-column-max-content flex-column card")},m(o,n){u(o,t,n),A(t,f),A(f,e),A(t,l),ke(i,t,null),s=!0},p(o,n){const c={};n&1&&(c.da_to_off=o[0]),i.$set(c)},i(o){s||(x(i.$$.fragment,o),s=!0)},o(o){te(i.$$.fragment,o),s=!1},d(o){o&&a(t),Ee(i)}}}function Xl(r){let t,f,e,l=r[4]["rdfs:label"]+"",i,s,o,n,c,h,k,b,N,g,B,F,H,X,z,U=r[3],J,V,M,Z,O,W,Q,C,S,Y,R,K=r[5],m,D=r[1],y,fe=r[0],_;t=new Dl({props:{title:r[4]["rdfs:label"]+" - Artifact Details",og_title:r[4]["rdfs:label"]+" - Artifact Details",og_description:r[4]["rdfs:comment"],og_type:"article"}}),h=new Al({props:{da_graph:r[2]}});let p=r[6],ie=[];for(let E=0;E<p.length;E+=1)ie[E]=ol(_l(r,p,E));let Ne=r[7],_e=[];for(let E=0;E<Ne.length;E+=1)_e[E]=cl(fl(r,Ne,E));let ae=dl(r);S=new Nl({props:{$$slots:{default:[Wl]},$$scope:{ctx:r}}});let oe=pl(r),ne=ml(r),ue=bl(r);return{c(){me(t.$$.fragment),f=ee(),e=T("h1"),i=d(l),s=ee(),o=T("section"),n=T("div"),c=T("span"),me(h.$$.fragment),k=ee(),b=T("div"),N=T("span"),g=T("h2"),B=d("Object Properties"),F=ee(),H=T("dl");for(let E=0;E<ie.length;E+=1)ie[E].c();X=L();for(let E=0;E<_e.length;E+=1)_e[E].c();z=ee(),ae.c(),J=ee(),V=T("div"),M=T("br"),Z=ee(),O=T("h2"),W=d("Inferred Relationships"),Q=ee(),C=T("div"),me(S.$$.fragment),Y=ee(),R=T("div"),oe.c(),m=ee(),ne.c(),y=ee(),ue.c(),this.h()},l(E){be(t.$$.fragment,E),f=le(E),e=$(E,"H1",{class:!0});var P=w(e);i=v(P,l),P.forEach(a),s=le(E),o=$(E,"SECTION",{});var se=w(o);n=$(se,"DIV",{class:!0});var $e=w(n);c=$($e,"SPAN",{id:!0,class:!0});var we=w(c);be(h.$$.fragment,we),we.forEach(a),$e.forEach(a),se.forEach(a),k=le(E),b=$(E,"DIV",{class:!0});var G=w(b);N=$(G,"SPAN",{class:!0});var he=w(N);g=$(he,"H2",{class:!0});var Se=w(g);B=v(Se,"Object Properties"),Se.forEach(a),F=le(he),H=$(he,"DL",{class:!0});var Ve=w(H);for(let pe=0;pe<ie.length;pe+=1)ie[pe].l(Ve);X=L();for(let pe=0;pe<_e.length;pe+=1)_e[pe].l(Ve);Ve.forEach(a),he.forEach(a),z=le(G),ae.l(G),G.forEach(a),J=le(E),V=$(E,"DIV",{});var de=w(V);M=$(de,"BR",{}),Z=le(de),O=$(de,"H2",{class:!0});var Oe=w(O);W=v(Oe,"Inferred Relationships"),Oe.forEach(a),Q=le(de),C=$(de,"DIV",{class:!0});var Ce=w(C);be(S.$$.fragment,Ce),Ce.forEach(a),Y=le(de),R=$(de,"DIV",{class:!0});var De=w(R);oe.l(De),m=le(De),ne.l(De),y=le(De),ue.l(De),De.forEach(a),de.forEach(a),this.h()},h(){q(e,"class","text-center"),q(c,"id","lookup_container"),q(c,"class","flex-column flex-column-max-content text-right"),q(n,"class","flex flex-start content svelte-3hh43c"),q(g,"class","svelte-3hh43c"),q(H,"class","svelte-3hh43c"),q(N,"class","flex-column flex-column-max-content card"),q(b,"class","flex flex-start content svelte-3hh43c"),q(O,"class","text-center svelte-3hh43c"),q(C,"class","content"),q(R,"class","flex flex-start content svelte-3hh43c")},m(E,P){ke(t,E,P),u(E,f,P),u(E,e,P),A(e,i),u(E,s,P),u(E,o,P),A(o,n),A(n,c),ke(h,c,null),u(E,k,P),u(E,b,P),A(b,N),A(N,g),A(g,B),A(N,F),A(N,H);for(let se=0;se<ie.length;se+=1)ie[se].m(H,null);A(H,X);for(let se=0;se<_e.length;se+=1)_e[se].m(H,null);A(b,z),ae.m(b,null),u(E,J,P),u(E,V,P),A(V,M),A(V,Z),A(V,O),A(O,W),A(V,Q),A(V,C),ke(S,C,null),A(V,Y),A(V,R),oe.m(R,null),A(R,m),ne.m(R,null),A(R,y),ue.m(R,null),_=!0},p(E,[P]){const se={};P&16&&(se.title=E[4]["rdfs:label"]+" - Artifact Details"),P&16&&(se.og_title=E[4]["rdfs:label"]+" - Artifact Details"),P&16&&(se.og_description=E[4]["rdfs:comment"]),t.$set(se),(!_||P&16)&&l!==(l=E[4]["rdfs:label"]+"")&&I(i,l);const $e={};if(P&4&&($e.da_graph=E[2]),h.$set($e),P&80){p=E[6];let G;for(G=0;G<p.length;G+=1){const he=_l(E,p,G);ie[G]?ie[G].p(he,P):(ie[G]=ol(he),ie[G].c(),ie[G].m(H,X))}for(;G<ie.length;G+=1)ie[G].d(1);ie.length=p.length}if(P&144){Ne=E[7];let G;for(G=0;G<Ne.length;G+=1){const he=fl(E,Ne,G);_e[G]?_e[G].p(he,P):(_e[G]=cl(he),_e[G].c(),_e[G].m(H,null))}for(;G<_e.length;G+=1)_e[G].d(1);_e.length=Ne.length}P&8&&ve(U,U=E[3])?(ge(),te(ae,1,1,re),Ae(),ae=dl(E),ae.c(),x(ae,1),ae.m(b,null)):ae.p(E,P);const we={};P&1048576&&(we.$$scope={dirty:P,ctx:E}),S.$set(we),P&32&&ve(K,K=E[5])?(ge(),te(oe,1,1,re),Ae(),oe=pl(E),oe.c(),x(oe,1),oe.m(R,m)):oe.p(E,P),P&2&&ve(D,D=E[1])?(ge(),te(ne,1,1,re),Ae(),ne=ml(E),ne.c(),x(ne,1),ne.m(R,y)):ne.p(E,P),P&1&&ve(fe,fe=E[0])?(ge(),te(ue,1,1,re),Ae(),ue=bl(E),ue.c(),x(ue,1),ue.m(R,null)):ue.p(E,P)},i(E){_||(x(t.$$.fragment,E),x(h.$$.fragment,E),x(ae),x(S.$$.fragment,E),x(oe),x(ne),x(ue),_=!0)},o(E){te(t.$$.fragment,E),te(h.$$.fragment,E),te(ae),te(S.$$.fragment,E),te(oe),te(ne),te(ue),_=!1},d(E){Ee(t,E),E&&a(f),E&&a(e),E&&a(s),E&&a(o),Ee(h),E&&a(k),E&&a(b),ce(ie,E),ce(_e,E),ae.d(E),E&&a(J),E&&a(V),Ee(S),oe.d(E),ne.d(E),ue.d(E)}}}async function rt({params:r,fetch:t}){const f=await t(`/api/dao/artifact/${r.artifact}.json`),e=await f.json(),l=await t("/api/dao/artifacts.json"),i=await l.json();if(f.status===200&&l.status){let s=e.description["@graph"].find(o=>o["@id"]==r.artifact);return{props:{da_to_off:e.da_to_off,da_to_def:e.da_to_def,da_graph:e.da_graph,description:s,lookup_da_graph:i,neighbors:e.neighbors}}}else return{status:f.status,error:new Error(e.message)}}function Jl(r,t,f){let e,{da_graph:l}=t,{da_to_off:i}=t,{da_to_def:s}=t,{lookup_da_graph:o}=t,{neighbors:n}=t,{description:c}=t,h=[["name","rdfs:label"],["abbreviated IRI","@id"],["definition","rdfs:comment"],["definition","d3f:definition"],["synonyms","skos:altLabel"]],k=[["defined by","rdfs:isDefinedBy"],["see also","rdfs:seeAlso"]];return r.$$set=b=>{"da_graph"in b&&f(8,l=b.da_graph),"da_to_off"in b&&f(0,i=b.da_to_off),"da_to_def"in b&&f(1,s=b.da_to_def),"lookup_da_graph"in b&&f(2,o=b.lookup_da_graph),"neighbors"in b&&f(3,n=b.neighbors),"description"in b&&f(4,c=b.description)},r.$$.update=()=>{r.$$.dirty&256&&f(5,e=new kl(l))},[i,s,o,n,c,e,h,k,l]}class at extends qe{constructor(t){super(),Re(this,t,Jl,Xl,ve,{da_graph:8,da_to_off:0,da_to_def:1,lookup_da_graph:2,neighbors:3,description:4})}}export{at as default,rt as load};

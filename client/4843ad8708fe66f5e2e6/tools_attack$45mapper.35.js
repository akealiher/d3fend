(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{10:function(t,e,c){"use strict";c.d(e,"i",(function(){return j})),c.d(e,"a",(function(){return O})),c.d(e,"b",(function(){return l})),c.d(e,"c",(function(){return r})),c.d(e,"d",(function(){return o})),c.d(e,"e",(function(){return h})),c.d(e,"f",(function(){return i})),c.d(e,"h",(function(){return a})),c.d(e,"g",(function(){return s}));var b=c(12),n=c.n(b);function j(t){return"string"==typeof t?n()(t):JSON.stringify(t)}class O{constructor(t,e){if(this.context=t["@context"],this.graph=t["@graph"],this.options={index:!1,index_key:"@id"},e&&(this.options={...this.options,...e}),this.options){this.index={};let t=0;this.graph.forEach((e=>{this.index[e[this.options.index_key]]=t,t++}))}}get length(){return this.graph.length}i(t){return this.graph[this.index[t]]}search(t,e){return this.graph.filter((c=>c[t]==e))}get(t,e){return this.graph.filter((c=>c[t]==e))[0]}get_and_cache(t,e){let c=this.graph.filter((c=>c[t]==e));return this.current_node=c[0],this.current_node}get_cached(){return this.current_node}get_by_type(t){return this.graph.filter((e=>e["@type"].includes(t)))}}class l{constructor(){this.unique_edges=new Set}edge_is_unique(t,e,c){let b=`${t}${e}${c}`;return!this.unique_edges.has(b)&&(this.unique_edges.add(b),!0)}}function r(t){let e="https://attack.mitre.org/techniques";if(t.includes(".")){return`${e}/${t.split(".")[0]}/${t.split(".")[1]}/`}return`${e}/${t}/`}function o(t){return`/offensive-technique/attack/${t}/`}function h(t){return`https://attack.mitre.org/mitigations/${t}/`}function i(t){return"d3f:"+t.split("#")[1]}function a(t){if(t.includes("#")){let c=t.split("#").length;var e=t.split("#")[c-1]}else if(t.includes(":")){let c=t.split(":").length;e=t.split(":")[c-1]}return e}function s(t){let e=t.match(/(T|t)([0-9]{4})((\.|\/|\\)([0-9]{3}))?/g);return e&&(e=e.map((t=>t.replace(/(\\|\/)/,"."))),e=e.map((t=>t.toUpperCase()))),e}},44:function(t,e,c){"use strict";c.r(e);var b=c(0),n=c(10),j=c(9);const{document:O}=b.E;function l(t,e,c){const b=t.slice();return b[13]=e[c],b}function r(t,e,c){const b=t.slice();return b[17]=e[c],b}function o(t,e,c){const b=t.slice();return b[21]=e[c],b}function h(t){let e,c,n=t[20].message+"";return{c(){e=Object(b.z)("p"),c=Object(b.eb)(n),this.h()},l(t){e=Object(b.n)(t,"P",{style:!0});var j=Object(b.l)(e);c=Object(b.p)(j,n),j.forEach(b.y),this.h()},h(){Object(b.ab)(e,"color","red")},m(t,n){Object(b.J)(t,e,n),Object(b.f)(e,c)},p(t,e){16&e&&n!==(n=t[20].message+"")&&Object(b.X)(c,n)},d(t){t&&Object(b.y)(e)}}}function i(t){let e;function c(t,e){return t[12].length>0?s:!t[3]&&t[12].length<1?a:void 0}let n=c(t),j=n&&n(t);return{c(){j&&j.c(),e=Object(b.A)()},l(t){j&&j.l(t),e=Object(b.A)()},m(t,c){j&&j.m(t,c),Object(b.J)(t,e,c)},p(t,b){n===(n=c(t))&&j?j.p(t,b):(j&&j.d(1),j=n&&n(t),j&&(j.c(),j.m(e.parentNode,e)))},d(t){j&&j.d(t),t&&Object(b.y)(e)}}}function a(t){let e,c;return{c(){e=Object(b.z)("div"),c=Object(b.eb)("No ATT&CK IDs found in text."),this.h()},l(t){e=Object(b.n)(t,"DIV",{class:!0});var n=Object(b.l)(e);c=Object(b.p)(n,"No ATT&CK IDs found in text."),n.forEach(b.y),this.h()},h(){Object(b.h)(e,"class","card")},m(t,n){Object(b.J)(t,e,n),Object(b.f)(e,c)},p:b.O,d(t){t&&Object(b.y)(e)}}}function s(t){let e,c,n,j,O,r,o,h,i,a,s,u,g,m,y,v,E,T,z,D,x,J,k,I,w,N,$,C=t[0]&&f(t);function R(t,e){return t[2]?p:d}let V=R(t),q=V(t),K=t[12],M=[];for(let e=0;e<K.length;e+=1)M[e]=_(l(t,K,e));return{c(){e=Object(b.z)("div"),C&&C.c(),c=Object(b.bb)(),n=Object(b.z)("div"),j=Object(b.z)("div"),O=Object(b.z)("b"),r=Object(b.z)("i"),o=Object(b.eb)("Mapping Results:"),h=Object(b.bb)(),i=Object(b.z)("div"),a=Object(b.z)("div"),q.c(),s=Object(b.bb)(),u=Object(b.z)("button"),g=Object(b.eb)("copy"),m=Object(b.bb)(),y=Object(b.z)("table"),v=Object(b.z)("thead"),E=Object(b.z)("th"),T=Object(b.eb)("ATT&CK ID"),z=Object(b.bb)(),D=Object(b.z)("th"),x=Object(b.eb)("ATT&CK Name"),J=Object(b.bb)(),k=Object(b.z)("th"),I=Object(b.eb)("Related D3FEND Techniques"),w=Object(b.bb)();for(let t=0;t<M.length;t+=1)M[t].c();this.h()},l(t){e=Object(b.n)(t,"DIV",{class:!0});var l=Object(b.l)(e);C&&C.l(l),l.forEach(b.y),c=Object(b.o)(t),n=Object(b.n)(t,"DIV",{class:!0});var f=Object(b.l)(n);j=Object(b.n)(f,"DIV",{});var d=Object(b.l)(j);O=Object(b.n)(d,"B",{});var p=Object(b.l)(O);r=Object(b.n)(p,"I",{});var _=Object(b.l)(r);o=Object(b.p)(_,"Mapping Results:"),_.forEach(b.y),p.forEach(b.y),d.forEach(b.y),h=Object(b.o)(f),i=Object(b.n)(f,"DIV",{class:!0});var A=Object(b.l)(i);a=Object(b.n)(A,"DIV",{class:!0});var N=Object(b.l)(a);q.l(N),s=Object(b.o)(N),u=Object(b.n)(N,"BUTTON",{});var $=Object(b.l)(u);g=Object(b.p)($,"copy"),$.forEach(b.y),N.forEach(b.y),m=Object(b.o)(A),y=Object(b.n)(A,"TABLE",{id:!0,class:!0});var R=Object(b.l)(y);v=Object(b.n)(R,"THEAD",{});var V=Object(b.l)(v);E=Object(b.n)(V,"TH",{class:!0});var K=Object(b.l)(E);T=Object(b.p)(K,"ATT&CK ID"),K.forEach(b.y),z=Object(b.o)(V),D=Object(b.n)(V,"TH",{});var B=Object(b.l)(D);x=Object(b.p)(B,"ATT&CK Name"),B.forEach(b.y),J=Object(b.o)(V),k=Object(b.n)(V,"TH",{});var X=Object(b.l)(k);I=Object(b.p)(X,"Related D3FEND Techniques"),X.forEach(b.y),V.forEach(b.y),w=Object(b.o)(R);for(let t=0;t<M.length;t+=1)M[t].l(R);R.forEach(b.y),A.forEach(b.y),f.forEach(b.y),this.h()},h(){Object(b.h)(e,"class","card"),Object(b.h)(a,"class","text-right"),Object(b.h)(E,"class","stretch"),Object(b.h)(y,"id","mappings"),Object(b.h)(y,"class","table-auto"),Object(b.h)(i,"class","results-wrap center svelte-1mthjvt"),Object(b.h)(n,"class","card")},m(t,l){Object(b.J)(t,e,l),C&&C.m(e,null),Object(b.J)(t,c,l),Object(b.J)(t,n,l),Object(b.f)(n,j),Object(b.f)(j,O),Object(b.f)(O,r),Object(b.f)(r,o),Object(b.f)(n,h),Object(b.f)(n,i),Object(b.f)(i,a),q.m(a,null),Object(b.f)(a,s),Object(b.f)(a,u),Object(b.f)(u,g),Object(b.f)(i,m),Object(b.f)(i,y),Object(b.f)(y,v),Object(b.f)(v,E),Object(b.f)(E,T),Object(b.f)(v,z),Object(b.f)(v,D),Object(b.f)(D,x),Object(b.f)(v,J),Object(b.f)(v,k),Object(b.f)(k,I),Object(b.f)(y,w);for(let t=0;t<M.length;t+=1)M[t].m(y,null);N||($=Object(b.L)(u,"click",A),N=!0)},p(t,c){if(t[0]?C?C.p(t,c):(C=f(t),C.c(),C.m(e,null)):C&&(C.d(1),C=null),V===(V=R(t))&&q?q.p(t,c):(q.d(1),q=V(t),q&&(q.c(),q.m(a,s))),16&c){let e;for(K=t[12],e=0;e<K.length;e+=1){const b=l(t,K,e);M[e]?M[e].p(b,c):(M[e]=_(b),M[e].c(),M[e].m(y,null))}for(;e<M.length;e+=1)M[e].d(1);M.length=K.length}},d(t){t&&Object(b.y)(e),C&&C.d(),t&&Object(b.y)(c),t&&Object(b.y)(n),q.d(),Object(b.x)(M,t),N=!1,$()}}}function f(t){let e,c,n,j,O,l,r,h,i=t[0].length+"",a=t[0],s=[];for(let e=0;e<a.length;e+=1)s[e]=u(o(t,a,e));return{c(){e=Object(b.z)("div"),c=Object(b.z)("b"),n=Object(b.z)("i"),j=Object(b.eb)("Extracted "),O=Object(b.eb)(i),l=Object(b.eb)(" unique IDs:"),r=Object(b.bb)(),h=Object(b.z)("dl");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=Object(b.n)(t,"DIV",{class:!0});var o=Object(b.l)(e);c=Object(b.n)(o,"B",{});var a=Object(b.l)(c);n=Object(b.n)(a,"I",{});var f=Object(b.l)(n);j=Object(b.p)(f,"Extracted "),O=Object(b.p)(f,i),l=Object(b.p)(f," unique IDs:"),f.forEach(b.y),a.forEach(b.y),r=Object(b.o)(o),h=Object(b.n)(o,"DL",{class:!0});var u=Object(b.l)(h);for(let t=0;t<s.length;t+=1)s[t].l(u);u.forEach(b.y),o.forEach(b.y),this.h()},h(){Object(b.h)(h,"class","flex flex-wrap svelte-1mthjvt"),Object(b.h)(e,"class","")},m(t,o){Object(b.J)(t,e,o),Object(b.f)(e,c),Object(b.f)(c,n),Object(b.f)(n,j),Object(b.f)(n,O),Object(b.f)(n,l),Object(b.f)(e,r),Object(b.f)(e,h);for(let t=0;t<s.length;t+=1)s[t].m(h,null)},p(t,e){if(1&e&&i!==(i=t[0].length+"")&&Object(b.X)(O,i),1&e){let c;for(a=t[0],c=0;c<a.length;c+=1){const b=o(t,a,c);s[c]?s[c].p(b,e):(s[c]=u(b),s[c].c(),s[c].m(h,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=a.length}},d(t){t&&Object(b.y)(e),Object(b.x)(s,t)}}}function u(t){let e,c,n=t[21]+"";return{c(){e=Object(b.z)("dd"),c=Object(b.eb)(n)},l(t){e=Object(b.n)(t,"DD",{});var j=Object(b.l)(e);c=Object(b.p)(j,n),j.forEach(b.y)},m(t,n){Object(b.J)(t,e,n),Object(b.f)(e,c)},p(t,e){1&e&&n!==(n=t[21]+"")&&Object(b.X)(c,n)},d(t){t&&Object(b.y)(e)}}}function d(t){let e,c,n,j;return{c(){e=Object(b.z)("button"),c=Object(b.eb)("select"),this.h()},l(t){e=Object(b.n)(t,"BUTTON",{class:!0});var n=Object(b.l)(e);c=Object(b.p)(n,"select"),n.forEach(b.y),this.h()},h(){Object(b.h)(e,"class","selector svelte-1mthjvt")},m(O,l){Object(b.J)(O,e,l),Object(b.f)(e,c),n||(j=Object(b.L)(e,"click",t[7]),n=!0)},p:b.O,d(t){t&&Object(b.y)(e),n=!1,j()}}}function p(t){let e,c,n,j;return{c(){e=Object(b.z)("button"),c=Object(b.eb)("deselect"),this.h()},l(t){e=Object(b.n)(t,"BUTTON",{class:!0});var n=Object(b.l)(e);c=Object(b.p)(n,"deselect"),n.forEach(b.y),this.h()},h(){Object(b.h)(e,"class","selector svelte-1mthjvt")},m(O,l){Object(b.J)(O,e,l),Object(b.f)(e,c),n||(j=Object(b.L)(e,"click",t[6]),n=!0)},p:b.O,d(t){t&&Object(b.y)(e),n=!1,j()}}}function g(t){let e,c,n=t[20].message+"";return{c(){e=Object(b.z)("p"),c=Object(b.eb)(n),this.h()},l(t){e=Object(b.n)(t,"P",{style:!0});var j=Object(b.l)(e);c=Object(b.p)(j,n),j.forEach(b.y),this.h()},h(){Object(b.ab)(e,"color","red")},m(t,n){Object(b.J)(t,e,n),Object(b.f)(e,c)},p(t,e){16&e&&n!==(n=t[20].message+"")&&Object(b.X)(c,n)},d(t){t&&Object(b.y)(e)}}}function m(t){let e;function c(t,e){return t[16].description.graph[0]?v:y}let n=c(t),j=n(t);return{c(){j.c(),e=Object(b.A)()},l(t){j.l(t),e=Object(b.A)()},m(t,c){j.m(t,c),Object(b.J)(t,e,c)},p(t,b){n===(n=c(t))&&j?j.p(t,b):(j.d(1),j=n(t),j&&(j.c(),j.m(e.parentNode,e)))},d(t){j.d(t),t&&Object(b.y)(e)}}}function y(t){let e,c,j,O,l,r,o,h,i,a,s,f=t[16]["@id"]+"";return{c(){e=Object(b.z)("td"),c=Object(b.z)("a"),j=Object(b.eb)(f),l=Object(b.bb)(),r=Object(b.z)("td"),o=Object(b.eb)("not found"),h=Object(b.bb)(),i=Object(b.z)("td"),a=Object(b.z)("div"),s=Object(b.eb)("not found"),this.h()},l(t){e=Object(b.n)(t,"TD",{class:!0});var n=Object(b.l)(e);c=Object(b.n)(n,"A",{style:!0,href:!0});var O=Object(b.l)(c);j=Object(b.p)(O,f),O.forEach(b.y),n.forEach(b.y),l=Object(b.o)(t),r=Object(b.n)(t,"TD",{});var u=Object(b.l)(r);o=Object(b.p)(u,"not found"),u.forEach(b.y),h=Object(b.o)(t),i=Object(b.n)(t,"TD",{});var d=Object(b.l)(i);a=Object(b.n)(d,"DIV",{});var p=Object(b.l)(a);s=Object(b.p)(p,"not found"),p.forEach(b.y),d.forEach(b.y),this.h()},h(){Object(b.ab)(c,"color","red"),Object(b.h)(c,"href",O=Object(n.d)(t[16]["@id"])),Object(b.h)(e,"class","text-center")},m(t,n){Object(b.J)(t,e,n),Object(b.f)(e,c),Object(b.f)(c,j),Object(b.J)(t,l,n),Object(b.J)(t,r,n),Object(b.f)(r,o),Object(b.J)(t,h,n),Object(b.J)(t,i,n),Object(b.f)(i,a),Object(b.f)(a,s)},p(t,e){16&e&&f!==(f=t[16]["@id"]+"")&&Object(b.X)(j,f),16&e&&O!==(O=Object(n.d)(t[16]["@id"]))&&Object(b.h)(c,"href",O)},d(t){t&&Object(b.y)(e),t&&Object(b.y)(l),t&&Object(b.y)(r),t&&Object(b.y)(h),t&&Object(b.y)(i)}}}function v(t){let e,c,j,O,l,o,h,i,a,s=t[16].description.graph[0]["d3f:attack-id"]+"",f=t[16].description.graph[0]["rdfs:label"]+"",u=x(t[16].off_to_def.results.bindings),d=[];for(let e=0;e<u.length;e+=1)d[e]=E(r(t,u,e));return{c(){e=Object(b.z)("td"),c=Object(b.z)("a"),j=Object(b.eb)(s),l=Object(b.bb)(),o=Object(b.z)("td"),h=Object(b.eb)(f),i=Object(b.bb)(),a=Object(b.z)("td");for(let t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){e=Object(b.n)(t,"TD",{class:!0});var n=Object(b.l)(e);c=Object(b.n)(n,"A",{href:!0});var O=Object(b.l)(c);j=Object(b.p)(O,s),O.forEach(b.y),n.forEach(b.y),l=Object(b.o)(t),o=Object(b.n)(t,"TD",{});var r=Object(b.l)(o);h=Object(b.p)(r,f),r.forEach(b.y),i=Object(b.o)(t),a=Object(b.n)(t,"TD",{});var u=Object(b.l)(a);for(let t=0;t<d.length;t+=1)d[t].l(u);u.forEach(b.y),this.h()},h(){Object(b.h)(c,"href",O=Object(n.d)(t[16]["@id"])),Object(b.h)(e,"class","text-left")},m(t,n){Object(b.J)(t,e,n),Object(b.f)(e,c),Object(b.f)(c,j),Object(b.J)(t,l,n),Object(b.J)(t,o,n),Object(b.f)(o,h),Object(b.J)(t,i,n),Object(b.J)(t,a,n);for(let t=0;t<d.length;t+=1)d[t].m(a,null)},p(t,e){if(16&e&&s!==(s=t[16].description.graph[0]["d3f:attack-id"]+"")&&Object(b.X)(j,s),16&e&&O!==(O=Object(n.d)(t[16]["@id"]))&&Object(b.h)(c,"href",O),16&e&&f!==(f=t[16].description.graph[0]["rdfs:label"]+"")&&Object(b.X)(h,f),16&e){let c;for(u=x(t[16].off_to_def.results.bindings),c=0;c<u.length;c+=1){const b=r(t,u,c);d[c]?d[c].p(b,e):(d[c]=E(b),d[c].c(),d[c].m(a,null))}for(;c<d.length;c+=1)d[c].d(1);d.length=u.length}},d(t){t&&Object(b.y)(e),t&&Object(b.y)(l),t&&Object(b.y)(o),t&&Object(b.y)(i),t&&Object(b.y)(a),Object(b.x)(d,t)}}}function E(t){let e,c,j,O,l=t[17].def_tech_label.value+"";return{c(){e=Object(b.z)("div"),c=Object(b.z)("a"),j=Object(b.eb)(l),this.h()},l(t){e=Object(b.n)(t,"DIV",{});var n=Object(b.l)(e);c=Object(b.n)(n,"A",{href:!0});var O=Object(b.l)(c);j=Object(b.p)(O,l),O.forEach(b.y),n.forEach(b.y),this.h()},h(){Object(b.h)(c,"href",O="/technique/"+Object(n.f)(t[17].def_tech.value))},m(t,n){Object(b.J)(t,e,n),Object(b.f)(e,c),Object(b.f)(c,j)},p(t,e){16&e&&l!==(l=t[17].def_tech_label.value+"")&&Object(b.X)(j,l),16&e&&O!==(O="/technique/"+Object(n.f)(t[17].def_tech.value))&&Object(b.h)(c,"href",O)},d(t){t&&Object(b.y)(e)}}}function T(t){let e;return{c(){e=Object(b.eb)("loading...")},l(t){e=Object(b.p)(t,"loading...")},m(t,c){Object(b.J)(t,e,c)},p:b.O,d(t){t&&Object(b.y)(e)}}}function _(t){let e,c,n,j={ctx:t,current:null,token:null,hasCatch:!0,pending:T,then:m,catch:g,value:16,error:20};return Object(b.G)(c=t[13],j),{c(){e=Object(b.z)("tr"),j.block.c(),n=Object(b.bb)()},l(t){e=Object(b.n)(t,"TR",{});var c=Object(b.l)(e);j.block.l(c),n=Object(b.o)(c),c.forEach(b.y)},m(t,c){Object(b.J)(t,e,c),j.block.m(e,j.anchor=null),j.mount=()=>e,j.anchor=n,Object(b.f)(e,n)},p(e,n){if(t=e,j.ctx=t,16&n&&c!==(c=t[13])&&Object(b.G)(c,j));else{const e=t.slice();e[16]=e[20]=j.resolved,j.block.p(e,n)}},d(t){t&&Object(b.y)(e),j.block.d(),j.token=null,j=null}}}function z(t){let e;return{c(){e=Object(b.eb)("enter text and click go")},l(t){e=Object(b.p)(t,"enter text and click go")},m(t,c){Object(b.J)(t,e,c)},p:b.O,d(t){t&&Object(b.y)(e)}}}function D(t){let e,c,n,O,l,r,o,a,s,f,u,d,p,g,m,y,v,E,T,_,D,A,x,J,k;e=new j.a({props:{title:"ATT&CK to D3FEND Mapper | Tools | "}});let I={ctx:t,current:null,token:null,hasCatch:!0,pending:z,then:i,catch:h,value:12,error:20};return Object(b.G)(A=t[4],I),{c(){Object(b.s)(e.$$.fragment),c=Object(b.bb)(),n=Object(b.z)("section"),O=Object(b.z)("div"),l=Object(b.z)("h1"),r=Object(b.eb)("ATT&CK to D3FEND Mapper"),o=Object(b.bb)(),a=Object(b.z)("p"),s=Object(b.eb)("Paste any text containing ATT&CK IDs:"),f=Object(b.bb)(),u=Object(b.z)("div"),d=Object(b.z)("textarea"),p=Object(b.bb)(),g=Object(b.z)("div"),m=Object(b.z)("button"),y=Object(b.eb)("GO"),v=Object(b.bb)(),E=Object(b.z)("br"),T=Object(b.bb)(),_=Object(b.z)("br"),D=Object(b.bb)(),I.block.c(),this.h()},l(t){Object(b.m)(e.$$.fragment,t),c=Object(b.o)(t),n=Object(b.n)(t,"SECTION",{class:!0});var j=Object(b.l)(n);O=Object(b.n)(j,"DIV",{class:!0});var h=Object(b.l)(O);l=Object(b.n)(h,"H1",{});var i=Object(b.l)(l);r=Object(b.p)(i,"ATT&CK to D3FEND Mapper"),i.forEach(b.y),o=Object(b.o)(h),a=Object(b.n)(h,"P",{});var z=Object(b.l)(a);s=Object(b.p)(z,"Paste any text containing ATT&CK IDs:"),z.forEach(b.y),f=Object(b.o)(h),u=Object(b.n)(h,"DIV",{});var A=Object(b.l)(u);d=Object(b.n)(A,"TEXTAREA",{class:!0}),Object(b.l)(d).forEach(b.y),A.forEach(b.y),p=Object(b.o)(h),g=Object(b.n)(h,"DIV",{});var x=Object(b.l)(g);m=Object(b.n)(x,"BUTTON",{class:!0});var J=Object(b.l)(m);y=Object(b.p)(J,"GO"),J.forEach(b.y),x.forEach(b.y),v=Object(b.o)(h),E=Object(b.n)(h,"BR",{}),h.forEach(b.y),T=Object(b.o)(j),_=Object(b.n)(j,"BR",{}),D=Object(b.o)(j),I.block.l(j),j.forEach(b.y),this.h()},h(){Object(b.h)(d,"class","svelte-1mthjvt"),Object(b.h)(m,"class","button"),Object(b.h)(O,"class","card"),Object(b.h)(n,"class","content shrink svelte-1mthjvt")},m(j,h){Object(b.N)(e,j,h),Object(b.J)(j,c,h),Object(b.J)(j,n,h),Object(b.f)(n,O),Object(b.f)(O,l),Object(b.f)(l,r),Object(b.f)(O,o),Object(b.f)(O,a),Object(b.f)(a,s),Object(b.f)(O,f),Object(b.f)(O,u),Object(b.f)(u,d),Object(b.Y)(d,t[1]),Object(b.f)(O,p),Object(b.f)(O,g),Object(b.f)(g,m),Object(b.f)(m,y),Object(b.f)(O,v),Object(b.f)(O,E),Object(b.f)(n,T),Object(b.f)(n,_),Object(b.f)(n,D),I.block.m(n,I.anchor=null),I.mount=()=>n,I.anchor=null,x=!0,J||(k=[Object(b.L)(d,"input",t[9]),Object(b.L)(d,"keypress",t[8]),Object(b.L)(m,"click",t[5])],J=!0)},p(e,[c]){if(t=e,2&c&&Object(b.Y)(d,t[1]),I.ctx=t,16&c&&A!==(A=t[4])&&Object(b.G)(A,I));else{const e=t.slice();e[12]=e[20]=I.resolved,I.block.p(e,c)}},i(t){x||(Object(b.hb)(e.$$.fragment,t),x=!0)},o(t){Object(b.ib)(e.$$.fragment,t),x=!1},d(t){Object(b.w)(e,t),t&&Object(b.y)(c),t&&Object(b.y)(n),I.block.d(),I.token=null,I=null,J=!1,Object(b.U)(k)}}}function A(){document.execCommand("copy")}function x(t){let e=new Set,c=[];return t.forEach((function(t){e.has(t.def_tech_label.value)||(e.add(t.def_tech_label.value),c.push(t))})),c}function J(t,e,c){let b,j="",O=!1,l=!0;async function r(){let t=c(0,b=Array.from(new Set(Object(n.g)(j)))),e=[];return t&&t.forEach((function(t){let c;c=async function(t){let e="/api/offensive-technique/attack/"+t+".json";const c=await fetch(e),b=await c.json();if(c.ok)return{id:t,off_to_def:b.off_to_def,description:new n.a(b.description)};throw new Error(j)}(t),c&&e.push(c)})),e}let o=r();function h(){c(4,o=r()),c(3,l=!1)}return[b,j,O,l,o,h,function(){window.getSelection().removeAllRanges(),c(2,O=!1)},function(){const t=window.getSelection();t.removeAllRanges();let e=document.getElementById("mappings");const b=document.createRange();b.selectNodeContents(e),t.addRange(b),c(2,O=!0)},function(t){1==t.ctrlKey&&13==t.keyCode&&h()},function(){j=this.value,c(1,j)}]}class k extends b.b{constructor(t){var e;super(),O.getElementById("svelte-1mthjvt-style")||((e=Object(b.z)("style")).id="svelte-1mthjvt-style",e.textContent="section.svelte-1mthjvt{margin:auto}textarea.svelte-1mthjvt{min-width:460px;min-height:230px;width:100%}dl.svelte-1mthjvt{display:grid;grid-template-columns:auto auto auto auto;max-width:min-content}div.results-wrap.svelte-1mthjvt{max-width:fit-content}.selector.svelte-1mthjvt{width:6rem}",Object(b.f)(O.head,e)),Object(b.I)(this,t,J,D,b.V,{})}}e.default=k},9:function(t,e,c){"use strict";var b=c(0);function n(t){let e;return{c(){e=Object(b.z)("meta"),this.h()},l(t){e=Object(b.n)(t,"META",{property:!0,content:!0}),this.h()},h(){Object(b.h)(e,"property","og:type"),Object(b.h)(e,"content",t[2])},m(t,c){Object(b.J)(t,e,c)},p(t,c){4&c&&Object(b.h)(e,"content",t[2])},d(t){t&&Object(b.y)(e)}}}function j(t){let e;return{c(){e=Object(b.z)("meta"),this.h()},l(t){e=Object(b.n)(t,"META",{property:!0,content:!0}),this.h()},h(){Object(b.h)(e,"property","og:title"),Object(b.h)(e,"content",t[1])},m(t,c){Object(b.J)(t,e,c)},p(t,c){2&c&&Object(b.h)(e,"content",t[1])},d(t){t&&Object(b.y)(e)}}}function O(t){let e;return{c(){e=Object(b.z)("meta"),this.h()},l(t){e=Object(b.n)(t,"META",{property:!0,content:!0}),this.h()},h(){Object(b.h)(e,"property","og:url"),Object(b.h)(e,"content",t[3])},m(t,c){Object(b.J)(t,e,c)},p(t,c){8&c&&Object(b.h)(e,"content",t[3])},d(t){t&&Object(b.y)(e)}}}function l(t){let e;return{c(){e=Object(b.z)("meta"),this.h()},l(t){e=Object(b.n)(t,"META",{property:!0,content:!0}),this.h()},h(){Object(b.h)(e,"property","og:image"),Object(b.h)(e,"content",t[4])},m(t,c){Object(b.J)(t,e,c)},p(t,c){16&c&&Object(b.h)(e,"content",t[4])},d(t){t&&Object(b.y)(e)}}}function r(t){let e;return{c(){e=Object(b.z)("meta"),this.h()},l(t){e=Object(b.n)(t,"META",{property:!0,content:!0}),this.h()},h(){Object(b.h)(e,"property","og:description"),Object(b.h)(e,"content",t[5])},m(t,c){Object(b.J)(t,e,c)},p(t,c){32&c&&Object(b.h)(e,"content",t[5])},d(t){t&&Object(b.y)(e)}}}function o(t){let e,c,o,h,i,a;document.title=e=t[0]+" | MITRE D3FEND™";let s=t[2]&&n(t),f=t[1]&&j(t),u=t[3]&&O(t),d=t[4]&&l(t),p=t[5]&&r(t);return{c(){s&&s.c(),c=Object(b.A)(),f&&f.c(),o=Object(b.A)(),u&&u.c(),h=Object(b.A)(),d&&d.c(),i=Object(b.A)(),p&&p.c(),a=Object(b.A)()},l(t){const e=Object(b.T)('[data-svelte="svelte-1l78tbl"]',document.head);s&&s.l(e),c=Object(b.A)(),f&&f.l(e),o=Object(b.A)(),u&&u.l(e),h=Object(b.A)(),d&&d.l(e),i=Object(b.A)(),p&&p.l(e),a=Object(b.A)(),e.forEach(b.y)},m(t,e){s&&s.m(document.head,null),Object(b.f)(document.head,c),f&&f.m(document.head,null),Object(b.f)(document.head,o),u&&u.m(document.head,null),Object(b.f)(document.head,h),d&&d.m(document.head,null),Object(b.f)(document.head,i),p&&p.m(document.head,null),Object(b.f)(document.head,a)},p(t,[b]){1&b&&e!==(e=t[0]+" | MITRE D3FEND™")&&(document.title=e),t[2]?s?s.p(t,b):(s=n(t),s.c(),s.m(c.parentNode,c)):s&&(s.d(1),s=null),t[1]?f?f.p(t,b):(f=j(t),f.c(),f.m(o.parentNode,o)):f&&(f.d(1),f=null),t[3]?u?u.p(t,b):(u=O(t),u.c(),u.m(h.parentNode,h)):u&&(u.d(1),u=null),t[4]?d?d.p(t,b):(d=l(t),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null),t[5]?p?p.p(t,b):(p=r(t),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null)},i:b.O,o:b.O,d(t){s&&s.d(t),Object(b.y)(c),f&&f.d(t),Object(b.y)(o),u&&u.d(t),Object(b.y)(h),d&&d.d(t),Object(b.y)(i),p&&p.d(t),Object(b.y)(a)}}}function h(t,e,c){let{title:b}=e,{og_title:n}=e,{og_type:j}=e,{og_url:O}=e,{og_image:l}=e,{og_description:r}=e;return t.$$set=t=>{"title"in t&&c(0,b=t.title),"og_title"in t&&c(1,n=t.og_title),"og_type"in t&&c(2,j=t.og_type),"og_url"in t&&c(3,O=t.og_url),"og_image"in t&&c(4,l=t.og_image),"og_description"in t&&c(5,r=t.og_description)},[b,n,j,O,l,r]}class i extends b.b{constructor(t){super(),Object(b.I)(this,t,h,o,b.V,{title:0,og_title:1,og_type:2,og_url:3,og_image:4,og_description:5})}}e.a=i}}]);
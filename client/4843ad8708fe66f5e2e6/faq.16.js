(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{46:function(t,e,c){"use strict";c.r(e),c.d(e,"preload",(function(){return O}));var n=c(0),o=c(12),r=c.n(o),b=c(9);function i(t){let e,c,o,i,O=r()(t[0])+"";return e=new b.a({props:{title:"Frequently Asked Questions"}}),{c(){Object(n.s)(e.$$.fragment),c=Object(n.bb)(),o=Object(n.z)("section"),this.h()},l(t){Object(n.m)(e.$$.fragment,t),c=Object(n.o)(t),o=Object(n.n)(t,"SECTION",{class:!0}),Object(n.l)(o).forEach(n.y),this.h()},h(){Object(n.h)(o,"class","content")},m(t,r){Object(n.N)(e,t,r),Object(n.J)(t,c,r),Object(n.J)(t,o,r),o.innerHTML=O,i=!0},p(t,[e]){(!i||1&e)&&O!==(O=r()(t[0])+"")&&(o.innerHTML=O)},i(t){i||(Object(n.hb)(e.$$.fragment,t),i=!0)},o(t){Object(n.ib)(e.$$.fragment,t),i=!1},d(t){Object(n.w)(e,t),t&&Object(n.y)(c),t&&Object(n.y)(o)}}}async function O({params:t,query:e}){const c=await this.fetch("faq/faq.json"),n=await c.json();if(200===c.status)return{faq:n.plaintext};this.error(c.status,n.message)}function j(t,e,c){let{faq:n}=e;return t.$$set=t=>{"faq"in t&&c(0,n=t.faq)},[n]}class l extends n.b{constructor(t){super(),Object(n.I)(this,t,j,i,n.V,{faq:0})}}e.default=l},9:function(t,e,c){"use strict";var n=c(0);function o(t){let e;return{c(){e=Object(n.z)("meta"),this.h()},l(t){e=Object(n.n)(t,"META",{property:!0,content:!0}),this.h()},h(){Object(n.h)(e,"property","og:type"),Object(n.h)(e,"content",t[2])},m(t,c){Object(n.J)(t,e,c)},p(t,c){4&c&&Object(n.h)(e,"content",t[2])},d(t){t&&Object(n.y)(e)}}}function r(t){let e;return{c(){e=Object(n.z)("meta"),this.h()},l(t){e=Object(n.n)(t,"META",{property:!0,content:!0}),this.h()},h(){Object(n.h)(e,"property","og:title"),Object(n.h)(e,"content",t[1])},m(t,c){Object(n.J)(t,e,c)},p(t,c){2&c&&Object(n.h)(e,"content",t[1])},d(t){t&&Object(n.y)(e)}}}function b(t){let e;return{c(){e=Object(n.z)("meta"),this.h()},l(t){e=Object(n.n)(t,"META",{property:!0,content:!0}),this.h()},h(){Object(n.h)(e,"property","og:url"),Object(n.h)(e,"content",t[3])},m(t,c){Object(n.J)(t,e,c)},p(t,c){8&c&&Object(n.h)(e,"content",t[3])},d(t){t&&Object(n.y)(e)}}}function i(t){let e;return{c(){e=Object(n.z)("meta"),this.h()},l(t){e=Object(n.n)(t,"META",{property:!0,content:!0}),this.h()},h(){Object(n.h)(e,"property","og:image"),Object(n.h)(e,"content",t[4])},m(t,c){Object(n.J)(t,e,c)},p(t,c){16&c&&Object(n.h)(e,"content",t[4])},d(t){t&&Object(n.y)(e)}}}function O(t){let e;return{c(){e=Object(n.z)("meta"),this.h()},l(t){e=Object(n.n)(t,"META",{property:!0,content:!0}),this.h()},h(){Object(n.h)(e,"property","og:description"),Object(n.h)(e,"content",t[5])},m(t,c){Object(n.J)(t,e,c)},p(t,c){32&c&&Object(n.h)(e,"content",t[5])},d(t){t&&Object(n.y)(e)}}}function j(t){let e,c,j,l,h,u;document.title=e=t[0]+" | MITRE D3FEND™";let a=t[2]&&o(t),s=t[1]&&r(t),d=t[3]&&b(t),p=t[4]&&i(t),m=t[5]&&O(t);return{c(){a&&a.c(),c=Object(n.A)(),s&&s.c(),j=Object(n.A)(),d&&d.c(),l=Object(n.A)(),p&&p.c(),h=Object(n.A)(),m&&m.c(),u=Object(n.A)()},l(t){const e=Object(n.T)('[data-svelte="svelte-1l78tbl"]',document.head);a&&a.l(e),c=Object(n.A)(),s&&s.l(e),j=Object(n.A)(),d&&d.l(e),l=Object(n.A)(),p&&p.l(e),h=Object(n.A)(),m&&m.l(e),u=Object(n.A)(),e.forEach(n.y)},m(t,e){a&&a.m(document.head,null),Object(n.f)(document.head,c),s&&s.m(document.head,null),Object(n.f)(document.head,j),d&&d.m(document.head,null),Object(n.f)(document.head,l),p&&p.m(document.head,null),Object(n.f)(document.head,h),m&&m.m(document.head,null),Object(n.f)(document.head,u)},p(t,[n]){1&n&&e!==(e=t[0]+" | MITRE D3FEND™")&&(document.title=e),t[2]?a?a.p(t,n):(a=o(t),a.c(),a.m(c.parentNode,c)):a&&(a.d(1),a=null),t[1]?s?s.p(t,n):(s=r(t),s.c(),s.m(j.parentNode,j)):s&&(s.d(1),s=null),t[3]?d?d.p(t,n):(d=b(t),d.c(),d.m(l.parentNode,l)):d&&(d.d(1),d=null),t[4]?p?p.p(t,n):(p=i(t),p.c(),p.m(h.parentNode,h)):p&&(p.d(1),p=null),t[5]?m?m.p(t,n):(m=O(t),m.c(),m.m(u.parentNode,u)):m&&(m.d(1),m=null)},i:n.O,o:n.O,d(t){a&&a.d(t),Object(n.y)(c),s&&s.d(t),Object(n.y)(j),d&&d.d(t),Object(n.y)(l),p&&p.d(t),Object(n.y)(h),m&&m.d(t),Object(n.y)(u)}}}function l(t,e,c){let{title:n}=e,{og_title:o}=e,{og_type:r}=e,{og_url:b}=e,{og_image:i}=e,{og_description:O}=e;return t.$$set=t=>{"title"in t&&c(0,n=t.title),"og_title"in t&&c(1,o=t.og_title),"og_type"in t&&c(2,r=t.og_type),"og_url"in t&&c(3,b=t.og_url),"og_image"in t&&c(4,i=t.og_image),"og_description"in t&&c(5,O=t.og_description)},[n,o,r,b,i,O]}class h extends n.b{constructor(t){super(),Object(n.I)(this,t,l,j,n.V,{title:0,og_title:1,og_type:2,og_url:3,og_image:4,og_description:5})}}e.a=h}}]);
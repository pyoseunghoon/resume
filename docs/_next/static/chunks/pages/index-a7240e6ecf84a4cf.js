(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{6422:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>tj});var r=n(9127),i=n(5169),o=n(3368),s=n.n(o),l=n(4853),c=n(7567),a=n(4641),d=n(5826),p=n(9704),u=n(4848);function m(t){var e=t.children;return(0,u.jsx)(d.A,{children:(0,u.jsx)(p.A,{children:e})})}function h(t){var e=t.url,n=t.text;return(0,u.jsx)("a",{href:e,target:"_blank",rel:"noreferrer noopener",children:n||e})}var j={blue:{color:"#3c78d8"},gray:{color:"gray"},global:{fontFamily:"Pretendard, sans-serif",fontWeight:300,wordWrap:"break-word",wordBreak:"keep-all",lineHeight:1.8},footerCover:{backgroundColor:"#f5f5f5",paddingLeft:0,paddingRight:0,marginTop:"50px",height:"80px"},footer:{},skillKeywordBadge:{fontWeight:400}};function x(t){var e=t.title,n=t.children;return(0,u.jsx)("div",{className:"mt-5",children:(0,u.jsxs)(m,{children:[(0,u.jsx)(d.A,{className:"pb-3",children:(0,u.jsx)(p.A,{children:(0,u.jsx)("h2",{style:j.blue,children:(0,u.jsx)("span",{children:e})})})}),n]})})}function f(t){var e=t.descriptions,n=t.option;return(0,u.jsx)(u.Fragment,{children:e?(0,u.jsx)("ul",{className:null!=n&&n.padding?"pt-2":"",children:e.map(function(t,e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(g,{description:t},e.toString()),t.descriptions?(0,u.jsx)(y,{descriptions:t.descriptions},e.toString()):""]})})}):""})}function y(t){var e=t.descriptions;return(0,u.jsx)("ul",{children:e.map(function(t,e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(g,{description:t},e.toString()),t.descriptions?(0,u.jsx)(y,{descriptions:t.descriptions},e.toString()):""]})})})}function g(t){var e=t.description,n=e.content,r=e.href,i=e.postImage,o=e.postHref,s=e.weight;return r&&i?(0,u.jsxs)("li",{style:A(s),children:[(0,u.jsx)(h,{url:r,text:n})," ",(0,u.jsx)("img",{src:i,alt:i})]}):r?(0,u.jsx)("li",{style:A(s),children:(0,u.jsx)(h,{url:r,text:n})}):o&&i?(0,u.jsxs)("li",{style:A(s),children:[n," ",(0,u.jsx)(h,{url:o,text:o})," ",(0,u.jsx)("img",{src:i,alt:i})]}):o?(0,u.jsxs)("li",{style:A(s),children:[n," ",(0,u.jsx)(h,{url:o,text:o})]}):i?(0,u.jsxs)("li",{style:A(s),children:[n," ",(0,u.jsx)("img",{src:i,alt:i})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("meta",{name:"format-detection",content:"telephone=no"}),(0,u.jsx)("li",{style:A(s),children:n})]})}function A(t){return t?{fontWeight:O[t||"DEFAULT"]}:{}}var O={DEFAULT:300,THIN:100,EXTRA_LIGHT:200,LIGHT:300,REGULAR:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function b(t){var e=t.index,n=t.payload,r=n.left,i=n.right,o=!!(i.title||i.subTitle);return(0,u.jsxs)("div",{children:[e>0?(0,u.jsx)("hr",{}):"",(0,u.jsxs)(d.A,{children:[(0,u.jsx)(p.A,{sm:12,md:3,className:"text-md-right",children:(0,u.jsxs)(d.A,{children:[(0,u.jsx)(p.A,{md:12,children:(0,u.jsx)("h4",{style:j.gray,children:r.title})}),r.subTitle?(0,u.jsx)(p.A,{md:12,children:r.subTitle}):""]})}),(0,u.jsxs)(p.A,{sm:12,md:9,children:[i.title?(0,u.jsx)("h4",{children:i.title}):"",i.subTitle?(0,u.jsx)("i",{style:j.gray,children:i.subTitle}):"",i.descriptions?(0,u.jsx)(f,{descriptions:i.descriptions,option:{padding:o}}):""]})]})]})}var L=n(7833),_=n.n(L),D=function(t){return t.YYYY_LL_DD="yyyy-LL-dd",t.YYYY_LL="yyyy-LL",t.YYYY_DOT_LL="yyyy. LL",t.YYYY_DOT_LL_DOT_DD="yyyy. LL. dd",t.KINDNESS_FULL="DDDD",t.DURATION_KINDNESS="y년 M개월",t.DURATION_KINDNESS_ONLY_MONTH="M개월",t.DURATION_KINDNESS_ONLY_YEAR="y년",t}(D||{});let Y={LUXON_DATE_FORMAT:D,getFormattingDuration:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.c9.local(),r=_()("yosume:".concat("Util:getFormattingDuration")),i=n.plus({month:1}).diff(t,["years","months"]);return r(i.milliseconds,i.get("years"),i.get("months")),e=i.years>0&&0===i.months?D.DURATION_KINDNESS_ONLY_YEAR:0===i.years&&i.months>0?D.DURATION_KINDNESS_ONLY_MONTH:D.DURATION_KINDNESS,i.toFormat(e)}};function T(t){var e=t.payload,n=t.component;return null!=e&&e.disable?(0,u.jsx)(u.Fragment,{}):n({payload:e})}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var N={Component:function(t){return T({payload:t.payload,component:E})}};function E(t){var e=t.payload;return(0,u.jsx)(x,{title:"EDUCATION",children:(0,u.jsx)(S,{payload:e})})}function S(t){var e=t.payload;return(0,u.jsx)(m,{children:e.list.map(function(t,e){var n,i,o,s;return(0,u.jsx)(b,{payload:(n=Y.LUXON_DATE_FORMAT,i=[t.startedAt].map(function(t){return a.c9.fromFormat(t,n.YYYY_LL).toFormat(n.YYYY_DOT_LL)}),o=(0,c.A)(i,1)[0],s=void 0===t.endedAt?" ":[t.endedAt].map(function(t){return a.c9.fromFormat(t,n.YYYY_LL).toFormat(n.YYYY_DOT_LL)}),{left:{title:"".concat(o," ~ ").concat(s)},right:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach(function(e){(0,r.A)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t)}),index:e},e.toString())})})}function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var F={Component:function(t){return T({payload:t.payload,component:P})}};function P(t){var e=t.payload;return(0,u.jsx)(x,{title:"ETC",children:(0,u.jsx)(I,{payload:e})})}function I(t){var e=t.payload;return(0,u.jsx)(m,{children:e.list.map(function(t,e){var n,i;return(0,u.jsx)(b,{payload:(n=Y.LUXON_DATE_FORMAT,i=a.c9.fromFormat(t.startedAt,n.YYYY_LL).toFormat(n.YYYY_DOT_LL),{left:{title:function(){if(t.endedAt){var e=a.c9.fromFormat(t.endedAt,n.YYYY_LL).toFormat(n.YYYY_DOT_LL);return"".concat(i," ~ ").concat(e)}return i}()},right:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach(function(e){(0,r.A)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t)}),index:e},e.toString())})})}var U=n(6477),M=n(8242);function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach(function(e){(0,r.A)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function C(t){var e,n,r,i,o,s,l=t.item,c=t.index,m=l.positions.map(function(t){return k(k({},t),{},{startedAtDate:a.c9.fromFormat(t.startedAt,Y.LUXON_DATE_FORMAT.YYYY_LL),endedAtDate:t.endedAt?a.c9.fromFormat(t.endedAt,Y.LUXON_DATE_FORMAT.YYYY_LL):null,isCurrent:!t.endedAt})}).slice().sort(function(t,e){return e.startedAtDate.toMillis()-t.startedAtDate.toMillis()}),h=a.c9.min.apply(a.c9,(0,M.A)(m.map(function(t){return t.startedAtDate}))),x=m.some(function(t){return t.isCurrent}),f=m.filter(function(t){return null!==t.endedAtDate}).map(function(t){return t.endedAtDate});s=x?a.c9.local():f.length>0?a.c9.max.apply(a.c9,(0,M.A)(f)):a.c9.local();var y=(n=Y.LUXON_DATE_FORMAT.YYYY_DOT_LL,r=m[m.length-1].startedAtDate,i=m.some(function(t){return t.isCurrent}),o=m.filter(function(t){return null!==t.endedAtDate}).map(function(t){return t.endedAtDate}),e=i?a.c9.local():o.length>0?a.c9.max.apply(a.c9,(0,M.A)(o)):a.c9.local(),"".concat(r.toFormat(n)," ~ ").concat(e.toFormat(n))),g=m.length>1;return(0,u.jsxs)("div",{children:[c>0&&(0,u.jsx)("hr",{}),(0,u.jsxs)(d.A,{children:[(0,u.jsx)(p.A,{sm:12,md:3,className:"text-md-right",children:(0,u.jsx)("h4",{style:j.gray,children:y})}),(0,u.jsx)(p.A,{sm:12,md:9,children:(0,u.jsxs)("h4",{style:{display:"inline-flex",alignItems:"center"},children:[l.title," ",(0,u.jsxs)("span",{style:{fontSize:"65%",display:"inline-flex",alignItems:"center"},children:[x&&(0,u.jsx)(U.A,{color:"primary",className:"ml-1",children:"재직 중"}),(0,u.jsx)(U.A,{color:"info",className:"ml-1",children:Y.getFormattingDuration(h,s)})]})]})})]}),m.map(function(t,e){var n,r,i,o;return(0,u.jsxs)(d.A,{className:"mt-2",children:[(0,u.jsx)(p.A,{sm:12,md:3,className:"text-md-right",children:g&&(0,u.jsx)("span",{style:j.gray,children:(n=t.startedAtDate,r=t.endedAtDate,i=Y.LUXON_DATE_FORMAT.YYYY_DOT_LL,r?"".concat(n.toFormat(i)," ~ ").concat(r.toFormat(i)):"".concat(n.toFormat(i)," ~"))})}),(0,u.jsxs)(p.A,{sm:12,md:9,children:[(0,u.jsx)("i",{style:j.gray,children:t.title}),(0,u.jsxs)("ul",{className:"pt-2",children:[t.descriptions.map(function(t,e){return(0,u.jsx)("li",{children:t},e.toString())}),(o=t.skillKeywords)?(0,u.jsxs)("li",{children:[(0,u.jsx)("strong",{children:"Skill Keywords"}),(0,u.jsx)("div",{children:o.map(function(t,e){return(0,u.jsx)(U.A,{style:j.skillKeywordBadge,color:"secondary",className:"mr-1",children:t},e.toString())})})]}):null]})]})]},e.toString())})]})}var B={Component:function(t){return T({payload:t.payload,component:X})}};function X(t){var e=t.payload;return(0,u.jsx)("div",{className:"mt-5",children:(0,u.jsxs)(m,{children:[(0,u.jsx)(d.A,{className:"pb-3",children:(0,u.jsx)(p.A,{children:(0,u.jsxs)("h2",{style:j.blue,children:["EXPERIENCE ",e.disableTotalPeriod?"":(0,u.jsx)("span",{style:{fontSize:"50%"},children:(0,u.jsx)(U.A,{children:e.list.reduce(function(t,e){var n=e.positions.map(function(t){var e=t.endedAt?a.c9.fromFormat(t.endedAt,Y.LUXON_DATE_FORMAT.YYYY_LL):a.c9.local(),n=a.c9.fromFormat(t.startedAt,Y.LUXON_DATE_FORMAT.YYYY_LL);return e.diff(n)});return t.concat(n)},[]).reduce(function(t,e){return t.plus(e)},a.dw.fromMillis(0)).toFormat("총 ".concat(Y.LUXON_DATE_FORMAT.DURATION_KINDNESS))})})]})})}),e.list.map(function(t,e){return(0,u.jsx)(C,{item:t,index:e},e.toString())})]})})}var K={Component:function(t){var e=t.payload,n=a.c9.fromFormat(e.latestUpdated,Y.LUXON_DATE_FORMAT.YYYY_LL_DD),r=Math.floor(a.c9.local().diff(n).milliseconds/1e3/60/60/24);return(0,u.jsx)(d.A,{children:(0,u.jsx)(p.A,{style:j.footerCover,children:(0,u.jsx)("div",{style:j.footer,className:"text-center mt-4",children:(0,u.jsx)(m,{children:(0,u.jsxs)("small",{children:[(0,u.jsx)("small",{children:"Latest Updated"})," ",(0,u.jsx)(U.A,{color:"secondary",children:"".concat(n.toFormat(Y.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD)," (D+").concat(r,")")})]})})})})})}},G={Component:function(t){return T({payload:t.payload,component:H})}};function H(t){var e=t.payload;return(0,u.jsx)("div",{className:"mt-5",children:(0,u.jsxs)(d.A,{children:[(0,u.jsx)(p.A,{sm:12,md:3,children:(0,u.jsx)("h2",{style:j.blue,children:"INTRODUCE"})}),(0,u.jsx)(p.A,{sm:12,md:9,children:e.contents.map(function(t,e){return(0,u.jsx)("p",{children:t},e.toString())})})]})})}var z=n(3914),W=n(3540).Ay.span.withConfig({displayName:"contact__ContactBadge",componentId:"sc-qjr61o-0"})(["background-color:#f8f9fa;color:#000;font-weight:500;padding:2px 6px;border-radius:3px;display:inline-block;font-size:12px;border:0.5px solid #bbb;white-space:nowrap;line-height:1.2;"]);function J(t){var e=t.payload;return(0,u.jsxs)(d.A,{className:"pb-2",children:[(0,u.jsx)(p.A,{xs:1,className:"text-right",children:(0,u.jsx)(z.g,{icon:e.icon})}),(0,u.jsx)(p.A,{xs:"auto",children:e.badge?(0,u.jsx)(W,{children:e.title||e.link}):e.link?(0,u.jsx)(h,{url:e.link,text:e.title}):(0,u.jsx)(W,{children:e.title})})]})}function q(t){var e=t.src;return(0,u.jsx)("div",{className:"pb-3 text-md-right text-center",children:(0,u.jsx)("img",{style:{maxHeight:"320px"},className:"img-fluid rounded",src:e,alt:"Profile"})})}function Q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(n),!0).forEach(function(e){(0,r.A)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Z={Component:function(t){return T({payload:t.payload,component:$})}};function $(t){var e=t.payload,n=e.image,r=e.contact,i=e.name;return(0,u.jsx)("div",{className:"mt-5",children:(0,u.jsxs)(d.A,{children:[(0,u.jsx)(p.A,{md:3,sm:12,children:(0,u.jsx)(q,{src:n})}),(0,u.jsxs)(p.A,{md:9,sm:12,children:[(0,u.jsx)(d.A,{children:(0,u.jsxs)(p.A,{className:"text-md-left",style:{textAlign:"left",display:"flex",alignItems:"center"},children:[(0,u.jsx)("h1",{style:V(V({},j.blue),{},{fontWeight:"bold",display:"inline"}),children:i.title}),(0,u.jsx)("span",{style:{marginLeft:"8px"},children:i.role}),(0,u.jsx)("small",{style:{color:"rgba(0, 0, 0, 0.4)",marginLeft:"8px"},children:i.small||""})]})}),(0,u.jsx)("div",{style:{marginTop:"25px"},children:(0,u.jsx)(d.A,{children:(0,u.jsx)(p.A,{className:"pt-3",children:r.map(function(t,e){return(0,u.jsx)(J,{payload:t},e.toString())})})})})]})]})})}function tt(t){var e=t.payload;return(0,u.jsx)(m,{children:e.list.map(function(t,e){var n,r;return(0,u.jsx)(b,{payload:(n=Y.LUXON_DATE_FORMAT,r=a.c9.fromFormat(t.startedAt,n.YYYY_LL).toFormat(n.YYYY_DOT_LL),{left:{title:function(){if(t.endedAt){var e=a.c9.fromFormat(t.endedAt,n.YYYY_LL).toFormat(n.YYYY_DOT_LL);return"".concat(r," ~ ").concat(e)}return"".concat(r," ~")}()},right:{title:t.title,subTitle:t.where,descriptions:t.descriptions}}),index:e},e.toString())})})}var te={Component:function(t){return T({payload:t.payload,component:tn})}};function tn(t){var e=t.payload;return(0,u.jsx)(x,{title:"PROJECT",children:(0,u.jsx)(tt,{payload:e})})}function tr(t){var e,n=t.skill,r=t.index;return(0,u.jsxs)("div",{children:[r>0?(0,u.jsx)("hr",{}):"",(0,u.jsx)(d.A,{children:(0,u.jsxs)(p.A,{sm:12,md:6,children:[(e=n.items,(0,u.jsx)(d.A,{className:"mt-2",children:(0,u.jsx)(p.A,{xs:12,className:"d-flex flex-wrap align-items-center",children:e.map(function(t,e){return(0,u.jsxs)(U.A,{color:"primary",style:{fontSize:"1rem",padding:"8px 12px",marginRight:"10px",marginBottom:"5px",borderRadius:"20px",fontWeight:"bold"},children:[function(t){if(!t)return"";var e=function(){switch(t){case 3:return"primary";case 2:return"secondary";default:return"light"}}();return(0,u.jsxs)("span",{children:[(0,u.jsx)(U.A,{pill:!0,color:e,children:t})," "]})}(t.level)," ",t.title]},e.toString())})})}))," "]})})]})}n(6540);var ti={Component:function(t){return T({payload:t.payload,component:to})}};function to(t){var e=t.payload;return(0,u.jsx)("div",{className:"mt-5",children:(0,u.jsxs)(m,{children:[(0,u.jsx)(d.A,{className:"pb-3",children:(0,u.jsx)(p.A,{children:(0,u.jsx)("h2",{children:(0,u.jsx)("span",{style:j.blue,children:"SKILL"})})})}),e.skills.map(function(t,e){return(0,u.jsx)(tr,{skill:t,index:e},e.toString())})]})})}var ts=n(6188),tl=n(7875),tc={disable:!1,image:"/asset/profile_pyozzi.png",name:{title:"표승훈",role:"(프론트엔드 웹 개발자)",small:"가천대학교 컴퓨터공학과"},contact:[{title:"p37579898@naver.com",link:"mailto:p37579898@naver.com",icon:ts.y_8},{title:"010-4118-0875",icon:ts.KKr,badge:!0},{link:"https://github.com/pyoseunghoon",icon:tl.Vz1},{link:"https://velog.io/@pyoseunghoon/",icon:ts.us_}]};let ta=JSON.parse('{"rE":"1.4.0","Li":"2025-02-20","TB":"https://p37579898.github.io/resume"}');var td={disable:!1,contents:["Angular, TypeScript 기반의 5년 차 웹 프론트엔드 개발자로, B2B 형태의 보안 웹 서비스를 맞춤형 솔루션 형태로 제공한 경험이 있습니다. JavaScript, TypeScript, Angular, Node.js, MySQL, Git, Linux 등을 활용하여 서비스를 설계하고 개발한 경험을 바탕으로, 가독성, 유지보수성, UX를 모두 고려하는 개발을 고민하고 있습니다.","서비스 개발에서 가장 중요한 요소는 개발자와 고객 간의 원활한 의사소통과 성과라고 생각합니다. 고객의 니즈를 분석하고 실제 사용자의 관점을 고려하여 비즈니스 발전에 기여하고자 노력합니다. 이를 위해 여러 직군과 협업할 때 적극적이고 능동적인 커뮤니케이션을 지향합니다.","개발 블로그를 운영하며, 개발 경험을 공유하고 기록하는 것을 중요하게 생각합니다. 항상 새로운 기술에 대한 관심과 배움에 대한 열정을 바탕으로 업무에 임하겠습니다."],latestUpdated:ta.Li||"2025-01-01"},tp={version:ta.rE,github:ta.TB,latestUpdated:ta.Li},tu="Resume-표승훈";let tm={profile:tc,introduce:td,skill:{disable:!1,skills:[{category:"Languages",items:[{title:"Javascript"},{title:"Typescript"},{title:"Angular"},{title:"Node.js"}]}]},experience:{disable:!1,disableTotalPeriod:!1,list:[{title:"(주)윈스",positions:[{title:"Front-End Developer",startedAt:"2021-03",descriptions:["보안 관제 솔루션 웹 프론트엔드/백엔드 개발","REST API 서버 구축 및 고객사 Needs에 맞는 API 개발","사내 SIEM 제품과 타 서비스의 연동 기능 개발","레거시 스타일 구조 개편 및 Style Guide 제공에 참여","KT SOAR 제품 개발","LG U+ SIEM 제품 커스터마이징","클라우드 기반 보안 서비스의 프론트엔드 개발","레거시 청산 및 기존 비즈니스 로직 유지보수"],skillKeywords:["Angular","TypeScript","JavaScript","Ngrx","RxJS","Express.js","Nodejs","Loopback","MySQL","MongoDB","nginx","Linux"]}]}]},project:{disable:!1,list:[{title:"CTI(사이버 위협 인텔리전스) 자사 서비스 웹 클라이언트/벡엔드 유지보수",startedAt:"2021-03",endedAt:"2021-06",where:"(주)윈스",descriptions:[{content:"위협 정보에 대한 분석 화면 유지보수 및 상태관리 개선",weight:"THIN",descriptions:[{content:"ngrx 사용하여 redux 패턴 적용"}]}]},{title:"SIEM(보안 정보 및 이벤트 관리) 보안 관제 솔루션 웹 개발",startedAt:"2021-05",endedAt:"2022-12",where:"(주)윈스",descriptions:[{content:"보안 관제사에 관점의 UX/UI 개선 및 신규 Needs 에 맞는 비즈니스 로직 구현 통해 사내 AI 보안 관제 솔루션 개발",weight:"SEMI_BOLD",descriptions:[{content:"2025년 02월 기준 기존 사내 보안 관제 솔루션 80% 대체"},{content:"2025년 02월 기준 15개의 기업에 서비스 제공중"}]},{content:"회원가입 및 로그인 화면 개발",weight:"DEFAULT"},{content:"자체 쿼리 문법을 사용한 통합 검색 화면 개발",weight:"DEFAULT"},{content:"이용자의 권한을 '멀티 테넌시' 개념으로 설계 및 개발 ",weight:"DEFAULT"},{content:"관제사들의 업무 관리 시스템 설계 및 화면",weight:"DEFAULT"},{content:"위협 탐지를 위한 장비 등록 화면 개발 및 장비에서 제공하는 로그에 대한 내부 파싱규칙 설정 기능 개발",weight:"DEFAULT"},{content:"Playwright를 사용하여 웹 클라이언트 테스트 코드 작성",weight:"DEFAULT"}]},{title:"REST API 서버 구축 및 API 개발",startedAt:"2022-05",endedAt:"2022-07",where:"(주)윈스",descriptions:[{content:"서비스에 붙여서 사용가능한 Open API 서버를 Loopback 프레임워크를 사용하여 개발"},{content:"고객사 Needs 에 맞는 REST API 개발"}]},{title:"레거시 스타일 구조 개편 및 Style Guide 제공에 기여",startedAt:"2024-06",endedAt:"2024-10",where:"(주)윈스",descriptions:[{content:"디자인팀과 및 퍼블리셔 용역 1분과 함께 SIEM의 웹 디자인 개선",weight:"SEMI_BOLD",descriptions:[{content:"관제사의 특성상 야간근무가 많아 WHITE 계열의 테마 제공 및 총 5가지의 테마 제공"},{content:"유지보수 및 개발 효율성 증대를 위해 사내 제품에 맞는 Style Guide 서브 프로젝트 참여"}]}]},{title:"KT,LG U+ 주요 통신사 SOAR 서비스 개발",startedAt:"2023-02",endedAt:"2024-10",where:"(주)윈스",descriptions:[{content:"고객사 Needs 에 맞는 비즈니스 로직 구현 통해 AI SOAR(자동화 관제) 서비스 웹 프론트엔드 개발",weight:"SEMI_BOLD",descriptions:[{content:"2024년 회사내 서비스부문 판매 최대 실적 달성"}]},{content:"사용자 정의 대시보드를 ag grid, echart, gridstack, EntityService를 통해 구현"},{content:"고객사의 메인화면으로 사용되는 트래픽 대시보드 화면 개발"},{content:"Node 서버 성능 튜닝을 위해 Nginx 적용하여 로드밸런싱 적용"},{content:"기존 통합검색 기능의 성능 저하로 인해 페이징 기능을 도입"},{content:"트래픽 프로파일링 설정 기능 화면 개발"},{content:"외부 서비스를 플러그인 설정을 통해 내부 서비스에서 연동 할 수 있는 기능 개발"}]},{title:"클라우드 기반 보안 서비스 개발",startedAt:"2024-05",where:"(주)윈스",descriptions:[{content:"Angular 빌트인 i18n 라이브러리를 사용하여 3가지 다국어 지원 가능한 구조 설계 및 개발",weight:"SEMI_BOLD",descriptions:[{content:"국내 고객사뿐 아니라 일본 고객사 유치를 위한 초석 마련"}]},{content:"클라우드 환경에 제품을 올리기 위한 웹 모듈화 작업",weight:"SEMI_BOLD",descriptions:[{content:"라이센스별 기능 분리를 위해 MSA 패턴 적용"},{content:"module-federation 기술을 사용하여 모듈화 진행"}]}]},{title:"레거시 청산 및 기존 비즈니스 로직 유지보수",startedAt:"2024-05",where:"(주)윈스",descriptions:[{content:"모니터링 메모리 누수 개선 및 웹 초기 로드 성능 개선",weight:"SEMI_BOLD",descriptions:[{content:"실제 많은 양의 데이터를 모니터링하는 상황에서도 브라우저 메모리 부족현상 개선"},{content:"초기 로드 속도를 약 50%이상 감소 시켜 UX 향상"}]},{content:"유저, 장비 등록등.. 중요 백엔드로직에 Mysql 트랜잭션 적용",weight:"SEMI_BOLD",descriptions:[{content:"자사 관제시 서비스 설정 관련 버그 문의사항 80% 감소"}]},{content:"Angular 및 Nodejs의 버전 업그레이드작업을 메인으로 맡아 진행"},{content:"SIEM 제품 버전별 유지보수 및 관리"}]}]},education:{disable:!1,list:[{title:"가천대학교",subTitle:"컴퓨터공학과",startedAt:"2015-03",endedAt:"2021-08"},{title:"서울 광남고등학교",subTitle:"자연계 졸업",startedAt:"2012-03",endedAt:"2015-02"}]},etc:{disable:!1,list:[{title:"3명의 팀원과 웹 개발 프로젝트 수행 (웹 프론트 엔드 담당)",subTitle:"스파르타 코딩클럽",startedAt:"2020-01",endedAt:"2020-02"},{title:"리눅스 마스터 2급",subTitle:"KAIT",startedAt:"2019-10",endedAt:"2019-10"},{title:"의경 수경 만기 전역",subTitle:"",startedAt:"2017-04",endedAt:"2018-12"}]},footer:tp,_global:{headTitle:tu,seo:{title:tu,description:"",openGraph:{title:tu,description:"",images:[{url:"/asset/preview.jpg",width:800,height:600,alt:""}],type:"profile",profile:{firstName:"Lorem",lastName:"ipsum",username:"lorem",gender:"female"}}}}};function th(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}let tj=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.bV,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?th(Object(n),!0).forEach(function(e){(0,r.A)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):th(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},tm._global.seo)),(0,u.jsx)(s(),{children:(0,u.jsx)("title",{children:tm._global.headTitle})}),(0,u.jsxs)(i.A,{style:j.global,children:[(0,u.jsx)(Z.Component,{payload:tm.profile}),(0,u.jsx)(G.Component,{payload:tm.introduce}),(0,u.jsx)(ti.Component,{payload:tm.skill}),(0,u.jsx)(B.Component,{payload:tm.experience}),(0,u.jsx)(te.Component,{payload:tm.project}),(0,u.jsx)(N.Component,{payload:tm.education}),(0,u.jsx)(F.Component,{payload:tm.etc}),(0,u.jsx)(K.Component,{payload:tm.footer})]})]})}},2022:(t,e,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6422)}])}},t=>{var e=e=>t(t.s=e);t.O(0,[69,180,674,636,593,792],()=>e(2022)),_N_E=t.O()}]);
__load_plugin_entry__("internal.backstage-plugin-visual-app-interface",(()=>{"use strict";var h,g,e,a,t,i,l,r,n,s,_,c,u,o,f,y,d,x,b={11004:(h,g,e)=>{var a={PluginRoot:()=>e.e(879).then((()=>()=>e(49333)))},t=(h,g)=>(e.R=g,g=e.o(a,h)?a[h]():Promise.resolve().then((()=>{throw new Error('Module "'+h+'" does not exist in container.')})),e.R=void 0,g),i=(h,g)=>{if(e.S){var a="default",t=e.S[a];if(t&&t!==h)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return e.S[a]=h,e.I(a,g)}};e.d(g,{get:()=>t,init:()=>i})}},p={};function m(h){var g=p[h];if(void 0!==g)return g.exports;var e=p[h]={id:h,loaded:!1,exports:{}};return b[h].call(e.exports,e,e.exports,m),e.loaded=!0,e.exports}return m.m=b,m.c=p,m.amdO={},m.n=h=>{var g=h&&h.__esModule?()=>h.default:()=>h;return m.d(g,{a:g}),g},g=Object.getPrototypeOf?h=>Object.getPrototypeOf(h):h=>h.__proto__,m.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var t=Object.create(null);m.r(t);var i={};h=h||[null,g({}),g([]),g(g)];for(var l=2&a&&e;"object"==typeof l&&!~h.indexOf(l);l=g(l))Object.getOwnPropertyNames(l).forEach((h=>i[h]=()=>e[h]));return i.default=()=>e,m.d(t,i),t},m.d=(h,g)=>{for(var e in g)m.o(g,e)&&!m.o(h,e)&&Object.defineProperty(h,e,{enumerable:!0,get:g[e]})},m.f={},m.e=h=>Promise.all(Object.keys(m.f).reduce(((g,e)=>(m.f[e](h,g),g)),[])),m.u=h=>"static/"+({51:"react-syntax-highlighter_languages_highlight_prolog",200:"react-syntax-highlighter_languages_highlight_mel",206:"react-syntax-highlighter_languages_highlight_gml",371:"react-syntax-highlighter_languages_highlight_excel",456:"react-syntax-highlighter_languages_highlight_roboconf",460:"react-syntax-highlighter_languages_highlight_avrasm",464:"react-syntax-highlighter_languages_highlight_shell",557:"react-syntax-highlighter_languages_highlight_oneC",579:"react-syntax-highlighter_languages_highlight_vbnet",634:"react-syntax-highlighter_languages_highlight_scilab",879:"exposed-PluginRoot",927:"react-syntax-highlighter_languages_highlight_javascript",946:"react-syntax-highlighter_languages_highlight_clojure",985:"react-syntax-highlighter_languages_highlight_monkey",1062:"react-syntax-highlighter_languages_highlight_nim",1084:"react-syntax-highlighter_languages_highlight_aspectj",1099:"react-syntax-highlighter_languages_highlight_ebnf",1173:"react-syntax-highlighter_languages_highlight_autohotkey",1177:"react-syntax-highlighter_languages_highlight_profile",1214:"react-syntax-highlighter_languages_highlight_properties",1276:"react-syntax-highlighter_languages_highlight_phpTemplate",1325:"react-syntax-highlighter_languages_highlight_actionscript",1352:"react-syntax-highlighter_languages_highlight_fortran",1362:"react-syntax-highlighter_languages_highlight_mathematica",1418:"react-syntax-highlighter_languages_highlight_pony",1441:"react-syntax-highlighter_languages_highlight_coq",1461:"react-syntax-highlighter_languages_highlight_livescript",1489:"react-syntax-highlighter_languages_highlight_reasonml",1496:"react-syntax-highlighter_languages_highlight_lua",1522:"react-syntax-highlighter_languages_highlight_dust",1679:"react-syntax-highlighter_languages_highlight_scheme",1694:"react-syntax-highlighter_languages_highlight_accesslog",1727:"react-syntax-highlighter_languages_highlight_oxygene",1750:"react-syntax-highlighter_languages_highlight_makefile",1828:"react-syntax-highlighter_languages_highlight_dockerfile",1895:"react-syntax-highlighter_languages_highlight_pythonRepl",1956:"react-syntax-highlighter_languages_highlight_puppet",1961:"react-syntax-highlighter_languages_highlight_stan",1972:"react-syntax-highlighter_languages_highlight_fsharp",2007:"react-syntax-highlighter_languages_highlight_css",2064:"react-syntax-highlighter_languages_highlight_vhdl",2108:"react-syntax-highlighter_languages_highlight_cLike",2180:"react-syntax-highlighter_languages_highlight_sqf",2234:"react-syntax-highlighter_languages_highlight_lisp",2267:"react-syntax-highlighter_languages_highlight_maxima",2346:"react-syntax-highlighter_languages_highlight_d",2362:"react-syntax-highlighter_languages_highlight_xquery",2378:"react-syntax-highlighter_languages_highlight_parser3",2383:"react-syntax-highlighter_languages_highlight_crmsh",2438:"react-syntax-highlighter_languages_highlight_haxe",2488:"react-syntax-highlighter_languages_highlight_verilog",2496:"react-syntax-highlighter_languages_highlight_erlangRepl",2512:"react-syntax-highlighter_languages_highlight_stylus",2516:"react-syntax-highlighter_languages_highlight_apache",2665:"react-syntax-highlighter_languages_highlight_powershell",2693:"react-syntax-highlighter_languages_highlight_tap",2727:"react-syntax-highlighter_languages_highlight_q",2743:"react-syntax-highlighter_languages_highlight_asciidoc",2762:"react-syntax-highlighter_languages_highlight_haskell",2795:"react-syntax-highlighter_languages_highlight_dns",2871:"react-syntax-highlighter_languages_highlight_typescript",2882:"react-syntax-highlighter_languages_highlight_sml",2979:"react-syntax-highlighter_languages_highlight_plaintext",2981:"react-syntax-highlighter_languages_highlight_ruleslanguage",2983:"react-syntax-highlighter_languages_highlight_golo",3146:"react-syntax-highlighter_languages_highlight_purebasic",3193:"react-syntax-highlighter_languages_highlight_xml",3299:"react-syntax-highlighter_languages_highlight_fix",3357:"react-syntax-highlighter_languages_highlight_x86asm",3384:"react-syntax-highlighter_languages_highlight_ini",3418:"react-syntax-highlighter_languages_highlight_ruby",3419:"react-syntax-highlighter_languages_highlight_nix",3487:"react-syntax-highlighter_languages_highlight_mipsasm",3500:"react-syntax-highlighter_languages_highlight_autoit",3540:"react-syntax-highlighter_languages_highlight_moonscript",3562:"react-syntax-highlighter_languages_highlight_gams",3580:"react-syntax-highlighter_languages_highlight_csp",3607:"react-syntax-highlighter_languages_highlight_abnf",3623:"react-syntax-highlighter_languages_highlight_yaml",3722:"react-syntax-highlighter_languages_highlight_latex",3736:"react-syntax-highlighter_languages_highlight_json",3811:"react-syntax-highlighter_languages_highlight_erb",3885:"react-syntax-highlighter_languages_highlight_stata",3923:"react-syntax-highlighter_languages_highlight_applescript",3988:"react-syntax-highlighter_languages_highlight_vala",4014:"react-syntax-highlighter_languages_highlight_scss",4075:"react-syntax-highlighter_languages_highlight_hsp",4110:"react-syntax-highlighter_languages_highlight_tp",4135:"react-syntax-highlighter_languages_highlight_mizar",4282:"react-syntax-highlighter_languages_highlight_livecodeserver",4300:"react-syntax-highlighter_languages_highlight_r",4342:"react-syntax-highlighter_languages_highlight_php",4383:"react-syntax-highlighter_languages_highlight_dsconfig",4436:"react-syntax-highlighter_languages_highlight_zephir",4446:"react-syntax-highlighter_languages_highlight_leaf",4493:"react-syntax-highlighter_languages_highlight_gauss",4575:"react-syntax-highlighter_languages_highlight_processing",4635:"react-syntax-highlighter_languages_highlight_jbossCli",4733:"react-syntax-highlighter_languages_highlight_llvm",4835:"react-syntax-highlighter_languages_highlight_cos",4931:"react-syntax-highlighter_languages_highlight_step21",4956:"react-syntax-highlighter_languages_highlight_angelscript",4971:"react-syntax-highlighter_languages_highlight_lsl",5034:"react-syntax-highlighter_languages_highlight_ada",5051:"react-syntax-highlighter_languages_highlight_coffeescript",5099:"react-syntax-highlighter_languages_highlight_nsis",5123:"react-syntax-highlighter_languages_highlight_erlang",5189:"react-syntax-highlighter_languages_highlight_dts",5251:"react-syntax-highlighter_languages_highlight_pgsql",5253:"react-syntax-highlighter_languages_highlight_clojureRepl",5286:"react-syntax-highlighter_languages_highlight_nginx",5446:"react-syntax-highlighter_languages_highlight_ocaml",5565:"react-syntax-highlighter_languages_highlight_kotlin",5613:"react-syntax-highlighter_languages_highlight_rib",5664:"react-syntax-highlighter_languages_highlight_dos",5773:"react-syntax-highlighter_languages_highlight_mojolicious",5813:"react-syntax-highlighter_languages_highlight_less",5819:"react-syntax-highlighter_languages_highlight_gradle",5868:"react-syntax-highlighter_languages_highlight_inform7",5900:"react-syntax-highlighter_languages_highlight_lasso",6057:"react-syntax-highlighter_languages_highlight_sqlMore",6152:"react-syntax-highlighter_languages_highlight_vbscriptHtml",6161:"react-syntax-highlighter_languages_highlight_clean",6177:"react-syntax-highlighter_languages_highlight_taggerscript",6195:"react-syntax-highlighter_languages_highlight_ldif",6228:"react-syntax-highlighter_languages_highlight_rust",6267:"react-syntax-highlighter_languages_highlight_swift",6354:"react-syntax-highlighter_languages_highlight_java",6501:"react-syntax-highlighter_languages_highlight_armasm",6512:"react-syntax-highlighter_languages_highlight_scala",6542:"react-syntax-highlighter_languages_highlight_vim",6555:"react-syntax-highlighter_languages_highlight_openscad",6573:"react-syntax-highlighter_languages_highlight_cpp",6780:"react-syntax-highlighter_languages_highlight_qml",6835:"react-syntax-highlighter_languages_highlight_brainfuck",6848:"react-syntax-highlighter_languages_highlight_crystal",6924:"react-syntax-highlighter_languages_highlight_isbl",6977:"react-syntax-highlighter_languages_highlight_rsl",6986:"react-syntax-highlighter_languages_highlight_capnproto",7048:"react-syntax-highlighter_languages_highlight_gherkin",7079:"react-syntax-highlighter_languages_highlight_diff",7131:"react-syntax-highlighter_languages_highlight_protobuf",7209:"react-syntax-highlighter_languages_highlight_perl",7247:"react-syntax-highlighter_languages_highlight_cmake",7254:"react-syntax-highlighter_languages_highlight_subunit",7351:"react-syntax-highlighter_languages_highlight_elixir",7401:"react-syntax-highlighter_languages_highlight_sas",7406:"react-syntax-highlighter_languages_highlight_sql",7439:"react-syntax-highlighter_languages_highlight_flix",7533:"react-syntax-highlighter_languages_highlight_awk",7572:"react-syntax-highlighter_languages_highlight_basic",7764:"react-syntax-highlighter_languages_highlight_go",7776:"react-syntax-highlighter_languages_highlight_haml",7794:"react-syntax-highlighter_languages_highlight_http",7818:"react-syntax-highlighter_languages_highlight_arduino",7879:"react-syntax-highlighter_languages_highlight_csharp",7934:"react-syntax-highlighter_languages_highlight_glsl",7959:"react-syntax-highlighter_languages_highlight_htmlbars",8001:"react-syntax-highlighter_languages_highlight_matlab",8030:"react-syntax-highlighter_languages_highlight_handlebars",8058:"react-syntax-highlighter_languages_highlight_n1ql",8078:"react-syntax-highlighter_languages_highlight_delphi",8138:"react-syntax-highlighter_languages_highlight_elm",8140:"react-syntax-highlighter_languages_highlight_pf",8216:"react-syntax-highlighter_languages_highlight_bnf",8217:"react-syntax-highlighter_languages_highlight_twig",8331:"react-syntax-highlighter_languages_highlight_thrift",8338:"react-syntax-highlighter_languages_highlight_objectivec",8549:"react-syntax-highlighter_languages_highlight_c",8595:"react-syntax-highlighter_languages_highlight_hy",8705:"react-syntax-highlighter_languages_highlight_nodeRepl",8725:"react-syntax-highlighter_languages_highlight_smalltalk",8727:"react-syntax-highlighter/lowlight-import",8753:"react-syntax-highlighter_languages_highlight_mercury",8755:"react-syntax-highlighter_languages_highlight_tcl",8763:"react-syntax-highlighter_languages_highlight_routeros",8833:"react-syntax-highlighter_languages_highlight_markdown",8874:"react-syntax-highlighter_languages_highlight_smali",8903:"react-syntax-highlighter_languages_highlight_axapta",8904:"react-syntax-highlighter_languages_highlight_python",8948:"react-syntax-highlighter_languages_highlight_groovy",9078:"react-syntax-highlighter_languages_highlight_irpf90",9118:"react-syntax-highlighter_languages_highlight_juliaRepl",9139:"react-syntax-highlighter_languages_highlight_django",9162:"react-syntax-highlighter_languages_highlight_ceylon",9175:"react-syntax-highlighter_languages_highlight_vbscript",9229:"react-syntax-highlighter_languages_highlight_julia",9265:"react-syntax-highlighter_languages_highlight_dart",9406:"react-syntax-highlighter_languages_highlight_cal",9612:"react-syntax-highlighter_languages_highlight_bash",9702:"react-syntax-highlighter_languages_highlight_gcode",9726:"react-syntax-highlighter_languages_highlight_xl",9882:"react-syntax-highlighter_languages_highlight_arcade"}[h]||h)+"."+{51:"398821bc",200:"ec6dcb85",206:"2a731c96",355:"03fbe69b",371:"d21547ac",456:"2fa19d50",460:"9d147707",464:"90c854b8",484:"0f14ed84",557:"759151ed",579:"9e839a4f",634:"f5205fb2",879:"5586eb52",927:"98b5c6a4",946:"dcb71e1b",985:"395e094b",1062:"4aade745",1084:"92a592fb",1099:"0150129d",1173:"d895b0be",1177:"8a132318",1214:"94efedfe",1276:"0af23910",1325:"da522a20",1352:"6f5ca059",1362:"dc14bf1a",1418:"ba4abe07",1441:"72759cea",1461:"fadd64fc",1489:"f7168e86",1496:"4d729c7f",1522:"f14dfb32",1613:"d0efdf1d",1638:"d05a145f",1679:"f4633d22",1694:"76bb18e6",1727:"78f69648",1750:"815285ab",1828:"8d74a5da",1895:"a8384635",1942:"b7babff4",1956:"a85bd1ff",1961:"4f0b6fd1",1972:"7a4f4479",2007:"367b9d4b",2064:"df25a87e",2108:"23a9d70b",2180:"12196182",2234:"33ce8694",2267:"ef85c7cf",2346:"ad939d98",2362:"a489443b",2378:"290581df",2383:"bd3ba4a8",2438:"8cf3e288",2488:"2b680338",2496:"f012a2ad",2512:"25275ccb",2516:"33c5bf1a",2665:"af69eede",2693:"7130a4a7",2727:"941c6907",2743:"152f09f7",2762:"d9340fe5",2795:"dc25b8ff",2871:"c34f4a3c",2882:"e3364573",2925:"fb37895f",2976:"25d76433",2979:"5cbbd1c3",2981:"748eba78",2983:"6db410fa",3144:"e5597703",3146:"e08de2e0",3193:"2395e077",3299:"6402cffa",3357:"80aec286",3384:"7de6311a",3418:"e7033ca9",3419:"63a3513c",3487:"34325602",3500:"4fa9217d",3540:"e1d5b7e0",3562:"8657e746",3580:"122a8394",3607:"3972a206",3623:"03fe8c60",3657:"48ef65b9",3722:"e45995f7",3736:"266423b9",3811:"86f73d37",3885:"cff06d92",3923:"796872f7",3988:"14c54e21",4014:"d162017e",4041:"a6f18305",4075:"1c75a114",4110:"2159ecc4",4135:"2802185a",4282:"3090e441",4300:"b8c61c9a",4342:"b1a22d44",4383:"35a943f1",4436:"51f5ba22",4446:"ae8ad7e5",4493:"24d167d0",4575:"475b7eb1",4635:"98326d92",4733:"0d8a1b6a",4835:"17a4ff16",4931:"8bcb3038",4956:"eb742521",4971:"3fbed501",5007:"6ae00f42",5034:"3d3668d6",5051:"20a03ed1",5099:"63df003e",5123:"cf7529ba",5189:"996825cd",5251:"b78676d9",5253:"79ad9209",5286:"4cdf3f4b",5414:"9b4cf2e3",5446:"e7172d83",5478:"b00338df",5565:"04e6e7ae",5613:"c34e68c1",5664:"b19c3c13",5773:"4db6963c",5813:"b6990393",5819:"dd836175",5868:"dfebad66",5900:"2eb02153",6057:"80203ae2",6152:"f4e5db69",6161:"964cbca4",6177:"26c31f11",6195:"9454f4f8",6228:"d04d2070",6267:"e0e633f7",6354:"73500a51",6392:"ffde0d57",6501:"346799b3",6512:"e7b613bb",6542:"9c60ca45",6555:"227c32b7",6573:"15de2a7a",6780:"3be8ea56",6835:"1bbfaf68",6848:"78c42494",6924:"69ff71f9",6977:"7b1b736b",6986:"60edb5eb",7048:"fbf4f499",7079:"4c2508d2",7131:"e8702a80",7209:"0d239eb6",7247:"b9893b38",7254:"0ef6721b",7326:"40da83d2",7351:"12ef75cd",7388:"97b871e0",7401:"336870eb",7406:"e446a92f",7439:"854e763c",7531:"b3ba3863",7533:"ef233533",7572:"b818b2a9",7764:"882fcecc",7776:"4b34e84c",7794:"4354350d",7818:"02f5a27e",7879:"31bc7b7c",7934:"bde8c1b5",7959:"c6328018",8001:"1eecade8",8030:"79fc9d36",8058:"0f4127ec",8078:"a7a4bfb4",8138:"28da2e68",8140:"fd1e9945",8216:"ad112749",8217:"310a1544",8331:"86d093e7",8338:"1a66b8e8",8549:"46194a22",8595:"b33380f7",8690:"d8bb88a8",8705:"75d7fb14",8725:"8c87df94",8727:"008e1526",8753:"098cc520",8755:"4bebe53d",8763:"c9b31c6e",8821:"17029bc6",8833:"0bd916ae",8874:"2298ecda",8903:"899f87d0",8904:"74025624",8948:"4e865986",9078:"0482e3a2",9118:"d141f572",9139:"c4c30538",9162:"dba4756d",9175:"f5539303",9229:"32bdfde6",9265:"6315ace2",9406:"7f0c11f3",9612:"e3a11799",9702:"d5dd703f",9726:"52ff4e29",9829:"d83d1055",9882:"ab8737a6"}[h]+".chunk.js",m.miniCssF=h=>{},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(h){if("object"==typeof window)return window}}(),m.o=(h,g)=>Object.prototype.hasOwnProperty.call(h,g),e={},a="internal.backstage-plugin-visual-app-interface:",m.l=(h,g,t,i)=>{if(e[h])e[h].push(g);else{var l,r;if(void 0!==t)for(var n=document.getElementsByTagName("script"),s=0;s<n.length;s++){var _=n[s];if(_.getAttribute("src")==h||_.getAttribute("data-webpack")==a+t){l=_;break}}l||(r=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,m.nc&&l.setAttribute("nonce",m.nc),l.setAttribute("data-webpack",a+t),l.src=h),e[h]=[g];var c=(g,a)=>{l.onerror=l.onload=null,clearTimeout(u);var t=e[h];if(delete e[h],l.parentNode&&l.parentNode.removeChild(l),t&&t.forEach((h=>h(a))),g)return g(a)},u=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),r&&document.head.appendChild(l)}},m.r=h=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},m.nmd=h=>(h.paths=[],h.children||(h.children=[]),h),(()=>{m.S={};var h={},g={};m.I=(e,a)=>{a||(a=[]);var t=g[e];if(t||(t=g[e]={}),!(a.indexOf(t)>=0)){if(a.push(t),h[e])return h[e];m.o(m.S,e)||(m.S[e]={});var i=m.S[e],l="internal.backstage-plugin-visual-app-interface",r=(h,g,e,a)=>{var t=i[h]=i[h]||{},r=t[g];(!r||!r.loaded&&(!a!=!r.eager?a:l>r.from))&&(t[g]={get:e,from:l,eager:!!a})},n=[];return"default"===e&&(r("@backstage/core-plugin-api","1.9.1",(()=>Promise.all([m.e(8821),m.e(5478),m.e(7326),m.e(1638)]).then((()=>()=>m(11638))))),r("@backstage/version-bridge","1.0.7",(()=>Promise.all([m.e(5478),m.e(7388)]).then((()=>()=>m(97388))))),r("@material-ui/core/styles","4.12.4",(()=>Promise.all([m.e(2976),m.e(5478),m.e(1942)]).then((()=>()=>m(92976))))),r("@material-ui/styles","4.11.5",(()=>Promise.all([m.e(5414),m.e(5478),m.e(355)]).then((()=>()=>m(15414))))),r("react-dom","18.2.0",(()=>Promise.all([m.e(3144),m.e(5478)]).then((()=>()=>m(43144))))),r("react-router-dom","6.22.3",(()=>Promise.all([m.e(1613),m.e(3657),m.e(5478),m.e(484),m.e(9829)]).then((()=>()=>m(73657))))),r("react-router","6.22.3",(()=>Promise.all([m.e(1613),m.e(8690),m.e(5478)]).then((()=>()=>m(18690))))),r("react","18.2.0",(()=>m.e(4041).then((()=>()=>m(14041)))))),h[e]=n.length?Promise.all(n).then((()=>h[e]=1)):1}}})(),(()=>{var h;m.g.importScripts&&(h=m.g.location+"");var g=m.g.document;if(!h&&g&&(g.currentScript&&(h=g.currentScript.src),!h)){var e=g.getElementsByTagName("script");if(e.length)for(var a=e.length-1;a>-1&&(!h||!/^http(s?):/.test(h));)h=e[a--].src}if(!h)throw new Error("Automatic publicPath is not supported in this browser");h=h.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=h})(),t=h=>{var g=h=>h.split(".").map((h=>+h==h?+h:h)),e=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(h),a=e[1]?g(e[1]):[];return e[2]&&(a.length++,a.push.apply(a,g(e[2]))),e[3]&&(a.push([]),a.push.apply(a,g(e[3]))),a},i=(h,g)=>{h=t(h),g=t(g);for(var e=0;;){if(e>=h.length)return e<g.length&&"u"!=(typeof g[e])[0];var a=h[e],i=(typeof a)[0];if(e>=g.length)return"u"==i;var l=g[e],r=(typeof l)[0];if(i!=r)return"o"==i&&"n"==r||"s"==r||"u"==i;if("o"!=i&&"u"!=i&&a!=l)return a<l;e++}},l=h=>{var g=h[0],e="";if(1===h.length)return"*";if(g+.5){e+=0==g?">=":-1==g?"<":1==g?"^":2==g?"~":g>0?"=":"!=";for(var a=1,t=1;t<h.length;t++)a--,e+="u"==(typeof(r=h[t]))[0]?"-":(a>0?".":"")+(a=2,r);return e}var i=[];for(t=1;t<h.length;t++){var r=h[t];i.push(0===r?"not("+n()+")":1===r?"("+n()+" || "+n()+")":2===r?i.pop()+" "+i.pop():l(r))}return n();function n(){return i.pop().replace(/^\((.+)\)$/,"$1")}},r=(h,g)=>{if(0 in h){g=t(g);var e=h[0],a=e<0;a&&(e=-e-1);for(var i=0,l=1,n=!0;;l++,i++){var s,_,c=l<h.length?(typeof h[l])[0]:"";if(i>=g.length||"o"==(_=(typeof(s=g[i]))[0]))return!n||("u"==c?l>e&&!a:""==c!=a);if("u"==_){if(!n||"u"!=c)return!1}else if(n)if(c==_)if(l<=e){if(s!=h[l])return!1}else{if(a?s>h[l]:s<h[l])return!1;s!=h[l]&&(n=!1)}else if("s"!=c&&"n"!=c){if(a||l<=e)return!1;n=!1,l--}else{if(l<=e||_<c!=a)return!1;n=!1}else"s"!=c&&"n"!=c&&(n=!1,l--)}}var u=[],o=u.pop.bind(u);for(i=1;i<h.length;i++){var f=h[i];u.push(1==f?o()|o():2==f?o()&o():f?r(f,g):!o())}return!!o()},n=(h,g)=>{var e=h[g];return Object.keys(e).reduce(((h,g)=>!h||!e[h].loaded&&i(h,g)?g:h),0)},s=(h,g,e,a)=>"Unsatisfied version "+e+" from "+(e&&h[g][e].from)+" of shared singleton module "+g+" (required "+l(a)+")",_=(h,g,e,a)=>{var t=n(h,e);return r(a,t)||c(s(h,e,t,a)),u(h[e][t])},c=h=>{"undefined"!=typeof console&&console.warn&&console.warn(h)},u=h=>(h.loaded=1,h.get()),o=(h=>function(g,e,a,t){var i=m.I(g);return i&&i.then?i.then(h.bind(h,g,m.S[g],e,a,t)):h(0,m.S[g],e,a,t)})(((h,g,e,a,t)=>g&&m.o(g,e)?_(g,0,e,a):t())),f={},y={9490:()=>o("default","@backstage/core-plugin-api",[0],(()=>Promise.all([m.e(8821),m.e(5478),m.e(7326),m.e(1638)]).then((()=>()=>m(11638))))),95478:()=>o("default","react",[0],(()=>m.e(4041).then((()=>()=>m(14041))))),42469:()=>o("default","react-router-dom",[0],(()=>Promise.all([m.e(1613),m.e(3657),m.e(484),m.e(9829)]).then((()=>()=>m(73657))))),64218:()=>o("default","@backstage/version-bridge",[0],(()=>m.e(5007).then((()=>()=>m(97388))))),11942:()=>o("default","@material-ui/styles",[0],(()=>m.e(5414).then((()=>()=>m(15414))))),40484:()=>o("default","react-dom",[0],(()=>m.e(3144).then((()=>()=>m(43144))))),9829:()=>o("default","react-router",[0],(()=>m.e(8690).then((()=>()=>m(18690))))),37976:()=>o("default","@material-ui/core/styles",[0],(()=>()=>m(92976)))},d={484:[40484],879:[9490],1942:[11942],5478:[95478],6392:[37976],7326:[42469,64218],9829:[9829]},x={},m.f.consumes=(h,g)=>{m.o(d,h)&&d[h].forEach((h=>{if(m.o(f,h))return g.push(f[h]);if(!x[h]){var e=g=>{f[h]=0,m.m[h]=e=>{delete m.c[h],e.exports=g()}};x[h]=!0;var a=g=>{delete f[h],m.m[h]=e=>{throw delete m.c[h],g}};try{var t=y[h]();t.then?g.push(f[h]=t.then(e).catch(a)):e(t)}catch(h){a(h)}}}))},(()=>{var h={2622:0};m.f.j=(g,e)=>{var a=m.o(h,g)?h[g]:void 0;if(0!==a)if(a)e.push(a[2]);else if(/^(1942|484|5478|7326|9829)$/.test(g))h[g]=0;else{var t=new Promise(((e,t)=>a=h[g]=[e,t]));e.push(a[2]=t);var i=m.p+m.u(g),l=new Error;m.l(i,(e=>{if(m.o(h,g)&&(0!==(a=h[g])&&(h[g]=void 0),a)){var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+g+" failed.\n("+t+": "+i+")",l.name="ChunkLoadError",l.type=t,l.request=i,a[1](l)}}),"chunk-"+g,g)}};var g=(g,e)=>{var a,t,[i,l,r]=e,n=0;if(i.some((g=>0!==h[g]))){for(a in l)m.o(l,a)&&(m.m[a]=l[a]);r&&r(m)}for(g&&g(e);n<i.length;n++)t=i[n],m.o(h,t)&&h[t]&&h[t][0](),h[t]=0},e=self.webpackChunkinternal_backstage_plugin_visual_app_interface=self.webpackChunkinternal_backstage_plugin_visual_app_interface||[];e.forEach(g.bind(null,0)),e.push=g.bind(null,e.push.bind(e))})(),m(11004)})());
//# sourceMappingURL=internal.backstage-plugin-visual-app-interface.1db48e00640693fe4880.js.map
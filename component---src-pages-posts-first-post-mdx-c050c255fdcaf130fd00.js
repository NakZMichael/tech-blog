/*! For license information please see component---src-pages-posts-first-post-mdx-c050c255fdcaf130fd00.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[96],{9806:function(e,t,n){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i;switch(n=n||{},a.util.type(t)){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var s in r={},n[i]=r,t)t.hasOwnProperty(s)&&(r[s]=e(t[s],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(s[o]=n[o]);n.hasOwnProperty(l)||(s[l]=i[l])}var u=r[e];return r[e]=s,a.languages.DFS(a.languages,(function(t,n){n===u&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,r,i){i=i||{};var s=a.util.objId;for(var l in t)if(t.hasOwnProperty(l)){n.call(t,l,t[l],r||l);var o=t[l],u=a.util.type(o);"Object"!==u||i[s(o)]?"Array"!==u||i[s(o)]||(i[s(o)]=!0,e(o,n,l,i)):(i[s(o)]=!0,e(o,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,s=0;i=r.elements[s++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){var s=a.util.getLanguage(n),l=a.languages[s];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var u={element:n,language:s,grammar:l,code:n.textContent};function c(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),i&&i.call(u.element)}if(a.hooks.run("before-sanity-check",u),!u.code)return a.hooks.run("complete",u),void(i&&i.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var g=new Worker(a.filename);g.onmessage=function(e){c(e.data)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(a.highlight(u.code,u.grammar,u.language));else c(a.util.encode(u.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var r=new l;return o(r,r.head,e),s(e,r,t,r.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:r};function r(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function i(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var i=r[1].length;r.index+=i,r[0]=r[0].slice(i)}return r}function s(e,t,n,l,c,g){for(var p in n)if(n.hasOwnProperty(p)&&n[p]){var d=n[p];d=Array.isArray(d)?d:[d];for(var h=0;h<d.length;++h){if(g&&g.cause==p+","+h)return;var f=d[h],m=f.inside,v=!!f.lookbehind,y=!!f.greedy,b=f.alias;if(y&&!f.pattern.global){var k=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,k+"g")}for(var x=f.pattern||f,w=l.next,F=c;w!==t.tail&&!(g&&F>=g.reach);F+=w.value.length,w=w.next){var A=w.value;if(t.length>e.length)return;if(!(A instanceof r)){var E,S=1;if(y){if(!(E=i(x,F,e,v)))break;var $=E.index,_=E.index+E[0].length,N=F;for(N+=w.value.length;$>=N;)N+=(w=w.next).value.length;if(F=N-=w.value.length,w.value instanceof r)continue;for(var j=w;j!==t.tail&&(N<_||"string"==typeof j.value);j=j.next)S++,N+=j.value.length;S--,A=e.slice(F,N),E.index-=F}else if(!(E=i(x,0,A,v)))continue;$=E.index;var C=E[0],Z=A.slice(0,$),P=A.slice($+C.length),T=F+A.length;g&&T>g.reach&&(g.reach=T);var B=w.prev;Z&&(B=o(t,B,Z),F+=Z.length),u(t,B,S),w=o(t,B,new r(p,m?a.tokenize(C,m):C,b,C)),P&&o(t,w,P),S>1&&s(e,t,n,w.prev,F,{cause:p+","+h,reach:T})}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function o(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function u(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=a,r.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},s=t.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(i.classes,s):i.classes.push(s)),a.hooks.run("wrap",i);var l="";for(var o in i.attributes)l+=" "+o+'="'+(i.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+l+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,s=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),s&&e.close()}),!1),a):a;var c=a.util.currentScript();function g(){a.manual||a.highlightAll()}if(c&&(a.filename=c.src,c.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var p=document.readyState;"loading"===p||"interactive"===p&&c&&c.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==n.g&&(n.g.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},a.languages.insertBefore("markup","cdata",i)}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:e.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},n.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,function(){if("undefined"!=typeof self&&self.Prism&&self.document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=window.Prism,t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",a="loading",r="loaded",i='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',s=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",(function(e){e.selector+=", "+i})),e.hooks.add("before-sanity-check",(function(s){var l=s.element;if(l.matches(i)){s.code="",l.setAttribute(n,a);var u=l.appendChild(document.createElement("CODE"));u.textContent="Loading…";var c=l.getAttribute("data-src"),g=s.language;if("none"===g){var p=(/\.(\w+)$/.exec(c)||[,"none"])[1];g=t[p]||p}o(u,g),o(l,g);var d=e.plugins.autoloader;d&&d.loadLanguages(g);var h=new XMLHttpRequest;h.open("GET",c,!0),h.onreadystatechange=function(){var t,a;4==h.readyState&&(h.status<400&&h.responseText?(l.setAttribute(n,r),u.textContent=h.responseText,e.highlightElement(u)):(l.setAttribute(n,"failed"),h.status>=400?u.textContent=(t=h.status,a=h.statusText,"✖ Error "+t+" while fetching file: "+a):u.textContent="✖ Error: File does not exist or is empty"))},h.send(null)}})),e.plugins.fileHighlight={highlight:function(t){for(var n,a=(t||document).querySelectorAll(i),r=0;n=a[r++];)e.highlightElement(n)}};var l=!1;e.fileHighlight=function(){l||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),l=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function o(e,t){var n=e.className;n=n.replace(s," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}()},6264:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return F},default:function(){return S}});var a=n(9756),r=n(7294),i=n(4983),s=n(6198),l=n(3751),o=n(9806),u=n.n(o),c=n(920),g=n(8063),p=(0,c.Z)((function(e){return{codeBox:{color:"#fff",backgroundColor:"#222",lineHeight:"1.6em",fontSize:16,paddingLeft:"18px",paddingRight:"18px",paddingTop:"10px",paddingBottom:"10px",overflow:"scroll"}}})),d=n(453),h=(0,c.Z)((function(e){return{h1:{margin:e.spacing(4,"auto"),fontWeight:"bold"}}})),f=(0,c.Z)((function(e){return{h2:{margin:e.spacing(2,"auto"),fontWeight:"bold"}}})),m=(0,c.Z)((function(e){return{h3:{margin:e.spacing(1,"auto"),fontWeight:"bold"}}})),v=(0,c.Z)((function(e){return{p:{margin:e.spacing(0,"auto")}}})),y=n(1293),b=(0,c.Z)((function(e){return{root:{"& iframe":{maxWidth:"100%"}},wrapper:{"& iframe":{maxWidth:"100%"},margin:e.spacing(1,"auto")}}}));var k={h1:function(e){var t=e.children,n=h();return r.createElement(d.Z,{variant:"h2",component:"h1",className:n.h1},t)},h2:function(e){var t=e.children,n=f();return r.createElement(d.Z,{variant:"h4",component:"h2",className:n.h2},t)},h3:function(e){var t=e.children,n=m();return r.createElement(d.Z,{variant:"h6",component:"h3",className:n.h3},t)},p:function(e){var t=e.children,n=v();return r.createElement(d.Z,{variant:"body1",component:"p",className:n.p},t)},code:function(e){var t=e.children,n=p(),a=u().highlight(t.toString(),u().languages.javascript,"javascript");return r.createElement(g.Z,{className:n.codeBox},r.createElement("div",{dangerouslySetInnerHTML:{__html:a}}))},wrapper:function(e){var t=e.children,n=b();return r.Children.toArray(t).map((function(e){return r.createElement("div",{className:n.wrapper},e)}))}},x=function(e){var t=b();return r.createElement(s.I,null,r.createElement(l.Z,{title:e.pageContext.frontmatter.title,description:e.pageContext.frontmatter.description}),r.createElement(y.Z,{maxWidth:"md",className:t.root},r.createElement(i.Zo,{components:k},e.children)))},w=n(3332),F={},A={_frontmatter:F},E=x;function S(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)(E,Object.assign({},A,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Gatsbyでブログを作ってみました"),(0,i.kt)("p",null,"ここ二週間くらいReactにどハマりしてるので",(0,i.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/"},"Gatsby"),"を使ってブログを作ってみました。"),(0,i.kt)("p",null,"正直、GatsbyはあまりReactを書いているという\n気持ちになれない(プラグインの設定の方が大変だったりする。)のですが、\n今までサーバーサイドをやることばかりだったのでSEOとか色々勉強できてためになりました。"),(0,i.kt)("h2",null,"Gatsbyを選んだ理由"),(0,i.kt)("p",null,"前々からブログを作りたいと思っていたのですが、一応エンジニアの端くれとしては\n自分で手作りしたブログの方がいいだろうとこだわりを持ってしまったために\nブログを始める心理的コストが大幅に上がってしまっていました。"),(0,i.kt)("p",null,"そんななか、",(0,i.kt)("a",{parentName:"p",href:"https://material-ui.com/"},"Material-UI"),"の便利さが身に染みて\nこれなら僕も簡単にブログ作れるんじゃないか？と思っていたところにGatsbyの存在を\n知って作ってみようと思いました。"),(0,i.kt)("p",null,"GatsbyとNext.jsで悩みましたが、テンプレートの豊富さや、チュートリアルがブログ作り\nになっていることから始めるにあたってのコストが低そうだと思いGatsbyを選びました。(この決断があたっていたのか怪しい、実際テンプレート使ってないし、、、)"),(0,i.kt)("h2",null,"ブログに持たせたかった機能"),(0,i.kt)("p",null,"ほしかった機能として、"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"マークダウンで簡単に書ける"),(0,i.kt)("li",{parentName:"ul"},"ブログ内でJavaScriptのコードを実行できる"),(0,i.kt)("li",{parentName:"ul"},"レイアウトを柔軟に変更できる"),(0,i.kt)("li",{parentName:"ul"},"できるだけReactから逸脱しない(Material-UI使わないとダサい画面しか作れないので、、、)")),(0,i.kt)("p",null,"あたりの機能が欲しいと思っていたのですが、MDXというマークダウンの拡張を使えば\n比較的簡単に作れることがわかったのでそれで作ってみました。"),(0,i.kt)("h2",null,"MDXはすごいですね"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import Button from \'@material-ui/core/Button\';\n\n<Button variant="outlined" color="primary">\n    Primary\n</Button>\n<Button variant="contained" color="secondary">\n    Secondary\n</Button>\n')),(0,i.kt)("p",null,"試しにこんなコードを書いてみます。(この文字の真下に上と同じコードが書かれています！！)"),(0,i.kt)(w.Z,{variant:"outlined",color:"primary",mdxType:"Button"},"Primary"),(0,i.kt)(w.Z,{variant:"contained",color:"secondary",mdxType:"Button"},"Secondary"),(0,i.kt)("p",null,"今風のボタンがこんなに簡単に作れる凄い!!便利!!!\n",(0,i.kt)("strong",{parentName:"p"},"Material-UI"),"最高!!"),(0,i.kt)("h2",null,"難しかった点"),(0,i.kt)("p",null,"Reactに毛が生えたような知識で大丈夫かなと思ってたのですが、\nなかなかGatsby特有の知識が必要で大変でした。"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gats-by-config.js"),"とか",(0,i.kt)("inlineCode",{parentName:"p"},"gatsby-node.js"),"っていうプラグインの設定弄ってる時間の方が\nブログの画面作ってる時間より圧倒的に長かったです。"),(0,i.kt)("p",null,"Reactと比べても仕方ないとは思うのですが、ドキュメントが少ないのがつらいですね。"),(0,i.kt)("p",null,"あと、一番嫌なのは開発サーバを使うときにキャッシュファイルが悪さをして、\nさっきは動いてたのに今は動かねえとかなりがちなのがつらいですね。"),(0,i.kt)("h2",null,"今後改良したい点"),(0,i.kt)("p",null,"まず、indexのページがめちゃくちゃ雑なので丁寧に作り直したいです。\n他にもタグ機能とか検索機能(検索機能は必要ないか？)とかetc...作りたいなと思っています。"),(0,i.kt)("p",null,"一応、技術ブログにしようかなと思っているのでもう少しMDXを柔軟に書けるようにファイル構成とか少し直した方がいいかなと思っています。"),(0,i.kt)("p",null,"もう少しGatsbyに慣れたらブログの作り方についての解説とか自分なりにしたいなとか思っています。\n(公式のチュートリアルもかなり丁寧なんだけども、Reactにある程度慣れてる身からすると説明して欲しいのはそこじゃない感があったので)"),(0,i.kt)("h3",null,"パンダの動画"),(0,i.kt)("p",null,"GatsbyのTutorialで使われてた動画です。\n特に意味はないですが、スマホの画面で大きさを調節するのが難しかったので記念に載せておきます。"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/4n0xNbfJLR8",frameBorder:"0",allowFullScreen:!0}))}S.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-first-post-mdx-c050c255fdcaf130fd00.js.map
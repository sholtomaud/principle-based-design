(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="modulepreload",m=function(r){return"/principle-based-design/"+r},u={},a=function(o,n,l){return!n||n.length===0?o():Promise.all(n.map(e=>{if(e=m(e),e in u)return;u[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":p,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t)return new Promise((d,f)=>{i.addEventListener("load",d),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};document.querySelectorAll("[data-route]").forEach(r=>{r.addEventListener("click",o=>{o.preventDefault();const n=o.target.dataset.route;window.history.pushState({},"",n),c(n)})});window.addEventListener("popstate",r=>{r.preventDefault(),c(window.location.pathname)});function c(r){switch(r){case"/one":a(()=>import("./page-one.984a6c59.js"),["assets/page-one.984a6c59.js","assets/card.1606fb40.js","assets/content.31d6e008.js"]).then(()=>{document.querySelector("#router-outlet").innerHTML="<app-page-one></app-page-one>"});break;case"/two":a(()=>import("./page-two.55de44b9.js"),["assets/page-two.55de44b9.js","assets/content.31d6e008.js"]).then(()=>{document.querySelector("#router-outlet").innerHTML="<app-page-two></app-page-two>"});break;default:a(()=>import("./home-page.c85825ab.js"),["assets/home-page.c85825ab.js","assets/card.1606fb40.js","assets/content.31d6e008.js"]).then(()=>{document.querySelector("#router-outlet").innerHTML="<home-page></home-page>"});break}}window.onload=()=>{c(window.location.pathname)};

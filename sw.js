if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const c=e=>i(e,r),l={module:{uri:r},exports:o,require:c};s[r]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-B11gtfLb.css",revision:null},{url:"assets/index-bGL2j1y7.js",revision:null},{url:"index.html",revision:"c84417efa0422c6ff84addacf248d534"},{url:"registerSW.js",revision:"4a4c04bbc256bdede21cf608c620c019"},{url:"manifest.webmanifest",revision:"2f37d1d08a0a501960231c44ff69bc3d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));


const CACHE='crt-v20';
const ASSETS=['./index.html','./manifest.json','./offline.html','./icons/icon-192.png','./icons/icon-512.png','./service-worker.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{const ks=await caches.keys(); await Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))); await self.clients.claim();})());});
self.addEventListener('fetch',e=>{
  const req=e.request, url=new URL(req.url);
  if(req.mode==='navigate'){
    e.respondWith((async()=>{ try{const fresh=await fetch(req); const c=await caches.open(CACHE); c.put(req,fresh.clone()); return fresh;}catch(e){ const c=await caches.open(CACHE); return (await c.match('./offline.html'))||Response.error(); } })()); return;
  }
  if(ASSETS.some(a=>url.pathname.endsWith(a.replace('./','')))){ e.respondWith(caches.match(req).then(r=>r||fetch(req))); }
});

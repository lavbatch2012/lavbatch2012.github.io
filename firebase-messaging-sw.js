// Push-only service worker for LAV Batch 2012 (does not touch your existing sw.js)
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{let j={};try{j=e.data.json()}catch(x){}
 const d=j.data||j.notification||j;
 e.waitUntil(self.registration.showNotification(d.title||'LAV Batch 2012',{body:d.body||'',tag:d.tag||'lav',renotify:true,icon:'/logo-192.png',badge:'/logo-192.png'}))});
self.addEventListener('notificationclick',e=>{e.notification.close();
 e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus' in c)return c.focus()}return self.clients.openWindow('/')}))});

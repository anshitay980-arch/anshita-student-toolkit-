const CACHE_NAME = 'toolkit-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './Dashboard.html',
  './todo.html',
  './Unit converter.html',
  './todo.css',
  './converter.css',
  './script.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/pwaluispinta/',
        '/pwaluispinta/index.html',
        '/pwaluispinta/manifest.json',
        'https://lh3.googleusercontent.com/5KHUjAAU4ydb31wxLamRJToyagXbxV0CDL0NU33RFSQBn12L2QbK75AsLhgYibDo9tk'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

 Minimal Service Worker required for PWA installation criteria
self.addEventListener('fetch', function(event) {
     Allows the app to fetch items live from the network
    event.respondWith(fetch(event.request));
});
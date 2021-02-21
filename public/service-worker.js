importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const cacheName = 'stale-with-revalidate'

const { routing, strategies } = workbox

console.log('Hello from service-worker.js!');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`, routing);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

// implements staleWhileRevalidate to all routes
routing.registerRoute(
    () => true,
    new strategies.StaleWhileRevalidate({ cacheName }),
)

// removes all caches not named <cacheName>
const invalidateOldCache = async() => {
    const keys = await caches.keys()
    const isOldCache = (key) => key !== cacheName
    const oldKeys = keys.filter(isOldCache)

    return Promise.all(oldKeys.map((key) => caches.delete(key)))
}

// runs invalidateOldCache on activation
self.addEventListener('activate', (e) => e.waitUntil(invalidateOldCache()))
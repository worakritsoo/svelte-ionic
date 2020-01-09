importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// for testing purposes
if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

// for testing purposes
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log('Time ', time);

// remove line if you want to have default behaviour (no debugging in prod)
workbox.setConfig({ debug: true });


// https://medium.com/@webmaxru/workbox-4-implementing-refresh-to-update-version-flow-using-the-workbox-window-module-41284967e79c
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// remove if not needed
workbox.googleAnalytics.initialize();


//
// Caching strategies and routes
// https://developers.google.com/web/tools/workbox/modules/workbox-strategies
// https://developers.google.com/web/tools/workbox/guides/route-requests 
//
workbox.routing.registerRoute(
    new RegExp('https://cdn.jsdelivr.net/npm/@ionic'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'ionic-cdn',
    })
);

workbox.routing.registerRoute(
    // Cache CSS files.
    /\.css$/,
    // Use cache but update in the background.
    new workbox.strategies.StaleWhileRevalidate({
        // Use a custom cache name.
        cacheName: 'css-cache',
    })
);

workbox.routing.registerRoute(
    // Cache image files.
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    // Use the cache if it's available.
    new workbox.strategies.CacheFirst({
        // Use a custom cache name.
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                // Cache only 20 images.
                maxEntries: 20,
                // Cache for a maximum of a week.
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ],
    })
);

// Use precache CLI to update sw-config.js 
// https://developers.google.com/web/tools/workbox/guides/precache-files/cli
workbox.precaching.precacheAndRoute([]);
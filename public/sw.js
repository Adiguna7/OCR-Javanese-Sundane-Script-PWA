importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

workbox.setConfig({ // Perintah awakutu
     debug: true // nilai true untuk melakukan pengawakutuan dan false jika tidak ingin menjalankan perintah awakutu
});

workbox.routing.registerRoute( // Perintah untuk melakukan registrasi CSS sebagai tembolok
     // Tembolok untuk ekstensi file CSS
     new RegExp('.*\.(?:css)'),
     // Gunakan CSS sebagai tembolok dan perbarui di latar belakang
     new workbox.strategies.StaleWhileRevalidate({ 
          // Nama untuk tembolok CSS
          cacheName: 'css-cache',
          plugins: [
               new workbox.expiration.ExpirationPlugin({
                    // maxEntries adalah jumlah entri yang akan Anda daftar sebagai tembolok
                    maxEntries: 20
               })
          ]
     })
);

workbox.routing.registerRoute( // Perintah untuk melakukan registrasi CSS sebagai tembolok
    // Tembolok untuk ekstensi file json
    new RegExp('.*\.(?:json)'),
    // Gunakan CSS sebagai tembolok dan perbarui di latar belakang
    new workbox.strategies.StaleWhileRevalidate({ 
         // Nama untuk tembolok json
         cacheName: 'json-cache',
         plugins: [
              new workbox.expiration.ExpirationPlugin({
                   // maxEntries adalah jumlah entri yang akan Anda daftar sebagai tembolok
                   maxEntries: 20
              })
         ]
    })
);

workbox.routing.registerRoute( // Perintah untuk melakukan registrasi JavaScript sebagai tembolok
     // Tembolok untuk ekstensi file JS
     new RegExp('.*\.(?:js)'),
     // Gunakan JavaScript sebagai tembolok
     new workbox.strategies.NetworkFirst({
          // Nama untuk tembolok JavaScript
          cacheName: 'js-cache',
          plugins: [
               new workbox.expiration.ExpirationPlugin({
                    // maxEntries adalah jumlah entri yang akan Anda daftar sebagai tembolok
                    maxEntries: 20
               })
          ]
     })
);

workbox.routing.registerRoute( // Perintah untuk melakukan registrasi beberapa ekstensi gambar sebagai tembolok
     // Tembolok untuk gambar yang berekstensi .png, .jpg, .jpeg, .svg, .gif, .ico, dan .webp
     new RegExp('.*\.(?:png|jpg|jpeg|svg|gif|ico|webp)'),
     new workbox.strategies.CacheFirst({
          // Nama untuk tembolok gambar
          cacheName: 'img-cache',
          plugins: [
               new workbox.expiration.ExpirationPlugin({
                    // maxEntries adalah jumlah entri yang akan Anda daftar sebagai tembolok
                    maxEntries: 50,
                    // maxAgeSeconds adalah jangka waktu kadaluarsa tembolok
                    // contoh tembolok gambar maksimal digunakan untuk 1 minggu
                    maxAgeSeconds: 30 * 24 * 60 * 60,
               })
          ]
     })
);

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(
          [
            '/src/main.js',
            '/index.html'
          ]
        );
      })
    );
});
  
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  
workbox.routing.registerRoute( // Perintah untuk melakukan registrasi Google Fonts sebagai tembolok
    // Tembolok untuk semua file dari fonts.gstatic.com
    // Biasanya fon berekstensi .woff2, .woff, atau .eot
    new RegExp('https://fonts.gstatic.com/.*'),
    new workbox.strategies.CacheFirst({
         // Nama tembolok untuk fon dari Google Fonts
         cacheName: 'google-webfonts',
         plugins: [
              // Untuk mengetahui respon header
              new workbox.cacheableResponse.CacheableResponsePlugin({
                   statuses: [0, 200],
              }),
              new workbox.expiration.ExpirationPlugin({
                   // maxEntries adalah jumlah entri yang akan Anda daftar sebagai tembolok
                   maxEntries: 4,
                   // Disimpan dalam jangka waktu 1 tahun
                   maxAgeSeconds: 60 * 60 * 24 * 365,
                   }),
          ],
    }),
);

workbox.routing.registerRoute( // Perintah untuk melakukan registrasi CSS di Google Fonts sebagai tembolok
    // Tembolok untuk semua file CSS dari fonts.googleapis.com
    new RegExp('https://fonts.googleapis.com/.*'),
    new workbox.strategies.StaleWhileRevalidate({
         // Nama tembolok untuk CSS dari Google Fonts
         cacheName: 'google-stylesheets',
    }),
);

workbox.routing.registerRoute( // Perintah untuk melakukan registrasi CSS di Google Fonts sebagai tembolok
     // Tembolok untuk semua file CSS dari fonts.googleapis.com
     new RegExp('http://192.168.8.100:7000/file/string/*'),
     new workbox.strategies.StaleWhileRevalidate({
          // Nama tembolok untuk CSS dari Google Fonts
          cacheName: 'api-sunda',
     }),
 );

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          const fetchPromise = fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
          // So if there's a cached version available, use it,
          // but fetch an update for next time.
          return cachedResponse || fetchPromise;
        }
      )
    );
});

self.addEventListener('activate', event => {
     event.waitUntil(async function() {
       // Feature-detect
       if (self.registration.navigationPreload) {
         // Enable navigation preloads!
         await self.registration.navigationPreload.enable();
       }
     }());
   });
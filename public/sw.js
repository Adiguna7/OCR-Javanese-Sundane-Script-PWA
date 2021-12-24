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

workbox.precaching.precacheAndRoute([{"revision":"fe4792d482196a50cf9ae0d9d90b6493","url":"favicon.ico"},{"revision":"4631a5e6ce9dadb4165e1f1337665190","url":"favicon.png"},{"revision":"6bf49806d1fa707b2535c6660cc75fb0","url":"img/aksara-jawa.jpg"},{"revision":"709e85a5749b7249590a9e89ebae58e0","url":"img/aksara-sunda.png"},{"revision":"f8624a716c4efc245ad1550c657b5f98","url":"img/apple-icon.png"},{"revision":"de2191c18e4b6d39a3f4db0216aeeba7","url":"img/avatar.jpg"},{"revision":"68a465f11f51e70d94a3de1256948417","url":"img/bg_jawa.jpg"},{"revision":"5fb7cd3b85110f286ba3ac3fd8166698","url":"img/bg_sunda.jpg"},{"revision":"98b6b57a2e3ee1baf1b9ac76f9a04e09","url":"img/bg1.jpg"},{"revision":"a9af7315277ff3ef8f934dfb697a0f94","url":"img/bg11.jpg"},{"revision":"f77d0df953adcfedc2cab68651a1d01b","url":"img/bg3.jpg"},{"revision":"0d2fcd95f10ae4e12ce1797926337416","url":"img/bg4.jpg"},{"revision":"f68d9108445df3450b1eed7ae0256fc1","url":"img/bg5.jpg"},{"revision":"b52edc71669b103bd6bb4c2e06752c89","url":"img/bg6.jpg"},{"revision":"3577ca869eb32263043d315bdbe6b115","url":"img/bg6.png"},{"revision":"60c7b527decb93f6dfabf20c0653a83e","url":"img/bg7.jpg"},{"revision":"72e5cc8a11429fea5d30837873ab01e9","url":"img/bg8.jpg"},{"revision":"a434cb76f1ba1fcbb626e6df00b22f88","url":"img/blurred-image-1.jpg"},{"revision":"252d0ef3df24c2825f5b96a9b2d066fa","url":"img/creative-tim-white-slim2.png"},{"revision":"d25412bcd9af1fb98017c8144a4e40d1","url":"img/default-avatar.png"},{"revision":"a45d21dc739a3813031d84aab85793ff","url":"img/eva.jpg"},{"revision":"e02e5d259200258f7700de7de18eacef","url":"img/favicon.png"},{"revision":"ffae5b49b22752232bb79e2540b410e6","url":"img/flags/AD.png"},{"revision":"9168bfccba8c5e9883e9f3dd8cefab30","url":"img/flags/AE.png"},{"revision":"946d0200b0384925d565f794a7572c18","url":"img/flags/AG.png"},{"revision":"e5a9a1a1ec7aa89ed4b4469b37e21ff7","url":"img/flags/AM.png"},{"revision":"eea718bc102e8e2065c11355aa3ad0d0","url":"img/flags/AR.png"},{"revision":"d740d7b7ea424b467e7372a4311b1a4e","url":"img/flags/AT.png"},{"revision":"702fb8c567cd92b4f3c242abc84a8b56","url":"img/flags/AU.png"},{"revision":"06bf3c554058e5f0c8b6a194390f02f4","url":"img/flags/BE.png"},{"revision":"0c4d30db623fa35f836e9e60263f6a01","url":"img/flags/BF.png"},{"revision":"3fc230ef925b83f03164614c556dd900","url":"img/flags/BG.png"},{"revision":"504fc855b7b320a5c354fe952515178e","url":"img/flags/BO.png"},{"revision":"0a929a3f8a55e7a094af71b3b22033af","url":"img/flags/BR.png"},{"revision":"7f9948d341b02f396408a42310623a22","url":"img/flags/CA.png"},{"revision":"ee85c80761aaa83cd24d10642a47615b","url":"img/flags/CD.png"},{"revision":"77d5afad8cbe8d299b400c532c3bc2a5","url":"img/flags/CG.png"},{"revision":"499768194edcb526546efebd811d2117","url":"img/flags/CH.png"},{"revision":"cfc6b69796258e631bf05c642bb0fc66","url":"img/flags/CL.png"},{"revision":"29d3b491e7a899726ff1fc6ea0abc605","url":"img/flags/CM.png"},{"revision":"33325b9112ddd6a58621a592930b69e7","url":"img/flags/CN.png"},{"revision":"8e990cecca5e0fdb59c5dd779a2d7bf1","url":"img/flags/CO.png"},{"revision":"d801de5f0c303a41f2def6b80fad1eba","url":"img/flags/CZ.png"},{"revision":"64ababf7de758dcee0358c2c4d93a371","url":"img/flags/DE.png"},{"revision":"c5f10dde52377195a6f168c0b08a4366","url":"img/flags/DJ.png"},{"revision":"d166f79fc7b688c8a0349d867a1d4300","url":"img/flags/DK.png"},{"revision":"31244d6c73543b5cfca482817422b83c","url":"img/flags/DZ.png"},{"revision":"102002f8c93f9b6c42c7fe66b3b6a76a","url":"img/flags/EE.png"},{"revision":"bdd9e0c833e009930d41ae5566f5d26f","url":"img/flags/EG.png"},{"revision":"0a24aaf06122455409745ab168cfc623","url":"img/flags/ES.png"},{"revision":"e4e2074c56a134e3b471b53b7ad42800","url":"img/flags/FI.png"},{"revision":"595fab5dcc858350b9212b794579f1d4","url":"img/flags/FR.png"},{"revision":"48743f21b6d85d4b66ebf8ee96d5db36","url":"img/flags/GA.png"},{"revision":"b0d54b4089ce5e24c82574109f346289","url":"img/flags/GB.png"},{"revision":"d3c87fcddc4c6fcfe77611963238a8e6","url":"img/flags/GM.png"},{"revision":"4778f258f9a25c7e514db5421145b2f9","url":"img/flags/GT.png"},{"revision":"42fdb86a16afedd75f9e737f2a093f80","url":"img/flags/header.png"},{"revision":"3a3cec6d768674435c49aef16c87bf3a","url":"img/flags/HN.png"},{"revision":"c0673ba8fa5c7043582c1efede6ef665","url":"img/flags/HT.png"},{"revision":"4660e392d5c78467928a5246600091ac","url":"img/flags/HU.png"},{"revision":"8888a78555674a0c84ca586086ce9e94","url":"img/flags/ID.png"},{"revision":"82bb195d64b7bd6ec832ee2dc5285b23","url":"img/flags/IE.png"},{"revision":"3db9a7e5267e389eb5aa575ca1ec154c","url":"img/flags/IL.png"},{"revision":"0c97a4f2d4564b44b9de7684fcd8af18","url":"img/flags/IN.png"},{"revision":"3a006f96c210b7936911904a05b4fb73","url":"img/flags/IQ.png"},{"revision":"2bbfb21840cd2c0a254cd53d88f42967","url":"img/flags/IR.png"},{"revision":"48a59d634410d15d82dcb88f7cebc508","url":"img/flags/IT.png"},{"revision":"0eadd5760094da2bbf33a8115f89e37d","url":"img/flags/JM.png"},{"revision":"df1a0a02be51c1cd4aa4150cf3ca9302","url":"img/flags/JO.png"},{"revision":"21990e6e4346bd5fee9eb7b55a33975d","url":"img/flags/JP.png"},{"revision":"260058586c3200d5b3e1a98b83e2ca45","url":"img/flags/KG.png"},{"revision":"4278bb9fcc5623cc628b347e71b500e0","url":"img/flags/KN.png"},{"revision":"a6f0671583f284511c15dd0f5699f9ac","url":"img/flags/KP.png"},{"revision":"5d0d776b1bb248e35f88b2dc257e5b5f","url":"img/flags/KR.png"},{"revision":"6caa4301b592f93b983fe888d5c9ad07","url":"img/flags/KW.png"},{"revision":"af4bd6986ebb32717beb18b31b50bd39","url":"img/flags/KZ.png"},{"revision":"2f2ce7f845a56b90d1982426745a1d09","url":"img/flags/LA.png"},{"revision":"02491209272ee9bc81b090403511c691","url":"img/flags/LB.png"},{"revision":"e99ec9c52af8dea860f3ea884b1433a6","url":"img/flags/LC.png"},{"revision":"073946f1bfc0aa0e6743afab85e6848c","url":"img/flags/LS.png"},{"revision":"2bc84ce5ad68db19ace5119420fdba35","url":"img/flags/LU.png"},{"revision":"5fb045380f7ad3487409ce2af10728b6","url":"img/flags/LV.png"},{"revision":"edfa2dfdb2551052767acd7938374baa","url":"img/flags/MG.png"},{"revision":"8c97ad244d665f9123829592f0ab88a3","url":"img/flags/MK.png"},{"revision":"ff6c3c5c5fea9b4adb2bd8deb9c4d722","url":"img/flags/ML.png"},{"revision":"fcd47c6f985b66a7ad86ef3b519e6ff2","url":"img/flags/MM.png"},{"revision":"40895217bdceee9036748003f392d253","url":"img/flags/MT.png"},{"revision":"f8e36bc535b537ace1ed3b6c63d8a296","url":"img/flags/MX.png"},{"revision":"8813f493a360e10761def23ce962ffcf","url":"img/flags/NA.png"},{"revision":"e39c18ca0bded51a94f19c160cdf10d6","url":"img/flags/NE.png"},{"revision":"b9ecabc4248bf9b1a3512b5f60c6db5f","url":"img/flags/NG.png"},{"revision":"6eff63f979b44a6a71f45a5d940f17c8","url":"img/flags/NI.png"},{"revision":"bca8ad92bcbcd391038f1667196777b4","url":"img/flags/NL.png"},{"revision":"78c18dbad83b935a0ecc73840035558d","url":"img/flags/NO.png"},{"revision":"c5be07ce4951f687e1586a6ce58a9947","url":"img/flags/OM.png"},{"revision":"7659ca2b833eb7ed107155f9833b1f36","url":"img/flags/PA.png"},{"revision":"77a40046461b62d9a06821fcc8448d26","url":"img/flags/PE.png"},{"revision":"6a7da3edcf795455a04f5e66f763103c","url":"img/flags/PG.png"},{"revision":"c9dc1209804a2d10a8b43517536c4f0a","url":"img/flags/PK.png"},{"revision":"0ff145e6a6fb004815b5fd5b4b38c9e7","url":"img/flags/PL.png"},{"revision":"4a7ca1c211b5eacb89dfcc5177b2e5bd","url":"img/flags/PT.png"},{"revision":"16427f482c975426213129d5d01f230c","url":"img/flags/PY.png"},{"revision":"45ceb622fa28515a1f2a51a6be9d4c29","url":"img/flags/QA.png"},{"revision":"54c7e270d82bafb7a5ae359aa1d318a3","url":"img/flags/RO.png"},{"revision":"552becbf856795ead9259582f1147d10","url":"img/flags/RU.png"},{"revision":"80efd563bcba3445fd9375a1ae18a0ba","url":"img/flags/RW.png"},{"revision":"21f4f0750c78a21904f733a7dbdb97ae","url":"img/flags/SA.png"},{"revision":"2216335387c0d5f0cbba3c44e8b18da0","url":"img/flags/SE.png"},{"revision":"df781933a34b8ed37bf6b501993d0850","url":"img/flags/SG.png"},{"revision":"0ce579b6544e7717002c3bf3da1f4881","url":"img/flags/SL.png"},{"revision":"c73d6ab916708d8dd6ac3a82370daada","url":"img/flags/SN.png"},{"revision":"f257434f5e5b8b5f3ca82b30fb4f2016","url":"img/flags/SO.png"},{"revision":"198954997eaf0a0428f7f64b23bd797a","url":"img/flags/SV.png"},{"revision":"c9adb3d99e093fcf518ea5e722b77893","url":"img/flags/TD.png"},{"revision":"3dafc7558952adb83c9db058960984a9","url":"img/flags/TJ.png"},{"revision":"309277a08ecbf3d09134141874495283","url":"img/flags/TL.png"},{"revision":"a77c8d32dfb99227583c9030f53a6def","url":"img/flags/TR.png"},{"revision":"2563cd341decc23d4eff441c0519fb99","url":"img/flags/TZ.png"},{"revision":"1fece065bc3d5c093e323fbf6c33ddf8","url":"img/flags/UA.png"},{"revision":"2f88ea36fc94779a8f2e65c2ee8ccc76","url":"img/flags/US.png"},{"revision":"f1002d4b065c608c320fa4a3e45c8678","url":"img/flags/VE.png"},{"revision":"f9d81765bb971419c49a7f9993d22d26","url":"img/flags/VN.png"},{"revision":"4d7e0395fe48368d583cdc0db0ecc67b","url":"img/flags/YE.png"},{"revision":"da7c12f09b32964b7b1fca037ba32f0a","url":"img/header.jpg"},{"revision":"865ef33f08bc1ef92df8d44ffbd46087","url":"img/hero-image-3.png"},{"revision":"bd5470d484bdc288142ed17291600f0c","url":"img/invision-white-slim.png"},{"revision":"0b9930f341a64444c51bfe864e79a567","url":"img/julie.jpg"},{"revision":"a044d104927e4192adcd569937778f51","url":"img/landing.jpg"},{"revision":"304cb8469b5bbab7e887f4eee450efa1","url":"img/login.jpg"},{"revision":"cbb43ad03715a6fbf68b4e545e2ec30d","url":"img/logo-ocr.png"},{"revision":"523c9c3fff717567fd53470f27fda94c","url":"img/logo-square.jpg"},{"revision":"ac76a0e7c74ed493355be51bcf10bb5f","url":"img/logo.png"},{"revision":"ddad15c490caed4c4e7e0bb779c17adf","url":"img/no_image.png"},{"revision":"7e82584da3add793adab40d93e519179","url":"img/now-logo.png"},{"revision":"e6634ff6ddfe1f3ac0c998e87637fc4f","url":"img/profile.jpg"},{"revision":"1f5de1c7a4727a55a5663bd2e91d97e1","url":"img/ryan.jpg"},{"revision":"f59ea4a8b0e6e1e8be6b90eec2875e4d","url":"index.html"},{"revision":"7c041bcec6bbde5fa5df547bae5fb0c9","url":"manifest.json"}]);
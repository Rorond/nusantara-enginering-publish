'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "245fefb4a0cc0ef0eee8d25320227a84",
"index.html": "5824e0798425549ec1bd5faae6465b18",
"/": "5824e0798425549ec1bd5faae6465b18",
"main.dart.js": "4d8b07ed8ca4a7427efcac2d8b809a84",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "4afb626310f8746b5341ccb766ebaacc",
"icons/Icon-192.png": "c36d36b74f08c58265892b5ae500ab79",
"icons/Icon-maskable-192.png": "c36d36b74f08c58265892b5ae500ab79",
"icons/Icon-maskable-512.png": "807123bf36644832083cdec29d75732c",
"icons/Icon-512.png": "807123bf36644832083cdec29d75732c",
"manifest.json": "7ba23dba67c3e90a0a78b352c4968095",
"assets/AssetManifest.json": "b2df0bb974f2a7a5e9c41c45ace31e94",
"assets/NOTICES": "604e7d41fdb27bb86fff4b467f272aa8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "4ce954c23571b572e3ee5d8da017c6cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "adac17b5b2a0c6ebbb29b9bfbb03c91e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "476c5ff7d86fb2f69d8e870411454de4",
"assets/fonts/MaterialIcons-Regular.otf": "ccf2e55a11408db55ffe830f4ca71de7",
"assets/assets/clients/8.png": "90cee60a17e56c622a56803fef1ec126",
"assets/assets/clients/9.png": "d01c5fefd306fa1d2f0c5aadfff8534d",
"assets/assets/clients/14.png": "f757ef31e3a8420003da46fb3200ff62",
"assets/assets/clients/15.png": "7b9fa80f5c7b8f0c98d5e975625e5b8b",
"assets/assets/clients/17.png": "33c9a70b58bbfc38498a82e769232ca0",
"assets/assets/clients/12.png": "6e73f66b915055c7296c27e10427e85d",
"assets/assets/clients/13.png": "725bcaf4d53f585bd1b04b7ac926ad2f",
"assets/assets/clients/11.png": "732a9bbe13c6447ddbeef149d027c8e8",
"assets/assets/clients/10.png": "fe9608e754b6fc83301123b8175a8506",
"assets/assets/clients/21.png": "50b420536b549237b0e859ec87339439",
"assets/assets/clients/20.png": "26f69e47f958776b9e88dc67e1fb4972",
"assets/assets/clients/22.png": "471d882f73fe07d868c755aead78e4ea",
"assets/assets/clients/18.png": "f4563f8fdf59ba14d04ab095768b12d6",
"assets/assets/clients/19.png": "380b1ac0525ebe978b5c0e88016e1ce4",
"assets/assets/clients/4.png": "7853e9df145f59397762e4655a11024f",
"assets/assets/clients/5.png": "6caa6254cdc2986b16594635b3e5417d",
"assets/assets/clients/7.png": "856b5805cf15b935bde8a79273264e18",
"assets/assets/clients/6.png": "eb274045d689491416c38d448864ba32",
"assets/assets/clients/2.png": "96383a175f63db0290ee916e9345ad01",
"assets/assets/clients/3.png": "4db930eb30b8af5831290307b34b00ca",
"assets/assets/clients/1.png": "0b49c34788eacf11bde227219fc969cd",
"assets/assets/images/service_white.png": "953f3f4df5f9ce905781f48a2bfacbb3",
"assets/assets/images/background.jpeg": "e058cbe9fdf637dd569267d7daf451d1",
"assets/assets/images/ico_logo.png": "b031397c4b165257255926db7e51eb54",
"assets/assets/images/service_primary.png": "6c9ff58fcaf62d6c24dc2f9e4b69cfda",
"assets/assets/images/logo.png": "d637af4ef3e914163b11c5434740a486",
"assets/assets/images/ico_why_us.png": "5d7c34d33a1f5c5548a48e41d70e09ea",
"assets/assets/icons/ico_logo.png": "5a5206a5d490d1f56b9fd98be4f8f5c3",
"assets/assets/lottie/why_us.json": "fafa6837ce701380a47e01a32e0aa743",
"assets/assets/lottie/about.json": "f03a650ddd9172043ecc717b6f746e58",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

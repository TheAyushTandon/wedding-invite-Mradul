const CACHE_NAME = "wedding-invite-v4";
const STATIC_ASSETS = [
  "/",
  "/favicon.svg",
  "/image copy.png",
  "/image copy 4.png",
  "/assets/opening/stamp-custom.png",
  "/assets/hero/main-home-page.jpeg",
  "/assets/hero/couple-bg.png",
  "/assets/shared/all-page.jpeg",
  "/assets/audio/background-music.mp3",
  "/assets/shared/monogram-ms-crest.png",
];

// Install Event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn("Service worker asset pre-cache partial fail", err);
      });
    })
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Never intercept Next.js chunks, hot reloads, or API requests
  if (url.pathname.startsWith("/_next/") || url.pathname.startsWith("/api/")) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          })
          .catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        })
        .catch(() => {
          // Only fallback to root HTML on page navigations, NEVER for JS scripts or CSS
          if (event.request.mode === "navigate") {
            return caches.match("/");
          }
          return new Response("", { status: 408, statusText: "Offline" });
        });
    })
  );
});

const CACHE_NAME = "Silat Codingv-11";
var urlsToCache = [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
    "/",
    "/manifest.json",
    "/css/Main.css",
    "/css/materialize.min.css",
    "/Js/Main.js",
    "/Js/materialize.min.js",
    "/Js/Helper/ComponentLoad.js",
    "/Js/Helper/PageLoad.js",
    "/Pages/home.html",
    "/Pages/Build.html",
    "/Pages/Price.html",
    "/Pages/About.html",
    "/Components/menu.html",
    "/Images/silat.png",
    "/Images/bs_bg.jpeg",
    "/Images/css_bg.jpg",
    "/Images/sass_bg.jpg",
    "/Images/arrow_down.svg",
    "/Images/x_square.svg",
    "/Images/react.jpg",
    "/Images/vue.png",
    "/Images/node.png",
    "/Images/pwa.png",
    "/Images/angular.webp",
    "/Images/deno.png",
    "/Images/svelte.png",
    "/Images/grapql.png",
    "/Images/bs.png",
    "/Images/MS_ICON.png",
    "Images/Favicon/apple-icon-57x57.png",
    "Images/Favicon/apple-icon-60x60.png",
    "Images/Favicon/apple-icon-72x72.png",
    "Images/Favicon/apple-icon-76x76.png",
    "Images/Favicon/apple-icon-114x114.png",
    "Images/Favicon/apple-icon-120x120.png",
    "Images/Favicon/apple-icon-144x144.png",
    "Images/Favicon/apple-icon-152x152.png",
    "Images/Favicon/apple-icon-180x180.png",
    "Images/Favicon/android-icon-192x192.png",
    "Images/Favicon/favicon-32x32.png",
    "Images/Favicon/favicon-96x96.png",
    "Images/Favicon/favicon-16x16.png",
    "/Fonts/MA.woff2",
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});
self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches
            .match(event.request, { cacheName: CACHE_NAME })
            .then(function (response) {
                if (response) {
                    console.log(
                        "ServiceWorker: Gunakan aset dari cache: ",
                        response.url
                    );
                    return response;
                }

                console.log(
                    "ServiceWorker: Memuat aset dari server: ",
                    event.request.url
                );
                return fetch(event.request);
            })
    );
});
self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName != CACHE_NAME) {
                        console.log(
                            "ServiceWorker: cache " + cacheName + " dihapus"
                        );
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

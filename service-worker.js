"use strict";var precacheConfig=[["/toggle-for-azeroth/index.html","736ca519cd1a39b556eee819270f94bc"],["/toggle-for-azeroth/static/css/main.9c827441.css","a9b3e52e292c965b0ff26b35889c9bcb"],["/toggle-for-azeroth/static/js/main.f101e30b.js","29f2623d7690a7f313056de92dd244f2"],["/toggle-for-azeroth/static/media/Logo-alliance.bb36e70f.png","bb36e70f5f690a5fc510ed03e80aa259"],["/toggle-for-azeroth/static/media/Logo-horde.2a80e046.png","2a80e0466e51d85c8cf60336e16fe8b8"],["/toggle-for-azeroth/static/media/fa-brands-400.6814d0e8.woff2","6814d0e8136d34e313623eb7129d538e"],["/toggle-for-azeroth/static/media/fa-brands-400.83e6c29f.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["/toggle-for-azeroth/static/media/fa-brands-400.da408238.woff","da408238128b876cbda6424391f1566f"],["/toggle-for-azeroth/static/media/fa-brands-400.e8019d50.eot","e8019d507e8cb51d169ab4f94a0cda12"],["/toggle-for-azeroth/static/media/fa-brands-400.fdf44bc4.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["/toggle-for-azeroth/static/media/fa-regular-400.8d220c79.ttf","8d220c793e2612bd131ed8522c54669f"],["/toggle-for-azeroth/static/media/fa-regular-400.8d9ab84b.woff2","8d9ab84bfe87a3f77112a6698cf639fb"],["/toggle-for-azeroth/static/media/fa-regular-400.ba2a91dc.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["/toggle-for-azeroth/static/media/fa-regular-400.dad90637.woff","dad90637f797356bbc70d2664832e0b6"],["/toggle-for-azeroth/static/media/fa-regular-400.e6c93cb4.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["/toggle-for-azeroth/static/media/fa-solid-900.132e9759.ttf","132e9759d93e4eefd7cdde0d7a322991"],["/toggle-for-azeroth/static/media/fa-solid-900.2d0415fa.woff","2d0415fa29ea596b7a02c78eddeede20"],["/toggle-for-azeroth/static/media/fa-solid-900.b75b4bfe.woff2","b75b4bfe0d58faeced5006c785eaae23"],["/toggle-for-azeroth/static/media/fa-solid-900.de1d242d.svg","de1d242d8acb26ec43c0d071fe78e72d"],["/toggle-for-azeroth/static/media/fa-solid-900.ea363ed4.eot","ea363ed422723673917901680be9b37c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/toggle-for-azeroth/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
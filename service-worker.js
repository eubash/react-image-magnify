"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/react-image-magnify/index.html","d7e05e1996ef5c10ef03c490334ab995"],["/react-image-magnify/static/css/main.5ee5afcb.css","bf2cbde1f3f9e6999a7f59d543a01936"],["/react-image-magnify/static/js/main.42fb9cb9.js","e42e431ba6b4c32f2f01bb49dd48acea"],["/react-image-magnify/static/media/wristwatch_1033.57129acd.jpg","57129acd21594e9ee07f3f24ffeb7a26"],["/react-image-magnify/static/media/wristwatch_1112.2fccaaac.jpg","2fccaaacc86701ea04995d7256268b3f"],["/react-image-magnify/static/media/wristwatch_1192.0480af36.jpg","0480af368da9a37501814ea12a776c95"],["/react-image-magnify/static/media/wristwatch_1200.c9182206.jpg","c9182206837727bd05c687bc9eaa6f1b"],["/react-image-magnify/static/media/wristwatch_355.ba041e4f.jpg","ba041e4f91bc6515e83bbee1a98bb1d7"],["/react-image-magnify/static/media/wristwatch_481.d5fc37fa.jpg","d5fc37fa27924c4dde6c1fc4c300e984"],["/react-image-magnify/static/media/wristwatch_584.74be83b4.jpg","74be83b4ffd15084b2c2e6a5ded389d9"],["/react-image-magnify/static/media/wristwatch_687.8ea75ffc.jpg","8ea75ffcb8ac61777ed47ae430cc5160"],["/react-image-magnify/static/media/wristwatch_770.2e15efe8.jpg","2e15efe8b82116249d94f485b229106f"],["/react-image-magnify/static/media/wristwatch_861.476c0078.jpg","476c00781ee5b5403ed99d1b10200c75"],["/react-image-magnify/static/media/wristwatch_955.ab7038b1.jpg","ab7038b16a72fc52b97932e48fd806af"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/react-image-magnify/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
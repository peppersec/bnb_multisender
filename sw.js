importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0084fa5a2113ccf8d374.js",
    "revision": "747071c3059447fd810a6e015426b942"
  },
  {
    "url": "/_nuxt/2f4bb38ea537b0198501.js",
    "revision": "ee424a54e494b44331ebfc356e7b6f30"
  },
  {
    "url": "/_nuxt/5fec083c8fd3d288ebb4.js",
    "revision": "b3df6841c1d2456df334e143cf174ec8"
  },
  {
    "url": "/_nuxt/aa0d4dbb9e25b5177df4.js",
    "revision": "a3cd1fd37386a8024f0eeee7b63c4a67"
  },
  {
    "url": "/_nuxt/b75a06b81e1735bbb7df.js",
    "revision": "b115179e055a18a45e45f85b1966da2d"
  },
  {
    "url": "/_nuxt/d5e801c3c11977b3d4df.js",
    "revision": "bd5bbfc96aaba250a279a35869d6daef"
  },
  {
    "url": "/_nuxt/e46b37b7d205a8b2c011.js",
    "revision": "dec8da42a2c029ef5b1c1d445af3cadd"
  }
], {
  "cacheId": "algorand",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

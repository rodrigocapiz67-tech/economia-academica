const CACHE = 'economia-v1';
const CACHE_FIRST = [
  '/',
  '/index.html',
  '/404.html',
  '/economistas.html',
  '/datos-economicos.html',
  '/recursos.html',
  '/sitemap.xml',
  '/css/style.css',
  '/js/main.js',
  '/materias/macroeconomia.html',
  '/materias/microeconomia.html',
  '/materias/estadistica.html',
  '/materias/matematicas.html',
  '/materias/economia-politica.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(CACHE_FIRST))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.status === 200) {
        const clone = res.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match('/404.html')))
  );
});

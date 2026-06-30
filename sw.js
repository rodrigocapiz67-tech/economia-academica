const CACHE = 'economia-v2';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll([
      './',
      './index.html',
      './404.html',
      './economistas.html',
      './datos-economicos.html',
      './recursos.html',
      './css/style.css',
      './js/main.js',
      './materias/macroeconomia.html',
      './materias/microeconomia.html',
      './materias/estadistica.html',
      './materias/matematicas.html',
      './materias/economia-politica.html',
      './materias/simulador-hipotesis.html',
      './simulador-3d.html'
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.status === 200 && e.request.method === 'GET') {
        const clone = res.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match('./404.html')))
  );
});

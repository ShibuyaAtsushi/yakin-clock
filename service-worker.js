self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('Service worker activated');
});

// 通知を受け取ったときの処理
self.addEventListener('push', function(event) {
  const data = event.data?.json() || {};

  event.waitUntil(
    self.registration.showNotification(data.title || '通知', {
      body: data.body || 'メッセージがあります',
      icon: 'icon-192.png',
    })
  );
});

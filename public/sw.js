const CACHE_NAME = 'my-first-sw'
const urlsToCache = [

]
self.addEventListener('install',function(event){
    // 在install阶段可以预缓存些资源
    console.log(event,'event')
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log(cache,'cache_res')
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener('fetch',(event) => {
    event.respondWith(
        // 如果匹配到缓存直接返回
        caches.match(event.request).then(res => {
            console.log(res,'命中缓存')
            if (res) {
                return res
            }
            // 匹配失败则继续请求
            let request = event.request.clone() // 拷贝原始请求
            // 默认情况下，从不支持 CORS 的第三方网址中获取资源将会失败。
            // 可以向请求中添加 no-CORS 选项来克服此问题，不过这可能会导致“不透明”的响应，这意味着无法辨别响应是否成功。
            if (request.mode !== 'navigate' && request.url.indexOf(request.referrer) === -1) 						{
                request = new Request(request, { mode: 'no-cors' })
            }
            return fetch(request).then(function(httpRes) {
                // 拿到了http请求返回的数据，进行一些操作
                // 请求失败了则直接返回、对于post请求也直接返回，sw不能缓存post请求
                if (!httpRes  || ( httpRes.status !== 200 && httpRes.status !== 304 && httpRes.type !== 'opaque') || request.method === 'POST') {
                    return httpRes
                }

                // 请求成功的话，将请求缓存起来。
                const responseClone = httpRes.clone()
                caches.open('my-first-sw').then(function(cache) {
                    cache.put(event.request, responseClone)
                })
                return httpRes
            })
        })
    )
})
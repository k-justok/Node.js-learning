


### [hhhzk-blog](https://k-justok.github.io/2017/07/10/Node.js%E5%AD%A6%E4%B9%A0/%E5%A4%84%E7%90%86URL/)


运行过程中打开一次网页会有两次请求？


```
PS E:\github\Node.js-learning\url-koa> node review.js
app is listening on port 8080!
{ method: 'GET',
  url: '/',
  header:
   { host: 'localhost:8080',
     connection: 'keep-alive',
     'cache-control': 'max-age=0',
     'upgrade-insecure-requests': '1',
     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
     'accept-encoding': 'gzip, deflate, br',
     'accept-language': 'zh-CN,zh;q=0.8' } }
{ method: 'GET',
  url: '/favicon.ico',
  header:
   { host: 'localhost:8080',
     connection: 'keep-alive',
     pragma: 'no-cache',
     'cache-control': 'no-cache',
     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
     accept: 'image/webp,image/apng,image/*,*/*;q=0.8',
     referer: 'http://localhost:8080/',
     'accept-encoding': 'gzip, deflate, br',
     'accept-language': 'zh-CN,zh;q=0.8' } }

```
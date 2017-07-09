# koa入门
## 安装koa包
按照廖老师所给的第二种方法，利用配置package.json的方法来安装相应的包。
<strong>必须</strong>切换到hello-koa目录下安装

编写app.js，对于每个http请求，koa将调用我们传入的异步函数来处理：


![图1](http://upload-images.jianshu.io/upload_images/5531033-e83a6e5a2425fbb7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

输入<code>http://localhost:4000</code>

![图2](http://upload-images.jianshu.io/upload_images/5531033-7da4be86cf6c4312.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

也就是每收到一个http请求，koa都会调用app注册的函数，并且传入ctx和next参数。
为什么要设置<code>await next()</code>呢？
<blockquote>
原因是koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数。我们把每个async函数称为middleware，这些middleware可以组合起来，完成很多有用的功能。</blockquote>
——[koa入门——廖雪峰的官方网站]
(http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471087582981d6c0ea265bf241b59a04fa6f61d767f6000)
</br>
例如利用三个middleware组合起来完成一个处理链：

![图3](http://upload-images.jianshu.io/upload_images/5531033-2a358b0125a932fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

显示了两遍？原因？

![图4](http://upload-images.jianshu.io/upload_images/5531033-df0f90ba82983cdd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

请求了两遍？

如果不调用用<code>await next()</code>，则不会进行下一个middleware的工作。
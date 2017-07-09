---
title: 处理URL # 这是标题
categories:  # 这里写的分类会自动汇集到 categories 页面上，分类可以多级
- 代码学习 # 一级分类
- Node.js学习 # 二级分类 
tags:   # 这里写的标签会自动汇集到 tags 页面上
- 代码学习 # 可配置多个标签，注意格式
- Node.js学习
---






在hello-koa工程中，我们处理http请求一律返回相同的HTML，这样虽然非常简单，但是用浏览器一测，随便输入任何URL都会返回相同的网页。
正常情况下需要对不同的URL调用不同的处理函数。
可以通过<code>if...else...</code>的判断进行编写，但是应该存在一个能集中处理URL的middleware，它根据不同的URL调用不同的处理函数，这样，我们才能专心为每个URL编写处理函数。

## koa-router——处理get请求
作用：负责URL映射

拷贝hello-koa，安装koa-router。
对app.js进行修改


![图1](http://upload-images.jianshu.io/upload_images/5531033-27211946595025d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在浏览器输入<code>http://localhost:4000</code>

![图2](http://upload-images.jianshu.io/upload_images/5531033-4e2ae0ffd5099a14.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

同时


![图3](http://upload-images.jianshu.io/upload_images/5531033-53f23a59e84f735c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

当选择输入<code>[http://localhost:4000/hello/koa](http://localhost:3000/hello/koa)</code>


![图4](http://upload-images.jianshu.io/upload_images/5531033-4859ca332dc50fff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![图5](http://upload-images.jianshu.io/upload_images/5531033-ebdd4ff86861029f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## koa-bodyparser——处理post请求

在合适的位置加上：

<code>app.use(bodyParser());</code>
由于middleware的顺序很重要，这个<code>koa-bodyparser</code>必须在router之前被注册到app对象上。

写一个简单的登录表单
```
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});
```
运行如图

![图6](http://upload-images.jianshu.io/upload_images/5531033-03e0ee8d7c882fb5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

同时在浏览器中输入相应地址：

![图7](http://upload-images.jianshu.io/upload_images/5531033-75fd4470054b89da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

正确输入密码则显示：

![图8](http://upload-images.jianshu.io/upload_images/5531033-f23c5eb3708958a6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)”

说明对post的请求也可以正常处理
## 重构
app.js已经可以处理各类的URL，但是看着不好看。

复制一分url-koa命名为url2-koa，在新目录下创建一个index.js，利用这个index.js通过module.exports把两个URL处理函数暴露出来。

<strong>还未搞清楚，待解决</strong>
[处理URL——廖雪峰的官方网站](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471133885340dad9058705804899b1cc2d0a10e7dc80000#0)
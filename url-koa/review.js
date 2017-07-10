//导入koa
//和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

//注意require('koa-router')返回的是函数:
const router = require('koa-router')();

//创建一个Koa对象表示web app本身
const app = new Koa();

app.use(async (ctx, next) => {
    console.log(ctx.request);
});

app.listen(8080);
console.log('app is listening on port 8080!');
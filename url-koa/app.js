//导入koa
//和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

//注意require('koa-router')返回的是函数:
const router = require('koa-router')();

//创建一个Koa对象表示web app本身
const app = new Koa();

//log request URL
app.use(async (ctx, next) => {
    //获取URL的信息
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

//add url-rout
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Hello, koa2!</h1><p>student: hhhzk<p>';
});

//add router.middleware;
app.use(router.routes());

app.listen(4000);
console.log("app started at port 4000!");
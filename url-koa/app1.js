//引入koa
const Koa = require('koa');

//创建一个Koa对象
const app = new Koa();

//第一个middleware
app.use(async (ctx, next) => {
    console.log('1-1');
    await next();
});

//第二个middleware
app.use(async (ctx, next) => {
    console.log('2-1');
    await next();
    console.log('2-2');
});

//第三个middleware
app.use(async (ctx, next) => {
    console.log('3-1');
    await next();
    console.log('3-2');
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1><p>student: hhhzk</p>';
});

//在端口4000监听
app.listen(4000);
console.log('koa is running on port 4000!');
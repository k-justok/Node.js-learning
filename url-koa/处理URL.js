const Koa = require('koa');

const app = new Koa();

app.use(async(ctx,next) => {
    if (ctx.request.path == '/') {
        ctx.response.body = 'index.page';
        console.log('This is a index page!');
    } else {
        await next();
    }
});

app.use(async(ctx,next) => {
    if (ctx.request.path == '/test') {
        ctx.response.body = 'TEST.page';
        console.log('This is a test page!');
    } else {
        await next();
    }
});

app.use(async(ctx,next) => {
    if (ctx.request.path == '/error') {
        ctx.response.body = 'ERROR.page';
        console.log('This is a ERROR page!');
    } else {
        await next();
    }
});

app.listen(8080);
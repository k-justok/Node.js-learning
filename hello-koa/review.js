const Koa = new require('koa');

const app = new Koa();


app.use(async (ctx, next) => {
	await next();
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>第二天的复习</h1>';
});


app.use(async (ctx, next) => {
	console.log('1-1');
	await next();
	console.log('1-2');
});

app.use(async (ctx, next) => {
	console.log('2-1');
	console.log('2-2');
});

app.use(async (ctx, next) => {
	console.log(3-1);
});

app.listen(8080);
console.log('app is listening on port 8080');
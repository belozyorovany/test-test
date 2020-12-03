const Koa = require('koa');
const app = new Koa();

app.use(async(ctx, next) => {
  ctx.status = 200;
  ctx.body = 'Hello world!';
});

module.exports = app;

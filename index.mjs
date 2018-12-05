import Koa from 'koa';
import koaHead from 'koa-head';

const app = new Koa();

app
  .use(koaHead())
  .use(async (ctx, next) => {
    ctx.document.setTitle('Title for my webpage');
    ctx.document.addMetaTag({ name: 'twitter:card', content: 'summary_large_image' });
    await next();
  })
  .use(ctx => {
    ctx.body = ctx.state.document;
  });

app.listen(3333);
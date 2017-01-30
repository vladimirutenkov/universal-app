import Koa from 'koa';
import serve from 'koa-static';
import logger from 'koa-morgan';
import Router from 'koa-router';
import convert from 'koa-convert';
import webpack from 'webpack';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';
import config from './webpack.config.babel';

const app = new Koa();
const port = 3000;
const compiler = webpack(config);

app.use(convert(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath })));
app.use(convert(webpackHotMiddleware(compiler)));

app.use(logger('dev'));
app.use(serve('public'));

const router = Router();

router.get('*', async ctx => {
    const render = require('./client/js/server-render').default;
    const html = await render(ctx.request.url);

    ctx.status = 200;
    ctx.body = html;
});

app.use(router.routes());

compiler.plugin('done', () => {
    Object.keys(require.cache).forEach(id => {
        if (/\/client\//.test(id)) {
            delete require.cache[id];
        }
    });
});

app.listen(port, err => {
    if (err) {
        return console.error(err);              // eslint-disable-line no-console
    }
    console.log('==> Listening on port 3000');  // eslint-disable-line no-console
});

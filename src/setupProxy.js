const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://337se.duckdns.org:80/',
            changeOrigin: true
        })
    );
};

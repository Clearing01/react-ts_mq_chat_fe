const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'http://10.0.10.90:32320',
			changeOrigin: true,
			pathRewrite: {
				'^/api': '',
			},
		})
	);
};

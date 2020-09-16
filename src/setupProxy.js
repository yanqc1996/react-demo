// // 配置反向代理
// const proxy = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(proxy('/api', {
//         target: 'http://192.168.1.144:8181',
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: {
//             "^/api": "/"
//         },
//         // cookieDomainRewrite: "http://localhost:3000"
//     }));
//     app.use(proxy('/apc', {
//         target: 'http://172.19.5.34:9531',
//         secure: false,
//         changeOrigin: true,
//         pathRewrite: {
//             "^/apc": "/"
//         },
//     }));
// };
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', { target: 'http://localhost:5000/' }))
}

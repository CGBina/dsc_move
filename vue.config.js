//修改完之后vue.config之后要重启项目
module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: "9527",
        open: true,
        proxy: { //配置代理解决vue中跨域问题
            "/api": {
                target: "http://localhost:3000/api/", //代理的域名
                changeOrigin: true, //开启代理，允许跨域访问
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}
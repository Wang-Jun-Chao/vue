const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode: "development", // 生产模式 production，开发模式 development
    // 如果只有一个入口，使用字符串指定
    // entry: "./src/index.js",
    // 数组值，多入口文件
    // entry: [
    //     "./src/index.js",
    //     "./src/main.js"
    // ],

    // 对象格式，有多少个key可以输出多少个文件
    // entry: {
    //     one: "./src/index.js",
    //     two: "./src/index.js"
    // },

    entry: {

        vendor: ["./src/js/jquery.js", "./src/js/common.js"],
        index: "./src/js/index.js",
        cart: "./src/js/cart.js"
    },

    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks:["index", "vendor"],
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            template: "./src/cart.html",
            filename: "cart.html",
            chunks:["cart", "vendor"],

            // minify: {
            //     collapseWhitespace: true,
            //     removeComments: true
            // }
        })
    ]
}
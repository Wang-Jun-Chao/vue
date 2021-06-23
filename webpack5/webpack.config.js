const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode: "development", // 生产模式 production，开发模式 development
    // 如果只有一个入口，使用字符串指定
    entry: "./src/index.js",
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

    // entry:{
    //     onea: ["./src/main.js", "./src/index.js"],
    //     twob: "./src/index.js"
    // },

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
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ]
}
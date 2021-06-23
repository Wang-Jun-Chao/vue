const {resolve} = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
    // mode: "development", // 生产模式 production，开发模式 development
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

    // entry: {
    //
    //     vendor: ["./src/js/jquery.js", "./src/js/common.js"],
    //     index: "./src/js/index.js",
    //     cart: "./src/js/cart.js"
    // },

    entry:["./src/index.js", "./src/index.html"],

    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            // CSS打到HTML中
            // {test: /\.css$/, use: ["style-loader", "css-loader"]}, // 从右到左，从上到下
            // {test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"]}, // 从右到左，从上到下
            // {test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]}, // 从右到左，从上到下

            // 进行热替换时，只替换修改的样式文件
            {test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"]},

            // CSS打到单独文件中, MiniCssExtractPlugin.loader进行css公共提取，postcss-loader进行浏览器兼容处理
            // {test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]}, // 从右到左，从上到下
            {test: /\.less$/, use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader", "postcss-loader"]}, // 从右到左，从上到下
            {test: /\.scss$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"]}, // 从右到左，从上到下
            // {test: /\.(png|jpg|jpeg|gif)$/, use: ["url-loader", {loader: "file-loader", options: {}}]}, // 多个loader
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: "url-loader",
                options: {
                    publicPath: "./images/",
                    outputPath: "images/",
                    // 问题url-loader默认使用es6，html-loader使用的是commonjs
                    // 解决：关闭url-loader的es6模块化，使用commonjs解析
                    esModule: false,
                    limit: 1024 * 8, // 8kB以下的图片才打成BASE64
                    // name:"[hash]", // 默认文件命名
                    // name:"[hash].[ext]", // 文件命名
                    // name: "[hash:10].[ext]", // 文件命名
                    // name:"[name].[ext]", // 文件命名，原名
                    name: "[name][hash:10].[ext]", // 文件命名，原名
                }
            },
            {
                // 处理HTML中的文件
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    // https://blog.csdn.net/weixin_45226867/article/details/114445464
                    // 问题url-loader默认使用es6，html-loader使用的是commonjs
                    // 解决：关闭url-loader的es6模块化，使用commonjs解析
                    esModule: false,
                }
            },
            {
                // 打包资源文件
                // test: /\.(ttf|svg)$/,
                // html-webpack-plugin 5.3.1版本 使用 exclude 有bug, 参考：https://github.com/jantimon/html-webpack-plugin/issues/1589
                exclude: /\.(js|json|html|css|less|scss|png|jpg|jpeg|gif|bin)$/,
                loader: "file-loader",
                options: {
                    outputPath: "font/",
                    publicPath: "./font",
                    name: "[name][hash:8].[ext]"
                }
            },
            // {
            //     // eslint只检查js语法
            //     test: /\.js$/,
            //     // 第三方包不检查
            //     exclude: /node_modules/,
            //     loader: "eslint-loader",
            //     options: {
            //         fix: true
            //     }
            //
            // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            // minify: { // HTML压缩
            //     collapseWhitespace: true,
            //     removeComments: true
            // }
        }),
        new MiniCssExtractPlugin({
            filename: "index.css"
        }),
        // new OptimizeCssAssetsWebpackPlugin() // 进行CSS压缩
    ],

    // 在webpack5之后，需要添加此参数进行自动刷新
    target: "web",
    devServer:{
        port: 3001,
        compress: true,
        open: true, // 启动自动打开首页
        hot: true,
    }
}
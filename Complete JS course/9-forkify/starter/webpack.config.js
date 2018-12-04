const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill",'./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js",
    },
    devServer: {
        contentBase:"./dist",
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,

                use: {
                    loader:'babel-loader'
                }
            }
        ]
    }
};

// 第一步:安装3个包

//第二步,在webpack中配置modules-->rules

//第三步,编写.babelrc文件

//第四步,安装babel-polyfill,在本文件中设置新入口

//如果是babel6,必须安装babel-loader@7

//后边还需要学习SASS来编译CSS文件
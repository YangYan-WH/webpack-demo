const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: './js/main.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'lib'), // 必须使用绝对地址，输出文件夹
        filename: "es5.js", // 打包后输出文件的文件名
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },

        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].[hash].css")
    ]
}
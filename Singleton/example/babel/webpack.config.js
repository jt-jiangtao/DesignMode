const path = require('path')

module.exports = {
    entry:{
        main: "./src/main.js",
        main2: "./src/main2.js",
        singleton: "./src/singleton.js",
    }, // 入口文件
    output:{ // 输出
        path: path.join(__dirname,'webpack'), // 绝对路径
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test:/\.m?js$/,
                //  exclude 排除
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    mode: "development"
    // mode: "production"
}

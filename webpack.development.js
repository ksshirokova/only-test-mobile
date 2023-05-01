const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

module.exports = {
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    mode: "development",
    entry: "./src/index.tsx",
    
    devServer: {
        static: "./development",
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                }
            },
            
            {
                test: /.(css|sass)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
              },
        ]
        
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ]
}
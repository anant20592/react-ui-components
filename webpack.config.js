const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath: 'http://localhost:8000'
    },
    devServer : {
        port: 8000,
        historyApiFallback: true,
        allowedHosts: [
            'localhost.linkedin.clone.com',
            'localhost'
        ]
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        modules: [__dirname, "src","node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules:  [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader")
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                  }
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                  loader: 'url-loader',
                },
              },
            {
                test: /\.(scss|css)?$/,
                use: ["style-loader",
                {
                    loader: require.resolve("css-loader")
                },
                {
                    loader: require.resolve("sass-loader")
                }
                ]
            }
        ]
    }
}
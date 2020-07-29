const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: __dirname,
    entry: {
        vendor: [
            'react', 'react-dom', 'redux', 'react-redux', '@reduxjs/toolkit',
            'plotly.js'
        ],
    },
    mode: "production",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        library: "[name]"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            }
        ]
    },
    devtool: false,
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist", "[name]-manifest.json"),
            format: true,
            name: "[name]"
        })
    ]
};
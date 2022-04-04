"use strict"

const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve('src', 'app'),
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'web', 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    }
};

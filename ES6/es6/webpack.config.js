const webpack =require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './index.js',

    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },
    plugins: [
  new HtmlPlugin()
    ],
    loader: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    }
};

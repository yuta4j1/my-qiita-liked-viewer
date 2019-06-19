const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'electron-renderer',
    entry: {
        index: './src/renderer/index.tsx',
    },
    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
                use: ['ts-loader', 'eslint-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/renderer'),
            'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components')
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/template.html',
        chunksSortMode: 'dependency'
    })]
}
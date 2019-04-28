const path = require('path');

module.exports = {
    target: 'electron-renderer',
    entry: './src/renderer/index.tsx',
    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // resolve: {
    //     alias: {
    //         '@': path.resolve(__dirname, 'src/renderer/')
    //     }
    // }
}
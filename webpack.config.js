const path = require('path');

module.exports = {
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
    }
}
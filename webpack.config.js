const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            { test: /\.tsx?$/, loader: 'babel-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        ],
    },
    devServer: {
        port: 9000,
        hot: true,
        liveReload: true,
        open: true,
        overlay: false,
        progress: false,
        stats: 'minimal',
    },
    plugins: [
        new ErrorOverlayPlugin(),
        new HtmlWebpackPlugin({ template: './public/index.html' }),
    ],
};

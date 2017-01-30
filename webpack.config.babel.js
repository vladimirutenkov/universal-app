import webpack from 'webpack';
import path from 'path';

const env = process.env.NODE_ENV || 'development';

export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'bootstrap-loader',
        './client/js/index.js',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/,
            },
            // {
            //     test: /\.(woff2?|svg)$/,
            //     loader: 'url-loader?limit=10000',
            // },
            // {
            //     test: /\.(ttf|eot)$/,
            //     loader: 'file-loader',
            // },
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports-loader?jQuery=jquery',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env) }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
};

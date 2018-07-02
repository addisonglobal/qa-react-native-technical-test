const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, '../');

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
    test: /\.jsx?$/,
    // Add every directory that needs to be compiled by Babel during the build.
    include: [
        path.resolve(appDirectory, 'index.web.js'),
        path.resolve(appDirectory, 'App.web.js'),

        // path.resolve(appDirectory, 'src'),
        path.resolve(appDirectory, 'src/components/'),
        // path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
        path.resolve(appDirectory, 'node_modules/'),

        // path.resolve(appDirectory, 'node_modules/react-navigation')
    ],
    exclude: [
        path.resolve(appDirectory, 'node_modules/react-navigation')
    ],
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            // The 'react-native' preset is recommended to match React Native's packager
            presets: ['react-native'],
            // Re-write paths to import only the modules needed by the app
            plugins: ['react-native-web']
        }
    }
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
        loader: 'url-loader',
        options: {
            name: '[name].[ext]'
        }
    }
};

const htmlLoaderConfiguration = {
    test: /\.(html)$/,
    loader: 'file-loader?name=[name].[ext]',
};

const webViewLoader = {
    test: /postMock.html$/,
    use: {
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
        },
    },
};

module.exports = {
    entry: [
        // load any web API polyfills
        // path.resolve(appDirectory, 'polyfills-web.js'),
        // your web-specific entry file
        path.resolve(appDirectory, 'index.web.js')
    ],

    // configures where the build ends up
    output: {
        filename: 'bundle.web.js',
        path: path.resolve(appDirectory, 'dist'),
        publicPath: '/dist/'
    },

    // ...the rest of your config

    module: {
        rules: [
            babelLoaderConfiguration,
            imageLoaderConfiguration,
            htmlLoaderConfiguration,
            webViewLoader
        ]
    },
    devtool: 'source-map',
    plugins: [
        // `process.env.NODE_ENV === 'production'` must be `true` for production
        // builds to eliminate development checks and reduce build size. You may
        // wish to include additional optimizations.
        new webpack.DefinePlugin({
            'Process.env': {
                NODE_ENV: JSON.stringify('development')
            },
        }),
    ],

    resolve: {
        alias: {
            'react-native': path.resolve(appDirectory, 'node_modules/react-native-web'),
            'react-native/Libraries/Renderer/shims/ReactNativePropRegistry': path.resolve(appDirectory, 'react-native-web/dist/modules/ReactNativePropRegistry'),
        },
        // If you're working on a multi-platform React Native app, web-specific
        // module implementations should be written in files using the extension
        // `.web.js`.
        extensions: ['.web.js', '.js']
    },

    devServer: {
        contentBase: "./public",
        hot: true,
        inline: true,
        historyApiFallback: true
    }
}

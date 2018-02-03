const webpack = require('webpack')
const path = require('path')
const PROD = process.env.NODE_ENV === 'production'

module.exports = {
    entry: PROD 
        ? path.resolve('./src/VuelsModal.vue')
        : path.resolve('./entry.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vuels-modal.js',
        libraryTarget: 'umd',
        library: 'vue-button-spinner',
        umdNamedDefine: true
    },
    module: {
        loaders: [
        {
            test: /\.vue$/,
            loader: "vue-loader",
            options: {
                loaders: {
                    js: {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"]
                        }
                    }, 
                    scss: 'vue-style-loader!css-loader!sass-loader',
                    sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    less: 'vue-style-loader!css-loader!less-loader'
                }
            }
        }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: PROD ? true : false,
            sourceMap: PROD ? false : true,
            mangle: PROD ? true : false,
            compress: {
                warnings: PROD ? false : true
            }
        })
    ]
}

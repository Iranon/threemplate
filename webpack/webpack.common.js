const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    devtool: 'source-map',
    plugins: [
        // new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../src/assets'),
                    noErrorOnMissing: true
                }
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true
        }),
        new MiniCSSExtractPlugin()
    ],
    module: {
        rules: [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            // JS|TS
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ]
            },

            // CSS
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },

            // Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },

            // Models
            {
                test: /\.(glb|gltf|fbx|obj)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/models/'
                        }
                    }
                ]
            },

            // Shaders
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: [
                    'raw-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
      }
};

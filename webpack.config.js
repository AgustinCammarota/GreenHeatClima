const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const Dotenv = require("dotenv-webpack");
const I18nPlugin = require("@zainulbr/i18n-webpack-plugin");
const languages = {
    en: require("./src/locales/en.json"),
    es: require("./src/locales/es.json")
};

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true
    },
    devtool: "source-map",
    mode: "production",
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|webp|ico)$/i,
                type: "asset/resource",
            },
            {   test: /\.svg/,
                type: "asset/inline"
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimeType: "application/font-woff",
                        name: "[name].[contenthash].[ext]",
                        outputPath: "./assets/fonts/",
                        publicPath: "../assets/fonts/",
                        esModule: false
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html",
            favicon: "./favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].[contenthash].css"
        }),
        new Dotenv(),
        new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: false,
              generateStatsFile: true
          }),
        new I18nPlugin(languages["es"])
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new HtmlMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.squooshMinify,
                    options: {
                        encodeOptions: {
                            mozjpeg: {
                                quality: 100,
                            },
                            webp: {
                                lossless: 1,
                            },
                            avif: {
                                cqLevel: 0,
                            },
                        },
                    },
                },
            }),
        ]
    }
};
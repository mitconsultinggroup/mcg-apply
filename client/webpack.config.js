/*
 * Environment and Imports
*/
var env = process.env.NODE_ENV.trim();
var devMode = env != "production";

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const here = p => path.join(__dirname, p);

/*
 * Entry
 */
const entry = {
    main: [here("index.js")]
};

/*
 * Output
 */
const output = {
    path: here("../public/dist"),
    filename: "[name].bundle.js"
};

/*
 * Module
 */
const modules = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        },
        {
            test: /\.(sa|sc|c)ss$/,
            exclude: [/node_modules/],
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'sass-loader'
                }
            ]

        }
    ]
};

/*
 * Plugins
 */
const plugins = [
    new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[hash].css",
        chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    }),
    new HtmlWebpackPlugin({
        template: here("../public/index.html")
    }),
];

// Enabling HMR only if dev mode is enabled
if (devMode) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
}



/*
 * Exporting configuration
 */
var configObject = {
    mode: env,
    entry,
    devServer: {
        port: 3000,
        hot: "only",
        proxy: {
            "/api": "http://localhost:5000"
        }
    },
    devtool: "inline-cheap-module-source-map",
    output,
    resolveLoader: {
        // Configure how Webpack finds `loader` modules.
        modules: [here("../node_modules")]
    },
    module: modules,
    plugins
};

module.exports = (env, argv) => {
    configObject.mode = argv.mode;
    return configObject
};

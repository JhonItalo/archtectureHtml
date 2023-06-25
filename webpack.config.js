const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "scripts.min.js",
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: "babel-loader",
                exclude: ["/node_modules/", "/config/", "/modules/", "/storage/", "/vendor/"],
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
            {
                test: /\.scss/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: ["...", new CssMinimizerPlugin()],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.min.css",
        }),
    ],
};

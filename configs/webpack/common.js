const { resolve } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    context: resolve(__dirname, "../../src"),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader", "source-map-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "awesome-typescript-loader"],
            },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.(scss|sass)$/,
                loaders: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }, "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
                    "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
                ],
            },
            {
                test: /\.(ttf|eot|svg|png|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: { name: "./img/[name].[ext]" },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CheckerPlugin(),
        new HtmlWebpackPlugin({ template: "templates/index.html.ejs" }),
        new MiniCssExtractPlugin({
            filename: "./main.css",
        }),
    ],
    externals: {
        react: "React",
        "react-dom": "ReactDOM",
    },
    performance: {
        hints: false,
    },
};

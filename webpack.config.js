const webpack = require("webpack");
const createVariants = require('parallel-webpack').createVariants;
const path = require("path");
const pkg = require('./package.json');
const mode = 'production';

const timeStamp = new Date().toLocaleTimeString();
const date = new Date();
const banner = `
${pkg.name} v${pkg.version}       ${date}
by ${pkg.author.name}    ${pkg.author.email}
${pkg.homepage}

Copyright: 2019 André Storhaug
License: ${pkg.license}

Build: [hash]
`;

let umdConfig = {
    mode: mode,
    entry: "./build/merge.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "diffuse.js",
        library: "DIFFUSE",
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["babel-preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({banner: banner}),
    ]
};

module.exports = umdConfig;

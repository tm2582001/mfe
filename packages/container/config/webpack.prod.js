const {merge} = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js',
        //? publicPath:"/container/latest/"  this is needed with current s3 setup but I am deploying to netlify
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                // marketing: `marketing@${domain}/marketing/remoteEntry.js`
                marketing: `marketing@${domain}/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);
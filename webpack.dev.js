const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	//devtool:"none", // removes eval() from dist
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [new HtmlWebPackPlugin({ template: "./src/template.html" })],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader" 
                ]
			}
		]
	}
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: 'spacious.css',
});

module.exports = {
	context: __dirname,
	entry: './spacious.scss',
	output: {
		filename: 'spacious.css'
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: extractSass.extract({
				use: [{
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			})
		}]
	},
	plugins: [
		extractSass
	]
};

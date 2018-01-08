var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	// définition des points d'entrée
	// il est possible de définir plusieurs points d'entrée
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin()
	],
	module: {
		rules: [
			{test: /\.(html)$/, use: {loader: 'html-loader'}},
			{test: /\.css$/,
		      use: [
		        {
		          loader: "style-loader"
		        },
		        {
		          loader: "css-loader"
		        }
		      ]
		  },

			{ test: /\.ts$/, use: 'ts-loader' },
			{test: /\.(jpe?g|png|gif|svg)$/i,
		        loaders: [
		            'file-loader',
		            'image-webpack-loader',
		        ]
		    },
		    {
	        	test: /\.(ico|png|svg|eot|ttf|woff|woff2)?$/,
                loader: 'url-loader'
            }
		]
	}
}
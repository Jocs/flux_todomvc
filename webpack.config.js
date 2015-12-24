module.exports = {
	entry: './js/app.js',
	output: {
		path: './js/',
		filename:'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader:'babel',
			query: {
				presets:['react', 'es2015', 'stage-0', 'stage-1', 'stage-2', 'stage-3']
			}
		}]
	}
};
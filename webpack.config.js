const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function (env, argv) {
  const mode = argv ? argv.mode : ''; // Lese aus, welche mode beim Aufruf über die Kommandozeile gesetzt wurde

  return {
	// Erzeuge eine map-Datei. Inline ist etwas schneller und deshalb gut für die Entwicklung.
	devtool: mode === 'production' ? 'source-map' : 'inline-source-map',
	entry: {
  	app: `${__dirname}/js/src/app.js`,
	},
	output: {
  	path: `${__dirname}/js/dist`, // Pfad zum Ordner, in dem die gebündelten Dateien gespeichert werden
  	filename: `[name].build.js`, // [path] wird durch den gewählten Namen der Einstiegsdatei ersetzt
	},
	resolve: {
		extensions: ['', '.js', '.jsx'], // Auch .jsx-Dateien können ohne Dateiendung importiert werden
	  },
  

	plugins: [new CleanWebpackPlugin()], // Lösche alte Dateien im dist-Ordner
	module: {
  	rules: [
    	{
      	test: /\.jsx?$/, // Teste, ob die Datei mit .js aufhört oder jsx
      	exclude: /node_modules/,
      	use: [
        	{
          	loader: 'babel-loader', // Integriere Babel in Webpack
          	options: {
            	presets: [
              	['@babel/preset-env'], // Nutze die browserslist-Angabe in package.json
              	[
                	'@babel/preset-react',
                	{
                  	runtime: 'automatic', // Ab Version 17 muss man nicht mehr React in Dateien mit JSX importieren
                	},
              	],
            	],
          	},
        	},
      	],
    	},
  	],
	},
  };
};



const path = require('path');

const obj = {
	alias: {
		"@node_modules": path.resolve(__dirname, 'node_modules'),
		"@fonts": path.resolve(__dirname, 	'src/fonts'),
		"@js": path.resolve(__dirname, 	'src/js'),
		"@styles": path.resolve(__dirname, 	'src/styles'),
	}
}

module.exports = obj
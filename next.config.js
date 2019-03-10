const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
	distDir: 'dist',
	pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
	serverRuntimeConfig: {
		env: {
			foo: 'bar'
		}
	},
	publicRuntimeConfig: {}
});

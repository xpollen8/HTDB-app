module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/htdocs',
  },
	serverRuntimeConfig: {
		PROJECT_ROOT: __dirname + '/pages'
	},
}

//const CopyPlugin = require("copy-webpack-plugin")

//
//module.exports = {
//	publicRuntimeConfig: {
//		// Will be available on both server and client
//		staticFolder: '/htdb',
//	},
//	serverRuntimeConfig: {
//		PROJECT_ROOT: __dirname,
//	},
//	//target: "server",
//	//future: {
//			//webpack5: true,
//	//},
////	webpack: function (config, { dev, isServer }) {
////			// Fixes npm packages that depend on `fs` module
////			//if (!isServer) {
////					//config.resolve.fallback.fs = false
////			//}
////			// copy files you're interested in
////			//if (!dev) {
////					config.plugins.push(
////							new CopyPlugin({
////									patterns: [{ from: "./htdb/**", to: "." }],
////							})
////					)
////			//}
////
////			return config
////	},
//}

//const withConfig = require("next-config");
//module.exports = withConfig({
//  webpack(config, options) {
//		config.plugins.push(
//				new CopyPlugin({
//						//patterns: [{ from: "htdb/**", to: "." }],
//				})
//		)
//    return config;
//  }
//);

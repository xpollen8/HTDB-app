 new CopyPlugin({
 //            //patterns: [{ from: "htdb/**", to: "." }],
 //        })


const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "htdb", to: "." },
        //{ from: "other", to: "public" },
      ],
    }),
  ],
};

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    // output: {
    //     path: __dirname + 'dist',
    //     filename: 'main.js',
    // resolve: {
    //     extensions: ['.js', '.jsx']
    // },
    // libraryTarget: 'commonjs2'
    // },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
        //,
        // loaders: [
            //     {
            //       test: /\.jsx?$/,
            //       loader: 'babel',
            //       exclude: /node_modules/,
            //       query: {
            //         cacheDirectory: true,
            //         presets: ['react', 'es2015']
            //       }
            //     }


            // Recently Babel 6 was released and there was a major change: https://babeljs.io/blog/2015/10/29/6.0.0
            // {
            //     test: /\.jsx?$/,
            //     exclude: /node_modules/,
            //     use: [
            //       {
            //         loader: 'babel-loader',
            //         options: {
            //           presets: ['react']
            //         }
            //       }
            //     ],
            //   }

        // ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    mode: 'production'
};
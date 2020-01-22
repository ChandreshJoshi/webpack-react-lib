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
        //   ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    mode: 'production'
};
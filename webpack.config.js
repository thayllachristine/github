const path = require(`path`)

module.exports = {
    mode: `development`,
    entry: `./src/index.js`,
    output: {
        path: path.resolve(__dirname, `public`),
        filename: `bundle.js`
    },

    devServer: {
        inline: true,
        contentBase: `./public`,
        port: 3333,
    },

    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    `style-loader`,
                    `css-loader`,
                    `sass-loader`
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: `babel-loader`,
                query: {
                    presets: [`es2015`, `react`]
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                loader: `file-loader`
            }
        ]
    }
}
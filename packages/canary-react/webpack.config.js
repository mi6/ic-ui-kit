const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }, 
            // Needed to load up fonts from fonts package
            { 
                test: /\.(woff|woff2)$/, 
                use: [ 'url-loader?limit=100000']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}
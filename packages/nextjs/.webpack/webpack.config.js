const path = require('path');

module.exports = {
    context: path.join(__dirname, '..'),
    output: {
        path: path.join(__dirname, '..', 'dist')
    },
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
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}
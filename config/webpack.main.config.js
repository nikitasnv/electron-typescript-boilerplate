const rules = require('./webpack.rules');
const resolve = require('./webpack.resolve');

module.exports = {
    devtool: 'source-map',
    target: 'electron-main',
    entry: './src/main/main.ts',
    node: {
        __dirname: true
    },
    module: {
        rules
    },
    resolve
};
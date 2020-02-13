const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const resolve = require('./webpack.resolve');

resolve.alias['react-dom'] = '@hot-loader/react-dom';

rules.push({
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
    module: {
        rules,
    },
    plugins: plugins,
    resolve
};

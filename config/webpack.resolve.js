const path = require('path');

function srcPaths(src) {
    return path.join(__dirname, src);
}

module.exports = {
    alias: {
        '@main': srcPaths('src/main'),
        '@models': srcPaths('src/models'),
        '@renderer': srcPaths('src/renderer')
    },
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
};
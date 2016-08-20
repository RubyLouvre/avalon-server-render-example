var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        vm: './src/vm'
    },
    output: {
        path: path.join( __dirname, 'dist'),
        filename: '[name].js'
    }, //页面引用的文件
    
 
    resolve: {
        extensions: ['.js', '', '.css']
    }
}

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = {
    mode: 'production',
    devtool: '#source-map',
    entry: './src/index.js',
    output: {
        filename: 'vue-hls-player.js',
        path: path.join(__dirname, '../lib'),
        chunkFilename: '[id].js',
        libraryExport: 'default',
        publicPath: '../lib/',
        library: 'VUEHLSPLAYER',
        libraryTarget: 'commonjs2',
    },
    externals: {
        'hls.js': {
          amd: 'hls.js',
          commonjs: 'hls.js',
          commonjs2: 'hls.js',
          root: 'Hls'
        },
        'vue':  {
          amd: 'vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          root: 'Vue'
        },
      },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },{
                test: /\.css$/,
                use: ['style-loader','css-loader'] 
            },{
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
                
            },{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },{
                test: /\.(gif|jpg|jpeg|png)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: 'images/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
module.exports = config

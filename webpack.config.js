const { merge } = require('webpack-merge') //引入merge方法，用于合并对象

const devConfig = require('./config/webpack.dev.js')
const proConfig = require('./config/webpack.pro.js')
const comConfig = require('./config/webpack.common.js')

module.exports = (env) => {
    switch (true) {
        case env.dev: //当传入的参数是--env dev时（env是个对象，其中含dev：true）
            return merge(comConfig, devConfig) //合并对象

        case env.pro:
            return merge(comConfig, proConfig)

        default:
            return new Error('error')
    }
}

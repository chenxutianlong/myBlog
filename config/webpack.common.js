const path = require('path')
const htmlWp = require('html-webpack-plugin')

module.exports = {
	entry: { //设为对象可以使[name]获取到名字，便于output定义文件名
		mainReact: './src/conponent01/index.jsx',
		otherReact: './src/conponent02/index.jsx'
	},

	output: {
		path: path.resolve(__dirname, '../dist'),//拼写输出路径
		clean: true, //打包后清除dist中不必要的文件
		publicPath: '/dist/' //指定HTML引用文件的前缀，因为是服务端，所以/代表请求路径，后面的dist就是文件夹，就可以了
	},

	// plugins: [
	// 	new htmlWp({ //实例化html-webpack-plugin插件，传入对象
	// 		template: './modules/modules01.html',//定义模板的路径
	// 		filename: '../views/test01.html',//定义生成的html的文件名及路径
	// 		inject: 'body' //将script放在body中
	// 	})
	// ],

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, //定义文件名后缀js或jsx，使用bable-loder解析
				exclude: /node_modules/, //排除指定文件夹
				use: "babel-loader"
			},
			{
				test: /\.(css|less)$/,
				use: ['style-loader', 'css-loader', 'less-loader'] //从右至左进行解析，style-loader的意义是将style挂在页面上
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: { //缓存第三方文件，即将第三方文件抽离，并定义一个死名字，这样浏览器刷新就不会重新加载它了
				disanfang: { //这里的属性名可以起任意名字，打包后的结果就是该名字.js文件
					test: /[\\/]node_modules[\\/]/,
					name: 'disanfang',
					chunks: 'all'
				}
			}
		}
	}
}
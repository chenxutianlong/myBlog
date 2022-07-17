const express = require('express');
//引入express模块
const opn = require('opn');
const fs = require('fs');
const path = require('path');
//引入核心模块
const homeRouter = require('./router/homeRouter')
const noteRouter = require('./router/noteRouter')
//引入自定义文件

const app = express()

app.engine('html', require('express-art-template'));//配置模板引擎

app.use((req, res, next) => {
	const fedReg = new RegExp(/^\/fed/, 'i')
	const fedUrl = req.url

	if (fedUrl.search(fedReg) > -1) {

		return fs.readFile(path.resolve(__dirname, './views/fed.html'), (err, data) => {
			//如果不return，会先执行next然后报错
			if (err) {
				return res.send('读取错误')
			}
			res.end(data)
		})
	}

	next();
})
app.use(express.static(__dirname))//静态文件中间件
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(homeRouter)//引入主页路由
app.use(noteRouter)//引入note路由

app.listen('1027', () => {
	opn('http://localhost:1027/')
	console.log('服务启动了')
})
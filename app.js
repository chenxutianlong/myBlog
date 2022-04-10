const opn = require('opn')
const express = require('express')

const app = express()

app.use(express.static(__dirname))
app.engine('html', require('express-art-template'));

app.get('/', (req, res) => {
	res.render('test01.html')
})

app.listen('1027', () => {
	opn('http://localhost:1027/')
	console.log('服务启动了')
})
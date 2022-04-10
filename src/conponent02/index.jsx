import React from 'react'
import ReactDom from 'react-dom'
import './root.less'

class App extends React.Component{
	render() {
		return <div className='heihei'>陈旭测试项目333</div>
	}
}

ReactDom.render(<App/>, document.getElementById('root1'))
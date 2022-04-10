import React from 'react'
import ReactDom from 'react-dom'
import './root.less'

class C extends React.Component {
	render() {
		let a = 0
		let b = (<div>hahahaha</div>)
		let d
		let e
		let c = d = e = a
		console.log(c)
		return (
			<div>
				{c}
				{d}
				{e}
			</div>
		)
	}

}

class A extends React.Component {
	render() {
		return <div className='haha' {...this.props}>{this.props.children}</div>
	}
}


class B extends React.Component {
	render() {
		var test2 = React.createElement('div', { onClick: () => { console.log('test2被点击了') } }, '陈旭创造组件查看是否更新')
		var test3 = React.cloneElement(test2, { onClick: () => { console.log('test3被点击了') } }, '陈旭创造的div被克隆')
		var test = React.cloneElement(<A />, { onClick: () => { console.log('被点击了') } }, <C />)
		console.log(test)
		console.log(test2)
		console.log(test3)
		console.log(this)
		return (
			<div>
				{test}
				{test2}
				{test3}
			</div>
		)
	}
}
ReactDom.render(<B />, document.getElementById('root'))
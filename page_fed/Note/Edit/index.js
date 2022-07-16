import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './edit.less'

class Edit extends Component {

    editContent = (event) => {
        console.log(event.target.innerHTML)
    }

    editSubmit = () => {
        const getContent = this.editDom.innerHTML
    }

    render() {
        return (
            <div>
                <div className='edit-layout' contentEditable ref={(dom) => { this.editDom = dom }}></div>
                <button className='edit-submit edit-submit' onClick={this.editSubmit}>提交</button>
                <button className='edit-submit edit-store'>暂存</button>
            </div>
        )
    }
}

export default class index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/fed/note/edit/:name' component={Edit}></Route>
                </Switch>
            </div>
        )
    }
}

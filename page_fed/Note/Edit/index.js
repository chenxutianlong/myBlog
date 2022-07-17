import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './edit.less'

const haha = '<div>haha<div>'

class Edit extends Component {

    editContent = (event) => {
        console.log(event.target.innerHTML)
    }

    editSubmit = () => {
        const getContent = this.editDom.innerHTML;
        const getNotename = window.location.href.split('/');
        const nameLen = getNotename.length - 1;
        const url = `/interface/note/${getNotename[nameLen]}`
        console.log(url)

        axios({
            url,
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            data: { getContent }
        }).then(res => {
            // window.location.href = `/fed/note/${res.noteId}`
        })
    }

    render() {
        return (
            <div>
                <div className='edit-layout' contentEditable ref={(dom) => { this.editDom = dom }}></div>
                <button className='edit-submit edit-submit' onClick={this.editSubmit}>提交</button>
                <button className='edit-submit edit-store'>暂存</button>
                <div dangerouslySetInnerHTML={{ __html: haha }} ></div>
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

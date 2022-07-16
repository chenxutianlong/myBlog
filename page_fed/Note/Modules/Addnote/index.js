import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                <a className='addnote' href={`/fed/note/edit/${this.props.name}`}>新增笔记</a>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Addnote from '../../Modules/Addnote'

export default class index extends Component {
    render() {
        return (
            <div>
                <Addnote name='node'></Addnote>
                <div>我是Node页</div>
            </div>
        )
    }
}

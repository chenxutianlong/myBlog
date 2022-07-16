import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <NavLink activeClassName='diy-link-active' className='diy-link' {...this.props}></NavLink >
        )
    }
}

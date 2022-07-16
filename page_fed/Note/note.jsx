import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Edit from './Edit'
import Home from './Home'
import './note.less'

export default class Mynote extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/fed/note/home' component={Home}></Route>
                    <Route path='/fed/note/edit' component={Edit}></Route>
                    <Redirect to='/fed/note/home'></Redirect>
                </Switch>
            </div>
        )
    }
}

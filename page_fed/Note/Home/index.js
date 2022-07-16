import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../../Header'
import Diylink from '../../../utils/fed/DiyLink'
import Note_node from './Note_node'
import Note_react from './Note_react'

export default class index extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="link-layout">
                    <Diylink to='/fed/note/home/node'>Node笔记</Diylink>
                    <Diylink to='/fed/note/home/react'>React笔记</Diylink>
                </div>
                <Switch>
                    <Route path='/fed/note/home/node' component={Note_node}></Route>
                    <Route path='/fed/note/home/react' component={Note_react}></Route>
                    <Redirect to='/fed/note/home/node'></Redirect>
                </Switch>
            </div>
        )
    }
}

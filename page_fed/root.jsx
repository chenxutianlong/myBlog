import React from 'react'
import ReactDom from 'react-dom'
import { Link, Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Home from './Home/home.jsx'
import Mynote from './Note/note.jsx'

class Root extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/fed/home' component={Home}></Route>
                        <Route path='/fed/note' component={Mynote}></Route>
                        <Redirect to='/fed/home'></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Root
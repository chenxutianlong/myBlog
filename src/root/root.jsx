import React from 'react'
import ReactDom from 'react-dom'
import { Link, Route, BrowserRouter, Switch, Redirect, HashRouter } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Mynote from './MyNote/Mynote.jsx'

class Root extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Link className='rootLink' to='/fed/home'>点击去Home</Link>
                    <Link className='rootLink' to='/fed/mynote'>点击去Mynote</Link>
                    <Switch>
                        <Route path='/fed/home' component={Home}></Route>
                        <Route path='/fed/mynote' component={Mynote}></Route>
                        <Redirect to='/fed/home'></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Root
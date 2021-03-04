import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Services from './Services/Services'
import SignUp from './SignUp/SignUp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function Index() {
    return (
            <Router>
            <Navbar/>
            <Switch>
            <Route exact path='/'><Home/></Route>
            <Route path='/services'><Services/></Route>
            <Route path='/sign'><SignUp/></Route>
            </Switch>
            </Router>
    )
}

export default Index

import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function Index() {
    return (
            <Router>
            {
                //<Navbar/>
            }
            <Footer/>
                <Switch>
                    <Route></Route>
                </Switch>
            </Router>
    )
}

export default Index

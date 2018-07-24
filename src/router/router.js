import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
// import { BrowserRouter } from "react-router-dom"
import Home from "./../pages/home/home"
import Login from "./../pages/login/login"
import App from "./../pages/app/App"
import Welcome from "../pages/welocome";
export default class Routes extends Component {
    render() {
        return (

            <Router>
                <App>
                    <Switch>
                        <Route path="/login" exact component={Login} />
                        <Route exact  component={Home}>
                            <Route path="/welcome" component={Welcome}></Route>
                            {/* <Route path="messages/:id" component={Message} /> */}
                        </Route>
                    </Switch>
                </App>
            </Router>
        )
    }
}
import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Home from "views/home/index"
import Login from "views/home/Login"
import Admin from "views/home/Admin"
import User from "views/home/User"
import Weather from "./views/home/weather/index"
import AuthGuard from "components/AuthGuard"
import NoAuthGuard from "components/NoAuthGuard"

export default () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <NoAuthGuard>
                    <Login />
                </NoAuthGuard>
            </Route>
            <Route exact path="/admin">
                <AuthGuard role="admin">
                    <Admin />
                </AuthGuard>
            </Route>
            <Route exact path="/user">
                <AuthGuard role="user" >
                    <User />
                </AuthGuard>
            </Route>
            <Route exact path="/weather/:locationId?">
                <AuthGuard  role="user">
                    <Weather />
                </AuthGuard>
            </Route>
        </Switch>
    </Router>
)

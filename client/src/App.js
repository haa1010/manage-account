import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';

import SignUp from './components/SignUp/SignUp';
import User from "./components/User/User";
import Login from "./components/Login/Login";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import NotFound from "./components/NotFound/NotFound";

import './App.css';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/login"/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/users/:userId">
                    <User/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
            <Footer/>
        </React.Fragment>
    );
};

export default App;

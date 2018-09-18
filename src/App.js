import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Users from './components/users';
import CreateUser from "./components/create";
import Navig from "./components/Nav";
import PNF from "./components/pnf";
import ShowUser from './components/view';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {

  render() {
    return (
            <div>
                <Navig />
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <PrivateRoute path='/users' exact render = {
                        ({history}) => <Users history={history}/>
                    } />
                    <PrivateRoute path='/create' render = {
                        ({history}) => <CreateUser history = {history}/>
                    }/>
                    <PrivateRoute path='/view/:id' render = {
                        ({match}) => <ShowUser match = {match}/>
                    }/>
                    <Route component={PNF} />
                </Switch>
            </div>
    );
  }
}


export default App;
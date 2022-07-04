import React, {Component} from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {FetchData} from './components/FetchData';
import {Counter} from './components/Counter';
import Perfil from "./components/Perfil";
import About from "./components/About";

import './custom.css'
import Login from "./components/login";
import Todo from "./components/todo";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home}/>
                <Route path='/counter' component={Counter}/>
                <Route path='/fetch-data' component={FetchData}/>
                <Route path='/about' component={About}/>
                <Route path='/perfil' component={Perfil}/>
                <Route path='/login' component={Login}/>
                <Route path='/todo' component={Todo}/>
                
            </Layout>
        );
    }
}

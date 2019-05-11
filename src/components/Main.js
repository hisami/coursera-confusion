import React, {Component} from 'react';
import Menu from './Menu'
import DishDetail from './DishDetail'
import {DISHES} from "../shared/dishes";
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dishes: DISHES,
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home/>
            )
        }

        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;

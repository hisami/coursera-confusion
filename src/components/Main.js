import React, {Component} from 'react';
import Menu from './Menu'
import {DISHES} from "../shared/dishes";
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addComment} from "../redux/ActionCreator";

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (name) => dispatch(addComment(name))
})

class Main extends Component {
    constructor(props) {
        super(props)
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
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} addComment={this.props.addComment}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

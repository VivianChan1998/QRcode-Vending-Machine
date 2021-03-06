import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import { Redirect } from 'react-router'
import NavBar from './NavBar';
import Choose from './Choose'
import Title from './Title'
import '../App.css'

class Home extends Component {
    render() {
        return(
            <div className="App_container">
                <NavBar />
                <Switch>
                    <Route exact path='/' render={() => (
                        <Redirect to='/Home'></Redirect>
                    )} />
                    <Route path='/Home' component={Title}></Route>
                    <Route path='/Choose' component={Choose}/>
                </Switch>
            </div>
        )
    }
}

export default Home;
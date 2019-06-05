import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import { Redirect } from 'react-router'
import NavBar from './NavBar';
import Choose from './Choose'

class Home extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <Switch>
                    <Route path='/Home' render={() => (
                        <Redirect to='/'></Redirect>
                    )} />
                    <Route path='/Choose' component={Choose}/>
                </Switch>
            </div>
        )
    }
}

export default Home;
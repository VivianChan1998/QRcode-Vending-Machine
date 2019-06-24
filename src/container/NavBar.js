import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavSpan from '../components/NavSpan'
import '../Nav.css'


class NavBar extends Component {
    render() {
        return(
            <div className="NavBar_container">
                    <NavSpan destination='Home' />
                    <NavSpan destination='Choose' />
            </div>
        )
    }
}

export default NavBar
import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavSpan from '../components/NavSpan'


class NavBar extends Component {
    render() {
        return(
            <div>
                    <NavSpan destination='Home' />
                    <NavSpan destination='Choose' />
            </div>
        )
    }
}

export default NavBar
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import '../Nav.css'

class NavSpan extends Component {
    constructor(props){
        super(props);
        this.state={
            directory: '/' + this.props.destination,
            text: this.props.destination
        }
    }
    render() {
        return(
            <span className="Nav_span">
                <NavLink to={this.state.directory} className="Nav_link">
                    {this.state.text}
                </NavLink>
            </span>
        )
    }
}

export default NavSpan;